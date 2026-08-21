// ===== ANIMATED COUNTERS =====
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const duration = 2000;
        const start = performance.now();
        function tick(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(target * eased).toLocaleString();
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// ===== METADATA BANNER =====
function initBanner() {
  const bannerEl = document.getElementById('bannerContent');
  if (!bannerEl || typeof metadataStats === 'undefined') return;

  const items = [
    { num: metadataStats.weeksExpected, lbl: 'Status' },
    { num: metadataStats.mouSigned, lbl: 'US–Iran MoU' },
    { num: metadataStats.militiaDeadline, lbl: 'Iraq Militia Disarmament' },
    { num: metadataStats.targetsStruck, lbl: 'Targets Struck' },
    { num: metadataStats.airSorties, lbl: 'Air Sorties' },
    { num: metadataStats.iranianShipsDestroyed, lbl: 'Ships Destroyed' },
    { num: metadataStats.launchersNeutralized, lbl: 'of ' + metadataStats.totalLaunchers + ' Launchers Neutralised' },
    { num: metadataStats.percentDestroyed, lbl: 'Iranian Launchers Gone' },
    { num: metadataStats.oilTankersAttacked, lbl: 'Oil Tankers Attacked' },
    { num: metadataStats.energyInfraDamage, lbl: 'Energy Infra. Damaged' },
    { num: metadataStats.energyFacilitiesHit, lbl: 'Energy Facilities Attacked' },
    { num: metadataStats.brentCrude, lbl: 'Brent Crude' },
    { num: metadataStats.iranDailyMissiles, lbl: 'Iranian Missiles' },
    { num: metadataStats.iranDailyDrones, lbl: 'Iranian Drones' },
    { num: metadataStats.clusterMunitionRate, lbl: 'Cluster Munitions to Israel' },
    { num: metadataStats.bahInterceptions, lbl: 'Bahrain Interceptions' },
    { num: metadataStats.uaeInterceptions, lbl: 'UAE Interceptions' },
    { num: metadataStats.jordanInterceptions, lbl: 'Jordan Interceptions' },
    { num: metadataStats.israelTotalInjuries, lbl: 'Israeli Injuries' },
    { num: metadataStats.warCasualties, lbl: 'Total Casualties' },
    { num: metadataStats.lebDeathToll, lbl: 'Lebanon Deaths' },
    { num: metadataStats.lebDisplaced, lbl: 'Displaced in Lebanon' },
    { num: metadataStats.oilExportDecline, lbl: 'Middle East Oil Exports' },
    { num: metadataStats.maritimeIncidents, lbl: 'Maritime Status' },
  ];

  // Static gapless grid — no scroll ticker in the new design
  const html = items.map(i =>
    `<div class="tk-metastrip-item"><span class="tk-metastrip-num">${i.num}</span><span class="tk-metastrip-lbl">${i.lbl}</span></div>`
  ).join('');
  bannerEl.innerHTML = html;
}

// ===== STICKY NAV =====
function initNav() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const links = nav.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('.section[id]');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 100);
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    links.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  });
}

// ===== TIMELINE =====
function initTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container || typeof timelineData === 'undefined') return;

  // Render newest first — user wants descending chronological order.
  // T.NN codes still reflect original chronological position (T.01 = first day).
  [...timelineData].reverse().forEach((day, revIdx) => {
    const idx = timelineData.length - 1 - revIdx;
    const dayEl = document.createElement('div');
    dayEl.className = 'timeline-day';
    dayEl.dataset.cats = [...new Set(day.events.map(e => e.cat))].join(',');
    const code = 'T.' + String(idx + 1).padStart(2, '0');

    dayEl.innerHTML = `
      <div class="timeline-day-header">
        <span class="timeline-date"><span class="tk-code">${code}</span> ${day.date}</span>
        <span class="timeline-summary">${day.summary}</span>
        <span class="timeline-expand"><i class="fa-solid fa-chevron-down"></i></span>
      </div>
      <div class="timeline-detail">
        <div class="timeline-detail-inner">
          <ul class="timeline-events">
            ${day.events.map(e => `<li class="cat-${e.cat}">${e.text}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;

    dayEl.querySelector('.timeline-day-header').addEventListener('click', () => {
      dayEl.classList.toggle('open');
    });

    container.appendChild(dayEl);
  });

  // Filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      container.querySelectorAll('.timeline-day').forEach(day => {
        if (filter === 'all') {
          day.style.display = '';
        } else {
          const cats = day.dataset.cats.split(',');
          day.style.display = cats.includes(filter) ? '' : 'none';
        }
      });
    });
  });
}

