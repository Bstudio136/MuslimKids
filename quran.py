#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Muslim Kids — Téléchargeur de récitations coraniques (PHASE 1)
Al-Fatiha + Juz 'Amma (sourates 78 à 114)
Lance :  python quran.py
"""

import os
import sys
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

BASE_DIR = Path(__file__).resolve().parent
OUTPUT_DIR = str(BASE_DIR / "audio" / "surahs")

# (numéro, nom_latin, nombre_de_versets)
SURAH_LIST = [
    # Al-Fatiha
    (1, "Al-Fatiha", 7),
    # Juz 'Amma (78-114)
    (78, "An-Naba", 40),
    (79, "An-Nazi'at", 46),
    (80, "'Abasa", 42),
    (81, "At-Takwir", 29),
    (82, "Al-Infitar", 19),
    (83, "Al-Mutaffifin", 36),
    (84, "Al-Inshiqaq", 25),
    (85, "Al-Buruj", 22),
    (86, "At-Tariq", 17),
    (87, "Al-A'la", 19),
    (88, "Al-Ghashiya", 26),
    (89, "Al-Fajr", 30),
    (90, "Al-Balad", 20),
    (91, "Ash-Shams", 15),
    (92, "Al-Layl", 21),
    (93, "Ad-Duha", 11),
    (94, "Ash-Sharh", 8),
    (95, "At-Tin", 8),
    (96, "Al-'Alaq", 19),
    (97, "Al-Qadr", 5),
    (98, "Al-Bayyina", 8),
    (99, "Az-Zalzala", 8),
    (100, "Al-'Adiyat", 11),
    (101, "Al-Qari'a", 11),
    (102, "At-Takathur", 8),
    (103, "Al-'Asr", 3),
    (104, "Al-Humaza", 9),
    (105, "Al-Fil", 5),
    (106, "Quraysh", 4),
    (107, "Al-Ma'un", 7),
    (108, "Al-Kawthar", 3),
    (109, "Al-Kafirun", 6),
    (110, "An-Nasr", 3),
    (111, "Al-Masad", 5),
    (112, "Al-Ikhlas", 4),
    (113, "Al-Falaq", 5),
    (114, "An-Nas", 6),
]

FULL_SURAH_URL = "https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/{n}.mp3"
VERSE_URL      = "https://everyayah.com/data/Alafasy_128kbps/{sss}{vvv}.mp3"

# Versets utilisés par les nouvelles leçons intégrées au site.
# Ils sont téléchargés séparément pour éviter de récupérer des sourates entières inutiles.
EXTRA_VERSES = [
    (17, 9), (17, 23), (33, 70),
    (49, 10), (49, 11), (49, 12),
    (73, 4),
]


def pad3(n): return str(n).zfill(3)

def download(url, path, label):
    if os.path.isfile(path) and os.path.getsize(path) > 0:
        return f"⏭️  {label}"
    try:
        with urllib.request.urlopen(url, timeout=60) as r:
            data = r.read()
        if not data:
            raise ValueError("réponse audio vide")
        with open(path, "wb") as f:
            f.write(data)
        return f"✅ {label} ({len(data)//1024} Ko)"
    except Exception as e:
        return f"❌ {label} → {e}"

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print(f"📁 Dossier : {OUTPUT_DIR}/")
    print(f"🕌 {len(SURAH_LIST)} sourates\n")

    jobs = []
    for num, name, verses in SURAH_LIST:
        full_path = os.path.join(OUTPUT_DIR, f"{pad3(num)}_full.mp3")
        jobs.append((FULL_SURAH_URL.format(n=num), full_path, f"{name} — complète"))
        for v in range(1, verses + 1):
            verse_path = os.path.join(OUTPUT_DIR, f"{pad3(num)}_{pad3(v)}.mp3")
            verse_url = VERSE_URL.format(sss=pad3(num), vvv=pad3(v))
            jobs.append((verse_url, verse_path, f"{name} — v.{v}"))

    existing_jobs = {os.path.basename(path) for _, path, _ in jobs}
    for surah_num, verse_num in EXTRA_VERSES:
        filename = f"{pad3(surah_num)}_{pad3(verse_num)}.mp3"
        if filename in existing_jobs:
            continue
        verse_url = VERSE_URL.format(sss=pad3(surah_num), vvv=pad3(verse_num))
        verse_path = os.path.join(OUTPUT_DIR, filename)
        jobs.append((verse_url, verse_path, f"Sourate {surah_num} — v.{verse_num}"))

    if "--extra-only" in sys.argv:
        extra_names = {f"{pad3(surah)}_{pad3(verse)}.mp3" for surah, verse in EXTRA_VERSES}
        jobs = [job for job in jobs if os.path.basename(job[1]) in extra_names]

    print(f"📥 {len(jobs)} fichiers à télécharger (5 threads)...\n")

    with ThreadPoolExecutor(max_workers=5) as pool:
        futures = {pool.submit(download, u, p, l): l for u, p, l in jobs}
        for i, fut in enumerate(as_completed(futures), 1):
            print(f"  [{i}/{len(jobs)}] {fut.result()}")

    print(f"\n✨ Terminé ! Fichiers dans {OUTPUT_DIR}/")


if __name__ == "__main__":
    main()
