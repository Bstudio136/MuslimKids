/* =========================================================
   Muslim Kids — Logique du jeu
   PHASE 2 (XP, badges, shop, streak, avatar) + Soutien créateur
   ========================================================= */

/* =========================================================
   CONFIGURATION — À PERSONNALISER PAR LE CRÉATEUR
   ========================================================= */
const CREATOR = {
  name: "OneMuslim",                          // ← Ton nom ici
  paypal: "https://paypal.me/tonlien",               // ← Ton lien PayPal.me
  paypalEmail: "tonemail@exemple.com",               // ← Ton email PayPal
  bitcoin: "bc1qs3q7rkyndu7he3n507tsavkuq7wg6wkdrds4ee",   // ← Ton adresse BTC
  ethereum: "0xaca9E77D755BEfcE1f61b24A45Fc5b3d69F8Afa6",    // ← Ton adresse ETH
  usdt: "TDBr65pw9YYJoPx8MeN5rJXmjRBTstV6Sp",        // ← Ton adresse USDT (TRC20)
  kofi: "",                                          // ← Ko-fi (optionnel)
  buymeacoffee: ""                                   // ← Buy Me a Coffee (optionnel)
};

const UI_TEXT = {
  fr: {
    nav_profile: "Profil", nav_shop: "Boutique", nav_badges: "Badges", nav_support: "Soutenir", nav_settings: "Paramètres",
    greeting: "As-salāmu 'alaykum,", home_tagline: "Apprends l'islam en t'amusant 🌙", final_challenge: "Défi Final", final_prompt: "Teste tout ce que tu sais !",
    settings_title: "Paramètres", settings_description: "Personnalise l'application pour ton apprentissage.", language_label: "Langue de l'interface", language_hint: "Le choix est enregistré sur cet appareil.", content_note: "Les menus et commandes changent de langue. Les leçons et quiz gardent leur texte d'origine.",
    lang_fr: "Français", lang_en: "English", lang_tr: "Türkçe", back: "Retour", sound_on: "Activer / couper le son",
    level: "Niv.", days_short: "j", cards_to_learn: "cartes à découvrir", questions: "questions", pairs: "paires à associer", steps: "étapes à ordonner", verses: "versets · écoute et apprends", sections: "sections · leçon détaillée", chapters: "chapitres · histoire complète",
    listen: "🔊 Écouter", previous: "← Précédent", next: "Suivant →", finish: "Terminer ✓", card: "Carte", isolated: "Isolée", initial: "Initiale", medial: "Médiane", final: "Finale", example: "Exemple",
    good_answer: "✅ Bonne réponse !", correct_answer: "❌ La bonne réponse était :", pairs_found: "Paires", order_prompt: "Remets les étapes dans le bon ordre :", validate: "✓ Valider", well_placed_retry: "❌ {good}/{total} bien placés. Réessaie !",
    listen_verse: "🔊 Écouter le verset", listen_surah: "🔊 Écouter la sourate complète", surah_word: "Sourate", verse_word: "Verset", meaning_intro: "Sens en français :", listen_recitation: "Écouter la récitation", stop_recitation: "⏸️ Arrêter la récitation", playing: "⏸️ Lecture…", lesson_done: "✓ J'ai terminé la leçon", takeaway: "À retenir", try_it: "À toi d'essayer !",
    listen_story: "🎧 Écouter l'histoire", replay_story: "🔁 Réécouter l'histoire", pause: "⏸ Pause", resume: "▶ Reprendre", stop: "⏹ Arrêter", narration_fr: "Narration en français", story_part: "Lecture {current} / {total}", story_finished: "Histoire terminée — tu peux la réécouter.", narration_stopped: "Narration arrêtée", narration_paused: "Lecture en pause", narration_resumed: "Lecture reprise", speech_unavailable: "La narration vocale n'est pas prise en charge par ce navigateur.", voice_unavailable: "La voix française n'est pas disponible sur cet appareil.", story_lessons: "✨ Ce que cette histoire nous apprend :",
    profile_title: "Mon profil", name_placeholder: "Ton prénom...", stars: "⭐ Étoiles", coins: "🪙 Pièces", level_stat: "🎖️ Niveau", streak_stat: "🔥 Jours d'affilée", activities_stat: "📚 Activités", badges_stat: "🎖️ Badges", perfect_quizzes: "💯 Quiz parfaits", surahs_learned: "📖 Sourates apprises", avatars_stat: "🐱 Avatars", creator_support: "❤️ Soutenir le créateur",
    choose_avatar: "Choisir mon avatar", locked_avatars: "Les avatars avec 🔒 s'achètent à la boutique.", balance: "Ton solde : 🪙 {coins} pièces", locked: "Avatar verrouillé 🔒", go_shop: "🛍️ Aller à la boutique", cancel: "Annuler", equipped: "Avatar équipé !", great: "Super !", insufficient: "Pas assez de pièces 😅", missing_coins: "Il te manque {coins} 🪙.<br>Continue à apprendre pour en gagner !", buy: "Acheter", price: "Prix", purchased: "✓ Acheté", shop_tip: "Gagne des pièces en terminant les activités et en gardant ton streak 🔥", badges_title: "Mes badges", unlocked: "✓ Débloqué", badges_unlocked: "badges débloqués",
    continue: "Continuer", well_done: "Bien essayé !", success: "Mā shā Allāh !", activity_done: "Mā shā Allāh ! Activité terminée 🌟", lesson_complete: "Mā shā Allāh ! Leçon terminée 🌟", story_complete: "Mā shā Allāh ! Histoire terminée 🌟", already_earned: "Déjà obtenu — rejoue pour améliorer ton score !", open_support: "Ouvrir", copy: "Copier", copied: "✓ Copié !",
    level_title_1: "Petit curieux", level_title_3: "Apprenti", level_title_5: "Petit savant", level_title_8: "Étoile montante", level_title_12: "Éclaireur", level_title_16: "Chercheur de savoir", level_title_20: "Gardien du Coran", level_title_25: "Lumière de la Oumma", level_title_30: "Étoile du Coran", level_title_40: "Sage", level_title_50: "Maître éclairé"
  },
  en: {
    nav_profile: "Profile", nav_shop: "Shop", nav_badges: "Badges", nav_support: "Support", nav_settings: "Settings",
    greeting: "As-salāmu 'alaykum,", home_tagline: "Learn about Islam while having fun 🌙", final_challenge: "Final Challenge", final_prompt: "Test what you know!",
    settings_title: "Settings", settings_description: "Personalize the app for your learning.", language_label: "Interface language", language_hint: "Your choice is saved on this device.", content_note: "Menus and controls change language. Lessons and quizzes keep their original text.",
    lang_fr: "Français", lang_en: "English", lang_tr: "Türkçe", back: "Back", sound_on: "Toggle sound",
    level: "Lv.", days_short: "d", cards_to_learn: "cards to explore", questions: "questions", pairs: "pairs to match", steps: "steps to order", verses: "verses · listen and learn", sections: "sections · detailed lesson", chapters: "chapters · complete story",
    listen: "🔊 Listen", previous: "← Previous", next: "Next →", finish: "Finish ✓", card: "Card", isolated: "Isolated", initial: "Initial", medial: "Medial", final: "Final", example: "Example",
    good_answer: "✅ Correct!", correct_answer: "❌ The correct answer was:", pairs_found: "Pairs", order_prompt: "Put the steps in the right order:", validate: "✓ Check", well_placed_retry: "❌ {good}/{total} in the right place. Try again!",
    listen_verse: "🔊 Listen to verse", listen_surah: "🔊 Listen to the full surah", surah_word: "Surah", verse_word: "Verse", meaning_intro: "Meaning in French:", listen_recitation: "Listen to recitation", stop_recitation: "⏸️ Stop recitation", playing: "⏸️ Playing…", lesson_done: "✓ I finished the lesson", takeaway: "Remember", try_it: "Give it a try!",
    listen_story: "🎧 Listen to the story", replay_story: "🔁 Listen again", pause: "⏸ Pause", resume: "▶ Resume", stop: "⏹ Stop", narration_fr: "French narration", story_part: "Playing {current} / {total}", story_finished: "Story finished — you can listen again.", narration_stopped: "Narration stopped", narration_paused: "Paused", narration_resumed: "Resumed", speech_unavailable: "Speech narration is not supported by this browser.", voice_unavailable: "A French voice is not available on this device.", story_lessons: "✨ What this story teaches us:",
    profile_title: "My profile", name_placeholder: "Your name...", stars: "⭐ Stars", coins: "🪙 Coins", level_stat: "🎖️ Level", streak_stat: "🔥 Day streak", activities_stat: "📚 Activities", badges_stat: "🎖️ Badges", perfect_quizzes: "💯 Perfect quizzes", surahs_learned: "📖 Surahs learned", avatars_stat: "🐱 Avatars", creator_support: "❤️ Support the creator",
    choose_avatar: "Choose my avatar", locked_avatars: "Avatars with 🔒 can be bought in the shop.", balance: "Your balance: 🪙 {coins} coins", locked: "Avatar locked 🔒", go_shop: "🛍️ Go to shop", cancel: "Cancel", equipped: "Avatar equipped!", great: "Great!", insufficient: "Not enough coins 😅", missing_coins: "You need {coins} more 🪙.<br>Keep learning to earn more!", buy: "Buy", price: "Price", purchased: "✓ Purchased", shop_tip: "Earn coins by completing activities and keeping your streak 🔥", badges_title: "My badges", unlocked: "✓ Unlocked", badges_unlocked: "badges unlocked",
    continue: "Continue", well_done: "Nice try!", success: "Mā shā Allāh!", activity_done: "Mā shā Allāh! Activity completed 🌟", lesson_complete: "Mā shā Allāh! Lesson completed 🌟", story_complete: "Mā shā Allāh! Story completed 🌟", already_earned: "Already earned — play again to improve your score!", open_support: "Open", copy: "Copy", copied: "✓ Copied!",
    level_title_1: "Curious learner", level_title_3: "Apprentice", level_title_5: "Young scholar", level_title_8: "Rising star", level_title_12: "Explorer", level_title_16: "Knowledge seeker", level_title_20: "Guardian of the Qur'an", level_title_25: "Light of the Ummah", level_title_30: "Star of the Qur'an", level_title_40: "Wise one", level_title_50: "Master of knowledge"
  },
  tr: {
    nav_profile: "Profil", nav_shop: "Mağaza", nav_badges: "Rozetler", nav_support: "Destek", nav_settings: "Ayarlar",
    greeting: "Selâmün aleyküm,", home_tagline: "Eğlenerek İslam'ı öğren 🌙", final_challenge: "Final Mücadelesi", final_prompt: "Bilgini dene!",
    settings_title: "Ayarlar", settings_description: "Öğrenmen için uygulamayı kişiselleştir.", language_label: "Arayüz dili", language_hint: "Seçimin bu cihaza kaydedilir.", content_note: "Menüler ve denetimler değişir. Dersler ve testler özgün dilinde kalır.",
    lang_fr: "Français", lang_en: "English", lang_tr: "Türkçe", back: "Geri", sound_on: "Sesi aç / kapat",
    level: "Sv.", days_short: "g", cards_to_learn: "kartı keşfet", questions: "soru", pairs: "eşleştirme çifti", steps: "sıralanacak adım", verses: "ayet · dinle ve öğren", sections: "bölüm · ayrıntılı ders", chapters: "bölüm · tam hikâye",
    listen: "🔊 Dinle", previous: "← Önceki", next: "Sonraki →", finish: "Bitir ✓", card: "Kart", isolated: "Bağımsız", initial: "Başlangıç", medial: "Orta", final: "Son", example: "Örnek",
    good_answer: "✅ Doğru cevap!", correct_answer: "❌ Doğru cevap şuydu:", pairs_found: "Çiftler", order_prompt: "Adımları doğru sıraya koy:", validate: "✓ Kontrol et", well_placed_retry: "❌ {total} adımdan {good} tanesi doğru yerde. Tekrar dene!",
    listen_verse: "🔊 Ayeti dinle", listen_surah: "🔊 Sûrenin tamamını dinle", surah_word: "Sûre", verse_word: "Ayet", meaning_intro: "Fransızca anlamı:", listen_recitation: "Tilaveti dinle", stop_recitation: "⏸️ Tilaveti durdur", playing: "⏸️ Çalıyor…", lesson_done: "✓ Dersi bitirdim", takeaway: "Akılda tut", try_it: "Hadi dene!",
    listen_story: "🎧 Hikâyeyi dinle", replay_story: "🔁 Hikâyeyi tekrar dinle", pause: "⏸ Duraklat", resume: "▶ Devam et", stop: "⏹ Durdur", narration_fr: "Fransızca anlatım", story_part: "Okunuyor {current} / {total}", story_finished: "Hikâye bitti — tekrar dinleyebilirsin.", narration_stopped: "Anlatım durduruldu", narration_paused: "Duraklatıldı", narration_resumed: "Devam ediyor", speech_unavailable: "Bu tarayıcı sesli anlatımı desteklemiyor.", voice_unavailable: "Bu cihazda Fransızca ses bulunamadı.", story_lessons: "✨ Bu hikâyeden öğrendiklerimiz:",
    profile_title: "Profilim", name_placeholder: "Adın...", stars: "⭐ Yıldız", coins: "🪙 Jeton", level_stat: "🎖️ Seviye", streak_stat: "🔥 Günlük seri", activities_stat: "📚 Etkinlikler", badges_stat: "🎖️ Rozetler", perfect_quizzes: "💯 Kusursuz testler", surahs_learned: "📖 Öğrenilen sûreler", avatars_stat: "🐱 Avatarlar", creator_support: "❤️ Geliştiriciyi destekle",
    choose_avatar: "Avatarımı seç", locked_avatars: "🔒 işaretli avatarlar mağazadan alınabilir.", balance: "Bakiyen: 🪙 {coins} jeton", locked: "Avatar kilitli 🔒", go_shop: "🛍️ Mağazaya git", cancel: "İptal", equipped: "Avatar seçildi!", great: "Harika!", insufficient: "Yeterli jeton yok 😅", missing_coins: "{coins} 🪙 daha gerekiyor.<br>Kazanmak için öğrenmeye devam et!", buy: "Satın al", price: "Fiyat", purchased: "✓ Alındı", shop_tip: "Etkinlikleri tamamlayıp serini koruyarak jeton kazan 🔥", badges_title: "Rozetlerim", unlocked: "✓ Açıldı", badges_unlocked: "rozet açıldı",
    continue: "Devam et", well_done: "İyi deneme!", success: "Mā shā Allāh!", activity_done: "Mā shā Allāh! Etkinlik tamamlandı 🌟", lesson_complete: "Mā shā Allāh! Ders tamamlandı 🌟", story_complete: "Mā shā Allāh! Hikâye tamamlandı 🌟", already_earned: "Zaten kazanıldı — puanını yükseltmek için tekrar oyna!", open_support: "Aç", copy: "Kopyala", copied: "✓ Kopyalandı!",
    level_title_1: "Meraklı öğrenci", level_title_3: "Çırak", level_title_5: "Genç bilgin", level_title_8: "Yükselen yıldız", level_title_12: "Kaşif", level_title_16: "Bilgi arayıcısı", level_title_20: "Kur'an'ın koruyucusu", level_title_25: "Ümmetin nuru", level_title_30: "Kur'an'ın yıldızı", level_title_40: "Bilge", level_title_50: "Bilgi ustası"
  }
};

