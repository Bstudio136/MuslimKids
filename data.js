/* =========================================================
   Muslim Kids — Données pédagogiques PHASE 1
   - 25 prophètes
   - 30+ du'ā du quotidien
   - 99 Noms d'Allah
   - Juz 'Amma (sourates 78-114)
   ========================================================= */

const MODULES = [
  /* ============ 1. LETTRES ARABES ============ */
  {
    id: "arabic",
    emoji: "🔤",
    name: "Lettres arabes",
    description: "Les 28 lettres avec leurs formes et exemples",
    activities: [
      {
        type: "flash",
        id: "arabic-flash",
        title: "Les 28 lettres détaillées",
        icon: "📖",
        cards: [
          { arabic: "ا", tts: "أَلِف", audio: "alif", translit: "Alif", meaning: "Son « a » long",
            forms: { isolated: "ا", initial: "ا", medial: "ـا", final: "ـا" },
            example: { word: "أَرْض", translit: "arḍ", meaning: "terre" } },
          { arabic: "ب", tts: "بَاء", audio: "ba", translit: "Ba", meaning: "Son « b »",
            forms: { isolated: "ب", initial: "بـ", medial: "ـبـ", final: "ـب" },
            example: { word: "بَيْت", translit: "bayt", meaning: "maison" } },
          { arabic: "ت", tts: "تَاء", audio: "ta", translit: "Ta", meaning: "Son « t »",
            forms: { isolated: "ت", initial: "تـ", medial: "ـتـ", final: "ـت" },
            example: { word: "تِين", translit: "tīn", meaning: "figue" } },
          { arabic: "ث", tts: "ثَاء", audio: "tha", translit: "Tha", meaning: "Son « th »",
            forms: { isolated: "ث", initial: "ثـ", medial: "ـثـ", final: "ـث" },
            example: { word: "ثَلَاثَة", translit: "thalātha", meaning: "trois" } },
          { arabic: "ج", tts: "جِيم", audio: "jim", translit: "Jim", meaning: "Son « j »",
            forms: { isolated: "ج", initial: "جـ", medial: "ـجـ", final: "ـج" },
            example: { word: "جَمَل", translit: "jamal", meaning: "chameau" } },
          { arabic: "ح", tts: "حَاء", audio: "ha", translit: "Ha", meaning: "Son « h » profond",
            forms: { isolated: "ح", initial: "حـ", medial: "ـحـ", final: "ـح" },
            example: { word: "حَمْد", translit: "ḥamd", meaning: "louange" } },
          { arabic: "خ", tts: "خَاء", audio: "kha", translit: "Kha", meaning: "Son « kh »",
            forms: { isolated: "خ", initial: "خـ", medial: "ـخـ", final: "ـخ" },
            example: { word: "خُبْز", translit: "khubz", meaning: "pain" } },
          { arabic: "د", tts: "دَال", audio: "dal", translit: "Dal", meaning: "Son « d »",
            forms: { isolated: "د", initial: "د", medial: "ـد", final: "ـد" },
            example: { word: "دَار", translit: "dār", meaning: "demeure" } },
          { arabic: "ذ", tts: "ذَال", audio: "dhal", translit: "Dhal", meaning: "Son « dh »",
            forms: { isolated: "ذ", initial: "ذ", medial: "ـذ", final: "ـذ" },
            example: { word: "ذَهَب", translit: "dhahab", meaning: "or" } },
          { arabic: "ر", tts: "رَاء", audio: "ra", translit: "Ra", meaning: "Son « r » roulé",
            forms: { isolated: "ر", initial: "ر", medial: "ـر", final: "ـر" },
            example: { word: "رَبّ", translit: "rabb", meaning: "Seigneur" } },
          { arabic: "ز", tts: "زَاي", audio: "zay", translit: "Zay", meaning: "Son « z »",
            forms: { isolated: "ز", initial: "ز", medial: "ـز", final: "ـز" },
            example: { word: "زَيْت", translit: "zayt", meaning: "huile" } },
          { arabic: "س", tts: "سِين", audio: "sin", translit: "Sin", meaning: "Son « s »",
            forms: { isolated: "س", initial: "سـ", medial: "ـسـ", final: "ـس" },
            example: { word: "سَمَاء", translit: "samā'", meaning: "ciel" } },
          { arabic: "ش", tts: "شِين", audio: "shin", translit: "Shin", meaning: "Son « ch »",
            forms: { isolated: "ش", initial: "شـ", medial: "ـشـ", final: "ـش" },
            example: { word: "شَمْس", translit: "shams", meaning: "soleil" } },
          { arabic: "ص", tts: "صَاد", audio: "sad", translit: "Sad", meaning: "Son « s » emphatique",
            forms: { isolated: "ص", initial: "صـ", medial: "ـصـ", final: "ـص" },
            example: { word: "صَلَاة", translit: "ṣalāt", meaning: "prière" } },
          { arabic: "ض", tts: "ضَاد", audio: "dad", translit: "Dad", meaning: "Son « d » emphatique",
            forms: { isolated: "ض", initial: "ضـ", medial: "ـضـ", final: "ـض" },
            example: { word: "ضَوْء", translit: "ḍaw'", meaning: "lumière" } },
          { arabic: "ط", tts: "طَاء", audio: "ta_emph", translit: "Ta", meaning: "Son « t » emphatique",
            forms: { isolated: "ط", initial: "طـ", medial: "ـطـ", final: "ـط" },
            example: { word: "طَيْر", translit: "ṭayr", meaning: "oiseau" } },
          { arabic: "ظ", tts: "ظَاء", audio: "dha", translit: "Dha", meaning: "Son « dh » emphatique",
            forms: { isolated: "ظ", initial: "ظـ", medial: "ـظـ", final: "ـظ" },
            example: { word: "ظِلّ", translit: "ẓill", meaning: "ombre" } },
          { arabic: "ع", tts: "عَيْن", audio: "ayn", translit: "Ayn", meaning: "Son profond guttural",
            forms: { isolated: "ع", initial: "عـ", medial: "ـعـ", final: "ـع" },
            example: { word: "عِلْم", translit: "'ilm", meaning: "science" } },
          { arabic: "غ", tts: "غَيْن", audio: "ghayn", translit: "Ghayn", meaning: "Proche du « r » français",
            forms: { isolated: "غ", initial: "غـ", medial: "ـغـ", final: "ـغ" },
            example: { word: "غَنَم", translit: "ghanam", meaning: "mouton" } },
          { arabic: "ف", tts: "فَاء", audio: "fa", translit: "Fa", meaning: "Son « f »",
            forms: { isolated: "ف", initial: "فـ", medial: "ـفـ", final: "ـف" },
            example: { word: "فِيل", translit: "fīl", meaning: "éléphant" } },
          { arabic: "ق", tts: "قَاف", audio: "qaf", translit: "Qaf", meaning: "Son « q » profond",
            forms: { isolated: "ق", initial: "قـ", medial: "ـقـ", final: "ـق" },
            example: { word: "قَلْب", translit: "qalb", meaning: "cœur" } },
          { arabic: "ك", tts: "كَاف", audio: "kaf", translit: "Kaf", meaning: "Son « k »",
            forms: { isolated: "ك", initial: "كـ", medial: "ـكـ", final: "ـك" },
            example: { word: "كِتَاب", translit: "kitāb", meaning: "livre" } },
          { arabic: "ل", tts: "لَام", audio: "lam", translit: "Lam", meaning: "Son « l »",
            forms: { isolated: "ل", initial: "لـ", medial: "ـلـ", final: "ـل" },
            example: { word: "لَيْل", translit: "layl", meaning: "nuit" } },
          { arabic: "م", tts: "مِيم", audio: "mim", translit: "Mim", meaning: "Son « m »",
            forms: { isolated: "م", initial: "مـ", medial: "ـمـ", final: "ـم" },
            example: { word: "مَاء", translit: "mā'", meaning: "eau" } },
          { arabic: "ن", tts: "نُون", audio: "nun", translit: "Nun", meaning: "Son « n »",
            forms: { isolated: "ن", initial: "نـ", medial: "ـنـ", final: "ـن" },
            example: { word: "نُور", translit: "nūr", meaning: "lumière" } },
          { arabic: "ه", tts: "هَاء", audio: "ha2", translit: "Ha", meaning: "Son « h »",
            forms: { isolated: "ه", initial: "هـ", medial: "ـهـ", final: "ـه" },
            example: { word: "هُدَى", translit: "hudā", meaning: "guidée" } },
          { arabic: "و", tts: "وَاو", audio: "waw", translit: "Waw", meaning: "Son « w » ou « ou »",
            forms: { isolated: "و", initial: "و", medial: "ـو", final: "ـو" },
            example: { word: "وَقْت", translit: "waqt", meaning: "temps" } },
          { arabic: "ي", tts: "يَاء", audio: "ya", translit: "Ya", meaning: "Son « y »",
            forms: { isolated: "ي", initial: "يـ", medial: "ـيـ", final: "ـي" },
            example: { word: "يَد", translit: "yad", meaning: "main" } }
        ]
      },
      {
        type: "lesson",
        id: "arabic-lesson-writing",
        title: "Leçon — Les formes des lettres",
        icon: "📚",
        sections: [
          { heading: "Pourquoi les lettres changent de forme ?", text: "En arabe, on écrit de droite à gauche sans lever le stylo. Chaque lettre s'attache à sa voisine et prend une forme différente selon sa position : isolée, initiale, médiane ou finale." },
          { heading: "Les 6 lettres qui ne s'attachent jamais à gauche", text: "ا (alif), د (dal), ذ (dhal), ر (ra), ز (zay), و (waw). Elles gardent leur forme isolée même au milieu d'un mot." },
          { heading: "Astuce pour les enfants", text: "Imagine que chaque lettre est un personnage : au milieu du mot, elle tend la main à droite et à gauche. Sauf les 6 lettres « fières » qui refusent de tenir la main à gauche !" }
        ]
      }
    ]
  },

  /* ============ 2. CHIFFRES ARABES ============ */
  {
    id: "numbers",
    emoji: "🔢",
    name: "Chiffres arabes",
    description: "De 1 à 1000, apprends à compter",
    activities: [
      {
        type: "flash",
        id: "numbers-flash-1-10",
        title: "Les chiffres 1 à 10",
        icon: "📖",
        cards: [
          { arabic: "١",  tts: "وَاحِد",     audio: "num_1",  translit: "Wahid (1)",       meaning: "Un — un seul Dieu, Allah" },
          { arabic: "٢",  tts: "اِثْنَان",   audio: "num_2",  translit: "Ithnan (2)",      meaning: "Deux" },
          { arabic: "٣",  tts: "ثَلَاثَة",   audio: "num_3",  translit: "Thalatha (3)",    meaning: "Trois" },
          { arabic: "٤",  tts: "أَرْبَعَة",  audio: "num_4",  translit: "Arba'a (4)",      meaning: "Quatre" },
          { arabic: "٥",  tts: "خَمْسَة",    audio: "num_5",  translit: "Khamsa (5)",      meaning: "Cinq — les 5 prières" },
          { arabic: "٦",  tts: "سِتَّة",     audio: "num_6",  translit: "Sitta (6)",       meaning: "Six" },
          { arabic: "٧",  tts: "سَبْعَة",    audio: "num_7",  translit: "Sab'a (7)",       meaning: "Sept — 7 cieux" },
          { arabic: "٨",  tts: "ثَمَانِيَة", audio: "num_8",  translit: "Thamaniya (8)",   meaning: "Huit" },
          { arabic: "٩",  tts: "تِسْعَة",    audio: "num_9",  translit: "Tis'a (9)",       meaning: "Neuf" },
          { arabic: "١٠", tts: "عَشَرَة",    audio: "num_10", translit: "'Ashara (10)",    meaning: "Dix" }
        ]
      },
      {
        type: "flash",
        id: "numbers-flash-11-20",
        title: "Les chiffres 11 à 20",
        icon: "📖",
        cards: [
          { arabic: "١١", tts: "أَحَدَ عَشَر",     audio: "num_11", translit: "Ahada 'ashar",       meaning: "Onze" },
          { arabic: "١٢", tts: "اِثْنَا عَشَر",    audio: "num_12", translit: "Ithnā 'ashar",       meaning: "Douze" },
          { arabic: "١٣", tts: "ثَلَاثَةَ عَشَر",  audio: "num_13", translit: "Thalāthata 'ashar",  meaning: "Treize" },
          { arabic: "١٤", tts: "أَرْبَعَةَ عَشَر", audio: "num_14", translit: "Arba'ata 'ashar",    meaning: "Quatorze" },
          { arabic: "١٥", tts: "خَمْسَةَ عَشَر",   audio: "num_15", translit: "Khamsata 'ashar",    meaning: "Quinze" },
          { arabic: "١٦", tts: "سِتَّةَ عَشَر",    audio: "num_16", translit: "Sittata 'ashar",     meaning: "Seize" },
          { arabic: "١٧", tts: "سَبْعَةَ عَشَر",   audio: "num_17", translit: "Sab'ata 'ashar",     meaning: "Dix-sept" },
          { arabic: "١٨", tts: "ثَمَانِيَةَ عَشَر", audio: "num_18", translit: "Thamāniyata 'ashar", meaning: "Dix-huit" },
          { arabic: "١٩", tts: "تِسْعَةَ عَشَر",   audio: "num_19", translit: "Tis'ata 'ashar",     meaning: "Dix-neuf" },
          { arabic: "٢٠", tts: "عِشْرُون",         audio: "num_20", translit: "'Ishrūn",            meaning: "Vingt" }
        ]
      },
      {
        type: "flash",
        id: "numbers-flash-tens",
        title: "Les dizaines et grands nombres",
        icon: "📖",
        cards: [
          { arabic: "٣٠",   tts: "ثَلَاثُون",  audio: "num_30",   translit: "Thalāthūn",   meaning: "Trente" },
          { arabic: "٤٠",   tts: "أَرْبَعُون", audio: "num_40",   translit: "Arba'ūn",     meaning: "Quarante" },
          { arabic: "٥٠",   tts: "خَمْسُون",   audio: "num_50",   translit: "Khamsūn",     meaning: "Cinquante" },
          { arabic: "٦٠",   tts: "سِتُّون",    audio: "num_60",   translit: "Sittūn",      meaning: "Soixante" },
          { arabic: "٧٠",   tts: "سَبْعُون",   audio: "num_70",   translit: "Sab'ūn",      meaning: "Soixante-dix" },
          { arabic: "٨٠",   tts: "ثَمَانُون",  audio: "num_80",   translit: "Thamānūn",    meaning: "Quatre-vingts" },
          { arabic: "٩٠",   tts: "تِسْعُون",   audio: "num_90",   translit: "Tis'ūn",      meaning: "Quatre-vingt-dix" },
          { arabic: "١٠٠",  tts: "مِئَة",      audio: "num_100",  translit: "Mi'a",        meaning: "Cent" },
          { arabic: "١٠٠٠", tts: "أَلْف",      audio: "num_1000", translit: "Alf",         meaning: "Mille" }
        ]
      }
    ]
  },

  /* ============ 3. PILIERS DE L'ISLAM ============ */
  {
    id: "pillars",
    emoji: "🕌",
    name: "Piliers de l'islam",
    description: "Les 5 piliers en détail",
    activities: [
      {
        type: "flash",
        id: "pillars-flash",
        title: "Les 5 piliers",
        icon: "📖",
        cards: [
          { arabic: "الشَّهَادَة", tts: "الشَّهَادَة", audio: "shahada", translit: "Shahada", meaning: "Témoignage de foi — « Il n'y a de dieu qu'Allah et Muhammad est Son messager »" },
          { arabic: "الصَّلَاة",   tts: "الصَّلَاة",   audio: "salat",   translit: "Salat",   meaning: "La prière — 5 fois par jour" },
          { arabic: "الزَّكَاة",   tts: "الزَّكَاة",   audio: "zakat",   translit: "Zakat",   meaning: "L'aumône purificatrice — 2,5% de l'épargne" },
          { arabic: "الصَّوْم",    tts: "الصَّوْم",    audio: "sawm",    translit: "Sawm",    meaning: "Le jeûne du mois de Ramadan" },
          { arabic: "الحَجّ",      tts: "الحَجّ",      audio: "hajj",    translit: "Hajj",    meaning: "Le pèlerinage à La Mecque — une fois dans la vie" }
        ]
      },
      {
        type: "lesson",
        id: "lesson-shahada",
        title: "Leçon — La Shahada",
        icon: "📚",
        sections: [
          { heading: "Qu'est-ce que la Shahada ?", text: "La Shahada est le témoignage de foi. C'est la porte d'entrée dans l'islam. Elle se prononce : « Ash-hadu an lā ilāha illā Allāh, wa ash-hadu anna Muhammadan rasūlu Allāh »." },
          { heading: "Signification profonde", text: "La première partie affirme l'unicité d'Allah. La seconde reconnaît Muhammad ﷺ comme Son dernier prophète." },
          { heading: "Les 7 conditions", text: "La connaissance, la certitude, l'acceptation, la soumission, la sincérité, la véracité et l'amour." }
        ]
      },
      {
        type: "lesson",
        id: "lesson-salat",
        title: "Leçon — La Salat",
        icon: "📚",
        sections: [
          { heading: "Qu'est-ce que la Salat ?", text: "La Salat est la prière rituelle, obligatoire 5 fois par jour. C'est un lien direct entre le croyant et son Créateur." },
          { heading: "Les 5 prières", text: "Fajr (aube), Dhuhr (midi), 'Asr (après-midi), Maghrib (coucher), 'Isha (nuit)." },
          { heading: "Avant la prière", text: "Le Wudu (ablutions) est obligatoire. On prie en direction de la Ka'ba (la Qibla)." }
        ]
      },
      {
        type: "lesson",
        id: "lesson-zakat",
        title: "Leçon — La Zakat",
        icon: "📚",
        sections: [
          { heading: "Qu'est-ce que la Zakat ?", text: "Zakat signifie « purification ». C'est donner 2,5% de sa richesse aux pauvres après un an. Ce n'est pas une taxe, c'est un droit des pauvres." },
          { heading: "Les 8 catégories", text: "Les pauvres, les nécessiteux, ceux qui collectent, ceux dont les cœurs sont à gagner, les esclaves à affranchir, les endettés, dans le sentier d'Allah, les voyageurs." },
          { heading: "Zakat al-Fitr", text: "Zakat particulière à la fin du Ramadan, donnée avant la prière de l'Aïd, sous forme de nourriture." }
        ]
      },
      {
        type: "lesson",
        id: "lesson-sawm",
        title: "Leçon — Le Sawm",
        icon: "📚",
        sections: [
          { heading: "Qu'est-ce que le Sawm ?", text: "Le jeûne du mois de Ramadan. On s'abstient de manger, boire et relations intimes de l'aube au coucher du soleil." },
          { heading: "Qui est exempté ?", text: "Les enfants, les malades, les voyageurs, les femmes enceintes ou allaitantes, les personnes âgées." },
          { heading: "La nuit du Destin", text: "Dans les 10 dernières nuits se trouve Laylat al-Qadr, meilleure que 1000 mois." }
        ]
      },
      {
        type: "lesson",
        id: "lesson-hajj",
        title: "Leçon — Le Hajj",
        icon: "📚",
        sections: [
          { heading: "Qu'est-ce que le Hajj ?", text: "Le pèlerinage à La Mecque. Obligatoire une fois dans la vie pour ceux qui en ont les moyens." },
          { heading: "Quand ?", text: "Du 8 au 13 du mois de Dhū al-Ḥijja. Le point culminant est le jour d'Arafat (9)." },
          { heading: "Les rites principaux", text: "Al-Ihrām, Ṭawāf, Sa'y, jour d'Arafat, Ramy, sacrifice, Ṭawāf al-ifāḍa." }
        ]
      }
    ]
  },

  /* ============ 4. PROPHÈTES — 25 COMPLETS ============ */
  {
    id: "prophets",
    emoji: "🌟",
    name: "Les 25 Prophètes",
    description: "Tous les prophètes nommés dans le Coran",
    activities: [
      {
        type: "flash",
        id: "prophets-flash-all",
        title: "Les 25 prophètes",
        icon: "📖",
        cards: [
          { arabic: "آدَم",         tts: "آدَم",         audio: "adam",      translit: "Adam",      meaning: "Le premier homme et prophète" },
          { arabic: "إِدْرِيس",     tts: "إِدْرِيس",     audio: "idris",     translit: "Idrīs",     meaning: "Élevé par Allah à un haut rang" },
          { arabic: "نُوح",         tts: "نُوح",         audio: "nuh",       translit: "Nūḥ",       meaning: "Noé — construisit l'arche" },
          { arabic: "هُود",         tts: "هُود",         audio: "hud",       translit: "Hūd",       meaning: "Envoyé au peuple de 'Ād" },
          { arabic: "صَالِح",       tts: "صَالِح",       audio: "salih",     translit: "Ṣāliḥ",     meaning: "Envoyé au peuple de Thamūd" },
          { arabic: "إِبْرَاهِيم",  tts: "إِبْرَاهِيم",  audio: "ibrahim",   translit: "Ibrāhīm",   meaning: "Abraham — ami d'Allah" },
          { arabic: "لُوط",         tts: "لُوط",         audio: "lut",       translit: "Lūṭ",       meaning: "Lot — neveu d'Ibrāhīm" },
          { arabic: "إِسْمَاعِيل",  tts: "إِسْمَاعِيل",  audio: "ismail",    translit: "Ismā'īl",   meaning: "Ismaël — fils d'Ibrāhīm" },
          { arabic: "إِسْحَاق",     tts: "إِسْحَاق",     audio: "ishaq",     translit: "Isḥāq",     meaning: "Isaac — fils d'Ibrāhīm" },
          { arabic: "يَعْقُوب",     tts: "يَعْقُوب",     audio: "yaqub",     translit: "Ya'qūb",    meaning: "Jacob — fils d'Isḥāq" },
          { arabic: "يُوسُف",       tts: "يُوسُف",       audio: "yusuf",     translit: "Yūsuf",     meaning: "Joseph — fils de Ya'qūb" },
          { arabic: "أَيُّوب",      tts: "أَيُّوب",      audio: "ayyub",     translit: "Ayyūb",     meaning: "Job — symbole de patience" },
          { arabic: "شُعَيْب",      tts: "شُعَيْب",      audio: "shuayb",    translit: "Shu'ayb",   meaning: "Envoyé à Madyan" },
          { arabic: "مُوسَى",       tts: "مُوسَى",       audio: "musa",      translit: "Mūsā",      meaning: "Moïse — parla à Allah" },
          { arabic: "هَارُون",      tts: "هَارُون",      audio: "harun",     translit: "Hārūn",     meaning: "Aaron — frère de Mūsā" },
          { arabic: "ذُو الْكِفْل", tts: "ذُو الْكِفْل", audio: "dhulkifl",  translit: "Dhū al-Kifl", meaning: "Le garant — homme pieux" },
          { arabic: "دَاوُود",      tts: "دَاوُود",      audio: "dawud",     translit: "Dāwūd",     meaning: "David — reçut les Psaumes" },
          { arabic: "سُلَيْمَان",   tts: "سُلَيْمَان",   audio: "sulayman",  translit: "Sulaymān",  meaning: "Salomon — parlait aux animaux" },
          { arabic: "إِلْيَاس",     tts: "إِلْيَاس",     audio: "ilyas",     translit: "Ilyās",     meaning: "Élie — appela à Allah" },
          { arabic: "الْيَسَع",     tts: "الْيَسَع",     audio: "alyasa",    translit: "Al-Yasa'",  meaning: "Élisée — successeur d'Ilyās" },
          { arabic: "يُونُس",       tts: "يُونُس",       audio: "yunus",     translit: "Yūnus",     meaning: "Jonas — avalé par la baleine" },
          { arabic: "زَكَرِيَّا",   tts: "زَكَرِيَّا",   audio: "zakariyya", translit: "Zakariyyā", meaning: "Zacharie — père de Yaḥyā" },
          { arabic: "يَحْيَى",      tts: "يَحْيَى",      audio: "yahya",     translit: "Yaḥyā",     meaning: "Jean-Baptiste — pieux depuis l'enfance" },
          { arabic: "عِيسَى",       tts: "عِيسَى",       audio: "issa",      translit: "'Īsā",      meaning: "Jésus — né sans père" },
          { arabic: "مُحَمَّد",     tts: "مُحَمَّد",     audio: "muhammad",  translit: "Muḥammad",  meaning: "Le dernier prophète ﷺ" }
        ]
      },
      {
        type: "quiz",
        id: "prophets-quiz-1",
        title: "Quiz — Les prophètes (1)",
        icon: "❓",
        questions: [
          { q: "Qui est le premier prophète ?", answers: ["Nūḥ","Ādam","Ibrāhīm","Mūsā"], correct: 1 },
          { q: "Qui a construit l'arche ?", answers: ["Nūḥ","Ādam","'Īsā","Mūsā"], correct: 0 },
          { q: "Qui est surnommé « ami d'Allah » ?", answers: ["Mūsā","Ibrāhīm","Nūḥ","Ādam"], correct: 1 },
          { q: "Qui est le dernier prophète ?", answers: ["'Īsā","Mūsā","Muḥammad ﷺ","Ibrāhīm"], correct: 2 },
          { q: "Qui a parlé à Allah directement ?", answers: ["Ādam","Mūsā","Nūḥ","'Īsā"], correct: 1 },
          { q: "Qui a été avalé par une baleine ?", answers: ["Yūnus","Ayyūb","Yūsuf","Lūṭ"], correct: 0 },
          { q: "Qui est le père des prophètes ?", answers: ["Ādam","Nūḥ","Ibrāhīm","Ya'qūb"], correct: 2 },
          { q: "Qui a reçu les Psaumes (Zabūr) ?", answers: ["Mūsā","Dāwūd","'Īsā","Sulaymān"], correct: 1 },
          { q: "Qui parlait aux animaux ?", answers: ["Dāwūd","Sulaymān","Yūnus","Ayyūb"], correct: 1 },
          { q: "Qui est le symbole de la patience ?", answers: ["Yūsuf","Ayyūb","Yūnus","Mūsā"], correct: 1 }
        ]
      },
      {
        type: "quiz",
        id: "prophets-quiz-2",
        title: "Quiz — Les prophètes (2)",
        icon: "❓",
        questions: [
          { q: "Combien de prophètes sont nommés dans le Coran ?", answers: ["5","15","25","40"], correct: 2 },
          { q: "Qui a été jeté dans le feu par Nimrod ?", answers: ["Mūsā","Ibrāhīm","Nūḥ","Yūnus"], correct: 1 },
          { q: "Qui avait un frère nommé Hārūn ?", answers: ["Mūsā","'Īsā","Yūsuf","Dāwūd"], correct: 0 },
          { q: "Qui est le père de Yaḥyā ?", answers: ["Zakariyyā","'Īsā","Ibrāhīm","Yūsuf"], correct: 0 },
          { q: "Qui a vu un rêve de 11 étoiles ?", answers: ["Ya'qūb","Yūsuf","Dāwūd","Sulaymān"], correct: 1 },
          { q: "À quel peuple Shu'ayb fut-il envoyé ?", answers: ["'Ād","Thamūd","Madyan","Égypte"], correct: 2 },
          { q: "Qui naquit sans père ?", answers: ["Ādam","'Īsā","Yaḥyā","Mūsā"], correct: 1 }
        ]
      },
      { type: "story", id: "story-adam", title: "L'histoire d'Ādam", icon: "📜",
        intro: "Ādam est le premier homme, le premier prophète, créé directement par Allah à partir d'argile.",
        chapters: [
          { title: "La création", text: "Allah créa Ādam de Ses propres mains, à partir d'argile. Il souffla en lui Son esprit, puis ordonna aux anges de se prosterner devant lui. Tous obéirent sauf Iblīs, par orgueil." },
          { title: "Le Paradis et la tentation", text: "Ādam et Hawwā' vécurent au Paradis. Allah leur interdit un seul arbre. Iblīs les tenta et ils mangèrent. Aussitôt, ils eurent honte et implorèrent le pardon d'Allah." },
          { title: "La descente sur Terre", text: "Allah pardonna à Ādam et le fit descendre sur Terre. Là, il transmit à ses enfants l'adoration d'un seul Dieu." }
        ],
        lessons: [
          "Allah est Le Créateur de toute chose.",
          "L'orgueil est le premier péché — Iblīs a refusé par orgueil.",
          "Le repentir sincère efface les péchés."
        ]
      },
      { type: "story", id: "story-idris", title: "L'histoire d'Idrīs", icon: "📜",
        intro: "Idrīs est un prophète véridique, élevé par Allah à un haut rang. Il fut l'un des premiers à écrire avec le calame.",
        chapters: [
          { title: "Un prophète véridique", text: "Idrīs était connu pour sa véracité et sa sagesse. Allah le mentionne dans le Coran comme un prophète véridique." },
          { title: "Élevé à un haut rang", text: "Allah dit : « Et Nous l'élevâmes à un haut rang. » (19:57). Beaucoup de savants pensent qu'il fut élevé au ciel." },
          { title: "Le premier à écrire", text: "Selon la tradition, Idrīs fut le premier à écrire avec le calame, à coudre des vêtements et à étudier les étoiles." }
        ],
        lessons: [
          "La véracité est une qualité des prophètes.",
          "Allah élève ceux qui sont pieux.",
          "Le savoir et l'écriture sont des bienfaits d'Allah."
        ]
      },
      { type: "story", id: "story-nuh", title: "L'histoire de Nūḥ", icon: "📜",
        intro: "Nūḥ a appelé son peuple à Allah pendant 950 ans. Il est appelé « le premier messager ».",
        chapters: [
          { title: "L'appel", text: "Nūḥ appela son peuple jour et nuit, en secret et en public, à adorer Allah seul et à abandonner les idoles." },
          { title: "La construction de l'arche", text: "Allah ordonna à Nūḥ de construire une arche en bois. Son peuple se moqua : « Un bateau dans le désert ? »" },
          { title: "Le déluge", text: "L'eau jaillit du ciel et de la terre. Nūḥ fit monter les croyants et un couple de chaque animal. Le déluge engloutit les mécréants, y compris son fils qui refusa de monter." }
        ],
        lessons: [
          "La patience dans l'appel à Allah est une grande vertu.",
          "Allah sauve les croyants et châtie les mécréants.",
          "Le lien de la foi dépasse les liens de sang."
        ]
      },
      { type: "story", id: "story-hud", title: "L'histoire de Hūd", icon: "📜",
        intro: "Hūd fut envoyé au peuple de 'Ād, des gens très forts qui vivaient dans des hautes tours.",
        chapters: [
          { title: "Le peuple de 'Ād", text: "Les 'Ād étaient des géants puissants, dotés d'une force extraordinaire. Ils vivaient dans la région d'al-Aḥqāf (entre Yémen et Oman)." },
          { title: "L'appel de Hūd", text: "Hūd les appela à adorer Allah seul et à abandonner les idoles. Il leur rappela les bienfaits d'Allah : la force, la richesse, les troupeaux." },
          { title: "Le châtiment", text: "Ils s'obstinèrent. Allah envoya un vent violent et glacé qui les détruisit en 7 nuits et 8 jours. Seuls Hūd et les croyants furent sauvés." }
        ],
        lessons: [
          "La force et la puissance ne servent à rien sans la foi.",
          "Allah châtie les peuples orgueilleux.",
          "Les prophètes avertissent avant le châtiment."
        ]
      },
      { type: "story", id: "story-salih", title: "L'histoire de Ṣāliḥ", icon: "📜",
        intro: "Ṣāliḥ fut envoyé au peuple de Thamūd. Il leur fit sortir une chamelle miraculeuse d'un rocher.",
        chapters: [
          { title: "Le peuple de Thamūd", text: "Les Thamūd taillaient des maisons dans les montagnes. Ils étaient riches et puissants, mais adoraient des idoles." },
          { title: "Le miracle de la chamelle", text: "Ils demandèrent à Ṣāliḥ un miracle. Allah fit sortir du rocher une chamelle énorme. Ṣāliḥ leur dit : « Laissez-la boire, ne lui faites pas de mal ! »" },
          { title: "Le châtiment", text: "Ils tuèrent la chamelle. Après 3 jours, un cri terrible et un tremblement de terre les détruisirent. Seuls les croyants furent sauvés." }
        ],
        lessons: [
          "Les miracles viennent d'Allah, pas du prophète.",
          "Ne pas abuser des bienfaits d'Allah.",
          "Le châtiment est proche pour les injustes."
        ]
      },
      { type: "story", id: "story-ibrahim", title: "L'histoire d'Ibrāhīm", icon: "📜",
        intro: "Ibrāhīm est le père des prophètes, appelé « Khalīl Allāh » (l'ami intime d'Allah). Il a brisé les idoles et construit la Ka'ba.",
        chapters: [
          { title: "La quête de la vérité", text: "Jeune, Ibrāhīm observa le soleil, la lune, les étoiles, et comprit qu'aucun d'eux ne pouvait être Dieu. Il conclut : « Je tourne mon visage vers Celui qui a créé les cieux et la terre. »" },
          { title: "La destruction des idoles", text: "Il brisa toutes les idoles de son peuple sauf la plus grande, plaçant la hache entre ses mains. « Demandez à la plus grande — si elle parle ! »" },
          { title: "Le feu de Nimrod", text: "Furieux, Nimrod ordonna de le brûler. Allah ordonna au feu : « Ô feu, sois fraîcheur et paix sur Ibrāhīm ! » Il sortit indemne." },
          { title: "La Ka'ba et le sacrifice", text: "Avec son fils Ismā'īl, Ibrāhīm construisit la Ka'ba. Puis Allah lui ordonna de sacrifier son fils. Il obéit. Au dernier moment, Allah remplaça l'enfant par un mouton." }
        ],
        lessons: [
          "Le Tawhid pur exige d'abandonner toute idole.",
          "La foi véritable se prouve par l'action.",
          "Allah protège ceux qui Lui font confiance.",
          "L'obéissance à Allah passe avant tout."
        ]
      },
      { type: "story", id: "story-lut", title: "L'histoire de Lūṭ", icon: "📜",
        intro: "Lūṭ est le neveu d'Ibrāhīm. Il fut envoyé au peuple de Sodome, qui commettait des actes immoraux.",
        chapters: [
          { title: "Le peuple de Sodome", text: "Ce peuple vivait dans la débauche, s'adonnant à des pratiques honteuses et au vol des voyageurs." },
          { title: "L'appel de Lūṭ", text: "Lūṭ les appela à se repentir, mais ils se moquèrent et le menacèrent de l'expulser." },
          { title: "Le châtiment", text: "Des anges vinrent sous forme d'hommes. Le peuple voulut les agresser. Allah fit retourner leur ville et fit pleuvoir des pierres d'argile sur eux." }
        ],
        lessons: [
          "L'immoralité conduit à la destruction.",
          "Les prophètes avertissent avant le châtiment.",
          "La femme de Lūṭ, qui ne crut pas, fut détruite avec son peuple."
        ]
      },
      { type: "story", id: "story-ismail", title: "L'histoire d'Ismā'īl", icon: "📜",
        intro: "Ismā'īl est le fils aîné d'Ibrāhīm, appelé « Dhabīḥ Allāh » (le sacrifié d'Allah). Il est l'ancêtre du Prophète Muḥammad ﷺ.",
        chapters: [
          { title: "L'enfant de la promesse", text: "Allah donna Ismā'īl à Ibrāhīm et Hājar alors qu'ils étaient âgés. C'était un don d'Allah." },
          { title: "Le sacrifice", text: "Quand Ismā'īl fut en âge de marcher, Allah ordonna à Ibrāhīm de le sacrifier. Ismā'īl dit : « Ô mon père, fais ce qui t'est ordonné, tu me trouveras patient. » Allah remplaça l'enfant par un mouton." },
          { title: "La Ka'ba et Zamzam", text: "Ismā'īl aida son père à construire la Ka'ba. Bébé, il avait fait jaillir la source de Zamzam en frappant le sol de son talon." }
        ],
        lessons: [
          "L'obéissance à Allah apporte la délivrance.",
          "La patience des prophètes est un modèle.",
          "Allah récompense ceux qui se soumettent à Lui."
        ]
      },
      { type: "story", id: "story-ishaq", title: "L'histoire d'Isḥāq", icon: "📜",
        intro: "Isḥāq est le deuxième fils d'Ibrāhīm, né de son épouse Sāra. Il est l'ancêtre des enfants d'Israël.",
        chapters: [
          { title: "L'annonce miraculeuse", text: "Des anges annoncèrent à Ibrāhīm et Sāra la naissance d'Isḥāq, alors qu'ils étaient très âgés. Sāra rit d'étonnement." },
          { title: "Un prophète béni", text: "Allah fit d'Isḥāq un prophète. Il continua la voie de son père Ibrāhīm, appelant à l'unicité d'Allah." },
          { title: "La descendance", text: "De Isḥāq descendirent Ya'qūb et les douze tribus d'Israël. De là viendront Mūsā, Dāwūd, Sulaymān et 'Īsā." }
        ],
        lessons: [
          "Allah donne la descendance à qui Il veut.",
          "La bénédiction d'Allah se transmet aux pieux.",
          "Chaque prophète poursuit la même mission."
        ]
      },
      { type: "story", id: "story-yaqub", title: "L'histoire de Ya'qūb", icon: "📜",
        intro: "Ya'qūb (Jacob) est aussi appelé Isrā'īl. Il est le père des douze tribus.",
        chapters: [
          { title: "Le père de douze fils", text: "Ya'qūb eut douze fils, dont Yūsuf et Binyāmīn. Il aimait particulièrement Yūsuf." },
          { title: "La perte de Yūsuf", text: "Ses frères, jaloux, jetèrent Yūsuf dans un puits. Ils ramenèrent sa chemise tachée de sang en disant qu'un loup l'avait dévoré. Ya'qūb pleura et patienta." },
          { title: "Les retrouvailles", text: "Après des années, Yūsuf devint ministre en Égypte. Il pardonna à ses frères et fit venir toute sa famille. Ya'qūb retrouva son fils bien-aimé." }
        ],
        lessons: [
          "La patience (ṣabr) est une grande vertu.",
          "Allah réunit ceux qui se confient à Lui.",
          "La jalousie détruit les familles."
        ]
      },
      { type: "story", id: "story-yusuf", title: "L'histoire de Yūsuf", icon: "📜",
        intro: "Yūsuf (Joseph) est un prophète au destin extraordinaire. Allah dit : « Nous te racontons le plus beau des récits. »",
        chapters: [
          { title: "Le rêve", text: "Jeune, Yūsuf rêva que onze étoiles, le soleil et la lune se prosternaient devant lui. Son père Ya'qūb comprit qu'Allah le choisirait." },
          { title: "Le puits et l'Égypte", text: "Ses frères jaloux le jetèrent dans un puits. Il fut vendu comme esclave en Égypte. Là, il fut accusé injustement et emprisonné." },
          { title: "La libération", text: "En prison, il interpréta les rêves. Le roi d'Égypte eut un rêve que seul Yūsuf put expliquer. Il devint ministre des vivres." },
          { title: "Le pardon", text: "La famine frappa. Ses frères vinrent chercher du blé. Il se fit reconnaître et leur pardonna : « Pas de reproche contre vous aujourd'hui. Qu'Allah vous pardonne. »" }
        ],
        lessons: [
          "La patience et la chasteté mènent au succès.",
          "Le pardon est plus noble que la vengeance.",
          "Allah fait triompher la vérité."
        ]
      },
      { type: "story", id: "story-ayyub", title: "L'histoire d'Ayyūb", icon: "📜",
        intro: "Ayyūb (Job) est le symbole de la patience. Il perdit tout : richesse, enfants, santé — mais resta reconnaissant.",
        chapters: [
          { title: "L'épreuve", text: "Ayyūb était riche, avait de nombreux enfants et une santé parfaite. Allah le testa : il perdit sa richesse, ses enfants et tomba gravement malade. Seule sa femme resta fidèle." },
          { title: "La patience", text: "Malgré 18 ans de maladie, Ayyūb ne se plaignit jamais d'Allah. Il disait : « Allah m'a donné tout cela, Il peut le reprendre. »" },
          { title: "La délivrance", text: "Il invoqua : « Seigneur, le mal m'a atteint. Tu es le plus Miséricordieux. » Allah le guérit, lui rendit sa famille et doubla ses biens." }
        ],
        lessons: [
          "La patience dans l'épreuve est récompensée.",
          "Ne jamais se plaindre d'Allah.",
          "Allah est Le plus Miséricordieux."
        ]
      },
      { type: "story", id: "story-shuayb", title: "L'histoire de Shu'ayb", icon: "📜",
        intro: "Shu'ayb fut envoyé au peuple de Madyan, des commerçants malhonnêtes.",
        chapters: [
          { title: "Le peuple de Madyan", text: "Les gens de Madyan trichaient dans les balances et les mesures. Ils volaient les gens dans le commerce." },
          { title: "L'appel", text: "Shu'ayb les appela à la justice : « Donnez la mesure et le poids avec équité, ne fraudez pas les gens dans leurs biens. »" },
          { title: "Le châtiment", text: "Ils se moquèrent de lui. Allah les fit périr par un cri terrible, suivi d'un tremblement de terre. Seuls les croyants furent sauvés." }
        ],
        lessons: [
          "La tricherie dans le commerce est un grand péché.",
          "L'honnêteté est une vertu islamique.",
          "Allah aime la justice."
        ]
      },
      { type: "story", id: "story-musa", title: "L'histoire de Mūsā", icon: "📜",
        intro: "Mūsā est un prophète majeur, appelé « Kalīm Allāh ». Il a libéré les enfants d'Israël du Pharaon.",
        chapters: [
          { title: "Le Nil", text: "Le Pharaon tuait les nouveau-nés. La mère de Mūsā le déposa sur le Nil. Allah le fit recueillir par la famille du Pharaon." },
          { title: "Le buisson ardent", text: "Adulte, Mūsā vit un feu sur le mont Sinai. Il entendit : « Ô Mūsā, Je suis Allah, le Seigneur de l'univers. »" },
          { title: "Face au Pharaon", text: "Allah l'envoya au Pharaon avec son frère Hārūn. Ses miracles vainquirent les magiciens. Les magiciens crurent en Allah." },
          { title: "La mer Rouge", text: "Mūsā partit avec son peuple. Allah ordonna à Mūsā de frapper la mer avec son bâton. Elle s'ouvrit en deux. Les croyants traversèrent, le Pharaon fut englouti." }
        ],
        lessons: [
          "Allah protège Ses prophètes dès la naissance.",
          "Le dialogue avec Allah est la plus haute récompense.",
          "Allah se moque des tyrans.",
          "La patience face à l'injustice est une force."
        ]
      },
      { type: "story", id: "story-harun", title: "L'histoire de Hārūn", icon: "📜",
        intro: "Hārūn est le frère aîné de Mūsā. Il fut son compagnon dans l'appel au Pharaon.",
        chapters: [
          { title: "Le frère éloquent", text: "Mūsā demanda à Allah de lui donner Hārūn comme aide car il était plus éloquent. Allah exauça sa demande." },
          { title: "Compagnon de mission", text: "Ensemble, ils se présentèrent au Pharaon. Hārūn soutint Mūsā et parla en son nom." },
          { title: "Le veau d'or", text: "Quand Mūsā monta sur le Sinai, Hārūn resta avec le peuple. Le peuple adora un veau d'or. Hārūn les avertit, mais ils refusèrent d'écouter." }
        ],
        lessons: [
          "La fraternité dans la foi est précieuse.",
          "Aider les autres dans le bien est une vertu.",
          "Certains refusent la vérité malgré les avertissements."
        ]
      },
      { type: "story", id: "story-dhulkifl", title: "L'histoire de Dhū al-Kifl", icon: "📜",
        intro: "Dhū al-Kifl est un prophète cité dans le Coran parmi les patients et les vertueux.",
        chapters: [
          { title: "Un homme de parole", text: "Dhū al-Kifl était connu pour tenir sa parole. Son nom signifie « le garant » ou « celui qui a la responsabilité »." },
          { title: "La vertu", text: "Il fit partie des gens que le Coran cite avec Ilyās et Ismā'īl comme faisant partie des meilleurs." },
          { title: "La patience", text: "Il était parmi les patients et les pieux, persévérant dans l'appel à Allah." }
        ],
        lessons: [
          "Tenir sa parole est une vertu des prophètes.",
          "La patience élève le serviteur.",
          "Allah mentionne les pieux dans Son Livre."
        ]
      },
      { type: "story", id: "story-dawud", title: "L'histoire de Dāwūd", icon: "📜",
        intro: "Dāwūd (David) est un roi et prophète. Allah lui donna la royauté, la sagesse et le Zabūr (Psaumes).",
        chapters: [
          { title: "Le combat contre Goliath", text: "Jeune, Dāwūd affronta le géant Goliath avec une fronde. Il le tua et devint un héros." },
          { title: "La royauté", text: "Allah lui donna la royauté après Saül. Il fut un roi juste et un juge équitable." },
          { title: "Le Zabūr", text: "Allah révéla à Dāwūd les Psaumes (Zabūr). Il avait une belle voix et les montagnes et les oiseaux répétaient ses louanges." },
          { title: "Le jeûne de Dāwūd", text: "Il jeûnait un jour sur deux. Le Prophète ﷺ a dit que c'était le meilleur des jeûnes." }
        ],
        lessons: [
          "La jeunesse n'empêche pas la grandeur.",
          "Allah donne la royauté à qui Il veut.",
          "Le jeûne de Dāwūd est une sunna excellente."
        ]
      },
      { type: "story", id: "story-sulayman", title: "L'histoire de Sulaymān", icon: "📜",
        intro: "Sulaymān (Salomon) est le fils de Dāwūd. Allah lui donna un royaume unique : il parlait aux animaux et commandait aux djinns.",
        chapters: [
          { title: "Le don d'Allah", text: "Sulaymān demanda à Allah un royaume que personne n'aurait après lui. Allah lui donna le pouvoir sur les djinns, les oiseaux et le vent." },
          { title: "Le langage des oiseaux", text: "Il comprenait le langage des oiseaux et des fourmis. Un jour, une fourmi dit : « Entrez dans vos demeures, que Sulaymān et ses troupes ne vous écrasent pas. » Il sourit." },
          { title: "La reine de Saba", text: "La huppe lui annonça l'existence de la reine Balqīs de Saba, qui adorait le soleil. Sulaymān l'invita à croire en Allah. Elle se convertit." },
          { title: "Sa sagesse", text: "Sulaymān jugeait avec sagesse. Allah lui accorda un royaume immense, mais il resta humble et reconnaissant." }
        ],
        lessons: [
          "Le pouvoir est un don d'Allah.",
          "La sagesse est plus précieuse que la force.",
          "La reine de Saba reconnut la vérité."
        ]
      },
      { type: "story", id: "story-ilyas", title: "L'histoire d'Ilyās", icon: "📜",
        intro: "Ilyās (Élie) fut envoyé au peuple d'Israël qui adorait l'idole Baal.",
        chapters: [
          { title: "L'appel", text: "Ilyās appela son peuple à craindre Allah et à abandonner l'idole Baal. Il leur rappela les bienfaits d'Allah." },
          { title: "Le rejet", text: "Ils le traitèrent de menteur et le menacèrent. Mais un petit groupe de croyants resta avec lui." },
          { title: "Le salut", text: "Allah sauva Ilyās et les croyants. Les mécréants furent châtiés. Le Coran dit : « Paix sur Ilyāsīn ! »" }
        ],
        lessons: [
          "L'idolâtrie est le plus grand péché.",
          "Les prophètes appellent toujours au Tawhid.",
          "Allah sauve les croyants."
        ]
      },
      { type: "story", id: "story-alyasa", title: "L'histoire d'Al-Yasa'", icon: "📜",
        intro: "Al-Yasa' (Élisée) succéda à Ilyās dans la prophétie.",
        chapters: [
          { title: "Le successeur", text: "Al-Yasa' poursuivit la mission d'Ilyās, appelant les enfants d'Israël à Allah." },
          { title: "Un prophète choisi", text: "Allah dit dans le Coran : « Et rappelle-toi Ismā'īl, Al-Yasa' et Dhū al-Kifl. Tous étaient parmi les meilleurs. »" },
          { title: "La patience", text: "Comme son prédécesseur, il patienta face au rejet de son peuple." }
        ],
        lessons: [
          "Chaque prophète poursuit la même mission.",
          "La patience des prophètes est exemplaire.",
          "Allah choisit qui Il veut pour la prophétie."
        ]
      },
      { type: "story", id: "story-yunus", title: "L'histoire de Yūnus", icon: "📜",
        intro: "Yūnus (Jonas) est appelé « Dhū al-Nūn » (l'homme à la baleine). Il fut avalé par une baleine et sauvé par son invocation.",
        chapters: [
          { title: "La fuite", text: "Yūnus fut envoyé à Ninive. Après des années d'appel sans résultat, il partit sans l'ordre d'Allah, pensant qu'Allah ne le punirait pas." },
          { title: "La baleine", text: "Il monta sur un bateau. Un tirage au sort le désigna. Il fut jeté à la mer et avalé par une baleine. Dans son ventre, il invoqua : « Lā ilāha illā anta, subḥānaka, innī kuntu mina ẓ-ẓālimīn. »" },
          { title: "Le salut", text: "Allah l'exauça et le fit sortir. La baleine le rejeta sur une plage. Une plante (yaqṭīn) poussa pour l'ombrager. Il retourna vers son peuple, qui crut." }
        ],
        lessons: [
          "L'invocation de Yūnus sauve de toute détresse.",
          "On ne doit pas fuir la mission d'Allah.",
          "Allah est Le plus Miséricordieux envers les croyants."
        ]
      },
      { type: "story", id: "story-zakariyya", title: "L'histoire de Zakariyyā", icon: "📜",
        intro: "Zakariyyā fut le tuteur de Maryam et le père de Yaḥyā. Il invoqua Allah pour un enfant pieux.",
        chapters: [
          { title: "Le tuteur de Maryam", text: "Zakariyyā prit soin de Maryam. Chaque fois qu'il entrait dans son mihrāb, il trouvait de la nourriture. « D'où cela te vient-il ? » demanda-t-il. « C'est d'Allah », répondit-elle." },
          { title: "L'invocation", text: "Voyant la bénédiction d'Allah sur Maryam, Zakariyyā invoqua : « Seigneur, donne-moi de Ta part une bonne descendance. »" },
          { title: "L'annonce", text: "Des anges l'appelèrent : « Allah t'annonce la bonne nouvelle de Yaḥyā. » Zakariyyā demanda un signe. Allah lui donna un signe : il ne parla pas 3 jours." }
        ],
        lessons: [
          "L'invocation sincère est exaucée.",
          "La piété attire les bénédictions.",
          "La descendance pieuse est une récompense."
        ]
      },
      { type: "story", id: "story-yahya", title: "L'histoire de Yaḥyā", icon: "📜",
        intro: "Yaḥyā (Jean-Baptiste) est le fils de Zakariyyā. Allah lui donna la sagesse dès l'enfance.",
        chapters: [
          { title: "Un enfant béni", text: "Allah dit : « Ô Yaḥyā, tiens fermement le Livre ! Et Nous lui donnâmes la sagesse alors qu'il était enfant. »" },
          { title: "La piété depuis l'enfance", text: "Yaḥyā était pieux, pur, et craignait Allah. Il lisait la Torah et appelait à la vérité." },
          { title: "Le témoin de la vérité", text: "Il confirma la mission de 'Īsā. Il fut tué par un roi injuste parce qu'il refusait de violer la loi d'Allah." }
        ],
        lessons: [
          "La sagesse peut venir dès l'enfance.",
          "Rester fidèle à la vérité même face à la mort.",
          "Allah récompense les pieux."
        ]
      },
      { type: "story", id: "story-issa", title: "L'histoire de 'Īsā", icon: "📜",
        intro: "'Īsā (Jésus) est un prophète majeur, né sans père par miracle, appelé « Rūḥ Allāh ».",
        chapters: [
          { title: "L'annonce à Maryam", text: "L'ange Jibrīl apparut à Maryam, la plus pieuse des femmes. Il lui annonça qu'elle aurait un fils sans père, par la parole d'Allah." },
          { title: "La naissance miraculeuse", text: "Maryam accoucha sous un palmier. Allah fit jaillir une source et tomber des dattes. Le bébé 'Īsā parla dans son berceau : « Je suis le serviteur d'Allah. »" },
          { title: "Les miracles", text: "Avec la permission d'Allah, 'Īsā guérissait les aveugles, les lépreux, et ressuscitait les morts. Il façonnait des oiseaux d'argile qui devenaient vivants." },
          { title: "L'élévation", text: "Les mécréants voulurent le tuer. Mais Allah l'éleva auprès de Lui. Il reviendra avant la fin des temps." }
        ],
        lessons: [
          "Allah crée ce qu'Il veut : « Sois ! » et cela est.",
          "'Īsā est un serviteur d'Allah, pas une divinité.",
          "Maryam est la plus vertueuse des femmes."
        ]
      },
      { type: "story", id: "story-muhammad", title: "L'histoire de Muḥammad ﷺ", icon: "📜",
        intro: "Muḥammad ﷺ est le dernier prophète, envoyé à toute l'humanité. Sa vie est la plus belle des histoires.",
        chapters: [
          { title: "L'orphelin", text: "Né en 570 à La Mecque, orphelin très jeune. Son grand-père puis son oncle l'élevèrent. On l'appelait « Aṣ-Ṣādiq al-Amīn »." },
          { title: "La révélation", text: "À 40 ans, dans la grotte de Ḥirā', l'ange Jibrīl lui apparut : « Lis ! » Il récita les premiers versets de la sourate Al-'Alaq." },
          { title: "L'Hégire", text: "En 622, après 13 ans de persécution à La Mecque, il émigra à Médine. C'est le début du calendrier musulman." },
          { title: "Le retour", text: "En 630, il retourna à La Mecque avec 10 000 hommes sans verser de sang. Il pardonna à ses ennemis." },
          { title: "Le pèlerinage d'adieu", text: "En 632, il prononça son célèbre sermon : « L'Arabe n'a pas de supériorité sur le non-Arabe, ni le blanc sur le noir. »" }
        ],
        lessons: [
          "Le Prophète ﷺ est un modèle pour toute l'humanité.",
          "Son caractère était le Coran.",
          "L'humilité, la patience et la miséricorde sont ses traits."
        ]
      }
    ]
  },

  /* ============ 5. LES 99 NOMS D'ALLAH ============ */
  {
    id: "names",
    emoji: "✨",
    name: "Les 99 Noms d'Allah",
    description: "Asmā' Allāh al-Ḥusnā — apprends les Beaux Noms",
    activities: [
      {
        type: "flash",
        id: "names-flash-1",
        title: "Noms 1 à 33",
        icon: "📖",
        cards: [
          { arabic: "الرَّحْمَٰن", tts: "الرَّحْمَٰن", audio: "name_01", translit: "Ar-Raḥmān", meaning: "Le Tout Miséricordieux — Sa miséricorde englobe toute chose" },
          { arabic: "الرَّحِيم", tts: "الرَّحِيم", audio: "name_02", translit: "Ar-Raḥīm", meaning: "Le Très Miséricordieux — envers les croyants" },
          { arabic: "الْمَلِك", tts: "الْمَلِك", audio: "name_03", translit: "Al-Malik", meaning: "Le Roi — Le Souverain absolu" },
          { arabic: "الْقُدُّوس", tts: "الْقُدُّوس", audio: "name_04", translit: "Al-Quddūs", meaning: "Le Saint — pur de tout défaut" },
          { arabic: "السَّلَام", tts: "السَّلَام", audio: "name_05", translit: "As-Salām", meaning: "La Paix — Celui qui donne la paix" },
          { arabic: "الْمُؤْمِن", tts: "الْمُؤْمِن", audio: "name_06", translit: "Al-Mu'min", meaning: "Le Fidèle — Celui qui rassure" },
          { arabic: "الْمُهَيْمِن", tts: "الْمُهَيْمِن", audio: "name_07", translit: "Al-Muhaymin", meaning: "Le Gardien — qui surveille tout" },
          { arabic: "الْعَزِيز", tts: "الْعَزِيز", audio: "name_08", translit: "Al-'Azīz", meaning: "Le Tout Puissant — que rien ne peut vaincre" },
          { arabic: "الْجَبَّار", tts: "الْجَبَّار", audio: "name_09", translit: "Al-Jabbār", meaning: "Le Contraignant — qui répare et contraint" },
          { arabic: "الْمُتَكَبِّر", tts: "الْمُتَكَبِّر", audio: "name_10", translit: "Al-Mutakabbir", meaning: "Le Suprême — au-dessus de toute chose" },
          { arabic: "الْخَالِق", tts: "الْخَالِق", audio: "name_11", translit: "Al-Khāliq", meaning: "Le Créateur — qui crée à partir de rien" },
          { arabic: "الْبَارِئ", tts: "الْبَارِئ", audio: "name_12", translit: "Al-Bāri'", meaning: "Le Créateur par excellence — qui donne forme" },
          { arabic: "الْمُصَوِّر", tts: "الْمُصَوِّر", audio: "name_13", translit: "Al-Muṣawwir", meaning: "Le Façonneur — qui donne à chaque être sa forme" },
          { arabic: "الْغَفَّار", tts: "الْغَفَّار", audio: "name_14", translit: "Al-Ghaffār", meaning: "Le Pardonneur — qui pardonne sans cesse" },
          { arabic: "الْقَهَّار", tts: "الْقَهَّار", audio: "name_15", translit: "Al-Qahhār", meaning: "Le Dominateur — qui soumet toute chose" },
          { arabic: "الْوَهَّاب", tts: "الْوَهَّاب", audio: "name_16", translit: "Al-Wahhāb", meaning: "Le Donateur — qui donne sans compter" },
          { arabic: "الرَّزَّاق", tts: "الرَّزَّاق", audio: "name_17", translit: "Ar-Razzāq", meaning: "Le Pourvoyeur — qui pourvoit à tout besoin" },
          { arabic: "الْفَتَّاح", tts: "الْفَتَّاح", audio: "name_18", translit: "Al-Fattāḥ", meaning: "Le Conquérant — Celui qui ouvre les voies" },
          { arabic: "الْعَلِيم", tts: "الْعَلِيم", audio: "name_19", translit: "Al-'Alīm", meaning: "L'Omniscient — qui sait tout" },
          { arabic: "الْقَابِض", tts: "الْقَابِض", audio: "name_20", translit: "Al-Qābiḍ", meaning: "Celui qui retient — qui restreint" },
          { arabic: "الْبَاسِط", tts: "الْبَاسِط", audio: "name_21", translit: "Al-Bāsiṭ", meaning: "Celui qui étend — qui accorde largement" },
          { arabic: "الْخَافِض", tts: "الْخَافِض", audio: "name_22", translit: "Al-Khāfiḍ", meaning: "Celui qui abaisse — qui humilie les orgueilleux" },
          { arabic: "الرَّافِع", tts: "الرَّافِع", audio: "name_23", translit: "Ar-Rāfi'", meaning: "Celui qui élève — qui honore" },
          { arabic: "الْمُعِزّ", tts: "الْمُعِزّ", audio: "name_24", translit: "Al-Mu'izz", meaning: "Celui qui donne la gloire" },
          { arabic: "الْمُذِلّ", tts: "الْمُذِلّ", audio: "name_25", translit: "Al-Mudhill", meaning: "Celui qui humilie" },
          { arabic: "السَّمِيع", tts: "السَّمِيع", audio: "name_26", translit: "As-Samī'", meaning: "L'Audient — qui entend tout" },
          { arabic: "الْبَصِير", tts: "الْبَصِير", audio: "name_27", translit: "Al-Baṣīr", meaning: "Le Clairvoyant — qui voit tout" },
          { arabic: "الْحَكَم", tts: "الْحَكَم", audio: "name_28", translit: "Al-Ḥakam", meaning: "Le Juge — qui juge avec vérité" },
          { arabic: "الْعَدْل", tts: "الْعَدْل", audio: "name_29", translit: "Al-'Adl", meaning: "Le Juste — Celui qui ne fait aucune injustice" },
          { arabic: "اللَّطِيف", tts: "اللَّطِيف", audio: "name_30", translit: "Al-Laṭīf", meaning: "Le Subtil — qui sait les moindres détails" },
          { arabic: "الْخَبِير", tts: "الْخَبِير", audio: "name_31", translit: "Al-Khabīr", meaning: "Le Bien-Informé — de toute chose" },
          { arabic: "الْحَلِيم", tts: "الْحَلِيم", audio: "name_32", translit: "Al-Ḥalīm", meaning: "Le Longanime — patient et indulgent" },
          { arabic: "الْعَظِيم", tts: "الْعَظِيم", audio: "name_33", translit: "Al-'Aẓīm", meaning: "L'Immense — au-dessus de toute grandeur" }
        ]
      },
      {
        type: "flash",
        id: "names-flash-2",
        title: "Noms 34 à 66",
        icon: "📖",
        cards: [
          { arabic: "الْغَفُور", tts: "الْغَفُور", audio: "name_34", translit: "Al-Ghafūr", meaning: "Le Très Pardonnant" },
          { arabic: "الشَّكُور", tts: "الشَّكُور", audio: "name_35", translit: "Ash-Shakūr", meaning: "Le Très Reconnaissant" },
          { arabic: "الْعَلِيّ", tts: "الْعَلِيّ", audio: "name_36", translit: "Al-'Alī", meaning: "Le Très-Haut" },
          { arabic: "الْكَبِير", tts: "الْكَبِير", audio: "name_37", translit: "Al-Kabīr", meaning: "Le Très-Grand" },
          { arabic: "الْحَفِيظ", tts: "الْحَفِيظ", audio: "name_38", translit: "Al-Ḥafīẓ", meaning: "Le Gardien" },
          { arabic: "الْمُقِيت", tts: "الْمُقِيت", audio: "name_39", translit: "Al-Muqīt", meaning: "Le Nourricier" },
          { arabic: "الْحَسِيب", tts: "الْحَسِيب", audio: "name_40", translit: "Al-Ḥasīb", meaning: "Le Comptable" },
          { arabic: "الْجَلِيل", tts: "الْجَلِيل", audio: "name_41", translit: "Al-Jalīl", meaning: "Le Majestueux" },
          { arabic: "الْكَرِيم", tts: "الْكَرِيم", audio: "name_42", translit: "Al-Karīm", meaning: "Le Généreux" },
          { arabic: "الرَّقِيب", tts: "الرَّقِيب", audio: "name_43", translit: "Ar-Raqīb", meaning: "L'Observateur" },
          { arabic: "الْمُجِيب", tts: "الْمُجِيب", audio: "name_44", translit: "Al-Mujīb", meaning: "Celui qui exauce" },
          { arabic: "الْوَاسِع", tts: "الْوَاسِع", audio: "name_45", translit: "Al-Wāsi'", meaning: "L'Immense — dont la science englobe tout" },
          { arabic: "الْحَكِيم", tts: "الْحَكِيم", audio: "name_46", translit: "Al-Ḥakīm", meaning: "Le Sage" },
          { arabic: "الْوَدُود", tts: "الْوَدُود", audio: "name_47", translit: "Al-Wadūd", meaning: "Le Bien-Aimant" },
          { arabic: "الْمَجِيد", tts: "الْمَجِيد", audio: "name_48", translit: "Al-Majīd", meaning: "Le Glorieux" },
          { arabic: "الْبَاعِث", tts: "الْبَاعِث", audio: "name_49", translit: "Al-Bā'ith", meaning: "Celui qui ressuscite" },
          { arabic: "الشَّهِيد", tts: "الشَّهِيد", audio: "name_50", translit: "Ash-Shahīd", meaning: "Le Témoin" },
          { arabic: "الْحَقّ", tts: "الْحَقّ", audio: "name_51", translit: "Al-Ḥaqq", meaning: "La Vérité" },
          { arabic: "الْوَكِيل", tts: "الْوَكِيل", audio: "name_52", translit: "Al-Wakīl", meaning: "Le Garant" },
          { arabic: "الْقَوِيّ", tts: "الْقَوِيّ", audio: "name_53", translit: "Al-Qawiyy", meaning: "Le Fort" },
          { arabic: "الْمَتِين", tts: "الْمَتِين", audio: "name_54", translit: "Al-Matīn", meaning: "Le Solide" },
          { arabic: "الْوَلِيّ", tts: "الْوَلِيّ", audio: "name_55", translit: "Al-Waliyy", meaning: "Le Protecteur" },
          { arabic: "الْحَمِيد", tts: "الْحَمِيد", audio: "name_56", translit: "Al-Ḥamīd", meaning: "Le Digne de louange" },
          { arabic: "الْمُحْصِي", tts: "الْمُحْصِي", audio: "name_57", translit: "Al-Muḥṣī", meaning: "Celui qui dénombre tout" },
          { arabic: "الْمُبْدِئ", tts: "الْمُبْدِئ", audio: "name_58", translit: "Al-Mubdi'", meaning: "Celui qui commence" },
          { arabic: "الْمُعِيد", tts: "الْمُعِيد", audio: "name_59", translit: "Al-Mu'īd", meaning: "Celui qui fait revenir" },
          { arabic: "الْمُحْيِي", tts: "الْمُحْيِي", audio: "name_60", translit: "Al-Muḥyī", meaning: "Celui qui donne la vie" },
          { arabic: "الْمُمِيت", tts: "الْمُمِيت", audio: "name_61", translit: "Al-Mumīt", meaning: "Celui qui donne la mort" },
          { arabic: "الْحَيّ", tts: "الْحَيّ", audio: "name_62", translit: "Al-Ḥayy", meaning: "Le Vivant" },
          { arabic: "الْقَيُّوم", tts: "الْقَيُّوم", audio: "name_63", translit: "Al-Qayyūm", meaning: "Celui qui subsiste par Lui-même" },
          { arabic: "الْوَاجِد", tts: "الْوَاجِد", audio: "name_64", translit: "Al-Wājid", meaning: "Celui qui trouve" },
          { arabic: "الْمَاجِد", tts: "الْمَاجِد", audio: "name_65", translit: "Al-Mājid", meaning: "Le Noble" },
          { arabic: "الْوَاحِد", tts: "الْوَاحِد", audio: "name_66", translit: "Al-Wāḥid", meaning: "L'Unique" }
        ]
      },
      {
        type: "flash",
        id: "names-flash-3",
        title: "Noms 67 à 99",
        icon: "📖",
        cards: [
          { arabic: "الْأَحَد", tts: "الْأَحَد", audio: "name_67", translit: "Al-Aḥad", meaning: "L'Un" },
          { arabic: "الصَّمَد", tts: "الصَّمَد", audio: "name_68", translit: "Aṣ-Ṣamad", meaning: "Le Maître absolu" },
          { arabic: "الْقَادِر", tts: "الْقَادِر", audio: "name_69", translit: "Al-Qādir", meaning: "Le Capable" },
          { arabic: "الْمُقْتَدِر", tts: "الْمُقْتَدِر", audio: "name_70", translit: "Al-Muqtadir", meaning: "Le Tout-Puissant" },
          { arabic: "الْمُقَدِّم", tts: "الْمُقَدِّم", audio: "name_71", translit: "Al-Muqaddim", meaning: "Celui qui avance" },
          { arabic: "الْمُؤَخِّر", tts: "الْمُؤَخِّر", audio: "name_72", translit: "Al-Mu'akhkhir", meaning: "Celui qui retarde" },
          { arabic: "الْأَوَّل", tts: "الْأَوَّل", audio: "name_73", translit: "Al-Awwal", meaning: "Le Premier" },
          { arabic: "الْآخِر", tts: "الْآخِر", audio: "name_74", translit: "Al-Ākhir", meaning: "Le Dernier" },
          { arabic: "الظَّاهِر", tts: "الظَّاهِر", audio: "name_75", translit: "Aẓ-Ẓāhir", meaning: "L'Apparent" },
          { arabic: "الْبَاطِن", tts: "الْبَاطِن", audio: "name_76", translit: "Al-Bāṭin", meaning: "Le Caché" },
          { arabic: "الْوَالِي", tts: "الْوَالِي", audio: "name_77", translit: "Al-Wālī", meaning: "Le Gouverneur" },
          { arabic: "الْمُتَعَالِي", tts: "الْمُتَعَالِي", audio: "name_78", translit: "Al-Muta'ālī", meaning: "Le Très-Élevé" },
          { arabic: "الْبَرّ", tts: "الْبَرّ", audio: "name_79", translit: "Al-Barr", meaning: "Le Bienfaisant" },
          { arabic: "التَّوَّاب", tts: "التَّوَّاب", audio: "name_80", translit: "At-Tawwāb", meaning: "L'Accueillant au repentir" },
          { arabic: "الْمُنْتَقِم", tts: "الْمُنْتَقِم", audio: "name_81", translit: "Al-Muntaqim", meaning: "Le Vengeur" },
          { arabic: "الْعَفُوّ", tts: "الْعَفُوّ", audio: "name_82", translit: "Al-'Afuww", meaning: "L'Indulgent" },
          { arabic: "الرَّءُوف", tts: "الرَّءُوف", audio: "name_83", translit: "Ar-Ra'ūf", meaning: "Le Compatissant" },
          { arabic: "مَالِكُ الْمُلْك", tts: "مَالِكُ الْمُلْك", audio: "name_84", translit: "Mālik al-Mulk", meaning: "Maître de la royauté" },
          { arabic: "ذُو الْجَلَالِ وَالْإِكْرَام", tts: "ذُو الْجَلَالِ وَالْإِكْرَام", audio: "name_85", translit: "Dhū al-Jalāli wa al-Ikrām", meaning: "Maître de la majesté et de la générosité" },
          { arabic: "الْمُقْسِط", tts: "الْمُقْسِط", audio: "name_86", translit: "Al-Muqsiṭ", meaning: "L'Équitable" },
          { arabic: "الْجَامِع", tts: "الْجَامِع", audio: "name_87", translit: "Al-Jāmi'", meaning: "Le Rassembleur" },
          { arabic: "الْغَنِيّ", tts: "الْغَنِيّ", audio: "name_88", translit: "Al-Ghaniyy", meaning: "Le Riche" },
          { arabic: "الْمُغْنِي", tts: "الْمُغْنِي", audio: "name_89", translit: "Al-Mughnī", meaning: "Celui qui enrichit" },
          { arabic: "الْمَانِع", tts: "الْمَانِع", audio: "name_90", translit: "Al-Māni'", meaning: "Celui qui empêche" },
          { arabic: "الضَّارّ", tts: "الضَّارّ", audio: "name_91", translit: "Aḍ-Ḍārr", meaning: "Celui qui nuit" },
          { arabic: "النَّافِع", tts: "النَّافِع", audio: "name_92", translit: "An-Nāfi'", meaning: "Celui qui est utile" },
          { arabic: "النُّور", tts: "النُّور", audio: "name_93", translit: "An-Nūr", meaning: "La Lumière" },
          { arabic: "الْهَادِي", tts: "الْهَادِي", audio: "name_94", translit: "Al-Hādī", meaning: "Le Guide" },
          { arabic: "الْبَدِيع", tts: "الْبَدِيع", audio: "name_95", translit: "Al-Badī'", meaning: "Le Créateur sans modèle" },
          { arabic: "الْبَاقِي", tts: "الْبَاقِي", audio: "name_96", translit: "Al-Bāqī", meaning: "L'Éternel" },
          { arabic: "الْوَارِث", tts: "الْوَارِث", audio: "name_97", translit: "Al-Wārith", meaning: "L'Héritier" },
          { arabic: "الرَّشِيد", tts: "الرَّشِيد", audio: "name_98", translit: "Ar-Rashīd", meaning: "Le Bien-Guidé" },
          { arabic: "الصَّبُور", tts: "الصَّبُور", audio: "name_99", translit: "Aṣ-Ṣabūr", meaning: "Le Très Patient" }
        ]
      }
    ]
  },

  /* ============ 6. DU'Ā DU QUOTIDIEN ============ */
  {
    id: "duas",
    emoji: "🤲",
    name: "Du'ā du quotidien",
    description: "Les invocations à connaître",
    activities: [
      {
        type: "flash",
        id: "duas-flash-1",
        title: "Du'ā — Réveil et sommeil",
        icon: "📖",
        cards: [
          { arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ", tts: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ", audio: "dua_wake", translit: "Al-ḥamdu lillāhi lladhī aḥyānā ba'da mā amātanā wa ilayhi n-nushūr", meaning: "Au réveil : « Louange à Allah qui nous a rendu la vie après nous l'avoir ôtée, et c'est vers Lui que se fera la résurrection. »" },
          { arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", tts: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", audio: "dua_sleep", translit: "Bismika Allāhumma amūtu wa aḥyā", meaning: "Avant de dormir : « En Ton nom, ô Allah, je meurs et je vis. »" },
          { arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَجْمَعُ عِبَادَكَ", tts: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَجْمَعُ عِبَادَكَ", audio: "dua_sleep2", translit: "Allāhumma qinī 'adhābaka yawma tajma'u 'ibādak", meaning: "Avant de dormir : « Ô Allah, préserve-moi de Ton châtiment le Jour où Tu rassembleras Tes serviteurs. »" },
          { arabic: "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ", tts: "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ", audio: "dua_sleep3", translit: "Allāhumma aslamtu nafsī ilayk", meaning: "Avant de dormir : « Ô Allah, je T'ai soumis mon âme. »" }
        ]
      },
      {
        type: "flash",
        id: "duas-flash-2",
        title: "Du'ā — Manger et boire",
        icon: "📖",
        cards: [
          { arabic: "بِسْمِ اللَّهِ", tts: "بِسْمِ اللَّهِ", audio: "bismillah", translit: "Bismillah", meaning: "Avant de manger : « Au nom d'Allah »" },
          { arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ", tts: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ", audio: "dua_eat", translit: "Al-ḥamdu lillāhi lladhī aṭ'amanī hādhā wa razaqanīhi min ghayri ḥawlin minnī wa lā quwwa", meaning: "Après le repas : « Louange à Allah qui m'a nourri de ceci et me l'a accordé sans force ni puissance de ma part. »" },
          { arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَأَطْعِمْنَا خَيْرًا مِنْهُ", tts: "اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَأَطْعِمْنَا خَيْرًا مِنْهُ", audio: "dua_milk", translit: "Allāhumma bārik lanā fīhi wa aṭ'imnā khayran minhu", meaning: "Après avoir bu du lait : « Ô Allah, bénis-le pour nous et donne-nous mieux. »" },
          { arabic: "اللَّهُمَّ أَطْعِمْ مَنْ أَطْعَمَنِي وَاسْقِ مَنْ سَقَانِي", tts: "اللَّهُمَّ أَطْعِمْ مَنْ أَطْعَمَنِي وَاسْقِ مَنْ سَقَانِي", audio: "dua_feed", translit: "Allāhumma aṭ'im man aṭ'amanī wa sqi man saqānī", meaning: "Pour celui qui t'a nourri : « Ô Allah, nourris celui qui m'a nourri et donne à boire à celui qui m'a donné à boire. »" }
        ]
      },
      {
        type: "flash",
        id: "duas-flash-3",
        title: "Du'ā — Maison et voyage",
        icon: "📖",
        cards: [
          { arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ", tts: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ", audio: "dua_home_in", translit: "Allāhumma innī as'aluka khayra l-mawliji wa khayra l-makhraj", meaning: "En entrant à la maison : « Ô Allah, je Te demande le bien en entrant et en sortant. »" },
          { arabic: "بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى رَبِّنَا تَوَكَّلْنَا", tts: "بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى رَبِّنَا تَوَكَّلْنَا", audio: "dua_home_in2", translit: "Bismillāhi walajnā wa bismillāhi kharajnā wa 'alā rabbinā tawakkalnā", meaning: "En entrant : « Au nom d'Allah nous sommes entrés, au nom d'Allah nous sommes sortis, et en notre Seigneur nous plaçons notre confiance. »" },
          { arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", tts: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", audio: "dua_leave", translit: "Bismillāhi tawakkaltu 'alā Allāh, wa lā ḥawla wa lā quwwata illā bi-Llāh", meaning: "En sortant : « Au nom d'Allah, je place ma confiance en Allah. Il n'y a de force ni de puissance qu'en Allah. »" },
          { arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ", tts: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ", audio: "dua_travel", translit: "Subḥāna lladhī sakhkhara lanā hādhā wa mā kunnā lahu muqrinīn", meaning: "En voyage : « Gloire à Celui qui a mis ceci à notre service, alors que nous n'aurions pu le maîtriser. »" }
        ]
      },
      {
        type: "flash",
        id: "duas-flash-4",
        title: "Du'ā — Divers moments",
        icon: "📖",
        cards: [
          { arabic: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ", tts: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ", audio: "dua_yunus", translit: "Lā ilāha illā anta subḥānaka innī kuntu mina ẓ-ẓālimīn", meaning: "Du'ā de Yūnus dans la baleine : « Il n'y a de dieu que Toi ! Gloire à Toi ! J'ai été vraiment du nombre des injustes. »" },
          { arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", tts: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", audio: "dua_hasana", translit: "Rabbanā ātinā fī d-dunyā ḥasanatan wa fī l-ākhirati ḥasanatan wa qinā 'adhāba n-nār", meaning: "Du'ā coranique : « Seigneur, accorde-nous une belle part ici-bas et une belle part dans l'au-delà, et préserve-nous du châtiment du Feu. »" },
          { arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي", tts: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي", audio: "dua_musa", translit: "Rabbi shraḥ lī ṣadrī wa yassir lī amrī", meaning: "Du'ā de Mūsā : « Seigneur, ouvre-moi ma poitrine et facilite-moi ma tâche. »" },
          { arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ", tts: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ", audio: "dua_ya_hayyu", translit: "Yā Ḥayyu yā Qayyūm, bi-raḥmatika astaghīth", meaning: "Du'ā de détresse : « Ô Vivant, Ô Subsistant, par Ta miséricorde je T'implore. »" },
          { arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ", tts: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ", audio: "dua_jannah", translit: "Allāhumma innī as'aluka l-jannata wa a'ūdhu bika mina n-nār", meaning: "« Ô Allah, je Te demande le Paradis et je cherche refuge auprès de Toi contre l'Enfer. »" }
        ]
      }
    ]
  },

  /* ============ 7. SOURATES — JUZ 'AMMA + AL-FATIHA ============ */
  {
    id: "surahs",
    emoji: "📖",
    name: "Sourates",
    description: "Al-Fatiha et Juz 'Amma (sourates 78 à 114)",
    activities: [
      { type: "surah", id: "surah-fatiha", title: "Al-Fatiha — L'Ouverture", icon: "🕌",
        surahNumber: 1, nameArabic: "الفَاتِحَة", nameLatin: "Al-Fatiha", meaning: "L'Ouverture",
        revelation: "Mecquoise", versesCount: 7,
        description: "La première sourate du Coran, récitée dans chaque rak'a.",
        verses: [
          { n: 1, arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", translit: "Bismillāhi r-raḥmāni r-raḥīm", french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux." },
          { n: 2, arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", translit: "Al-ḥamdu lillāhi rabbi l-'ālamīn", french: "Louange à Allah, Seigneur de l'univers." },
          { n: 3, arabic: "الرَّحْمَٰنِ الرَّحِيمِ", translit: "Ar-raḥmāni r-raḥīm", french: "Le Tout Miséricordieux, le Très Miséricordieux." },
          { n: 4, arabic: "مَالِكِ يَوْمِ الدِّينِ", translit: "Māliki yawmi d-dīn", french: "Maître du Jour de la rétribution." },
          { n: 5, arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", translit: "Iyyāka na'budu wa iyyāka nasta'īn", french: "C'est Toi [Seul] que nous adorons, et c'est Toi [Seul] dont nous implorons secours." },
          { n: 6, arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", translit: "Ihdinā ṣ-ṣirāṭa l-mustaqīm", french: "Guide-nous dans le droit chemin." },
          { n: 7, arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", translit: "Ṣirāṭa lladhīna an'amta 'alayhim ghayri l-maghḍūbi 'alayhim wa lā ḍ-ḍāllīn", french: "Le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés." }
        ]
      },
      { type: "surah", id: "surah-nas", title: "An-Nas — Les Hommes", icon: "🕌",
        surahNumber: 114, nameArabic: "النَّاس", nameLatin: "An-Nas", meaning: "Les Hommes",
        revelation: "Mecquoise", versesCount: 6,
        description: "Dernière sourate du Coran. Protectrice contre les mauvaises suggestions.",
        verses: [
          { n: 1, arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ", translit: "Qul a'ūdhu birabbi n-nās", french: "Dis : « Je cherche protection auprès du Seigneur des hommes," },
          { n: 2, arabic: "مَلِكِ النَّاسِ", translit: "Maliki n-nās", french: "Le Souverain des hommes," },
          { n: 3, arabic: "إِلَٰهِ النَّاسِ", translit: "Ilāhi n-nās", french: "Dieu des hommes," },
          { n: 4, arabic: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ", translit: "Min sharri l-waswāsi l-khannās", french: "contre le mal du mauvais conseiller, furtif," },
          { n: 5, arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ", translit: "Alladhī yuwaswisu fī ṣudūri n-nās", french: "qui souffle le mal dans les poitrines des hommes," },
          { n: 6, arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ", translit: "Mina l-jinnati wa n-nās", french: "qu'il soit un djinn ou un être humain. »" }
        ]
      },
      { type: "surah", id: "surah-falaq", title: "Al-Falaq — L'Aube", icon: "🕌",
        surahNumber: 113, nameArabic: "الفَلَق", nameLatin: "Al-Falaq", meaning: "L'Aube naissante",
        revelation: "Mecquoise", versesCount: 5,
        description: "Sourate protectrice récitée matin et soir contre le mal.",
        verses: [
          { n: 1, arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", translit: "Qul a'ūdhu birabbi l-falaq", french: "Dis : « Je cherche protection auprès du Seigneur de l'aube naissante," },
          { n: 2, arabic: "مِن شَرِّ مَا خَلَقَ", translit: "Min sharri mā khalaq", french: "contre le mal des êtres qu'Il a créés," },
          { n: 3, arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ", translit: "Wa min sharri ghāsiqin idhā waqab", french: "contre le mal de l'obscurité quand elle s'approfondit," },
          { n: 4, arabic: "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ", translit: "Wa min sharri n-naffāthāti fī l-'uqad", french: "contre le mal de celles qui soufflent sur les nœuds," },
          { n: 5, arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ", translit: "Wa min sharri ḥāsidin idhā ḥasad", french: "et contre le mal de l'envieux quand il envie. »" }
        ]
      },
      { type: "surah", id: "surah-ikhlas", title: "Al-Ikhlas — Le Monothéisme pur", icon: "🕌",
        surahNumber: 112, nameArabic: "الإِخْلَاص", nameLatin: "Al-Ikhlas", meaning: "Le Monothéisme pur",
        revelation: "Mecquoise", versesCount: 4,
        description: "Équivaut au tiers du Coran selon le Prophète ﷺ.",
        verses: [
          { n: 1, arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ", translit: "Qul huwa llāhu aḥad", french: "Dis : « Il est Allah, Unique. »" },
          { n: 2, arabic: "اللَّهُ الصَّمَدُ", translit: "Allāhu ṣ-ṣamad", french: "Allah, Le Seul à être imploré pour ce que nous désirons." },
          { n: 3, arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ", translit: "Lam yalid wa lam yūlad", french: "Il n'a jamais engendré, n'a pas été engendré non plus." },
          { n: 4, arabic: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", translit: "Wa lam yakun lahū kufuwan aḥad", french: "Et nul n'est égal à Lui." }
        ]
      },
      { type: "surah", id: "surah-masad", title: "Al-Masad — Les Fibres", icon: "🕌",
        surahNumber: 111, nameArabic: "المَسَد", nameLatin: "Al-Masad", meaning: "Les Fibres",
        revelation: "Mecquoise", versesCount: 5,
        description: "Sourate sur Abū Lahab, l'ennemi du Prophète ﷺ.",
        verses: [
          { n: 1, arabic: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ", translit: "Tabbat yadā abī lahabin wa tabb", french: "Que périssent les deux mains d'Abū Lahab et que lui-même périsse !" },
          { n: 2, arabic: "مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ", translit: "Mā aghnā 'anhu māluhu wa mā kasab", french: "Sa fortune ne lui sert à rien, ni ce qu'il a acquis." },
          { n: 3, arabic: "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ", translit: "Sa-yaṣlā nāran dhāta lahab", french: "Il sera brûlé dans un Feu plein de flammes." },
          { n: 4, arabic: "وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ", translit: "Wa mra'atuhu ḥammālata l-ḥaṭab", french: "De même sa femme, la porteuse de bois." },
          { n: 5, arabic: "فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ", translit: "Fī jīdihā ḥablun min masad", french: "à son cou, une corde de fibres." }
        ]
      },
      { type: "surah", id: "surah-nasr", title: "An-Nasr — Le Secours", icon: "🕌",
        surahNumber: 110, nameArabic: "النَّصْر", nameLatin: "An-Nasr", meaning: "Le Secours",
        revelation: "Mecquoise", versesCount: 3,
        description: "Annonce la victoire de La Mecque et la fin proche du Prophète ﷺ.",
        verses: [
          { n: 1, arabic: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ", translit: "Idhā jā'a naṣru llāhi wa l-fatḥ", french: "Lorsque vient le secours d'Allah ainsi que la victoire," },
          { n: 2, arabic: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا", translit: "Wa ra'ayta n-nāsa yadkhulūna fī dīni llāhi afwājā", french: "et que tu vois les gens entrer en foule dans la religion d'Allah," },
          { n: 3, arabic: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا", translit: "Fa-sabbiḥ bi-ḥamdi rabbika wa staghfirh, innahū kāna tawwābā", french: "alors, célèbre les louanges de ton Seigneur et implore Son pardon. Car c'est Lui l'Accueillant au repentir." }
        ]
      },
      { type: "surah", id: "surah-kafirun", title: "Al-Kafirun — Les Mécréants", icon: "🕌",
        surahNumber: 109, nameArabic: "الكَافِرُون", nameLatin: "Al-Kafirun", meaning: "Les Mécréants",
        revelation: "Mecquoise", versesCount: 6,
        description: "Sourate de la tolérance et du rejet du compromis en matière de foi.",
        verses: [
          { n: 1, arabic: "قُلْ يَا أَيُّهَا الْكَافِرُونَ", translit: "Qul yā ayyuha l-kāfirūn", french: "Dis : « Ô vous les infidèles !" },
          { n: 2, arabic: "لَا أَعْبُدُ مَا تَعْبُدُونَ", translit: "Lā a'budu mā ta'budūn", french: "Je n'adore pas ce que vous adorez." },
          { n: 3, arabic: "وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ", translit: "Wa lā antum 'ābidūna mā a'bud", french: "Et vous n'êtes pas adorateurs de ce que j'adore." },
          { n: 4, arabic: "وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ", translit: "Wa lā anā 'ābidun mā 'abadtum", french: "Je ne suis pas adorateur de ce que vous adorez." },
          { n: 5, arabic: "وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ", translit: "Wa lā antum 'ābidūna mā a'bud", french: "Et vous n'êtes pas adorateurs de ce que j'adore." },
          { n: 6, arabic: "لَكُمْ دِينُكُمْ وَلِيَ دِينِ", translit: "Lakum dīnukum wa liya dīn", french: "À vous votre religion, et à moi ma religion. »" }
        ]
      },
      { type: "surah", id: "surah-kawthar", title: "Al-Kawthar — L'Abondance", icon: "🕌",
        surahNumber: 108, nameArabic: "الكَوْثَر", nameLatin: "Al-Kawthar", meaning: "L'Abondance",
        revelation: "Mecquoise", versesCount: 3,
        description: "La plus courte sourate. Annonce le fleuve Al-Kawthar au Paradis.",
        verses: [
          { n: 1, arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ", translit: "Innā a'ṭaynāka l-kawthar", french: "Nous t'avons certes accordé al-Kawthar." },
          { n: 2, arabic: "فَصَلِّ لِرَبِّكَ وَانْحَرْ", translit: "Faṣalli lirabbika wa nḥar", french: "Accomplis donc la Ṣalāt pour ton Seigneur et sacrifie." },
          { n: 3, arabic: "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ", translit: "Inna shāni'aka huwa l-abtar", french: "Celui qui te haït sera certes, sans postérité." }
        ]
      },
      { type: "surah", id: "surah-maun", title: "Al-Ma'un — L'Ustensile", icon: "🕌",
        surahNumber: 107, nameArabic: "المَاعُون", nameLatin: "Al-Ma'un", meaning: "L'Ustensile",
        revelation: "Mecquoise", versesCount: 7,
        description: "Sourate sur les hypocrites qui prient pour paraître.",
        verses: [
          { n: 1, arabic: "أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ", translit: "A-ra'ayta lladhī yukadhdhibu bi-d-dīn", french: "Vois-tu celui qui traite de mensonge la Rétribution ?" },
          { n: 2, arabic: "فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ", translit: "Fa-dhālika lladhī yadu''u l-yatīm", french: "C'est bien lui qui repousse l'orphelin," },
          { n: 3, arabic: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ", translit: "Wa lā yaḥuḍḍu 'alā ṭa'āmi l-miskīn", french: "et qui n'encourage point à nourrir le pauvre." },
          { n: 4, arabic: "فَوَيْلٌ لِّلْمُصَلِّينَ", translit: "Fa-waylun lil-muṣallīn", french: "Malheur donc à ceux qui prient" },
          { n: 5, arabic: "الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ", translit: "Alladhīna hum 'an ṣalātihim sāhūn", french: "tout en négligeant leur prière," },
          { n: 6, arabic: "الَّذِينَ هُمْ يُرَاءُونَ", translit: "Alladhīna hum yurā'ūn", french: "et qui font leur prière pour être vus," },
          { n: 7, arabic: "وَيَمْنَعُونَ الْمَاعُونَ", translit: "Wa yamna'ūna l-mā'ūn", french: "et refusent l'ustensile (à leur voisin)." }
        ]
      },
      { type: "surah", id: "surah-quraysh", title: "Quraysh — Les Quraysh", icon: "🕌",
        surahNumber: 106, nameArabic: "قُرَيْش", nameLatin: "Quraysh", meaning: "Les Quraysh",
        revelation: "Mecquoise", versesCount: 4,
        description: "Rappelle aux Quraysh les bienfaits d'Allah sur eux.",
        verses: [
          { n: 1, arabic: "لِإِيلَافِ قُرَيْشٍ", translit: "Li-īlāfi Quraysh", french: "À cause du pacte des Quraysh," },
          { n: 2, arabic: "إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ", translit: "Īlāfihim riḥlata sh-shitā'i wa ṣ-ṣayf", french: "de leur pacte [concernant] les voyages d'hiver et d'été." },
          { n: 3, arabic: "فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ", translit: "Fa-l-ya'budū rabba hādhā l-bayt", french: "Qu'ils adorent donc le Seigneur de cette Maison [la Ka'ba]," },
          { n: 4, arabic: "الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ", translit: "Alladhī aṭ'amahum min jū'in wa āmanahum min khawf", french: "qui les a nourris contre la faim et rassurés contre la peur." }
        ]
      },
      { type: "surah", id: "surah-fil", title: "Al-Fil — L'Éléphant", icon: "🕌",
        surahNumber: 105, nameArabic: "الفِيل", nameLatin: "Al-Fil", meaning: "L'Éléphant",
        revelation: "Mecquoise", versesCount: 5,
        description: "L'histoire de l'armée d'Abraha et des éléphants, détruite par les oiseaux.",
        verses: [
          { n: 1, arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ", translit: "A-lam tara kayfa fa'ala rabbuka bi-aṣḥābi l-fīl", french: "N'as-tu pas vu comment ton Seigneur a agi envers les gens de l'Éléphant ?" },
          { n: 2, arabic: "أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ", translit: "A-lam yaj'al kaydahum fī taḍlīl", french: "N'a-t-Il pas rendu vain leur stratagème ?" },
          { n: 3, arabic: "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ", translit: "Wa arsala 'alayhim ṭayran abābīl", french: "et envoyé sur eux des oiseaux par volées" },
          { n: 4, arabic: "تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ", translit: "Tarmīhim bi-ḥijāratin min sijjīl", french: "qui leur lançaient des pierres d'argile ?" },
          { n: 5, arabic: "فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ", translit: "Fa-ja'alahum ka-'aṣfin ma'kūl", french: "Et Il les a rendus semblables à de la paille mâchée." }
        ]
      },
      { type: "surah", id: "surah-humaza", title: "Al-Humaza — Le Calomniateur", icon: "🕌",
        surahNumber: 104, nameArabic: "الهُمَزَة", nameLatin: "Al-Humaza", meaning: "Le Calomniateur",
        revelation: "Mecquoise", versesCount: 9,
        description: "Avertissement contre les moqueurs et les accumulateurs de richesse.",
        verses: [
          { n: 1, arabic: "وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ", translit: "Waylun li-kulli humazatin lumaza", french: "Malheur à tout calomniateur, diffamateur," },
          { n: 2, arabic: "الَّذِي جَمَعَ مَالًا وَعَدَّدَهُ", translit: "Alladhī jama'a mālan wa 'addadah", french: "qui amasse une fortune et la compte," },
          { n: 3, arabic: "يَحْسَبُ أَنَّ مَالَهُ أَخْلَدَهُ", translit: "Yaḥsabu anna mālahu akhladah", french: "pensant que sa fortune l'immortalisera." },
          { n: 4, arabic: "كَلَّا ۖ لَيُنبَذَنَّ فِي الْحُطَمَةِ", translit: "Kallā la-yunbadhanna fī l-ḥuṭama", french: "Mais non ! Il sera certes, jeté dans la Ḥuṭama." },
          { n: 5, arabic: "وَمَا أَدْرَاكَ مَا الْحُطَمَةُ", translit: "Wa mā adrāka mā l-ḥuṭama", french: "Et qui te fera savoir ce qu'est la Ḥuṭama ?" },
          { n: 6, arabic: "نَارُ اللَّهِ الْمُوقَدَةُ", translit: "Nāru llāhi l-mūqada", french: "C'est le Feu d'Allah, embrasé," },
          { n: 7, arabic: "الَّتِي تَطَّلِعُ عَلَى الْأَفْئِدَةِ", translit: "Allatī taṭṭali'u 'alā l-af'ida", french: "qui monte jusqu'aux cœurs." },
          { n: 8, arabic: "إِنَّهَا عَلَيْهِم مُّؤْصَدَةٌ", translit: "Innahā 'alayhim mu'ṣada", french: "Il se refermera sur eux," },
          { n: 9, arabic: "فِي عَمَدٍ مُّمَدَّدَةٍ", translit: "Fī 'amadin mumaddada", french: "en colonnes étendues." }
        ]
      },
      { type: "surah", id: "surah-asr", title: "Al-'Asr — Le Temps", icon: "🕌",
        surahNumber: 103, nameArabic: "العَصْر", nameLatin: "Al-'Asr", meaning: "Le Temps",
        revelation: "Mecquoise", versesCount: 3,
        description: "Résumé de la réussite : foi, bonnes œuvres, vérité, patience.",
        verses: [
          { n: 1, arabic: "وَالْعَصْرِ", translit: "Wa l-'aṣr", french: "Par le Temps !" },
          { n: 2, arabic: "إِنَّ الْإِنسَانَ لَفِي خُسْرٍ", translit: "Inna l-insāna lafī khusr", french: "L'homme est certes, en perdition," },
          { n: 3, arabic: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ", translit: "Illā lladhīna āmanū wa 'amilū ṣ-ṣāliḥāti wa tawāṣaw bi-l-ḥaqqi wa tawāṣaw bi-ṣ-ṣabr", french: "sauf ceux qui croient et accomplissent les bonnes œuvres, s'enjoignent mutuellement la vérité et s'enjoignent mutuellement l'endurance." }
        ]
      },
      { type: "surah", id: "surah-takathur", title: "At-Takathur — La Course aux richesses", icon: "🕌",
        surahNumber: 102, nameArabic: "التَّكَاثُر", nameLatin: "At-Takathur", meaning: "La Course aux richesses",
        revelation: "Mecquoise", versesCount: 8,
        description: "Avertissement contre l'amour excessif des biens.",
        verses: [
          { n: 1, arabic: "أَلْهَاكُمُ التَّكَاثُرُ", translit: "Alhākumu t-takāthur", french: "La course aux richesses vous distrait," },
          { n: 2, arabic: "حَتَّىٰ زُرْتُمُ الْمَقَابِرَ", translit: "Ḥattā zurtumu l-maqābir", french: "jusqu'à ce que vous visitiez les tombes." },
          { n: 3, arabic: "كَلَّا سَوْفَ تَعْلَمُونَ", translit: "Kallā sawfa ta'lamūn", french: "Mais non ! Vous saurez bientôt." },
          { n: 4, arabic: "ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ", translit: "Thumma kallā sawfa ta'lamūn", french: "Ensuite, non ! Vous saurez bientôt." },
          { n: 5, arabic: "كَلَّا لَوْ تَعْلَمُونَ عِلْمَ الْيَقِينِ", translit: "Kallā law ta'lamūna 'ilma l-yaqīn", french: "Ah ! Si vous saviez avec une science certaine..." },
          { n: 6, arabic: "لَتَرَوُنَّ الْجَحِيمَ", translit: "La-tarawunna l-jaḥīm", french: "Vous verrez sûrement l'Enfer." },
          { n: 7, arabic: "ثُمَّ لَتَرَوُنَّهَا عَيْنَ الْيَقِينِ", translit: "Thumma la-tarawunnahā 'ayna l-yaqīn", french: "Vous le verrez ensuite avec certitude." },
          { n: 8, arabic: "ثُمَّ لَتُسْأَلُنَّ عَنِ النَّعِيمِ", translit: "Thumma la-tus'alunna 'ani n-na'īm", french: "Puis vous serez interrogés sur les bienfaits." }
        ]
      },
      { type: "surah", id: "surah-qaria", title: "Al-Qari'a — Le Fracas", icon: "🕌",
        surahNumber: 101, nameArabic: "القَارِعَة", nameLatin: "Al-Qari'a", meaning: "Le Fracas",
        revelation: "Mecquoise", versesCount: 11,
        description: "Description du Jour du Jugement.",
        verses: [
          { n: 1, arabic: "الْقَارِعَةُ", translit: "Al-qāri'a", french: "Le Fracas !" },
          { n: 2, arabic: "مَا الْقَارِعَةُ", translit: "Mā l-qāri'a", french: "Qu'est-ce que le Fracas ?" },
          { n: 3, arabic: "وَمَا أَدْرَاكَ مَا الْقَارِعَةُ", translit: "Wa mā adrāka mā l-qāri'a", french: "Et qui te fera savoir ce qu'est le Fracas ?" },
          { n: 4, arabic: "يَوْمَ يَكُونُ النَّاسُ كَالْفَرَاشِ الْمَبْثُوثِ", translit: "Yawma yakūnu n-nāsu ka-l-farāshi l-mabthūth", french: "C'est le jour où les gens seront comme des papillons dispersés," },
          { n: 5, arabic: "وَتَكُونُ الْجِبَالُ كَالْعِهْنِ الْمَنفُوشِ", translit: "Wa takūnu l-jibālu ka-l-'ihni l-manfūsh", french: "et les montagnes comme de la laine cardée." },
          { n: 6, arabic: "فَأَمَّا مَن ثَقُلَتْ مَوَازِينُهُ", translit: "Fa-ammā man thaqulat mawāzīnuh", french: "Quant à celui dont la balance sera lourde," },
          { n: 7, arabic: "فَهُوَ فِي عِيشَةٍ رَّاضِيَةٍ", translit: "Fa-huwa fī 'īshatin rāḍiya", french: "il aura une vie agréable." },
          { n: 8, arabic: "وَأَمَّا مَنْ خَفَّتْ مَوَازِينُهُ", translit: "Wa ammā man khaffat mawāzīnuh", french: "Et quant à celui dont la balance sera légère," },
          { n: 9, arabic: "فَأُمُّهُ هَاوِيَةٌ", translit: "Fa-ummuhu hāwiya", french: "sa mère sera l'Abîme." },
          { n: 10, arabic: "وَمَا أَدْرَاكَ مَا هِيَهْ", translit: "Wa mā adrāka mā hiyah", french: "Et qui te fera savoir ce que c'est ?" },
          { n: 11, arabic: "نَارٌ حَامِيَةٌ", translit: "Nārun ḥāmiya", french: "C'est un Feu brûlant." }
        ]
      },
      { type: "surah", id: "surah-adiyat", title: "Al-'Adiyat — Les Coursiers", icon: "🕌",
        surahNumber: 100, nameArabic: "العَادِيَات", nameLatin: "Al-'Adiyat", meaning: "Les Coursiers",
        revelation: "Mecquoise", versesCount: 11,
        description: "Serment par les chevaux et rappel de l'ingratitude humaine.",
        verses: [
          { n: 1, arabic: "وَالْعَادِيَاتِ ضَبْحًا", translit: "Wa l-'ādiyāti ḍabḥā", french: "Par les coursiers qui halètent," },
          { n: 2, arabic: "فَالْمُورِيَاتِ قَدْحًا", translit: "Fa-l-mūriyāti qadḥā", french: "qui font jaillir des étincelles," },
          { n: 3, arabic: "فَالْمُغِيرَاتِ صُبْحًا", translit: "Fa-l-mughīrāti ṣubḥā", french: "qui attaquent au matin," },
          { n: 4, arabic: "فَأَثَرْنَ بِهِ نَقْعًا", translit: "Fa-atharna bihi naq'ā", french: "et font voler de la poussière," },
          { n: 5, arabic: "فَوَسَطْنَ بِهِ جَمْعًا", translit: "Fa-wasaṭna bihi jam'ā", french: "et pénètrent au milieu de la troupe !" },
          { n: 6, arabic: "إِنَّ الْإِنسَانَ لِرَبِّهِ لَكَنُودٌ", translit: "Inna l-insāna li-rabbihi la-kanūd", french: "L'homme est vraiment ingrat envers son Seigneur." },
          { n: 7, arabic: "وَإِنَّهُ عَلَىٰ ذَٰلِكَ لَشَهِيدٌ", translit: "Wa innahu 'alā dhālika la-shahīd", french: "Il en est témoin." },
          { n: 8, arabic: "وَإِنَّهُ لِحُبِّ الْخَيْرِ لَشَدِيدٌ", translit: "Wa innahu li-ḥubbi l-khayri la-shadīd", french: "Il est violent dans son amour du bien." },
          { n: 9, arabic: "أَفَلَا يَعْلَمُ إِذَا بُعْثِرَ مَا فِي الْقُبُورِ", translit: "A-fa-lā ya'lamu idhā bu'uthira mā fī l-qubūr", french: "Ne sait-il donc pas que quand ce qui est dans les tombes sera bouleversé," },
          { n: 10, arabic: "وَحُصِّلَ مَا فِي الصُّدُورِ", translit: "Wa ḥuṣṣila mā fī ṣ-ṣudūr", french: "et que sera dévoilé ce qui est dans les poitrines," },
          { n: 11, arabic: "إِنَّ رَبَّهُم بِهِمْ يَوْمَئِذٍ لَّخَبِيرٌ", translit: "Inna rabbahum bihim yawma'idhin la-khabīr", french: "ce jour-là, leur Seigneur sera Parfaitement Connaisseur d'eux." }
        ]
      },
      { type: "surah", id: "surah-zalzala", title: "Az-Zalzala — Le Tremblement", icon: "🕌",
        surahNumber: 99, nameArabic: "الزَّلْزَلَة", nameLatin: "Az-Zalzala", meaning: "Le Tremblement",
        revelation: "Mecquoise", versesCount: 8,
        description: "Description du tremblement de terre du Jour du Jugement.",
        verses: [
          { n: 1, arabic: "إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا", translit: "Idhā zulzilati l-arḍu zilzālahā", french: "Quand la terre tremblera de son tremblement," },
          { n: 2, arabic: "وَأَخْرَجَتِ الْأَرْضُ أَثْقَالَهَا", translit: "Wa akhrajati l-arḍu athqālahā", french: "et que la terre rejettera ses fardeaux," },
          { n: 3, arabic: "وَقَالَ الْإِنسَانُ مَا لَهَا", translit: "Wa qāla l-insānu mā lahā", french: "et que l'homme dira : « Qu'a-t-elle ? »" },
          { n: 4, arabic: "يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا", translit: "Yawma'idhin tuḥaddithu akhbārahā", french: "Ce jour-là, elle racontera ses informations," },
          { n: 5, arabic: "بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا", translit: "Bi-anna rabbaka awḥā lahā", french: "car ton Seigneur le lui a révélé." },
          { n: 6, arabic: "يَوْمَئِذٍ يَصْدُرُ النَّاسُ أَشْتَاتًا لِّيُرَوْا أَعْمَالَهُمْ", translit: "Yawma'idhin yaṣduru n-nāsu ashtātan li-yuraw a'mālahum", french: "Ce jour-là, les gens sortiront séparément pour qu'on leur montre leurs œuvres." },
          { n: 7, arabic: "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ", translit: "Fa-man ya'mal mithqāla dharratin khayran yarah", french: "Quiconque fait un bien du poids d'un atome le verra." },
          { n: 8, arabic: "وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ", translit: "Wa man ya'mal mithqāla dharratin sharran yarah", french: "Et quiconque fait un mal du poids d'un atome le verra." }
        ]
      },
      { type: "surah", id: "surah-bayyina", title: "Al-Bayyina — La Preuve", icon: "🕌",
        surahNumber: 98, nameArabic: "البَيِّنَة", nameLatin: "Al-Bayyina", meaning: "La Preuve",
        revelation: "Mecquoise", versesCount: 8,
        description: "Sur la preuve évidente apportée par Allah.",
        verses: [
          { n: 1, arabic: "لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ الْبَيِّنَةُ", translit: "Lam yakuni lladhīna kafarū min ahli l-kitābi wa l-mushrikīna munfakkīna ḥattā ta'tiyahumu l-bayyina", french: "Les mécréants parmi les gens du Livre et les polythéistes ne devaient cesser qu'après que la preuve leur soit venue," },
          { n: 2, arabic: "رَسُولٌ مِّنَ اللَّهِ يَتْلُو صُحُفًا مُّطَهَّرَةً", translit: "Rasūlun mina llāhi yatlū ṣuḥufan muṭahhara", french: "un Messager d'Allah, récitant des feuilles purifiées," },
          { n: 3, arabic: "فِيهَا كُتُبٌ قَيِّمَةٌ", translit: "Fīhā kutubun qayyima", french: "contenant des écrits de valeur." },
          { n: 4, arabic: "وَمَا تَفَرَّقَ الَّذِينَ أُوتُوا الْكِتَابَ إِلَّا مِن بَعْدِ مَا جَاءَتْهُمُ الْبَيِّنَةُ", translit: "Wa mā tafarraqa lladhīna ūtū l-kitāba illā min ba'di mā jā'athumu l-bayyina", french: "Ceux à qui le Livre avait été donné ne se sont divisés qu'après que la preuve leur fut venue." },
          { n: 5, arabic: "وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ حُنَفَاءَ وَيُقِيمُوا الصَّلَاةَ وَيُؤْتُوا الزَّكَاةَ ۚ وَذَٰلِكَ دِينُ الْقَيِّمَةِ", translit: "Wa mā umirū illā li-ya'budū llāha mukhliṣīna lahu d-dīna ḥunafā'a wa yuqīmū ṣ-ṣalāta wa yu'tū z-zakāta, wa dhālika dīnu l-qayyima", french: "Il ne leur a été commandé que d'adorer Allah, Lui vouant un culte exclusif, d'accomplir la Ṣalāt et d'acquitter la Zakāt. Et voilà la religion de droiture." },
          { n: 6, arabic: "إِنَّ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ فِي نَارِ جَهَنَّمَ خَالِدِينَ فِيهَا ۚ أُولَٰئِكَ هُمْ شَرُّ الْبَرِيَّةِ", translit: "Inna lladhīna kafarū min ahli l-kitābi wa l-mushrikīna fī nāri jahannama khālidīna fīhā, ulā'ika hum sharru l-bariyya", french: "Les mécréants parmi les gens du Livre et les polythéistes seront dans le Feu de l'Enfer, où ils demeureront éternellement. Ce sont les pires des créatures." },
          { n: 7, arabic: "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أُولَٰئِكَ هُمْ خَيْرُ الْبَرِيَّةِ", translit: "Inna lladhīna āmanū wa 'amilū ṣ-ṣāliḥāti ulā'ika hum khayru l-bariyya", french: "Ceux qui ont cru et accompli les œuvres pies, ceux-là sont les meilleures des créatures." },
          { n: 8, arabic: "جَزَاؤُهُمْ عِندَ رَبِّهِمْ جَنَّاتُ عَدْنٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا أَبَدًا ۖ رَّضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ ۚ ذَٰلِكَ لِمَنْ خَشِيَ رَبَّهُ", translit: "Jazā'uhum 'inda rabbihim jannātu 'adnin tajrī min taḥtihā l-anhāru khālidīna fīhā abadā, raḍiya llāhu 'anhum wa raḍū 'anhu, dhālika li-man khashiya rabbah", french: "Leur récompense auprès de leur Seigneur sera les Jardins d'Éden, sous lesquels coulent les ruisseaux, où ils demeureront éternellement. Allah les agréera et ils L'agréeront. Cela pour celui qui craint son Seigneur." }
        ]
      },
      { type: "surah", id: "surah-qadr", title: "Al-Qadr — La Destinée", icon: "🕌",
        surahNumber: 97, nameArabic: "القَدْر", nameLatin: "Al-Qadr", meaning: "La Destinée",
        revelation: "Mecquoise", versesCount: 5,
        description: "Sourate sur la Nuit du Destin, meilleure que 1000 mois.",
        verses: [
          { n: 1, arabic: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ", translit: "Innā anzalnāhu fī laylati l-qadr", french: "Nous l'avons certes, fait descendre [le Coran] pendant la Nuit de la Destinée." },
          { n: 2, arabic: "وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ", translit: "Wa mā adrāka mā laylatu l-qadr", french: "Et qui te fera savoir ce qu'est la Nuit de la Destinée ?" },
          { n: 3, arabic: "لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ", translit: "Laylatu l-qadri khayrun min alfi shahr", french: "La Nuit de la Destinée est meilleure que mille mois." },
          { n: 4, arabic: "تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ", translit: "Tanazzalu l-malā'ikatu wa r-rūḥu fīhā bi-idhni rabbihim min kulli amr", french: "Durant celle-ci descendent les Anges ainsi que l'Esprit, par permission de leur Seigneur pour tout ordre." },
          { n: 5, arabic: "سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ", translit: "Salāmun hiya ḥattā maṭla'i l-fajr", french: "Elle est paix et salut jusqu'à l'apparition de l'aube." }
        ]
      },
      { type: "surah", id: "surah-alaq", title: "Al-'Alaq — L'Adhérence", icon: "🕌",
        surahNumber: 96, nameArabic: "العَلَق", nameLatin: "Al-'Alaq", meaning: "L'Adhérence",
        revelation: "Mecquoise", versesCount: 19,
        description: "Les 5 premiers versets sont la toute première révélation au Prophète ﷺ.",
        verses: [
          { n: 1, arabic: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ", translit: "Iqra' bismi rabbika lladhī khalaq", french: "Lis, au nom de ton Seigneur qui a créé," },
          { n: 2, arabic: "خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ", translit: "Khalaqa l-insāna min 'alaq", french: "qui a créé l'homme d'une adhérence." },
          { n: 3, arabic: "اقْرَأْ وَرَبُّكَ الْأَكْرَمُ", translit: "Iqra' wa rabbuka l-akram", french: "Lis ! Ton Seigneur est le Très Noble," },
          { n: 4, arabic: "الَّذِي عَلَّمَ بِالْقَلَمِ", translit: "Alladhī 'allama bi-l-qalam", french: "qui a enseigné par la plume," },
          { n: 5, arabic: "عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ", translit: "'Allama l-insāna mā lam ya'lam", french: "a enseigné à l'homme ce qu'il ne savait pas." },
          { n: 6, arabic: "كَلَّا إِنَّ الْإِنسَانَ لَيَطْغَىٰ", translit: "Kallā inna l-insāna la-yaṭghā", french: "Non ! L'homme dépasse les limites," },
          { n: 7, arabic: "أَن رَّآهُ اسْتَغْنَىٰ", translit: "An ra'āhu staghnā", french: "pour peu qu'il se croie indépendant." },
          { n: 8, arabic: "إِنَّ إِلَىٰ رَبِّكَ الرُّجْعَىٰ", translit: "Inna ilā rabbika r-ruj'ā", french: "C'est vers ton Seigneur que sera le retour !" },
          { n: 9, arabic: "أَرَأَيْتَ الَّذِي يَنْهَىٰ", translit: "A-ra'ayta lladhī yanhā", french: "Vois-tu celui qui empêche" },
          { n: 10, arabic: "عَبْدًا إِذَا صَلَّىٰ", translit: "'Abdan idhā ṣallā", french: "un serviteur de prier ?" },
          { n: 11, arabic: "أَرَأَيْتَ إِن كَانَ عَلَى الْهُدَىٰ", translit: "A-ra'ayta in kāna 'alā l-hudā", french: "Vois-tu s'il est sur la bonne voie," },
          { n: 12, arabic: "أَوْ أَمَرَ بِالتَّقْوَىٰ", translit: "Aw amara bi-t-taqwā", french: "ou s'il ordonne la piété ?" },
          { n: 13, arabic: "أَرَأَيْتَ إِن كَذَّبَ وَتَوَلَّىٰ", translit: "A-ra'ayta in kadhdhaba wa tawallā", french: "Vois-tu s'il traite de mensonge et tourne le dos ?" },
          { n: 14, arabic: "أَلَمْ يَعْلَم بِأَنَّ اللَّهَ يَرَىٰ", translit: "A-lam ya'lam bi-anna llāha yarā", french: "Ne sait-il pas qu'Allah voit ?" },
          { n: 15, arabic: "كَلَّا لَئِن لَّمْ يَنتَهِ لَنَسْفَعَنَّ بِالنَّاصِيَةِ", translit: "Kallā la-in lam yantahi la-nasfa'anna bi-n-nāṣiya", french: "Mais non ! S'il ne cesse pas, Nous le saisirons par le toupet," },
          { n: 16, arabic: "نَاصِيَةٍ كَاذِبَةٍ خَاطِئَةٍ", translit: "Nāṣiyatin kādhibatin khāṭi'a", french: "un toupet menteur et pécheur !" },
          { n: 17, arabic: "فَلْيَدْعُ نَادِيَهُ", translit: "Fa-l-yad'u nādiyah", french: "Qu'il appelle donc son assemblée !" },
          { n: 18, arabic: "سَنَدْعُ الزَّبَانِيَةَ", translit: "Sa-nad'u z-zabāniya", french: "Nous appellerons les gardiens [de l'Enfer]." },
          { n: 19, arabic: "كَلَّا لَا تُطِعْهُ وَاسْجُدْ وَاقْتَرِب", translit: "Kallā lā tuṭi'hu wa-sjud wa qtareb", french: "Non ! Ne lui obéis pas ; mais prosterne-toi et rapproche-toi." }
        ]
      },
      { type: "surah", id: "surah-tin", title: "At-Tin — Le Figuier", icon: "🕌",
        surahNumber: 95, nameArabic: "التِّين", nameLatin: "At-Tin", meaning: "Le Figuier",
        revelation: "Mecquoise", versesCount: 8,
        description: "Serment par le figuier et l'olivier, puis rappel de la meilleure création.",
        verses: [
          { n: 1, arabic: "وَالتِّينِ وَالزَّيْتُونِ", translit: "Wa t-tīni wa z-zaytūn", french: "Par le figuier et l'olivier !" },
          { n: 2, arabic: "وَطُورِ سِينِينَ", translit: "Wa ṭūri Sīnīn", french: "Et par le Mont Sinai !" },
          { n: 3, arabic: "وَهَٰذَا الْبَلَدِ الْأَمِينِ", translit: "Wa hādhā l-baladi l-amīn", french: "Et par cette Cité sûre !" },
          { n: 4, arabic: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ", translit: "La-qad khalaqnā l-insāna fī aḥsani taqwīm", french: "Nous avons certes créé l'homme dans la forme la plus parfaite." },
          { n: 5, arabic: "ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ", translit: "Thumma radadnāhu asfala sāfilīn", french: "Ensuite, Nous l'avons ramené au niveau le plus bas," },
          { n: 6, arabic: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ", translit: "Illā lladhīna āmanū wa 'amilū ṣ-ṣāliḥāti fa-lahum ajrun ghayru mamnūn", french: "sauf ceux qui croient et accomplissent les bonnes œuvres : ceux-là auront une récompense jamais interrompue." },
          { n: 7, arabic: "فَمَا يُكَذِّبُكَ بَعْدُ بِالدِّينِ", translit: "Fa-mā yukadhdhibuka ba'du bi-d-dīn", french: "Après cela, qu'est-ce qui te fait traiter de mensonge la Rétribution ?" },
          { n: 8, arabic: "أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ", translit: "A-laysa llāhu bi-aḥkami l-ḥākimīn", french: "Allah n'est-Il pas le plus sage des Juges ?" }
        ]
      },
      { type: "surah", id: "surah-sharh", title: "Ash-Sharh — L'Ouverture", icon: "🕌",
        surahNumber: 94, nameArabic: "الشَّرْح", nameLatin: "Ash-Sharh", meaning: "L'Ouverture",
        revelation: "Mecquoise", versesCount: 8,
        description: "Réconfort pour le Prophète ﷺ et rappel que la facilité suit la difficulté.",
        verses: [
          { n: 1, arabic: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ", translit: "A-lam nashraḥ laka ṣadrak", french: "N'avons-Nous pas ouvert pour toi ta poitrine ?" },
          { n: 2, arabic: "وَوَضَعْنَا عَنكَ وِزْرَكَ", translit: "Wa waḍa'nā 'anka wizrak", french: "Et ne t'avons-Nous pas débarrassé de ton fardeau" },
          { n: 3, arabic: "الَّذِي أَنقَضَ ظَهْرَكَ", translit: "Alladhī anqaḍa ẓahrak", french: "qui accablait ton dos ?" },
          { n: 4, arabic: "وَرَفَعْنَا لَكَ ذِكْرَكَ", translit: "Wa rafa'nā laka dhikrak", french: "Et exalté pour toi ta renommée ?" },
          { n: 5, arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", translit: "Fa-inna ma'a l-'usri yusrā", french: "À côté de la difficulté est, certes, une facilité !" },
          { n: 6, arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", translit: "Inna ma'a l-'usri yusrā", french: "À côté de la difficulté est, certes, une facilité !" },
          { n: 7, arabic: "فَإِذَا فَرَغْتَ فَانصَبْ", translit: "Fa-idhā faraghta fanṣab", french: "Quand tu te libères, donc, lève-toi [pour adorer]," },
          { n: 8, arabic: "وَإِلَىٰ رَبِّكَ فَارْغَبْ", translit: "Wa ilā rabbika farghab", french: "et à ton Seigneur aspire." }
        ]
      },
      { type: "surah", id: "surah-duha", title: "Ad-Duha — Le Jour montant", icon: "🕌",
        surahNumber: 93, nameArabic: "الضُّحَى", nameLatin: "Ad-Duha", meaning: "Le Jour montant",
        revelation: "Mecquoise", versesCount: 11,
        description: "Réconfort après une pause de la révélation.",
        verses: [
          { n: 1, arabic: "وَالضُّحَىٰ", translit: "Wa ḍ-ḍuḥā", french: "Par le Jour montant !" },
          { n: 2, arabic: "وَاللَّيْلِ إِذَا سَجَىٰ", translit: "Wa l-layli idhā sajā", french: "Et par la nuit quand elle couvre tout !" },
          { n: 3, arabic: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ", translit: "Mā wadda'aka rabbuka wa mā qalā", french: "Ton Seigneur ne t'a ni abandonné, ni détesté." },
          { n: 4, arabic: "وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ", translit: "Wa la-l-ākhiratu khayrun laka mina l-ūlā", french: "La vie dernière t'est, certes, meilleure que la vie présente." },
          { n: 5, arabic: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ", translit: "Wa la-sawfa yu'ṭīka rabbuka fa-tarḍā", french: "Ton Seigneur t'accordera certes [Ses faveurs], et alors tu seras satisfait." },
          { n: 6, arabic: "أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ", translit: "A-lam yajidka yatīman fa-āwā", french: "Ne t'a-t-Il pas trouvé orphelin ? Alors Il t'a accueilli !" },
          { n: 7, arabic: "وَوَجَدَكَ ضَالًّا فَهَدَىٰ", translit: "Wa wajadaka ḍāllan fa-hadā", french: "Ne t'a-t-Il pas trouvé égaré ? Alors Il t'a guidé." },
          { n: 8, arabic: "وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ", translit: "Wa wajadaka 'ā'ilan fa-aghnā", french: "Ne t'a-t-Il pas trouvé pauvre ? Alors Il t'a enrichi." },
          { n: 9, arabic: "فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ", translit: "Fa-ammā l-yatīma fa-lā taqhar", french: "Quant à l'orphelin, donc, ne le maltraite pas." },
          { n: 10, arabic: "وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ", translit: "Wa ammā s-sā'ila fa-lā tanhar", french: "Quant au mendiant, ne le repousse pas !" },
          { n: 11, arabic: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ", translit: "Wa ammā bi-ni'mati rabbika fa-ḥaddith", french: "Et quant au bienfait de ton Seigneur, proclame-le." }
        ]
      }
    ]
  },

  /* ============ 8. WUDU ============ */
  {
    id: "wudu",
    emoji: "💧",
    name: "Ablutions (Wudu)",
    description: "Le Wudu complet avec conditions et invalidation",
    activities: [
      {
        type: "flash",
        id: "wudu-flash",
        title: "Les étapes du Wudu",
        icon: "📖",
        cards: [
          { arabic: "الوُضُوء",     tts: "الوُضُوء",     audio: "wudu",   translit: "Wudu",      meaning: "Les ablutions — purification avant la prière" },
          { arabic: "النِّيَّة",     tts: "النِّيَّة",     audio: "niyya",  translit: "Niyya",     meaning: "L'intention dans le cœur" },
          { arabic: "اليَدَان",     tts: "اليَدَان",     audio: "mains",  translit: "Les mains", meaning: "Laver les mains 3 fois jusqu'aux poignets" },
          { arabic: "الفَم",        tts: "الفَم",        audio: "bouche", translit: "La bouche", meaning: "Rincer la bouche 3 fois" },
          { arabic: "الأَنْف",      tts: "الأَنْف",      audio: "nez",    translit: "Le nez",    meaning: "Aspirer de l'eau dans le nez 3 fois" },
          { arabic: "الوَجْه",      tts: "الوَجْه",      audio: "visage", translit: "Le visage", meaning: "Laver le visage 3 fois" },
          { arabic: "الذِّرَاعَان", tts: "الذِّرَاعَان", audio: "bras",   translit: "Les bras",  meaning: "Laver les bras 3 fois jusqu'aux coudes" },
          { arabic: "الرَّأْس",     tts: "الرَّأْس",     audio: "tete",   translit: "La tête",   meaning: "Passer les mains mouillées sur la tête 1 fois" },
          { arabic: "الأُذُنَان",   tts: "الأُذُنَان",   audio: "oreilles", translit: "Les oreilles", meaning: "Nettoyer les oreilles avec les index" },
          { arabic: "القَدَمَان",   tts: "القَدَمَان",   audio: "pieds",  translit: "Les pieds", meaning: "Laver les pieds 3 fois jusqu'aux chevilles" }
        ]
      },
      {
        type: "order",
        id: "wudu-order",
        title: "Jeu — Remets le Wudu en ordre",
        icon: "🎯",
        steps: [
          "Formuler l'intention et dire Bismillah",
          "Laver les mains 3 fois",
          "Rincer la bouche 3 fois",
          "Laver le nez 3 fois",
          "Laver le visage 3 fois",
          "Laver les bras (droit puis gauche)",
          "Passer les mains sur la tête",
          "Nettoyer les oreilles",
          "Laver les pieds (droit puis gauche)"
        ]
      }
    ]
  },

  /* ============ 9. BONNES MANIÈRES ============ */
  {
    id: "manners",
    emoji: "😊",
    name: "Bonnes manières",
    description: "Adab et invocations du quotidien",
    activities: [
      {
        type: "flash",
        id: "manners-flash",
        title: "Invocations essentielles",
        icon: "📖",
        cards: [
          { arabic: "بِسْمِ اللهِ",           tts: "بِسْمِ اللهِ",           audio: "bismillah",     translit: "Bismillah",              meaning: "Avant de manger : « Au nom d'Allah »" },
          { arabic: "الحَمْدُ لِلهِ",         tts: "الحَمْدُ لِلهِ",         audio: "alhamdulillah", translit: "Alhamdulillah",          meaning: "Après avoir mangé : « Louange à Allah »" },
          { arabic: "السَّلَامُ عَلَيْكُمْ",  tts: "السَّلَامُ عَلَيْكُمْ",  audio: "salam",         translit: "As-salamu 'alaykum",     meaning: "Saluer : « Que la paix soit sur vous »" },
          { arabic: "جَزَاكَ اللهُ خَيْرًا",   tts: "جَزَاكَ اللهُ خَيْرًا",   audio: "jazakallah",    translit: "Jazaka Allahu khayran",  meaning: "Remercier : « Qu'Allah te récompense »" },
          { arabic: "إِنْ شَاءَ الله",         tts: "إِنْ شَاءَ الله",         audio: "inshallah",     translit: "In sha Allah",           meaning: "Parler du futur : « Si Allah le veut »" },
          { arabic: "مَا شَاءَ الله",          tts: "مَا شَاءَ الله",          audio: "mashallah",     translit: "Ma sha Allah",           meaning: "Admiration : « Ce qu'Allah a voulu »" },
          { arabic: "سُبْحَانَ الله",          tts: "سُبْحَانَ الله",          audio: "subhanallah",   translit: "Subhan Allah",           meaning: "Émerveillement : « Gloire à Allah »" },
          { arabic: "اللهُ أَكْبَر",            tts: "اللهُ أَكْبَر",            audio: "allahuakbar",   translit: "Allahu Akbar",           meaning: "« Allah est le plus grand »" },
          { arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ", tts: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ", audio: "lahawla", translit: "Lā ḥawla wa lā quwwata illā bi-Llāh", meaning: "« Il n'y a de force ni de puissance qu'en Allah »" },
          { arabic: "أَسْتَغْفِرُ الله",        tts: "أَسْتَغْفِرُ الله",        audio: "astaghfirullah", translit: "Astaghfirullah",       meaning: "Demander pardon : « Je demande pardon à Allah »" }
        ]
      },
      {
        type: "lesson",
        id: "lesson-adab",
        title: "Leçon — L'Adab du musulman",
        icon: "📚",
        sections: [
          { heading: "L'Adab envers Allah", text: "Dire Bismillah avant toute action importante, Alhamdulillah après un bienfait, In sha Allah pour le futur, Astaghfirullah après une erreur. Éviter de jurer par Allah sans nécessité." },
          { heading: "L'Adab envers les parents", text: "Allah a dit : « Et ton Seigneur a décrété : n'adorez que Lui ; et (marquez) de la bonté envers les père et mère. » (17:23). Les servir, ne pas leur dire « fi », prier pour eux." },
          { heading: "L'Adab envers les voisins", text: "Le Prophète ﷺ a dit : « Celui qui croit en Allah et au Jour dernier, qu'il ne nuise pas à son voisin. » Lui dire salam, l'aider, partager la nourriture, ne pas faire de bruit." },
          { heading: "L'Adab à table", text: "Manger avec la main droite, dire Bismillah, ne pas critiquer la nourriture, ne pas manger trop, dire Alhamdulillah à la fin." },
          { heading: "L'Adab de la parole", text: "Parler peu, dire la vérité, ne pas médire, ne pas calomnier, ne pas se moquer, dire du bien ou se taire." }
        ]
      }
    ]
  },

  /* ============ 10. DÉCOUVRIR LE CORAN ============ */
  {
    id: "quran-learning",
    emoji: "📖",
    name: "Découvrir le Coran",
    description: "Comprendre le Livre, apprendre son vocabulaire et installer une petite routine de lecture",
    activities: [
      {
        type: "lesson",
        id: "quran-learning-lesson",
        title: "Leçon — Mon chemin avec le Coran",
        icon: "📖",
        objective: "Découvrir à quoi sert le Coran et comment commencer à l'apprendre pas à pas.",
        sections: [
          { heading: "Un guide pour bien agir", text: "Le Coran invite à connaître Allah, à faire le bien et à choisir une conduite juste. On peut lire un passage, écouter sa récitation, puis réfléchir à ce qu'il nous apprend.", reference: "Le Coran guide vers ce qui est le plus droit — 17:9", arabic: "إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ وَيُبَشِّرُ الْمُؤْمِنِينَ الَّذِينَ يَعْمَلُونَ الصَّالِحَاتِ أَنَّ لَهُمْ أَجْرًا كَبِيرًا", meaning: "Ce Coran guide vers la voie la plus droite et annonce une grande récompense aux croyants qui font le bien.", audio: "audio/surahs/017_009.mp3" },
          { heading: "Un livre composé de sourates et de versets", text: "Le Coran est organisé en sourates, elles-mêmes composées de versets appelés āyāt. Une sourate peut être courte ou longue. Chaque verset se lit dans le contexte de la sourate.", reference: "Écouter Al-Fātiḥa, la première sourate", arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ · الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", meaning: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux. Louange à Allah, Seigneur des mondes.", audio: "audio/surahs/001_full.mp3" },
          { heading: "Lire, écouter et comprendre", text: "On peut apprendre en regardant les lettres, en écoutant une récitation et en découvrant le sens dans une traduction fiable. Une traduction aide à comprendre le sens en français ; elle ne remplace pas le texte arabe.", reference: "Les cinq premiers versets révélés — 96:1–5", arabic: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ۝ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ ۝ الَّذِي عَلَّمَ بِالْقَلَمِ ۝ عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ", meaning: "Lis au nom de ton Seigneur qui a créé… Il a enseigné à l'être humain ce qu'il ne savait pas.", audioTracks: ["audio/surahs/096_001.mp3", "audio/surahs/096_002.mp3", "audio/surahs/096_003.mp3", "audio/surahs/096_004.mp3", "audio/surahs/096_005.mp3"] },
          { heading: "Une petite routine régulière", text: "Choisis avec un adulte un court passage. Écoute-le, répète-le doucement, puis reviens-y un autre jour. Si un mot ou une règle te semble difficile, demande à une personne de confiance qui connaît le Coran.", reference: "Réciter le Coran avec soin — 73:4", arabic: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا", meaning: "Et récite le Coran clairement et avec soin.", audio: "audio/surahs/073_004.mp3" }
        ],
        takeaway: "Je peux écouter, lire, comprendre le sens et réviser un peu à la fois.",
        challenge: "Choisis une courte sourate du jeu : écoute un verset, puis explique avec tes mots une idée que tu en retiens."
      },
      {
        type: "quiz",
        id: "quran-learning-quiz",
        title: "Quiz — Les mots du Coran",
        icon: "🧠",
        questions: [
          { q: "Comment appelle-t-on un chapitre du Coran ?", answers: ["Une sourate", "Une rak'a", "Un wudu"], correct: 0 },
          { q: "Comment appelle-t-on un verset du Coran ?", answers: ["Un minbar", "Une āya", "Un mihrab"], correct: 1 },
          { q: "Que peut-on faire pour mieux apprendre un passage ?", answers: ["L'écouter, le lire et réfléchir à son sens", "Le réciter très vite sans écouter", "L'apprendre sans jamais le revoir"], correct: 0 },
          { q: "Une traduction française du Coran…", answers: ["Aide à comprendre le sens", "Remplace le texte arabe dans tous les usages", "Est une nouvelle sourate"], correct: 0 },
          { q: "Que faire si un passage est difficile à comprendre ?", answers: ["Inventer une réponse", "Demander à un adulte de confiance qui connaît le Coran", "Se moquer de la question"], correct: 1 }
        ]
      },
      {
        type: "memory",
        id: "quran-learning-memory",
        title: "Jeu — Le vocabulaire du Coran",
        icon: "🧩",
        pairs: [
          { a: "Sourate", b: "Chapitre du Coran" },
          { a: "Āya", b: "Verset du Coran" },
          { a: "Récitation", b: "Lire à voix haute" },
          { a: "Révision", b: "Revoir pour mieux retenir" }
        ]
      },
      {
        type: "order",
        id: "quran-learning-order",
        title: "Défi — Ma routine de révision",
        icon: "🎯",
        steps: [
          "Choisir un court passage à apprendre",
          "Écouter attentivement sa récitation",
          "Répéter un verset à la fois",
          "Découvrir le sens avec une traduction fiable",
          "Revenir au passage un autre jour pour le réviser"
        ]
      }
    ]
  },

  /* ============ 11. VALEURS AU QUOTIDIEN ============ */
  {
    id: "values",
    emoji: "💛",
    name: "Les valeurs au quotidien",
    description: "Apprendre à parler avec respect, tenir sa parole et apaiser les conflits",
    activities: [
      {
        type: "lesson",
        id: "values-lesson",
        title: "Leçon — Des valeurs qui se vivent",
        icon: "💛",
        objective: "Relier les enseignements du Coran à des gestes simples à la maison, à l'école et avec ses amis.",
        sections: [
          { heading: "La bonté envers ses parents", text: "On peut montrer sa gratitude en écoutant, en aidant quand on le peut et en parlant avec douceur. Si on est fâché, on peut demander une pause puis reprendre la conversation calmement.", reference: "Parler à ses parents avec bonté — 17:23", arabic: "وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا ۚ إِمَّا يَبْلُغَنَّ عِندَكَ الْكِبَرَ أَحَدُهُمَا أَوْ كِلَاهُمَا فَلَا تَقُل لَّهُمَا أُفٍّ وَلَا تَنْهَرْهُمَا وَقُل لَّهُمَا قَوْلًا كَرِيمًا", meaning: "Ton Seigneur a ordonné de n'adorer que Lui et de traiter les parents avec bonté. Parle-leur avec respect.", audio: "audio/surahs/017_023.mp3" },
          { heading: "Dire des paroles justes", text: "Avant de parler, demande-toi : est-ce vrai ? Est-ce utile ? Est-ce dit avec respect ? Dire la vérité avec douceur aide les autres et évite beaucoup de disputes.", reference: "Dire des paroles droites — 33:70", arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَقُولُوا قَوْلًا سَدِيدًا", meaning: "Ô vous qui croyez, soyez conscients d'Allah et dites des paroles droites.", audio: "audio/surahs/033_070.mp3" },
          { heading: "Ne pas se moquer", text: "Un surnom blessant ou une moquerie peut faire beaucoup de peine. Le Coran rappelle de ne pas ridiculiser les autres et de ne pas leur donner de surnoms offensants.", reference: "Ne pas se moquer ni blesser par des surnoms — 49:11", arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَسْخَرْ قَوْمٌ مِنْ قَوْمٍ عَسَىٰ أَنْ يَكُونُوا خَيْرًا مِنْهُمْ وَلَا نِسَاءٌ مِنْ نِسَاءٍ عَسَىٰ أَنْ يَكُنَّ خَيْرًا مِنْهُنَّ وَلَا تَلْمِزُوا أَنْفُسَكُمْ وَلَا تَنَابَزُوا بِالْأَلْقَابِ", meaning: "Que personne ne se moque d'un autre groupe ; ne vous insultez pas et ne vous donnez pas de surnoms blessants.", audio: "audio/surahs/049_011.mp3" },
          { heading: "Réparer une dispute", text: "Quand deux personnes se disputent, on peut les aider à se calmer, écouter chacun et chercher une solution juste. Si le problème est sérieux, il faut demander l'aide d'un adulte.", reference: "Les croyants sont appelés à rétablir la paix — 49:10", arabic: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ", meaning: "Les croyants sont frères : recherchez donc la paix entre eux.", audio: "audio/surahs/049_010.mp3" },
          { heading: "Respecter la vie privée", text: "Évite de répéter une rumeur ou de raconter quelque chose de blessant sur quelqu'un en son absence. En cas de doute, ne partage pas le message et demande conseil à un adulte.", reference: "Éviter les soupçons et la médisance — 49:12", arabic: "وَلَا يَغْتَبْ بَعْضُكُمْ بَعْضًا ۚ أَيُحِبُّ أَحَدُكُمْ أَنْ يَأْكُلَ لَحْمَ أَخِيهِ مَيْتًا فَكَرِهْتُمُوهُ", meaning: "Ne médisez pas les uns des autres. Le verset compare la médisance à un acte répugnant.", audio: "audio/surahs/049_012.mp3" }
        ],
        takeaway: "Le respect se voit dans mes paroles, mes promesses et ma façon de traiter les autres.",
        challenge: "Cette semaine, choisis une action : aider à la maison, réparer une parole blessante ou inclure quelqu'un dans un jeu."
      },
      {
        type: "quiz",
        id: "values-quiz",
        title: "Quiz — Que faire dans cette situation ?",
        icon: "🧠",
        questions: [
          { q: "Un ami se trompe en lisant. Que peux-tu faire ?", answers: ["Te moquer de lui", "L'aider gentiment s'il le souhaite", "Raconter son erreur à toute la classe"], correct: 1 },
          { q: "Tu as promis de rendre un livre demain. Quelle attitude est juste ?", answers: ["Essayer de tenir ta promesse", "Faire comme si tu avais oublié", "Cacher le livre"], correct: 0 },
          { q: "Tu entends une rumeur sur une camarade. Que faire ?", answers: ["La partager partout", "Ne pas la répéter et demander conseil à un adulte si nécessaire", "Ajouter une histoire inventée"], correct: 1 },
          { q: "Deux amis se disputent devant toi. Quelle aide est la plus utile ?", answers: ["Encourager la dispute", "Les aider à se calmer et chercher un adulte si besoin", "Choisir un camp sans les écouter"], correct: 1 },
          { q: "Tu as parlé trop durement à quelqu'un. Que peux-tu faire ?", answers: ["Reconnaître ton erreur et présenter des excuses", "Dire que c'est toujours sa faute", "Refuser de lui reparler"], correct: 0 }
        ]
      },
      {
        type: "memory",
        id: "values-memory",
        title: "Jeu — Associe chaque valeur à une action",
        icon: "🧩",
        pairs: [
          { a: "Respect", b: "Parler sans se moquer" },
          { a: "Honnêteté", b: "Dire ce qui est vrai" },
          { a: "Fiabilité", b: "Faire de son mieux pour tenir sa promesse" },
          { a: "Réconciliation", b: "Aider à retrouver la paix" }
        ]
      },
      {
        type: "order",
        id: "values-order",
        title: "Défi — Apaiser un désaccord",
        icon: "🎯",
        steps: [
          "Faire une pause et laisser chacun se calmer",
          "Écouter chaque personne sans l'interrompre",
          "Dire ce qui pose problème avec des mots respectueux",
          "Chercher ensemble une solution juste",
          "Demander l'aide d'un adulte si le désaccord continue ou fait peur"
        ]
      }
    ]
  }
];

/* ============ DÉFI FINAL ============ */
const FINAL_CHALLENGE = {
  id: "final",
  title: "Défi Final",
  questions: (() => {
    const pool = [];
    MODULES.forEach(m => {
      m.activities.forEach(a => {
        if (a.type === "quiz" && Array.isArray(a.questions)) {
          a.questions.forEach(q => pool.push({ ...q, source: m.name }));
        }
      });
    });
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, 15);
  })()
};

/* =====================================================
   PHASE 2 — GAMIFICATION
   ===================================================== */

/* ---------- NIVEAUX ----------
   Formule : XP requis pour passer du niveau N au N+1 = 100 + (N-1)*50
   Niveau 1 → 2 : 100 XP
   Niveau 2 → 3 : 150 XP
   Niveau 3 → 4 : 200 XP
   ...
*/
function xpForLevel(level) {
  return 100 + (level - 1) * 50;
}

function totalXpForLevel(level) {
  // XP total cumulé pour atteindre le niveau `level` (depuis 0)
  let sum = 0;
  for (let i = 1; i < level; i++) sum += xpForLevel(i);
  return sum;
}

function levelFromXp(totalXp) {
  let level = 1;
  while (totalXp >= totalXpForLevel(level + 1)) level++;
  return level;
}

/* ---------- TITRES selon le niveau ---------- */
const LEVEL_TITLES = [
  { minLevel: 1,  title: "Petit curieux" },
  { minLevel: 3,  title: "Apprenti" },
  { minLevel: 5,  title: "Petit savant" },
  { minLevel: 8,  title: "Étoile montante" },
  { minLevel: 12, title: "Éclaireur" },
  { minLevel: 16, title: "Chercheur de savoir" },
  { minLevel: 20, title: "Gardien du Coran" },
  { minLevel: 25, title: "Lumière de la Oumma" },
  { minLevel: 30, title: "Étoile du Coran" },
  { minLevel: 40, title: "Sage" },
  { minLevel: 50, title: "Maître éclairé" }
];

function titleForLevel(level) {
  let t = LEVEL_TITLES[0].title;
  for (const l of LEVEL_TITLES) if (level >= l.minLevel) t = l.title;
  return t;
}

/* ---------- AVATARS ---------- */
/* cost = 0 → débloqué par défaut
   cost > 0 → achetable en pièces                                       */
const AVATARS = [
  { id: "boy1",    emoji: "👦", name: "Petit garçon",     cost: 0 },
  { id: "girl1",   emoji: "👧", name: "Petite fille",     cost: 0 },
  { id: "student", emoji: "🧑‍🎓", name: "Étudiant",         cost: 0 },
  { id: "cat",     emoji: "🐱", name: "Chat",             cost: 50 },
  { id: "lion",    emoji: "🦁", name: "Lion",             cost: 80 },
  { id: "tiger",   emoji: "🐯", name: "Tigre",            cost: 80 },
  { id: "falcon",  emoji: "🦅", name: "Faucon",           cost: 120 },
  { id: "dolphin", emoji: "🐬", name: "Dauphin",          cost: 120 },
  { id: "star",    emoji: "⭐", name: "Étoile",           cost: 150 },
  { id: "moon",    emoji: "🌙", name: "Croissant de lune", cost: 150 },
  { id: "kaaba",   emoji: "🕋", name: "Ka'ba",            cost: 300 },
  { id: "mosque",  emoji: "🕌", name: "Mosquée",          cost: 300 },
  { id: "quran",   emoji: "📖", name: "Coran",            cost: 400 },
  { id: "crown",   emoji: "👑", name: "Couronne",         cost: 500 },
  { id: "rainbow", emoji: "🌈", name: "Arc-en-ciel",      cost: 500 },
  { id: "diamond", emoji: "💎", name: "Diamant",          cost: 800 }
];

/* ---------- BADGES ---------- */
/* condition(state) → retourne true si le badge est débloqué                */
const BADGES = [
  { id: "first_steps",   icon: "🌟", name: "Premiers pas",      desc: "Termine ta première activité",            condition: s => s.stats.activitiesCompleted >= 1 },
  { id: "five_acts",     icon: "🏃", name: "En route",          desc: "Termine 5 activités",                     condition: s => s.stats.activitiesCompleted >= 5 },
  { id: "ten_acts",      icon: "🚀", name: "Fusée",             desc: "Termine 10 activités",                    condition: s => s.stats.activitiesCompleted >= 10 },
  { id: "twenty_acts",   icon: "🎯", name: "Assidu",            desc: "Termine 20 activités",                    condition: s => s.stats.activitiesCompleted >= 20 },
  { id: "perfect_quiz",  icon: "💯", name: "Sans faute",        desc: "Obtiens 3 étoiles à un quiz",             condition: s => s.stats.perfectQuizzes >= 1 },
  { id: "five_perfect",  icon: "🎖️", name: "Toujours parfait",  desc: "5 quiz parfaits",                         condition: s => s.stats.perfectQuizzes >= 5 },
  { id: "letter_master", icon: "🔤", name: "Maître des lettres", desc: "Termine le module Lettres",              condition: s => s.stats.moduleCompleted.includes("arabic") },
  { id: "number_master", icon: "🔢", name: "As des chiffres",   desc: "Termine le module Chiffres",              condition: s => s.stats.moduleCompleted.includes("numbers") },
  { id: "pillar_master", icon: "🕌", name: "Pilier solide",     desc: "Termine le module Piliers",               condition: s => s.stats.moduleCompleted.includes("pillars") },
  { id: "prophet_master",icon: "🌟", name: "Ami des prophètes", desc: "Termine le module Prophètes",             condition: s => s.stats.moduleCompleted.includes("prophets") },
  { id: "names_master",  icon: "✨", name: "Connaisseur d'Allah",desc:"Termine le module 99 Noms",              condition: s => s.stats.moduleCompleted.includes("names") },
  { id: "dua_master",    icon: "🤲", name: "Petit invocateur",  desc: "Termine le module Du'ā",                  condition: s => s.stats.moduleCompleted.includes("duas") },
  { id: "surah_master",  icon: "📖", name: "Récitateur",        desc: "Termine le module Sourates",              condition: s => s.stats.moduleCompleted.includes("surahs") },
  { id: "wudu_master",   icon: "💧", name: "Purifié",           desc: "Termine le module Wudu",                  condition: s => s.stats.moduleCompleted.includes("wudu") },
  { id: "manners_master",icon: "😊", name: "Bien élevé",        desc: "Termine le module Bonnes manières",       condition: s => s.stats.moduleCompleted.includes("manners") },
  { id: "quran_learner", icon: "📖", name: "Ami du Coran",      desc: "Termine le module Découvrir le Coran",   condition: s => s.stats.moduleCompleted.includes("quran-learning") },
  { id: "daily_values",  icon: "💛", name: "Cœur attentionné",  desc: "Termine le module Valeurs au quotidien", condition: s => s.stats.moduleCompleted.includes("values") },
  { id: "streak_3",      icon: "🔥", name: "3 jours de feu",    desc: "Joue 3 jours d'affilée",                  condition: s => s.streak >= 3 },
  { id: "streak_7",      icon: "🔥", name: "Une semaine !",     desc: "Joue 7 jours d'affilée",                  condition: s => s.streak >= 7 },
  { id: "streak_30",     icon: "🌋", name: "Inarrêtable",       desc: "Joue 30 jours d'affilée",                 condition: s => s.streak >= 30 },
  { id: "level_5",       icon: "🎖️", name: "Niveau 5",          desc: "Atteins le niveau 5",                     condition: s => s.level >= 5 },
  { id: "level_10",      icon: "🏅", name: "Niveau 10",         desc: "Atteins le niveau 10",                    condition: s => s.level >= 10 },
  { id: "level_20",      icon: "🥇", name: "Niveau 20",         desc: "Atteins le niveau 20",                    condition: s => s.level >= 20 },
  { id: "rich_kid",      icon: "💰", name: "Petit riche",       desc: "Amasse 500 pièces",                       condition: s => s.coins >= 500 },
  { id: "shopper",       icon: "🛍️", name: "Acheteur",          desc: "Achète 3 objets à la boutique",           condition: s => s.stats.itemsBought >= 3 },
  { id: "collector",     icon: "🏆", name: "Collectionneur",    desc: "Débloque 5 avatars",                      condition: s => s.ownedAvatars.length >= 5 },
  { id: "final_hero",    icon: "👑", name: "Héros du Défi",     desc: "Termine le Défi Final",                   condition: s => s.stats.finalChallenges >= 1 }
];

/* ---------- BOUTIQUE ---------- */
/* Les items cosmétiques : débloquent des avatars (ou thèmes futurs)       */
const SHOP_ITEMS = AVATARS.filter(a => a.cost > 0).map(a => ({
  id: a.id,
  emoji: a.emoji,
  name: a.name,
  price: a.cost,
  type: "avatar"
}));
