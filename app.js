/* دیکته آدرین — کلاس دوم */
const STORAGE_KEY = "adrian-dikte-v1";

const GROUPS = [
  { id: "all", label: "همه" },
  { id: "s", label: "س ث ص" },
  { id: "t", label: "ت ط" },
  { id: "h", label: "ه ح" },
  { id: "z", label: "ز ذ ض ظ" },
  { id: "eyn", label: "ع" },
  { id: "gh", label: "غ ق" },
  { id: "zh", label: "ژ" }
];

const LETTER_SWAP = {
  "ث": ["س", "ص"],
  "س": ["ث", "ص"],
  "ص": ["س", "ث"],
  "ط": ["ت"],
  "ت": ["ط"],
  "ح": ["ه"],
  "ه": ["ح"],
  "ض": ["ز", "ذ", "ظ"],
  "ظ": ["ز", "ذ", "ض"],
  "ذ": ["ز", "ض", "ظ"],
  "ز": ["ذ", "ض", "ظ"],
  "ع": ["ا", "ء"],
  "غ": ["ق"],
  "ق": ["غ"],
  "ژ": ["ج", "ز"]
};

const WORDS = [
  { w: "باعث", g: "s", focus: "ث", hint: "ث مثل ثریا، نه س و نه ص" },
  { w: "ثابت", g: "s", focus: "ث", hint: "اول کلمه ث است" },
  { w: "ثانیه", g: "s", focus: "ث", hint: "واحد زمان با ث نوشته می‌شود" },
  { w: "ثروت", g: "s", focus: "ث", hint: "ثروت با ث" },
  { w: "مثلث", g: "s", focus: "ث", hint: "شکل سه‌گوش با ث آخر" },
  { w: "اثر", g: "s", focus: "ث", hint: "اثر انگشت با ث" },
  { w: "بحث", g: "s", focus: "ث", hint: "بحث با ث آخر" },
  { w: "ارث", g: "s", focus: "ث", hint: "ارث با ث" },
  { w: "مکث", g: "s", focus: "ث", hint: "مکث یعنی کمی ایستادن" },
  { w: "کثیف", g: "s", focus: "ث", hint: "دست کثیف با ث" },
  { w: "ثبت", g: "s", focus: "ث", hint: "ثبت‌نام با ث" },
  { w: "ثریا", g: "s", focus: "ث", hint: "اسم دخترانه با ث" },
  { w: "مثال", g: "s", focus: "ث", hint: "مثال با ث" },
  { w: "حوادث", g: "s", focus: "ث", hint: "حوادث با ث آخر" },
  { w: "سلام", g: "s", focus: "س", hint: "سلام با س نوشته می‌شود" },
  { w: "سیب", g: "s", focus: "س", hint: "میوه قرمز با س" },
  { w: "مدرسه", g: "s", focus: "س", hint: "مدرسه با س" },
  { w: "دوست", g: "s", focus: "س", hint: "دوست با س" },
  { w: "سبز", g: "s", focus: "س", hint: "رنگ سبز با س" },
  { w: "آسمان", g: "s", focus: "س", hint: "آسمان با س" },
  { w: "صبح", g: "s", focus: "ص", hint: "صبح با ص" },
  { w: "صدا", g: "s", focus: "ص", hint: "صدا با ص" },
  { w: "صابون", g: "s", focus: "ص", hint: "صابون با ص" },
  { w: "تصویر", g: "s", focus: "ص", hint: "تصویر با ص" },
  { w: "فصل", g: "s", focus: "ص", hint: "فصل سال با ص" },
  { w: "صف", g: "s", focus: "ص", hint: "صف کلاس با ص" },
  { w: "قصه", g: "s", focus: "ص", hint: "قصه با ص" },
  { w: "خاص", g: "s", focus: "ص", hint: "خاص با ص آخر" },

  { w: "طلا", g: "t", focus: "ط", hint: "طلا با ط" },
  { w: "طاووس", g: "t", focus: "ط", hint: "پرنده زیبا با ط" },
  { w: "طوطی", g: "t", focus: "ط", hint: "طوطی با ط" },
  { w: "طناب", g: "t", focus: "ط", hint: "طناب با ط" },
  { w: "فقط", g: "t", focus: "ط", hint: "فقط با ط" },
  { w: "وطن", g: "t", focus: "ط", hint: "وطن با ط" },
  { w: "خطر", g: "t", focus: "ط", hint: "خطر با ط" },
  { w: "قطار", g: "t", focus: "ط", hint: "قطار با ط" },
  { w: "طبیعت", g: "t", focus: "ط", hint: "طبیعت با ط" },
  { w: "حیاط", g: "t", focus: "ط", hint: "حیاط خانه با ط" },
  { w: "سطل", g: "t", focus: "ط", hint: "سطل آب با ط" },
  { w: "خط", g: "t", focus: "ط", hint: "خط دفتر با ط" },
  { w: "کتاب", g: "t", focus: "ت", hint: "کتاب با ت" },
  { w: "درخت", g: "t", focus: "ت", hint: "درخت با ت" },
  { w: "دختر", g: "t", focus: "ت", hint: "دختر با ت" },
  { w: "تابستان", g: "t", focus: "ت", hint: "تابستان با ت" },

  { w: "حال", g: "h", focus: "ح", hint: "حال شما خوب است؟ با ح" },
  { w: "حمام", g: "h", focus: "ح", hint: "حمام با ح" },
  { w: "حتی", g: "h", focus: "ح", hint: "حتی با ح" },
  { w: "حرف", g: "h", focus: "ح", hint: "حرف زدن با ح" },
  { w: "حوض", g: "h", focus: "ح", hint: "حوض آب با ح" },
  { w: "صبح", g: "h", focus: "ح", hint: "صبح هم ص دارد هم ح" },
  { w: "حسین", g: "h", focus: "ح", hint: "حسین با ح" },
  { w: "هوا", g: "h", focus: "ه", hint: "هوا با ه" },
  { w: "ماه", g: "h", focus: "ه", hint: "ماه آسمان با ه" },
  { w: "همه", g: "h", focus: "ه", hint: "همه با ه" },
  { w: "بهار", g: "h", focus: "ه", hint: "بهار با ه" },

  { w: "مریض", g: "z", focus: "ض", hint: "مریض با ض" },
  { w: "بعضی", g: "z", focus: "ض", hint: "بعضی با ض" },
  { w: "وضو", g: "z", focus: "ض", hint: "وضو با ض" },
  { w: "ریاضی", g: "z", focus: "ض", hint: "درس ریاضی با ض" },
  { w: "حاضر", g: "z", focus: "ض", hint: "حاضر با ض" },
  { w: "ضربه", g: "z", focus: "ض", hint: "ضربه توپ با ض" },
  { w: "زمین", g: "z", focus: "ز", hint: "زمین با ز نوشته می‌شود" },
  { w: "ظهر", g: "z", focus: "ظ", hint: "ظهر با ظ" },
  { w: "ظرف", g: "z", focus: "ظ", hint: "ظرف غذا با ظ" },
  { w: "نظر", g: "z", focus: "ظ", hint: "نظر دادن با ظ" },
  { w: "نظم", g: "z", focus: "ظ", hint: "نظم کلاس با ظ" },
  { w: "مواظب", g: "z", focus: "ظ", hint: "مواظب باش با ظ" },
  { w: "حفظ", g: "z", focus: "ظ", hint: "حفظ شعر با ظ" },
  { w: "ظریف", g: "z", focus: "ظ", hint: "ظریف با ظ" },
  { w: "ناظم", g: "z", focus: "ظ", hint: "ناظم مدرسه با ظ" },
  { w: "ذرت", g: "z", focus: "ذ", hint: "ذرت با ذ" },
  { w: "لذیذ", g: "z", focus: "ذ", hint: "غذای لذیذ با ذ" },
  { w: "گذر", g: "z", focus: "ذ", hint: "گذر با ذ" },
  { w: "زیبا", g: "z", focus: "ز", hint: "زیبا با ز" },
  { w: "روز", g: "z", focus: "ز", hint: "روز با ز" },
  { w: "سبز", g: "z", focus: "ز", hint: "سبز با ز" },

  { w: "عسل", g: "eyn", focus: "ع", hint: "عسل با ع" },
  { w: "عید", g: "eyn", focus: "ع", hint: "عید با ع" },
  { w: "علم", g: "eyn", focus: "ع", hint: "علم با ع" },
  { w: "شعر", g: "eyn", focus: "ع", hint: "شعر با ع" },
  { w: "شمع", g: "eyn", focus: "ع", hint: "شمع با ع" },
  { w: "جمع", g: "eyn", focus: "ع", hint: "جمع با ع" },
  { w: "شروع", g: "eyn", focus: "ع", hint: "شروع با ع" },
  { w: "معلم", g: "eyn", focus: "ع", hint: "معلم با ع" },
  { w: "ساعت", g: "eyn", focus: "ع", hint: "ساعت با ع" },
  { w: "دعا", g: "eyn", focus: "ع", hint: "دعا با ع" },
  { w: "عینک", g: "eyn", focus: "ع", hint: "عینک با ع" },
  { w: "اجتماع", g: "eyn", focus: "ع", hint: "اجتماع با ع" },

  { w: "غذا", g: "gh", focus: "غ", hint: "غذا با غ" },
  { w: "غاز", g: "gh", focus: "غ", hint: "غاز با غ" },
  { w: "غروب", g: "gh", focus: "غ", hint: "غروب با غ" },
  { w: "باغ", g: "gh", focus: "غ", hint: "باغ با غ" },
  { w: "چراغ", g: "gh", focus: "غ", hint: "چراغ با غ" },
  { w: "داغ", g: "gh", focus: "غ", hint: "چای داغ با غ" },
  { w: "غمگین", g: "gh", focus: "غ", hint: "غمگین با غ" },
  { w: "غلط", g: "gh", focus: "غ", hint: "غلط املایی با غ" },
  { w: "قلب", g: "gh", focus: "ق", hint: "قلب با ق" },
  { w: "قاشق", g: "gh", focus: "ق", hint: "قاشق با ق" },
  { w: "قرآن", g: "gh", focus: "ق", hint: "قرآن با ق" },
  { w: "قاصدک", g: "gh", focus: "ق", hint: "قاصدک با ق" },
  { w: "قلم", g: "gh", focus: "ق", hint: "قلم با ق" },
  { w: "قفس", g: "gh", focus: "ق", hint: "قفس پرنده با ق" },
  { w: "اتاق", g: "gh", focus: "ق", hint: "اتاق با ق آخر" },
  { w: "دقیق", g: "gh", focus: "ق", hint: "ساعت دقیق با ق" },

  { w: "ژاله", g: "zh", focus: "ژ", hint: "ژاله با ژ" },
  { w: "ژاکت", g: "zh", focus: "ژ", hint: "ژاکت با ژ" },
  { w: "مژه", g: "zh", focus: "ژ", hint: "مژه چشم با ژ" },
  { w: "ژاپن", g: "zh", focus: "ژ", hint: "کشور ژاپن با ژ" },
  { w: "پژمرده", g: "zh", focus: "ژ", hint: "گل پژمرده با ژ" },
  { w: "ژرف", g: "zh", focus: "ژ", hint: "ژرف با ژ" }
];

