/* features.js */
(function () {
  // 1) Kartalar ro'yxati (kalitlar bilan)
  const features = [
    { icon: "assets/img/shop.svg", titleKey: "features.1.title", subtitleKey: "features.1.subtitle" },
    { icon: "assets/img/price_bar.svg", titleKey: "features.2.title", subtitleKey: "features.2.subtitle" },
    { icon: "assets/img/setup.svg", titleKey: "features.3.title", subtitleKey: "features.3.subtitle" },
    { icon: "assets/img/ui.svg", titleKey: "features.4.title", subtitleKey: "features.4.subtitle" },
  ];

  // 2) Tarjimalar (features bo'limi uchun)
  // const featureTranslations = {
  //   uz: {
  //     "features.more": "Batafsil",
  //     "features.less": "Yopish",
  //     "features.1.title": "Savdo tezligi ↑",
  //     "features.1.subtitle": "Bir bosishda to'lov — kam xatolik va tez navbat. Kunning oxirida natijalar darhol ko'rinadi.",
  //     "features.2.title": "Kassirlar uchun sodda",
  //     "features.2.subtitle": "Skaner bilan tez qidiruv, chegirma va bonuslar. Interfeys oddiy — yangi kassir ham tez o'rganadi.",
  //     "features.3.title": "Hisobot va nazorat",
  //     "features.3.subtitle": "Aylanma, foyda va top mahsulotlar onlayn. Filiallar kesimida ko'rish va eksport bir tugmada.",
  //     "features.4.title": "O'rnatish va integratsiya",
  //     "features.4.subtitle": "Windows'da 10 daqiqada ishga tushadi. Printer, skaner, terminal, Tez QR va API bilan kengayadi."
  //   },
  //   ru: {
  //     "features.more": "Подробнее",
  //     "features.less": "Свернуть",
  //     "features.1.title": "Скорость продаж ↑",
  //     "features.1.subtitle": "Оплата в один клик — меньше ошибок и быстрее очередь. Итоги сразу видны в конце дня.",
  //     "features.2.title": "Просто для кассиров",
  //     "features.2.subtitle": "Поиск по сканеру, скидки и бонусы. Интерфейс понятный — даже новичок быстро освоит.",
  //     "features.3.title": "Отчеты и контроль",
  //     "features.3.subtitle": "Оборот, прибыль и топ-товары онлайн. Срез по филиалам и экспорт в один клик.",
  //     "features.4.title": "Установка и интеграции",
  //     "features.4.subtitle": "Запуск за 10 минут на Windows. Поддержка принтера, сканера, терминала, QR и расширение через API."
  //   },
  //   en: {
  //     "features.more": "Learn more",
  //     "features.less": "Show less",
  //     "features.1.title": "Sales speed ↑",
  //     "features.1.subtitle": "One-click payment — fewer errors and faster lines. Results visible at the end of the day.",
  //     "features.2.title": "Easy for cashiers",
  //     "features.2.subtitle": "Fast scanner search, discounts and bonuses. Simple UI — new staff learns quickly.",
  //     "features.3.title": "Reports & control",
  //     "features.3.subtitle": "Turnover, profit and top products online. Branch breakdown and one-click export.",
  //     "features.4.title": "Setup & integration",
  //     "features.4.subtitle": "Runs on Windows in 10 minutes. Printer, scanner, terminal, Fast QR and extensible via API."
  //   }
  // };

  // 3) Tarjimalarni global i18n ga qo'shib qo'yamiz (agar bor bo'lsa)
  try {
    if (typeof i18n !== 'undefined' && i18n) {
      Object.keys(featureTranslations).forEach(lang => {
        i18n[lang] = Object.assign(i18n[lang] || {}, featureTranslations[lang]);
      });
    } else {
      // Agar i18n hali yo'q bo'lsa — kamida features uchun lokal nusxa yarataylik
      window.i18n = featureTranslations;
    }
  } catch { /* hech narsa */ }

  // 4) Foydali helperlar
  function getDict(lang) {
    const def = 'uz';
    return (window.i18n && window.i18n[lang]) ? window.i18n[lang]
      : (window.i18n && window.i18n[def]) ? window.i18n[def]
      : featureTranslations.uz;
  }
  function getCurrentLang() {
    return (
      document.documentElement.getAttribute('lang') ||
      (function () { try { return localStorage.getItem('site_lang'); } catch { return null; } })() ||
      'uz'
    );
  }

  // 5) Renderer
  function renderFeatures(lang) {
    const row = document.getElementById('features-row');
    if (!row) return;
    const dict = getDict(lang);

    row.innerHTML = features.map((f, idx) => {
      console.log(f);
      
      const title = dict[f.titleKey] ?? f.titleKey;
      const subtitle = dict[f.subtitleKey] ?? f.subtitleKey;
      const more = dict["features.more"] || "Batafsil";
      return `
        <div class="col-lg-6 col-xl-3">
          <div class="cs_iconbox cs_style_1 h-100" data-card-index="${idx}">
            <div class="cs_iconbox_icon">
              <img src="${f.icon}" alt="">
            </div>
            <h3 class="cs_iconbox_title clamp-2">${title}</h3>
            <p class="cs_iconbox_subtitle clamp-3">${subtitle}</p>
            <a href="#features"
               class="cs_text_btn cs_text_accent js-feature-toggle"
               role="button"
               aria-expanded="false"
               aria-controls="feature-desc-${idx}">
              <span class="js-toggle-label">${more}</span>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10.147 1.75739C10.147 1.28795 9.76649 0.907395 9.29705 0.907394L1.64705 0.907394C1.17761 0.907395 0.797048 1.28795 0.797048 1.75739C0.797048 2.22684 1.17761 2.60739 1.64705 2.60739H8.44705V9.4074C8.44705 9.87684 8.82761 10.2574 9.29705 10.2574C9.76649 10.2574 10.147 9.87684 10.147 9.4074L10.147 1.75739ZM1.41281 10.8437L9.89809 2.35844L8.69601 1.15635L0.210727 9.64163L1.41281 10.8437Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
        </div>
      `;
    }).join('');
  }

  // 6) Toggle (delegatsiya orqali)
  document.addEventListener('click', function (e) {
    const toggle = e.target.closest('.js-feature-toggle');
    if (!toggle) return;

    e.preventDefault(); // #features ga sakrashni to'xtatamiz

    const card = toggle.closest('.cs_iconbox');
    if (!card) return;

    const currentLang = getCurrentLang();
    const dict = getDict(currentLang);
    const moreLabel = dict['features.more'] || 'Batafsil';
    const lessLabel = dict['features.less'] || 'Yopish';

    const titleEl = card.querySelector('.cs_iconbox_title');
    const subEl = card.querySelector('.cs_iconbox_subtitle');
    const labelSpan = toggle.querySelector('.js-toggle-label');

    const expanded = toggle.getAttribute('aria-expanded') === 'true';

    if (expanded) {
      // Yopish: clamp classlarini qayta qo'yamiz
      titleEl && titleEl.classList.add('clamp-2');
      subEl && subEl.classList.add('clamp-3');
      toggle.setAttribute('aria-expanded', 'false');
      if (labelSpan) labelSpan.textContent = moreLabel;
    } else {
      // Ochish: clamp classlarini olib tashlaymiz
      titleEl && titleEl.classList.remove('clamp-2');
      subEl && subEl.classList.remove('clamp-3');
      toggle.setAttribute('aria-expanded', 'true');
      if (labelSpan) labelSpan.textContent = lessLabel;
    }
  });

  // 7) Globalga chiqaramiz — til o'zgarganda lang.js ichidan chaqirasiz
  window.renderFeatures = renderFeatures;

  // 8) Avto-init: hozirgi tilni topib, bir marta chizamiz
  document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getCurrentLang();
    renderFeatures(currentLang);
  });
})();