const MODULE_LABELS = {
  en: {
    arabic: ["Arabic letters", "Explore the 28 letters, their forms and examples"], numbers: ["Arabic numbers", "Learn to count from 1 to 1,000"], pillars: ["Five pillars of Islam", "Learn about the five pillars"], prophets: ["The 25 Prophets", "Meet the Prophets mentioned in the Qur'an"], names: ["The 99 Names of Allah", "Discover the beautiful Names of Allah"], duas: ["Daily du'a", "Learn everyday supplications"], surahs: ["Surahs", "Listen to and learn short surahs"], wudu: ["Ablution (Wudu)", "Learn the steps of wudu"], manners: ["Good manners", "Practice good manners in daily life"], "quran-learning": ["Discover the Qur'an", "Learn about the Qur'an and build a reading routine"], values: ["Everyday values", "Practice respect, honesty and peacemaking"]
  },
  tr: {
    arabic: ["Arap harfleri", "28 harfi, yazılış biçimlerini ve örnekleri keşfet"], numbers: ["Arapça sayılar", "1'den 1.000'e kadar saymayı öğren"], pillars: ["İslam'ın beş şartı", "İslam'ın beş şartını öğren"], prophets: ["25 Peygamber", "Kur'an'da adı geçen peygamberleri tanı"], names: ["Allah'ın 99 güzel ismi", "Allah'ın güzel isimlerini keşfet"], duas: ["Günlük dualar", "Günlük hayatta kullanılan duaları öğren"], surahs: ["Sûreler", "Kısa sûreleri dinle ve öğren"], wudu: ["Abdest", "Abdestin adımlarını öğren"], manners: ["Güzel davranışlar", "Günlük hayatta güzel davranışları uygula"], "quran-learning": ["Kur'an'ı keşfet", "Kur'an'ı tanı ve okuma alışkanlığı kazan"], values: ["Günlük değerler", "Saygı, dürüstlük ve barışmayı öğren"]
  }
};

const ACTIVITY_LABELS = {
  en: {
    "arabic-flash": "The 28 Arabic letters", "arabic-lesson-writing": "Lesson — Letter shapes", "numbers-flash-1-10": "Numbers 1 to 10", "numbers-flash-11-20": "Numbers 11 to 20", "numbers-flash-tens": "Tens and large numbers",
    "pillars-flash": "The five pillars", "lesson-shahada": "Lesson — The Shahada", "lesson-salat": "Lesson — Salat", "lesson-zakat": "Lesson — Zakat", "lesson-sawm": "Lesson — Fasting", "lesson-hajj": "Lesson — Hajj",
    "prophets-flash-all": "The 25 Prophets", "prophets-quiz-1": "Quiz — The Prophets (1)", "prophets-quiz-2": "Quiz — The Prophets (2)",
    "story-adam": "The story of Adam", "story-idris": "The story of Idris", "story-nuh": "The story of Nuh", "story-hud": "The story of Hud", "story-salih": "The story of Salih", "story-ibrahim": "The story of Ibrahim", "story-lut": "The story of Lut", "story-ismail": "The story of Ismail", "story-ishaq": "The story of Ishaq", "story-yaqub": "The story of Yaqub", "story-yusuf": "The story of Yusuf", "story-ayyub": "The story of Ayyub", "story-shuayb": "The story of Shu'ayb", "story-musa": "The story of Musa", "story-harun": "The story of Harun", "story-dhulkifl": "The story of Dhul-Kifl", "story-dawud": "The story of Dawud", "story-sulayman": "The story of Sulayman", "story-ilyas": "The story of Ilyas", "story-alyasa": "The story of Al-Yasa", "story-yunus": "The story of Yunus", "story-zakariyya": "The story of Zakariyya", "story-yahya": "The story of Yahya", "story-issa": "The story of Isa", "story-muhammad": "The story of Muhammad ﷺ",
    "names-flash-1": "Names 1 to 33", "names-flash-2": "Names 34 to 66", "names-flash-3": "Names 67 to 99", "duas-flash-1": "Du'a — Waking and sleeping", "duas-flash-2": "Du'a — Eating and drinking", "duas-flash-3": "Du'a — Home and travel", "duas-flash-4": "Du'a — Everyday moments",
    "surah-fatiha": "Al-Fatiha — The Opening", "surah-nas": "An-Nas — Mankind", "surah-falaq": "Al-Falaq — Daybreak", "surah-ikhlas": "Al-Ikhlas — Sincerity", "surah-masad": "Al-Masad — The Palm Fibre", "surah-nasr": "An-Nasr — The Help", "surah-kafirun": "Al-Kafirun — The Disbelievers", "surah-kawthar": "Al-Kawthar — Abundance", "surah-maun": "Al-Ma'un — Small Kindnesses", "surah-quraysh": "Quraysh", "surah-fil": "Al-Fil — The Elephant", "surah-humaza": "Al-Humaza — The Slanderer", "surah-asr": "Al-Asr — Time", "surah-takathur": "At-Takathur — Rivalry in Worldly Increase", "surah-qaria": "Al-Qari'a — The Striking Calamity", "surah-adiyat": "Al-Adiyat — The Chargers", "surah-zalzala": "Az-Zalzala — The Earthquake", "surah-bayyina": "Al-Bayyina — The Clear Proof", "surah-qadr": "Al-Qadr — The Decree", "surah-alaq": "Al-Alaq — The Clinging Clot", "surah-tin": "At-Tin — The Fig", "surah-sharh": "Ash-Sharh — The Relief", "surah-duha": "Ad-Duha — The Morning Brightness",
    "wudu-flash": "The steps of Wudu", "wudu-order": "Game — Put Wudu in order", "manners-flash": "Essential supplications", "lesson-adab": "Lesson — Good Muslim manners", "quran-learning-lesson": "Lesson — My journey with the Qur'an", "quran-learning-quiz": "Quiz — Qur'anic vocabulary", "quran-learning-memory": "Game — Qur'anic vocabulary", "quran-learning-order": "Challenge — My revision routine", "values-lesson": "Lesson — Values we put into practice", "values-quiz": "Quiz — What should you do?", "values-memory": "Game — Match each value to an action", "values-order": "Challenge — Make peace after a disagreement"
  },
  tr: {
    "arabic-flash": "28 Arap harfi", "arabic-lesson-writing": "Ders — Harflerin yazılış biçimleri", "numbers-flash-1-10": "1'den 10'a sayılar", "numbers-flash-11-20": "11'den 20'ye sayılar", "numbers-flash-tens": "Onluklar ve büyük sayılar",
    "pillars-flash": "İslam'ın beş şartı", "lesson-shahada": "Ders — Şehadet", "lesson-salat": "Ders — Namaz", "lesson-zakat": "Ders — Zekât", "lesson-sawm": "Ders — Oruç", "lesson-hajj": "Ders — Hac",
    "prophets-flash-all": "25 Peygamber", "prophets-quiz-1": "Test — Peygamberler (1)", "prophets-quiz-2": "Test — Peygamberler (2)",
    "story-adam": "Âdem'in hikâyesi", "story-idris": "İdris'in hikâyesi", "story-nuh": "Nuh'un hikâyesi", "story-hud": "Hûd'un hikâyesi", "story-salih": "Sâlih'in hikâyesi", "story-ibrahim": "İbrahim'in hikâyesi", "story-lut": "Lût'un hikâyesi", "story-ismail": "İsmail'in hikâyesi", "story-ishaq": "İshak'ın hikâyesi", "story-yaqub": "Yakup'un hikâyesi", "story-yusuf": "Yusuf'un hikâyesi", "story-ayyub": "Eyyûb'un hikâyesi", "story-shuayb": "Şuayb'ın hikâyesi", "story-musa": "Musa'nın hikâyesi", "story-harun": "Harun'un hikâyesi", "story-dhulkifl": "Zülkifl'in hikâyesi", "story-dawud": "Davud'un hikâyesi", "story-sulayman": "Süleyman'ın hikâyesi", "story-ilyas": "İlyas'ın hikâyesi", "story-alyasa": "El-Yesa'nın hikâyesi", "story-yunus": "Yunus'un hikâyesi", "story-zakariyya": "Zekeriyya'nın hikâyesi", "story-yahya": "Yahya'nın hikâyesi", "story-issa": "İsa'nın hikâyesi", "story-muhammad": "Muhammed'in hikâyesi ﷺ",
    "names-flash-1": "1–33. isimler", "names-flash-2": "34–66. isimler", "names-flash-3": "67–99. isimler", "duas-flash-1": "Dua — Uyanma ve uyuma", "duas-flash-2": "Dua — Yeme ve içme", "duas-flash-3": "Dua — Ev ve yolculuk", "duas-flash-4": "Dua — Günlük anlar",
    "surah-fatiha": "Fâtiha — Açılış", "surah-nas": "Nâs — İnsanlar", "surah-falaq": "Felak — Şafak", "surah-ikhlas": "İhlâs — Samimiyet", "surah-masad": "Tebbet — Hurma lifleri", "surah-nasr": "Nasr — Yardım", "surah-kafirun": "Kâfirûn — İnkârcılar", "surah-kawthar": "Kevser — Bolluk", "surah-maun": "Mâûn — Yardım", "surah-quraysh": "Kureyş", "surah-fil": "Fîl — Fil", "surah-humaza": "Hümeze — İftiracı", "surah-asr": "Asr — Zaman", "surah-takathur": "Tekâsür — Çokluk yarışı", "surah-qaria": "Kâria — Büyük sarsıntı", "surah-adiyat": "Âdiyât — Koşan atlar", "surah-zalzala": "Zilzâl — Deprem", "surah-bayyina": "Beyyine — Açık delil", "surah-qadr": "Kadr — Kadir gecesi", "surah-alaq": "Alak — Asılıp tutunan", "surah-tin": "Tîn — İncir", "surah-sharh": "İnşirah — Ferahlık", "surah-duha": "Duhâ — Kuşluk vakti",
    "wudu-flash": "Abdestin adımları", "wudu-order": "Oyun — Abdesti sıraya koy", "manners-flash": "Temel dualar", "lesson-adab": "Ders — Güzel Müslüman ahlakı", "quran-learning-lesson": "Ders — Kur'an yolculuğum", "quran-learning-quiz": "Test — Kur'an kelimeleri", "quran-learning-memory": "Oyun — Kur'an kelimeleri", "quran-learning-order": "Görev — Tekrar rutinim", "values-lesson": "Ders — Günlük hayatta değerler", "values-quiz": "Test — Bu durumda ne yapmalısın?", "values-memory": "Oyun — Değerleri davranışlarla eşleştir", "values-order": "Görev — Anlaşmazlığı barışla çöz"
  }
};