const STORIES = [
  {
    "id": "s1",
    "title": "طوطی سبز",
    "emoji": "🦜",
    "text": "آدرین یک طوطی سبز داشت.\nنام طوطی زیبا طوطی بود.\nهر صبح طوطی روی درخت می‌نشست.\nآدرین به حیاط می‌رفت.\nبه طوطی یک سیب می‌داد.\nطوطی سیب را با شادی می‌خورد.\nبعد با هم بازی می‌کردند.\nگاهی طوطی حرف می‌زد.\nآدرین از صدای او می‌خندید.\nغروب که می‌شد به خانه می‌رفتند.\nمادر چراغ حیاط را روشن می‌کرد.\nآدرین به طوطی شب به خیر می‌گفت."
  },
  {
    "id": "s2",
    "title": "صبح مدرسه",
    "emoji": "🎒",
    "text": "صبح زود هوا کمی سرد بود.\nآدرین زود از خواب بیدار شد.\nدست و رویش را با صابون شست.\nبعد صبحانه نان و پنیر خورد.\nکیفش را از کنار در برداشت.\nمادر او را تا حیاط بدرقه کرد.\nآدرین با دوستانش به مدرسه رفت.\nزنگ کلاس که خورد همه حاضر شدند.\nمعلم از بچه‌ها درس پرسید.\nآدرین جواب درست داد.\nمعلم به او آفرین گفت.\nاو از این کار خیلی خوشحال شد."
  },
  {
    "id": "s3",
    "title": "غذای لذیذ",
    "emoji": "🍲",
    "text": "ظهر شد و هوا خیلی داغ بود.\nآدرین از مدرسه به خانه آمد.\nمادر غذای لذیذ پخته بود.\nبوی غذا در خانه پیچیده بود.\nآدرین اول دستش را شست.\nبعد کنار سفره نشست.\nهمه با هم غذا خوردند.\nپدر از غذا تعریف کرد.\nآدرین ظرفش را خالی کرد.\nبعد از غذا کمی استراحت کردند.\nمادر ظرف‌ها را جمع کرد.\nآدرین گفت غذا خیلی لذیذ بود."
  },
  {
    "id": "s4",
    "title": "غازهای باغ",
    "emoji": "🪿",
    "text": "در باغ خانه یک حوض بزرگ بود.\nچند غاز سفید در باغ بودند.\nغازها در حوض شنا می‌کردند.\nآدرین کنار حوض ایستاد.\nاو با دقت به غازها نگاه کرد.\nیکی از غازها نزدیک آمد.\nآدرین آرام و مواظب بود.\nغروب آفتاب خیلی قشنگ بود.\nچراغ باغ کم‌کم روشن شد.\nغازها به سمت لانه رفتند.\nآدرین هم به خانه برگشت.\nشب برای مادر قصه غازها را گفت."
  },
  {
    "id": "s5",
    "title": "درس ریاضی",
    "emoji": "✏️",
    "text": "امروز درس ریاضی داشتیم.\nمعلم یک مثلث روی تخته کشید.\nگفت مثلث سه ضلع دارد.\nآدرین با دقت نگاه کرد.\nبعد شکل را در دفتر کشید.\nمعلم یک جمع هم نوشت.\nآدرین جواب را درست نوشت.\nحسین هم جواب درست داد.\nمعلم از نظم کلاس تعریف کرد.\nزنگ تفریح که شد به حیاط رفتند.\nآدرین و حسین با هم بازی کردند.\nبعد دوباره به کلاس برگشتند."
  },
  {
    "id": "s6",
    "title": "دوست مهربان",
    "emoji": "🤝",
    "text": "آدرین یک دوست مهربان دارد.\nنام دوستش حسین است.\nآن‌ها هر روز هم را می‌بینند.\nدر حیاط مدرسه بازی می‌کنند.\nگاهی با هم طناب می‌زنند.\nگاهی هم قصه می‌خوانند.\nیک روز حسین ناراحت بود.\nآدرین کنارش نشست.\nاز او حالش را پرسید.\nبعد با هم صحبت کردند.\nحسین دوباره خندید.\nدوستی باعث شادی می‌شود."
  },
  {
    "id": "s7",
    "title": "شب آرام",
    "emoji": "🌙",
    "text": "شب شد و ماه در آسمان بود.\nهوا آرام و خنک شده بود.\nآدرین کتاب قصه را باز کرد.\nاو یک قصه کوتاه خواند.\nمادر کنارش نشست.\nچراغ اتاق را کمی کم کرد.\nآدرین از درس امروز گفت.\nمادر به حرف‌هایش گوش داد.\nبعد برایش یک شعر خواند.\nآدرین زود خوابید.\nتا فردا سرحال باشد.\nفردا دوباره به مدرسه می‌رود."
  },
  {
    "id": "s8",
    "title": "ستاره‌های طلایی",
    "emoji": "⭐",
    "text": "آدرین دیکته نوشت.\nکلمه باعث را درست نوشت.\nکلمه صبح را هم درست نوشت.\nکلمه حمام را با ح نوشت.\nمعلم برگه‌اش را دید.\nبه او آفرین گفت.\nآدرین یک ستاره طلایی گرفت.\nاو ستاره را در دفتر چسباند.\nهر ستاره برایش مهم بود.\nگفت وقتی صد ستاره بگیرد.\nبابا برایش جایزه می‌خرد.\nآدرین با شوق دوباره تمرین کرد."
  }
]
;

const READ_SENTENCES = [
  "آدرین کلاس دوم است.",
  "ورزش باعث سلامتی می‌شود.",
  "صبح زود به مدرسه رفت.",
  "طوطی روی درخت نشست.",
  "غذای لذیذ روی سفره بود.",
  "ظهر هوا خیلی داغ بود.",
  "معلم از او درس پرسید.",
  "در حیاط مدرسه بازی کرد.",
  "چراغ اتاق روشن است.",
  "ناظم کلاس نظم را دوست دارد.",
  "ثریا کتاب قصه خواند.",
  "مواظب خطرات جاده باش."
];

