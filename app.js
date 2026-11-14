/**
 * AYBEK & ASEL — WEDDING INVITATION APPLICATION
 * Structure: https://nuraida-invitation.vercel.app/
 * Design: Monochrome Editorial Luxury (@jul.design.ru)
 * Date: November 6, 2027 (06.11.2027)
 * Venue: Uluu Too Banquet Hall (г. Бишкек, ул. Сухэ-Батора, 5)
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. TRILINGUAL TRANSLATIONS (RU / KG / EN)
  // =========================================================================
  const I18N = {
    ru: {
      'envelope.tagline': 'ПРИГЛАШЕНИЕ НА СВАДЬБУ · 06 · 11 · 2027',
      'envelope.subtitle': 'Официальное электронное приглашение',
      'envelope.cta': 'Нажмите, чтобы открыть приглашение',
      'audio.play': 'Включить музыку',
      'audio.pause': 'Выключить музыку',
      'hero.modeBW': 'Ч/Б Эдиториал',
      'hero.modeColor': 'В цвете',
      'hero.monthShort': 'NOV',
      'hero.bottomTag': 'OUR WEDDING',
      'hero.scrollText': 'Открыть приглашение',
      'invitation.overline': 'ОСОБОЕ ПРИГЛАШЕНИЕ ДЛЯ ВАС',
      'invitation.heading': 'ДОРОГИЕ ГОСТИ!',
      'invitation.body':
        'Один день в этом году будет для нас особенным, и мы хотим провести его в кругу близких и друзей. С большим удовольствием приглашаем Вас на знаменательный праздник — <strong>нашу свадьбу!</strong>',
      'invitation.dateSub': '6 НОЯБРЯ 2027',
      'gallery.overline': 'ПЕРСОНАЛЬНАЯ СВАДЕБНАЯ ФОТОСЕССИЯ',
      'gallery.heading': 'НЕВЕСТА · ASEL',
      'gallery.filterLabel': 'Стиль просмотра:',
      'gallery.colorMode': 'Оригинал (Цвет)',
      'gallery.bwMode': 'Монохром (Ч/Б)',
      'gallery.slide1Title': 'Вечерний свет и кружевная фата',
      'gallery.slide2Title': 'Классический силуэт свадебного платья',
      'gallery.slide3Title': 'Нежность и сияние',
      'gallery.slide4Title': 'Вневременная монохромная классика',
      'countdown.overline': 'ДО НАШЕГО ПРАЗДНИКА',
      'countdown.heading': 'ДО ВСТРЕЧИ ОСТАЛОСЬ',
      'countdown.days': 'дней',
      'countdown.hours': 'часов',
      'countdown.minutes': 'минут',
      'countdown.seconds': 'секунд',
      'calendar.overline': 'СОХРАНИТЕ ЭТУ ДАТУ',
      'calendar.monthTitle': 'Ноябрь 2027',
      'calendar.thu': 'Чт',
      'calendar.fri': 'Пт',
      'calendar.sat': 'Сб',
      'calendar.sun': 'Вс',
      'calendar.mon': 'Пн',
      'calendar.badge': '6 ноября 2027 · Суббота · 17:00',
      'calendar.addBtn': 'ДОБАВИТЬ В КАЛЕНДАРЬ +',
      'program.heading': 'ПРОГРАММА ДНЯ',
      'program.item1': 'Сбор гостей · Welcome-фуршет',
      'program.item2': 'Торжественная регистрация брака',
      'program.item3': 'Фотосессия с молодожёнами. Свободное время',
      'program.item4': 'Праздничный свадебный банкет',
      'venue.overline': 'МЕСТО ТОРЖЕСТВА',
      'venue.name': 'Банкетный зал «Улуу Тоо»',
      'venue.address': 'г. Бишкек, ул. Сухэ-Батора, 5 (Uluu Too Banquet Hall)',
      'venue.directionsChip': 'Как добраться · Google Maps',
      'venue.openMapBtn': 'ПОСМОТРЕТЬ НА КАРТЕ',
      'dresscode.overline': 'ЦВЕТА И СТИЛЬ НАШЕГО ПРАЗДНИКА',
      'dresscode.men': 'Для мужчин уместным будет классический костюм.',
      'dresscode.women': 'А милых дам просим выбрать вечерние наряды и избегать белого цвета.',
      'dresscode.color1': 'Чёрный',
      'dresscode.color2': 'Графит',
      'dresscode.color3': 'Шампань',
      'dresscode.color4': 'Кремовый',
      'rsvp.heading': 'АНКЕТА ГОСТЯ',
      'rsvp.subtitle': 'Нам очень важно ваше присутствие, пожалуйста, заполните анкету ниже',
      'rsvp.nameLabel': 'Ваше имя и фамилия',
      'rsvp.nameHint': 'если будете с парой / семьёй, укажите все имена',
      'rsvp.namePlaceholder': 'Асанов Тилек, Асанова Айжан',
      'rsvp.attendanceLegend': 'Сможете ли Вы присутствовать на торжестве?',
      'rsvp.attendYes': 'Да, с удовольствием',
      'rsvp.attendNo': 'К сожалению, не получится',
      'rsvp.submitBtn': 'Ответить',
      'rsvp.successYes': 'Спасибо, {name}! Ваш ответ сохранён — будем с нетерпением ждать встречи 6 ноября 2027!',
      'rsvp.successNo': 'Спасибо за ответ, {name}! Нам будет Вас не хватать.',
      'guestbook.overline': 'СЛОВА ОТ ВСЕГО СЕРДЦА',
      'guestbook.heading': 'ОСТАВЬТЕ СВОИ ПОЖЕЛАНИЯ',
      'guestbook.note': 'Каждое тёплое слово — дорогая память для Айбека и Асель.',
      'guestbook.authorLabel': 'Ваше имя',
      'guestbook.authorPlaceholder': 'Введите ваше имя',
      'guestbook.messageLabel': 'Ваше пожелание',
      'guestbook.messagePlaceholder': 'Тёплые слова и благословения молодожёнам…',
      'guestbook.disclaimer': 'Ваше пожелание будет видно всем гостям в ленте ниже.',
      'guestbook.submitBtn': 'ОТПРАВИТЬ ПОЖЕЛАНИЕ',
      'guestbook.counterPrefix': 'ПОЖЕЛАНИЯ',
      'share.overline': 'ПРИГЛАСИТЕЛЬНЫЙ ОНЛАЙН',
      'share.heading': 'ПОДЕЛИТЬСЯ ПРИГЛАШЕНИЕМ',
      'share.tabCover': 'Обложка',
      'share.tabInvite': 'Приглашение',
      'share.saveImage': 'Сохранить фото ↓',
      'share.copyLink': 'Скопировать ссылку',
      'share.copied': 'Ссылка скопирована ✓',
      'footer.heading': 'БУДЕМ РАДЫ ВИДЕТЬ ВАС!',
      'footer.backToTop': 'В НАЧАЛО ↑'
    },
    kg: {
      'envelope.tagline': 'ҮЙЛӨНҮҮ ТОЮНА ЧАКЫРУУ · 06 · 11 · 2027',
      'envelope.subtitle': 'Расмий электрондук чакыруу',
      'envelope.cta': 'Чакырууну ачуу үчүн басыңыз',
      'audio.play': 'Музыканы ойнотуу',
      'audio.pause': 'Музыканы өчүрүү',
      'hero.modeBW': 'Ак-кара стиль',
      'hero.modeColor': 'Түстүү',
      'hero.monthShort': 'НОЯ',
      'hero.bottomTag': 'БИЗДИН ТОЙ',
      'hero.scrollText': 'Чакырууну окуу',
      'invitation.overline': 'СИЗ ҮЧҮН АТАЙЫН ЧАКЫРУУ',
      'invitation.heading': 'УРМАТТУУ КОНОКТОР!',
      'invitation.body':
        'Жашообуздун эң кубанычтуу жана өзгөчө күнүн сиздер менен бирге бөлүшкүбүз келет. Сиздерди Айбек менен Аселдин <strong>үйлөнүү үлпөт тоюна</strong> арналган салтанатка чын жүрөктөн чакырабыз!',
      'invitation.dateSub': '6 НОЯБРЬ 2027',
      'gallery.overline': 'ЖЕКЕ ҮЛПӨТ ФОТОСЕССИЯСЫ',
      'gallery.heading': 'КОЛ КАРМАШКАН ЖАШТАР · ASEL',
      'gallery.filterLabel': 'Көрүү стили:',
      'gallery.colorMode': 'Түпнуска (Түстүү)',
      'gallery.bwMode': 'Монохром (Ак-кара)',
      'gallery.slide1Title': 'Кечки нур жана назик үлпөт жоолугу',
      'gallery.slide2Title': 'Ак үлпөт көйнөгүнүн классикалык элеси',
      'gallery.slide3Title': 'Назиктик жана сулуулук',
      'gallery.slide4Title': 'Классикалык ак-кара портрет',
      'countdown.overline': 'ТОЙ КҮНҮНӨ ЧЕЙИН',
      'countdown.heading': 'ЖОЛУГУШУУГА КАЛГАН УБАКЫТ',
      'countdown.days': 'күн',
      'countdown.hours': 'саат',
      'countdown.minutes': 'мүнөт',
      'countdown.seconds': 'секунд',
      'calendar.overline': 'БЕЛГИЛЕП АЛЫҢЫЗ',
      'calendar.monthTitle': 'Ноябрь 2027',
      'calendar.thu': 'Бш',
      'calendar.fri': 'Жм',
      'calendar.sat': 'Иш',
      'calendar.sun': 'Жк',
      'calendar.mon': 'Дш',
      'calendar.badge': '6 ноябрь 2027 · Ишемби · 17:00',
      'calendar.addBtn': 'КАЛЕНДАРГА КОШУУ +',
      'program.heading': 'ТОЙ ПРОГРАММАСЫ',
      'program.item1': 'Конокторду тосуп алуу · Welcome-фуршет',
      'program.item2': 'Нике кыюу аземи',
      'program.item3': 'Эстеликке сүрөткө түшүү. Эркин убакыт',
      'program.item4': 'Майрамдык банкеттин башталышы',
      'venue.overline': 'ТОЙ ӨТҮҮЧҮ ЖАЙ',
      'venue.name': '«Улуу Тоо» банкет залы',
      'venue.address': 'Бишкек ш., Сухэ-Батор көчөсү, 5 (Uluu Too Banquet Hall)',
      'venue.directionsChip': 'Багыт алуу · Google Maps',
      'venue.openMapBtn': 'КАРТАДАН КӨРҮҮ',
      'dresscode.overline': 'ТОЙДУН СТИЛИ ЖАНА ТҮСТӨРҮ',
      'dresscode.men': 'Мырзалар үчүн классикалык костюм кийүү ылайыктуу.',
      'dresscode.women': 'Айымдардан кечки кооз көйнөктөрдү тандап, ак түстөн алыс болууну суранабыз.',
      'dresscode.color1': 'Кара',
      'dresscode.color2': 'Графит',
      'dresscode.color3': 'Шампань',
      'dresscode.color4': 'Крем түсү',
      'rsvp.heading': 'КОНОКТУН АНКЕТАСЫ',
      'rsvp.subtitle': 'Сиздин келишиңиз биз үчүн абдан маанилүү, төмөнкү анкетаны толтуруп коюуңузду суранабыз',
      'rsvp.nameLabel': 'Аты-жөнүңүз',
      'rsvp.nameHint': 'жубайыңыз же үй-бүлөңүз менен келсеңиз, баарынын атын жазыңыз',
      'rsvp.namePlaceholder': 'Асанов Тилек, Асанова Айжан',
      'rsvp.attendanceLegend': 'Салтанатка келе аласызбы?',
      'rsvp.attendYes': 'Ооба, кубаныч менен барам',
      'rsvp.attendNo': 'Тилекке каршы, бара албайм',
      'rsvp.submitBtn': 'Жооп берүү',
      'rsvp.successYes': 'Рахмат, {name}! Жообуңуз сакталды — 2027-жылдын 6-ноябрында сизди чыдамсыздык менен күтөбүз!',
      'rsvp.successNo': 'Жообуңуз үчүн рахмат, {name}!',
      'guestbook.overline': 'АК ТИЛЕК ЖАНА БАТА',
      'guestbook.heading': 'КААЛОО-ТИЛЕГИҢИЗДИ КАЛТЫРЫҢЫЗ',
      'guestbook.note': 'Ар бир жылуу сөз — Айбек менен Асель үчүн өзгөчө баалуу.',
      'guestbook.authorLabel': 'Сиздин атыңыз',
      'guestbook.authorPlaceholder': 'Атыңызды жазыңыз',
      'guestbook.messageLabel': 'Каалоо-тилегиңиз',
      'guestbook.messagePlaceholder': 'Жүрөктөн чыккан жылуу сөздөрүңүз…',
      'guestbook.disclaimer': 'Сиздин каалооңузду бардык коноктор көрө алышат.',
      'guestbook.submitBtn': 'ТИЛЕК КАЛТЫРУУ',
      'guestbook.counterPrefix': 'ТИЛЕКТЕР',
      'share.overline': 'ОНЛАЙН ЧАКЫРУУ',
      'share.heading': 'ЧАКЫРУУНУ БӨЛҮШҮҮ',
      'share.tabCover': 'Мукаба',
      'share.tabInvite': 'Чакыруу',
      'share.saveImage': 'Сүрөттү сактоо ↓',
      'share.copyLink': 'Шилтемени көчүрүү',
      'share.copied': 'Шилтеме көчүрүлдү ✓',
      'footer.heading': 'СИЗДЕРДИ КУБАНЫЧ МЕНЕН КҮТӨБҮЗ!',
      'footer.backToTop': 'БАШЫНА КАЙТУУ ↑'
    },
    en: {
      'envelope.tagline': 'WEDDING INVITATION · 06 · 11 · 2027',
      'envelope.subtitle': 'Official Digital Invitation',
      'envelope.cta': 'Click to open invitation',
      'audio.play': 'Play music',
      'audio.pause': 'Pause music',
      'hero.modeBW': 'B&W Editorial',
      'hero.modeColor': 'Full Color',
      'hero.monthShort': 'NOV',
      'hero.bottomTag': 'OUR WEDDING',
      'hero.scrollText': 'Read the invitation',
      'invitation.overline': 'A SPECIAL INVITATION FOR YOU',
      'invitation.heading': 'DEAR GUESTS!',
      'invitation.body':
        'One day this year will be truly special for us, and we want to spend it surrounded by our closest family and friends. With great joy, we invite you to celebrate <strong>our wedding!</strong>',
      'invitation.dateSub': 'NOVEMBER 6, 2027',
      'gallery.overline': 'PERSONALIZED BRIDAL PHOTOSHOOT',
      'gallery.heading': 'THE BRIDE · ASEL',
      'gallery.filterLabel': 'View style:',
      'gallery.colorMode': 'Original (Color)',
      'gallery.bwMode': 'Monochrome (B&W)',
      'gallery.slide1Title': 'Golden Hour & Cathedral Veil',
      'gallery.slide2Title': 'Timeless Couture Gown Silhouette',
      'gallery.slide3Title': 'Grace & Bridal Radiance',
      'gallery.slide4Title': 'Fine-Art Monochrome Editorial',
      'countdown.overline': 'COUNTING DOWN TO OUR SPECIAL DAY',
      'countdown.heading': 'UNTIL WE CELEBRATE TOGETHER',
      'countdown.days': 'days',
      'countdown.hours': 'hours',
      'countdown.minutes': 'minutes',
      'countdown.seconds': 'seconds',
      'calendar.overline': 'SAVE THE DATE',
      'calendar.monthTitle': 'November 2027',
      'calendar.thu': 'Thu',
      'calendar.fri': 'Fri',
      'calendar.sat': 'Sat',
      'calendar.sun': 'Sun',
      'calendar.mon': 'Mon',
      'calendar.badge': '6 November 2027 · Saturday · 17:00',
      'calendar.addBtn': 'ADD TO CALENDAR +',
      'program.heading': 'WEDDING PROGRAM',
      'program.item1': 'Guest Arrival & Welcome Reception',
      'program.item2': 'Marriage Ceremony',
      'program.item3': 'Bridal & Guest Photoshoot',
      'program.item4': 'Grand Wedding Banquet',
      'venue.overline': 'THE VENUE',
      'venue.name': 'Uluu Too Banquet Hall',
      'venue.address': '5 Sukhe-Bator St, Bishkek («Улуу Тоо»)',
      'venue.directionsChip': 'Get Directions · Google Maps',
      'venue.openMapBtn': 'VIEW ON MAP',
      'dresscode.overline': 'OUR CELEBRATION PALETTE',
      'dresscode.men': 'Classic suits or black-tie attire are kindly requested for gentlemen.',
      'dresscode.women': 'We kindly ask ladies to choose evening gowns and reserve white for the bride.',
      'dresscode.color1': 'Black',
      'dresscode.color2': 'Charcoal',
      'dresscode.color3': 'Champagne',
      'dresscode.color4': 'Ivory',
      'rsvp.heading': 'GUEST RSVP',
      'rsvp.subtitle': 'Your presence means the world to us. Please confirm your attendance below:',
      'rsvp.nameLabel': 'Your Full Name',
      'rsvp.nameHint': 'if attending as a couple or family, please list all names',
      'rsvp.namePlaceholder': 'Tilek Asanov, Aizhan Asanova',
      'rsvp.attendanceLegend': 'Will you be able to join our celebration?',
      'rsvp.attendYes': 'Yes, with pleasure',
      'rsvp.attendNo': 'Regretfully, unable to attend',
      'rsvp.submitBtn': 'Submit RSVP',
      'rsvp.successYes': 'Thank you, {name}! Your RSVP has been saved — we look forward to celebrating with you on November 6, 2027!',
      'rsvp.successNo': 'Thank you for letting us know, {name}! You will be warmly missed.',
      'guestbook.overline': 'WORDS FROM THE HEART',
      'guestbook.heading': 'LEAVE YOUR WARM WISHES',
      'guestbook.note': 'Every kind word is a precious memory for Aybek & Asel.',
      'guestbook.authorLabel': 'Your Name',
      'guestbook.authorPlaceholder': 'Enter your name',
      'guestbook.messageLabel': 'Your Wish',
      'guestbook.messagePlaceholder': 'Write your heartfelt wishes for the couple…',
      'guestbook.disclaimer': 'Your wish will be visible to all guests in the feed below.',
      'guestbook.submitBtn': 'SEND YOUR WISH',
      'guestbook.counterPrefix': 'WISHES',
      'share.overline': 'DIGITAL INVITATION',
      'share.heading': 'SHARE THE INVITATION',
      'share.tabCover': 'Cover',
      'share.tabInvite': 'Invitation',
      'share.saveImage': 'Save Image ↓',
      'share.copyLink': 'Copy Link',
      'share.copied': 'Link Copied ✓',
      'footer.heading': 'WE LOOK FORWARD TO SEEING YOU!',
      'footer.backToTop': 'BACK TO TOP ↑'
    }
  };

  let currentLang = 'ru';

  function applyLanguage(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const dict = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    updateAudioButtonLabel();
    renderCurrentWish();
  }

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  // =========================================================================
  // 2. BACKGROUND MUSIC PLAYER (Мирбек Атабеков — Күндөр жаңырат)
  // =========================================================================
  const bgMusic = document.getElementById('bg-music');
  let isPlayingAudio = false;

  if (bgMusic) {
    bgMusic.volume = 0.75;
    bgMusic.addEventListener('play', () => {
      isPlayingAudio = true;
      updateAudioButtonLabel();
    });
    bgMusic.addEventListener('pause', () => {
      isPlayingAudio = false;
      updateAudioButtonLabel();
    });
  }

  function startMusic() {
    if (!bgMusic) return;
    const playPromise = bgMusic.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isPlayingAudio = true;
          updateAudioButtonLabel();
        })
        .catch((err) => {
          console.warn('Audio playback waiting for user gesture:', err);
        });
    }
  }

  function stopMusic() {
    if (!bgMusic) return;
    bgMusic.pause();
    isPlayingAudio = false;
    updateAudioButtonLabel();
  }

  function updateAudioButtonLabel() {
    const audioBtn = document.getElementById('audio-toggle-btn');
    if (!audioBtn) return;
    const labelEl = audioBtn.querySelector('.audio-label');
    audioBtn.classList.toggle('is-playing', isPlayingAudio);
    if (labelEl) {
      labelEl.textContent = isPlayingAudio
        ? I18N[currentLang]['audio.pause']
        : I18N[currentLang]['audio.play'];
    }
  }

  const audioToggleBtn = document.getElementById('audio-toggle-btn');
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      if (isPlayingAudio) {
        stopMusic();
      } else {
        startMusic();
      }
    });
  }

  // =========================================================================
  // 3. ENVELOPE OPENING CEREMONY
  // =========================================================================
  const envelopeOverlay = document.getElementById('envelope-overlay');
  const openInvitationBtn = document.getElementById('open-invitation-btn');

  if (envelopeOverlay && openInvitationBtn) {
    document.body.classList.add('envelope-locked');
    openInvitationBtn.addEventListener('click', () => {
      envelopeOverlay.classList.add('is-opened');
      document.body.classList.remove('envelope-locked');
      startMusic();
    });
  }

  // =========================================================================
  // 4. HERO PHOTO COLOR / B&W EDITORIAL MODE SWITCHER
  // =========================================================================
  const heroMainPhoto = document.getElementById('hero-main-photo');
  document.querySelectorAll('[data-hero-mode]').forEach((chip) => {
    chip.addEventListener('click', () => {
      const mode = chip.getAttribute('data-hero-mode');
      document.querySelectorAll('[data-hero-mode]').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      if (heroMainPhoto) {
        heroMainPhoto.classList.toggle('bw-editorial-img', mode === 'bw');
      }
    });
  });

  // =========================================================================
  // 5. BRIDAL PHOTOSHOOT GALLERY CAROUSEL (#gallery)
  // =========================================================================
  const slides = Array.from(document.querySelectorAll('#gallery-track .carousel-slide'));
  const dots = Array.from(document.querySelectorAll('#gallery-dots .dot'));
  const thumbs = Array.from(document.querySelectorAll('.gallery-thumbs .thumb-btn'));
  const counterEl = document.getElementById('gallery-counter');
  let currentSlide = 0;

  function goToSlide(index) {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('active', i === currentSlide));
    dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
    thumbs.forEach((t, i) => t.classList.toggle('active', i === currentSlide));
    if (counterEl) {
      counterEl.textContent = `${currentSlide + 1} / ${slides.length}`;
    }
  }

  const prevBtn = document.getElementById('gallery-prev');
  const nextBtn = document.getElementById('gallery-next');
  if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

  dots.forEach((dot) => {
    dot.addEventListener('click', () => goToSlide(Number(dot.dataset.slide)));
  });

  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => goToSlide(Number(thumb.dataset.slide)));
  });

  // Touch swipe on gallery
  const galleryViewport = document.getElementById('gallery-viewport');
  let touchStartX = 0;
  if (galleryViewport) {
    galleryViewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    galleryViewport.addEventListener('touchend', (e) => {
      const diff = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(diff) > 40) {
        goToSlide(diff < 0 ? currentSlide + 1 : currentSlide - 1);
      }
    }, { passive: true });
  }

  // Gallery Color vs Monochrome Filter
  const galleryCard = document.querySelector('.gallery-card');
  document.querySelectorAll('[data-gallery-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-gallery-filter');
      document.querySelectorAll('[data-gallery-filter]').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      if (galleryCard) {
        galleryCard.classList.toggle('gallery-bw-mode', mode === 'bw');
      }
    });
  });

  // =========================================================================
  // 6. COUNTDOWN TIMER TO NOVEMBER 6, 2027 17:00 (+06:00 BISHKEK)
  // =========================================================================
  const weddingTargetTime = new Date('2027-11-06T17:00:00+06:00').getTime();
  const cdDays = document.getElementById('cd-days');
  const cdHours = document.getElementById('cd-hours');
  const cdMinutes = document.getElementById('cd-minutes');
  const cdSeconds = document.getElementById('cd-seconds');

  function updateCountdown() {
    const now = Date.now();
    const diff = Math.max(0, weddingTargetTime - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (cdDays) cdDays.textContent = String(days);
    if (cdHours) cdHours.textContent = String(hours).padStart(2, '0');
    if (cdMinutes) cdMinutes.textContent = String(minutes).padStart(2, '0');
    if (cdSeconds) cdSeconds.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // =========================================================================
  // 7. ADD TO CALENDAR (.ICS EXPORT)
  // =========================================================================
  const downloadIcsBtn = document.getElementById('download-ics-btn');
  if (downloadIcsBtn) {
    downloadIcsBtn.addEventListener('click', () => {
      const icsLines = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Aybek & Asel//Wedding Invitation//RU',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VEVENT',
        'UID:aybek-asel-20271106@wedding.kg',
        'SUMMARY:Aybek & Asel — Свадьба (Wedding)',
        'DTSTART:20271106T110000Z',
        'DTEND:20271106T170000Z',
        'LOCATION:Банкетный зал «Улуу Тоо» (Uluu Too Banquet Hall)\\, г. Бишкек\\, ул. Сухэ-Батора\\, 5',
        'DESCRIPTION:Приглашаем Вас на свадьбу Айбека и Асель! Карта: https://maps.app.goo.gl/ZCR7aL3gAXBYKn867',
        'URL:https://maps.app.goo.gl/ZCR7aL3gAXBYKn867',
        'END:VEVENT',
        'END:VCALENDAR'
      ];
      const blob = new Blob([icsLines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'aybek-asel-wedding-2027.ics';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  // =========================================================================
  // 8. FIREBASE CLOUD FIRESTORE SYNC HELPERS + GUEST RSVP (#rsvp)
  // =========================================================================
  const fbConfig = window.FIREBASE_CONFIG || {};

  async function saveToFirestore(collectionName, fieldsObj) {
    if (!fbConfig.projectId) return null;
    const baseUrl = `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(fbConfig.projectId)}/databases/(default)/documents/${encodeURIComponent(collectionName)}`;
    const url = fbConfig.apiKey ? `${baseUrl}?key=${encodeURIComponent(fbConfig.apiKey)}` : baseUrl;

    const firestoreFields = {};
    Object.entries(fieldsObj).forEach(([k, v]) => {
      firestoreFields[k] = { stringValue: String(v) };
    });

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields: firestoreFields })
      });
      if (!res.ok) throw new Error(`Firestore HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('Firestore save fallback to localStorage:', err);
      return null;
    }
  }

  async function loadWishesFromFirestore() {
    if (!fbConfig.projectId) return;
    const col = fbConfig.wishesCollection || 'aybek_asel_wishes';
    const baseUrl = `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(fbConfig.projectId)}/databases/(default)/documents/${encodeURIComponent(col)}?pageSize=50`;
    const url = fbConfig.apiKey ? `${baseUrl}&key=${encodeURIComponent(fbConfig.apiKey)}` : baseUrl;

    try {
      const res = await fetch(url);
      if (!res.ok) return;
      const data = await res.json();
      if (!Array.isArray(data.documents)) return;
      const remoteWishes = data.documents
        .map((doc) => {
          const f = doc.fields || {};
          return {
            author: f.author?.stringValue || 'Гость',
            text: f.text?.stringValue || '',
            date: f.date?.stringValue || '',
            createdAt: f.createdAt?.stringValue || doc.createTime || ''
          };
        })
        .filter((w) => w.text)
        .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));

      if (remoteWishes.length) {
        wishesList = [...remoteWishes, ...DEFAULT_WISHES];
        currentWishIdx = 0;
        renderCurrentWish();
      }
    } catch (err) {
      console.warn('Firestore wishes fetch skipped:', err);
    }
  }

  const rsvpForm = document.getElementById('rsvp-form');
  const rsvpNameInput = document.getElementById('rsvp-name');
  const rsvpFeedback = document.getElementById('rsvp-feedback');

  if (rsvpForm) {
    rsvpForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const guestName = (rsvpNameInput.value || '').trim();
      if (!guestName) {
        rsvpNameInput.focus();
        return;
      }
      const attendance = rsvpForm.querySelector('input[name="attendance"]:checked')?.value || 'yes';
      const record = {
        name: guestName,
        attendance,
        submittedAt: new Date().toISOString()
      };

      try {
        const existing = JSON.parse(localStorage.getItem('aybek_asel_rsvp') || '[]');
        existing.push(record);
        localStorage.setItem('aybek_asel_rsvp', JSON.stringify(existing));
      } catch (_) {}

      await saveToFirestore(fbConfig.rsvpCollection || 'aybek_asel_rsvp', record);

      const template = attendance === 'yes'
        ? I18N[currentLang]['rsvp.successYes']
        : I18N[currentLang]['rsvp.successNo'];

      if (rsvpFeedback) {
        rsvpFeedback.textContent = template.replace('{name}', guestName);
        rsvpFeedback.hidden = false;
      }
      rsvpForm.reset();
    });
  }

  // =========================================================================
  // 9. WISHES / GUESTBOOK SYSTEM (#guestbook)
  // =========================================================================
  const DEFAULT_WISHES = [
    {
      author: 'Семья Асановых',
      date: 'Ноябрь 2026',
      text: 'Дорогие Айбек и Асель! Пусть ваша семейная жизнь будет наполнена гармонией, нежностью и бесконечной любовью. С нетерпением ждём 6 ноября 2027!'
    },
    {
      author: 'Бакыт и Гульнара',
      date: 'Ноябрь 2026',
      text: 'Айбек жана Асель, кармашкан колуңар эч качан үзүлбөсүн! Кудайым сиздерге ынтымак, береке жана узун өмүр насип этсин. Ак жолтой үй-бүлө болгула!'
    },
    {
      author: 'Айгерим (подруга невесты)',
      date: 'Ноябрь 2026',
      text: 'Аселя, ты невероятно красивая невеста! Пусть каждый ваш день с Айбеком будет таким же светлым и счастливым, как эта история любви.'
    },
    {
      author: 'Нурлан и Зарина',
      date: 'Ноябрь 2026',
      text: 'От всей души поздравляем вас! Желаем, чтобы ваш дом всегда был полной чашей, а в сердцах жила весна.'
    }
  ];

  let wishesList = [...DEFAULT_WISHES];
  try {
    const savedWishes = JSON.parse(localStorage.getItem('aybek_asel_wishes') || 'null');
    if (Array.isArray(savedWishes) && savedWishes.length) {
      wishesList = [...savedWishes, ...DEFAULT_WISHES];
    }
  } catch (_) {}

  let currentWishIdx = 0;

  const wishQuoteText = document.getElementById('wish-quote-text');
  const wishQuoteAuthor = document.getElementById('wish-quote-author');
  const wishQuoteDate = document.getElementById('wish-quote-date');
  const wishesCounter = document.getElementById('wishes-counter');

  function renderCurrentWish() {
    if (!wishesList.length) return;
    currentWishIdx = (currentWishIdx + wishesList.length) % wishesList.length;
    const item = wishesList[currentWishIdx];
    if (wishQuoteText) wishQuoteText.textContent = `«${item.text}»`;
    if (wishQuoteAuthor) wishQuoteAuthor.textContent = item.author;
    if (wishQuoteDate) wishQuoteDate.textContent = item.date;
    if (wishesCounter) {
      const prefix = I18N[currentLang]['guestbook.counterPrefix'] || 'ПОЖЕЛАНИЯ';
      wishesCounter.textContent = `${prefix} · ${currentWishIdx + 1} / ${wishesList.length}`;
    }
  }

  renderCurrentWish();
  loadWishesFromFirestore();

  const wishPrevBtn = document.getElementById('wish-prev-btn');
  const wishNextBtn = document.getElementById('wish-next-btn');
  if (wishPrevBtn) {
    wishPrevBtn.addEventListener('click', () => {
      currentWishIdx--;
      renderCurrentWish();
    });
  }
  if (wishNextBtn) {
    wishNextBtn.addEventListener('click', () => {
      currentWishIdx++;
      renderCurrentWish();
    });
  }

  const wishForm = document.getElementById('wish-form');
  const wishAuthorInput = document.getElementById('wish-author');
  const wishMessageInput = document.getElementById('wish-message');
  const wishCharCounter = document.getElementById('wish-char-counter');

  if (wishMessageInput && wishCharCounter) {
    wishMessageInput.addEventListener('input', () => {
      wishCharCounter.textContent = `${wishMessageInput.value.length} / 600`;
    });
  }

  if (wishForm) {
    wishForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const author = (wishAuthorInput.value || '').trim();
      const text = (wishMessageInput.value || '').trim();
      if (!author || !text) return;

      const newWish = {
        author,
        text,
        date: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }),
        createdAt: new Date().toISOString()
      };

      wishesList.unshift(newWish);
      currentWishIdx = 0;
      renderCurrentWish();

      try {
        const custom = JSON.parse(localStorage.getItem('aybek_asel_wishes') || '[]');
        custom.unshift(newWish);
        localStorage.setItem('aybek_asel_wishes', JSON.stringify(custom));
      } catch (_) {}

      await saveToFirestore(fbConfig.wishesCollection || 'aybek_asel_wishes', newWish);

      wishForm.reset();
      if (wishCharCounter) wishCharCounter.textContent = '0 / 600';
    });
  }

  // =========================================================================
  // 10. SOCIAL SHARING & STORY IMAGE DOWNLOAD (#share)
  // =========================================================================
  const sharePreviewImg = document.getElementById('share-preview-img');
  const spVenueLine = document.getElementById('sp-venue-line');

  document.querySelectorAll('.share-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.share-tab').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const mode = tab.getAttribute('data-card-mode');
      if (sharePreviewImg) {
        sharePreviewImg.src = mode === 'cover' ? 'photos/asel-bw-editorial.jpg' : 'photos/asel-hero.jpg';
      }
      if (spVenueLine) {
        spVenueLine.textContent = mode === 'cover'
          ? 'Банкетный зал «Улуу Тоо» · Бишкек'
          : '6 ноября 2027 · ул. Сухэ-Батора, 5';
      }
    });
  });

  const shareText = 'Приглашаем Вас на свадьбу Айбека и Асель! 6 ноября 2027 · Банкетный зал «Улуу Тоо» (г. Бишкек, ул. Сухэ-Батора, 5).';
  const shareUrl = window.location.href;

  const waBtn = document.getElementById('share-whatsapp');
  const tgBtn = document.getElementById('share-telegram');
  if (waBtn) {
    waBtn.href = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
  }
  if (tgBtn) {
    tgBtn.href = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
  }

  const copyLinkBtn = document.getElementById('copy-link-btn');
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(shareUrl);
        const span = copyLinkBtn.querySelector('span');
        if (span) {
          const prev = span.textContent;
          span.textContent = I18N[currentLang]['share.copied'];
          setTimeout(() => { span.textContent = prev; }, 2200);
        }
      } catch (_) {}
    });
  }

  const downloadStoryBtn = document.getElementById('download-story-btn');
  if (downloadStoryBtn) {
    downloadStoryBtn.addEventListener('click', () => {
      const a = document.createElement('a');
      a.href = sharePreviewImg ? sharePreviewImg.src : 'photos/asel-hero.jpg';
      a.download = 'Aybek-Asel-Wedding-06-11-2027.jpg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }

  // =========================================================================
  // 11. SCROLL REVEAL OBSERVER
  // =========================================================================
  const revealItems = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealItems.forEach((el) => observer.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add('is-visible'));
  }
})();