function moduleLabel(module, part = 0) {
  return MODULE_LABELS[state.language]?.[module.id]?.[part] || (part === 0 ? module.name : module.description);
}

function activityLabel(activity) {
  return ACTIVITY_LABELS[state.language]?.[activity.id] || activity.title;
}

function localizedLevelTitle(level) {
  if (state.language === "fr") return titleForLevel(level);
  const title = [...LEVEL_TITLES].reverse().find(item => level >= item.minLevel) || LEVEL_TITLES[0];
  return t(`level_title_${title.minLevel}`);
}

const state = {
  language: "fr",
  // Contenu
  progress: {},
  soundOn: true,

  // Gamification
  stars: 0,
  coins: 0,
  xp: 0,
  level: 1,
  streak: 0,
  lastPlayDate: null,
  playedToday: false,

  // Profil
  playerName: "Petit champion",
  avatar: "boy1",
  ownedAvatars: ["boy1", "girl1", "student"],

  // Badges
  unlockedBadges: [],

  // Statistiques
  stats: {
    activitiesCompleted: 0,
    perfectQuizzes: 0,
    moduleCompleted: [],
    finalChallenges: 0,
    itemsBought: 0,
    surahsCompleted: 0
  },

  // Écran courant
  currentScreen: "home",
  currentModule: null,
  currentActivity: null,

  // Retour du picker avatar
  avatarReturnTo: "home"
};

const el = {
  screen: document.getElementById("screen"),
  topTitle: document.getElementById("topTitle"),
  btnBack: document.getElementById("btnBack"),
  starCount: document.getElementById("starCount"),
  coinCount: document.getElementById("coinCount"),
  levelCount: document.getElementById("levelCount"),
  btnSound: document.getElementById("btnSound"),
  btnSupport: document.getElementById("btnSupport"),
  overlay: document.getElementById("overlay")
};

function t(key, values = {}) {
  let result = UI_TEXT[state.language]?.[key] || UI_TEXT.fr[key] || key;
  for (const [name, value] of Object.entries(values)) result = result.replaceAll(`{${name}}`, value);
  return result;
}

function applyLanguage() {
  document.documentElement.lang = state.language;
  el.btnBack.setAttribute("aria-label", t("back"));
  el.btnSound.setAttribute("aria-label", t("sound_on"));
  el.btnSupport.setAttribute("aria-label", t("nav_support"));
  el.btnSupport.title = state.language === "fr" ? "Soutenir le créateur" : t("nav_support");
  document.getElementById("badgeStars").title = t("stars");
  document.getElementById("badgeCoins").title = t("coins");
  document.getElementById("badgeLevel").title = t("level_stat");
  el.btnSound.textContent = state.soundOn ? "🔊" : "🔇";
}

/* =========================================================
   PERSISTANCE
   ========================================================= */
function saveProgress() {
  try {
    const toSave = {
      progress: state.progress,
      language: state.language,
      soundOn: state.soundOn,
      stars: state.stars,
      coins: state.coins,
      xp: state.xp,
      level: state.level,
      streak: state.streak,
      lastPlayDate: state.lastPlayDate,
      playedToday: state.playedToday,
      playerName: state.playerName,
      avatar: state.avatar,
      ownedAvatars: state.ownedAvatars,
      unlockedBadges: state.unlockedBadges,
      stats: state.stats
    };
    localStorage.setItem("muslim-kids-progress", JSON.stringify(toSave));
  } catch (e) {
    console.warn("Progression non sauvegardée (stockage indisponible).", e);
  }
}

function loadProgress() {
  try {
    const raw = localStorage.getItem("muslim-kids-progress");
    if (!raw) return;
    const d = JSON.parse(raw);
    const validProgress = d.progress && typeof d.progress === "object" && !Array.isArray(d.progress)
      ? Object.fromEntries(Object.entries(d.progress).filter(([, stars]) => Number.isFinite(stars)).map(([id, stars]) => [id, Math.max(0, Math.min(3, Math.floor(stars)))]))
      : {};
    const validStats = d.stats && typeof d.stats === "object" ? d.stats : {};
    Object.assign(state, {
      progress: validProgress,
      language: ["fr", "en", "tr"].includes(d.language) ? d.language : "fr",
      soundOn: d.soundOn !== false,
      stars: Math.max(0, Number(d.stars) || 0),
      coins: Math.max(0, Number(d.coins) || 0),
      xp: Math.max(0, Number(d.xp) || 0),
      level: Math.max(1, Number(d.level) || 1),
      streak: Math.max(0, Number(d.streak) || 0),
      lastPlayDate: d.lastPlayDate || null,
      playedToday: d.playedToday || false,
      playerName: typeof d.playerName === "string" ? d.playerName.trim().slice(0, 20) || "Petit champion" : "Petit champion",
      avatar: AVATARS.some(a => a.id === d.avatar) ? d.avatar : "boy1",
      ownedAvatars: Array.isArray(d.ownedAvatars) ? [...new Set(d.ownedAvatars.filter(id => AVATARS.some(a => a.id === id)))].concat(["boy1", "girl1", "student"]).filter((id, i, arr) => arr.indexOf(id) === i) : ["boy1", "girl1", "student"],
      unlockedBadges: Array.isArray(d.unlockedBadges) ? [...new Set(d.unlockedBadges.filter(id => BADGES.some(b => b.id === id)))] : [],
      stats: Object.assign({
        activitiesCompleted: 0,
        perfectQuizzes: 0,
        moduleCompleted: [],
        finalChallenges: 0,
        itemsBought: 0,
        surahsCompleted: 0
      }, validStats)
    });
    state.stats.activitiesCompleted = Math.max(0, Number(state.stats.activitiesCompleted) || 0);
    state.stats.perfectQuizzes = Math.max(0, Number(state.stats.perfectQuizzes) || 0);
    state.stats.finalChallenges = Math.max(0, Number(state.stats.finalChallenges) || 0);
    state.stats.itemsBought = Math.max(0, Number(state.stats.itemsBought) || 0);
    state.stats.surahsCompleted = Math.max(0, Number(state.stats.surahsCompleted) || 0);
    state.level = levelFromXp(state.xp);
    state.stats.moduleCompleted = Array.isArray(state.stats.moduleCompleted) ? state.stats.moduleCompleted.filter(id => MODULES.some(m => m.id === id)) : [];
    if (!state.ownedAvatars.includes(state.avatar)) state.avatar = "boy1";
  } catch (e) {
    console.warn("Progression invalide : les valeurs par défaut sont utilisées.", e);
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

/* =========================================================
   AUDIO — BIPS
   ========================================================= */
let audioCtx = null;
function ensureAudioCtx() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch (e) { return null; }
  }
  if (audioCtx.state === "suspended") audioCtx.resume().catch(() => {});
  return audioCtx;
}
function beep(freq = 660, duration = 0.12, type = "sine") {
  if (!state.soundOn) return;
  const ctx = ensureAudioCtx();
  if (!ctx) return;
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {}
}
function soundGood() { beep(880, 0.12); setTimeout(() => beep(1320, 0.15), 90); }
function soundBad()  { beep(300, 0.18, "sawtooth"); }
function soundTap()  { beep(520, 0.06); }
function soundLevelUp() {
  beep(660, 0.1); setTimeout(() => beep(880, 0.1), 90);
  setTimeout(() => beep(1100, 0.1), 180); setTimeout(() => beep(1320, 0.2), 270);
}
function soundBadge() {
  beep(1320, 0.08); setTimeout(() => beep(1760, 0.15), 80);
}
function soundCoin() {
  beep(1200, 0.06); setTimeout(() => beep(1600, 0.08), 50);
}

