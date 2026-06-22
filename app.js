// FINAL: uvijek kreni od vrha stranice nakon refresh-a
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, 0);
});
'use strict';

(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const text = {
    bs: {
      navAbout: 'Klub',
      navRace: 'Gračanica 5K',
      navTraining: 'Treninzi',
      navMap: 'Mapa',
      navGallery: 'Galerija',
      navJoin: 'Prijava',
      navContact: 'Kontakt',
      joinNow: 'PRIJAVA',
      eyebrow: 'Trčanje • zdravlje • zajednica',
      heroTitle: 'Trči Gračanicom. Jačaj sebe. Budi dio ekipe.',
      heroText:
        'Naša želja je da promovišemo zdrav način života, uz istovremeno građenje zdravijeg i aktivnijeg društva.',
      seeRace: 'INFORMACIJE',
      apply: 'PRIJAVA',
      followers: 'pratilaca',
      events: 'događaja',
      routeKm: 'km ruta',
      aboutEyebrow: 'O klubu',
      aboutTitle: 'Klub za rekreativce, takmičare i sve koji žele krenuti.',
      aboutText:
        'ARK Gračanica promoviše zdrav život, zajedničke treninge i trkačke događaje u gradu. Fokus je na sigurnom napretku, motivaciji i dobroj atmosferi.',
      recreation: 'Rekreacija',
      raceTitle: 'Segment trke spreman za promociju i prijave',
      fiveText:
        'Idealna distanca za početnike i brze rekreativce. Ravna gradska ruta, jasne oznake i podrška volontera.',
      tenText: 'Za trkače koji žele duži izazov i tempo kontrolu kroz poznate gradske dionice.',
      communityTitle: 'Zajednica',
      communityText: 'Najvažniji dio događaja: ljudi, energija, navijanje i kilometri koji povezuju grad.',
      trainingEyebrow: 'Running program',
      trainingTitle: 'Korisni alati za trening',
      paceLabel: 'Pace kalkulator',
      timeLabel: 'Kalkulator vremena',
      tipTitle: 'Savjet dana:',
      mapTitle: 'Gračanica 5K ruta',
      mapText: 'Ruta naše trke 5K - 10K za trkače i rekreativce',
      routeCity: 'gradska ruta',
      routeSafe: 'označene tačke',
      openMap: 'Otvori mapu',
      galleryTitle: 'Fotografije i atmosfera',
      galleryText: 'Fotografije sa naših trka ',
      joinEyebrow: 'Prijava',
      joinTitle: 'Pošalji prijavu za trening ili trku',
      joinText:
        'Ovdje možete poslati prijavu za trku ili upit o održavanju našij treninga',
      send: 'Pošalji prijavu',
      exportBtn: 'Preuzmi CSV',
      contactText: 'Za treninge, događaje i saradnju kontaktiraj klub putem Facebook stranice.',
      faqText: 'Početnici su dobrodošli. Ponesi patike, vodu i dobru volju.',
      footerText: 'Naša želja je da promovišemo zdrav način života, uz istovremeno građenje zdravijeg i aktivnijeg društva. Svi su dobro došli, bez obzira na spol.',
      footerCats: 'Kategorije',
      footerContact: 'Kontakt',
      locationText: 'Gračanica, Bosna i Hercegovina',
      nameLabel: 'Ime i prezime',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefon',
      distanceLabel: 'Distanca',
      messageLabel: 'Poruka',
      namePh: 'Ime i prezime',
      emailPh: 'E-mail',
      phonePh: 'Telefon',
      messagePh: 'Poruka',
      trainingGroup: 'Trening grupa'
    },
    en: {
      navAbout: 'Club',
      navRace: 'Gračanica 5K',
      navTraining: 'Training',
      navMap: 'Map',
      navGallery: 'Gallery',
      navJoin: 'Join',
      navContact: 'Contact',
      joinNow: 'Join now',
      eyebrow: 'Running • health • community',
      heroTitle: 'Run through Gračanica. Build yourself. Join the team.',
      heroText:
        'Professional ARK Gračanica website with training programs, a 5K route map, registration and useful runner tools.',
      seeRace: 'View 5K',
      apply: 'Apply',
      followers: 'followers',
      events: 'events',
      routeKm: 'km route',
      aboutEyebrow: 'About',
      aboutTitle: 'A club for recreational runners, racers and beginners.',
      aboutText:
        'ARK Gračanica promotes a healthy lifestyle, group training and running events in the city with safe progress and strong community energy.',
      recreation: 'Recreation',
      raceTitle: 'Race segment ready for promotion and signups',
      fiveText: 'Perfect distance for beginners and fast recreational runners. City route, clear signs and volunteer support.',
      tenText: 'For runners who want a longer challenge and better pace control.',
      communityTitle: 'Community',
      communityText: 'The key part of every event: people, energy, cheering and kilometers that connect the city.',
      trainingEyebrow: 'Running program',
      trainingTitle: 'Useful training tools',
      paceLabel: 'Pace calculator',
      timeLabel: 'Time calculator',
      tipTitle: 'Daily tip:',
      mapTitle: 'Gračanica 5K route',
      mapText: 'Light SVG map keeps the page fast; the button opens Google Maps for details.',
      routeCity: 'city route',
      routeSafe: 'marked points',
      openMap: 'Open map',
      galleryTitle: 'Photos and atmosphere',
      galleryText: 'Optimized images, lazy loading and click lightbox.',
      joinEyebrow: 'Registration',
      joinTitle: 'Send a training or race application',
      joinText: 'Data is saved locally in the browser. For a public site it can be connected to Google Forms, Firebase or a backend.',
      send: 'Send application',
      exportBtn: 'Download CSV',
      contactText: 'For training, events and partnership contact the club via Facebook.',
      faqText: 'Beginners are welcome. Bring running shoes, water and good energy.',
      footerText: 'ARK Gračanica — running club, community and events.',
      footerCats: 'Categories',
      footerContact: 'Contact',
      locationText: 'Gračanica, BiH',
      nameLabel: 'Full name',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      distanceLabel: 'Distance',
      messageLabel: 'Message / goal',
      namePh: 'Full name',
      emailPh: 'Email',
      phonePh: 'Phone',
      messagePh: 'Message / goal',
      trainingGroup: 'Training group'
    }
  };

  let currentLang = localStorage.getItem('arkLang') || 'bs';

  function setLang(lang) {
    currentLang = text[lang] ? lang : 'bs';
    localStorage.setItem('arkLang', currentLang);
    document.documentElement.lang = currentLang;

    $$('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      const value = text[currentLang]?.[key];

      if (value) {
        el.textContent = value;
      }
    });

    $$('[data-i18n-placeholder]').forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      const value = text[currentLang]?.[key];

      if (value) {
        el.placeholder = value;
      }
    });
  }

  function formatNumber(value) {
    return Number(value).toLocaleString(currentLang === 'bs' ? 'bs-BA' : 'en-US');
  }

  function revealElements() {
    const elements = $$('.reveal');

    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('on'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    setTimeout(() => {
      elements.forEach((el) => el.classList.add('on'));
    }, 1800);
  }

  function animateNumbers() {
    const numbers = $$('.num');

    numbers.forEach((num) => {
      const target = Number(num.dataset.target || 0);
      const duration = 1200;
      const startTime = performance.now();

      num.classList.remove('loading');

      function tick(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(target * eased);

        num.textContent = formatNumber(value);

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          num.textContent = formatNumber(target);
          num.classList.add('done');
        }
      }

      requestAnimationFrame(tick);
    });
  }

  function initCounters() {
    const stats = $('.stats');

    if (!stats) {
      animateNumbers();
      return;
    }

    if (!('IntersectionObserver' in window)) {
      animateNumbers();
      return;
    }

    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            animateNumbers();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(stats);

    setTimeout(() => {
      if (!started) {
        started = true;
        animateNumbers();
      }
    }, 1400);
  }

  function updateCountdown() {
    const daysEl = $('#cdDays');
    const hoursEl = $('#cdHours');
    const minutesEl = $('#cdMinutes');
    const secondsEl = $('#cdSeconds');
    const box = $('#raceCountdown');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl || !box) return;

    const target = new Date('2026-09-20T09:00:00+02:00');
    const diff = target - new Date();

    if (diff <= 0) {
      box.innerHTML = '<strong class="race-live">🏁 Trka je počela!</strong>';
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor(diff / 3600000) % 24;
    const minutes = Math.floor(diff / 60000) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  function initCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  function formatTime(totalSeconds) {
    const total = Math.max(0, Math.round(totalSeconds));
    const hours = Math.floor(total / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = String(total % 60).padStart(2, '0');

    if (hours > 0) {
      return `${hours}:${String(minutes).padStart(2, '0')}:${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  function paceToSeconds(value) {
    const raw = String(value || '').trim().replace(',', ':');

    if (!raw) return 0;

    const parts = raw.split(':').map(Number);

    if (parts.length === 1) {
      return Math.max(0, parts[0] * 60);
    }

    return Math.max(0, (parts[0] || 0) * 60 + (parts[1] || 0));
  }

  function calcPace() {
    const km = Number($('#paceKm')?.value);
    const min = Number($('#paceMin')?.value);
    const result = $('#paceResult');

    if (!result) return;

    if (!km || !min || km <= 0 || min <= 0) {
      result.textContent = 'Unesi validne brojke';
      return;
    }

    result.textContent = `${formatTime((min * 60) / km)} min/km`;
  }

  function calcTime() {
    const km = Number($('#raceKm')?.value);
    const paceSeconds = paceToSeconds($('#racePace')?.value);
    const result = $('#timeResult');

    if (!result) return;

    if (!km || km <= 0 || !paceSeconds) {
      result.textContent = 'Unesi validan pace';
      return;
    }

    result.textContent = formatTime(km * paceSeconds);
  }

  function initCalculators() {
    $('#calcPace')?.addEventListener('click', calcPace);
    $('#calcTime')?.addEventListener('click', calcTime);

    ['input', 'change'].forEach((eventName) => {
      $('#paceKm')?.addEventListener(eventName, calcPace);
      $('#paceMin')?.addEventListener(eventName, calcPace);
      $('#raceKm')?.addEventListener(eventName, calcTime);
      $('#racePace')?.addEventListener(eventName, calcTime);
    });

    ['paceKm', 'paceMin', 'raceKm', 'racePace'].forEach((id) => {
      $('#' + id)?.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();

          if (id.startsWith('pace')) {
            calcPace();
          } else {
            calcTime();
          }
        }
      });
    });

    calcPace();
    calcTime();
  }

  function initHeader() {
    const header = $('#header');
    const progress = $('#progress');
    const toTop = $('.to-top');
    const nav = $('#nav');
    const menuBtn = $('#menuBtn');

    function onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

      header?.classList.toggle('scrolled', scrollTop > 18);

      if (progress) {
        progress.style.width = `${((scrollTop / max) * 100).toFixed(2)}%`;
      }

      toTop?.classList.toggle('show', scrollTop > 500);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    toTop?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    menuBtn?.addEventListener('click', () => {
      const open = !nav?.classList.contains('open');

      nav?.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.textContent = open ? '×' : '☰';
    });

    $$('#nav a').forEach((link) => {
      link.addEventListener('click', () => {
        nav?.classList.remove('open');

        if (menuBtn) {
          menuBtn.setAttribute('aria-expanded', 'false');
          menuBtn.textContent = '☰';
        }
      });
    });
  }

  function initSmoothAnchors() {
    $$('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');

        if (!href || href === '#') {
          event.preventDefault();
          return;
        }

        const target = $(href);

        if (!target) {
          event.preventDefault();
          return;
        }

        event.preventDefault();

        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        history.replaceState(null, '', href);
      });
    });
  }

  function initActiveNav() {
    const links = $$('#nav a[href^="#"]');
    const sections = links.map((link) => $(link.getAttribute('href'))).filter(Boolean);

    if (!links.length || !sections.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        links.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + visible.target.id);
        });
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0, 0.2, 0.45, 0.7]
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  function initTheme() {
    const themeBtn = $('#themeBtn');
    const savedTheme = localStorage.getItem('arkTheme') || 'dark';

    if (savedTheme === 'light') {
      document.body.classList.add('light');
    }

    function syncThemeButton() {
      const isLight = document.body.classList.contains('light');

      if (themeBtn) {
        themeBtn.setAttribute('aria-pressed', String(isLight));
        themeBtn.setAttribute('title', isLight ? 'Prebaci na tamnu temu' : 'Prebaci na svijetlu temu');
        themeBtn.setAttribute('aria-label', isLight ? 'Prebaci na tamnu temu' : 'Prebaci na svijetlu temu');
      }

      $('meta[name="theme-color"]')?.setAttribute('content', isLight ? '#f6fff9' : '#07110d');
    }

    themeBtn?.addEventListener('click', () => {
      document.body.classList.toggle('light');

      localStorage.setItem(
        'arkTheme',
        document.body.classList.contains('light') ? 'light' : 'dark'
      );

      syncThemeButton();
    });

    syncThemeButton();
  }

  function initLanguage() {
    const langSelect = $('#lang');

    if (!langSelect) return;

    langSelect.value = currentLang;
    setLang(currentLang);

    langSelect.addEventListener('change', (event) => {
      setLang(event.target.value);
      setTip();
      calcPace();
      calcTime();
    });
  }

  function setTip() {
    const tips = {
      bs: [
        'Zagrij se 10 minuta prije svakog bržeg treninga.',
        'Lagani kilometri grade bazu bolje nego stalno forsiranje.',
        'Poslije treninga popij vodu i uradi kratko istezanje.',
        'Za 5K treniraj tempo jednom sedmično.'
      ],
      en: [
        'Warm up for 10 minutes before every faster session.',
        'Easy kilometers build the base better than constant pushing.',
        'Drink water after training and stretch briefly.',
        'For 5K, train tempo once per week.'
      ]
    };

    const tipText = $('#tipText');

    if (tipText) {
      tipText.textContent = tips[currentLang][new Date().getDay() % tips[currentLang].length];
    }
  }

  function initForm() {
    const form = $('#joinForm');
    const msg = $('#formMsg');

    if (!form) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        if (msg) {
          msg.textContent =
            currentLang === 'en'
              ? 'Please fill required fields correctly.'
              : 'Popuni ispravno obavezna polja.';
          msg.classList.add('error');
          msg.classList.remove('success');
        }

        form.reportValidity();
        return;
      }

      const data = Object.fromEntries(new FormData(form));

      data.email = String(data.email || '').trim().toLowerCase();
      data.phone = String(data.phone || '').trim();
      data.date = new Date().toISOString();

      const applications = JSON.parse(localStorage.getItem('arkApplications') || '[]');
      const duplicate = applications.some(
        (item) => item.email === data.email && item.distance === data.distance
      );

      if (duplicate) {
        if (msg) {
          msg.textContent =
            currentLang === 'en'
              ? 'This application is already saved.'
              : 'Ova prijava je već sačuvana.';
          msg.classList.add('error');
          msg.classList.remove('success');
        }

        return;
      }

      applications.push(data);
      localStorage.setItem('arkApplications', JSON.stringify(applications));

      if (msg) {
        msg.textContent =
          currentLang === 'en'
            ? 'Application saved successfully.'
            : 'Prijava je uspješno sačuvana.';
        msg.classList.add('success');
        msg.classList.remove('error');
      }

      form.reset();
    });

    $('#exportData')?.addEventListener('click', () => {
      const rows = JSON.parse(localStorage.getItem('arkApplications') || '[]');

      if (!rows.length) {
        if (msg) {
          msg.textContent =
            currentLang === 'en'
              ? 'No saved applications yet.'
              : 'Još nema sačuvanih prijava.';
          msg.classList.add('error');
          msg.classList.remove('success');
        }

        return;
      }

      const keys = ['date', 'name', 'email', 'phone', 'distance', 'message'];
      const csv = [
        keys.join(','),
        ...rows.map((row) =>
          keys.map((key) => `"${String(row[key] || '').replaceAll('"', '""')}"`).join(',')
        )
      ].join('\n');

      const url = URL.createObjectURL(
        new Blob([csv], { type: 'text/csv;charset=utf-8' })
      );

      const link = document.createElement('a');

      link.href = url;
      link.download = 'ark-prijave.csv';
      link.click();

      URL.revokeObjectURL(url);
    });
  }

  function initLightbox() {
    const lightbox = $('#lightbox');
    const lightboxImg = lightbox ? $('img', lightbox) : null;
    const closeBtn = lightbox ? $('button', lightbox) : null;

    if (!lightbox || !lightboxImg) return;

    function closeLightbox() {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      lightboxImg.removeAttribute('src');
    }

    $$('.gallery img').forEach((img) => {
      img.tabIndex = 0;
      img.setAttribute('role', 'button');

      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || 'Uvećana fotografija';
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
      });

      img.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          img.click();
        }
      });
    });

    closeBtn?.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    });
  }

  function initFaq() {
    $$('.faq-stack details').forEach((item) => {
      const summary = $('summary', item);

      summary?.setAttribute('tabindex', '0');

      item.addEventListener('toggle', () => {
        if (!item.open) return;

        $$('.faq-stack details').forEach((other) => {
          if (other !== item) {
            other.open = false;
          }
        });
      });
    });
  }

  function initImages() {
    $$('img').forEach((img) => {
      if (!img.closest('.brand') && !img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  }

  function initFooter() {
    const year = $('#year');

    if (year) {
      year.textContent = '© 2026 ARK Gračanica. Sva prava zadržana.';
    }
  }

  function initHeroPointer() {
    const hero = $('.hero');

    if (!hero) return;

    hero.addEventListener(
      'pointermove',
      (event) => {
        const rect = hero.getBoundingClientRect();

        hero.style.setProperty('--mx', `${(((event.clientX - rect.left) / rect.width) * 100).toFixed(1)}%`);
        hero.style.setProperty('--my', `${(((event.clientY - rect.top) / rect.height) * 100).toFixed(1)}%`);
      },
      { passive: true }
    );
  }
function initHeaderTime() {
  const timeEl = document.getElementById('headerTime');

  if (!timeEl) return;

  function updateTime() {
    const now = new Date();

    timeEl.textContent = now.toLocaleTimeString('bs-BA', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  updateTime();
  setInterval(updateTime, 1000);
}

  function init() {
initHeaderTime();
    initLanguage();
    revealElements();
    initCounters();
    initCountdown();
    initCalculators();
    initHeader();
    initSmoothAnchors();
    initActiveNav();
    initTheme();
    setTip();
    initForm();
    initLightbox();
    initFaq();
    initImages();
    initFooter();
    initHeroPointer();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
// Premium skeleton loader
(() => {
  const loader = document.getElementById("siteLoader");

  const finishLoading = () => {
    document.body.classList.remove("page-loading");

    if (loader) {
      loader.setAttribute("aria-hidden", "true");

      window.setTimeout(() => {
        loader.remove();
      }, 650);
    }
  };

  window.addEventListener(
    "load",
    () => {
      window.setTimeout(finishLoading, 950);
    },
    { once: true }
  );

  // Failsafe ako neki asset zapne
  window.setTimeout(finishLoading, 8500);
})();