const NIGHT_PACKS = [
  {
    title: "مدرسه",
    lines: [
      "امروز هوا آفتابی بود.",
      "آدرین کیفش را برداشت.",
      "او با مادرش به مدرسه رفت.",
      "زنگ کلاس خورد و همه حاضر شدند.",
      "معلم از بچه‌ها درس پرسید.",
      "آدرین جواب درست داد.",
      "معلم به او آفرین گفت.",
      "بعد از مدرسه به خانه آمد."
    ]
  },
  {
    title: "صبح تا شب",
    lines: [
      "صبح زود بیدار شدم.",
      "دست‌هایم را با صابون شستم.",
      "صبحانه نان و پنیر خوردم.",
      "با دوستم به مدرسه رفتیم.",
      "زنگ تفریح در حیاط بازی کردیم.",
      "ظهر غذای لذیذ خوردیم.",
      "عصر تکالیف را نوشتم.",
      "شب زود خوابیدم تا سرحال باشم."
    ]
  },
  {
    title: "نشانه‌های سخت",
    lines: [
      "کلمه باعث را با ث بنویس.",
      "صبح را با صاد بنویس.",
      "حمام را با ح بنویس.",
      "طلا در طبیعت کمیاب است.",
      "قطار از ایستگاه رد شد.",
      "فقط باید مواظب خطر باشیم.",
      "غذا خیلی لذیذ بود.",
      "وطن ما ایران عزیز است."
    ]
  },
  {
    title: "خانه و غذا",
    lines: [
      "ظهر به خانه برگشتیم.",
      "ظرف‌های غذا روی میز بود.",
      "مادر غذای لذیذ پخته بود.",
      "آدرین اول دستش را شست.",
      "همه با هم غذا خوردند.",
      "بعد از غذا کمی استراحت کردیم.",
      "آدرین دیکته‌اش را نوشت.",
      "شب قصه کوتاه خواندیم."
    ]
  },
  {
    title: "دوست و بازی",
    lines: [
      "آدرین یک دوست مهربان دارد.",
      "نام دوستش حسین است.",
      "آن‌ها در حیاط مدرسه بازی کردند.",
      "گاهی با هم طناب می‌زدند.",
      "گاهی کتاب قصه می‌خواندند.",
      "یک روز هوا خیلی داغ بود.",
      "زیر درخت نشستند و آب خوردند.",
      "دوستی باعث شادی می‌شود."
    ]
  },
  {
    title: "طبیعت",
    lines: [
      "در باغ خانه یک حوض بود.",
      "چند غاز در حوض شنا می‌کردند.",
      "غروب آفتاب خیلی قشنگ بود.",
      "چراغ حیاط روشن شد.",
      "ماه در آسمان دیده می‌شد.",
      "هوا آرام و خنک شده بود.",
      "آدرین به آسمان نگاه کرد.",
      "بعد آرام به خانه برگشت."
    ]
  },
  {
    title: "کلاس دوم",
    lines: [
      "امروز درس ریاضی داشتیم.",
      "معلم یک مثلث روی تخته کشید.",
      "مثلث سه ضلع دارد.",
      "آدرین شکل را در دفتر کشید.",
      "بعد یک جمع را درست نوشت.",
      "ناظم از نظم کلاس تعریف کرد.",
      "معلم شعر زیبایی خواند.",
      "همه در کلاس ساکت نشستند."
    ]
  },
  {
    title: "عید و شادی",
    lines: [
      "عید برای همه شادی می‌آورد.",
      "خانه را تمیز کرده بودند.",
      "روی میز ظرف شیرینی بود.",
      "شمع را روی کیک روشن کردند.",
      "آدرین یک ستاره طلایی گرفت.",
      "او ستاره را در دفتر چسباند.",
      "گفت وقتی صد ستاره بگیرد.",
      "بابا برایش جایزه می‌خرد."
    ]
  }
];

const NIGHT = [
  [
    "امروز هوا آفتابی بود.",
    "آدرین کیفش را برداشت.",
    "او به مدرسه رفت.",
    "معلم از بچه‌ها درس پرسید.",
    "آدرین جواب درست داد.",
    "بعد از مدرسه به خانه آمد."
  ],
  [
    "صبح زود بیدار شدم.",
    "دست‌هایم را با صابون شستم.",
    "صبحانه نان و پنیر خوردم.",
    "مادرم برایم غذا گذاشت.",
    "با دوستم به مدرسه رفتیم.",
    "زنگ تفریح در حیاط بازی کردیم."
  ],
  [
    "طوطی زیبایی در قفس بود.",
    "پرهای طاووس خیلی قشنگ است.",
    "طلا در طبیعت کمیاب است.",
    "قطار از ایستگاه رد شد.",
    "فقط باید مواظب خطر باشیم.",
    "وطن ما ایران عزیز است."
  ],
  [
    "ظهر به خانه برگشتیم.",
    "ظرف‌های غذا روی میز بود.",
    "غذا خیلی لذیذ بود.",
    "بعد از غذا کمی استراحت کردیم.",
    "آدرین دیکته‌اش را نوشت.",
    "شب زود خوابید تا فردا سرحال باشد."
  ],
  [
    "بعضی روزها هوا سرد است.",
    "اگر دست‌هایت کثیف باشد مریض می‌شوی.",
    "قبل از نماز باید وضو بگیری.",
    "درس ریاضی امروز شیرین بود.",
    "همه در کلاس حاضر بودند.",
    "ناظم از نظم کلاس تعریف کرد."
  ],
  [
    "عید برای همه شادی می‌آورد.",
    "عسل طبیعی خیلی مفید است.",
    "معلم شعر زیبایی خواند.",
    "شمع را روی کیک روشن کردند.",
    "جمع دو عدد را حساب کرد.",
    "بازی از همین‌جا شروع شد."
  ],
  [
    "غازها در باغ راه می‌رفتند.",
    "غروب آفتاب خیلی قشنگ بود.",
    "چراغ حیاط روشن شد.",
    "چای داغ خوردیم.",
    "قلب ما از مهربانی پر است.",
    "قاصدک در باد پرواز کرد."
  ],
  [
    "ثریا کتابش را باز کرد.",
    "اثر انگشت هر کس فرق دارد.",
    "مثلث سه ضلع دارد.",
    "ورزش باعث سلامتی است.",
    "یک ثانیه هم مهم است.",
    "ثبت نام کلاس تمام شد."
  ]
];

const PRAISE_OK = ["آفرین آدرین!", "دمت گرم قهرمان!", "دقیقاً درست نوشتی.", "احسنت، ستاره‌ات اضافه شد.", "چه باهوش!"];
const PRAISE_BAD = ["نزدیک بود، یک‌بار دیگر نگاه کن.", "اشکال ندارد، با هم یاد می‌گیریم.", "حرف شبیه را قاطی نکن.", "دوباره گوش بده و فکر کن."];

let state = {
  stars: 0,
  correct: 0,
  attempts: 0,
  best: 0,
  prize: "یک سورپرایز از بابا",
  prizeShown: false,
  group: "all",
  letters: {},
  mode: null,
  queue: [],
  index: 0,
  current: null,
  sessionCorrect: 0,
  sessionTotal: 0,
  locked: false
};

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const d = JSON.parse(raw);
    Object.assign(state, {
      stars: d.stars || 0,
      correct: d.correct || 0,
      attempts: d.attempts || 0,
      best: d.best || 0,
      prize: d.prize || state.prize,
      prizeShown: !!d.prizeShown,
      letters: d.letters || {}
    });
  } catch (e) {}
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    stars: state.stars,
    correct: state.correct,
    attempts: state.attempts,
    best: state.best,
    prize: state.prize,
    prizeShown: state.prizeShown,
    letters: state.letters
  }));
}

function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("on");
  setTimeout(() => el.classList.remove("on"), 1800);
}

function updateStarsUI() {
  document.getElementById("starCount").textContent = state.stars;
  document.getElementById("starBar").style.width = Math.min(100, state.stars) + "%";
}

function addStar(n, originEl) {
  const before = state.stars;
  state.stars += n;
  state.correct += n;
  save();
  updateStarsUI();
  if (originEl) flyStar(originEl);
  if (before < 100 && state.stars >= 100 && !state.prizeShown) {
    state.prizeShown = true;
    save();
    document.getElementById("prizeText").textContent = "جایزه: " + state.prize;
    document.getElementById("prizeModal").classList.add("on");
  }
}

function flyStar(el) {
  const r = el.getBoundingClientRect();
  const star = document.createElement("div");
  star.className = "star-fly";
  star.textContent = "⭐";
  star.style.left = r.left + r.width / 2 + "px";
  star.style.top = r.top + "px";
  const pill = document.querySelector(".stars-pill").getBoundingClientRect();
  star.style.setProperty("--dx", (pill.left - r.left) + "px");
  star.style.setProperty("--dy", (pill.top - r.top) + "px");
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 820);
}

function closePrize() {
  document.getElementById("prizeModal").classList.remove("on");
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("on"));
  document.getElementById(id).classList.add("on");
  if (id === "progress") renderProgress();
}

function goHome() {
  stopSpeak();
  stopListen();
  showScreen("home");
}