/* =========================================================
   AUDIO — MP3 locaux
   ========================================================= */
let currentAudioEl = null;
let activityGeneration = 0;
let storySpeechRun = 0;
function stopAllAudio() {
  if (currentAudioEl) {
    try { currentAudioEl.pause(); currentAudioEl.currentTime = 0; } catch (e) {}
    currentAudioEl = null;
  }
  storySpeechRun++;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}
function playUrl(url) {
  if (!state.soundOn) return null;
  stopAllAudio();
  const audio = new Audio(url);
  audio.volume = 1;
  currentAudioEl = audio;
  audio.play().catch(err => { console.warn("Audio err:", err); });
  return audio;
}
function playLocalAudio(filename) {
  if (!state.soundOn || !filename) return;
  playUrl(`audio/${filename}.mp3`);
}
function speak(filename) { playLocalAudio(filename); }

/* =========================================================
   GAMIFICATION
   ========================================================= */
function showXpPopup(amount) {
  const popup = document.createElement("div");
  popup.className = "xp-popup";
  popup.textContent = `+${amount} XP`;
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 1600);
}
function showCoinPopup(amount) {
  const popup = document.createElement("div");
  popup.className = "xp-popup";
  popup.style.background = "linear-gradient(135deg, #f5b800, #ff9500)";
  popup.style.color = "#3d2a00";
  popup.textContent = `+${amount} 🪙`;
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 1600);
}

function addXp(amount) {
  if (amount <= 0) return;
  state.xp += amount;
  showXpPopup(amount);
  const newLevel = levelFromXp(state.xp);
  if (newLevel > state.level) {
    state.level = newLevel;
    setTimeout(() => showLevelUpModal(newLevel), 900);
  }
  updateTopbar();
  saveProgress();
}

function addCoins(amount) {
  if (amount <= 0) return;
  state.coins += amount;
  showCoinPopup(amount);
  soundCoin();
  updateTopbar();
  saveProgress();
}

function showLevelUpModal(newLevel) {
  soundLevelUp();
  const title = titleForLevel(newLevel);
  openModal(`
    <div class="modal levelup-modal">
      <span class="big-emoji">🎉</span>
      <h2>Niveau ${newLevel} !</h2>
      <p>Mā shā Allāh ! Tu progresses 🚀</p>
      <div style="background: rgba(255,255,255,.2); padding: 10px; border-radius: 12px; margin-bottom: 16px;">
        <div style="font-size: .8rem; opacity: .9;">Nouveau titre</div>
        <div style="font-size: 1.2rem; font-weight: 700;">${title}</div>
      </div>
      <button class="btn btn-primary" onclick="closeModal()">${t("continue")}</button>
    </div>
  `);
}

/* =========================================================
   BADGES
   ========================================================= */
function checkBadges() {
  const newBadges = [];
  BADGES.forEach(b => {
    if (!state.unlockedBadges.includes(b.id)) {
      try {
        if (b.condition(state)) {
          state.unlockedBadges.push(b.id);
          newBadges.push(b);
        }
      } catch (e) {}
    }
  });
  if (newBadges.length > 0) {
    saveProgress();
    showBadgesChain(newBadges);
  }
}

function showBadgesChain(badges) {
  if (badges.length === 0) return;
  const b = badges[0];
  soundBadge();
  openModal(`
    <div class="modal badge-modal">
      <span class="badge-icon-big">${b.icon}</span>
      <p style="font-size: .85rem; margin-bottom: 4px;">Badge débloqué !</p>
      <div class="badge-name">${b.name}</div>
      <p>${b.desc}</p>
      ${badges.length > 1 ? `<p style="font-size: .8rem; color: #999;">+${badges.length - 1} autre${badges.length > 2 ? 's' : ''} badge${badges.length > 2 ? 's' : ''} !</p>` : ""}
      <button class="btn btn-primary" id="btnNextBadge">Continuer</button>
    </div>
  `);
  document.getElementById("btnNextBadge").addEventListener("click", () => {
    closeModal();
    setTimeout(() => showBadgesChain(badges.slice(1)), 300);
  });
}

/* =========================================================
   STREAK QUOTIDIEN
   ========================================================= */
function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}

function checkStreak() {
  const today = todayStr();
  if (state.lastPlayDate === today) {
    state.playedToday = true;
    return false;
  }

  if (state.lastPlayDate) {
    const last = new Date(state.lastPlayDate + "T00:00:00");
    const now = new Date(today + "T00:00:00");
    const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) state.streak += 1;
    else state.streak = 1;
  } else {
    state.streak = 1;
  }

  state.lastPlayDate = today;
  state.playedToday = true;
  saveProgress();

  const rewardCoins = 10 + state.streak * 5;
  const rewardXp = 5 + state.streak * 2;
  setTimeout(() => {
    addCoins(rewardCoins);
    addXp(rewardXp);
    showStreakModal(rewardCoins, rewardXp);
  }, 500);

  return true;
}

function showStreakModal(coins, xp) {
  soundLevelUp();
  openModal(`
    <div class="modal streak-modal">
      <span class="streak-big">🔥</span>
      <h2>Jour ${state.streak} d'affilée !</h2>
      <p>BarakAllahu fik, continue comme ça !</p>
      <div style="display: flex; gap: 10px; justify-content: center; margin-bottom: 16px;">
        <div style="background: #fff8e1; padding: 10px 14px; border-radius: 12px; font-weight: 700; color: #7a5a00;">
          +${coins} 🪙
        </div>
        <div style="background: #f3e8ff; padding: 10px 14px; border-radius: 12px; font-weight: 700; color: var(--purple);">
          +${xp} XP
        </div>
      </div>
      <button class="btn btn-primary" onclick="closeModal()">${t("great")}</button>
    </div>
  `);
}

/* =========================================================
   MODAL UTILITAIRE
   ========================================================= */
function openModal(html) {
  el.overlay.classList.remove("hidden");
  el.overlay.innerHTML = html;
}
function closeModal() {
  el.overlay.classList.add("hidden");
  el.overlay.innerHTML = "";
}

/* =========================================================
   TOPBAR
   ========================================================= */
function setTopTitle(t) { el.topTitle.textContent = t; }
function showBack(show) { el.btnBack.classList.toggle("hidden", !show); }
function updateTopbar() {
  el.starCount.textContent = state.stars;
  el.coinCount.textContent = state.coins;
  el.levelCount.textContent = state.level;
}

/* =========================================================
   REWARDS
   ========================================================= */
function rewardStars(activityId, starsEarned) {
  const prev = state.progress[activityId] || 0;
  let newly = 0;
  if (starsEarned > prev) {
    newly = starsEarned - prev;
    state.stars += newly;
    state.progress[activityId] = starsEarned;
  }
  return newly;
}

/* =========================================================
   NAVIGATION
   ========================================================= */
function render(html) {
  el.screen.innerHTML = html;
  el.screen.scrollTop = 0;
}

/* ---------- ACCUEIL ---------- */
function showHome() {
  state.currentScreen = "home";
  state.currentModule = null;
  setTopTitle("Muslim Kids");
  showBack(false);

  const xpInLevel = state.xp - totalXpForLevel(state.level);
  const xpNeeded = xpForLevel(state.level);
  const xpPercent = Math.min(100, (xpInLevel / xpNeeded) * 100);
  const avatarEmoji = (AVATARS.find(a => a.id === state.avatar) || AVATARS[0]).emoji;

  const cards = MODULES.map(m => {
    const done = m.activities.reduce((acc, a) => acc + (state.progress[a.id] || 0), 0);
    const total = m.activities.length * 3;
    const complete = state.stats.moduleCompleted.includes(m.id);
    return `
      <div class="module-card" data-module="${m.id}">
        ${complete ? '<span class="done-check">✅</span>' : ""}
        <span class="emoji">${m.emoji}</span>
        <div class="name">${moduleLabel(m)}</div>
        <div class="count">⭐ ${done}/${total}</div>
      </div>
    `;
  }).join("");

  render(`
    <div class="profile-card">
      <div class="avatar-circle" id="btnAvatar">${avatarEmoji}</div>
      <div class="profile-info">
        <div class="greeting">${t("greeting")}</div>
        <div class="name">${escapeHtml(state.playerName)}</div>
        <div class="xp-bar-wrap"><div class="xp-bar-fill" style="width:${xpPercent}%"></div></div>
        <div class="xp-label">${t("level")} ${state.level} · ${xpInLevel}/${xpNeeded} XP · ${localizedLevelTitle(state.level)}</div>
      </div>
      <div class="streak-badge">
        <span class="flame">🔥</span>
        <span>${state.streak}${t("days_short")}</span>
      </div>
    </div>

    <div class="quick-actions">
      <div class="quick-btn" id="btnProfile">
        <span class="qb-icon">👤</span>
        <span class="qb-label">${t("nav_profile")}</span>
      </div>
      <div class="quick-btn" id="btnShop">
        <span class="qb-icon">🛍️</span>
        <span class="qb-label">${t("nav_shop")}</span>
      </div>
      <div class="quick-btn" id="btnBadges">
        <span class="qb-icon">🎖️</span>
        <span class="qb-label">${t("nav_badges")}</span>
      </div>
      <div class="quick-btn" id="btnSupportHome">
        <span class="qb-icon">❤️</span>
        <span class="qb-label">${t("nav_support")}</span>
      </div>
      <div class="quick-btn" id="btnSettings">
        <span class="qb-icon">⚙️</span>
        <span class="qb-label">${t("nav_settings")}</span>
      </div>
    </div>

    <div class="hero">
      <div class="bismillah">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيم</div>
      <p>${t("home_tagline")}</p>
    </div>

    <div class="module-grid">${cards}</div>
    <div class="final-challenge" data-final="1">
      🏆 ${t("final_challenge")} — ${t("final_prompt")}
    </div>
  `);

  el.screen.querySelectorAll("[data-module]").forEach(c => {
    c.addEventListener("click", () => {
      soundTap();
      const m = MODULES.find(x => x.id === c.dataset.module);
      showModule(m);
    });
  });
  el.screen.querySelector("[data-final]").addEventListener("click", () => {
    soundTap();
    startFinalChallenge();
  });
  document.getElementById("btnProfile").addEventListener("click", () => { soundTap(); showProfile(); });
  document.getElementById("btnShop").addEventListener("click", () => { soundTap(); showShop(); });
  document.getElementById("btnBadges").addEventListener("click", () => { soundTap(); showBadgesList(); });
  document.getElementById("btnSupportHome").addEventListener("click", () => { soundTap(); showSupport(); });
  document.getElementById("btnSettings").addEventListener("click", () => { soundTap(); showSettings(); });
  document.getElementById("btnAvatar").addEventListener("click", () => {
    soundTap();
    showAvatarPicker("home");
  });
}