// ===== COUNTRY ATTACKS =====
function initCountryAttacks() {
  const container = document.getElementById('attacksContainer');
  if (!container || typeof countryAttacksData === 'undefined') return;

  countryAttacksData.forEach(c => {
    const card = document.createElement('div');
    card.className = 'country-attack-card';

    const statsHtml = Object.entries(c.stats).map(([k, v]) =>
      `<span>${k.replace(/([A-Z])/g, ' $1').trim()}: ${v}</span>`
    ).join('');

    card.innerHTML = `
      <div class="country-attack-header">
        <span class="country-name">${c.country}</span>
        <span class="expand-icon"><i class="fa-solid fa-chevron-down"></i></span>
      </div>
      <div class="country-attack-stats">${statsHtml}</div>
      <div class="country-attack-details">
        <ul>
          ${c.details.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>
    `;

    card.querySelector('.country-attack-header').addEventListener('click', () => {
      card.classList.toggle('open');
    });

    container.appendChild(card);
  });
}

// ===== WEAPONS DATABASE =====
function initWeaponsDB() {
  if (typeof weaponsDatabase === 'undefined') return;
  const tabsContainer = document.getElementById('countryTabs');
  const contentArea = document.getElementById('weaponsDbArea');
  if (!tabsContainer || !contentArea) return;

  const countries = Object.keys(weaponsDatabase);

  // Build country tabs
  countries.forEach((key, i) => {
    const country = weaponsDatabase[key];
    const btn = document.createElement('button');
    btn.className = 'country-tab' + (i === 0 ? ' active' : '');
    btn.dataset.country = key;
    btn.innerHTML = `<span class="tab-emoji">${country.icon}</span> ${country.label}`;
    btn.addEventListener('click', () => selectCountry(key));
    tabsContainer.appendChild(btn);
  });

  function selectCountry(key) {
    tabsContainer.querySelectorAll('.country-tab').forEach(b => b.classList.remove('active'));
    tabsContainer.querySelector(`[data-country="${key}"]`).classList.add('active');
    renderCountryWeapons(key);
  }

  function renderCountryWeapons(key) {
    const country = weaponsDatabase[key];
    const cats = Object.keys(country.categories);

    let catTabsHtml = cats.map((catKey, i) => {
      const cat = country.categories[catKey];
      return `<button class="cat-tab${i === 0 ? ' active' : ''}" data-cat="${catKey}">
        <i class="fa-solid ${cat.icon}"></i> ${cat.label}
      </button>`;
    }).join('');

    let catContentsHtml = cats.map((catKey, i) => {
      const cat = country.categories[catKey];
      const cardsHtml = cat.items.map(item => {
        const imgUrl = (typeof weaponImages !== 'undefined') ? weaponImages[item.name] : null;
        const imgHtml = imgUrl ? `
          <div class="weapon-img-preview">
            <img src="${imgUrl}" alt="${item.name}" loading="lazy" onerror="this.parentElement.style.display='none'">
            <div class="img-caption">${item.name} — <a href="https://commons.wikimedia.org" target="_blank" rel="noopener">Wikimedia Commons</a></div>
          </div>` : '';

        return `<div class="weapon-card">
          ${imgHtml}
          <div class="weapon-card-accent" style="background:${country.color}"></div>
          <div class="weapon-card-body">
            <div class="weapon-card-top">
              <div class="weapon-icon-circle" style="background:${country.color}">
                <i class="fa-solid ${item.icon || cat.icon}"></i>
              </div>
              <div class="weapon-card-info">
                <h4>${item.name}</h4>
                <div class="weapon-card-meta">
                  ${item.range !== '—' && item.range !== 'N/A' ? `<span class="weapon-badge badge-range">${item.range}</span>` : ''}
                  <span class="weapon-badge badge-type">${item.type}</span>
                </div>
              </div>
            </div>
            <p class="weapon-card-desc">${item.details}</p>
          </div>
        </div>`;
      }).join('');

      return `<div class="cat-content${i === 0 ? ' active' : ''}" data-catcontent="${catKey}">
        <div class="weapons-grid">${cardsHtml}</div>
      </div>`;
    }).join('');

    contentArea.innerHTML = `
      <div class="weapons-db-content active">
        <div class="category-tabs">${catTabsHtml}</div>
        ${catContentsHtml}
      </div>
    `;

    // Category tab clicks
    contentArea.querySelectorAll('.cat-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        contentArea.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        contentArea.querySelectorAll('.cat-content').forEach(c => c.classList.remove('active'));
        contentArea.querySelector(`[data-catcontent="${btn.dataset.cat}"]`).classList.add('active');
      });
    });
  }

  // Initialize first country
  renderCountryWeapons(countries[0]);
}

