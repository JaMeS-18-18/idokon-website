// lang.js
(function () {
  const DEFAULT_LANG = 'uz';
  const LANGS = {
    uz: { name: "O'zbekcha", flag: "https://flagcdn.com/w20/uz.png" },
    ru: { name: "Русский", flag: "https://flagcdn.com/w20/ru.png" },
    en: { name: "English", flag: "https://flagcdn.com/w20/gb.png" },
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
      "nav.home": "Asosiy", "nav.features": "Xususiyatlar", "nav.pricing": "Ta'riflar",
      "nav.testimonials": "Ta'ssurotlar", "nav.faq": "FAQ", "nav.blog": "Mijozlarimiz", "nav.contact": "Aloqa",

      "hero.title": "POS terminalimiz yordamida savdo muvaffaqiyatini oshirish",
      "hero.subtitle": "Bizning zamonaviy POS dasturiy ta’minotimiz sizning biznes faoliyatingizni tubdan o‘zgartirish uchun ishlab chiqilgan. Uning kuchli xususiyatlari va foydalanuvchiga qulay interfeysi yordamida mijozlar tajribasini yaxshilang va umumiy samaradorligingizni oshiring.",
      "hero.demo": "Demo ishlatib ko'rish",
      "hero.contact": "Bog'lanish",

      "features.subtitle": "I-Dokon bilan biznesingizni rivojlantiring",
      "features.title": "Sodda ammo ayni paytda murakkab<br> Bizning savdo nuqtasi tizimimiz",

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
      "features.3.subtitle": "Windows’da 10 daqiqada ishga tushadi. Printer, skaner, terminal, Tez QR va API bilan kengayadi."
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
      "nav.home": "Главная", "nav.features": "Функции", "nav.pricing": "Тарифы",
      "nav.testimonials": "Отзывы", "nav.faq": "FAQ", "nav.blog": "Kлиенты", "nav.contact": "Контакты",

      "hero.title": "Увеличьте успех продаж с нашим POS-терминалом",
      "hero.subtitle": "Наш современный POS-софт создан, чтобы прокачать процессы: улучшайте опыт клиентов и повышайте эффективность благодаря мощным функциям и простому интерфейсу.",
      "hero.demo": "Попробовать демо",
      "hero.contact": "Связаться",

      "features.subtitle": "Развивайте бизнес с I-Dokon",
      "features.title": "Простой и в то же время мощный<br> наш кассовый POS-комплекс",

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
      "features.3.subtitle": "Запуск за 10 минут на Windows. Поддержка принтера, сканера, терминала, QR и API."
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
      "nav.home": "Home", "nav.features": "Features", "nav.pricing": "Pricing",
      "nav.testimonials": "Testimonials", "nav.faq": "FAQ", "nav.blog": "Clients", "nav.contact": "Contact",

      "hero.title": "Boost your sales with our POS terminal",
      "hero.subtitle": "Our modern POS software is built to transform your operations. Enhance customer experience and increase efficiency with powerful features and a friendly UI.",
      "hero.demo": "Try Demo",
      "hero.contact": "Contact Us",

      "features.subtitle": "Grow your business with I-Dokon",
      "features.title": "Simple yet powerful<br> Point-of-Sale system",

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
      "features.3.subtitle": "Runs in 10 minutes on Windows. Supports printer, scanner, terminal, QR and API extensions."
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

  // 4) Init
  document.addEventListener('DOMContentLoaded', () => {
    const saved = loadLang();
    const initial = (saved && i18n[saved]) ? saved : DEFAULT_LANG;
    applyTranslations(initial);
    setupLanguageMenu();
  });
})();