function showSettings() {
  state.currentScreen = "settings";
  setTopTitle(t("settings_title"));
  showBack(true);
  render(`
    <section class="settings-card">
      <div class="settings-icon">🌐</div>
      <h2>${t("settings_title")}</h2>
      <p>${t("settings_description")}</p>
      <label for="languageSelect">${t("language_label")}</label>
      <select id="languageSelect" class="language-select">
        <option value="fr" ${state.language === "fr" ? "selected" : ""}>🇫🇷 ${t("lang_fr")}</option>
        <option value="en" ${state.language === "en" ? "selected" : ""}>🇬🇧 ${t("lang_en")}</option>
        <option value="tr" ${state.language === "tr" ? "selected" : ""}>🇹🇷 ${t("lang_tr")}</option>
      </select>
      <p class="settings-hint">💾 ${t("language_hint")}</p>
      <p class="settings-content-note">${t("content_note")}</p>
    </section>
  `);
  document.getElementById("languageSelect").addEventListener("change", event => {
    state.language = ["fr", "en", "tr"].includes(event.target.value) ? event.target.value : "fr";
    applyLanguage();
    saveProgress();
    showSettings();
  });
}

/* ---------- MODULE ---------- */
function showModule(module) {
  state.currentScreen = "module";
  state.currentModule = module;
  setTopTitle(moduleLabel(module));
  showBack(true);

  const list = module.activities.map(a => {
    const earned = state.progress[a.id] || 0;
    const stars = "⭐".repeat(earned) + "☆".repeat(3 - earned);
    return `
      <div class="activity-item" data-activity="${a.id}">
        <span class="ico">${a.icon}</span>
        <div class="info">
          <h3>${activityLabel(a)}</h3>
          <p>${describeActivity(a)}</p>
        </div>
        <div class="stars-earned">${stars}</div>
      </div>
    `;
  }).join("");

  render(`
    <p style="color:#5d6b62;margin-bottom:6px;">${moduleLabel(module, 1)}</p>
    <div class="activity-list">${list}</div>
  `);

  el.screen.querySelectorAll("[data-activity]").forEach(node => {
    node.addEventListener("click", () => {
      soundTap();
      const a = module.activities.find(x => x.id === node.dataset.activity);
      state.currentActivity = a;
      startActivity(a);
    });
  });
}

function describeActivity(a) {
  switch (a.type) {
    case "flash":  return `${a.cards.length} ${t("cards_to_learn")}`;
    case "quiz":   return `${a.questions.length} ${t("questions")}`;
    case "memory": return `${a.pairs.length} ${t("pairs")}`;
    case "order":  return `${a.steps.length} ${t("steps")}`;
    case "surah":  return `${a.versesCount} ${t("verses")}`;
    case "lesson": return `${a.sections.length} ${t("sections")}`;
    case "story":  return `${a.chapters.length} ${t("chapters")}`;
    default: return "";
  }
}

function startActivity(a) {
  activityGeneration++;
  state.currentScreen = "activity";
  switch (a.type) {
    case "flash":  return startFlash(a);
    case "quiz":   return startQuiz(a, a.questions);
    case "memory": return startMemory(a);
    case "order":  return startOrder(a);
    case "surah":  return startSurah(a);
    case "lesson": return startLesson(a);
    case "story":  return startStory(a);
  }
}

/* =========================================================
   FLASHCARDS
   ========================================================= */
function startFlash(a) {
  let idx = 0;
  setTopTitle(activityLabel(a));
  showBack(true);

  function draw() {
    const c = a.cards[idx];

    const formsHTML = c.forms ? `
      <div class="forms-table">
        <div class="form-cell"><span class="form-ar">${c.forms.isolated}</span>${t("isolated")}</div>
        <div class="form-cell"><span class="form-ar">${c.forms.initial}</span>${t("initial")}</div>
        <div class="form-cell"><span class="form-ar">${c.forms.medial}</span>${t("medial")}</div>
        <div class="form-cell"><span class="form-ar">${c.forms.final}</span>${t("final")}</div>
      </div>
    ` : "";

    const exampleHTML = c.example ? `
      <div class="example-line">
      ${t("example")} : <b style="font-size:1.2rem; direction:rtl;">${c.example.word}</b>
        (${c.example.translit}) — ${c.example.meaning}
      </div>
    ` : "";

    render(`
      <div class="card-area">
        <div class="card-counter">${t("card")} ${idx + 1} / ${a.cards.length}</div>
        <div class="flashcard" id="flashcard">
          <div class="arabic">${c.arabic}</div>
          <div class="translit">${c.translit}</div>
          <div class="meaning">${c.meaning}</div>
          ${formsHTML}
          ${exampleHTML}
        </div>
        <button class="btn btn-gold" id="btnListen" style="max-width:340px;">${t("listen")}</button>
        <div class="card-nav">
          <button class="btn btn-secondary" id="btnPrev" ${idx === 0 ? "disabled" : ""}>${t("previous")}</button>
          <button class="btn btn-primary" id="btnNext">${idx === a.cards.length - 1 ? t("finish") : t("next")}</button>
        </div>
      </div>
    `);

    const audioFile = c.audio || c.tts || c.arabic;
    document.getElementById("btnListen").addEventListener("click", () => { soundTap(); speak(audioFile); });
    document.getElementById("flashcard").addEventListener("click", () => { soundTap(); speak(audioFile); });
    document.getElementById("btnPrev").addEventListener("click", () => {
      if (idx > 0) { idx--; soundTap(); draw(); }
    });
    document.getElementById("btnNext").addEventListener("click", () => {
      soundTap();
      if (idx < a.cards.length - 1) { idx++; draw(); }
      else { finishActivity(a, 3, "Bravo ! Tu as vu toutes les cartes 🌟"); }
    });
  }
  draw();
}

/* =========================================================
   QUIZ
   ========================================================= */
function startQuiz(a, questions) {
  const generation = activityGeneration;
  let idx = 0;
  let score = 0;
  setTopTitle(activityLabel(a));
  showBack(true);

  function draw() {
    const q = questions[idx];
    const progress = ((idx) / questions.length) * 100;

    render(`
      <div class="quiz-progress"><div style="width:${progress}%"></div></div>
      <div class="question">
        ${q.arabic ? `<div class="q-arabic">${q.arabic}</div>` : ""}
        <div class="q-text">${q.q}</div>
      </div>
      <div class="answers" id="answers">
        ${q.answers.map((ans, i) =>
          `<button class="answer-btn" data-i="${i}">${ans}</button>`
        ).join("")}
      </div>
      <div id="feedbackZone"></div>
    `);

    const zone = document.getElementById("feedbackZone");
    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const i = parseInt(btn.dataset.i, 10);
        buttons.forEach(b => b.disabled = true);
        if (i === q.correct) {
          btn.classList.add("correct");
          score++;
          soundGood();
          zone.innerHTML = `<div class="feedback good">${t("good_answer")}</div>`;
          if (q.audio) speak(q.audio);
        } else {
          btn.classList.add("wrong");
          buttons[q.correct].classList.add("correct");
          soundBad();
          zone.innerHTML = `<div class="feedback bad">${t("correct_answer")} <b>${q.answers[q.correct]}</b></div>`;
        }
        setTimeout(() => {
          if (generation !== activityGeneration) return;
          idx++;
          if (idx < questions.length) draw();
          else {
            const ratio = score / questions.length;
            let stars = 1;
            if (ratio >= 0.6) stars = 2;
            if (ratio >= 0.85) stars = 3;
            finishActivity(a, stars, `Score : ${score}/${questions.length}`);
          }
        }, 1400);
      });
    });
  }
  draw();
}

/* =========================================================
   MEMORY
   ========================================================= */
function startMemory(a) {
  const generation = activityGeneration;
  setTopTitle(activityLabel(a));
  showBack(true);

  const cards = [];
  a.pairs.forEach((p, i) => {
    cards.push({ pairId: i, text: p.a, side: "a" });
    cards.push({ pairId: i, text: p.b, side: "b" });
  });
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  const flipped = [];
  let matched = 0;
  let lock = false;
  let attempts = 0;

  function draw() {
    render(`
      <p style="text-align:center;color:#5d6b62;margin-bottom:10px;">
        Associe l'expression à sa signification.
      </p>
      <div class="memory-grid" id="memoryGrid">
        ${cards.map((c, i) => `<div class="memory-card" data-i="${i}"></div>`).join("")}
      </div>
      <p style="text-align:center;color:#5d6b62;margin-top:12px;" id="memInfo">
        ${t("pairs_found")} : ${matched} / ${a.pairs.length}
      </p>
    `);

    document.querySelectorAll(".memory-card").forEach(node => {
      node.addEventListener("click", () => onFlip(parseInt(node.dataset.i, 10), node));
    });
  }

  function onFlip(i, node) {
    if (lock) return;
    if (node.classList.contains("flipped") || node.classList.contains("matched")) return;

    soundTap();
    node.classList.add("flipped");
    node.textContent = cards[i].text;
    flipped.push({ i, node });

    if (flipped.length === 2) {
      lock = true;
      attempts++;
      const [x, y] = flipped;
      if (cards[x.i].pairId === cards[y.i].pairId && cards[x.i].side !== cards[y.i].side) {
        setTimeout(() => {
          if (generation !== activityGeneration) return;
          x.node.classList.add("matched");
          y.node.classList.add("matched");
          soundGood();
          matched++;
          const info = document.getElementById("memInfo");
          if (info) info.textContent = `${t("pairs_found")} : ${matched} / ${a.pairs.length}`;
          flipped.length = 0;
          lock = false;
          if (matched === a.pairs.length) {
            let stars = 1;
            if (attempts <= a.pairs.length + 2) stars = 3;
            else if (attempts <= a.pairs.length + 5) stars = 2;
            setTimeout(() => {
              if (generation === activityGeneration) finishActivity(a, stars, `Trouvé en ${attempts} essais !`);
            }, 500);
          }
        }, 500);
      } else {
        setTimeout(() => {
          if (generation !== activityGeneration) return;
          x.node.classList.remove("flipped");
          y.node.classList.remove("flipped");
          x.node.textContent = "";
          y.node.textContent = "";
          soundBad();
          flipped.length = 0;
          lock = false;
        }, 900);
      }
    }
  }

  draw();
}

/* =========================================================
   ORDER
   ========================================================= */
function startOrder(a) {
  setTopTitle(activityLabel(a));
  showBack(true);

  const correct = [...a.steps];
  const items = [...a.steps];
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  function draw() {
    render(`
      <p style="color:#5d6b62;margin-bottom:10px;">${t("order_prompt")}</p>
      <div class="order-list" id="orderList">
        ${items.map((s, i) => `
          <div class="order-item" data-i="${i}">
            <div class="num">${i + 1}</div>
            <div class="txt">${s}</div>
            <div class="move-btns">
              <button data-move="up" data-i="${i}">↑</button>
              <button data-move="down" data-i="${i}">↓</button>
            </div>
          </div>
        `).join("")}
      </div>
      <button class="btn btn-primary" id="btnValidate" style="margin-top:16px;">${t("validate")}</button>
    `);

    document.querySelectorAll("[data-move]").forEach(btn => {
      btn.addEventListener("click", () => {
        soundTap();
        const i = parseInt(btn.dataset.i, 10);
        const dir = btn.dataset.move;
        const j = dir === "up" ? i - 1 : i + 1;
        if (j < 0 || j >= items.length) return;
        [items[i], items[j]] = [items[j], items[i]];
        draw();
      });
    });
    document.getElementById("btnValidate").addEventListener("click", validate);
  }

  function validate() {
    let good = 0;
    items.forEach((s, i) => { if (s === correct[i]) good++; });
    if (good === correct.length) {
      soundGood();
      finishActivity(a, 3, "Parfait ! Tout est dans le bon ordre 🎉");
    } else {
      soundBad();
      const zone = document.createElement("div");
      zone.className = "feedback bad";
      zone.textContent = t("well_placed_retry", { good, total: correct.length });
      const existing = el.screen.querySelector(".feedback");
      if (existing) existing.remove();
      el.screen.appendChild(zone);
    }
  }

  draw();
}

