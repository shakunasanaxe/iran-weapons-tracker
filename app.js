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
    { num: metadataStats.targetsStruck, lbl: 'Targets Struck' },
    { num: metadataStats.airSorties, lbl: 'Air Sorties' },
    { num: metadataStats.iranianShipsDestroyed, lbl: 'Ships Destroyed' },
    { num: metadataStats.launchersNeutralized, lbl: 'of ' + metadataStats.totalLaunchers + ' Launchers Neutralized' },
    { num: metadataStats.percentDestroyed, lbl: 'Iranian Launchers Gone' },
    { num: metadataStats.oilTankersAttacked, lbl: 'Oil Tankers Attacked' },
    { num: metadataStats.iranDailyMissiles, lbl: 'Daily Missiles Now' },
    { num: metadataStats.iranDailyDrones, lbl: 'Daily Drones Now' },
    { num: metadataStats.clusterMunitionRate, lbl: 'Cluster Munitions to Israel' },
    { num: metadataStats.bahInterceptions, lbl: 'Bahrain Interceptions' },
    { num: metadataStats.uaeInterceptions, lbl: 'UAE Interceptions' },
    { num: metadataStats.jordanInterceptions, lbl: 'Jordan Interceptions' },
    { num: metadataStats.weeksExpected, lbl: 'More Weeks Expected' },
  ];

  // Duplicate for infinite scroll
  const html = [...items, ...items].map(i =>
    `<span class="banner-stat"><span class="num">${i.num}</span> <span class="lbl">${i.lbl}</span></span><span class="banner-stat"><span class="sep">|</span></span>`
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

  timelineData.forEach((day) => {
    const dayEl = document.createElement('div');
    dayEl.className = 'timeline-day';
    dayEl.dataset.cats = [...new Set(day.events.map(e => e.cat))].join(',');

    dayEl.innerHTML = `
      <div class="timeline-day-header">
        <span class="timeline-date">${day.date}</span>
        <span class="timeline-summary">${day.summary}</span>
        <span class="timeline-expand">&#9660;</span>
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
        <span class="expand-icon">&#9660;</span>
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
        '<i class="fa-solid fa-arrows-rotate"></i> Drone-for-arms exchange: Shaheds for advanced weapons'
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
  Chart.defaults.color = '#8899aa';
  Chart.defaults.borderColor = 'rgba(255,255,255,0.08)';
  Chart.defaults.font.family = 'Arial, sans-serif';

  // Iran Strategy Chart (stacked bar)
  const iranCtx = document.getElementById('iranStrategyChart');
  if (iranCtx) {
    new Chart(iranCtx, {
      type: 'bar',
      data: {
        labels: ['Feb 28', 'Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7', 'Mar 8', 'Mar 9', 'Mar 10', 'Mar 11-13', 'Mar 14-17', 'Mar 18', 'Mar 19'],
        datasets: [{
          label: 'Ballistic Missiles',
          data: [182, 80, 60, 45, 55, 40, 30, 28, 26, 24, 24, 24, 24, 13, 20],
          backgroundColor: 'rgba(194,24,91,0.8)',
          borderRadius: 3,
        }, {
          label: 'Drones',
          data: [40, 120, 150, 100, 130, 135, 80, 70, 60, 55, 48, 48, 48, 27, 30],
          backgroundColor: 'rgba(244,162,97,0.8)',
          borderRadius: 3,
        }, {
          label: 'Cruise Missiles',
          data: [0, 5, 8, 3, 5, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0],
          backgroundColor: 'rgba(123,45,142,0.8)',
          borderRadius: 3,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10 } } } },
        scales: {
          x: { stacked: true, ticks: { font: { size: 9 } } },
          y: { stacked: true, beginAtZero: true, title: { display: true, text: 'Est. Count', font: { size: 10 } } }
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
        labels: ['Feb 28', 'Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5-7', 'Mar 8-10', 'Mar 11-14', 'Mar 15-17', 'Mar 18-19'],
        datasets: [{
          label: 'Air Sorties',
          data: [500, 600, 550, 450, 500, 1200, 900, 1000, 800, 600],
          backgroundColor: 'rgba(21,101,192,0.8)',
          borderRadius: 3,
        }, {
          label: 'Targets Struck',
          data: [750, 400, 300, 350, 300, 800, 600, 700, 500, 400],
          backgroundColor: 'rgba(30,136,229,0.6)',
          borderRadius: 3,
        }, {
          label: 'Ships Destroyed',
          data: [0, 0, 0, 18, 20, 16, 5, 3, 2, 0],
          backgroundColor: 'rgba(69,123,157,0.8)',
          borderRadius: 3,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10 } } } },
        scales: {
          x: { ticks: { font: { size: 9 } } },
          y: { beginAtZero: true, title: { display: true, text: 'Est. Count', font: { size: 10 } } }
        }
      }
    });
  }

  // Launcher Degradation
  const launcherCtx = document.getElementById('launcherChart');
  if (launcherCtx) {
    new Chart(launcherCtx, {
      type: 'line',
      data: {
        labels: ['Feb 28', 'Mar 2', 'Mar 5', 'Mar 7', 'Mar 10', 'Mar 14', 'Mar 17', 'Mar 19'],
        datasets: [{
          label: 'Active Launchers',
          data: [430, 380, 320, 270, 210, 150, 140, 130],
          borderColor: '#e63946',
          backgroundColor: 'rgba(230,57,70,0.1)',
          fill: true, tension: 0.3, pointRadius: 5,
        }, {
          label: 'Destroyed/Ineffective',
          data: [0, 50, 110, 160, 220, 280, 290, 300],
          borderColor: '#2a9d8f',
          backgroundColor: 'rgba(42,157,143,0.1)',
          fill: true, tension: 0.3, pointRadius: 5,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10 } } } },
        scales: { y: { beginAtZero: true, max: 450 } }
      }
    });
  }

  // Strike Volume Decline
  const strikeCtx = document.getElementById('strikeVolumeChart');
  if (strikeCtx) {
    new Chart(strikeCtx, {
      type: 'line',
      data: {
        labels: ['Feb 28', 'Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 7', 'Mar 10', 'Mar 14', 'Mar 17', 'Mar 18', 'Mar 19'],
        datasets: [{
          label: 'Total Iranian Daily Launches',
          data: [222, 200, 210, 145, 185, 175, 98, 72, 60, 55, 40, 50],
          borderColor: '#e9c46a',
          backgroundColor: 'rgba(233,196,106,0.15)',
          fill: true, tension: 0.3, pointRadius: 5,
          pointBackgroundColor: '#e9c46a',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }
    });
  }

  // Iran Fire Rate
  const fireCtx = document.getElementById('iranFireChart');
  if (fireCtx) {
    new Chart(fireCtx, {
      type: 'bar',
      data: {
        labels: ['Feb 28', 'Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7', 'Mar 8-9', 'Mar 10', 'Mar 11-17', 'Mar 18', 'Mar 19'],
        datasets: [{
          label: 'Ballistic Missiles',
          data: [182, 80, 60, 45, 55, 40, 30, 28, 25, 24, 24, 13, 20],
          backgroundColor: 'rgba(230,57,70,0.7)',
          borderRadius: 3,
        }, {
          label: 'Drones',
          data: [40, 120, 150, 100, 130, 135, 80, 70, 58, 48, 48, 27, 30],
          backgroundColor: 'rgba(244,162,97,0.7)',
          borderRadius: 3,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10 } } } },
        scales: { y: { beginAtZero: true } }
      }
    });
  }

  // Interception Rates by Country
  const intCtx = document.getElementById('interceptionChart');
  if (intCtx) {
    new Chart(intCtx, {
      type: 'bar',
      data: {
        labels: ['UAE Ballistic', 'UAE Drones', 'UAE Cruise', 'Bahrain', 'Jordan Wk1', 'Jordan Wk2', 'Qatar Day1'],
        datasets: [{
          label: 'Intercepted',
          data: [300, 1600, 10, 336, 108, 79, 66],
          backgroundColor: 'rgba(42,157,143,0.8)',
          borderRadius: 3,
        }, {
          label: 'Got Through / Fell',
          data: [27, 99, 5, 0, 11, 6, 0],
          backgroundColor: 'rgba(230,57,70,0.8)',
          borderRadius: 3,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: { legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10 } } } },
        scales: {
          x: { stacked: true, beginAtZero: true },
          y: { stacked: true, ticks: { font: { size: 10 } } }
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
          'US Air Sorties (6,500+)',
          'Iranian Ballistic Missiles (800+)',
          'Iranian Drones (1,500+)',
          'Iranian Cruise Missiles',
          'US Naval Strikes (Tomahawk)',
          'Israeli Strikes',
        ],
        datasets: [{
          data: [6500, 800, 1500, 50, 500, 2000],
          backgroundColor: ['#1e88e5', '#e63946', '#f4a261', '#c2185b', '#457b9d', '#0d47a1'],
          borderWidth: 2,
          borderColor: '#0a1628',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right', labels: { font: { size: 11 }, padding: 10, boxWidth: 14 } }
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