function filteredWords() {
  if (state.group === "all") return WORDS.slice();
  return WORDS.filter(w => w.g === state.group);
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalize(s) {
  return String(s || "")
    .replace(/\u200c/g, "")
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/أ|إ|آ/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ۀ/g, "ه")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ی")
    .replace(/ء/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function speechNorm(s) {
  return normalize(s)
    .replace(/adrian|adrin/gi, "ادرین")
    .replace(/[.,!?،؛:«»""()؟]/g, " ")
    .replace(/ـ/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function findFocusIndex(word) {
  const focus = word.focus;
  if (!focus) return Math.max(0, word.w.length - 1);
  const idx = word.w.indexOf(focus);
  return idx >= 0 ? idx : 0;
}

function maskWord(word) {
  const i = findFocusIndex(word);
  return word.w.slice(0, i) + "ـ□ـ" + word.w.slice(i + 1);
}

function letterChoices(word) {
  const correct = word.focus && word.w.includes(word.focus) ? word.focus : word.w[findFocusIndex(word)];
  const pool = new Set([correct]);
  (LETTER_SWAP[correct] || []).forEach(x => pool.add(x));
  const extras = ["س", "ص", "ث", "ت", "ط", "ز", "ض", "ظ", "ذ", "ح", "ه", "ع", "غ", "ق", "ژ"];
  for (const e of extras) {
    if (pool.size >= 4) break;
    if (e !== correct) pool.add(e);
  }
  return shuffle([...pool].slice(0, 4));
}

function mutateWord(src) {
  const chars = [...src];
  const idxs = [];
  chars.forEach((ch, i) => { if (LETTER_SWAP[ch]) idxs.push(i); });
  if (!idxs.length) {
    chars[Math.max(0, chars.length - 1)] = "ا";
    return chars.join("");
  }
  const i = idxs[Math.floor(Math.random() * idxs.length)];
  const opts = LETTER_SWAP[chars[i]];
  chars[i] = opts[Math.floor(Math.random() * opts.length)];
  return chars.join("");
}

function spellingChoices(word) {
  const set = new Set([word.w]);
  // classic hamza / similar-letter traps
  if (word.w === "باعث") set.add("باإث");
  let guard = 0;
  while (set.size < 4 && guard < 20) {
    set.add(mutateWord(word.w));
    guard++;
  }
  const extras = ["باصث", "باسث", "باطث", word.w.replace("ث", "س"), word.w.replace("ط", "ت")];
  extras.forEach(e => { if (e && e !== word.w) set.add(e); });
  return shuffle([...set].filter(Boolean)).slice(0, 4);
}

const VOICE_MAP = {"آدرین جواب درست داد.": {"f": "part-a.mp3", "s": 0, "e": 2.08}, "آدرین دیکته‌اش را نوشت.": {"f": "part-a.mp3", "s": 3.77, "e": 6.05}, "آدرین کلاس دوم است.": {"f": "part-a.mp3", "s": 7.74, "e": 10.14}, "آدرین کیفش را برداشت.": {"f": "part-a.mp3", "s": 12.4, "e": 14.63}, "آسمان": {"f": "part-a.mp3", "s": 16.83, "e": 17.94}, "آفرین آدرین!": {"f": "part-a.mp3", "s": 19.7, "e": 21.45}, "آفرین آدرین. این دور تمام شد.": {"f": "part-a.mp3", "s": 23.49, "e": 26.53}, "اتاق": {"f": "part-a.mp3", "s": 28.79, "e": 29.73}, "اثر": {"f": "part-a.mp3", "s": 31.87, "e": 32.82}, "اثر انگشت هر کس فرق دارد.": {"f": "part-a.mp3", "s": 34.98, "e": 37.54}, "اجتماع": {"f": "part-a.mp3", "s": 39.22, "e": 40.25}, "احسنت، ستاره‌ات اضافه شد.": {"f": "part-a.mp3", "s": 42.25, "e": 44.96}, "ارث": {"f": "part-a.mp3", "s": 46.93, "e": 47.88}, "اشکال ندارد، با هم یاد می‌گیریم.": {"f": "part-a.mp3", "s": 49.65, "e": 52.49}, "امروز هوا آفتابی بود.": {"f": "part-a.mp3", "s": 54.32, "e": 56.41}, "او به مدرسه رفت.": {"f": "part-a.mp3", "s": 58.24, "e": 59.63}, "اگر دست‌هایت کثیف باشد مریض می‌شوی.": {"f": "part-a.mp3", "s": 61.33, "e": 64.58}, "با دوستم به مدرسه رفتیم.": {"f": "part-a.mp3", "s": 66.68, "e": 68.74}, "بازی از همین‌جا شروع شد.": {"f": "part-a.mp3", "s": 70.74, "e": 73.0}, "باعث": {"f": "part-a.mp3", "s": 75.21, "e": 76.33}, "باغ": {"f": "part-a.mp3", "s": 77.85, "e": 78.73}, "بحث": {"f": "part-a.mp3", "s": 80.32, "e": 81.24}, "بعد از غذا کمی استراحت کردیم.": {"f": "part-a.mp3", "s": 83.11, "e": 85.87}, "بعد از مدرسه به خانه آمد.": {"f": "part-a.mp3", "s": 87.43, "e": 89.72}, "بعضی": {"f": "part-a.mp3", "s": 92.06, "e": 93.01}, "بعضی روزها هوا سرد است.": {"f": "part-a.mp3", "s": 94.85, "e": 97.11}, "بهار": {"f": "part-a.mp3", "s": 98.77, "e": 99.65}, "تابستان": {"f": "part-a.mp3", "s": 101.95, "e": 103.09}, "تصویر": {"f": "part-a.mp3", "s": 104.64, "e": 105.67}, "ثابت": {"f": "part-a.mp3", "s": 107.48, "e": 108.51}, "ثانیه": {"f": "part-a.mp3", "s": 110.77, "e": 111.92}, "ثبت": {"f": "part-a.mp3", "s": 114.0, "e": 114.91}, "ثبت نام کلاس تمام شد.": {"f": "part-a.mp3", "s": 117.19, "e": 119.55}, "ثروت": {"f": "part-a.mp3", "s": 121.45, "e": 122.57}, "ثریا": {"f": "part-a.mp3", "s": 124.78, "e": 125.87}, "ثریا کتاب قصه خواند.": {"f": "part-a.mp3", "s": 127.97, "e": 130.19}, "ثریا کتابش را باز کرد.": {"f": "part-a.mp3", "s": 132.22, "e": 134.49}, "جمع": {"f": "part-a.mp3", "s": 136.1, "e": 136.92}, "جمع دو عدد را حساب کرد.": {"f": "part-a.mp3", "s": 138.8, "e": 141.21}, "حاضر": {"f": "part-a.mp3", "s": 143.24, "e": 144.16}, "حال": {"f": "part-a.mp3", "s": 146.0, "e": 147.0}, "حتی": {"f": "part-a.mp3", "s": 148.59, "e": 149.48}, "حرف": {"f": "part-a.mp3", "s": 151.48, "e": 152.2}, "حرف شبیه را قاطی نکن.": {"f": "part-a.mp3", "s": 154.2, "e": 156.47}, "حسین": {"f": "part-a.mp3", "s": 158.01, "e": 158.99}, "حفظ": {"f": "part-a.mp3", "s": 160.97, "e": 161.87}, "حمام": {"f": "part-a.mp3", "s": 163.76, "e": 164.79}, "حوادث": {"f": "part-a.mp3", "s": 166.55, "e": 167.68}, "حوض": {"f": "part-a.mp3", "s": 169.74, "e": 170.59}, "حیاط": {"f": "part-a.mp3", "s": 172.09, "e": 173.08}, "خاص": {"f": "part-a.mp3", "s": 174.57, "e": 175.5}, "خط": {"f": "part-a.mp3", "s": 177.6, "e": 178.48}, "خطر": {"f": "part-a.mp3", "s": 180.21, "e": 181.13}, "داغ": {"f": "part-a.mp3", "s": 182.85, "e": 183.85}, "دختر": {"f": "part-a.mp3", "s": 185.19, "e": 186.17}, "در حیاط مدرسه بازی کرد.": {"f": "part-a.mp3", "s": 187.71, "e": 189.95}, "درخت": {"f": "part-a.mp3", "s": 191.88, "e": 192.85}, "درس ریاضی امروز شیرین بود.": {"f": "part-a.mp3", "s": 194.62, "e": 197.1}, "دست‌هایم را با صابون شستم.": {"f": "part-a.mp3", "s": 199.01, "e": 201.35}, "دعا": {"f": "part-a.mp3", "s": 203.46, "e": 204.06}, "دقیق": {"f": "part-b.mp3", "s": 0, "e": 0.92}, "دقیقاً درست نوشتی.": {"f": "part-b.mp3", "s": 2.71, "e": 4.62}, "دمت گرم قهرمان!": {"f": "part-b.mp3", "s": 6.89, "e": 8.65}, "دوباره گوش بده و فکر کن.": {"f": "part-b.mp3", "s": 10.54, "e": 12.63}, "دوست": {"f": "part-b.mp3", "s": 14.21, "e": 15.12}, "ذرت": {"f": "part-b.mp3", "s": 16.99, "e": 17.96}, "روز": {"f": "part-b.mp3", "s": 19.48, "e": 20.28}, "ریاضی": {"f": "part-b.mp3", "s": 22.31, "e": 23.36}, "زمین": {"f": "part-b.mp3", "s": 25.05, "e": 26.0}, "زنگ تفریح در حیاط بازی کردیم.": {"f": "part-b.mp3", "s": 27.61, "e": 30.45}, "زیبا": {"f": "part-b.mp3", "s": 32.01, "e": 33.01}, "ساعت": {"f": "part-b.mp3", "s": 34.5, "e": 35.52}, "سبز": {"f": "part-b.mp3", "s": 37.07, "e": 38.06}, "سطل": {"f": "part-b.mp3", "s": 40.02, "e": 40.92}, "سلام": {"f": "part-b.mp3", "s": 42.88, "e": 43.87}, "سلام آدرین. این یک تست صدا است": {"f": "part-b.mp3", "s": 45.27, "e": 48.58}, "سیب": {"f": "part-b.mp3", "s": 50.26, "e": 51.08}, "شب زود خوابید تا فردا سرحال باشد.": {"f": "part-b.mp3", "s": 53.16, "e": 56.04}, "شروع": {"f": "part-b.mp3", "s": 57.95, "e": 58.87}, "شعر": {"f": "part-b.mp3", "s": 61.15, "e": 61.97}, "شمع": {"f": "part-b.mp3", "s": 63.8, "e": 64.68}, "شمع را روی کیک روشن کردند.": {"f": "part-b.mp3", "s": 66.88, "e": 69.28}, "صابون": {"f": "part-b.mp3", "s": 70.94, "e": 72.03}, "صبح": {"f": "part-b.mp3", "s": 73.81, "e": 74.81}, "صبح زود به مدرسه رفت.": {"f": "part-b.mp3", "s": 76.37, "e": 78.23}, "صبح زود بیدار شدم.": {"f": "part-b.mp3", "s": 80.06, "e": 82.03}, "صبحانه نان و پنیر خوردم.": {"f": "part-b.mp3", "s": 84.21, "e": 86.47}, "صدا": {"f": "part-b.mp3", "s": 88.63, "e": 89.56}, "صف": {"f": "part-b.mp3", "s": 91.46, "e": 92.19}, "ضربه": {"f": "part-b.mp3", "s": 94.25, "e": 95.2}, "طاووس": {"f": "part-b.mp3", "s": 96.81, "e": 98.03}, "طبیعت": {"f": "part-b.mp3", "s": 99.87, "e": 101.08}, "طلا": {"f": "part-b.mp3", "s": 103.07, "e": 103.91}, "طلا در طبیعت کمیاب است.": {"f": "part-b.mp3", "s": 105.25, "e": 107.6}, "طناب": {"f": "part-b.mp3", "s": 109.49, "e": 110.47}, "طوطی": {"f": "part-b.mp3", "s": 111.97, "e": 112.94}, "طوطی روی درخت نشست.": {"f": "part-b.mp3", "s": 114.63, "e": 116.81}, "طوطی زیبایی در قفس بود.": {"f": "part-b.mp3", "s": 118.52, "e": 120.89}, "ظرف": {"f": "part-b.mp3", "s": 122.53, "e": 123.32}, "ظرف‌های غذا روی میز بود.": {"f": "part-b.mp3", "s": 125.2, "e": 127.47}, "ظریف": {"f": "part-b.mp3", "s": 129.07, "e": 129.95}, "ظهر": {"f": "part-b.mp3", "s": 132.38, "e": 133.25}, "ظهر به خانه برگشتیم.": {"f": "part-b.mp3", "s": 135.37, "e": 137.32}, "ظهر هوا خیلی داغ بود.": {"f": "part-b.mp3", "s": 139.36, "e": 141.47}, "عسل": {"f": "part-b.mp3", "s": 143.18, "e": 144.06}, "عسل طبیعی خیلی مفید است.": {"f": "part-b.mp3", "s": 146.11, "e": 148.55}, "علم": {"f": "part-b.mp3", "s": 150.23, "e": 151.05}, "عید": {"f": "part-b.mp3", "s": 152.81, "e": 153.61}, "عید برای همه شادی می‌آورد.": {"f": "part-b.mp3", "s": 155.93, "e": 158.47}, "عینک": {"f": "part-b.mp3", "s": 160.41, "e": 161.46}, "غاز": {"f": "part-b.mp3", "s": 163.45, "e": 164.29}, "غازها در باغ راه می‌رفتند.": {"f": "part-b.mp3", "s": 165.99, "e": 168.45}, "غذا": {"f": "part-b.mp3", "s": 170.43, "e": 171.29}, "غذا خیلی لذیذ بود.": {"f": "part-b.mp3", "s": 173.16, "e": 175.02}, "غذای لذیذ روی سفره بود.": {"f": "part-b.mp3", "s": 177.13, "e": 179.53}, "غروب": {"f": "part-b.mp3", "s": 181.82, "e": 182.53}, "غروب آفتاب خیلی قشنگ بود.": {"f": "part-b.mp3", "s": 184.43, "e": 186.89}, "غلط": {"f": "part-b.mp3", "s": 189.02, "e": 189.99}, "غمگین": {"f": "part-b.mp3", "s": 192.26, "e": 193.35}, "فصل": {"f": "part-b.mp3", "s": 195.49, "e": 196.24}, "فقط": {"f": "part-c.mp3", "s": 0, "e": 0.92}, "فقط باید مواظب خطر باشیم.": {"f": "part-c.mp3", "s": 2.65, "e": 5.21}, "قاشق": {"f": "part-c.mp3", "s": 7.5, "e": 8.46}, "قاصدک": {"f": "part-c.mp3", "s": 10.68, "e": 11.67}, "قاصدک در باد پرواز کرد.": {"f": "part-c.mp3", "s": 14.01, "e": 16.58}, "قبل از نماز باید وضو بگیری.": {"f": "part-c.mp3", "s": 18.8, "e": 21.45}, "قرآن": {"f": "part-c.mp3", "s": 23.15, "e": 24.19}, "قصه": {"f": "part-c.mp3", "s": 25.93, "e": 26.84}, "قطار": {"f": "part-c.mp3", "s": 28.95, "e": 29.94}, "قطار از ایستگاه رد شد.": {"f": "part-c.mp3", "s": 31.54, "e": 33.76}, "قفس": {"f": "part-c.mp3", "s": 35.69, "e": 36.73}, "قلب": {"f": "part-c.mp3", "s": 38.55, "e": 39.28}, "قلب ما از مهربانی پر است.": {"f": "part-c.mp3", "s": 41.41, "e": 43.82}, "قلم": {"f": "part-c.mp3", "s": 46.13, "e": 46.94}, "لذیذ": {"f": "part-c.mp3", "s": 48.62, "e": 49.62}, "مادرم برایم غذا گذاشت.": {"f": "part-c.mp3", "s": 51.4, "e": 53.76}, "ماه": {"f": "part-c.mp3", "s": 55.71, "e": 56.47}, "مثال": {"f": "part-c.mp3", "s": 58.43, "e": 59.33}, "مثلث": {"f": "part-c.mp3", "s": 61.33, "e": 62.6}, "مثلث سه ضلع دارد.": {"f": "part-c.mp3", "s": 64.66, "e": 66.83}, "مدرسه": {"f": "part-c.mp3", "s": 68.68, "e": 69.75}, "مریض": {"f": "part-c.mp3", "s": 71.37, "e": 72.33}, "معلم": {"f": "part-c.mp3", "s": 74.35, "e": 75.51}, "معلم از او درس پرسید.": {"f": "part-c.mp3", "s": 77.43, "e": 79.72}, "معلم از بچه‌ها درس پرسید.": {"f": "part-c.mp3", "s": 81.73, "e": 84.0}, "معلم شعر زیبایی خواند.": {"f": "part-c.mp3", "s": 86.3, "e": 88.57}, "مواظب": {"f": "part-c.mp3", "s": 90.41, "e": 91.48}, "مواظب خطرات جاده باش.": {"f": "part-c.mp3", "s": 93.37, "e": 95.75}, "مژه": {"f": "part-c.mp3", "s": 97.53, "e": 98.43}, "مکث": {"f": "part-c.mp3", "s": 100.53, "e": 101.47}, "ناظم": {"f": "part-c.mp3", "s": 103.54, "e": 104.59}, "ناظم از نظم کلاس تعریف کرد.": {"f": "part-c.mp3", "s": 106.1, "e": 108.83}, "ناظم کلاس نظم را دوست دارد.": {"f": "part-c.mp3", "s": 110.59, "e": 113.33}, "نزدیک بود، یک‌بار دیگر نگاه کن.": {"f": "part-c.mp3", "s": 115.35, "e": 118.24}, "نظر": {"f": "part-c.mp3", "s": 120.22, "e": 121.17}, "نظم": {"f": "part-c.mp3", "s": 123.19, "e": 124.14}, "همه": {"f": "part-c.mp3", "s": 125.89, "e": 126.73}, "همه در کلاس حاضر بودند.": {"f": "part-c.mp3", "s": 128.88, "e": 131.12}, "هوا": {"f": "part-c.mp3", "s": 132.93, "e": 133.81}, "ورزش باعث سلامتی است.": {"f": "part-c.mp3", "s": 135.74, "e": 138.0}, "ورزش باعث سلامتی می‌شود.": {"f": "part-c.mp3", "s": 139.69, "e": 142.21}, "وضو": {"f": "part-c.mp3", "s": 144.33, "e": 145.22}, "وطن": {"f": "part-c.mp3", "s": 147.03, "e": 148.02}, "وطن ما ایران عزیز است.": {"f": "part-c.mp3", "s": 149.52, "e": 152.03}, "پرهای طاووس خیلی قشنگ است.": {"f": "part-c.mp3", "s": 153.87, "e": 156.68}, "پژمرده": {"f": "part-c.mp3", "s": 158.64, "e": 159.86}, "چای داغ خوردیم.": {"f": "part-c.mp3", "s": 161.6, "e": 163.24}, "چراغ": {"f": "part-c.mp3", "s": 165.32, "e": 166.26}, "چراغ اتاق روشن است.": {"f": "part-c.mp3", "s": 168.39, "e": 170.45}, "چراغ حیاط روشن شد.": {"f": "part-c.mp3", "s": 172.49, "e": 174.56}, "چه باهوش!": {"f": "part-c.mp3", "s": 176.05, "e": 177.44}, "ژاله": {"f": "part-c.mp3", "s": 179.26, "e": 180.28}, "ژاپن": {"f": "part-c.mp3", "s": 182.05, "e": 183.09}, "ژاکت": {"f": "part-c.mp3", "s": 184.9, "e": 185.97}, "ژرف": {"f": "part-c.mp3", "s": 187.88, "e": 188.67}, "کتاب": {"f": "part-c.mp3", "s": 190.88, "e": 191.76}, "کثیف": {"f": "part-c.mp3", "s": 193.43, "e": 194.31}, "گذر": {"f": "part-c.mp3", "s": 196.1, "e": 197.0}, "یک ثانیه هم مهم است.": {"f": "part-c.mp3", "s": 198.85, "e": 200.8}};
const VOICE_DIR = "audio/";
let ttsAudio = null;
let clipTimer = null;
let loadedBank = "";

function stopSpeak() {
  if (clipTimer) { clearTimeout(clipTimer); clipTimer = null; }
  if (ttsAudio) ttsAudio.pause();
}

function playBankClip(info, slow) {
  return new Promise((resolve, reject) => {
    if (!ttsAudio) ttsAudio = document.getElementById("ttsAudio") || new Audio();
    const file = VOICE_DIR + info.f;
    const start = info.s;
    const end = info.e;
    const rate = slow ? 0.55 : 0.72;
    const go = () => {
      try {
        ttsAudio.pause();
        ttsAudio.playbackRate = rate;
        if (Math.abs(ttsAudio.currentTime - start) > 0.05) ttsAudio.currentTime = start;
        const p = ttsAudio.play();
        if (p && p.catch) p.catch(reject);
      } catch (e) { reject(e); return; }
      const watch = () => {
        if (!ttsAudio || ttsAudio.paused) return;
        if (window._karaTick) window._karaTick(ttsAudio.currentTime);
        if (ttsAudio.currentTime >= end) {
          ttsAudio.pause();
          if (window._karaTick) window._karaTick(end + 1);
          resolve("bank");
          return;
        }
        clipTimer = setTimeout(watch, 30);
      };
      clipTimer = setTimeout(watch, 30);
      ttsAudio.onended = () => resolve("bank");
    };
    if (loadedBank !== file) {
      loadedBank = file;
      ttsAudio.src = file;
      ttsAudio.oncanplay = () => { ttsAudio.oncanplay = null; go(); };
      ttsAudio.onerror = () => reject(new Error("bank-missing"));
      ttsAudio.load();
    } else {
      go();
    }
  });
}

function speak(text, slow) {
  const t = String(text || "").trim();
  if (!t) return;
  stopSpeak();
  const info = VOICE_MAP[t];
  if (info) {
    playBankClip(info, slow).catch(() => {
      toast("فایل صدا پیدا نشد. پوشه audio باید کنار index.html باشد");
    });
    return;
  }
  toast("برای این جمله فایل صدا نیست");
}

function warmBank() {
  if (!ttsAudio) ttsAudio = document.getElementById("ttsAudio") || new Audio();
  ttsAudio.preload = "auto";
}

function speakCurrent(slow) {
  if (!state.current) return;
  const text = state.current.say || state.current.w;
  bindKaraokeForText(text);
  speak(text, slow);
}

function recordLetter(focus, ok) {
  if (!focus) return;
  if (!state.letters[focus]) state.letters[focus] = { ok: 0, no: 0 };
  if (ok) state.letters[focus].ok += 1;
  else state.letters[focus].no += 1;
  save();
}

function startMode(mode) {
  state.mode = mode;
  state.sessionCorrect = 0;
  state.sessionTotal = 0;
  state.locked = false;
  if (mode === "night") {
    showNightMenu();
    return;
  } else if (mode === "read") {
    const words = shuffle(filteredWords()).slice(0, 8).map(x => ({ ...x, type: "read-word" }));
    const sents = shuffle(READ_SENTENCES).slice(0, 4).map(s => ({ w: s, say: s, type: "read-sent" }));
    state.queue = shuffle(words.concat(sents));
  } else {
    state.queue = shuffle(filteredWords()).slice(0, 12);
  }
  state.index = 0;
  const titles = {
    letter: "انتخاب حرف",
    spell4: "املای چهارگزینه‌ای",
    write: "بشنو و بنویس",
    read: "روخوانی",
    night: "دیکته شب"
  };
  document.getElementById("playTitle").textContent = titles[mode];
  showScreen("play");
  renderQuestion();
}

function renderQuestion() {
  if (state.index >= state.queue.length) {
    finishSession();
    return;
  }
  state.locked = false;
  state.current = state.queue[state.index];
  document.getElementById("playScore").textContent = state.sessionCorrect + " / " + state.sessionTotal;
  document.getElementById("playFeed").className = "feedback";
  document.getElementById("playMeta").textContent =
    "سؤال " + (state.index + 1) + " از " + state.queue.length;
  const body = document.getElementById("playBody");
  const hint = document.getElementById("playHint");
  const prompt = document.getElementById("playPrompt");

  if (state.mode === "letter") {
    hint.textContent = state.current.hint || "حرف جاافتاده را انتخاب کن";
    prompt.textContent = maskWord(state.current);
    body.innerHTML = '<div class="choices" id="choices"></div>';
    letterChoices(state.current).forEach(ch => {
      const b = document.createElement("button");
      b.className = "choice";
      b.textContent = ch;
      b.onclick = () => answerChoice(ch, state.current.focus || state.current.w[findFocusIndex(state.current)], b);
      document.getElementById("choices").appendChild(b);
    });
    setTimeout(() => speakCurrent(), 250);
  } else if (state.mode === "spell4") {
    hint.textContent = "کدام نوشتن درست است؟";
    prompt.textContent = "؟ ؟ ؟";
    body.innerHTML = '<div class="choices" id="choices"></div>';
    spellingChoices(state.current).forEach(w => {
      const b = document.createElement("button");
      b.className = "choice";
      b.style.fontSize = "22px";
      b.textContent = w;
      b.onclick = () => answerChoice(w, state.current.w, b);
      document.getElementById("choices").appendChild(b);
    });
    setTimeout(() => speakCurrent(), 250);
  } else if (state.mode === "write") {
    hint.textContent = "کلمه را گوش بده و کامل بنویس";
    prompt.textContent = "✍️";
    body.innerHTML = '<input class="ans" id="ans" autocomplete="off" autocapitalize="off" />' +
      '<button class="go" onclick="submitWrite()">بررسی کن</button>';
    setTimeout(() => {
      speakCurrent();
      const inp = document.getElementById("ans");
      inp.focus();
      inp.addEventListener("keydown", ev => { if (ev.key === "Enter") submitWrite(); });
    }, 250);
  } else if (state.mode === "read") {
    hint.textContent = state.current.type === "read-sent"
      ? "با صدا حرف‌ها را دنبال کن، بعد خودت بلند بخوان"
      : "با صدا حرف‌ها را دنبال کن، بعد خودت بلند بخوان";
    prompt.style.display = "none";
    body.innerHTML = '<div class="kara big" id="readCard"></div>' +
      '<div class="row" style="margin-top:14px">' +
      '<button class="speak" onclick="speakCurrent()">🔊 دوباره بگو</button></div>' +
      '<div class="row">' +
      '<button class="go" style="background:#16a34a" onclick="markRead(true)">درست خواندم ✅</button>' +
      '<button class="go sec" onclick="markRead(false)">سخت بود، دوباره</button></div>';
    paintKaraoke(document.getElementById("readCard"), state.current.w);
    setTimeout(() => speakCurrent(), 200);
  } else if (state.mode === "night") {
    hint.textContent = "جمله را گوش بده و بنویس";
    prompt.style.display = "none";
    body.innerHTML = '<div class="night-line">خط ' + (state.index + 1) + ' از ' + state.queue.length + '</div>' +
      '<textarea class="ans" id="ans" style="margin-top:12px" placeholder="اینجا بنویس..."></textarea>' +
      '<button class="go" onclick="submitWrite()">بررسی این خط</button>' +
      '<button class="go sec" onclick="speakCurrent()">یک‌بار دیگر بگو</button>';
    setTimeout(() => speakCurrent(), 300);
  }
  if (state.mode !== "read" && state.mode !== "night") prompt.style.display = "";
}

function finishSession() {
  if (state.sessionCorrect > state.best) {
    state.best = state.sessionCorrect;
    save();
  }
  const body = document.getElementById("playBody");
  document.getElementById("playHint").textContent = "آفرین، این دور تمام شد";
  document.getElementById("playPrompt").textContent = "⭐ " + state.sessionCorrect + " ستاره جدید";
  document.getElementById("playPrompt").style.display = "";
  body.innerHTML = '<button class="go" onclick="startMode(state.mode)">دور بعد</button>' +
    '<button class="go sec" onclick="goHome()">برگشت به خانه</button>';
  speak("آفرین آدرین. این دور تمام شد.");
}

function answerChoice(given, expected, btn) {
  if (state.locked) return;
  state.locked = true;
  state.sessionTotal += 1;
  state.attempts += 1;
  const ok = normalize(given) === normalize(expected);
  document.querySelectorAll(".choice").forEach(b => {
    b.disabled = true;
    if (normalize(b.textContent) === normalize(expected)) b.classList.add("ok");
  });
  if (!ok && btn) btn.classList.add("bad");
  showFeed(ok, expected);
  recordLetter(state.current.focus, ok);
  if (ok) {
    state.sessionCorrect += 1;
    addStar(1, btn || document.getElementById("playPrompt"));
  }
  document.getElementById("playScore").textContent = state.sessionCorrect + " / " + state.sessionTotal;
  setTimeout(() => { state.index += 1; renderQuestion(); }, ok ? 900 : 1400);
}

function submitWrite() {
  if (state.locked) return;
  const el = document.getElementById("ans");
  const given = el ? el.value : "";
  if (!normalize(given)) {
    toast("اول بنویس، بعد بررسی کن");
    return;
  }
  state.locked = true;
  state.sessionTotal += 1;
  state.attempts += 1;
  const expected = state.current.w;
  const ok = normalize(given) === normalize(expected);
  showFeed(ok, expected);
  recordLetter(state.current.focus, ok);
  if (ok) {
    state.sessionCorrect += 1;
    addStar(1, el);
  }
  document.getElementById("playScore").textContent = state.sessionCorrect + " / " + state.sessionTotal;
  setTimeout(() => { state.index += 1; renderQuestion(); }, ok ? 1000 : 1600);
}

function markRead(ok) {
  if (state.locked) return;
  state.locked = true;
  state.sessionTotal += 1;
  state.attempts += 1;
  recordLetter(state.current.focus, ok);
  showFeed(ok, state.current.w);
  if (ok) {
    state.sessionCorrect += 1;
    addStar(1, document.getElementById("readCard"));
  }
  document.getElementById("playScore").textContent = state.sessionCorrect + " / " + state.sessionTotal;
  setTimeout(() => { state.index += 1; renderQuestion(); }, 700);
}

function showFeed(ok, expected) {
  const el = document.getElementById("playFeed");
  el.className = "feedback show " + (ok ? "ok" : "bad");
  el.textContent = ok
    ? shuffle(PRAISE_OK)[0] + " ⭐"
    : shuffle(PRAISE_BAD)[0] + " شکل درست: " + expected;
}

function renderChips() {
  const box = document.getElementById("groupChips");
  box.innerHTML = "";
  GROUPS.forEach(g => {
    const b = document.createElement("button");
    b.className = "chip" + (state.group === g.id ? " on" : "");
    b.textContent = g.label;
    b.onclick = () => { state.group = g.id; renderChips(); };
    box.appendChild(b);
  });
}

function renderProgress() {
  document.getElementById("sStars").textContent = state.stars;
  document.getElementById("sCorrect").textContent = state.correct;
  document.getElementById("sBest").textContent = state.best;
  document.getElementById("prizeName").textContent = state.prize;
  const keys = ["ث", "ص", "س", "ط", "ت", "ح", "ه", "ض", "ظ", "ذ", "ز", "ع", "غ", "ق", "ژ"];
  const box = document.getElementById("letterBars");
  box.innerHTML = keys.map(k => {
    const d = state.letters[k] || { ok: 0, no: 0 };
    const tot = d.ok + d.no;
    const pct = tot ? Math.round(100 * d.ok / tot) : 0;
    return '<div class="letter-stat"><b>' + k + '</b><span>' +
      (tot ? (pct + "٪ درست از " + tot + " تمرین") : "هنوز تمرین نشده") +
      "</span></div>";
  }).join("");
}

function savePrize() {
  const v = document.getElementById("prizeInput").value.trim();
  if (v) {
    state.prize = v;
    save();
    document.getElementById("prizeName").textContent = v;
    toast("جایزه ذخیره شد");
  }
}

function resetStars() {
  if (!confirm("ستاره‌ها صفر شوند؟")) return;
  state.stars = 0;
  state.prizeShown = false;
  save();
  updateStarsUI();
  renderProgress();
  toast("ستاره‌ها صفر شد");
}

function paintKaraoke(box, text) {
  if (!box) return;
  box.innerHTML = "";
  [...text].forEach((ch, i) => {
    const s = document.createElement("span");
    s.className = "ch" + (ch === "\n" ? " nl" : "");
    s.dataset.i = i;
    s.textContent = ch === "\n" ? "" : ch;
    box.appendChild(s);
  });
}

function bindKaraokeTimes(times) {
  window._karaTimes = times || null;
  window._karaTick = function (t) {
    const box = document.getElementById("readCard") || document.getElementById("storyCard");
    if (!box || !window._karaTimes) return;
    const times = window._karaTimes;
    let now = -1;
    for (let i = 0; i < times.length; i++) {
      if (t >= times[i]) now = i;
    }
    box.querySelectorAll(".ch").forEach((sp) => {
      const i = +sp.dataset.i;
      sp.classList.toggle("done", i < now);
      sp.classList.toggle("now", i === now);
    });
  };
}

function bindKaraokeForText(text) {
  const info = VOICE_MAP[text];
  const box = document.getElementById("readCard");
  if (!box) { window._karaTick = null; return; }
  paintKaraoke(box, text);
  if (!info) {
    bindKaraokeTimes([...text].map((_, i) => i * 0.12));
    return;
  }
  const n = Math.max(1, [...text].length);
  const times = [...text].map((_, i) => info.s + (info.e - info.s) * i / n);
  bindKaraokeTimes(times);
}

let recObj = null;
let recWanted = false;
let storyWords = [];
let storyIndex = 0;
let storyLineStars = 0;
let lastHeard = "";

function wordKey(w) {
  return speechNorm(String(w || "").replace(/[.,!?،؛:«»""()]/g, ""));
}

function tokenizeStory(text) {
  const out = [];
  String(text).split("\n").forEach((line, li) => {
    line.trim().split(/\s+/).filter(Boolean).forEach(raw => {
      out.push({ raw, key: wordKey(raw), line: li });
    });
  });
  return out;
}

function lev(a, b) {
  if (a === b) return 0;
  const m = [];
  for (let i = 0; i <= a.length; i++) {
    m[i] = [i];
    for (let j = 1; j <= b.length; j++) {
      if (i === 0) m[0][j] = j;
      else {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        m[i][j] = Math.min(m[i - 1][j] + 1, m[i][j - 1] + 1, m[i - 1][j - 1] + cost);
      }
    }
  }
  return m[a.length][b.length];
}

function wordMatch(heard, expected) {
  const h = wordKey(heard);
  const e = expected;
  if (!h || !e) return false;
  if (h === e) return true;
  if (h.length >= 3 && (h.includes(e) || e.includes(h))) return true;
  const allow = e.length <= 3 ? 0 : e.length <= 5 ? 1 : 2;
  return lev(h, e) <= allow;
}

function heardTokens(text) {
  return normalize(text).split(/\s+/).map(wordKey).filter(Boolean);
}

function showStories() {
  stopListen();
  showScreen("stories");
  const box = document.getElementById("storyList");
  box.innerHTML = STORIES.map(s => {
    const n = s.text.split("\n").length;
    return '<button class="story-item" onclick="openStory(\'' + s.id + '\')">' +
      '<b>' + s.emoji + ' ' + s.title + '</b>' +
      '<span>' + n + ' خط · تو بخوان، اپ گوش می‌دهد</span></button>';
  }).join("");
}

function openStory(id) {
  const story = STORIES.find(s => s.id === id);
  if (!story) return;
  stopListen();
  state.mode = "story";
  state.currentStory = story;
  storyWords = tokenizeStory(story.text);
  storyIndex = 0;
  storyLineStars = 0;
  lastHeard = "";
  document.getElementById("playTitle").textContent = story.emoji + " " + story.title;
  document.getElementById("playScore").textContent = "0 / " + storyWords.length;
  showScreen("play");
  const hint = document.getElementById("playHint");
  const prompt = document.getElementById("playPrompt");
  const body = document.getElementById("playBody");
  hint.textContent = "تو بخوان؛ اگر کلمه‌ای غلط بود قرمز می‌شود و باید همان را دوباره بخوانی";
  prompt.style.display = "none";
  body.innerHTML =
    '<div class="kara story-read" id="storyCard"></div>' +
    '<div class="mic-box" id="micBox"><span class="mic-dot"></span> منتظر توست… روی شروع بزن</div>' +
    '<div class="heard" id="heardBox">هنوز چیزی نشنیدم</div>' +
    '<div class="row" style="margin-top:12px">' +
    '<button class="go" id="micBtn" onclick="toggleListen()">🎤 شروع خواندن</button>' +
    '<button class="speak alt" onclick="helpCurrentWord()">🔊 این کلمه</button></div>' +
    '<button class="go sec" onclick="showStories()">قصه‌های دیگر</button>' +
    '<p class="tiny" style="margin-top:10px">اگر میکروفون کار نکرد فایل را با لینک محلی باز کن: در ترمینال داخل پوشه اپ بزن python3 -m http.server 8080 بعد برو به http://127.0.0.1:8080</p>';
  renderStoryWords();
}

function renderStoryWords() {
  const box = document.getElementById("storyCard");
  if (!box) return;
  let html = "";
  let line = 0;
  storyWords.forEach((w, i) => {
    if (w.line !== line) { html += "<br>"; line = w.line; }
    let cls = "word";
    if (i < storyIndex) cls += " ok";
    else if (i === storyIndex) cls += w.bad ? " bad now" : " now";
    html += '<span class="' + cls + '" data-i="' + i + '">' + w.raw + "</span> ";
  });
  box.innerHTML = html;
  const cur = box.querySelector(".word.now");
  if (cur) cur.scrollIntoView({ block: "nearest", behavior: "smooth" });
  const score = document.getElementById("playScore");
  if (score) score.textContent = storyIndex + " / " + storyWords.length;
}

function currentWord() {
  return storyWords[storyIndex] || null;
}

function markCurrentBad() {
  const w = currentWord();
  if (!w) return;
  w.bad = true;
  renderStoryWords();
  const box = document.getElementById("micBox");
  if (box) box.innerHTML = '<span class="mic-dot bad"></span> دوباره بخوان: <b>' + w.raw + "</b>";
  toast("این کلمه را دوباره بخوان: " + w.raw);
}

function acceptWord() {
  const w = currentWord();
  if (!w) return;
  w.bad = false;
  const line = w.line;
  storyIndex += 1;
  const doneLine = !storyWords[storyIndex] || storyWords[storyIndex].line !== line;
  if (doneLine) {
    addStar(1, document.getElementById("storyCard"));
    storyLineStars += 1;
  }
  if (storyIndex >= storyWords.length) {
    stopListen();
    renderStoryWords();
    document.getElementById("micBox").innerHTML = "آفرین آدرین! قصه تمام شد ⭐";
    document.getElementById("micBtn").textContent = "قصه تمام شد";
    speak("آفرین آدرین!");
    return;
  }
  renderStoryWords();
  const nxt = currentWord();
  const box = document.getElementById("micBox");
  if (box && nxt) box.innerHTML = '<span class="mic-dot on"></span> حالا بخوان: <b>' + nxt.raw + "</b>";
}

function absorbHeard(prev, next) {
  const a = speechNorm(prev);
  const b = speechNorm(next);
  if (!b) return a;
  if (!a) return b;
  if (b.indexOf(a) >= 0) return b;
  if (a.indexOf(b) >= 0) return a;
  const aw = a.split(" ");
  const bw = b.split(" ");
  for (let k = Math.min(aw.length, bw.length); k >= 1; k--) {
    if (aw.slice(-k).join(" ") === bw.slice(0, k).join(" ")) {
      return (aw.join(" ") + " " + bw.slice(k).join(" ")).trim();
    }
  }
  return (a + " " + b).trim();
}

function findWordInBlob(blob, word, from) {
  const slice = blob.slice(from);
  const w = speechNorm(word);
  if (!w) return from;
  const exact = slice.indexOf(w);
  if (exact >= 0) return from + exact + w.length;
  const toks = slice.split(/\s+/).filter(Boolean);
  let acc = from;
  for (let i = 0; i < toks.length; i++) {
    const t = toks[i];
    if (wordMatch(t, w)) return acc + slice.indexOf(t) + t.length;
    if (t.length >= 4 && w.length >= 4 && (t.indexOf(w) >= 0 || w.indexOf(t) >= 0)) {
      return acc + slice.indexOf(t) + t.length;
    }
  }
  return -1;
}

function consumeHeard(text, isFinal) {
  const chunk = speechNorm(text);
  if (!chunk) return;
  lastHeard = absorbHeard(lastHeard, chunk);
  const heardEl = document.getElementById("heardBox");
  if (heardEl) heardEl.textContent = "شنیدم: " + lastHeard;
  const blob = lastHeard;
  let pos = 0;
  let idx = 0;
  let reached = storyIndex;
  while (idx < storyWords.length) {
    const hit = findWordInBlob(blob, storyWords[idx].key, pos);
    if (hit < 0) break;
    pos = hit;
    idx += 1;
    if (idx > reached) reached = idx;
  }
  let moved = false;
  while (storyIndex < reached) {
    acceptWord();
    moved = true;
  }
  if (isFinal && !moved && currentWord()) {
    const expect = currentWord().key;
    const attempt = heardTokens(chunk).some(p => {
      if (p.length < 2) return false;
      const d = lev(p, expect);
      return d > 0 && d <= Math.max(2, Math.floor(expect.length / 2));
    });
    if (attempt) markCurrentBad();
  }
}

function recEngine() {
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function stopListen() {
  recWanted = false;
  try { if (recObj) recObj.stop(); } catch (e) {}
  recObj = null;
}

function toggleListen() {
  if (recWanted) {
    stopListen();
    const btn = document.getElementById("micBtn");
    if (btn) btn.textContent = "🎤 شروع خواندن";
    const box = document.getElementById("micBox");
    if (box) box.innerHTML = '<span class="mic-dot"></span> ایستاد';
    return;
  }
  startListen();
}

function startListen() {
  const Ctor = recEngine();
  if (!Ctor) {
    toast("این مرورگر تشخیص گفتار فارسی ندارد. Chrome را امتحان کن");
    return;
  }
  stopSpeak();
  recWanted = true;
  recObj = new Ctor();
  recObj.lang = "fa-IR";
  recObj.continuous = true;
  recObj.interimResults = true;
  recObj.onresult = (ev) => {
    let interim = "";
    let finalText = "";
    for (let i = ev.resultIndex; i < ev.results.length; i++) {
      const t = ev.results[i][0].transcript || "";
      if (ev.results[i].isFinal) finalText += " " + t;
      else interim += " " + t;
    }
    if (interim) consumeHeard(interim, false);
    if (finalText) consumeHeard(finalText, true);
  };
  recObj.onerror = (ev) => {
    if (ev.error === "not-allowed") {
      toast("دسترسی میکروفون بسته است. در تنظیمات مرورگر اجازه بده");
      recWanted = false;
      return;
    }
    if (ev.error === "no-speech") return;
  };
  recObj.onend = () => {
    if (recWanted) {
      try { recObj.start(); } catch (e) {}
    }
  };
  try {
    recObj.start();
    document.getElementById("micBtn").textContent = "⏹ توقف";
    const w = currentWord();
    document.getElementById("micBox").innerHTML = '<span class="mic-dot on"></span> بخوان: <b>' + (w ? w.raw : "") + "</b>";
  } catch (e) {
    recWanted = false;
    toast("میکروفون شروع نشد. اپ را با http://127.0.0.1:8080 باز کن");
  }
}

function showNightMenu() {
  stopSpeak();
  stopListen();
  showScreen("nightpick");
}

function buildNightLines(kind) {
  const pack = shuffle(NIGHT_PACKS.slice())[0];
  const n = kind === "long" ? (6 + Math.floor(Math.random() * 3)) : kind;
  const lines = pack.lines.slice();
  if (lines.length >= n) return { title: pack.title, lines: lines.slice(0, n) };
  const extra = shuffle(NIGHT_PACKS.filter(p => p !== pack).flatMap(p => p.lines));
  while (lines.length < n && extra.length) lines.push(extra.pop());
  return { title: pack.title, lines: lines.slice(0, n) };
}

function startNight(kind) {
  const built = buildNightLines(kind);
  state.mode = "night";
  state.night = built;
  state.nightHidden = false;
  const label = kind === 3 ? "دیکته ۳ خطی" : kind === 5 ? "دیکته ۵ خطی" : "دیکته بلند";
  document.getElementById("playTitle").textContent = "🌙 " + label;
  document.getElementById("playScore").textContent = built.lines.length + " خط";
  document.getElementById("playHint").textContent = "موضوع: " + built.title + " — فقط والدین بخوانند";
  document.getElementById("playPrompt").style.display = "none";
  showScreen("play");
  renderNightSheet();
}

function renderNightSheet() {
  const body = document.getElementById("playBody");
  const night = state.night;
  if (!night) return;
  const hidden = !!state.nightHidden;
  body.innerHTML =
    '<div class="night-sheet' + (hidden ? " hide" : "") + '" id="nightSheet">' +
    '<div class="tiny">این متن را برای آدرین بگویید. اپ آن را نمی‌خواند.</div>' +
    "<ol>" + night.lines.map(l => "<li>" + l + "</li>").join("") + "</ol></div>" +
    '<div class="row" style="margin-top:12px">' +
    '<button class="speak" onclick="toggleNightHide()">' + (hidden ? "نمایش متن" : "از چشم آدرین پنهان کن") + "</button>" +
    '<button class="speak alt" onclick="startNight(state.night.lines.length <= 3 ? 3 : state.night.lines.length === 5 ? 5 : \'long\')">دیکته جدید</button></div>' +
    '<button class="go" style="background:#16a34a" onclick="finishNight(true)">درست نوشت ✅ ستاره بده</button>' +
    '<button class="go sec" onclick="finishNight(false)">فردا دوباره تمرین می‌کنیم</button>' +
    '<button class="go sec" onclick="showNightMenu()">اندازه دیگر</button>';
}

function toggleNightHide() {
  state.nightHidden = !state.nightHidden;
  renderNightSheet();
}

function finishNight(ok) {
  const n = (state.night && state.night.lines.length) || 0;
  if (ok && n) {
    addStar(n, document.getElementById("nightSheet"));
    toast(n + " ستاره برای دیکته شب");
  } else {
    toast("اشکال ندارد، فردا یک دیکته دیگر می‌سازیم");
  }
  showNightMenu();
}

function helpCurrentWord() {
  const w = currentWord();
  if (!w) return;
  const key = w.key;
  if (VOICE_MAP[w.raw] || VOICE_MAP[key]) {
    speak(VOICE_MAP[w.raw] ? w.raw : key);
    return;
  }
  const found = Object.keys(VOICE_MAP).find(k => wordKey(k) === key);
  if (found) speak(found);
  else toast("دوباره خودت بخوان: " + w.raw);
}

warmBank();

load();
renderChips();
updateStarsUI();
document.getElementById("prizeInput") && (document.getElementById("prizeInput").value = state.prize === "یک سورپرایز از بابا" ? "" : state.prize);
