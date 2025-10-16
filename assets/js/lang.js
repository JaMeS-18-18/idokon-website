// lang.js
(function () {
  const DEFAULT_LANG = 'uz';
  const LANGS = {
    uz: { name: "O'zbekcha", flag: "https://flagcdn.com/w20/uz.png" },
    ru: { name: "Русский", flag: "https://flagcdn.com/w20/ru.png" },
    en: { name: "English", flag: "https://flagcdn.com/w20/gb.png" }
  };



  // 1) Tarjimlar (namuna to'plam). Qolgan matnlarni shu yerga qo'shib borasiz.
  const i18n = {
    uz: {
      "footer.about": "Bizning POS dasturimiz biznes jarayonlaringizni soddalashtirib, samaradorlikni oshiradigan yakuniy yechimdir. Oddiylik, ko‘p qirrali imkoniyatlar va ilg‘or texnologiyalar uyg‘unligiga e’tibor qaratganmiz.",

      "footer.social.facebook_aria": "Facebook sahifamiz",
      "footer.social.twitter_aria": "Twitter sahifamiz",
      "footer.social.linkedin_aria": "LinkedIn sahifamiz",
      "footer.social.instagram_aria": "Instagram sahifamiz",

      "footer.quick.title": "Tez havolalar",
      "footer.quick.home": "Bosh sahifa",
      "footer.quick.features": "Xususiyatlar",
      "footer.quick.pricing": "Narxlar",
      "footer.quick.blog": "Blog",
      "footer.quick.contact": "Aloqa",
      "footer.quick.link_aria": "Footer havolasi",

      "footer.support.title": "Qo‘llab-quvvatlash",
      "footer.support.faq": "Ko‘p beriladigan savollar (FAQ)",
      "footer.support.articles": "Maqolalar",
      "footer.support.livechat": "Jonli chat",

      "footer.news.title": "Yangiliklarga obuna bo‘ling",
      "footer.news.placeholder": "Email manzilingiz",
      "footer.news.submit": "Yuborish",
      "footer.news.submit_aria": "Obuna tugmasi",

      "footer.copy.prefix": "© 2025. Barcha huquqlar himoyalangan.",
      "footer.copy.design_by": " Dizayn:",
      "footer.copy.author": " JaMeS",
      "footer.copy.link_aria": "Sayt muallifi havolasi",
      "contact.subtitle": "Biz bilan bog'lanish",
      "contact.title": "Biz bilan bog‘laning! <br> Hoziroq murojaat qiling",
      "contact.name_ph": "Ismingiz",
      "contact.phone_ph": "Telefon raqamingiz*",
      "contact.subject_ph": "Mavzu",
      "contact.message_ph": "Murojaatingiz haqida batafsil*",
      "contact.submit": "Yuborish",
      "contact.submit_aria": "Yuborish tugmasi",
      "faq.subtitle": "Savolingiz bormi?",
      "faq.title": "Bu yerda ba'zi savollarga javoblar",

      "faq.q1.title": "POS tizimi biznesimga qanday foyda keltiradi?",
      "faq.q1.body": "To‘g‘ri POS tizimini tanlash uchun biznes turini, hajmini, byudjetni, kerakli funksiyalarni va kelgusidagi o‘sish imkoniyatini inobatga oling. Turli variantlarni solishtiring va sharhlarni o‘qib, ongli qaror qabul qiling. Xaridlarni boshqarish va mijozlarni ball, chegirma yoki maxsus takliflar bilan rag‘batlantirish imkoniyatini ham ko‘rib chiqing.",

      "faq.q2.title": "POS tizimini onlayn do‘konim bilan integratsiya qila olamanmi?",
      "faq.q2.body": "To‘g‘ri POS tizimini tanlashda biznes turi, hajmi, byudjeti, zarur funksiyalar va kelgusidagi o‘sish ehtimolini hisobga oling. Variantlarni tadqiq qiling va foydalanuvchi sharhlarini o‘qib chiqing. Xaridlarni boshqarish va mijozlarni ball, chegirma yoki maxsus takliflar bilan mukofotlash imkoniyatlari muhim.",

      "faq.q3.title": "POS tizimidan foydalanish uchun maxsus o‘qitish kerakmi?",
      "faq.q3.body": "To‘g‘ri POS tizimini tanlash uchun biznes turi, hajmi, byudjeti, zarur funksiyalar va kelajakdagi o‘sish rejalaringizni inobatga oling. Turli yechimlarni solishtirib, sharhlarni o‘qing. Xaridlarni yuritish hamda mijozlarni ball, chegirma yoki maxsus takliflar bilan rag‘batlantirish kabi imkoniyatlar yordam beradi.",

      "faq.q4.title": "POS tizimi qanday savdo tahlillarini taqdim etadi?",
      "faq.q4.body": "To‘g‘ri POS tizimini tanlashda biznes turi, hajmi, byudjeti, kerakli funksiyalar va o‘sish salohiyatini hisobga oling. Yechimlarni o‘rganing, sharhlarni ko‘rib chiqing va ongli qaror qabul qiling. Xaridlar statistikasi va mijozlarni ball, chegirma yoki maxsus takliflar bilan rag‘batlantirish imkoniyatlari foydali bo‘ladi.",

      "faq.q5.title": "Biznesim uchun to‘g‘ri POS tizimini qanday tanlayman?",
      "faq.q5.body": "To‘g‘ri POS tizimini tanlash uchun biznes turini, hajmini, byudjetni, zarur funksiyalarni va kelgusidagi o‘sish ehtimolini inobatga oling. Turli variantlarni tadqiq qiling, sharhlarni o‘qing va keyin qaror qabul qiling. Xaridlarni boshqarish hamda mijozlarni ball, chegirma yoki maxsus takliflar bilan rag‘batlantirish muhim mezonlardan biridir.",
      "cta.title": "Biz bilan biznesingizni yangilang <br> Eng zamonaviy POS yechimlari!",
      "cta.text": "Tranzaktsiyalarning kelajagini his eting! Bugun demoni rejalashtiring va qanday qilib guvoh bo'ling <br> bizning POS yechimimiz biznesingizni inqilob qilishi mumkin.",
      "cta.demo": "Demo ishlatib ko'rish",
      "cta.contact": "Bog'lanish",
      "cta.demo_aria": "Demo versiyani boshlash",
      "cta.contact_aria": "Sotuv bo‘limi bilan bog‘lanish",
      "partners.title": "Bizning mijozlarimiz",
      "testimonials.subtitle": "Mijozlarimiz fikrlari",
      "testimonials.title": "Bizning a’loligimizni tasdiqlovchi <br> mamnun mijozlar sharhlari",
      "pricing.subtitle": "Bizning Ta'riflar",
      "pricing.title": "Shaffof narxlash rejalari <br> ehtiyojlaringizga mos keladiganini toping",
      "pricing.per_month": "/ oy",
      "pricing.choose_plan": "Ta'rifni tanlang",
      "pricing.choose_plan_aria": "Xizmatni sotib olish uchun bog‘lanish",
      "pricing.popular": "Ommabop",

      "pricing.start.name": "Start",
      "pricing.start.subtitle": "Kichik do'konlar uchun",

      "pricing.standard.name": "Standard",
      "pricing.standard.subtitle": "Standart do'konlar uchun",

      "pricing.premium.name": "Premium",
      "pricing.premium.subtitle": "Katta hajmdagi do'konlar uchun",

      "pricing.f.only_one_user": "Faqat bitta foydalanuvchi uchun",
      "pricing.f.inventory": "Omborni boshqarish",
      "pricing.f.sales_reports": "Sotuv hisobotlari va tahlil",
      "pricing.f.advanced": "Kengaytirilgan funksionallik",
      "pricing.f.barcode": "Shtrix-kod skaneri",
      "pricing.f.support": "24/7 bepul qo‘llab-quvvatlash",
      "users.subtitle": "Bizning do‘konimizdan kimlar foydalanishi mumkin",
      "users.title": "Dasturiy ta’minotimiz keng ko‘lamli biznes va sanoat sohalariga moslashtirilgan",
      "users.1": "Chakana do‘konlar",
      "users.2": "Supermarketlar",
      "users.3": "Mini-marketlar",
      "users.4": "Onlayn savdo",
      "users.5": "Yana ko‘plab sohalar",
      "soft.subtitle": "Dasturning asosiy xususiyatlari",
      "soft.title": "Ajoyib dizaynga ega kuchli xususiyatlar",

      "soft.1.title": "Inventarizatsiyani boshqarish",
      "soft.1.subtitle": "Zaxira va kirim–chiqimni avtomatik kuzatib, minimal qoldiqni eslatadi.",

      "soft.2.title": "Sotish va to'lov jarayoni",
      "soft.2.subtitle": "Naqd, karta va QR to'lovni bir bosishda qabul qilib, xatolikni kamaytiradi.",

      "soft.3.title": "Hisobot va tahlil",
      "soft.3.subtitle": "Aylanma va foydani real vaqtda ko'rsatib, eksport va filial kesimini beradi.",

      "soft.4.title": "Xavfsiz tezkor tranzaksiya",
      "soft.4.subtitle": "EMV asosida himoyalangan to'lov, tez tasdiq va ishonchli natija ta'minlanadi."
      ,
      "nav.home": "Asosiy", "nav.features": "Xususiyatlar", "nav.equipment": "Qurilmalar", "nav.integrations": "Integratsiyalar", "nav.pricing": "Ta'riflar",
      "nav.faq": "FAQ", "nav.blog": "Mijozlarimiz", "nav.contact": "Aloqa",

      "hero.title": "POS terminalimiz yordamida savdo muvaffaqiyatini oshirish",
      "hero.subtitle": "Bizning zamonaviy POS dasturiy ta'minotimiz sizning biznes faoliyatingizni tubdan o'zgartirish uchun ishlab chiqilgan. Uning kuchli xususiyatlari va foydalanuvchiga qulay interfeysi yordamida mijozlar tajribasini yaxshilang va umumiy samaradorligingizni oshiring.",
      "hero.demo": "Demo ishlatib ko'rish",
      "hero.contact": "Bog'lanish",
      "hero.stats.sales": "+45% Savdo",
      "hero.stats.customers": "1000+ Mijoz", 
      "hero.stats.support": "24/7 Yordam",

      "features.subtitle": "I-Dokon bilan biznesingizni rivojlantiring",
      "features.title": "Sodda ammo ayni paytda murakkab<br> Bizning savdo nuqtasi tizimimiz",

      "equipment.subtitle": "POS Qurilmalari",
      "equipment.title": "Savdo uchun zarur <br> qurilmalar to'plami",
      "equipment.description": "Kassa sistemasini to'liq ishga tushirish uchun kerakli barcha qurilmalarni bir joydan oling",
      "equipment.btn": "Qurilmalarni ko'rish",
      "equipment.monoblok.title": "Monoblok Terminallari",
      "equipment.monoblok.desc": "Kassa uchun qulay sensor displey bilan",
      "equipment.printer.title": "Chek va Etiketka Printerlari",
      "equipment.printer.desc": "Tez va sifatli chop etish uchun",
      "equipment.scanner.title": "Shtrix Skanerlar",
      "equipment.scanner.desc": "QR va barcode o'qish uchun",
      "equipment.scale.title": "Tarozilar",
      "equipment.scale.desc": "Vazn o'lchash va narx hisoblash",

      "integrations.subtitle": "Tizimlar bilan integratsiya",
      "integrations.title": "Mavjud kassa tizimlari bilan <br> oson bog'lanish",
      "integrations.description": "Bizning POS tizimimiz mavjud kassa tizimlari bilan oson integratsiya qilinadi. Ma'lumotlaringizni yo'qotmasdan va yangi tizimga tez o'tish imkoniyati.",
      "integrations.feature1.title": "Tez ulanish",
      "integrations.feature1.desc": "Mavjud tizimga 1-2 kun ichida ulanish",
      "integrations.feature2.title": "Ma'lumotlar xavfsizligi", 
      "integrations.feature2.desc": "Barcha ma'lumotlar saqlanib qoladi",
      "integrations.feature3.title": "Texnik yordam",
      "integrations.feature3.desc": "Integratsiya jarayonida to'liq qo'llab-quvvatlash",
      "integrations.systems.title": "Qo'llab-quvvatlanadigan tizimlar",
      "integrations.multikassa.desc": "Soliq idorasi bilan bog'langan onlayn kassa tizimi",
      "integrations.arco.desc": "Keng tarqalgan kassa va <br/> hisobot tizimi",
      "integrations.eimzo.desc": "E-imzo orqali SMS xabarnoma yuborish tizimi",
      "integrations.other.title": "Boshqa tizimlar", 
      "integrations.other.desc": "Sizning mavjud tizimingiz ro'yxatda yo'qmi? Biz bilan bog'laning, integratsiya imkoniyatlarini muhokama qilamiz.",

      "pricing.subtitle": "Bizning Ta'riflar",
      "pricing.title": "Shaffof narxlash rejalari <br> ehtiyojlaringizga mos keladiganini toping",

      "cta.title": "Biz bilan biznesingizni yangilang <br> Eng zamonaviy POS yechimlari!",
      "cta.text": "Tranzaktsiyalarning kelajagini his eting! Bugun demoni rejalashtiring va qanday qilib guvoh bo'ling <br> bizning POS yechimimiz biznesingizni inqilob qilishi mumkin.",
      "cta.demo": "Demo ishlatib ko'rish",
      "cta.contact": "Bog'lanish",

      "contact.subtitle": "Biz bilan bog'lanish",
      "contact.title": "Biz bilan bog‘laning! <br> Hoziroq murojaat qiling",
      "contact.form.name": "Ismingiz",
      "contact.form.phone": "Telefon raqamingiz*",
      "contact.form.message": "Murojaatingiz haqida batafsil*",
      "contact.form.submit": "Yuborish",

      "footer.quicklinks": "Tez havolalar",
      "footer.home": "Bosh sahifa",
      "footer.features": "Xususiyatlar",
      "footer.pricing": "Narxlar",
      "footer.blog": "Blog",
      "footer.contact": "Aloqa",

      "preloader.text": "Yuklanmoqda...",



      "features.0.title": "Savdo tezligi ↑",
      "features.0.subtitle": "Bir bosishda to‘lov — kam xatolik va tez navbat. Kunning oxirida natijalar darhol ko‘rinadi.",

      "features.1.title": "Kassirlar uchun sodda",
      "features.1.subtitle": "Skaner bilan tez qidiruv, chegirma va bonuslar. Interfeys oddiy — yangi kassir ham tez o‘rganadi.",

      "features.2.title": "Hisobot va nazorat",
      "features.2.subtitle": "Aylanma, foyda va top mahsulotlar onlayn. Filiallar kesimida ko‘rish va eksport bir tugmada.",

      "features.3.title": "O‘rnatish va integratsiya",
      "features.3.subtitle": "Windows’da 10 daqiqada ishga tushadi. Printer, skaner, terminal, Tez QR va API bilan kengayadi.",
      "pricing.start.features": [
        "Cheksiz mahsulot qo‘shish",
        "Excel orqali tovarlarni bir zumda yuklash",
        "Qulay inventarizatsiya va ombor nazorati",
        "Ta’minotchilar va mijozlar bilan hisob-kitob",
        "Tushunarli va to‘liq hisobotlar"
      ],
      "pricing.standard.features": [

        "Soliq tizimi bilan integratsiya (Arco, Multikassa)",
        "To‘lov tizimlari bilan integratsiyalar (Click, Payme, Uzum)",
        "Tavsiya etilgan tovarlar ro‘yxati",
        "Muzlatilgan mablag‘ ko‘rinishidagi tovarlar",
        "Aksiya va to‘plamlar yaratish",
        "Valyuta bilan ishlash",
        "Xarajatlarni yuritish",
        "Markirovka bilan ishlash"
      ],
      "pricing.premium.features": [
        "Standart tarifidagi barcha imkoniyatlar",
        "Mijozlar uchun bonus (Loyalty)",
        "Analitika (ABC tahlil, OOS tahlil)",
        "Mahsulotlar harakati bo‘yicha kengaytirilgan hisobotlar"
      ],

      "course.title": "I-Dokon Kursi",
      "course.desc": "I-Dokon kursi orqali POS dasturimizni <b>to‘liq va oson</b> o‘rganing! Kursda har bir modul, amaliy misollar, video darslar va interaktiv topshiriqlar mavjud.<br><br><span style='color:#4F8A8B;font-weight:600;'>Kursni tugatgan har bir mijoz programmani mustaqil ishlata oladi va savollarga tez javob topadi.</span>",
      "course.btn": "🚀 Kursni boshlash",
      "footer.telegram.title": "Telegram kanalimiz",
      "footer.telegram.btn": "Kanalga o‘tish",

    },

    ru: {
      "footer.about": "Наша POS-система упрощает бизнес-процессы и повышает эффективность. Мы уделяем внимание простоте, гибкости и современным технологиям.",

      "footer.social.facebook_aria": "Наша страница Facebook",
      "footer.social.twitter_aria": "Наш Twitter",
      "footer.social.linkedin_aria": "Наш LinkedIn",
      "footer.social.instagram_aria": "Наш Instagram",

      "footer.quick.title": "Быстрые ссылки",
      "footer.quick.home": "Главная",
      "footer.quick.features": "Функции",
      "footer.quick.pricing": "Тарифы",
      "footer.quick.blog": "Блог",
      "footer.quick.contact": "Контакты",
      "footer.quick.link_aria": "Ссылка в футере",

      "footer.support.title": "Поддержка",
      "footer.support.faq": "Частые вопросы (FAQ)",
      "footer.support.articles": "Статьи",
      "footer.support.livechat": "Онлайн-чат",

      "footer.news.title": "Подпишитесь на новости",
      "footer.news.placeholder": "Ваш email",
      "footer.news.submit": "Отправить",
      "footer.news.submit_aria": "Кнопка подписки",

      "footer.copy.prefix": "© 2025. Все права защищены.",
      "footer.copy.design_by": " Дизайн:",
      "footer.copy.author": " JaMeS",
      "footer.copy.link_aria": "Ссылка на автора сайта",
      "contact.subtitle": "Свяжитесь с нами",
      "contact.title": "Свяжитесь с нами! <br> Оставьте заявку прямо сейчас",
      "contact.name_ph": "Ваше имя",
      "contact.phone_ph": "Ваш телефон*",
      "contact.subject_ph": "Тема",
      "contact.message_ph": "Опишите ваш запрос*",
      "contact.submit": "Отправить",
      "contact.submit_aria": "Кнопка отправки",
      "faq.subtitle": "Есть вопросы?",
      "faq.title": "Ответы на некоторые частые вопросы",

      "faq.q1.title": "Как POS-система поможет моему бизнесу?",
      "faq.q1.body": "Выбирая POS, учитывайте тип и размер бизнеса, бюджет, требуемые функции и перспективы роста. Сравните варианты и изучите отзывы. Обратите внимание на управление покупками и программы лояльности (баллы, скидки, акции).",

      "faq.q2.title": "Можно ли интегрировать POS с моим интернет-магазином?",
      "faq.q2.body": "Учитывайте тип бизнеса, масштаб, бюджет, нужные функции и возможный рост. Изучите варианты и отзывы. Важны возможности управления заказами и разного рода поощрения клиентов.",

      "faq.q3.title": "Нужно ли специальное обучение для работы с POS?",
      "faq.q3.body": "Оцените сложность процессов и необходимые функции. Сравните решения и посмотрите отзывы. Удобно, если есть ведение покупок и инструменты лояльности — это упрощает обучение персонала.",

      "faq.q4.title": "Какую аналитику продаж предоставляет POS?",
      "faq.q4.body": "Смотрите на отчёты по обороту и прибыли, статистику продаж и клиентов, экспорт данных и разрез по филиалам. Сравните варианты и сделайте осознанный выбор.",

      "faq.q5.title": "Как выбрать подходящую POS-систему?",
      "faq.q5.body": "Учтите тип бизнеса, масштаб, бюджет, нужные функции и рост. Изучите варианты и отзывы. Обратите внимание на управление заказами и программы поощрения клиентов.",
      "cta.title": "Обновите ваш бизнес с нами <br> Современные POS-решения!",
      "cta.text": "Ощутите будущее транзакций! Запланируйте демо уже сегодня и увидьте, как наше POS-решение может преобразить ваш бизнес.",
      "cta.demo": "Попробовать демо",
      "cta.contact": "Связаться",
      "cta.demo_aria": "Начать демо-версию",
      "cta.contact_aria": "Связаться с отделом продаж",
      "partners.title": "Наши клиенты",
      "testimonials.subtitle": "Отзывы наших клиентов",
      "testimonials.title": "Отзывы довольных клиентов, <br> подтверждающие наше качество",
      "pricing.subtitle": "Наши тарифы",
      "pricing.title": "Прозрачные тарифные планы <br> подберите тот, что подходит вам",
      "pricing.per_month": "/ мес",
      "pricing.choose_plan": "Выбрать тариф",
      "pricing.choose_plan_aria": "Перейти к покупке услуги",
      "pricing.popular": "Популярно",

      "pricing.start.name": "Start",
      "pricing.start.subtitle": "Для небольших магазинов",

      "pricing.standard.name": "Standard",
      "pricing.standard.subtitle": "Для стандартных магазинов",

      "pricing.premium.name": "Premium",
      "pricing.premium.subtitle": "Для крупных магазинов",

      "pricing.f.only_one_user": "Только для одного пользователя",
      "pricing.f.inventory": "Управление складом",
      "pricing.f.sales_reports": "Отчёты о продажах и аналитика",
      "pricing.f.advanced": "Расширенная функциональность",
      "pricing.f.barcode": "Сканирование штрих-кода",
      "pricing.f.support": "Бесплатная поддержка 24/7",
      "users.subtitle": "Кто может использовать наш магазин",
      "users.title": "Наше программное обеспечение адаптировано для широкого круга бизнеса и отраслей",
      "users.1": "Розничные магазины",
      "users.2": "Супермаркеты",
      "users.3": "Мини-маркеты",
      "users.4": "Онлайн-торговля",
      "users.5": "И многие другие сферы",
      "soft.subtitle": "Основные функции программы",
      "soft.title": "Мощные возможности с красивым дизайном",

      "soft.1.title": "Управление инвентаризацией",
      "soft.1.subtitle": "Автоматически отслеживает остатки и поступления, напоминает о минимальном уровне.",

      "soft.2.title": "Процесс продаж и оплаты",
      "soft.2.subtitle": "Принимает наличные, карты и QR-платежи в один клик, снижает количество ошибок.",

      "soft.3.title": "Отчётность и аналитика",
      "soft.3.subtitle": "Показывает оборот и прибыль в реальном времени, экспорт и разрез по филиалам.",

      "soft.4.title": "Безопасные быстрые транзакции",
      "soft.4.subtitle": "Оплата защищена на основе EMV, быстро подтверждается и гарантирует надёжный результат."
      ,
      "nav.home": "Главная", "nav.features": "Функции", "nav.equipment": "Оборудование", "nav.integrations": "Интеграции", "nav.pricing": "Тарифы",
      "nav.faq": "FAQ", "nav.blog": "Kлиенты", "nav.contact": "Контакты",

      "hero.title": "Увеличьте успех продаж с нашим POS-терминалом",
      "hero.subtitle": "Наш современный POS-софт создан, чтобы прокачать процессы: улучшайте опыт клиентов и повышайте эффективность благодаря мощным функциям и простому интерфейсу.",
      "hero.demo": "Попробовать демо",
      "hero.contact": "Связаться",
      "hero.stats.sales": "+45% Продаж",
      "hero.stats.customers": "1000+ Клиентов", 
      "hero.stats.support": "24/7 Поддержка",

      "features.subtitle": "Развивайте бизнес с I-Dokon",
      "features.title": "Простой и в то же время мощный<br> наш кассовый POS-комплекс",

      "equipment.subtitle": "POS Оборудование",
      "equipment.title": "Комплект необходимого <br> оборудования для торговли",
      "equipment.description": "Получите все необходимое оборудование для полного запуска кассовой системы в одном месте",
      "equipment.btn": "Посмотреть оборудование",
      "equipment.monoblok.title": "Моноблок Терминалы",
      "equipment.monoblok.desc": "Удобный сенсорный дисплей для кассы",
      "equipment.printer.title": "Принтеры чеков и этикеток",
      "equipment.printer.desc": "Для быстрой и качественной печати",
      "equipment.scanner.title": "Сканеры штрих-кодов",
      "equipment.scanner.desc": "Для считывания QR и баркодов",
      "equipment.scale.title": "Весы",
      "equipment.scale.desc": "Взвешивание и расчет цены",

      "integrations.subtitle": "Интеграция с системами",
      "integrations.title": "Простая интеграция с <br> существующими кассовыми системами",
      "integrations.description": "Наша POS система легко интегрируется с существующими кассовыми системами. Возможность быстрого перехода на новую систему без потери данных.",
      "integrations.feature1.title": "Быстрое подключение",
      "integrations.feature1.desc": "Подключение к существующей системе за 1-2 дня",
      "integrations.feature2.title": "Безопасность данных",
      "integrations.feature2.desc": "Все данные сохраняются",
      "integrations.feature3.title": "Техническая поддержка", 
      "integrations.feature3.desc": "Полная поддержка в процессе интеграции",
      "integrations.systems.title": "Поддерживаемые системы",
      "integrations.multikassa.desc": "Онлайн касса, связанная с налоговой службой",
      "integrations.arco.desc": "Широко распространенная система касс и отчетов",
      "integrations.eimzo.desc": "Система отправки SMS уведомлений через E-imzo",
      "integrations.other.title": "Другие системы",
      "integrations.other.desc": "Вашей системы нет в списке? Свяжитесь с нами, обсудим возможности интеграции.",

      "pricing.subtitle": "Наши тарифы",
      "pricing.title": "Прозрачные планы — выберите <br> подходящий именно вам",

      "cta.title": "Обновите бизнес с нами <br> Современные POS-решения!",
      "cta.text": "Ощутите будущее транзакций! Запланируйте демо уже сегодня и посмотрите, как наше POS-решение меняет бизнес.",
      "cta.demo": "Попробовать демо",
      "cta.contact": "Связаться",

      "contact.subtitle": "Связаться с нами",
      "contact.title": "Свяжитесь с нами! <br> Обращайтесь прямо сейчас",
      "contact.form.name": "Ваше имя",
      "contact.form.phone": "Ваш телефон*",
      "contact.form.message": "Расскажите подробнее о запросе*",
      "contact.form.submit": "Отправить",

      "footer.quicklinks": "Быстрые ссылки",
      "footer.home": "Главная",
      "footer.features": "Функции",
      "footer.pricing": "Тарифы",
      "footer.blog": "Блог",
      "footer.contact": "Контакты",

      "preloader.text": "Загрузка...",

      "features.0.title": "Скорость продаж ↑",
      "features.0.subtitle": "Оплата в один клик — меньше ошибок и быстрее очередь. Итоги сразу видны в конце дня.",

      "features.1.title": "Просто для кассиров",
      "features.1.subtitle": "Поиск по сканеру, скидки и бонусы. Интерфейс понятный — даже новичок быстро освоит.",

      "features.2.title": "Отчеты и контроль",
      "features.2.subtitle": "Оборот, прибыль и топ-товары онлайн. Фильтры по филиалам и экспорт одним кликом.",

      "features.3.title": "Установка и интеграции",
      "features.3.subtitle": "Запуск за 10 минут на Windows. Поддержка принтера, сканера, терминала, QR и API.",

      "pricing.start.features": [
        "Добавление неограниченного количества товаров",
        "Загрузка товаров через Excel за несколько секунд",
        "Удобная инвентаризация и контроль склада",
        "Расчёты с поставщиками и клиентами",
        "Понятные и полные отчёты"
      ],
      "pricing.standard.features": [
        "Интеграция с налоговой системой (Arco, Multikassa)",
        "Интеграция с платёжными системами (Click, Payme, Uzum)",
        "Список рекомендуемых товаров",
        "Товары с замороженными средствами",
        "Создание акций и наборов",
        "Работа с валютой",
        "Учёт расходов",
        "Работа с маркировкой"
      ],
      "pricing.premium.features": [
        "Все функции тарифа Standard",
        "Бонусы для клиентов (Loyalty)",
        "Аналитика (ABC-анализ, OOS-анализ)",
        "Расширенные отчёты по движению товаров"
      ],

      "course.title": "Курс I-Dokon",
      "course.desc": "Освойте нашу POS-систему <b>полностью и легко</b> с помощью курса I-Dokon! В курсе — модули, практические примеры, видеоуроки и интерактивные задания.<br><br><span style='color:#4F8A8B;font-weight:600;'>После прохождения курса каждый клиент сможет работать с программой самостоятельно и быстро находить ответы на вопросы.</span>",
      "course.btn": "🚀 Начать курс",
      "footer.telegram.title": "Наш Telegram-канал",
      "footer.telegram.btn": "Перейти в канал",

      // Cart translations
      "cart.search": "Поиск: 'printer', 'штрих', 'monoblok'...",
      "cart.filter.all": "Все",
      "cart.filter.monoblok": "Моноблок",
      "cart.filter.printer": "X-printer / Чек",
      "cart.filter.scanner": "Штрих сканер", 
      "cart.filter.scale": "Весы",
      "cart.filter.box": "Денежный ящик",
      "cart.sidebar.title": "Корзина",
      "cart.sidebar.empty": "Корзина пуста.",
      "cart.sidebar.devices": "Всего устройств:",
      "cart.sidebar.plan": "Абонентская плата:",
      "cart.sidebar.install": "Установка:",
      "cart.sidebar.grand": "Итого:",
      "cart.sidebar.order": "Оформить заказ",
      "cart.sidebar.share": "Скопировать ссылку корзины",
      "cart.modal.product": "Товар",
      "cart.modal.close": "Закрыть",
      "cart.modal.add": "Добавить в корзину",
      "cart.modal.checkout": "Подтвердить заказ",
      "cart.form.name": "Ваше имя",
      "cart.form.name_ph": "Например: Петров Петр",
      "cart.form.phone": "Номер телефона",
      "cart.form.phone_ph": "+7 XXX XXX-XX-XX",
      "cart.form.note": "Примечание (необязательно)",
      "cart.form.note_ph": "Например: Доставка в Москву.",
      "cart.form.submit": "Отправить",
      "cart.form.submit_aria": "Отправить заказ",
      "cart.form.manager": "Наш менеджер скоро свяжется с вами.",
      "cart.nav.home": "Ссылка на главную страницу",
      "cart.nav.lang": "Выбор языка",
      "cart.nav.cart": "Корзина",
      "cart.slider.prev": "Предыдущий",
      "cart.slider.next": "Следующий",
      "cart.qty.minus": "Уменьшить",
      "cart.qty.plus": "Увеличить",
      "cart.fab.view": "Посмотреть корзину",

      // Products translations
      "product.mb-01.title": "Моноблок J/s pos", 
      "product.mb-01.desc": "Удобный моноблок для кассы с сенсорным дисплеем. SSD 8/128 ГБ Wifi+ Windows 10Pro Ламинатная пленка+ intel core i5 (3,5) поколение Гарантия качества 1 год",
      "product.mb-02.title": "Pos моноблок",
      "product.mb-02.desc": "Мощная конфигурация для высоких нагрузок. i5-3230M, 15 x2, Оперативка 8ГБ, 128ССД, WiFi, Bluetooth, HDMI, VGA, USB x6",
      "product.xp-80.title": "Принтер штрих-кодов - Xprinter 365B",
      "product.xp-80.desc": "Ширина бумаги: 20-82 мм, Скорость: 127 мм/сек, Интерфейс: USB + LAN, Гарантия качества: 1 год",
      "product.xp-58.title": "Xprinter чек",
      "product.xp-58.desc": "USB +Lan 80mm Q-80",
      "product.sc-01.title": "WINSON A780",
      "product.sc-01.desc": "USB ☑️, QR КОД ☑️, ШТРИХ КОД ☑️, МАРКИРОВКА ☑️ Гарантия качества 1 год ☑️",
      "product.box-01.title": "Ящик для денег",
      "product.box-01.desc": "Тип замка: Электромеханический, Подключение: RJ-11, Bill Klamp: Да, Количество отделений для банкнот: 5, Количество отделений для монет: 5, Материал: металл, Черный цвет, Вес: 7.8 кг, Общие размеры: 410 × 100 × 415 мм",
      "product.scale-01.title": "Весы Rongta",
      "product.scale-01.desc": "Barcode scale 1510, 15 кг, Гарантия качества: 6 месяцев",
      "product.scale-02.title": "Весы со штрих-кодом и ценами",
      "product.scale-02.desc": "Производство: Россия, Количество клавиш: 77, Предел веса: 40 гр – 15 кг, Ширина бумаги: 58 мм, Гарантия качества: 1 год",
      "product.scale-03.title": "Весы TMA",
      "product.scale-03.desc": "Страна: Китай 🇨🇳, Грузоподъемность: 30 кг, Гарантия: 6 месяцев, PLU: до 4000",

      // Plans translations
      "plan.start.title": "Start",
      "plan.start.subtitle": "Для небольших магазинов",
      "plan.standard.title": "Standard", 
      "plan.standard.subtitle": "Для стандартных магазинов",
      "plan.premium.title": "Premium",
      "plan.premium.subtitle": "Для крупных магазинов",
      "plan.popular": "Популярно",

    },

    en: {
      "footer.about": "Our POS streamlines your operations and boosts efficiency. We focus on simplicity, versatility, and cutting-edge tech.",

      "footer.social.facebook_aria": "Our Facebook page",
      "footer.social.twitter_aria": "Our Twitter",
      "footer.social.linkedin_aria": "Our LinkedIn",
      "footer.social.instagram_aria": "Our Instagram",

      "footer.quick.title": "Quick links",
      "footer.quick.home": "Home",
      "footer.quick.features": "Features",
      "footer.quick.pricing": "Pricing",
      "footer.quick.blog": "Blog",
      "footer.quick.contact": "Contact",
      "footer.quick.link_aria": "Footer link",

      "footer.support.title": "Support",
      "footer.support.faq": "Frequently Asked Questions (FAQ)",
      "footer.support.articles": "Articles",
      "footer.support.livechat": "Live chat",

      "footer.news.title": "Subscribe to updates",
      "footer.news.placeholder": "Your email",
      "footer.news.submit": "Send",
      "footer.news.submit_aria": "Subscribe button",

      "footer.copy.prefix": "© 2025. All rights reserved.",
      "footer.copy.design_by": " Design by",
      "footer.copy.author": " JaMeS",
      "footer.copy.link_aria": "Author link",
      "contact.subtitle": "Contact us",
      "contact.title": "Get in touch! <br> Reach out right now",
      "contact.name_ph": "Your name",
      "contact.phone_ph": "Your phone*",
      "contact.subject_ph": "Subject",
      "contact.message_ph": "Tell us more about your request*",
      "contact.submit": "Send",
      "contact.submit_aria": "Submit button",
      "faq.subtitle": "Have a question?",
      "faq.title": "Here are answers to common questions",

      "faq.q1.title": "How can a POS system benefit my business?",
      "faq.q1.body": "When choosing a POS, consider business type and size, budget, required features, and growth plans. Compare options and read reviews. Look for purchase management and loyalty tools (points, discounts, special offers).",

      "faq.q2.title": "Can I integrate the POS with my online store?",
      "faq.q2.body": "Consider your business type, scale, budget, must-have features, and growth. Research options and user feedback. Order management and loyalty rewards are important.",

      "faq.q3.title": "Do I need special training to use the POS?",
      "faq.q3.body": "Assess process complexity and needed features. Compare solutions and reviews. Having purchase tracking and loyalty tools helps staff learn faster.",

      "faq.q4.title": "What sales analytics does the POS provide?",
      "faq.q4.body": "Look for turnover/profit reports, product and customer stats, real-time dashboards, export, and branch breakdowns. Compare and choose confidently.",

      "faq.q5.title": "How do I choose the right POS for my business?",
      "faq.q5.body": "Account for business type, size, budget, features, and future growth. Research options, read reviews, and prefer solutions with inventory and loyalty capabilities.",
      "cta.title": "Upgrade your business with us <br> Next-gen POS solutions!",
      "cta.text": "Feel the future of transactions! Book a demo today and see how our POS can transform your business.",
      "cta.demo": "Try Demo",
      "cta.contact": "Contact",
      "cta.demo_aria": "Start demo",
      "cta.contact_aria": "Contact sales",
      "partners.title": "Our clients",
      "testimonials.subtitle": "Our Customers’ Feedback",
      "testimonials.title": "Happy client reviews <br> proving our excellence",
      "pricing.subtitle": "Our Pricing",
      "pricing.title": "Transparent pricing plans <br> find the one that fits your needs",
      "pricing.per_month": "/ mo",
      "pricing.choose_plan": "Choose plan",
      "pricing.choose_plan_aria": "Contact sales to purchase",
      "pricing.popular": "Most popular",

      "pricing.start.name": "Start",
      "pricing.start.subtitle": "For small shops",

      "pricing.standard.name": "Standard",
      "pricing.standard.subtitle": "For regular stores",

      "pricing.premium.name": "Premium",
      "pricing.premium.subtitle": "For high-volume stores",

      "pricing.f.only_one_user": "Only for one user",
      "pricing.f.inventory": "Inventory management",
      "pricing.f.sales_reports": "Sales report & analysis",
      "pricing.f.advanced": "Advanced functionality",
      "pricing.f.barcode": "Bar code scanning",
      "pricing.f.support": "Free 24/7 support",
      "users.subtitle": "Who can use our store",
      "users.title": "Our software is tailored for a wide range of businesses and industries",
      "users.1": "Retail stores",
      "users.2": "Supermarkets",
      "users.3": "Mini-markets",
      "users.4": "Online commerce",
      "users.5": "And many other fields",
      "soft.subtitle": "Main software features",
      "soft.title": "Powerful features with elegant design",

      "soft.1.title": "Inventory management",
      "soft.1.subtitle": "Tracks stock and flow automatically, notifies about minimum levels.",

      "soft.2.title": "Sales & payment process",
      "soft.2.subtitle": "Accepts cash, card and QR payments in one click, reducing errors.",

      "soft.3.title": "Reports & analytics",
      "soft.3.subtitle": "Shows turnover and profit in real-time, with branch breakdown and export.",

      "soft.4.title": "Secure fast transactions",
      "soft.4.subtitle": "Payments protected by EMV, confirmed quickly and reliably.",
      "nav.home": "Home", "nav.features": "Features", "nav.equipment": "Equipment", "nav.integrations": "Integrations", "nav.pricing": "Pricing",
      "nav.faq": "FAQ", "nav.blog": "Clients", "nav.contact": "Contact",

      "hero.title": "Boost your sales with our POS terminal",
      "hero.subtitle": "Our modern POS software is built to transform your operations. Enhance customer experience and increase efficiency with powerful features and a friendly UI.",
      "hero.demo": "Try Demo",
      "hero.contact": "Contact Us",
      "hero.stats.sales": "+45% Sales",
      "hero.stats.customers": "1000+ Customers", 
      "hero.stats.support": "24/7 Support",

      "features.subtitle": "Grow your business with I-Dokon",
      "features.title": "Simple yet powerful<br> Point-of-Sale system",

      "equipment.subtitle": "POS Equipment",
      "equipment.title": "Complete equipment set <br> for your retail business",
      "equipment.description": "Get all the necessary equipment for a complete POS system setup in one place",
      "equipment.btn": "View Equipment",
      "equipment.monoblok.title": "Monoblock Terminals",
      "equipment.monoblok.desc": "Touch display convenient for cashiers",
      "equipment.printer.title": "Receipt & Label Printers",
      "equipment.printer.desc": "For fast and quality printing",
      "equipment.scanner.title": "Barcode Scanners",
      "equipment.scanner.desc": "For reading QR and barcodes",
      "equipment.scale.title": "Scales",
      "equipment.scale.desc": "Weight measurement and price calculation",

      "integrations.subtitle": "System Integrations",
      "integrations.title": "Easy integration with <br> existing POS systems",
      "integrations.description": "Our POS system easily integrates with existing cash register systems. Quick transition to a new system without data loss.",
      "integrations.feature1.title": "Quick Connection",
      "integrations.feature1.desc": "Connect to existing system within 1-2 days",
      "integrations.feature2.title": "Data Security",
      "integrations.feature2.desc": "All data is preserved",
      "integrations.feature3.title": "Technical Support",
      "integrations.feature3.desc": "Full support during integration process",
      "integrations.systems.title": "Supported Systems",
      "integrations.multikassa.desc": "Online cash register connected to tax service",
      "integrations.arco.desc": "Widely used cash register and reporting system",
      "integrations.eimzo.desc": "SMS notification system via E-imzo",
      "integrations.other.title": "Other Systems",
      "integrations.other.desc": "Don't see your system listed? Contact us to discuss integration possibilities.",

      "pricing.subtitle": "Our Pricing",
      "pricing.title": "Transparent plans — find <br> the one that fits your needs",

      "cta.title": "Upgrade your business with us <br> Next-gen POS solutions!",
      "cta.text": "Feel the future of transactions! Book a demo today and see how our POS can transform your business.",
      "cta.demo": "Try Demo",
      "cta.contact": "Contact",

      "contact.subtitle": "Get in touch",
      "contact.title": "Contact us! <br> Reach out now",
      "contact.form.name": "Your name",
      "contact.form.phone": "Your phone*",
      "contact.form.message": "Tell us more about your request*",
      "contact.form.submit": "Send",

      "footer.quicklinks": "Quick links",
      "footer.home": "Home",
      "footer.features": "Features",
      "footer.pricing": "Pricing",
      "footer.blog": "Blog",
      "footer.contact": "Contact",

      "preloader.text": "Loading...",

      "features.0.title": "Sales speed ↑",
      "features.0.subtitle": "One-click payment — fewer errors and faster checkout. Results visible at the end of the day.",

      "features.1.title": "Easy for cashiers",
      "features.1.subtitle": "Quick search via scanner, discounts and bonuses. Simple interface — even new staff learns fast.",

      "features.2.title": "Reports and control",
      "features.2.subtitle": "Turnover, profit and top products online. View by branches and export in one click.",

      "features.3.title": "Setup & integration",
      "features.3.subtitle": "Runs in 10 minutes on Windows. Supports printer, scanner, terminal, QR and API extensions.",
      "pricing.start.features": [
        "Add unlimited products",
        "Instant bulk upload via Excel",
        "Convenient inventory and warehouse control",
        "Supplier and customer settlements",
        "Clear and complete reports"
      ],
      "pricing.standard.features": [
        "Integration with tax systems (Arco, Multikassa)",
        "Integration with payment systems (Click, Payme, Uzum)",
        "Recommended products list",
        "Frozen-funds product tracking",
        "Create promotions and bundles",
        "Multi-currency support",
        "Expense management",
        "Product marking support"
      ],
      "pricing.premium.features": [
        "All Standard plan features",
        "Customer bonus program (Loyalty)",
        "Advanced analytics (ABC analysis, OOS analysis)",
        "Extended product movement reports"
      ],

      "course.title": "I-Dokon Course",
      "course.desc": "Learn our POS software <b>fully and easily</b> with the I-Dokon course! The course includes modules, practical examples, video lessons, and interactive tasks.<br><br><span style='color:#4F8A8B;font-weight:600;'>After completing the course, every client can use the program independently and quickly find answers to questions.</span>",
      "course.btn": "🚀 Start the course",
      "footer.telegram.title": "Our Telegram channel",
      "footer.telegram.btn": "Go to channel",

      // Cart translations
      "cart.search": "Search: 'printer', 'barcode', 'monoblok'...",
      "cart.filter.all": "All",
      "cart.filter.monoblok": "Monoblock",
      "cart.filter.printer": "X-printer / Receipt",
      "cart.filter.scanner": "Barcode scanner", 
      "cart.filter.scale": "Scales",
      "cart.filter.box": "Cash drawer",
      "cart.sidebar.title": "Cart",
      "cart.sidebar.empty": "Cart is empty.",
      "cart.sidebar.devices": "Total devices:",
      "cart.sidebar.plan": "Subscription fee:",
      "cart.sidebar.install": "Installation fee:",
      "cart.sidebar.grand": "Grand total:",
      "cart.sidebar.order": "Place order",
      "cart.sidebar.share": "Copy cart link",
      "cart.modal.product": "Product",
      "cart.modal.close": "Close",
      "cart.modal.add": "Add to cart",
      "cart.modal.checkout": "Confirm order",
      "cart.form.name": "Your name",
      "cart.form.name_ph": "Example: John Smith",
      "cart.form.phone": "Phone number",
      "cart.form.phone_ph": "+1 XXX XXX-XXXX",
      "cart.form.note": "Note (optional)",
      "cart.form.note_ph": "Example: Delivery to New York.",
      "cart.form.submit": "Submit",
      "cart.form.submit_aria": "Submit order",
      "cart.form.manager": "Our manager will contact you soon.",
      "cart.nav.home": "Home page link",
      "cart.nav.lang": "Language selector",
      "cart.nav.cart": "Cart",
      "cart.slider.prev": "Previous",
      "cart.slider.next": "Next",
      "cart.qty.minus": "Decrease",
      "cart.qty.plus": "Increase",
      "cart.fab.view": "View cart",

      // Products translations
      "product.mb-01.title": "Monoblock J/s pos", 
      "product.mb-01.desc": "Convenient monoblock for cash register with touch display. SSD 8/128 GB Wifi+ Windows 10Pro Laminate film+ intel core i5 (3.5) generation Quality warranty 1 year",
      "product.mb-02.title": "Pos monoblock",
      "product.mb-02.desc": "Powerful configuration for high loads. i5-3230M, 15 x2, RAM 8GB, 128SSD, WiFi, Bluetooth, HDMI, VGA, USB x6",
      "product.xp-80.title": "Barcode printer - Xprinter 365B",
      "product.xp-80.desc": "Paper width: 20-82 mm, Speed: 127 mm/sec, Interface: USB + LAN, Quality warranty: 1 year",
      "product.xp-58.title": "Xprinter receipt",
      "product.xp-58.desc": "USB +Lan 80mm Q-80",
      "product.sc-01.title": "WINSON A780",
      "product.sc-01.desc": "USB ☑️, QR CODE ☑️, BARCODE ☑️, MARKING ☑️ Quality warranty 1 year ☑️",
      "product.box-01.title": "Cash drawer",
      "product.box-01.desc": "Lock type: Electromechanical, Connection: RJ-11, Bill Clamp: Yes, Number of bill compartments: 5, Number of coin compartments: 5, Material: metal, Black color, Weight: 7.8 kg, Overall dimensions: 410 × 100 × 415 mm",
      "product.scale-01.title": "Rongta scales",
      "product.scale-01.desc": "Barcode scale 1510, 15 kg, Quality warranty: 6 months",
      "product.scale-02.title": "Scales with barcode and price input",
      "product.scale-02.desc": "Manufactured: Russia, Number of keys: 77, Weight limit: 40 gr – 15 kg, Paper width: 58 mm, Quality warranty: 1 year",
      "product.scale-03.title": "TMA scales",
      "product.scale-03.desc": "Country: China 🇨🇳, Load capacity: 30 kg, Warranty: 6 months, PLU: up to 4000",

      // Plans translations
      "plan.start.title": "Start",
      "plan.start.subtitle": "For small stores",
      "plan.standard.title": "Standard", 
      "plan.standard.subtitle": "For standard stores",
      "plan.premium.title": "Premium",
      "plan.premium.subtitle": "For large stores",
      "plan.popular": "Popular",

    }
  };

  // 2) Helperlar
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function setText(node, text) {
    // HTML bo'laklari (masalan <br>) bo'lsa innerHTML, aks holda textContent
    if (/<[a-z][\s\S]*>/i.test(text)) node.innerHTML = text;
    else node.textContent = text;
  }

  function applyTranslations(lang) {
    const dict = i18n[lang] || i18n[DEFAULT_LANG];
    if (typeof window.renderFeatures === 'function') {
      window.renderFeatures(lang);
    }

    // [data-i18n] uchun
    $$('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) setText(el, dict[key]);
    });

    // [data-i18n-attr] uchun (masalan placeholder yoki aria-label)
    $$('[data-i18n-attr]').forEach(el => {
      const pairs = el.getAttribute('data-i18n-attr').split(',').map(s => s.trim());
      pairs.forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (dict[key]) el.setAttribute(attr, dict[key]);
      });
    });

    // Preloader
    const pre = $('.cs_perloader_text');
    if (pre && dict['preloader.text']) pre.textContent = dict['preloader.text'];

    // <html lang="..">
    document.documentElement.setAttribute('lang', lang);

    // Til tugmasida bayroq va nom
    const btn = $('.cs_lang_btn');
    if (btn && LANGS[lang]) {
      const img = btn.querySelector('img');
      const span = btn.querySelector('.cs_lang_code');
      if (img) img.src = LANGS[lang].flag;
      if (img) img.alt = LANGS[lang].name;
      if (span) span.textContent = LANGS[lang].name;
      btn.setAttribute('aria-expanded', 'false');
    }
  }

  function saveLang(lang) {
    try { localStorage.setItem('site_lang', lang); } catch { }
  }

  function loadLang() {
    try { return localStorage.getItem('site_lang'); } catch { return null; }
  }

  // 3) Til menyusi hodisalari
  function setupLanguageMenu() {
    const btn = $('.cs_lang_btn');
    const menu = $('.cs_lang_menu');

    if (!btn || !menu) return;

    // toggling
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      menu.style.display = expanded ? 'none' : 'block';
    });

    // tanlash
    $$('.cs_lang_menu [role="option"]').forEach(item => {
      item.addEventListener('click', () => {
        const lang = item.getAttribute('data-lang');
        if (!i18n[lang]) return;
        saveLang(lang);
        applyTranslations(lang);
        renderPlanFeatures(lang);
        menu.style.display = 'none';
      });
    });

    // tashqariga bosilganda yopish
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !btn.contains(e.target)) {
        btn.setAttribute('aria-expanded', 'false');
        menu.style.display = 'none';
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const lang = document.documentElement.getAttribute('lang') || 'uz';

    // tariflar ro‘yxati: [ul_id, i18n_key]
    const plans = [
      { id: 'startFeatures', key: 'pricing.start.features' },
      { id: 'standardFeatures', key: 'pricing.standard.features' },
      { id: 'premiumFeatures', key: 'pricing.premium.features' }
    ];

    plans.forEach(plan => {
      const ul = document.getElementById(plan.id);
      const features = i18n[lang][plan.key];
      if (!ul || !features) return;

      ul.innerHTML = ''; // eski elementlarni tozalash
      features.forEach(text => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fa-solid fa-check"></i> ${text}`;
        ul.appendChild(li);
      });
    });
  });

  function renderPlanFeatures(lang) {
    const plans = [
      { id: 'startFeatures', key: 'pricing.start.features' },
      { id: 'standardFeatures', key: 'pricing.standard.features' },
      { id: 'premiumFeatures', key: 'pricing.premium.features' }
    ];
    plans.forEach(plan => {
      const ul = document.getElementById(plan.id);
      const features = i18n[lang][plan.key];
      if (!ul || !features) return;
      ul.innerHTML = features.map(t => `<li><i class="fa-solid fa-check"></i> ${t}</li>`).join('');
    });
  }



  // Helper function to get translated text
  function getTranslation(key, fallback = '') {
    const currentLang = loadLang() || DEFAULT_LANG;
    const dict = i18n[currentLang] || i18n[DEFAULT_LANG];
    return dict[key] || fallback;
  }

  // Make it globally available
  window.getTranslation = getTranslation;
  window.applyTranslations = applyTranslations;
  window.i18n = i18n;
  window.initI18n = function() {
    setupLanguageMenu();
  };

  // 4) Init
  document.addEventListener('DOMContentLoaded', () => {
    const saved = loadLang();
    const initial = (saved && i18n[saved]) ? saved : DEFAULT_LANG;
    applyTranslations(initial);
    renderPlanFeatures(initial)
    setupLanguageMenu();
  });
})();
