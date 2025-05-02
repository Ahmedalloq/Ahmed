const quranChapters = [
    { id: 1, name: "الفاتحة", englishName: "Al-Fatiha", numberOfAyahs: 7 },
    { id: 2, name: "البقرة", englishName: "Al-Baqara", numberOfAyahs: 286 },
    { id: 3, name: "آل عمران", englishName: "Aal-e-Imran", numberOfAyahs: 200 },
    { id: 4, name: "النساء", englishName: "An-Nisa", numberOfAyahs: 176 },
    { id: 5, name: "المائدة", englishName: "Al-Ma'ida", numberOfAyahs: 120 },
    { id: 6, name: "الأنعام", englishName: "Al-An'am", numberOfAyahs: 165 },
    { id: 7, name: "الأعراف", englishName: "Al-A'raf", numberOfAyahs: 206 },
    { id: 8, name: "الأنفال", englishName: "Al-Anfal", numberOfAyahs: 75 },
    { id: 9, name: "التوبة", englishName: "At-Tawba", numberOfAyahs: 129 },
    { id: 10, name: "يونس", englishName: "Yunus", numberOfAyahs: 109 },
    { id: 11, name: "هود", englishName: "Hud", numberOfAyahs: 123 },
    { id: 12, name: "يوسف", englishName: "Yusuf", numberOfAyahs: 111 },
    { id: 13, name: "الرعد", englishName: "Ar-Ra'd", numberOfAyahs: 43 },
    { id: 14, name: "ابراهيم", englishName: "Ibrahim", numberOfAyahs: 52 },
    { id: 15, name: "الحجر", englishName: "Al-Hijr", numberOfAyahs: 99 },
    { id: 16, name: "النحل", englishName: "An-Nahl", numberOfAyahs: 128 },
    { id: 17, name: "الإسراء", englishName: "Al-Isra", numberOfAyahs: 111 },
    { id: 18, name: "الكهف", englishName: "Al-Kahf", numberOfAyahs: 110 },
    { id: 19, name: "مريم", englishName: "Maryam", numberOfAyahs: 98 },
    { id: 20, name: "طه", englishName: "Taha", numberOfAyahs: 135 },
    { id: 21, name: "الأنبياء", englishName: "Al-Anbiya", numberOfAyahs: 112 },
    { id: 22, name: "الحج", englishName: "Al-Hajj", numberOfAyahs: 78 },
    { id: 23, name: "المؤمنون", englishName: "Al-Mu'minun", numberOfAyahs: 118 },
    { id: 24, name: "النور", englishName: "An-Nur", numberOfAyahs: 64 },
    { id: 25, name: "الفرقان", englishName: "Al-Furqan", numberOfAyahs: 77 },
    { id: 26, name: "الشعراء", englishName: "Ash-Shu'ara", numberOfAyahs: 227 },
    { id: 27, name: "النمل", englishName: "An-Naml", numberOfAyahs: 93 },
    { id: 28, name: "القصص", englishName: "Al-Qasas", numberOfAyahs: 88 },
    { id: 29, name: "العنكبوت", englishName: "Al-Ankabut", numberOfAyahs: 69 },
    { id: 30, name: "الروم", englishName: "Ar-Rum", numberOfAyahs: 60 },
    { id: 31, name: "لقمان", englishName: "Luqman", numberOfAyahs: 34 },
    { id: 32, name: "السجدة", englishName: "As-Sajda", numberOfAyahs: 30 },
    { id: 33, name: "الأحزاب", englishName: "Al-Ahzab", numberOfAyahs: 73 },
    { id: 34, name: "سبإ", englishName: "Saba", numberOfAyahs: 54 },
    { id: 35, name: "فاطر", englishName: "Fatir", numberOfAyahs: 45 },
    { id: 36, name: "يس", englishName: "Ya-Sin", numberOfAyahs: 83 },
    { id: 37, name: "الصافات", englishName: "As-Saffat", numberOfAyahs: 182 },
    { id: 38, name: "ص", englishName: "Sad", numberOfAyahs: 88 },
    { id: 39, name: "الزمر", englishName: "Az-Zumar", numberOfAyahs: 75 },
    { id: 40, name: "غافر", englishName: "Ghafir", numberOfAyahs: 85 },
    { id: 41, name: "فصلت", englishName: "Fussilat", numberOfAyahs: 54 },
    { id: 42, name: "الشورى", englishName: "Ash-Shura", numberOfAyahs: 53 },
    { id: 43, name: "الزخرف", englishName: "Az-Zukhruf", numberOfAyahs: 89 },
    { id: 44, name: "الدخان", englishName: "Ad-Dukhan", numberOfAyahs: 59 },
    { id: 45, name: "الجاثية", englishName: "Al-Jathiya", numberOfAyahs: 37 },
    { id: 46, name: "الأحقاف", englishName: "Al-Ahqaf", numberOfAyahs: 35 },
    { id: 47, name: "محمد", englishName: "Muhammad", numberOfAyahs: 38 },
    { id: 48, name: "الفتح", englishName: "Al-Fath", numberOfAyahs: 29 },
    { id: 49, name: "الحجرات", englishName: "Al-Hujurat", numberOfAyahs: 18 },
    { id: 50, name: "ق", englishName: "Qaf", numberOfAyahs: 45 },
    { id: 51, name: "الذاريات", englishName: "Adh-Dhariyat", numberOfAyahs: 60 },
    { id: 52, name: "الطور", englishName: "At-Tur", numberOfAyahs: 49 },
    { id: 53, name: "النجم", englishName: "An-Najm", numberOfAyahs: 62 },
    { id: 54, name: "القمر", englishName: "Al-Qamar", numberOfAyahs: 55 },
    { id: 55, name: "الرحمن", englishName: "Ar-Rahman", numberOfAyahs: 78 },
    { id: 56, name: "الواقعة", englishName: "Al-Waqi'a", numberOfAyahs: 96 },
    { id: 57, name: "الحديد", englishName: "Al-Hadid", numberOfAyahs: 29 },
    { id: 58, name: "المجادلة", englishName: "Al-Mujadila", numberOfAyahs: 22 },
    { id: 59, name: "الحشر", englishName: "Al-Hashr", numberOfAyahs: 24 },
    { id: 60, name: "الممتحنة", englishName: "Al-Mumtahina", numberOfAyahs: 13 },
    { id: 61, name: "الصف", englishName: "As-Saff", numberOfAyahs: 14 },
    { id: 62, name: "الجمعة", englishName: "Al-Jumu'a", numberOfAyahs: 11 },
    { id: 63, name: "المنافقون", englishName: "Al-Munafiqun", numberOfAyahs: 11 },
    { id: 64, name: "التغابن", englishName: "At-Taghabun", numberOfAyahs: 18 },
    { id: 65, name: "الطلاق", englishName: "At-Talaq", numberOfAyahs: 12 },
    { id: 66, name: "التحريم", englishName: "At-Tahrim", numberOfAyahs: 12 },
    { id: 67, name: "الملك", englishName: "Al-Mulk", numberOfAyahs: 30 },
    { id: 68, name: "القلم", englishName: "Al-Qalam", numberOfAyahs: 52 },
    { id: 69, name: "الحاقة", englishName: "Al-Haaqqa", numberOfAyahs: 52 },
    { id: 70, name: "المعارج", englishName: "Al-Ma'arij", numberOfAyahs: 44 },
    { id: 71, name: "نوح", englishName: "Nuh", numberOfAyahs: 28 },
    { id: 72, name: "الجن", englishName: "Al-Jinn", numberOfAyahs: 28 },
    { id: 73, name: "المزمل", englishName: "Al-Muzzammil", numberOfAyahs: 20 },
    { id: 74, name: "المدثر", englishName: "Al-Muddathir", numberOfAyahs: 56 },
    { id: 75, name: "القيامة", englishName: "Al-Qiyama", numberOfAyahs: 40 },
    { id: 76, name: "الانسان", englishName: "Al-Insan", numberOfAyahs: 31 },
    { id: 77, name: "المرسلات", englishName: "Al-Mursalat", numberOfAyahs: 50 },
    { id: 78, name: "النبإ", englishName: "An-Naba", numberOfAyahs: 40 },
    { id: 79, name: "النازعات", englishName: "An-Nazi'at", numberOfAyahs: 46 },
    { id: 80, name: "عبس", englishName: "Abasa", numberOfAyahs: 42 },
    { id: 81, name: "التكوير", englishName: "At-Takwir", numberOfAyahs: 29 },
    { id: 82, name: "الإنفطار", englishName: "Al-Infitar", numberOfAyahs: 19 },
    { id: 83, name: "المطففين", englishName: "Al-Mutaffifin", numberOfAyahs: 36 },
    { id: 84, name: "الإنشقاق", englishName: "Al-Inshiqaq", numberOfAyahs: 25 },
    { id: 85, name: "البروج", englishName: "Al-Buruj", numberOfAyahs: 22 },
    { id: 86, name: "الطارق", englishName: "At-Tariq", numberOfAyahs: 17 },
    { id: 87, name: "الأعلى", englishName: "Al-Ala", numberOfAyahs: 19 },
    { id: 88, name: "الغاشية", englishName: "Al-Ghashiya", numberOfAyahs: 26 },
    { id: 89, name: "الفجر", englishName: "Al-Fajr", numberOfAyahs: 30 },
    { id: 90, name: "البلد", englishName: "Al-Balad", numberOfAyahs: 20 },
    { id: 91, name: "الشمس", englishName: "Ash-Shams", numberOfAyahs: 15 },
    { id: 92, name: "الليل", englishName: "Al-Lail", numberOfAyahs: 21 },
    { id: 93, name: "الضحى", englishName: "Ad-Duha", numberOfAyahs: 11 },
    { id: 94, name: "الشرح", englishName: "Ash-Sharh", numberOfAyahs: 8 },
    { id: 95, name: "التين", englishName: "At-Tin", numberOfAyahs: 8 },
    { id: 96, name: "العلق", englishName: "Al-Alaq", numberOfAyahs: 19 },
    { id: 97, name: "القدر", englishName: "Al-Qadr", numberOfAyahs: 5 },
    { id: 98, name: "البينة", englishName: "Al-Bayyina", numberOfAyahs: 8 },
    { id: 99, name: "الزلزلة", englishName: "Az-Zalzala", numberOfAyahs: 8 },
    { id: 100, name: "العاديات", englishName: "Al-Adiyat", numberOfAyahs: 11 },
    { id: 101, name: "القارعة", englishName: "Al-Qari'a", numberOfAyahs: 11 },
    { id: 102, name: "التكاثر", englishName: "At-Takathur", numberOfAyahs: 8 },
    { id: 103, name: "العصر", englishName: "Al-Asr", numberOfAyahs: 3 },
    { id: 104, name: "الهمزة", englishName: "Al-Humaza", numberOfAyahs: 9 },
    { id: 105, name: "الفيل", englishName: "Al-Fil", numberOfAyahs: 5 },
    { id: 106, name: "قريش", englishName: "Quraysh", numberOfAyahs: 4 },
    { id: 107, name: "الماعون", englishName: "Al-Ma'un", numberOfAyahs: 7 },
    { id: 108, name: "الكوثر", englishName: "Al-Kawthar", numberOfAyahs: 3 },
    { id: 109, name: "الكافرون", englishName: "Al-Kafirun", numberOfAyahs: 6 },
    { id: 110, name: "النصر", englishName: "An-Nasr", numberOfAyahs: 3 },
    { id: 111, name: "المسد", englishName: "Al-Masad", numberOfAyahs: 5 },
    { id: 112, name: "الإخلاص", englishName: "Al-Ikhlas", numberOfAyahs: 4 },
    { id: 113, name: "الفلق", englishName: "Al-Falaq", numberOfAyahs: 5 },
    { id: 114, name: "الناس", englishName: "An-Nas", numberOfAyahs: 6 },
  ];
  
  
  
  const sampleQuranData = [
   
    {
      id: 'fatiha-1-1', surah: 1, surahName: 'الفاتحة', ayah: 1,
      textStart: '', options: ['بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', 'الرَّحْمَٰنِ الرَّحِيمِ'],
      correctAnswer: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', textEnd: '',
    },
    {
      id: 'fatiha-1-2', surah: 1, surahName: 'الفاتحة', ayah: 2,
      textStart: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', options: ['الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', 'الرَّحْمَٰنِ الرَّحِيمِ', 'مَالِكِ يَوْمِ الدِّينِ'],
      correctAnswer: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', textEnd: '',
    },
    {
      id: 'fatiha-1-3', surah: 1, surahName: 'الفاتحة', ayah: 3,
      textStart: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', options: ['الرَّحْمَٰنِ الرَّحِيمِ', 'مَالِكِ يَوْمِ الدِّينِ', 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ'],
      correctAnswer: 'الرَّحْمَٰنِ الرَّحِيمِ', textEnd: '',
    },
     {
      id: 'fatiha-1-4', surah: 1, surahName: 'الفاتحة', ayah: 4,
      textStart: 'الرَّحْمَٰنِ الرَّحِيمِ', options: ['مَالِكِ يَوْمِ الدِّينِ', 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ'],
      correctAnswer: 'مَالِكِ يَوْمِ الدِّينِ', textEnd: '',
    },
     {
      id: 'fatiha-1-5', surah: 1, surahName: 'الفاتحة', ayah: 5,
      textStart: 'مَالِكِ يَوْمِ الدِّينِ', options: ['إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ'],
      correctAnswer: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', textEnd: '',
    },
    {
      id: 'fatiha-1-6', surah: 1, surahName: 'الفاتحة', ayah: 6,
      textStart: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', options: ['اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ', 'غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ'],
      correctAnswer: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', textEnd: '',
    },
     {
      id: 'fatiha-1-7', surah: 1, surahName: 'الفاتحة', ayah: 7,
      textStart: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', options: ['صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', 'غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ', 'وَلَا الضَّالِّينَ'],
      correctAnswer: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', textEnd: '',
    },
  
  
    
    {
      id: 'baqarah-2-1', surah: 2, surahName: 'البقرة', ayah: 1,
      textStart: '', options: ['الم', 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ', 'الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ'],
      correctAnswer: 'الم', textEnd: '',
    },
    {
      id: 'baqarah-2-2', surah: 2, surahName: 'البقرة', ayah: 2,
      textStart: 'الم', options: ['ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ', 'الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ', 'وَيُقِيمُونَ الصَّلَاةَ'],
      correctAnswer: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ', textEnd: '',
    },
    {
      id: 'baqarah-2-3', surah: 2, surahName: 'البقرة', ayah: 3,
      textStart: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ', options: ['الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ', 'وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ', 'أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ'],
      correctAnswer: 'الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ', textEnd: '',
    },
     {
      id: 'baqarah-2-255', surah: 2, surahName: 'البقرة', ayah: 255, 
      textStart: '', options: ['اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ', 'لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ', 'مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ'],
      correctAnswer: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ', textEnd: 'ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ [...]',
    },
      {
      id: 'baqarah-2-285', surah: 2, surahName: 'البقرة', ayah: 285,
      textStart: '', options: ['آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ', 'كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ', 'لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ'],
      correctAnswer: 'آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ', textEnd: 'ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ [...]',
    },
    {
      id: 'baqarah-2-286', surah: 2, surahName: 'البقرة', ayah: 286,
      textStart: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا', options: ['لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ', 'رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا', 'رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا'],
      correctAnswer: 'لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ', textEnd: 'ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا ۚ [...]',
    },
  
  
    // Surah Aal-e-Imran (3) - Sample
    {
      id: 'imran-3-1', surah: 3, surahName: 'آل عمران', ayah: 1,
      textStart: '', options: ['الم', 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ', 'نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ'],
      correctAnswer: 'الم', textEnd: '',
    },
    {
      id: 'imran-3-2', surah: 3, surahName: 'آل عمران', ayah: 2,
      textStart: 'الم', options: ['اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ', 'نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ', 'مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ'],
      correctAnswer: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ', textEnd: '',
    },
     {
      id: 'imran-3-103', surah: 3, surahName: 'آل عمران', ayah: 103,
      textStart: '', options: ['وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا', 'وَاذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ', 'إِذْ كُنتُمْ أَعْدَاءً فَأَلَّفَ بَيْنَ قُلُوبِكُمْ'],
      correctAnswer: 'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا', textEnd: 'ۚ وَاذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ إِذْ كُنتُمْ أَعْدَاءً فَأَلَّفَ بَيْنَ قُلُوبِكُمْ [...]',
    },
    {
      id: 'imran-3-133', surah: 3, surahName: 'آل عمران', ayah: 133,
      textStart: 'وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِّن رَّبِّكُمْ', options: ['وَجَنَّةٍ عَرْضُهَا السَّمَاوَاتُ وَالْأَرْضُ', 'أُعِدَّتْ لِلْمُتَّقِينَ', 'الَّذِينَ يُنفِقُونَ فِي السَّرَّاءِ وَالضَّرَّاءِ'],
      correctAnswer: 'وَجَنَّةٍ عَرْضُهَا السَّمَاوَاتُ وَالْأَرْضُ', textEnd: 'أُعِدَّتْ لِلْمُتَّقِينَ',
    },
  
  
    // Surah An-Nisa (4) - Sample
    {
      id: 'nisa-4-1', surah: 4, surahName: 'النساء', ayah: 1,
      textStart: '', options: ['يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ', 'وَخَلَقَ مِنْهَا زَوْجَهَا', 'وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً'],
      correctAnswer: 'يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ', textEnd: 'وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً ۚ [...]',
    },
    {
      id: 'nisa-4-59', surah: 4, surahName: 'النساء', ayah: 59,
      textStart: 'يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ', options: ['وَأُولِي الْأَمْرِ مِنكُمْ', 'فَإِن تَنَازَعْتُمْ فِي شَيْءٍ', 'فَرُدُّوهُ إِلَى اللَّهِ وَالرَّسُولِ'],
      correctAnswer: 'وَأُولِي الْأَمْرِ مِنكُمْ', textEnd: 'ۖ فَإِن تَنَازَعْتُمْ فِي شَيْءٍ فَرُدُّوهُ إِلَى اللَّهِ وَالرَّسُولِ إِن كُنتُمْ تُؤْمِنُونَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ ۚ [...]',
    },
    {
      id: 'nisa-4-136', surah: 4, surahName: 'النساء', ayah: 136,
      textStart: 'يَا أَيُّهَا الَّذِينَ آمَنُوا آمِنُوا بِاللَّهِ وَرَسُولِهِ', options: ['وَالْكِتَابِ الَّذِي نَزَّلَ عَلَىٰ رَسُولِهِ', 'وَالْكِتَابِ الَّذِي أَنزَلَ مِن قَبْلُ', 'وَمَن يَكْفُرْ بِاللَّهِ وَمَلَائِكَتِهِ'],
      correctAnswer: 'وَالْكِتَابِ الَّذِي نَزَّلَ عَلَىٰ رَسُولِهِ', textEnd: 'وَالْكِتَابِ الَّذِي أَنزَلَ مِن قَبْلُ ۚ [...]',
    },
  
  
    // --- Placeholder questions for remaining Surahs ---
    // Generating a few placeholders per Surah. Replace with actual verses.
  
    // Surah Al-Ma'ida (5)
    { id: 'maida-5-1', surah: 5, surahName: 'المائدة', ayah: 1, textStart: 'يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا', options: ['بِالْعُقُودِ', 'أُحِلَّتْ لَكُم بَهِيمَةُ الْأَنْعَامِ', 'إِلَّا مَا يُتْلَىٰ عَلَيْكُمْ'], correctAnswer: 'بِالْعُقُودِ', textEnd: 'ۚ أُحِلَّتْ لَكُم بَهِيمَةُ الْأَنْعَامِ إِلَّا مَا يُتْلَىٰ عَلَيْكُمْ [...]' },
    { id: 'maida-5-3', surah: 5, surahName: 'المائدة', ayah: 3, textStart: 'حُرِّمَتْ عَلَيْكُمُ الْمَيْتَةُ وَالدَّمُ وَلَحْمُ الْخِنزِيرِ', options: ['وَمَا أُهِلَّ لِغَيْرِ اللَّهِ بِهِ', 'وَالْمُنْخَنِقَةُ وَالْمَوْقُوذَةُ', 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ'], correctAnswer: 'وَمَا أُهِلَّ لِغَيْرِ اللَّهِ بِهِ', textEnd: 'وَالْمُنْخَنِقَةُ وَالْمَوْقُوذَةُ وَالْمُتَرَدِّيَةُ وَالنَّطِيحَةُ وَمَا أَكَلَ السَّبُعُ إِلَّا مَا ذَكَّيْتُمْ [...] الْيَوْمَ يَئِسَ الَّذِينَ كَفَرُوا مِن دِينِكُمْ [...]' },
    { id: 'maida-5-8', surah: 5, surahName: 'المائدة', ayah: 8, textStart: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ لِلَّهِ', options: ['شُهَدَاءَ بِالْقِسْطِ', 'وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ', 'عَلَىٰ أَلَّا تَعْدِلُوا'], correctAnswer: 'شُهَدَاءَ بِالْقِسْطِ', textEnd: 'ۖ وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ عَلَىٰ أَلَّا تَعْدِلُوا ۚ [...]' },
  
    // Surah Al-An'am (6)
    { id: 'anam-6-1', surah: 6, surahName: 'الأنعام', ayah: 1, textStart: '', options: ['الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ', 'وَجَعَلَ الظُّلُمَاتِ وَالنُّورَ', 'ثُمَّ الَّذِينَ كَفَرُوا بِرَبِّهِمْ يَعْدِلُونَ'], correctAnswer: 'الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ', textEnd: 'وَجَعَلَ الظُّلُمَاتِ وَالنُّورَ ۖ ثُمَّ الَّذِينَ كَفَرُوا بِرَبِّهِمْ يَعْدِلُونَ' },
    { id: 'anam-6-162', surah: 6, surahName: 'الأنعام', ayah: 162, textStart: 'قُلْ إِنَّ صَلَاتِي وَنُسُكِي', options: ['وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ', 'لَا شَرِيكَ لَهُ', 'وَبِذَٰلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ'], correctAnswer: 'وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ', textEnd: '' },
    { id: 'anam-6-59', surah: 6, surahName: 'الأنعام', ayah: 59, textStart: 'وَعِندَهُ مَفَاتِحُ الْغَيْبِ', options: ['لَا يَعْلَمُهَا إِلَّا هُوَ', 'وَيَعْلَمُ مَا فِي الْبَرِّ وَالْبَحْرِ', 'وَمَا تَسْقُطُ مِن وَرَقَةٍ'], correctAnswer: 'لَا يَعْلَمُهَا إِلَّا هُوَ', textEnd: 'ۚ وَيَعْلَمُ مَا فِي الْبَرِّ وَالْبَحْرِ ۚ [...]' },
  
    // Surah Al-A'raf (7)
    { id: 'araf-7-1', surah: 7, surahName: 'الأعراف', ayah: 1, textStart: '', options: ['المص', 'كِتَابٌ أُنزِلَ إِلَيْكَ', 'فَلَا يَكُن فِي صَدْرِكَ حَرَجٌ مِّنْهُ'], correctAnswer: 'المص', textEnd: '' },
    { id: 'araf-7-54', surah: 7, surahName: 'الأعراف', ayah: 54, textStart: 'إِنَّ رَبَّكُمُ اللَّهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ', options: ['ثُمَّ اسْتَوَىٰ عَلَى الْعَرْشِ', 'يُغْشِي اللَّيْلَ النَّهَارَ يَطْلُبُهُ حَثِيثًا', 'وَالشَّمْسَ وَالْقَمَرَ وَالنُّجُومَ مُسَخَّرَاتٍ بِأَمْرِهِ'], correctAnswer: 'ثُمَّ اسْتَوَىٰ عَلَى الْعَرْشِ', textEnd: 'يُغْشِي اللَّيْلَ النَّهَارَ يَطْلُبُهُ حَثِيثًا وَالشَّمْسَ وَالْقَمَرَ وَالنُّجُومَ مُسَخَّرَاتٍ بِأَمْرِهِ ۗ [...]' },
    { id: 'araf-7-180', surah: 7, surahName: 'الأعراف', ayah: 180, textStart: 'وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ', options: ['فَادْعُوهُ بِهَا', 'وَذَرُوا الَّذِينَ يُلْحِدُونَ فِي أَسْمَائِهِ', 'سَيُجْزَوْنَ مَا كَانُوا يَعْمَلُونَ'], correctAnswer: 'فَادْعُوهُ بِهَا', textEnd: 'ۖ وَذَرُوا الَّذِينَ يُلْحِدُونَ فِي أَسْمَائِهِ ۚ سَيُجْزَوْنَ مَا كَانُوا يَعْمَلُونَ' },
  
  
    // Surah Al-Anfal (8)
    { id: 'anfal-8-1', surah: 8, surahName: 'الأنفال', ayah: 1, textStart: 'يَسْأَلُونَكَ عَنِ الْأَنفَالِ', options: ['قُلِ الْأَنفَالُ لِلَّهِ وَالرَّسُولِ', 'فَاتَّقُوا اللَّهَ وَأَصْلِحُوا ذَاتَ بَيْنِكُمْ', 'وَأَطِيعُوا اللَّهَ وَرَسُولَهُ إِن كُنتُم مُّؤْمِنِينَ'], correctAnswer: 'قُلِ الْأَنفَالُ لِلَّهِ وَالرَّسُولِ', textEnd: 'ۖ فَاتَّقُوا اللَّهَ وَأَصْلِحُوا ذَاتَ بَيْنِكُمْ ۖ وَأَطِيعُوا اللَّهَ وَرَسُولَهُ إِن كُنتُم مُّؤْمِنِينَ' },
    { id: 'anfal-8-2', surah: 8, surahName: 'الأنفال', ayah: 2, textStart: 'إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ إِذَا ذُكِرَ اللَّهُ', options: ['وَجِلَتْ قُلُوبُهُمْ', 'وَإِذَا تُلِيَتْ عَلَيْهِمْ آيَاتُهُ زَادَتْهُمْ إِيمَانًا', 'وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ'], correctAnswer: 'وَجِلَتْ قُلُوبُهُمْ', textEnd: 'وَإِذَا تُلِيَتْ عَلَيْهِمْ آيَاتُهُ زَادَتْهُمْ إِيمَانًا وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ' },
    { id: 'anfal-8-60', surah: 8, surahName: 'الأنفال', ayah: 60, textStart: 'وَأَعِدُّوا لَهُم مَّا اسْتَطَعْتُم مِّن قُوَّةٍ', options: ['وَمِن رِّبَاطِ الْخَيْلِ', 'تُرْهِبُونَ بِهِ عَدُوَّ اللَّهِ وَعَدُوَّكُمْ', 'وَآخَرِينَ مِن دُونِهِمْ لَا تَعْلَمُونَهُمُ'], correctAnswer: 'وَمِن رِّبَاطِ الْخَيْلِ', textEnd: 'تُرْهِبُونَ بِهِ عَدُوَّ اللَّهِ وَعَدُوَّكُمْ وَآخَرِينَ مِن دُونِهِمْ لَا تَعْلَمُونَهُمُ اللَّهُ يَعْلَمُهُمْ ۚ [...]' },
  
     // Surah At-Tawba (9)
    { id: 'tawba-9-1', surah: 9, surahName: 'التوبة', ayah: 1, textStart: '', options: ['بَرَاءَةٌ مِّنَ اللَّهِ وَرَسُولِهِ', 'إِلَى الَّذِينَ عَاهَدتُّم مِّنَ الْمُشْرِكِينَ', 'فَسِيحُوا فِي الْأَرْضِ أَرْبَعَةَ أَشْهُرٍ'], correctAnswer: 'بَرَاءَةٌ مِّنَ اللَّهِ وَرَسُولِهِ', textEnd: 'إِلَى الَّذِينَ عَاهَدتُّم مِّنَ الْمُشْرِكِينَ' },
    { id: 'tawba-9-128', surah: 9, surahName: 'التوبة', ayah: 128, textStart: 'لَقَدْ جَاءَكُمْ رَسُولٌ مِّنْ أَنفُسِكُمْ', options: ['عَزِيزٌ عَلَيْهِ مَا عَنِتُّمْ', 'حَرِيصٌ عَلَيْكُم بِالْمُؤْمِنِينَ رَءُوفٌ رَّحِيمٌ', 'فَإِن تَوَلَّوْا فَقُلْ حَسْبِيَ اللَّهُ'], correctAnswer: 'عَزِيزٌ عَلَيْهِ مَا عَنِتُّمْ', textEnd: 'حَرِيصٌ عَلَيْكُم بِالْمُؤْمِنِينَ رَءُوفٌ رَّحِيمٌ' },
    { id: 'tawba-9-129', surah: 9, surahName: 'التوبة', ayah: 129, textStart: 'فَإِن تَوَلَّوْا فَقُلْ حَسْبِيَ اللَّهُ', options: ['لَا إِلَٰهَ إِلَّا هُوَ', 'عَلَيْهِ تَوَكَّلْتُ', 'وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ'], correctAnswer: 'لَا إِلَٰهَ إِلَّا هُوَ', textEnd: 'ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ' },
  
    // Surah Yunus (10)
    { id: 'yunus-10-1', surah: 10, surahName: 'يونس', ayah: 1, textStart: '', options: ['الر', 'تِلْكَ آيَاتُ الْكِتَابِ الْحَكِيمِ', 'أَكَانَ لِلنَّاسِ عَجَبًا'], correctAnswer: 'الر', textEnd: 'ۚ تِلْكَ آيَاتُ الْكِتَابِ الْحَكِيمِ' },
    { id: 'yunus-10-62', surah: 10, surahName: 'يونس', ayah: 62, textStart: 'أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ', options: ['لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ', 'الَّذِينَ آمَنُوا وَكَانُوا يَتَّقُونَ', 'لَهُمُ الْبُشْرَىٰ فِي الْحَيَاةِ الدُّنْيَا'], correctAnswer: 'لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ', textEnd: '' },
    { id: 'yunus-10-63', surah: 10, surahName: 'يونس', ayah: 63, textStart: 'لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ', options: ['الَّذِينَ آمَنُوا وَكَانُوا يَتَّقُونَ', 'لَهُمُ الْبُشْرَىٰ فِي الْحَيَاةِ الدُّنْيَا وَفِي الْآخِرَةِ', 'لَا تَبْدِيلَ لِكَلِمَاتِ اللَّهِ'], correctAnswer: 'الَّذِينَ آمَنُوا وَكَانُوا يَتَّقُونَ', textEnd: '' },
  
    // Surah Hud (11)
     { id: 'hud-11-1', surah: 11, surahName: 'هود', ayah: 1, textStart: '', options: ['الر', 'كِتَابٌ أُحْكِمَتْ آيَاتُهُ', 'ثُمَّ فُصِّلَتْ مِن لَّدُنْ حَكِيمٍ خَبِيرٍ'], correctAnswer: 'الر', textEnd: 'ۚ كِتَابٌ أُحْكِمَتْ آيَاتُهُ ثُمَّ فُصِّلَتْ مِن لَّدُنْ حَكِيمٍ خَبِيرٍ' },
     { id: 'hud-11-114', surah: 11, surahName: 'هود', ayah: 114, textStart: 'وَأَقِمِ الصَّلَاةَ طَرَفَيِ النَّهَارِ', options: ['وَزُلَفًا مِّنَ اللَّيْلِ', 'إِنَّ الْحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ', 'ذَٰلِكَ ذِكْرَىٰ لِلذَّاكِرِينَ'], correctAnswer: 'وَزُلَفًا مِّنَ اللَّيْلِ', textEnd: 'ۚ إِنَّ الْحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ ۚ ذَٰلِكَ ذِكْرَىٰ لِلذَّاكِرِينَ' },
     { id: 'hud-11-88', surah: 11, surahName: 'هود', ayah: 88, textStart: 'قَالَ يَا قَوْمِ أَرَأَيْتُمْ إِن كُنتُ عَلَىٰ بَيِّنَةٍ مِّن رَّبِّي وَرَزَقَنِي مِنْهُ رِزْقًا حَسَنًا', options: ['وَمَا أُرِيدُ أَنْ أُخَالِفَكُمْ إِلَىٰ مَا أَنْهَاكُمْ عَنْهُ', 'إِنْ أُرِيدُ إِلَّا الْإِصْلَاحَ مَا اسْتَطَعْتُ', 'وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ'], correctAnswer: 'وَمَا أُرِيدُ أَنْ أُخَالِفَكُمْ إِلَىٰ مَا أَنْهَاكُمْ عَنْهُ', textEnd: 'ۚ إِنْ أُرِيدُ إِلَّا الْإِصْلَاحَ مَا اسْتَطَعْتُ ۚ وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ [...]' },
  
     // Surah Yusuf (12)
     { id: 'yusuf-12-1', surah: 12, surahName: 'يوسف', ayah: 1, textStart: '', options: ['الر', 'تِلْكَ آيَاتُ الْكِتَابِ الْمُبِينِ', 'إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا'], correctAnswer: 'الر', textEnd: 'ۚ تِلْكَ آيَاتُ الْكِتَابِ الْمُبِينِ' },
     { id: 'yusuf-12-4', surah: 12, surahName: 'يوسف', ayah: 4, textStart: 'إِذْ قَالَ يُوسُفُ لِأَبِيهِ يَا أَبَتِ', options: ['إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا', 'وَالشَّمْسَ وَالْقَمَرَ', 'رَأَيْتُهُمْ لِي سَاجِدِينَ'], correctAnswer: 'إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا', textEnd: 'وَالشَّمْسَ وَالْقَمَرَ رَأَيْتُهُمْ لِي سَاجِدِينَ' },
     { id: 'yusuf-12-108', surah: 12, surahName: 'يوسف', ayah: 108, textStart: 'قُلْ هَٰذِهِ سَبِيلِي أَدْعُو إِلَى اللَّهِ', options: ['عَلَىٰ بَصِيرَةٍ أَنَا وَمَنِ اتَّبَعَنِي', 'وَسُبْحَانَ اللَّهِ', 'وَمَا أَنَا مِنَ الْمُشْرِكِينَ'], correctAnswer: 'عَلَىٰ بَصِيرَةٍ أَنَا وَمَنِ اتَّبَعَنِي', textEnd: 'ۖ وَسُبْحَانَ اللَّهِ وَمَا أَنَا مِنَ الْمُشْرِكِينَ' },
  
     // Surah Ar-Ra'd (13)
     { id: 'rad-13-1', surah: 13, surahName: 'الرعد', ayah: 1, textStart: '', options: ['المر', 'تِلْكَ آيَاتُ الْكِتَابِ', 'وَالَّذِي أُنزِلَ إِلَيْكَ مِن رَّبِّكَ الْحَقُّ'], correctAnswer: 'المر', textEnd: 'ۚ تِلْكَ آيَاتُ الْكِتَابِ ۗ وَالَّذِي أُنزِلَ إِلَيْكَ مِن رَّبِّكَ الْحَقُّ وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يُؤْمِنُونَ' },
     { id: 'rad-13-11', surah: 13, surahName: 'الرعد', ayah: 11, textStart: 'لَهُ مُعَقِّبَاتٌ مِّن بَيْنِ يَدَيْهِ وَمِنْ خَلْفِهِ يَحْفَظُونَهُ مِنْ أَمْرِ اللَّهِ', options: ['إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ', 'وَإِذَا أَرَادَ اللَّهُ بِقَوْمٍ سُوءًا فَلَا مَرَدَّ لَهُ', 'وَمَا لَهُم مِّن دُونِهِ مِن وَالٍ'], correctAnswer: 'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ', textEnd: 'ۗ وَإِذَا أَرَادَ اللَّهُ بِقَوْمٍ سُوءًا فَلَا مَرَدَّ لَهُ ۚ وَمَا لَهُم مِّن دُونِهِ مِن وَالٍ' },
     { id: 'rad-13-28', surah: 13, surahName: 'الرعد', ayah: 28, textStart: 'الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ', options: ['أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ', 'الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ', 'طُوبَىٰ لَهُمْ وَحُسْنُ مَآبٍ'], correctAnswer: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ', textEnd: '' },
  
  
     // Surah Ibrahim (14)
     { id: 'ibrahim-14-1', surah: 14, surahName: 'ابراهيم', ayah: 1, textStart: '', options: ['الر', 'كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ', 'لِتُخْرِجَ النَّاسَ مِنَ الظُّلُمَاتِ إِلَى النُّورِ'], correctAnswer: 'الر', textEnd: 'ۚ كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ لِتُخْرِجَ النَّاسَ مِنَ الظُّلُمَاتِ إِلَى النُّورِ بِإِذْنِ رَبِّهِمْ إِلَىٰ صِرَاطِ الْعَزِيزِ الْحَمِيدِ' },
     { id: 'ibrahim-14-7', surah: 14, surahName: 'ابراهيم', ayah: 7, textStart: 'وَإِذْ تَأَذَّنَ رَبُّكُمْ', options: ['لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ', 'وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ', 'وَقَالَ مُوسَىٰ إِن تَكْفُرُوا أَنتُمْ'], correctAnswer: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ', textEnd: 'ۖ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ' },
     { id: 'ibrahim-14-40', surah: 14, surahName: 'ابراهيم', ayah: 40, textStart: 'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ', options: ['وَمِن ذُرِّيَّتِي', 'رَبَّنَا وَتَقَبَّلْ دُعَاءِ', 'رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ'], correctAnswer: 'وَمِن ذُرِّيَّتِي', textEnd: 'ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ' },
  
     // Surah Al-Hijr (15)
     { id: 'hijr-15-1', surah: 15, surahName: 'الحجر', ayah: 1, textStart: '', options: ['الر', 'تِلْكَ آيَاتُ الْكِتَابِ وَقُرْآنٍ مُّبِينٍ', 'رُّبَمَا يَوَدُّ الَّذِينَ كَفَرُوا'], correctAnswer: 'الر', textEnd: 'ۚ تِلْكَ آيَاتُ الْكِتَابِ وَقُرْآنٍ مُّبِينٍ' },
     { id: 'hijr-15-9', surah: 15, surahName: 'الحجر', ayah: 9, textStart: 'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ', options: ['وَإِنَّا لَهُ لَحَافِظُونَ', 'وَلَقَدْ أَرْسَلْنَا مِن قَبْلِكَ', 'فِي شِيَعِ الْأَوَّلِينَ'], correctAnswer: 'وَإِنَّا لَهُ لَحَافِظُونَ', textEnd: '' },
     { id: 'hijr-15-99', surah: 15, surahName: 'الحجر', ayah: 99, textStart: 'وَاعْبُدْ رَبَّكَ', options: ['حَتَّىٰ يَأْتِيَكَ الْيَقِينُ', 'فَسَبِّحْ بِحَمْدِ رَبِّكَ', 'وَكُن مِّنَ السَّاجِدِينَ'], correctAnswer: 'حَتَّىٰ يَأْتِيَكَ الْيَقِينُ', textEnd: '' },
  
     // ... Continue adding at least 3-5 samples for each Surah ...
  
     // Surah An-Nas (114) - (Already provided in the initial data)
     { id: 'nas-114-1', surah: 114, surahName: 'الناس', ayah: 1, textStart: '', options: ['قُلْ أَعُوذُ بِرَبِّ النَّاسِ', 'مَلِكِ النَّاسِ', 'إِلَٰهِ النَّاسِ'], correctAnswer: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', textEnd: '' },
     { id: 'nas-114-2', surah: 114, surahName: 'الناس', ayah: 2, textStart: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', options: ['مَلِكِ النَّاسِ', 'إِلَٰهِ النَّاسِ', 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ'], correctAnswer: 'مَلِكِ النَّاسِ', textEnd: '' },
     { id: 'nas-114-3', surah: 114, surahName: 'الناس', ayah: 3, textStart: 'مَلِكِ النَّاسِ', options: ['إِلَٰهِ النَّاسِ', 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ', 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ'], correctAnswer: 'إِلَٰهِ النَّاسِ', textEnd: '' },
     { id: 'nas-114-4', surah: 114, surahName: 'الناس', ayah: 4, textStart: 'إِلَٰهِ النَّاسِ', options: ['مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ', 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ', 'مِنَ الْجِنَّةِ وَالنَّاسِ'], correctAnswer: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ', textEnd: '' },
     { id: 'nas-114-5', surah: 114, surahName: 'الناس', ayah: 5, textStart: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ', options: ['الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ', 'مِنَ الْجِنَّةِ وَالنَّاسِ', 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ'], correctAnswer: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ', textEnd: '' },
     { id: 'nas-114-6', surah: 114, surahName: 'الناس', ayah: 6, textStart: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ', options: ['مِنَ الْجِنَّةِ وَالنَّاسِ', 'مِن شَرِّ مَا خَلَقَ', 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ'], correctAnswer: 'مِنَ الْجِنَّةِ وَالنَّاسِ', textEnd: '' },
  
  
  ];
  
  // --- Helper Function to Generate Placeholder Data (if needed) ---
  function generatePlaceholderQuestions(surahId, surahName, numQuestions = 5) {
    const questions = [];
    const chapterInfo = quranChapters.find(c => c.id === surahId);
    const maxAyah = chapterInfo ? chapterInfo.numberOfAyahs : 20; // Default max if not found
  
    for (let i = 1; i <= numQuestions; i++) {
      const ayahNum = Math.floor(Math.random() * maxAyah) + 1; // Random ayah number within range
      const correctAnswer = `الآية ${ayahNum} الصحيحة من سورة ${surahName}`;
      questions.push({
        id: `${surahName.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${surahId}-${i}`, // Sanitize ID
        surah: surahId,
        surahName: surahName,
        ayah: ayahNum,
        textStart: `بداية آية (${ayahNum}) من سورة ${surahName}`,
        options: [
            correctAnswer,
            `خيار خاطئ ${i}أ`,
            `خيار خاطئ ${i}ب`
            ].sort(() => Math.random() - 0.5), // Shuffle options
        correctAnswer: correctAnswer,
        textEnd: `[...] نهاية الآية (${ayahNum})`,
      });
    }
    return questions;
  }
  
  // --- Fill missing chapters with placeholders ---
  // This ensures every chapter has *some* questions, even if they are placeholders.
  quranChapters.forEach(chapter => {
    const hasQuestions = sampleQuranData.some(q => q.surah === chapter.id);
    if (!hasQuestions) {
      console.warn(`Generating placeholder questions for Surah ${chapter.name} (${chapter.id})`);
      sampleQuranData.push(...generatePlaceholderQuestions(chapter.id, chapter.name, 5)); // Add 5 placeholders
    }
  });
  
  
  // --- Data Access Functions ---
  
  /**
   * Gets test questions for a specific chapter, shuffling them.
   * @param {number} chapterId - The ID of the chapter.
   * @returns {Array<object>} An array of question objects for the chapter, shuffled.
   */
  function getTestQuestionsForChapter(chapterId) {
      const chapterQuestions = sampleQuranData.filter(q => q.surah === chapterId);
      // Shuffle the retrieved questions for this test session
      return chapterQuestions.sort(() => Math.random() - 0.5);
  }
  
  /**
   * Gets a specific question by its ID.
   * @param {string} id - The unique ID of the question.
   * @returns {object | undefined} The question object or undefined if not found.
   */
  function getQuestionById(id) {
    return sampleQuranData.find(q => q.id === id);
  }
  
  /**
   * Gets chapter details by its ID.
   * @param {number} id - The ID of the chapter.
   * @returns {object | undefined} The chapter details object or undefined if not found.
   */
  function getChapterById(id) {
      return quranChapters.find(c => c.id === id);
  }
  
  // Make functions globally available if needed (or use modules in a larger project)
  // window.getTestQuestionsForChapter = getTestQuestionsForChapter;
  // window.getChapterById = getChapterById;
  // window.quranChapters = quranChapters; // Expose chapters if needed by UI directly
  