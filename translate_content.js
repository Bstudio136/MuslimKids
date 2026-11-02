// One-time generator for offline UI learning-content translations.
// Sends the French curriculum strings to Google Translate's public web endpoint.
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = __dirname;
const context = {};
vm.createContext(context);
vm.runInContext(
  fs.readFileSync(path.join(root, "data.js"), "utf8") +
    ";globalThis.TRANSLATION_SOURCE={MODULES,BADGES,AVATARS,SHOP_ITEMS,LEVEL_TITLES};",
  context
);

const excludedKeys = new Set([
  "id", "icon", "emoji", "arabic", "tts", "audio", "audioTracks", "translit",
  "nameArabic", "nameLatin", "surahNumber", "versesCount", "correct", "n", "type",
  "url", "audio", "data-i"
]);
const values = new Set();

function collect(value, key = "") {
  if (typeof value === "string") {
    if (excludedKeys.has(key) || /^https?:\/\//i.test(value) || /^audio\//i.test(value)) return;
    if (/\p{Script=Arabic}/u.test(value) || !/[\p{L}]/u.test(value)) return;
    values.add(value);
    return;
  }
  if (Array.isArray(value)) {
    for (const item of value) collect(item, key);
    return;
  }
  if (value && typeof value === "object") {
    for (const [childKey, childValue] of Object.entries(value)) collect(childValue, childKey);
  }
}

for (const value of Object.values(context.TRANSLATION_SOURCE)) collect(value);
const sourceStrings = [...values];

function splitBatches(items, maxChars = 3400) {
  const batches = [];
  let current = [];
  let chars = 0;
  for (const item of items) {
    const cost = item.value.length + 24;
    if (current.length && chars + cost > maxChars) {
      batches.push(current);
      current = [];
      chars = 0;
    }
    current.push(item);
    chars += cost;
  }
  if (current.length) batches.push(current);
  return batches;
}

async function translateBatch(batch, target) {
  const markers = new Map(batch.map((value, index) => [value.index, `QZX${String(value.index).padStart(6, "0")}XQZ`]));
  const body = batch.map(value => `${markers.get(value.index)}\n${value.value}`).join("\n\n");
  const params = new URLSearchParams({ client: "gtx", sl: "fr", tl: target, dt: "t", q: body });
  const response = await fetch(`https://translate.googleapis.com/translate_a/single?${params}`);
  if (!response.ok) throw new Error(`Translation API ${response.status} (${target})`);
  const payload = await response.json();
  const translated = (payload[0] || []).map(segment => segment[0] || "").join("");
  const found = [...translated.matchAll(/QZX(\d{6})XQZ/g)];
  if (found.length !== batch.length) throw new Error(`Lost translation markers: expected ${batch.length}, received ${found.length}`);

  const result = {};
  for (let i = 0; i < found.length; i++) {
    const start = found[i].index + found[i][0].length;
    const end = i + 1 < found.length ? found[i + 1].index : translated.length;
    const value = translated.slice(start, end).replace(/^\s+|\s+$/g, "");
    const sourceIndex = Number(found[i][1]);
    result[sourceStrings[sourceIndex]] = value;
  }
  return result;
}

async function main() {
  const output = {};
  const indexed = sourceStrings.map((value, index) => ({ value, index }));
  const batches = splitBatches(indexed);
  for (const target of ["en", "tr"]) {
    output[target] = {};
    for (let i = 0; i < batches.length; i++) {
      Object.assign(output[target], await translateBatch(batches[i], target));
      process.stdout.write(`${target}: ${i + 1}/${batches.length} batches\n`);
      await new Promise(resolve => setTimeout(resolve, 250));
    }
  }

  const file = path.join(root, "content_translations.js");
  fs.writeFileSync(file, `const CONTENT_TRANSLATIONS = ${JSON.stringify(output, null, 2)};\n`, "utf8");
  console.log(`Wrote ${Object.keys(output.en).length} English and ${Object.keys(output.tr).length} Turkish strings to ${file}`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