/* =========================================================
   SOURATE
   ========================================================= */
function startSurah(a) {
  setTopTitle(activityLabel(a));
  showBack(true);

  let currentPlayingSurah = null;
  let currentPlayingVerse = null;
  let currentVerseIndex = -1;

  function pad3(n) { return String(n).padStart(3, "0"); }
  function fullSurahUrl() { return `audio/surahs/${pad3(a.surahNumber)}_full.mp3`; }
  function verseUrl(n)   { return `audio/surahs/${pad3(a.surahNumber)}_${pad3(n)}.mp3`; }

  function clearPlayingHighlights() {
    document.querySelectorAll(".verse.playing").forEach(v => v.classList.remove("playing"));
    document.querySelectorAll(".btn-verse-play.playing").forEach(b => b.classList.remove("playing"));
  }

  function draw() {
    const versesHTML = a.verses.map(v => `
      <div class="verse" data-verse="${v.n}">
        <div class="verse-num">${v.n}</div>
        <div class="verse-arabic">${v.arabic}</div>
        <div class="verse-translit">${v.translit}</div>
        <div class="verse-french">${v.french}</div>
        <button class="btn-verse-play" data-play="${v.n}">${t("listen_verse")}</button>
      </div>
    `).join("");

    render(`
      <div class="surah-info">
        <div class="surah-name-ar">${a.nameArabic}</div>
        <div class="surah-name-lat">${a.nameLatin} — ${a.meaning}</div>
        <div class="surah-meta">${t("surah_word")} ${a.surahNumber} · ${a.versesCount} ${t("verses").split(" ·")[0]} · ${a.revelation}</div>
        <div class="surah-desc">${a.description}</div>
      </div>

      <button class="btn-play-surah" id="btnPlayFull">
        ${t("listen_surah")}
      </button>

      <h3 style="margin: 10px 0 12px; font-size: 1rem; color:#5d6b62;">
        ${state.language === "fr" ? "Les" : state.language === "en" ? "The" : ""} ${a.versesCount} ${t("verses").split(" ·")[0]} :
      </h3>

      <div class="verse-list">${versesHTML}</div>

      <button class="btn btn-primary" id="btnSurahDone" style="margin-top:20px;">
        ✓ J'ai appris cette sourate
      </button>
    `);

    document.getElementById("btnPlayFull").addEventListener("click", toggleFullSurah);
    document.querySelectorAll("[data-play]").forEach(btn => {
      btn.addEventListener("click", () => playVerse(parseInt(btn.dataset.play, 10), btn));
    });
    document.getElementById("btnSurahDone").addEventListener("click", () => {
      stopAll();
      soundGood();
      finishActivity(a, 3, "Mā shā Allāh ! Tu connais cette sourate 🌟");
    });
  }

  function stopAll() {
    if (currentPlayingSurah) { try { currentPlayingSurah.pause(); } catch (e) {} currentPlayingSurah = null; }
    if (currentPlayingVerse) { try { currentPlayingVerse.pause(); } catch (e) {} currentPlayingVerse = null; }
    currentAudioEl = null;
    currentVerseIndex = -1;
    clearPlayingHighlights();
    const b = document.getElementById("btnPlayFull");
    if (b) {
      b.classList.remove("playing");
      b.textContent = t("listen_surah");
    }
  }

  function toggleFullSurah() {
    if (currentPlayingSurah) { stopAll(); return; }
    stopAll();
    soundTap();

    const btn = document.getElementById("btnPlayFull");
    btn.classList.add("playing");
    btn.textContent = t("stop_recitation");

    const audio = new Audio(fullSurahUrl());
    audio.volume = 1;
    currentPlayingSurah = audio;
    currentAudioEl = audio;

    audio.addEventListener("loadedmetadata", () => {
      const seg = audio.duration / a.verses.length;
      audio.addEventListener("timeupdate", () => {
        const i = Math.min(a.verses.length - 1, Math.floor(a.currentTime / seg));
        if (i !== currentVerseIndex) {
          currentVerseIndex = i;
          document.querySelectorAll(".verse.playing").forEach(v => v.classList.remove("playing"));
          const node = document.querySelector(`.verse[data-verse="${a.verses[i].n}"]`);
          if (node) node.classList.add("playing");
        }
      });
    });

    audio.addEventListener("ended", () => { stopAll(); soundGood(); });
    audio.addEventListener("error", () => {
      stopAll();
      alert("Fichier audio introuvable : " + fullSurahUrl());
    });
    audio.play().catch(() => stopAll());
  }

  function playVerse(n, btn) {
    if (currentPlayingVerse && currentPlayingVerse.dataset.verse == n) { stopAll(); return; }
    stopAll();
    soundTap();

    const audio = new Audio(verseUrl(n));
    audio.volume = 1;
    audio.dataset.verse = n;
    currentPlayingVerse = audio;
    currentAudioEl = audio;

    const node = document.querySelector(`.verse[data-verse="${n}"]`);
    if (node) node.classList.add("playing");
    btn.classList.add("playing");
    const originalText = btn.textContent;
    btn.textContent = t("playing");

    audio.addEventListener("ended", () => { btn.textContent = originalText; stopAll(); });
    audio.addEventListener("error", () => {
      stopAll();
      alert("Fichier audio introuvable : " + verseUrl(n));
    });
    audio.play().catch(() => stopAll());
    audio.addEventListener("pause", () => {
      btn.textContent = originalText;
      btn.classList.remove("playing");
    });
  }

  draw();
}

/* =========================================================
   LEÇON
   ========================================================= */
function startLesson(a) {
  setTopTitle(activityLabel(a));
  showBack(true);

  const sectionsHTML = a.sections.map((s, i) => `
    <div class="lesson-section">
      <div class="lesson-num">${i + 1}</div>
      <h3 class="lesson-heading">${s.heading}</h3>
      <p class="lesson-text">${s.text}</p>
      ${s.reference ? `<p class="lesson-reference">📖 ${s.reference}</p>` : ""}
      ${s.arabic ? `<div class="lesson-quran"><p class="lesson-quran-arabic" lang="ar" dir="rtl">${s.arabic}</p>${s.meaning ? `<p class="lesson-quran-meaning">${t("meaning_intro")} ${s.meaning}</p>` : ""}${(s.audioTracks || (s.audio ? [s.audio] : [])).map((src, trackIndex, tracks) => `<label class="lesson-audio-label">🎧 ${tracks.length > 1 ? `${t("verse_word")} ${trackIndex + 1}` : t("listen_recitation")}</label><audio controls preload="none" src="${src}">La lecture audio n'est pas prise en charge par ce navigateur.</audio>`).join("")}</div>` : ""}
    </div>
  `).join("");

  render(`
    <div class="lesson-intro">
      <span class="lesson-icon">${a.icon}</span>
      <h2>${activityLabel(a)}</h2>
      ${a.objective ? `<p class="lesson-objective">🎯 ${a.objective}</p>` : ""}
    </div>
    <div class="lesson-body">${sectionsHTML}</div>
    ${a.takeaway ? `<div class="lesson-takeaway"><strong>${t("takeaway")}</strong><p>${a.takeaway}</p></div>` : ""}
    ${a.challenge ? `<div class="lesson-challenge"><strong>${t("try_it")}</strong><p>${a.challenge}</p></div>` : ""}
    <button class="btn btn-primary" id="btnLessonDone" style="margin-top:20px;">
      ${t("lesson_done")}
    </button>
  `);

  const lessonAudios = el.screen.querySelectorAll(".lesson-quran audio");
  lessonAudios.forEach(audio => {
    audio.addEventListener("play", () => {
      lessonAudios.forEach(other => {
        if (other !== audio && !other.paused) other.pause();
      });
      if (currentAudioEl && currentAudioEl !== audio) {
        currentAudioEl.pause();
        currentAudioEl.currentTime = 0;
      }
      currentAudioEl = audio;
    });
    audio.addEventListener("ended", () => {
      if (currentAudioEl === audio) currentAudioEl = null;
    });
    audio.addEventListener("pause", () => {
      if (currentAudioEl === audio) currentAudioEl = null;
    });
  });

  document.getElementById("btnLessonDone").addEventListener("click", () => {
    soundGood();
    finishActivity(a, 3, "Mā shā Allāh ! Leçon terminée 🌟");
  });
}

/* =========================================================
   STORY
   ========================================================= */