// ===== MARITIME =====
function initMaritime() {
  const container = document.getElementById('maritimeContainer');
  if (!container || typeof maritimeAttacks === 'undefined') return;

  const html = `<div class="maritime-grid">
    ${maritimeAttacks.map(m => `<div class="maritime-card">
      <div class="maritime-card-top">
        <span class="maritime-card-date">${m.date}</span>
        <span class="maritime-card-icon"><i class="fa-solid fa-anchor"></i></span>
      </div>
      <div class="maritime-card-body">
        <div class="maritime-card-vessel"><i class="fa-solid fa-ship"></i> ${m.vessel}</div>
        <div class="maritime-card-location"><i class="fa-solid fa-location-dot"></i> ${m.location}</div>
        <div class="maritime-card-detail">${m.details}</div>
      </div>
    </div>`).join('')}
  </div>`;
  container.innerHTML = html;
}

// ===== ECOSYSTEM OF ACTORS =====
function initEcosystem() {
  const grid = document.getElementById('ecosystemGrid');
  if (!grid) return;

  const actors = [
    {
      emoji: '🇶🇦', name: 'Qatar', color: '#8b1a4a',
      items: [
        'F-15s shot down 2 Iranian Su-24 bombers — first QEAF air-to-air kill',
        'Intercepted 66 missiles on Day 1 alone',
        'Arrested 10 IRGC-linked suspects + 313 foreigners for disinformation',
        'Denied participating in strikes on Iran despite reports',
        'Ordered Iranian security/military attaches expelled after "extensive damage" to Ras Laffan (Mar 19)'
      ]
    },
    {
      emoji: '🇰🇼', name: 'Kuwait', color: '#457b9d',
      items: [
        'F/A-18 shot down 3 US F-15Es in friendly fire (crews survived)',
        '67 Army servicemen wounded; 6 US soldiers + 2 Navy + 2 guards killed',
        'Emir condemned Iran: "unprovoked attack from a friend"',
        'Ali Al Salem Air Base targeted repeatedly',
        'Army confronting hostile missile/drone attacks; National Guard shot down drones (Mar 19)'
      ]
    },
    {
      emoji: '🇸🇦', name: 'Saudi Arabia', color: '#52b788',
      items: [
        'Patriot/THAAD intercepting multiple waves — Ras Tanura, Shaybah defended',
        'Prince Sultan Air Base: 5 US refueling planes damaged',
        'Al-Kharj residential area struck — 2 killed, 12 injured',
        'Intercepted 7–10 drones per day toward Riyadh/Eastern Province',
        'Two refineries attacked (Mar 19). Declared "the little trust in Iran has been completely shattered"'
      ]
    },
    {
      emoji: '🇧🇭', name: 'Bahrain', color: '#e63946',
      items: [
        '125 missiles + 211 drones intercepted by Mar 15',
        'Fifth Fleet HQ, BAPCO refinery, desalination plant struck',
        'Gulf Air fleet relocated to Saudi Arabia',
        '4 nationals arrested for IRGC espionage'
      ]
    },
    {
      emoji: '🇦🇪', name: 'UAE', color: '#2a9d8f',
      items: [
        'By Mar 18: 327 ballistic, 15 cruise missiles, 1,699 drones faced (Defence Ministry)',
        'Dubai Airport struck 3 times; Ruwais refinery shut (922K bbl/day)',
        'Barak MX, SPYDER (Israeli), Pantsir-S1 (Russian), SkyKnight (domestic)',
        'Interceptor stockpile concern by Day 3',
        'Habshan gas facilities shut down after Iranian attack (Mar 19)'
      ]
    },
    {
      emoji: '🇷🇺', name: 'Russia (Supplier to Iran)', color: '#b71c1c',
      items: [
        '<i class="fa-solid fa-jet-fighter"></i> ~50 Su-35 jets with R-37M long-range AAMs being integrated',
        '<i class="fa-solid fa-shield"></i> S-300 long-range SAM — Iran\'s primary air defense',
        '<i class="fa-solid fa-person-military-rifle"></i> Verba MANPADS (9K333) — purchased late 2025 for low-altitude defense',
        '<i class="fa-solid fa-truck-monster"></i> T-72 tanks, BMP-2 IFVs, MiG-29 fighters',
        '<i class="fa-solid fa-arrows-rotate"></i> Drone-for-arms exchange: Shaheds for advanced weapons',
        '<i class="fa-solid fa-ship"></i> Aug 2026 (NBC): Russia transferring drone components, ammunition, and TNT to Iran via Caspian Sea — 24+ ships delivering to Amirabad Port, Mazandaran',
        '<i class="fa-solid fa-satellite-dish"></i> Jul 2026 (Reuters): Russia may be providing Iran with targeting intelligence on US sites in the region — improving Iranian strike accuracy',
        '<i class="fa-solid fa-crosshairs"></i> Provided advanced drone tactics from Russia-Ukraine war — including drone-swarm targeting used to down US F-15E in April 2026'
      ]
    },
    {
      emoji: '🇮🇶', name: 'Iranian-backed Iraqi Militias', color: '#8b1a4a',
      items: [
        '<i class="fa-solid fa-users"></i> Coalition includes Kataib Hezbollah, Badr Organization, Asa\'ib Ahl al-Haq — organised under "Islamic Resistance in Iraq"',
        '<i class="fa-solid fa-sitemap"></i> Directed by IRGC Quds Force via small covert cells (5–10 fighters) that bypass main militia leadership (per US-funded Arabic media, Aug 8)',
        '<i class="fa-solid fa-crosshairs"></i> Attacks in 2026 include Kuwait Abdali crossing (Jul 23), Erbil airport & US Consulate (Jul 15), Camp Taji tank-shell strike (Aug 2), Erbil drones from Ninewa (Aug 14), Jordan (Jul 27)',
        '<i class="fa-solid fa-triangle-exclamation"></i> US-Saudi joint strikes on militia positions Jul 28. Sept 30 disarmament deadline (matches US-led coalition withdrawal from Iraq)',
        '<i class="fa-solid fa-handshake"></i> Handing over "scrap" missiles and inoperable drones while retaining functional heavy weapons; some seek transfer of weapons to Iran-infiltrated PMF instead of disarmament'
      ]
    },
    {
      emoji: '🇾🇪', name: 'Houthis (Ansar Allah, Yemen)', color: '#457b9d',
      items: [
        '<i class="fa-solid fa-ship"></i> Naval blockade against Saudi Arabia announced Jul 20 — 7+ vessels have diverted from Bab al Mandeb since',
        '<i class="fa-solid fa-oil-well"></i> Attacking Saudi oil infrastructure since Jul 24 (Jizan refinery hit 4+ times, Najran airport, East-West pipeline, Yanbu) to force Riyadh to end Yemen operations',
        '<i class="fa-solid fa-anchor"></i> Sank Indian-flagged MSV FAIZE NOORE OLIYA with one-way naval attack drone near Bab al Mandeb (Aug 4)',
        '<i class="fa-solid fa-crosshairs"></i> Attacks on Israel: Yemen-launched missiles since Mar 28 (first Houthi strike on Israel); coordinated with Hezbollah and Iran',
        '<i class="fa-solid fa-microchip"></i> First fiber-optic FPV drone use against ROYG forces in Marib Aug 11 — battlefield adaptation from Russia-Ukraine war',
        '<i class="fa-solid fa-phone"></i> Directly coordinating with IRGC Quds Force and Iraqi militias — virtual conference calls held with Hezbollah, Iraqi militia commanders during April ceasefire (per NYT Aug 1)'
      ]
    },
    {
      emoji: '🇸🇾', name: 'Syria (Neutral / friction with Axis)', color: '#a8703a',
      items: [
        '<i class="fa-solid fa-border-none"></i> Deployed increased forces to Syria-Iraq border in response to Iranian and Axis threats and activity',
        '<i class="fa-solid fa-scissors"></i> Actively disrupting Hezbollah smuggling routes on the Lebanese border — Iran interprets this as Syrian cooperation with Israel and US',
        '<i class="fa-solid fa-triangle-exclamation"></i> ISW-CTP flags risk of Iranian clandestine cells conducting "spectacular attacks" in Syria to force Damascus to divert resources from border regions'
      ]
    },
    {
      emoji: '🇨🇳', name: 'China (Strategic Support)', color: '#c62828',
      items: [
        '<i class="fa-solid fa-satellite"></i> BeiDou navigation — full military access since 2021',
        '<i class="fa-solid fa-flask"></i> Sodium perchlorate rocket fuel — 2 ships from Gaolan Port (Mar 2)',
        '<i class="fa-solid fa-microchip"></i> Drone sensors, semiconductors, guidance kits',
        '<i class="fa-solid fa-shield"></i> HQ-9 air defense (struggled vs Western jamming)',
        '<i class="fa-solid fa-ship"></i> Nearly finalized anti-ship cruise missile deal',
        '<i class="fa-solid fa-tower-broadcast"></i> Electronic warfare systems to jam stealth aircraft'
      ]
    },
    {
      emoji: '🇬🇧', name: 'United Kingdom', color: '#c8102e',
      items: [
        'RAF Typhoon shot down drone directed at Qatar',
        'HMS Dragon destroyer + 2 Wildcat helicopters defending Cyprus',
        'RAF Fairford hosting 18 US bombers (12 B-1B + 6 B-52)',
        'RAF Lakenheath F-35s/F-15Es in air campaign',
        'RAF Akrotiri struck by Shahed drone; "defensive air sorties" in UAE'
      ]
    },
    {
      emoji: '🇫🇷', name: 'France', color: '#002395',
      items: [
        'Rafale jets deployed to protect bases after Camp de la Paix attack',
        'Languedoc frigate defending Cyprus',
        'Air defence & anti-drone systems deployed',
        'Camp de la Paix near Abu Dhabi struck by drones (Mar 1)'
      ]
    },
    {
      emoji: '🇬🇷', name: 'Greece', color: '#0d5eaf',
      items: [
        '4 F-16V fighters intercepted 2 Iranian drones in Lebanese airspace',
        'HS Kimon & Psara frigates deployed to Cyprus',
      ]
    },
    {
      emoji: '🇮🇹', name: 'Italy', color: '#009246',
      items: [
        'Federico Martinengo frigate defending Cyprus',
        'Forces at Ali Al Salem AB; MQ-9 Reaper destroyed by Iranian drone (Mar 15)'
      ]
    },
    {
      emoji: '🇪🇸🇩🇪🇳🇱', name: 'Spain / Germany / Netherlands', color: '#5c6bc0',
      items: [
        'Spain: Cristóbal Colón frigate to Cyprus',
        'Germany: Nordrhein-Westfalen frigate; Spangdahlem F-16 Wild Weasels in air campaign',
        'Netherlands: HNLMS Evertsen frigate to Cyprus'
      ]
    },
    {
      emoji: '🇨🇦🇦🇺', name: 'Canada / Australia', color: '#e9c46a',
      items: [
        'Canada: Camp Canada at Ali Al Salem struck (Mar 2, revealed Mar 12). No casualties. Government criticized for opacity.',
        'Australia: Boeing E-7 Wedgetail + missiles sent to UAE. No troops. Closed Abu Dhabi embassy and Dubai consulate.'
      ]
    },
  ];

  grid.innerHTML = actors.map(a => `
    <div class="actor-card">
      <div class="actor-card-header" style="border-bottom:3px solid ${a.color}">
        <span class="emoji">${a.emoji}</span>
        <h3>${a.name}</h3>
      </div>
      <div class="actor-card-body">
        <ul>
          ${a.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// ===== CHARTS =====
function initCharts() {
  // Takshashila dataviz palette
  const TK = {
    wine: '#620d3c',
    gold: '#f1a222',
    teal: '#2f6b6b',
    wineTint: '#b8809f',
    slate: '#4a5a7a',
    bronze: '#a8703a',
    ink: '#171413',
    ink50: 'rgba(23,20,19,0.50)',
    grid: 'rgba(23,20,19,0.08)',
  };

  Chart.defaults.color = TK.ink50;
  Chart.defaults.borderColor = TK.grid;
  Chart.defaults.font.family = "'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif";
  Chart.defaults.font.size = 11;

  // Shared axis config — horizontal gridlines only, no plot border,
  // mono-ish tabular numerals on the value axis
  const axisMono = {
    family: "'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
    size: 10,
  };
  const commonScales = {
    x: {
      grid: { display: false, drawBorder: false },
      border: { display: false },
      ticks: { font: axisMono, color: TK.ink50 },
    },
    y: {
      grid: { color: TK.grid, drawBorder: false, drawTicks: false },
      border: { display: false },
      beginAtZero: true,
      ticks: { font: axisMono, color: TK.ink50, padding: 8 },
    },
  };
  const legendOpts = {
    position: 'top',
    align: 'start',
    labels: {
      boxWidth: 10,
      boxHeight: 10,
      padding: 14,
      color: TK.ink,
      font: { family: "'Inter', system-ui, sans-serif", size: 12 },
      usePointStyle: false,
    },
  };

  // Iran Strategy Chart (stacked bar)
  const iranCtx = document.getElementById('iranStrategyChart');
  if (iranCtx) {
    new Chart(iranCtx, {
      type: 'bar',
      data: {
        labels: ['Feb 28', 'Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7', 'Mar 8', 'Mar 9', 'Mar 10', 'Mar 11-13', 'Mar 14-17', 'Mar 18', 'Mar 19', 'Mar 20', 'Mar 21', 'Mar 22', 'Mar 23', 'Mar 24', 'Mar 25-26', 'Mar 27-28', 'Mar 29', 'Mar 30-31', 'Apr 1-3', 'Apr 4-6', 'Apr 7-9', 'Apr 10-12', 'Apr 13-16', 'Apr 17-May 4', 'May 5-11'],
        datasets: [{
          label: 'Ballistic missiles',
          data: [182, 80, 60, 45, 55, 40, 30, 28, 26, 24, 24, 24, 24, 13, 20, 18, 15, 16, 14, 12, 11, 10, 10, 9, 10, 8, 3, 1, 1, 0, 1],
          backgroundColor: TK.wine,
          borderRadius: 0,
        }, {
          label: 'Drones',
          data: [40, 120, 150, 100, 130, 135, 80, 70, 60, 55, 48, 48, 48, 27, 30, 25, 20, 55, 40, 30, 22, 18, 15, 27, 19, 15, 5, 2, 1, 0, 0],
          backgroundColor: TK.gold,
          borderRadius: 0,
        }, {
          label: 'Cruise missiles',
          data: [0, 5, 8, 3, 5, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0],
          backgroundColor: TK.teal,
          borderRadius: 0,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: legendOpts },
        scales: {
          x: { ...commonScales.x, stacked: true },
          y: { ...commonScales.y, stacked: true }
        }
      }
    });
  }

  // US Strategy Chart
  const usCtx = document.getElementById('usStrategyChart');
  if (usCtx) {
    new Chart(usCtx, {
      type: 'bar',
      data: {
        labels: ['Feb 28', 'Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5-7', 'Mar 8-10', 'Mar 11-14', 'Mar 15-17', 'Mar 18-20', 'Mar 21-24', 'Mar 25-28', 'Mar 29-31', 'Apr 1-6', 'Apr 7-9', 'Apr 10-12', 'Apr 13-16', 'Apr 17-May 4', 'May 5-11'],
        datasets: [{
          label: 'Air sorties',
          data: [500, 600, 550, 450, 500, 1200, 900, 1000, 800, 900, 750, 700, 650, 600, 100, 30, 40, 20, 60],
          backgroundColor: TK.wine,
          borderRadius: 0,
        }, {
          label: 'Targets struck',
          data: [750, 400, 300, 350, 300, 800, 600, 700, 500, 550, 450, 400, 380, 350, 40, 10, 15, 5, 10],
          backgroundColor: TK.gold,
          borderRadius: 0,
        }, {
          label: 'Ships destroyed',
          data: [0, 0, 0, 18, 20, 16, 5, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          backgroundColor: TK.teal,
          borderRadius: 0,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: legendOpts },
        scales: commonScales,
      }
    });
  }

  // Launcher Degradation
  const launcherCtx = document.getElementById('launcherChart');
  if (launcherCtx) {
    new Chart(launcherCtx, {
      type: 'line',
      data: {
        labels: ['Feb 28', 'Mar 2', 'Mar 5', 'Mar 7', 'Mar 10', 'Mar 14', 'Mar 17', 'Mar 19', 'Mar 22', 'Mar 24', 'Mar 28', 'Mar 31', 'Apr 6', 'Apr 8', 'Apr 16', 'May 4', 'May 11'],
        datasets: [{
          label: 'Active launchers',
          data: [430, 380, 320, 270, 210, 150, 140, 130, 120, 115, 105, 95, 80, 75, 70, 75, 80],
          borderColor: TK.wine,
          backgroundColor: 'rgba(98,13,60,0.08)',
          fill: true, tension: 0.25, pointRadius: 3, pointBackgroundColor: TK.wine, borderWidth: 2,
        }, {
          label: 'Destroyed / ineffective',
          data: [0, 50, 110, 160, 220, 280, 290, 300, 310, 315, 325, 335, 350, 355, 360, 360, 360],
          borderColor: TK.gold,
          backgroundColor: 'rgba(241,162,34,0.10)',
          fill: true, tension: 0.25, pointRadius: 3, pointBackgroundColor: TK.gold, borderWidth: 2.5,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: legendOpts },
        scales: { ...commonScales, y: { ...commonScales.y, max: 450 } }
      }
    });
  }

  // Strike Volume Decline
  const strikeCtx = document.getElementById('strikeVolumeChart');
  if (strikeCtx) {
    new Chart(strikeCtx, {
      type: 'line',
      data: {
        labels: ['Feb 28', 'Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 7', 'Mar 10', 'Mar 14', 'Mar 17', 'Mar 18', 'Mar 19', 'Mar 20', 'Mar 21', 'Mar 22', 'Mar 23', 'Mar 24', 'Mar 25', 'Mar 26', 'Mar 27', 'Mar 28', 'Mar 29', 'Mar 30', 'Mar 31', 'Apr 1', 'Apr 3', 'Apr 6', 'Apr 7', 'Apr 8', 'Apr 9', 'Apr 11', 'Apr 13', 'Apr 16', 'Apr 25', 'May 4', 'May 11'],
        datasets: [{
          label: 'Total Iranian daily launches',
          data: [222, 200, 210, 145, 185, 175, 98, 72, 60, 55, 40, 50, 43, 35, 71, 54, 42, 35, 34, 31, 28, 25, 38, 30, 33, 25, 23, 13, 5, 5, 3, 2, 2, 1, 0, 1],
          borderColor: TK.wine,
          backgroundColor: 'rgba(98,13,60,0.10)',
          fill: true, tension: 0.25, pointRadius: 2.5, pointBackgroundColor: TK.wine, borderWidth: 2,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: commonScales,
      }
    });
  }

  // Iran Fire Rate
  const fireCtx = document.getElementById('iranFireChart');
  if (fireCtx) {
    new Chart(fireCtx, {
      type: 'bar',
      data: {
        labels: ['Feb 28', 'Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7', 'Mar 8-9', 'Mar 10', 'Mar 11-17', 'Mar 18', 'Mar 19', 'Mar 20', 'Mar 21', 'Mar 22', 'Mar 23', 'Mar 24', 'Mar 25-26', 'Mar 27-29', 'Mar 30-31', 'Apr 1-3', 'Apr 4-6', 'Apr 7-9', 'Apr 10-12', 'Apr 13-16', 'Apr 17-May 4', 'May 5-11'],
        datasets: [{
          label: 'Ballistic missiles',
          data: [182, 80, 60, 45, 55, 40, 30, 28, 25, 24, 24, 13, 20, 18, 15, 16, 14, 12, 11, 10, 9, 10, 8, 3, 1, 1, 0, 1],
          backgroundColor: TK.wine,
          borderRadius: 0,
        }, {
          label: 'Drones',
          data: [40, 120, 150, 100, 130, 135, 80, 70, 58, 48, 48, 27, 30, 25, 20, 55, 40, 30, 22, 17, 27, 19, 15, 5, 2, 1, 0, 0],
          backgroundColor: TK.gold,
          borderRadius: 0,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: legendOpts },
        scales: commonScales,
      }
    });
  }

  // Interception Rates by Country
  const intCtx = document.getElementById('interceptionChart');
  if (intCtx) {
    new Chart(intCtx, {
      type: 'bar',
      data: {
        labels: ['UAE Ballistic', 'UAE Drones', 'UAE Cruise', 'Bahrain', 'Jordan Wk1', 'Jordan Wk2', 'Qatar Day1', 'Saudi (Mar 20-22)', 'Kuwait (Mar 20-22)', 'Israel (total)'],
        datasets: [{
          label: 'Intercepted',
          data: [360, 1750, 15, 350, 108, 79, 66, 62, 19, 370],
          backgroundColor: TK.wine,
          borderRadius: 0,
        }, {
          label: 'Got through / fell',
          data: [30, 110, 5, 5, 11, 6, 0, 0, 14, 32],
          backgroundColor: TK.gold,
          borderRadius: 0,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: { legend: legendOpts },
        scales: {
          x: { ...commonScales.y, stacked: true },
          y: {
            stacked: true,
            grid: { display: false, drawBorder: false },
            border: { display: false },
            ticks: { font: axisMono, color: TK.ink50 },
          }
        }
      }
    });
  }

  // Coalition Donut
  const coalCtx = document.getElementById('coalitionChart');
  if (coalCtx) {
    new Chart(coalCtx, {
      type: 'doughnut',
      data: {
        labels: [
          'US air sorties (8,500+)',
          'Iranian ballistic missiles (900+)',
          'Iranian drones (1,800+)',
          'Iranian cruise missiles',
          'US naval strikes (Tomahawk)',
          'Israeli strikes',
        ],
        datasets: [{
          data: [6500, 800, 1500, 50, 500, 2000],
          backgroundColor: [TK.wine, TK.gold, TK.teal, TK.wineTint, TK.slate, TK.bronze],
          borderWidth: 1,
          borderColor: '#FFFFFF',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '58%',
        plugins: {
          legend: {
            position: 'right',
            align: 'start',
            labels: {
              padding: 10, boxWidth: 12, boxHeight: 12, usePointStyle: false,
              color: TK.ink,
              font: { family: "'Inter', system-ui, sans-serif", size: 12 },
            }
          }
        }
      }
    });
  }
}

// ===== TOOLTIPS =====
function initTooltips() {
  const tooltip = document.getElementById('globalTooltip');
  if (!tooltip) return;
  document.querySelectorAll('[data-tooltip]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      tooltip.textContent = el.dataset.tooltip;
      tooltip.classList.add('visible');
    });
    el.addEventListener('mousemove', (e) => {
      const x = Math.min(e.clientX + 16, window.innerWidth - 340);
      const y = Math.min(e.clientY + 16, window.innerHeight - 100);
      tooltip.style.left = x + 'px';
      tooltip.style.top = y + 'px';
    });
    el.addEventListener('mouseleave', () => {
      tooltip.classList.remove('visible');
    });
  });
}

// ===== ANUSHKA'S TAKES CAROUSEL =====
function initTakesCarousel() {
  if (typeof analysisData === 'undefined' || !analysisData.length) return;

  const track = document.getElementById('takesTrack');
  const dotsContainer = document.getElementById('takesDots');
  const counter = document.getElementById('takesCounter');
  const prevBtn = document.getElementById('takesPrev');
  const nextBtn = document.getElementById('takesNext');
  if (!track) return;

  let current = 0;
  const total = analysisData.length;

  // Build slides
  analysisData.forEach((item, i) => {
    const slide = document.createElement('div');
    slide.className = 'take-slide';
    slide.innerHTML = `
      <div class="take-slide-heading" data-full-title="${item.title.replace(/"/g, '&quot;')}"></div>
      <div class="take-slide-body">${item.body}</div>
    `;
    track.appendChild(slide);
  });

  // Build dots
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  }

  // Tooltip element
  const tooltip = document.createElement('div');
  tooltip.className = 'take-tooltip';
  tooltip.innerHTML = '<div class="take-tooltip-text"></div><a class="take-tooltip-link" href="#">Jump to section &rarr;</a>';
  document.body.appendChild(tooltip);

  let tooltipTimeout;

  // Hover footnote handlers (delegated)
  track.addEventListener('mouseover', (e) => {
    const ref = e.target.closest('.take-ref');
    if (!ref) return;
    clearTimeout(tooltipTimeout);
    const note = ref.dataset.note;
    const link = ref.dataset.link || '';
    tooltip.querySelector('.take-tooltip-text').textContent = note;
    const linkEl = tooltip.querySelector('.take-tooltip-link');
    if (link) { linkEl.href = link; linkEl.style.display = ''; }
    else { linkEl.style.display = 'none'; }

    // Position tooltip
    const rect = ref.getBoundingClientRect();
    let top = rect.top - 10;
    let left = rect.left + rect.width / 2;

    tooltip.style.left = Math.min(left, window.innerWidth - 340) + 'px';
    tooltip.style.top = 'auto';
    tooltip.style.bottom = 'auto';

    // Show above or below
    if (rect.top > 250) {
      tooltip.style.display = 'block';
      const tHeight = tooltip.offsetHeight;
      tooltip.style.top = (rect.top - tHeight - 10) + 'px';
    } else {
      tooltip.style.top = (rect.bottom + 10) + 'px';
    }

    tooltip.classList.add('show');
  });

  track.addEventListener('mouseout', (e) => {
    const ref = e.target.closest('.take-ref');
    if (!ref) return;
    tooltipTimeout = setTimeout(() => tooltip.classList.remove('show'), 200);
  });

  tooltip.addEventListener('mouseover', () => clearTimeout(tooltipTimeout));
  tooltip.addEventListener('mouseout', () => {
    tooltipTimeout = setTimeout(() => tooltip.classList.remove('show'), 200);
  });

  // Make tooltip links work
  tooltip.querySelector('.take-tooltip-link').addEventListener('click', (e) => {
    tooltip.classList.remove('show');
  });

  // Typewriter effect
  function typewrite(slideIndex) {
    const slide = track.children[slideIndex];
    const heading = slide.querySelector('.take-slide-heading');
    const body = slide.querySelector('.take-slide-body');
    const fullTitle = analysisData[slideIndex].title;

    heading.innerHTML = '<span class="cursor"></span>';
    body.classList.remove('visible');

    let charIndex = 0;
    function typeChar() {
      if (charIndex < fullTitle.length) {
        heading.innerHTML = fullTitle.substring(0, charIndex + 1) + '<span class="cursor"></span>';
        charIndex++;
        setTimeout(typeChar, 28 + Math.random() * 18);
      } else {
        // Done typing — remove cursor after a beat, show body
        setTimeout(() => {
          heading.innerHTML = fullTitle;
          body.classList.add('visible');
        }, 400);
      }
    }
    typeChar();
  }

  function updateUI() {
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
    counter.textContent = `${current + 1} / ${total}`;
    tooltip.classList.remove('show');
    typewrite(current);
  }

  function goTo(index) {
    current = ((index % total) + total) % total;
    updateUI();
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const takesSection = document.getElementById('takes');
    const rect = takesSection.getBoundingClientRect();
    if (rect.top > window.innerHeight || rect.bottom < 0) return;
    if (e.key === 'ArrowLeft') goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  });

  // Auto-advance every 15s
  let autoTimer = setInterval(() => goTo(current + 1), 15000);
  track.closest('.takes-carousel').addEventListener('mouseover', () => clearInterval(autoTimer));
  track.closest('.takes-carousel').addEventListener('mouseout', () => {
    autoTimer = setInterval(() => goTo(current + 1), 15000);
  });

  // Init first slide
  updateUI();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  animateCounters();
  initBanner();
  initNav();
  initTimeline();
  initCountryAttacks();
  initWeaponsDB();
  initMaritime();
  initEcosystem();
  initCharts();
  initTooltips();
  initTakesCarousel();
});