function startStory(a) {
  setTopTitle(activityLabel(a));
  showBack(true);

  const chaptersHTML = a.chapters.map((c, i) => `
    <div class="story-chapter">
      <div class="chapter-num">${i + 1}</div>
      <h3 class="chapter-title">${c.title}</h3>
      <p class="chapter-text">${c.text}</p>
    </div>
  `).join("");

  const lessonsHTML = a.lessons.map(l => `<li>${l}</li>`).join("");
  const narrationChunks = [
    `${activityLabel(a)}. ${a.intro}`,
    ...a.chapters.map((chapter, index) => `Partie ${index + 1}. ${chapter.title}. ${chapter.text}`),
    `Ce que cette histoire nous apprend. ${a.lessons.join(". ")}`
  ];
  let narrationChunk = 0;
  let narrationPaused = false;

  render(`
    <div class="story-intro">
      <span class="story-icon">${a.icon}</span>
      <h2>${activityLabel(a)}</h2>
      <p class="story-lead">${a.intro}</p>
    </div>
    <div class="story-audio-controls" aria-label="Écouter l'histoire">
      <button class="btn btn-gold" id="btnStoryPlay">${t("listen_story")}</button>
      <button class="btn btn-secondary" id="btnStoryPause" disabled>${t("pause")}</button>
      <button class="btn btn-secondary" id="btnStoryStop" disabled>${t("stop")}</button>
      <span id="storyAudioStatus" role="status" aria-live="polite">${t("narration_fr")}</span>
    </div>
    <div class="story-body">${chaptersHTML}</div>
    <div class="story-lessons">
      <h3>${t("story_lessons")}</h3>
      <ul>${lessonsHTML}</ul>
    </div>
    <button class="btn btn-primary" id="btnStoryDone" style="margin-top:20px;">
      ✓ J'ai terminé l'histoire
    </button>
  `);

  const playButton = document.getElementById("btnStoryPlay");
  const pauseButton = document.getElementById("btnStoryPause");
  const stopButton = document.getElementById("btnStoryStop");
  const status = document.getElementById("storyAudioStatus");

  function setNarrationStatus(message, playing) {
    status.textContent = message;
    pauseButton.disabled = !playing;
    stopButton.disabled = !playing;
    pauseButton.textContent = narrationPaused ? t("resume") : t("pause");
  }

  function playNarrationChunk(runId) {
    if (runId !== storySpeechRun) return;
    if (narrationChunk >= narrationChunks.length) {
      setNarrationStatus(t("story_finished"), false);
      playButton.textContent = t("replay_story");
      narrationChunk = 0;
      narrationPaused = false;
      return;
    }

    const utterance = new SpeechSynthesisUtterance(narrationChunks[narrationChunk]);
    utterance.lang = "fr-FR";
    utterance.rate = 0.9;
    const frenchVoice = window.speechSynthesis.getVoices().find(voice => /^fr([-_]|$)/i.test(voice.lang));
    if (frenchVoice) utterance.voice = frenchVoice;
    utterance.onstart = () => {
      if (runId === storySpeechRun) setNarrationStatus(t("story_part", { current: Math.min(narrationChunk + 1, narrationChunks.length), total: narrationChunks.length }), true);
    };
    utterance.onend = () => {
      if (runId !== storySpeechRun) return;
      narrationChunk++;
      playNarrationChunk(runId);
    };
    utterance.onerror = event => {
      if (runId !== storySpeechRun || event.error === "canceled" || event.error === "interrupted") return;
      setNarrationStatus(t("voice_unavailable"), false);
      playButton.textContent = t("listen_story");
    };
    window.speechSynthesis.speak(utterance);
  }

  playButton.addEventListener("click", () => {
    if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
      setNarrationStatus(t("speech_unavailable"), false);
      return;
    }
    stopAllAudio();
    narrationChunk = 0;
    narrationPaused = false;
    playButton.textContent = t("playing");
    const runId = storySpeechRun;
    playNarrationChunk(runId);
  });

  pauseButton.addEventListener("click", () => {
    if (!("speechSynthesis" in window)) return;
    if (narrationPaused) {
      window.speechSynthesis.resume();
      narrationPaused = false;
      setNarrationStatus(t("narration_resumed"), true);
    } else {
      window.speechSynthesis.pause();
      narrationPaused = true;
      setNarrationStatus(t("narration_paused"), true);
    }
  });

  stopButton.addEventListener("click", () => {
    stopAllAudio();
    narrationChunk = 0;
    narrationPaused = false;
    playButton.textContent = t("listen_story");
    setNarrationStatus(t("narration_stopped"), false);
  });

  document.getElementById("btnStoryDone").addEventListener("click", () => {
    stopAllAudio();
    soundGood();
    finishActivity(a, 3, t("story_complete"));
  });
}

/* =========================================================
   DÉFI FINAL
   ========================================================= */
function startFinalChallenge() {
  activityGeneration++;
  state.currentScreen = "final";
  setTopTitle(`${t("final_challenge")} 🏆`);
  showBack(true);

  const pool = [];
  MODULES.forEach(m => {
    m.activities.forEach(act => {
      if (act.type === "quiz") {
        act.questions.forEach(q => pool.push({ ...q }));
      }
    });
  });
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const questions = pool.slice(0, 10);

  const fakeActivity = { id: "final", title: t("final_challenge") };
  startQuiz(fakeActivity, questions);
}

/* =========================================================
   FIN D'ACTIVITÉ
   ========================================================= */
function finishActivity(a, stars, message) {
  const previousStars = state.progress[a.id] || 0;
  const newStars = rewardStars(a.id, stars);
  const xpForStars = value => value === 3 ? 50 : value === 2 ? 30 : value === 1 ? 15 : 0;
  const coinsForStars = value => value === 3 ? 35 : value === 2 ? 20 : value === 1 ? 10 : 0;
  const xpGain = xpForStars(stars) - xpForStars(previousStars);
  const coinGain = coinsForStars(stars) - coinsForStars(previousStars);

  if (xpGain > 0) addXp(xpGain);
  if (coinGain > 0) addCoins(coinGain);

  if (previousStars === 0 && newStars > 0) {
    state.stats.activitiesCompleted++;
  }
  if (a.type === "quiz" && stars === 3 && previousStars < 3) state.stats.perfectQuizzes++;
  if (a.id === "final" && previousStars === 0) state.stats.finalChallenges++;
  if (a.type === "surah" && previousStars === 0) state.stats.surahsCompleted++;

  if (state.currentModule) {
    const m = state.currentModule;
    const allDone = m.activities.every(act => (state.progress[act.id] || 0) >= 3);
    if (allDone && !state.stats.moduleCompleted.includes(m.id)) {
      state.stats.moduleCompleted.push(m.id);
      addCoins(50);
      addXp(100);
    }
  }

  saveProgress();
  updateTopbar();

  const starStr = "⭐".repeat(stars) + "☆".repeat(3 - stars);
  const rewardMessage = newStars > 0 ? `+${xpGain} XP · +${coinGain} 🪙` : "Déjà obtenu — rejoue pour améliorer ton score !";
  openModal(`
    <div class="modal">
      <div class="stars-result">${starStr}</div>
      <h2>${stars >= 2 ? t("success") : t("well_done")}</h2>
      <p>${message}</p>
      ${newStars > 0 ? `
        <div style="display: flex; gap: 10px; justify-content: center; margin-bottom: 16px; flex-wrap: wrap;">
          <div style="background: #f3e8ff; padding: 8px 14px; border-radius: 12px; font-weight: 700; color: var(--purple); font-size: .9rem;">+${xpGain} XP</div>
          <div style="background: #fff8e1; padding: 8px 14px; border-radius: 12px; font-weight: 700; color: #7a5a00; font-size: .9rem;">+${coinGain} 🪙</div>
        </div>` : `<p style="margin: 0 0 16px; color: #6b7a71;">${rewardMessage}</p>`}
      <button class="btn btn-primary" id="btnContinue">${t("continue")}</button>
    </div>
  `);
  soundGood();

  document.getElementById("btnContinue").addEventListener("click", () => {
    closeModal();
    stopAllAudio();
    checkBadges();
    setTimeout(() => {
      if (state.currentModule) showModule(state.currentModule);
      else showHome();
    }, 100);
  });
}

/* =========================================================
   PROFIL
   ========================================================= */
function showProfile() {
  state.currentScreen = "profile";
  setTopTitle(t("profile_title"));
  showBack(true);

  const xpInLevel = state.xp - totalXpForLevel(state.level);
  const xpNeeded = xpForLevel(state.level);
  const xpPercent = Math.min(100, (xpInLevel / xpNeeded) * 100);
  const avatarEmoji = (AVATARS.find(a => a.id === state.avatar) || AVATARS[0]).emoji;
  const title = localizedLevelTitle(state.level);

  const totalActivities = MODULES.reduce((acc, m) => acc + m.activities.length, 0);
  const doneActivities = Object.keys(state.progress).length;

  const recent = state.unlockedBadges.slice(-5).map(id => {
    const b = BADGES.find(x => x.id === id);
    return b ? `<span class="rb" title="${b.name}">${b.icon}</span>` : "";
  }).join("");

  render(`
    <div class="profile-detail-card">
      <span class="profile-avatar-big" id="profileAvatarBtn">${avatarEmoji}</span>
      <div class="profile-name-big">${escapeHtml(state.playerName)}</div>
      <div class="profile-level-big">Niv. ${state.level} · ${title}</div>
      <div class="profile-xp-big"><div style="width:${xpPercent}%"></div></div>
      <div class="profile-xp-text">${xpInLevel} / ${xpNeeded} XP</div>
      ${recent ? `<div class="recent-badges">${recent}</div>` : ""}
    </div>

    <div class="name-edit-row">
      <input type="text" id="nameInput" maxlength="20" placeholder="${t("name_placeholder")}" value="${escapeHtml(state.playerName)}" />
      <button class="btn btn-primary" id="btnSaveName" style="flex: 0 0 auto; padding: 10px 16px;">OK</button>
    </div>

    <div class="stats-grid">
      <div class="stat-box">
        <div class="stat-num">${state.stars}</div>
        <div class="stat-label">${t("stars")}</div>
      </div>
      <div class="stat-box">
        <div class="stat-num">${state.coins}</div>
        <div class="stat-label">${t("coins")}</div>
      </div>
      <div class="stat-box">
        <div class="stat-num">${state.level}</div>
        <div class="stat-label">${t("level_stat")}</div>
      </div>
      <div class="stat-box">
        <div class="stat-num">${state.streak}</div>
        <div class="stat-label">${t("streak_stat")}</div>
      </div>
      <div class="stat-box">
        <div class="stat-num">${doneActivities}/${totalActivities}</div>
        <div class="stat-label">${t("activities_stat")}</div>
      </div>
      <div class="stat-box">
        <div class="stat-num">${state.unlockedBadges.length}/${BADGES.length}</div>
        <div class="stat-label">${t("badges_stat")}</div>
      </div>
      <div class="stat-box">
        <div class="stat-num">${state.stats.perfectQuizzes}</div>
        <div class="stat-label">${t("perfect_quizzes")}</div>
      </div>
      <div class="stat-box">
        <div class="stat-num">${state.stats.surahsCompleted}</div>
        <div class="stat-label">${t("surahs_learned")}</div>
      </div>
      <div class="stat-box">
        <div class="stat-num">${state.ownedAvatars.length}</div>
        <div class="stat-label">${t("avatars_stat")}</div>
      </div>
    </div>

    <div style="display: flex; gap: 10px; margin-top: 6px; flex-wrap: wrap;">
      <button class="btn btn-purple" id="btnProfileShop">🛍️ ${t("nav_shop")}</button>
      <button class="btn btn-gold" id="btnProfileBadges">🎖️ ${t("nav_badges")}</button>
      <button class="btn btn-red" id="btnProfileSupport" style="flex: 1 1 100%;">${t("creator_support")}</button>
    </div>
  `);

  document.getElementById("btnSaveName").addEventListener("click", () => {
    const v = document.getElementById("nameInput").value.trim();
    if (v) {
      state.playerName = v;
      saveProgress();
      soundGood();
      showProfile();
    }
  });
  document.getElementById("profileAvatarBtn").addEventListener("click", () => {
    soundTap();
    showAvatarPicker("profile");
  });
  document.getElementById("btnProfileShop").addEventListener("click", () => { soundTap(); showShop(); });
  document.getElementById("btnProfileBadges").addEventListener("click", () => { soundTap(); showBadgesList(); });
  document.getElementById("btnProfileSupport").addEventListener("click", () => { soundTap(); showSupport(); });
}

/* =========================================================
   AVATAR PICKER
   ========================================================= */
function showAvatarPicker(returnTo = null) {
  if (returnTo) {
    state.avatarReturnTo = returnTo;
  }
  state.currentScreen = "avatar";
  setTopTitle(t("choose_avatar"));
  showBack(true);

  const grid = AVATARS.map(a => {
    const owned = state.ownedAvatars.includes(a.id);
    const selected = state.avatar === a.id;
    return `
      <div class="avatar-option ${selected ? 'selected' : ''} ${owned ? '' : 'locked'}"
           data-avatar="${a.id}" data-owned="${owned}">
        ${a.emoji}
      </div>
    `;
  }).join("");

  render(`
    <p style="color:#5d6b62;margin-bottom:14px;text-align:center;">
      ${t("locked_avatars")}
    </p>
    <div class="avatars-grid">${grid}</div>
    <div style="text-align:center; color:#6b7a71; font-size:.85rem; margin-top:10px;">
      ${t("balance", { coins: state.coins })}
    </div>
  `);

  document.querySelectorAll("[data-avatar]").forEach(node => {
    node.addEventListener("click", () => {
      const id = node.dataset.avatar;
      const owned = state.ownedAvatars.includes(id);
      if (!owned) {
        soundBad();
        const a = AVATARS.find(x => x.id === id);
        openModal(`
          <div class="modal">
            <h2>${t("locked")}</h2>
            <p>Cet avatar coûte ${a.cost} 🪙. Rends-toi à la boutique pour l'acheter !</p>
            <button class="btn btn-gold" id="btnGoShop">${t("go_shop")}</button>
            <div style="height: 8px;"></div>
            <button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button>
          </div>
        `);
        document.getElementById("btnGoShop").addEventListener("click", () => {
          closeModal();
          showShop();
        });
        return;
      }
      state.avatar = id;
      saveProgress();
      soundGood();
      showAvatarPicker();
    });
  });
}

/* =========================================================
   BOUTIQUE
   ========================================================= */
function showShop() {
  state.currentScreen = "shop";
  setTopTitle(t("nav_shop"));
  showBack(true);

  const grid = SHOP_ITEMS.map(item => {
    const owned = state.ownedAvatars.includes(item.id);
    return `
      <div class="shop-item ${owned ? 'owned' : ''}" data-shop="${item.id}">
        <span class="item-emoji">${item.emoji}</span>
        <div class="item-name">${item.name}</div>
        <div class="item-price ${owned ? 'owned-tag' : ''}">
          ${owned ? t("purchased") : `🪙 ${item.price}`}
        </div>
      </div>
    `;
  }).join("");

  render(`
    <div style="text-align:center; background: linear-gradient(135deg, #f5b800, #ff9500); color: #3d2a00; padding: 12px; border-radius: 14px; font-weight: 700; margin-bottom: 16px;">
      ${t("balance", { coins: state.coins })}
    </div>
    <div class="shop-grid">${grid}</div>
    <p style="text-align:center; color:#6b7a71; font-size:.82rem; margin-top:10px;">
      ${t("shop_tip")}
    </p>
  `);

  document.querySelectorAll("[data-shop]").forEach(node => {
    node.addEventListener("click", () => {
      const id = node.dataset.shop;
      const item = SHOP_ITEMS.find(x => x.id === id);
      if (state.ownedAvatars.includes(id)) {
        soundTap();
        state.avatar = id;
        saveProgress();
        openModal(`
          <div class="modal">
            <h2>${t("equipped")}</h2>
            <p style="font-size: 3rem; text-align: center;">${item.emoji}</p>
            <button class="btn btn-primary" onclick="closeModal()">${t("great")}</button>
          </div>
        `);
        return;
      }
      if (state.coins < item.price) {
        soundBad();
        openModal(`
          <div class="modal">
            <h2>${t("insufficient")}</h2>
            <p>${t("missing_coins", { coins: item.price - state.coins })}</p>
            <button class="btn btn-primary" onclick="closeModal()">OK</button>
          </div>
        `);
        return;
      }
      soundTap();
      openModal(`
        <div class="modal">
          <h2>${t("buy")} ${item.name} ?</h2>
          <p style="font-size: 3rem; margin: 8px 0;">${item.emoji}</p>
          <p>${t("price")} : <b>${item.price} 🪙</b></p>
          <button class="btn btn-gold" id="btnConfirmBuy">✓ ${t("buy")}</button>
          <div style="height: 8px;"></div>
          <button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button>
        </div>
      `);
      document.getElementById("btnConfirmBuy").addEventListener("click", () => {
        state.coins -= item.price;
        state.ownedAvatars.push(item.id);
        state.avatar = item.id;
        state.stats.itemsBought++;
        saveProgress();
        updateTopbar();
        soundCoin();
        closeModal();
        checkBadges();
        showShop();
      });
    });
  });
}

/* =========================================================
   BADGES LISTE
   ========================================================= */
function showBadgesList() {
  state.currentScreen = "badges";
  setTopTitle(t("badges_title"));
  showBack(true);

  const grid = BADGES.map(b => {
    const unlocked = state.unlockedBadges.includes(b.id);
    return `
      <div class="badge-item ${unlocked ? 'unlocked' : 'locked'}">
        <span class="badge-icon">${b.icon}</span>
        <div class="badge-label">${b.name}</div>
        <div class="badge-status">${unlocked ? t("unlocked") : b.desc}</div>
      </div>
    `;
  }).join("");

  render(`
    <div style="text-align:center; background: #f0f7f2; padding: 12px; border-radius: 14px; margin-bottom: 14px;">
      <div style="font-size: 1.4rem; font-weight: 700; color: var(--green-dark);">
        ${state.unlockedBadges.length} / ${BADGES.length}
      </div>
      <div style="font-size: .82rem; color: #6b7a71;">${t("badges_unlocked")}</div>
    </div>
    <div class="badges-grid">${grid}</div>
  `);
}

/* =========================================================
   SOUTIEN — REMERCIER LE CRÉATEUR
   ========================================================= */
function showSupport() {
  state.currentScreen = "support";
  setTopTitle(t("nav_support") + " ❤️");
  showBack(true);

  function row(icon, label, value, type) {
    if (!value) return "";
    if (type === "link") {
      return `
        <div class="donation-row">
          <span class="don-icon">${icon}</span>
          <div class="don-info">
            <div class="don-label">${label}</div>
            <div class="don-value">${value.replace(/^https?:\/\//, "")}</div>
          </div>
          <a class="don-link" href="${value}" target="_blank" rel="noopener">${t("open_support")}</a>
        </div>
      `;
    }
    return `
      <div class="donation-row">
        <span class="don-icon">${icon}</span>
        <div class="don-info">
          <div class="don-label">${label}</div>
          <div class="don-value">${value}</div>
        </div>
        <button class="don-copy" data-copy="${value.replace(/"/g, '&quot;')}">${t("copy")}</button>
      </div>
    `;
  }

  render(`
    <div class="support-hero">
      <span class="support-heart">❤️</span>
      <h2>Jazāk Allāhu khayran !</h2>
      <p>Ce jeu est offert gratuitement à tous les enfants. Si tu veux soutenir le créateur, tu peux lui faire un petit don.</p>
    </div>

    <div class="support-message">
      <p>🌙 <b>Pourquoi soutenir ?</b></p>
      <p>Créer ce jeu a demandé des centaines d'heures de travail : coder, écrire les leçons, enregistrer les audios, vérifier le contenu islamique. Chaque don, même petit, aide à :</p>
      <p>• ✨ Améliorer le jeu et ajouter de nouveaux modules<br>
         • 🎙️ Enregistrer plus d'audio de qualité<br>
         • 📖 Ajouter plus de sourates et de contenu<br>
         • 🌐 Garder le jeu accessible à tous, sans pub</p>
      <p>Que tu donnes ou non, tu peux faire cette invocation pour le créateur :</p>
      <p class="dua">جَزَاكَ اللهُ خَيْرًا</p>
      <p style="text-align: right; font-size: .85rem; color: #6b7a71; direction: rtl;">Jazāka Allāhu khayran</p>
      <p style="text-align: center; font-size: .85rem; color: #6b7a71;">« Qu'Allah te récompense par le bien »</p>
    </div>

    <div class="donation-section">
      <h3>💳 Faire un don</h3>
      ${row("💙", "PayPal", CREATOR.paypal, "link")}
      ${row("📧", "Email PayPal", CREATOR.paypalEmail, "copy")}
      ${row("☕", "Ko-fi", CREATOR.kofi, "link")}
      ${row("🧋", "Buy Me a Coffee", CREATOR.buymeacoffee, "link")}
    </div>

    <div class="donation-section">
      <h3>🪙 Crypto-monnaies</h3>
      ${row("₿", "Bitcoin (BTC)", CREATOR.bitcoin, "copy")}
      ${row("Ξ", "Ethereum (ETH)", CREATOR.ethereum, "copy")}
      ${row("💵", "USDT (TRC20)", CREATOR.usdt, "copy")}
    </div>

    <div class="thank-you-note">
      🌟 <b>Wa Jazāka Allāhu khayran !</b><br>
      Merci à tous ceux qui soutiennent ce projet. Qu'Allah vous bénisse, vous et vos familles.
    </div>

    <div class="support-footer">
      <span class="bismillah">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيم</span>
      Fait avec ❤️ pour les enfants de la Oumma
    </div>
  `);

  document.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", () => {
      const value = btn.dataset.copy;
      soundTap();
      navigator.clipboard.writeText(value).then(() => {
        const original = btn.textContent;
        btn.textContent = t("copied");
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove("copied");
        }, 1500);
      }).catch(() => {
        prompt("Copie cette adresse :", value);
      });
    });
  });
}

/* =========================================================
   BOUTON RETOUR
   ========================================================= */
el.btnBack.addEventListener("click", () => {
  soundTap();
  stopAllAudio();

  if (state.currentScreen === "avatar") {
    if (state.avatarReturnTo === "profile") {
      return showProfile();
    }
    return showHome();
  }

  if (state.currentScreen === "home") return;
  if (state.currentScreen === "settings") return showHome();
  if (state.currentScreen === "module") return showHome();
  if (state.currentScreen === "activity") {
    activityGeneration++;
    closeModal();
    if (state.currentModule) showModule(state.currentModule);
    else showHome();
    return;
  }
  if (state.currentScreen === "final") {
    activityGeneration++;
    closeModal();
    return showHome();
  }
  if (state.currentScreen === "profile" ||
      state.currentScreen === "shop" ||
      state.currentScreen === "badges" ||
      state.currentScreen === "support") return showHome();

  if (state.currentModule) showModule(state.currentModule);
  else showHome();
});

/* =========================================================
   BOUTON SON
   ========================================================= */
el.btnSound.addEventListener("click", () => {
  state.soundOn = !state.soundOn;
  el.btnSound.textContent = state.soundOn ? "🔊" : "🔇";
  saveProgress();
  if (state.soundOn) {
    ensureAudioCtx();
    beep(660, 0.1);
  } else {
    stopAllAudio();
  }
});

/* =========================================================
   INITIALISATION
   ========================================================= */
loadProgress();
applyLanguage();
el.btnSound.textContent = state.soundOn ? "🔊" : "🔇";
updateTopbar();
el.btnSupport.addEventListener("click", () => { soundTap(); showSupport(); });

setTimeout(() => {
  checkStreak();
  checkBadges();
}, 300);

showHome();

console.log("%c🌙 Muslim Kids — PHASE 2 + Soutien", "color:#7c3aed;font-weight:bold;font-size:14px;");
console.log("✨ XP · Niveaux · Pièces · Badges · Streak · Avatar · Boutique · ❤️ Soutien");
