// ===== TIMELINE DATA (Feb 28 - Mar 22, 2026) =====
const timelineData = [
  {
    date: "Feb 28",
    dateLabel: "28 February 2026",
    dayNum: 1,
    summary: "Day 1 — Iran launches 182 ballistic missiles; US/Israel strike 500–1,000 targets with ~200 aircraft",
    events: [
      { text: "Iran launched 182 ballistic missiles at Gulf States — largest single-day volley of the conflict", cat: "iran" },
      { text: "US warships launched Tomahawk cruise missiles at Iranian targets; ground forces used HIMARS with first-ever combat use of PrSM (Precision Strike Missile)", cat: "us" },
      { text: "US/Israel: ~200 aircraft (F-35, F-15) hitting 500–1,000 targets with precision-guided bombs and stealth strike packages", cat: "us" },
      { text: "4 B-2 Spirit bombers flew round-trip from the US to strike hardened ballistic missile sites with 2,000-lb guided bombs", cat: "us" },
      { text: "GBU-28 bunker-buster bombs (5,000 lb) used against underground bunkers and nuclear facilities", cat: "us" },
      { text: "MIM-104 Patriot and THAAD batteries used to shield Middle East. US Navy fired Standard Missile interceptors", cat: "us" },
      { text: "Fifth Fleet HQ in Bahrain struck by Iranian missile and drone attack. ~300 British personnel nearby, no casualties", cat: "iran" },
      { text: "Iranian drone struck Kuwait International Airport and Ali Al Salem Air Base (Italian forces present)", cat: "iran" },
      { text: "Missile struck Tel Aviv building — 1 killed, dozens injured. Sirens failed to sound in time", cat: "iran" },
      { text: "Qatar intercepted 66 missiles; 16 people injured by shrapnel, 100+ reports of falling debris", cat: "gulf" },
      { text: "Loud explosions in eastern Riyadh. Saudi Arabia condemned attacks, said they were repulsed", cat: "gulf" },
      { text: "Three buildings in Manama/Muharraq hit; drone struck Era Views Tower in Bahrain", cat: "iran" },
      { text: "UK PM Starmer: 'British planes are in the sky' for coordinated defensive operations", cat: "europe" },
      { text: "US surged 12+ warships including 2 aircraft carriers (Ford, Lincoln) and hundreds of jets", cat: "us" },
      { text: "~30 F-35s amassed in Middle East from RAF Lakenheath 48th Fighter Wing and Vermont Air National Guard 158th Fighter Wing", cat: "us" },
      { text: "~12 F-22 Raptors from Joint Base Langley-Eustis deployed to Israel — first combat deployment there", cat: "us" },
      { text: "Marine Corps F-35Cs from VMFA-314 deployed with USS Abraham Lincoln south of Iran", cat: "us" },
    ]
  },
  {
    date: "Mar 1",
    dateLabel: "1 March 2026",
    dayNum: 2,
    summary: "Synagogue attack kills 9; RAF Akrotiri struck; 6 US soldiers killed in Kuwait; Dubai Airport hit",
    events: [
      { text: "US B-2 bombers hit missile facilities with 2,000-lb bombs; F/A-18s, F-35s, Tomahawks, and drones targeted command centers", cat: "us" },
      { text: "Israel struck Tehran center, Iranian F-4/F-5 jets, and HQ-9B air defense systems. Targeted killing of Ayatollah Khamenei", cat: "us" },
      { text: "Missile struck synagogue shelter in Beit Shemesh (18 mi from Jerusalem) — 9 killed, dozens injured. Largest single-incident casualty count", cat: "iran" },
      { text: "Shahed-type drone struck RAF Akrotiri, Cyprus, hitting a hangar. Partial evacuation. Two more drones intercepted later", cat: "iran" },
      { text: "Iranian drone hit Camp Buehring, Kuwait. Missile struck civilian port — 6 US soldiers killed, 38 hospitalized", cat: "iran" },
      { text: "Dubai International Airport struck — 4 staff injured, 'minor damage'. Fire at Jebel Ali Port from interception debris", cat: "iran" },
      { text: "French naval base Camp de la Paix near Abu Dhabi struck by drones", cat: "iran" },
      { text: "Saudi Arabia intercepted missiles aimed at Prince Sultan Air Base and Riyadh airport", cat: "gulf" },
      { text: "US soldier at Saudi base died 8 days later from injuries sustained in this attack", cat: "iran" },
      { text: "Two drones hit Duqm Port, Oman. Oil tanker Skylight attacked near Khasab — 4 injuries, crew evacuated", cat: "maritime" },
      { text: "Crew member killed on Marshall Islands tanker MKD VYOM, 50nm north of Muscat", cat: "maritime" },
      { text: "Hercules Star (Gibraltar) struck 17nm NW of Mina Saqr, UAE. Fire extinguished", cat: "maritime" },
      { text: "Bahrain: intercepted 54 drone and missile strikes by beginning of March", cat: "gulf" },
      { text: "Bundeswehr field camp in eastern Jordan struck by Iranian missiles and drones", cat: "europe" },
    ]
  },
  {
    date: "Mar 2",
    dateLabel: "2 March 2026",
    dayNum: 3,
    summary: "Natanz nuclear site hit; Qatari F-15s down 2 Su-24s; Kuwaiti F/A-18 friendly fire; massive UAE interceptions",
    events: [
      { text: "Israel hit Natanz nuclear site entrance, Iranian F-14s, command sites, IRIB HQ. Special forces operations conducted", cat: "us" },
      { text: "US targeted military aircraft and drone launchers across Iran", cat: "us" },
      { text: "Mina Salman Port, Bahrain struck at 2 AM — Bangladeshi worker killed. US tanker Stena Imperative set ablaze", cat: "iran" },
      { text: "AWS data center in Bahrain hit by debris, causing electricity issues", cat: "iran" },
      { text: "Qatari F-15s shot down two Iranian Su-24 bombers — first air-to-air kill for QEAF. Aircraft were 2 min from Qatari territory", cat: "gulf" },
      { text: "UK RAF Typhoon shot down attack drone directed at Qatar", cat: "europe" },
      { text: "Ras Laffan Industrial City and Mesaieed Industrial Area struck by Iranian drones", cat: "iran" },
      { text: "Kuwaiti F/A-18 shot down 3 American F-15Es in friendly fire. All US crews survived", cat: "gulf" },
      { text: "US embassy in Kuwait likely hit by Iranian missile. Two Kuwaiti Navy servicemen killed", cat: "iran" },
      { text: "Camp Canada at Ali Al Salem Air Base struck — Canadian bunkers damaged, no casualties (info withheld until Mar 12)", cat: "iran" },
      { text: "Saudi Arabia intercepted 2 drones aimed at Ras Tanura oil refinery. Limited fire from shrapnel", cat: "gulf" },
      { text: "UAE: 174 ballistic missiles tracked (161 intercepted), 689 drones detected (645 intercepted), 8 cruise missiles struck", cat: "gulf" },
      { text: "UAE educational institutions shifted to remote learning", cat: "gulf" },
      { text: "Oil tanker attacked by drone boat 52nm off Muscat — engine room explosion, 1 crew killed", cat: "maritime" },
      { text: "Stena Imperative struck by 2 projectiles in Bahrain port — fire, crew evacuated", cat: "maritime" },
      { text: "US embassy in Amman: all personnel temporarily departed as precaution", cat: "us" },
    ]
  },
  {
    date: "Mar 3",
    dateLabel: "3 March 2026",
    dayNum: 4,
    summary: "US sinks IRIS Shahid Soleimani + 17 ships; Israel destroys SNSC HQ, covert nuclear site, 300+ launchers",
    events: [
      { text: "US sank IRIS Shahid Soleimani corvette and 17 ships/submarine. Strikes on PMF in Iraq", cat: "us" },
      { text: "Israel destroyed SNSC HQ, covert nuclear site, 300+ missile launchers, Bushehr Airport", cat: "us" },
      { text: "Iranian missile struck Al Udeid Air Base, Qatar — no casualties", cat: "iran" },
      { text: "Qatar reportedly participated in strikes on Iran following airport threats (later denied by Qatari officials)", cat: "gulf" },
      { text: "US embassy in Riyadh attacked by 2 Iranian drones. Saudi confirmed 'limited fire and minor material damages'", cat: "iran" },
      { text: "IRGC declared intent to start destroying 'American political centers' in the region", cat: "iran" },
      { text: "France deployed Rafale jets to protect bases following attacks at Camp de la Paix and Al Dhafra", cat: "europe" },
      { text: "Iranian drone struck US consulate in Dubai, causing fire (contained, no injuries)", cat: "iran" },
      { text: "Jordan intercepted missile near Muwaffaq Salti Air Base", cat: "gulf" },
      { text: "Fuel tank at Duqm Port, Oman hit by drones. 2 drones intercepted in Dhofar, 1 crashed near Port of Salalah", cat: "iran" },
      { text: "Libra Trader and Gold Oak sustained minor damage 7-10nm off Fujairah", cat: "maritime" },
      { text: "Canada confirmed military presence, no casualties. Iran stated it struck Sheikh Isa air base", cat: "europe" },
    ]
  },
  {
    date: "Mar 4",
    dateLabel: "4 March 2026",
    dayNum: 5,
    summary: "US destroys 19 ships + sub; Iran blows up 10 commercial ships in Hormuz; F-35I downs Yak-130; IRIS Dena sunk",
    events: [
      { text: "US destroyed 19 Iranian ships, 1 submarine, struck 2,000 targets total", cat: "us" },
      { text: "Israel struck Basij HQ, missile pads, military complex. F-35I downed Iranian Yak-130", cat: "us" },
      { text: "Iran blew up 10 commercial ships in Strait of Hormuz in a single day", cat: "iran" },
      { text: "USS Charlotte (Los Angeles-class sub) torpedoed and sank IRIS Dena frigate near Sri Lanka with Mark 48 torpedoes", cat: "us" },
      { text: "Iranian missiles/drones hit Al Udeid and Ras Tanura (second time)", cat: "iran" },
      { text: "Two drones crashed in Jordan — one in Azraq, wounding a girl. Iraqi militia Saraya Awliya al-Dam claimed responsibility", cat: "iran" },
      { text: "Larnaca Airport, Cyprus temporarily closed. Greek F-16s intercepted 2 Iranian drones in Lebanese airspace", cat: "europe" },
      { text: "7 European nations deployed naval/air assets to defend Cyprus (Greece, France, UK, Italy, Spain, Germany, Netherlands)", cat: "europe" },
      { text: "Qatar arrested 10 people linked to IRGC — 7 for spying, 3 for drone-trained sabotage", cat: "gulf" },
      { text: "USMC Lance Corporal Kevin Melendez died in non-hostile incident", cat: "us" },
      { text: "Safeen Prestige (Malta) hit 2nm north of Oman — engine fire, crew abandoned ship", cat: "maritime" },
      { text: "Debris from drone interceptions rained down on ships off Fujairah", cat: "maritime" },
    ]
  },
  {
    date: "Mar 5",
    dateLabel: "5 March 2026",
    dayNum: 6,
    summary: "IDF strikes hundreds of missile sites; drones hit Azerbaijan's Nakhchivan; Qatar reports 14 ballistic missiles",
    events: [
      { text: "IDF struck hundreds of missile sites across Iran", cat: "us" },
      { text: "Iran used drones against US bases in Kuwait and Erbil; targeted US tanker", cat: "iran" },
      { text: "Qatar targeted with 14 ballistic missiles and 4 drones from Iran", cat: "iran" },
      { text: "131 drones sent to UAE, plus 6 ballistic missiles earlier in the day", cat: "iran" },
      { text: "Bahrain's Ma'ameer industrial area targeted — limited material damage, no casualties", cat: "iran" },
      { text: "Iranian drones crashed into Nakhchivan Airport, Azerbaijan. 4 civilians injured. Azerbaijan summoned Iranian ambassador", cat: "iran" },
      { text: "Sonangol Namibe tanker hit by explosive boat drone near Iraq's Khor al-Zubair port", cat: "maritime" },
    ]
  },
  {
    date: "Mar 6",
    dateLabel: "6 March 2026",
    dayNum: 7,
    summary: "THAAD radar damaged in Jordan; Kuwait reports 67 servicemen wounded; Fujairah oil tanks burning",
    events: [
      { text: "US moved to replace THAAD radar system in Jordan after it was damaged during attacks", cat: "us" },
      { text: "Kuwait reported 67 Army servicemen wounded by the current conflict", cat: "gulf" },
      { text: "Two oil storage tanks in Fujairah burning with dark plumes; another had already burned", cat: "iran" },
      { text: "Tugboat hit in Strait of Hormuz, 6nm north of Oman, while assisting damaged Safeen Prestige", cat: "maritime" },
    ]
  },
  {
    date: "Mar 7",
    dateLabel: "7 March 2026",
    dayNum: 8,
    summary: "Jordan tallies 119 missiles/drones in first week; Dubai Airport closes; USS Bush deploys as 3rd carrier",
    events: [
      { text: "Jordan: 119 missiles and drones in first week (60 missiles, 59 drones). 108 intercepted by air defense", cat: "gulf" },
      { text: "Qatar Civil Aviation Authority reopened air navigation under limited emergency conditions", cat: "gulf" },
      { text: "Dubai Airport briefly closed — smoke from intercepted object. Smoke from 23 Marina tower (debris). Pakistani national killed in Al Barsha", cat: "iran" },
      { text: "US sent third carrier USS George H.W. Bush; strikes on Tehran/Isfahan infrastructure", cat: "us" },
      { text: "US struck 16 Iranian mine-laying vessels", cat: "us" },
      { text: "UAE intercepted Iranian drones/missiles. Israel hit Hezbollah targets", cat: "us" },
      { text: "Qatar arrested 313 foreigners for filming and circulating 'misleading information'", cat: "gulf" },
      { text: "Possible drone attack 10nm north of Saudi Arabia's Jubail. Majority of crew evacuated", cat: "maritime" },
    ]
  },
  {
    date: "Mar 8",
    dateLabel: "8 March 2026",
    dayNum: 9,
    summary: "Iranian drone damages Bahrain desalination plant; Al-Kharj residential building hit (2 killed)",
    events: [
      { text: "Iranian drone damaged desalination plant in Bahrain", cat: "iran" },
      { text: "Iranian drone struck residential building in Al-Kharj, Saudi Arabia — 2 killed (Indian, Bangladeshi), 12 injured. IRGC said it targeted radar systems", cat: "iran" },
      { text: "UAE Ministry of Defence released footage of military destroying and intercepting Iranian drones", cat: "gulf" },
    ]
  },
  {
    date: "Mar 9",
    dateLabel: "9 March 2026",
    dayNum: 10,
    summary: "Bahrain refinery attack (32 injured, BAPCO force majeure); cluster munitions kill 2 in Israel; UK sorties in UAE",
    events: [
      { text: "Drone attack near Manama sparked fire near petroleum refinery — 32 Bahraini citizens injured, 4 serious. BAPCO declared force majeure", cat: "iran" },
      { text: "Two construction workers killed in Yehud by cluster bomb submunitions. Strikes also hit Bat Yam, Holon, Or Yehuda", cat: "iran" },
      { text: "Kuwait Interior Ministry: 2 border guards killed at dawn amid hostilities", cat: "gulf" },
      { text: "Kuwait's Emir condemned Iran: 'unprovoked attack from a neighboring Muslim country which we consider a friend'", cat: "gulf" },
      { text: "Saudi Arabia destroyed 4 drones targeting Shaybah oil field", cat: "gulf" },
      { text: "Emirati helicopter crashed killing 2 servicemen", cat: "gulf" },
      { text: "UK confirmed 'defensive air sorties' in UAE", cat: "europe" },
    ]
  },
  {
    date: "Mar 10",
    dateLabel: "10 March 2026",
    dayNum: 11,
    summary: "Ruwais refinery shut down (922K bbl/day); ADNOC force majeure; Iran strike volume drops to ~24 missiles/48 drones per day",
    events: [
      { text: "Debris from drone attack on Seef District office tower, Bahrain — 29-year-old woman killed, 8 injured", cat: "iran" },
      { text: "Gulf Air relocated fleet from Bahrain to Saudi Arabian airports", cat: "gulf" },
      { text: "Kuwait intercepted Iranian missiles and drones overnight", cat: "gulf" },
      { text: "Dubai Airport closed briefly; passengers directed to bomb shelters", cat: "iran" },
      { text: "Australia sending Boeing E-7 Wedgetail EWACS and missiles to UAE (no troops)", cat: "europe" },
      { text: "Ruwais Industrial Complex (Abu Dhabi) fire from Iranian drone — ADNOC shut 922,000 bbl/day refinery", cat: "iran" },
      { text: "~Half of Iranian projectiles toward Israel now carrying cluster munitions", cat: "iran" },
      { text: "Iran's strike volume declined to ~24 missiles + ~48 drones/day (down from hundreds)", cat: "iran" },
    ]
  },
  {
    date: "Mar 11",
    dateLabel: "11 March 2026",
    dayNum: 12,
    summary: "Salalah Port fuel tanks hit; Dubai Creek Harbour fire; multiple ships attacked in Gulf",
    events: [
      { text: "Bahrain intercepted Iranian missiles and drones overnight", cat: "gulf" },
      { text: "Qatar intercepted Iranian missiles and drones on Tuesday night and Wednesday morning", cat: "gulf" },
      { text: "Drone near Dubai Airport — 4 people injured (Ghanaian, Indian, Bangladeshi nationalities)", cat: "iran" },
      { text: "Australia closed Abu Dhabi embassy and Dubai consulate", cat: "europe" },
      { text: "Dubai Creek Harbour tower hit by drone debris — fire", cat: "iran" },
      { text: "Salalah Port, Oman targeted by drones — 2 fuel tanks set on fire, port operations suspended", cat: "iran" },
      { text: "Mayuree Naree (Thailand) attacked 11nm N of Oman — fire, crew evacuated", cat: "maritime" },
      { text: "One Majesty (Japan) minor damage 25nm NW of Ras Al Khaimah", cat: "maritime" },
      { text: "Star Gwyneth hull damaged 50nm NW of Dubai", cat: "maritime" },
      { text: "Safesea Vishnu & Zefyros attacked near Iraq — Iraq oil ports ceased all operations. 1 crew body recovered", cat: "maritime" },
      { text: "Ongoing US/Israel focus on Iranian defense industry and missiles. IDF advancing toward 300+ launcher neutralizations", cat: "us" },
    ]
  },
  {
    date: "Mar 12",
    dateLabel: "12 March 2026",
    dayNum: 13,
    summary: "Bahrain fuel depot fire; 112 missiles + 186 drones intercepted; US aerial collision kills 4",
    events: [
      { text: "Iranian strike on fuel depot in Muharraq, Bahrain (near airport) — large fire", cat: "iran" },
      { text: "Bahrain arrested 4 nationals for spying for IRGC", cat: "gulf" },
      { text: "Bahrain Defence Force: 112 ballistic missiles and 186 drones intercepted since war start", cat: "gulf" },
      { text: "Kuwait: drone debris put 6 power lines out of service", cat: "iran" },
      { text: "Iran claimed targeting Palmachim Airbase, Ovda Airbase, and Shin Bet HQ in Israel", cat: "iran" },
      { text: "Saudi Arabia intercepted drone headed towards Shaybah oilfield", cat: "gulf" },
      { text: "Minor drone incident in Al Bada'a neighborhood, Dubai. No injuries", cat: "iran" },
      { text: "Two US refueling aircraft collided over western Iraq — 4 crew killed, 2 missing", cat: "us" },
      { text: "Camp Canada attack at Ali Al Salem made public (occurred March 2)", cat: "europe" },
    ]
  },
  {
    date: "Mar 13",
    dateLabel: "13 March 2026",
    dayNum: 14,
    summary: "Missiles intercepted over Incirlik (Turkey); 18 bombers at RAF Fairford; 2 killed in Oman drone strike",
    events: [
      { text: "DIFC Innovation Hub in Dubai impacted — building facade damage, no injuries", cat: "iran" },
      { text: "Two killed, several injured in Sohar, Oman drone strike. Al Awahi Industrial Area hit", cat: "iran" },
      { text: "Missiles intercepted above Incirlik Air Base, Turkey (hosts US nuclear weapons) — 3rd time Iran targeted Turkish territory", cat: "iran" },
      { text: "RAF Fairford, UK: 18 bombers operational (12 B-1B Lancers, 6 B-52 Stratofortresses) for bombing campaign against Iran", cat: "us" },
      { text: "Dozens of F-35s and F-15Es from RAF Lakenheath ('LN' tails) participating. Wild Weasel F-16s from Spangdahlem ('SP' tails)", cat: "us" },
    ]
  },
  {
    date: "Mar 14",
    dateLabel: "14 March 2026",
    dayNum: 15,
    summary: "IDF renders 300+ ballistic sites inoperable; 60%+ of Iranian launchers neutralized; Fujairah oil fires",
    events: [
      { text: "IDF rendered 300+ ballistic sites inoperable. 260–290 of estimated 410–440 Iranian launchers destroyed (ISW)", cat: "us" },
      { text: "Drone strike at Port of Fujairah — fires, oil-loading suspended", cat: "iran" },
      { text: "Jordan second week: 85 missiles/drones. Air Force intercepted 79; 5 drones + 1 missile landed inside Jordan", cat: "gulf" },
      { text: "5 US Air Force refueling planes at Prince Sultan Air Base struck and damaged by Iranian missiles", cat: "iran" },
      { text: "Saudi intercepted 7 drones headed to Riyadh and Eastern Province", cat: "gulf" },
    ]
  },
  {
    date: "Mar 15",
    dateLabel: "15 March 2026",
    dayNum: 16,
    summary: "Italian MQ-9 Reaper destroyed at Ali Al Salem; UAE destroys 4 missiles + 6 drones; Bahrain: 125 missiles intercepted",
    events: [
      { text: "UAE warned of missile threat; defense minister confirmed destruction of 4 ballistic missiles and 6 drones", cat: "gulf" },
      { text: "Bahrain: 125 missiles and 211 drones intercepted from Iran since start of war", cat: "gulf" },
      { text: "Italian MQ-9 Reaper destroyed by Iranian drone at Ali Al Salem Air Base, Kuwait. No personnel injured", cat: "iran" },
      { text: "Saudi intercepted 10 drones headed to Riyadh and Eastern Province", cat: "gulf" },
    ]
  },
  {
    date: "Mar 16",
    dateLabel: "16 March 2026",
    dayNum: 17,
    summary: "Dubai Airport fuel tank fire (flights suspended); 12 ballistic missile waves against Israel; multiple UAE oil targets hit",
    events: [
      { text: "Drone attack at Dubai Airport hit fuel tank — flights suspended (3rd airport incident). Emirates resumed limited ops at 10:00", cat: "iran" },
      { text: "12 waves of Iranian ballistic missile attacks against Israel: 33% Tel Aviv, 33% south, 17% north, 17% Jerusalem", cat: "iran" },
      { text: "Al Bahyan, Abu Dhabi: missile hit civilian car, Palestinian national killed", cat: "iran" },
      { text: "Fujairah Oil Industry Zone hit by drone — fire", cat: "iran" },
      { text: "Drone attack on building in Umm Al Quwain — fire", cat: "iran" },
      { text: "Abu Dhabi Shah oil field struck by drone — fire", cat: "iran" },
    ]
  },
  {
    date: "Mar 17",
    dateLabel: "17 March 2026",
    dayNum: 18,
    summary: "UAE extends remote learning; Fujairah oil zone hit again; CENTCOM uses 5,000-lb bunker busters on Hormuz missile sites",
    events: [
      { text: "UAE extended distance learning for 2 weeks. Government employees (primary caregivers) authorized remote work", cat: "gulf" },
      { text: "Fujairah Oil Industry Zone hit by drones again — fire", cat: "iran" },
      { text: "Pakistani national killed in Bani Yas from debris of intercepted ballistic missile", cat: "iran" },
      { text: "Gas Al Ahmadiah (Kuwait-flagged LPG tanker) struck 23nm east of Fujairah — minor structural damage", cat: "maritime" },
      { text: "LATE: U.S. Central Command confirmed use of multiple 5,000-pound bunker-buster bombs against Iranian missile sites along the Strait of Hormuz hours earlier", cat: "us" },
    ]
  },
  {
    date: "Mar 18",
    dateLabel: "18 March 2026",
    dayNum: 19,
    summary: "UAE intercepts 13 missiles + 27 drones; Iran's intelligence minister killed in Israeli air strike on Tehran; cluster missiles hit Ramat Gan killing 2; South Pars gas facilities attacked",
    events: [
      { text: "UAE Defence Ministry: intercepted 13 ballistic missiles and 27 drones from Iran today. Cumulative total since Feb 28: 327 ballistic missiles, 15 cruise missiles, 1,699 drones", cat: "gulf" },
      { text: "Israel confirmed killing of Iran's Intelligence Minister Khatib in overnight air attack on Tehran; other senior intelligence officials also eliminated", cat: "us" },
      { text: "Iranian state media reports natural gas facilities associated with offshore South Pars field have been attacked", cat: "us" },
      { text: "Iran fired cluster missiles (multiple-warhead) at central Israel overnight — 2 killed in Ramat Gan near Tel Aviv. Iran says it is revenge for assassination of security chief Ali Larijani", cat: "iran" },
      { text: "Iran followed up with another wave of missile strikes on central Israel on Wednesday, continuing daily exchanges", cat: "iran" },
      { text: "US military dropped GPS-guided 5,000-pound munitions on Iranian missile sites near the Strait of Hormuz", cat: "us" },
    ]
  },
  {
    date: "Mar 19",
    dateLabel: "19 March 2026",
    dayNum: 20,
    summary: "Qatar expels Iranian attaches after Ras Laffan damage; UAE shuts Habshan gas; Saudi refineries attacked; Kuwait confronts missile/drone attacks; 5th Iranian missile salvo on Israel since midnight",
    events: [
      { text: "Qatar ordered Iranian security and military attaches to leave the country after Iranian missiles caused 'extensive damage' to its main gas facility at Ras Laffan", cat: "gulf" },
      { text: "UAE shut down Habshan gas facilities in Abu Dhabi after Iranian attack", cat: "iran" },
      { text: "Saudi Arabia said two of its refineries were attacked by Iran. Riyadh declared 'the little trust that remained in Iran has been completely shattered'", cat: "gulf" },
      { text: "Kuwaiti army says its air defences are 'confronting hostile missile and drone attacks'; National Guard shot down several drones. Public advised to follow safety instructions; explosions heard are interceptions", cat: "gulf" },
      { text: "Fifth Iranian missile attack on Israel since midnight (22:00 GMT). Sirens in central Israel, occupied West Bank, and Jordan Valley. No injuries reported (Times of Israel)", cat: "iran" },
    ]
  },
  {
    date: "Mar 20",
    dateLabel: "20 March 2026",
    dayNum: 21,
    summary: "US F-35 emergency landing after likely Iranian hit; Taleghan nuclear site struck; A-10s hunting fast-attack boats; IDF kills Basij intelligence chief, IRGC spokesperson, and IRGC Aerospace commander; 11 missile barrages on Israel; Mojtaba Khamenei still absent from public",
    events: [
      { text: "US F-35 made emergency landing at regional airbase after combat mission over Iran. Pilot in stable condition. CNN reported aircraft was likely hit by Iranian fire — would be first confirmed F-35 combat damage", cat: "us" },
      { text: "IRGC issued statement saying it targeted a US aircraft. Incident under investigation", cat: "iran" },
      { text: "Since Feb 28, the US has lost approximately 12 MQ-9 Reaper drones", cat: "us" },
      { text: "5 KC-135 refuelling aircraft damaged in Iranian missile strike at a base in Saudi Arabia (unverified)", cat: "iran" },
      { text: "Israel struck the Taleghan compound at Parchin, southeast of Tehran — a covert nuclear weapons development site", cat: "us" },
      { text: "Chairman of Joint Chiefs Gen. Dan Caine confirmed A-10 'Warthogs' are hunting and killing Iranian fast-attack watercraft in the Strait of Hormuz", cat: "us" },
      { text: "GBU-72 Advanced 5K Penetrators confirmed as the 5,000-pound bombs used on Hormuz missile sites (Mar 17)", cat: "us" },
      { text: "Combined force struck IRGC Chamran missile base in Jam, Bushehr Province (three strikes). Combined force struck 4th Artesh Ground Forces Aviation base in Esfahan and 9th Artesh Air Force Tactical Airbase in Bandar Abbas", cat: "us" },
      { text: "Anti-regime media reported smoke rising from multiple explosions near Shiraz International Airport (7th Artesh Air Force Tactical Airbase co-located)", cat: "us" },
      { text: "IDF struck weapons production and long-range ballistic missile component/launcher production sites in Tehran Province", cat: "us" },
      { text: "CENTCOM footage showed combined force striking ballistic missile production site at Simin Dasht Industrial Town, Alborz Province, on March 11", cat: "us" },
      { text: "Combined force struck IRGC Shahid Borujerdi logistics support HQ in Tehran", cat: "us" },
      { text: "Combined force targeted IRGC Ground Forces 41st Sarallah Division HQ in Kerman City, co-located with 38th Zolfaghar Independent Armored Brigade", cat: "us" },
      { text: "Strike targeted Kolahdouz IRGC base in Shahmirzad, Semnan Province. Separate strikes on Basij base in Semnan City and IRGC intelligence building on Kakh Street, Tehran", cat: "us" },
      { text: "Combined force conducted 'heavy' strikes on IRGC positions on Qeshm Island. Satellite imagery shows at least 19 buildings destroyed at IRGC Navy and Basij bases since Feb 28", cat: "us" },
      { text: "IDF killed Basij Organisation Intelligence Chief Esmail Ahmadi", cat: "us" },
      { text: "IDF killed IRGC Spokesperson Brigadier General Ali Mohammad Naeini (UK-sanctioned since Oct 2024)", cat: "us" },
      { text: "IDF killed IRGC Aerospace Force Commander in Esfahan, Mehdi Ghoreyshi", cat: "us" },
      { text: "IDF killed Iranian Intelligence and Security Ministry official Mehdi Rostami Shamestan, who promoted attacks against Israeli and Jewish civilians worldwide", cat: "us" },
      { text: "Iran launched 11 missile barrages at Israel between 3:00 PM ET Mar 19 and 3:00 PM ET Mar 20. One ballistic missile landed in open area of Beit Shemesh. Missiles also hit Ramallah, Rehovot, and Jerusalem", cat: "iran" },
      { text: "Israeli media reported 70% of Iran's launches against Israel now use cluster munitions, and the percentage is increasing. IDF says Iran firing mostly from central Iran after western launchers destroyed", cat: "iran" },
      { text: "UAE intercepted 4 missiles and 26 drones. Kuwait intercepted 15 of 25 drones (8 landed harmlessly, 2 hit national oil company). Saudi intercepted 38 drones. Bahrain intercepted 2 missiles and 4 drones", cat: "gulf" },
      { text: "Regime-affiliated media stated Iran targeted a US Patriot defence system in Bahrain", cat: "iran" },
      { text: "Supreme Leader Mojtaba Khamenei issued Nowruz written statement emphasising 'Resistance Economy in the Shadow of National Unity and National Security' — still no public appearance since becoming supreme leader on Mar 8. Regime recycling old images", cat: "iran" },
      { text: "Mojtaba falsely claimed Iran and Axis of Resistance did not attack Turkey and Oman, calling them Israeli 'false flag' operations", cat: "iran" },
      { text: "Iran Parliament Speaker Ghalibaf said 'the Strait of Hormuz situation will not return to its pre-war status.' Expediency Council member Mokhber stated there will be a 'new regime for the Strait of Hormuz.' Parliament considering fees on vessels transiting the Strait", cat: "iran" },
      { text: "Daily oil exports from the Middle East have fallen by at least 60% since start of war", cat: "maritime" },
      { text: "US and UAE disrupted Hezbollah-affiliated money laundering networks. US sanctioned 16 individuals/entities connected to Hezbollah financier Alaa Hassan Hamieh (over $100M laundered since 2020). UAE dismantled Hezbollah/Iran-funded 'terrorist network'", cat: "us" },
      { text: "Hezbollah claimed 55 attacks targeting Israeli forces/positions in northern Israel and southern Lebanon. Used IEDs for first time since start of conflict. Targeted IDF 91st Division HQ", cat: "iran" },
      { text: "IDF has destroyed over 2,000 Hezbollah sites in Lebanon since Mar 2, including ~120 HQs, 100+ weapons depots, 130 rocket launchers. Eliminated 570+ Hezbollah fighters including 220 Radwan Force members", cat: "us" },
      { text: "NATO withdrew all forces from its advisory mission in Iraq. 'Several hundred' soldiers withdrawn to Europe", cat: "europe" },
      { text: "Iranian-backed Iraqi militia front groups continued drone attacks on US bases including Victory Base near Baghdad Airport", cat: "iran" },
    ]
  },
  {
    date: "Mar 21",
    dateLabel: "21 March 2026",
    dayNum: 22,
    summary: "Trump threatens to 'obliterate' Iranian power plants if Hormuz not opened in 48 hours; missiles hit Dimona and Arad near Israeli nuclear centre (180+ wounded, hundreds evacuated) — Iran says response to Natanz; UKMTO: 21 maritime incidents since war start",
    events: [
      { text: "US President Trump threatened to 'obliterate' Iranian power plants if Iran does not 'fully open' the Strait of Hormuz within 48 hours", cat: "us" },
      { text: "Iranian missiles struck Dimona and Arad near Israeli nuclear research centre — Iran says it was a response to Israeli attack on Natanz. At least 180 wounded, hundreds evacuated from strategic towns. IDF failed to intercept the two Ghadr-variant missiles (1,950 km range) due to 'different and unrelated circumstances'", cat: "iran" },
      { text: "Iran has launched over 400 ballistic missiles targeting Israel since start of war. IDF interception rate stands at 92%. Only 5 missiles with conventional warheads struck populated areas", cat: "iran" },
      { text: "UKMTO reported projectile explosion near vessel 15nm north of Sharjah, UAE. Later classified as 'suspicious activity.' UKMTO has recorded 21 maritime incidents in the Strait of Hormuz since war began", cat: "maritime" },
      { text: "Combined force struck underground missile bases between Gerash and Lar (Fars Province) and confirmed strikes on tunnel entrances at Hajjiabad (Hormozgan) and Darab (Fars) underground missile bases from Mar 20", cat: "us" },
      { text: "IDF killed Hezbollah Radwan Forces commander Abu Khalil Barji and two fighters in Majdal Selm, southern Lebanon", cat: "us" },
      { text: "A Hezbollah drone landed in open area near the Sea of Galilee in northern Israel", cat: "iran" },
      { text: "Iranian-backed Iraqi militias launched two drones at Baghdad International Airport — intercepted by Iraqi air defences. Saraya Awliya al Dam claimed six 'qualitative operations' against US bases", cat: "iran" },
      { text: "Combined force struck unspecified PMF positions in western Mosul and US airstrikes targeted Kataib Hezbollah-associated 13th PMF brigade in Anbar Province", cat: "us" },
      { text: "IRGC Intelligence Organisation sending text messages to Iranian citizens warning their activity on opposition Telegram channels is under surveillance", cat: "iran" },
      { text: "Multiple waves of arrests across Iran targeting individuals accused of links to opposition networks", cat: "iran" },
      { text: "Israeli Ministry of Education cancelled in-person classes across Israel on Mar 22 and 23 following Dimona/Arad strikes", cat: "iran" },
    ]
  },
  {
    date: "Mar 22",
    dateLabel: "22 March 2026",
    dayNum: 23,
    summary: "Iran threatens to 'completely close' Hormuz and strike regional energy infrastructure if power plants hit; cluster munitions hit Tel Aviv area (Jaffa, Petah Tikva, Bat Yam, Holon); Kuh-e Barjamali missile assembly site struck; IDF kills Hamas financier in Lebanon; 5 Iraqi CTS injured",
    events: [
      { text: "Iran Parliament Speaker Ghalibaf threatened to strike regional energy infrastructure if Iranian power plants attacked. Khatam ol Anbia Central HQ threatened to 'completely close' the Strait of Hormuz and target regional energy infrastructure and companies with US shareholders", cat: "iran" },
      { text: "Iran launched at least 3 missiles with cluster munitions targeting Tel Aviv area — impacts in Jaffa, Petah Tikva, Bat Yam, and Holon. Over 100 separate cluster munition impact sites throughout war. At least 24 missiles with cluster warheads released over populated areas", cat: "iran" },
      { text: "CENTCOM published satellite imagery showing damage at Kuh-e Barjamali short/medium-range ballistic missile assembly facility (struck Mar 7). Site was likely final assembly point for Fath-360, Fateh-110, Zolfaghar, and Haj Qasem missiles at Khojir Aerospace Complex", cat: "us" },
      { text: "IDF struck Defence and Armed Forces Logistics Ministry weapons production/storage site east of Tehran City, likely at Khojir Aerospace Complex. Analyst identified extensive damage to planetary mixer and casting sites from Mar 4 imagery", cat: "us" },
      { text: "IDF struck Artesh personnel training base and missile storage in SW Tehran, plus IRGC Aerospace Force weapons production facility west of Tehran. Explosions reported in Karaj, Alborz Province", cat: "us" },
      { text: "Combined force struck underground missile bases in southern Iran — tunnel entrances at Hajjiabad (Hormozgan) and Darab (Fars). Fire at 8th Tactical Air Base in Esfahan. Craters on runway at 6th Tactical Air Base/Bushehr Airport", cat: "us" },
      { text: "Israeli analyst identified damage to Advanced Fibre Development Company factory (US Treasury-sanctioned May 2025) at Lia Industrial Zone, Ghazvin Province. Large explosion at warehouse in Rafsanjan, Kerman Province", cat: "us" },
      { text: "IDF struck 'additional' Intelligence and Security Ministry HQ in Tehran and an 'emergency command centre' for internal security forces — improvised facilities after regular HQs destroyed", cat: "us" },
      { text: "Geolocated footage showed damage to Fars Province Law Enforcement Command HQ in Shiraz (struck Mar 17)", cat: "us" },
      { text: "IRGC Ground Forces Commander Brig Gen Karami visited units in western/northwestern Iran — notable given combined force strikes on Ground Forces divisions and reports of armed Kurdish mobilisation along Iran-Iraq border", cat: "iran" },
      { text: "Combined force has struck at least two IRGC Ground Forces divisions and one brigade in northwestern/majority Kurdish areas since Feb 28, including 31st Ashoura Mechanized Division (Tabriz), 11th Amir ol Momenin Brigade (Ilam), and Nabi Akram Division (Kermanshah)", cat: "us" },
      { text: "Bahrain intercepted 2 drones and 2 missiles. IRGC claimed targeting US Fifth Fleet base in Manama. Kuwait intercepted 4 of 7 drones (3 fell in open spaces). Saudi intercepted 21 drones and 3 missiles (including one heading to Riyadh). UAE intercepted 25 drones and 4 missiles", cat: "gulf" },
      { text: "IRGC claimed targeting Prince Sultan Air Base near Riyadh", cat: "iran" },
      { text: "Hezbollah claimed 56 attacks on Israeli forces/positions. Drone landed near Sea of Galilee. IDF struck 5th Litani River bridge. Defence Minister Katz ordered destruction of all Litani bridges and acceleration of demolition of Lebanese border village homes", cat: "iran" },
      { text: "Reuters reported IRGC deployed ~100 officers to Lebanon after Nov 2024 ceasefire, reorganising Hezbollah into smaller, compartmentalised units — described as 'mosaic defence' resembling 1980s structure", cat: "iran" },
      { text: "IDF killed Hezbollah Radwan Forces commander, senior Hamas financier Walid Mohammad Dib in Lebanon, and 9 Hezbollah fighters. IDF has killed 2 Hamas members in Lebanon since Feb 28", cat: "us" },
      { text: "Lebanese President Aoun condemned Litani bridge strikes as 'dangerous escalation' and prelude to 'Israeli expansion into Lebanese territory'", cat: "europe" },
      { text: "Iranian-backed Iraqi militia rocket fire injured 5 Iraqi Counter Terrorism Service members at Baghdad Airport facility. Two drones impacted near former US Victory base. Combined force struck PMF positions in Jurf al Sakhr, Babil Province", cat: "iran" },
      { text: "Islamic Resistance in Iraq claimed 21 drone/missile operations against US bases in past 24 hours (no evidence provided)", cat: "iran" },
    ]
  },
  {
    date: "Mar 23",
    dateLabel: "23 March 2026",
    dayNum: 24,
    summary: "Iran threatens to completely shut Strait of Hormuz and launch retaliatory strikes on regional energy/water infrastructure if US attacks power plants; verified footage shows fire and smoke over Karaj after air attack; Australia and Singapore sign energy cooperation deal amid Hormuz supply crunch",
    events: [
      { text: "Iran declared it will completely shut the Strait of Hormuz and launch retaliatory attacks on regional energy and water infrastructure if the US attacks its power plants", cat: "iran" },
      { text: "Al Jazeera verified footage showing columns of fire and smoke rising over Karaj, west of Tehran, following an air attack", cat: "us" },
      { text: "Australia and Singapore signed agreement to ramp up coordination to ensure uninterrupted trade in diesel and liquefied natural gas amid the ongoing war", cat: "europe" },
      { text: "Countries worldwide scrambling to secure energy supply amid supply crunch resulting from closure of the Strait of Hormuz, through which a fifth of the world's oil exports transit", cat: "maritime" },
    ]
  },
];

// ===== IRAN ATTACKS BY TARGET COUNTRY =====
const countryAttacksData = [
  {
    country: "🇧🇭 Bahrain",
    flag: "🇧🇭",
    color: "#e63946",
    stats: { missiles: "130+", drones: "220+", intercepted: "310+", casualties: "33+ injured, 1 killed" },
    details: [
      "Fifth Fleet HQ struck on Day 1 (Feb 28) — 300 British personnel nearby",
      "Era Views Tower drone strike; 3 buildings in Manama/Muharraq hit",
      "54 drone and missile strikes intercepted by early March",
      "Mina Salman Port struck at 2 AM (Mar 2) — Bangladeshi worker killed, Stena Imperative tanker ablaze",
      "AWS data center hit by debris causing electricity issues",
      "Desalination plant damaged by drone (Mar 8)",
      "Petroleum refinery fire — 32 citizens injured, BAPCO force majeure (Mar 9)",
      "Seef District office tower debris killed 29-year-old woman, 8 injured (Mar 10)",
      "Gulf Air relocated fleet to Saudi Arabia",
      "Fuel depot in Muharraq — large fire near airport (Mar 12)",
      "4 nationals arrested for spying for IRGC",
      "Ma'ameer industrial area targeted — limited damage (Mar 5)",
      "Mar 20: intercepted 2 missiles and 4 drones. IRGC claimed targeting US Patriot system in Bahrain",
      "Mar 22: intercepted 2 drones and 2 missiles. IRGC claimed targeting US Fifth Fleet base in Manama"
    ]
  },
  {
    country: "🇦🇪 UAE",
    flag: "🇦🇪",
    color: "#2a9d8f",
    stats: { missiles: "327+ ballistic", drones: "1,699+ detected", intercepted: "806+", cruiseMissiles: "15+", casualties: "Multiple killed" },
    details: [
      "By Mar 18: 327 ballistic missiles, 15 cruise missiles, 1,699 drones faced since start of attacks (UAE Defence Ministry)",
      "By Mar 2: 174 ballistic missiles tracked (161 intercepted, 13 fell to sea), 689 drones (645 intercepted), 8 cruise missiles struck",
      "Dubai Airport struck 3 times — staff injured, flights suspended, fuel tank fire (Mar 16)",
      "Fire at Jebel Ali Port from interception debris (Mar 1)",
      "French naval base Camp de la Paix near Abu Dhabi struck by drones (Mar 1)",
      "US consulate in Dubai — fire from drone strike (Mar 3)",
      "131 drones + 6 ballistic missiles in single day toward UAE (Mar 5)",
      "Fujairah oil storage tanks burning (Mar 6); Fujairah Oil Zone hit repeatedly (Mar 14, 16, 17)",
      "Dubai 23 Marina tower hit by debris; Pakistani national killed in Al Barsha (Mar 7)",
      "Ruwais refinery drone strike — ADNOC shut 922,000 bbl/day refinery (Mar 10)",
      "Dubai Creek Harbour tower fire from drone debris (Mar 11)",
      "DIFC Innovation Hub facade damage (Mar 13)",
      "Al Bahyan, Abu Dhabi: missile hit civilian car, Palestinian national killed (Mar 16)",
      "Shah oil field, Umm Al Quwain building struck (Mar 16)",
      "Pakistani national killed in Bani Yas from missile debris (Mar 17)",
      "Educational institutions shifted to remote learning; extended 2 more weeks",
      "Habshan gas facilities in Abu Dhabi shut down after Iranian attack (Mar 19)",
      "Mar 20: intercepted 4 missiles and 26 drones",
      "Mar 21: UKMTO reported projectile explosion 15nm north of Sharjah (classified as 'suspicious activity')",
      "Mar 22: intercepted 25 drones and 4 ballistic missiles",
      "UAE dismantled Hezbollah/Iran-funded 'terrorist network' using commercial cover for money laundering (Mar 20)"
    ]
  },
  {
    country: "🇶🇦 Qatar",
    flag: "🇶🇦",
    color: "#8b1a4a",
    stats: { missiles: "80+", drones: "10+", intercepted: "66 on Day 1", casualties: "16 injured" },
    details: [
      "66 missiles intercepted on Day 1; 16 injured by shrapnel, 100+ reports of falling debris",
      "Al Udeid Air Base struck by Iranian missile (Mar 3) — no casualties",
      "14 ballistic missiles + 4 drones targeted Qatar (Mar 5)",
      "Qatari F-15s shot down 2 Iranian Su-24 bombers — first QEAF air-to-air kill (Mar 2)",
      "Ras Laffan Industrial City and Mesaieed Industrial Area struck by drones",
      "Qatar arrested 10 IRGC-linked suspects (7 spying, 3 sabotage) (Mar 4)",
      "313 foreigners arrested for filming and spreading 'misleading information'",
      "Civil Aviation Authority reopened air navigation under emergency conditions (Mar 7)",
      "Intercepted missiles and drones on multiple nights",
      "Ordered Iranian security and military attaches expelled after 'extensive damage' to Ras Laffan gas facility (Mar 19)",
      "Lebanon condemned Hezbollah 'terrorist plot' against UAE and offered full cooperation (Mar 20)"
    ]
  },
  {
    country: "🇰🇼 Kuwait",
    flag: "🇰🇼",
    color: "#457b9d",
    stats: { killed: "6 US soldiers + 2 Navy + 2 border guards", wounded: "67 servicemen + 38 US hospitalized" },
    details: [
      "Kuwait International Airport struck by drone (Feb 28)",
      "Ali Al Salem Air Base hit multiple times (Italian forces, Canadian Camp Canada)",
      "Camp Buehring hit — 6 US soldiers killed, 38 hospitalized (Mar 1)",
      "US embassy likely hit by Iranian missile (Mar 2)",
      "Two Navy servicemen killed (Mar 2)",
      "67 Army servicemen wounded by Mar 6",
      "2 border guards killed at dawn (Mar 9)",
      "Emir condemned Iran: 'unprovoked attack from a neighboring Muslim country we consider a friend'",
      "Drone debris put 6 power lines out of service (Mar 12)",
      "Italian MQ-9 Reaper destroyed by Iranian drone at Ali Al Salem (Mar 15)",
      "Army confronting hostile missile and drone attacks; National Guard shot down several drones (Mar 19)",
      "Mar 20: intercepted 15 of 25 drones — 8 landed harmlessly, 2 hit national oil company",
      "Mar 22: intercepted 4 of 7 drones, 3 fell in open spaces"
    ]
  },
  {
    country: "🇸🇦 Saudi Arabia",
    flag: "🇸🇦",
    color: "#52b788",
    stats: { intercepted: "Multiple waves", casualties: "2 killed + 12 injured (Al-Kharj)" },
    details: [
      "Loud explosions in eastern Riyadh on Day 1 — attacks 'repulsed'",
      "Prince Sultan Air Base and Riyadh airport targeted (Mar 1)",
      "US soldier died 8 days later from injuries at Saudi base",
      "2 drones intercepted aimed at Ras Tanura oil refinery (Mar 2); hit again Mar 4",
      "US embassy in Riyadh attacked by 2 Iranian drones (Mar 3)",
      "4 drones targeting Shaybah oil field destroyed (Mar 9)",
      "Al-Kharj residential building struck — 2 killed (Indian, Bangladeshi), 12 injured (Mar 8)",
      "7 drones to Riyadh/Eastern Province intercepted (Mar 14)",
      "10 drones to Riyadh/Eastern Province intercepted (Mar 15)",
      "5 US Air Force refueling planes at Prince Sultan Air Base damaged (Mar 14)",
      "Two refineries attacked by Iran (Mar 19). Riyadh declared 'the little trust that remained in Iran has been completely shattered'",
      "Mar 20: intercepted 38 drones",
      "Mar 22: intercepted 21 drones and 3 ballistic missiles (including one heading to Riyadh). IRGC claimed targeting Prince Sultan Air Base"
    ]
  },
  {
    country: "🇮🇱 Israel",
    flag: "🇮🇱",
    color: "#0d47a1",
    stats: { attacks: "400+ ballistic missiles since Feb 28", cluster: "~70% cluster munitions by Mar 22", casualties: "~200 injured in Dimona/Arad alone", interception: "92% interception rate" },
    details: [
      "Tel Aviv building struck — 1 killed, dozens injured; sirens failed (Feb 28)",
      "Beit Shemesh synagogue shelter — 9 killed, dozens injured; largest single-incident casualties (Mar 1)",
      "Cluster munitions killing 2 construction workers in Yehud (Mar 9); Bat Yam, Holon, Or Yehuda struck",
      "12 waves of ballistic missiles on Mar 16: 33% Tel Aviv, 33% south, 17% north, 17% Jerusalem",
      "Cluster missiles killed 2 in Ramat Gan near Tel Aviv (Mar 18)",
      "11 missile barrages between 3:00 PM ET Mar 19 and 3:00 PM ET Mar 20. Hits in Beit Shemesh, Ramallah, Rehovot, Jerusalem",
      "70% of Iran's launches now use cluster munitions — percentage increasing. Over 100 separate cluster munition impact sites. At least 24 missiles released cluster warheads over populated areas",
      "Two Ghadr-variant missiles struck Dimona and Arad (Mar 21) — nearly 200 injured. IDF failed to intercept due to 'different and unrelated circumstances'",
      "Only 5 missiles with conventional warheads struck populated areas in Israel throughout the war. 92% interception rate, close to April/October 2024 and June 2025 rates",
      "Cluster munitions hit Tel Aviv area on Mar 22 — impacts in Jaffa, Petah Tikva, Bat Yam, Holon",
      "IDF says Iran now firing mostly from central Iran (Esfahan Province) after western launchers destroyed",
      "In-person classes cancelled across Israel on Mar 22-23"
    ]
  },
  {
    country: "🇯🇴 Jordan",
    flag: "🇯🇴",
    color: "#e9c46a",
    stats: { weekOne: "119 (60 missiles, 59 drones)", weekTwo: "85", intercepted: "108 + 79" },
    details: [
      "Week 1: 119 missiles and drones — 108 intercepted by air defense",
      "Week 2: 85 missiles/drones — 79 intercepted; 5 drones + 1 missile landed inside Jordan",
      "Muwaffaq Salti Air Base — missile intercepted (Mar 3)",
      "Azraq: drone crashed wounding a girl, damaging homes (Mar 4)",
      "THAAD radar system damaged and replaced (Mar 6)",
      "Bundeswehr field camp in eastern Jordan struck (Mar 1)"
    ]
  },
  {
    country: "🇴🇲 Oman",
    flag: "🇴🇲",
    color: "#f4a261",
    stats: { attacks: "Multiple ports/cities", casualties: "2+ killed, several injured" },
    details: [
      "Duqm Port: 2 drones hit (Mar 1); fuel tank hit (Mar 3); drone intercepted",
      "Oil tanker Skylight attacked near Khasab — 4 injuries (Mar 1)",
      "2 drones intercepted in Dhofar; 1 crashed near Port of Salalah (Mar 3)",
      "Salalah Port: 2 fuel tanks set on fire, operations suspended (Mar 11)",
      "Sohar: 2 killed, several injured in drone strike. Al Awahi Industrial Area hit (Mar 13)"
    ]
  },
  {
    country: "🇨🇾 Cyprus / 🇹🇷 Turkey / 🇦🇿 Azerbaijan",
    flag: "🌍",
    color: "#7b2d8e",
    stats: { cyprus: "RAF Akrotiri struck", turkey: "Incirlik targeted 3 times", azerbaijan: "4 civilians injured" },
    details: [
      "Cyprus: Shahed-type drone struck RAF Akrotiri hangar; partial evacuation (Mar 1)",
      "Larnaca Airport temporarily closed (Mar 4)",
      "7 European nations deployed assets to defend Cyprus",
      "Turkey: missiles intercepted above Incirlik Air Base — 3 times targeted (Mar 13)",
      "Azerbaijan: drones crashed into Nakhchivan Airport; school damaged; 4 civilians injured (Mar 5)",
      "Azerbaijan summoned Iranian ambassador, promised military response"
    ]
  }
];

// ===== WEAPONS DATABASE =====
const weaponsDatabase = {
  iran: {
    label: "Iran",
    icon: "🇮🇷",
    color: "#c2185b",
    categories: {
      ballistic: {
        label: "Ballistic Missiles",
        icon: "fa-rocket",
        items: [
          { name: "Fateh-110", range: "300 km", type: "Short-range tactical", details: "High-explosive or submunitions warhead. Mobile platform launch. Used for short-range ground targets.", icon: "fa-bullseye" },
          { name: "Shahab-1", range: "300 km", type: "Short-range", details: "Early-generation Scud-variant ballistic missile for tactical strikes.", icon: "fa-crosshairs" },
          { name: "Raad", range: "500 km", type: "Short-range", details: "Solid-fuel tactical ballistic missile with improved accuracy over earlier systems.", icon: "fa-crosshairs" },
          { name: "Ya-Ali", range: "700 km", type: "Medium-range", details: "Land-attack cruise/ballistic hybrid with precision guidance capability.", icon: "fa-location-crosshairs" },
          { name: "Qiam-1", range: "800 km", type: "Medium-range", details: "No stabilizing fins, launched from concealed platforms. Improved Shahab-2 variant.", icon: "fa-location-crosshairs" },
          { name: "Qassem Bassir", range: "1,200 km", type: "Medium-range", details: "Newer solid-fuel missile with greater accuracy and countermeasure evasion. Used for deep regional strikes.", icon: "fa-circle-dot" },
          { name: "Shahab-3", range: "1,300 km", type: "Medium-range", details: "Backbone of Iran's ability to strike Israel. Central strategic capability for power projection beyond borders.", icon: "fa-bomb" },
          { name: "Emad", range: "1,700 km", type: "Long-range", details: "Improved accuracy with terminal guidance technology. Can strike deep into Middle East.", icon: "fa-explosion" },
          { name: "Khorramshahr", range: "2,000 km", type: "Long-range", details: "Can target much of the Middle East. Multiple warhead capability reported.", icon: "fa-explosion" },
          { name: "Ghadr", range: "1,950 km", type: "Medium-range", details: "Liquid-fuel variant. Two Ghadr missiles struck Dimona and Arad on Mar 21, injuring nearly 200 people. IDF failed to intercept due to 'different and unrelated circumstances'.", icon: "fa-explosion" },
          { name: "Haj Qasem", range: "1,400 km", type: "Medium-range", details: "Solid-fuel medium-range ballistic missile. Produced at Kuh-e Barjamali facility at Khojir Aerospace Complex.", icon: "fa-explosion" },
          { name: "Fath-360", range: "120 km", type: "Short-range tactical", details: "Short-range ballistic missile produced at Khojir Aerospace Complex. Iran has supplied Fath-360s to Russia for its offensive campaign in Ukraine.", icon: "fa-bullseye" },
          { name: "Zolfaghar", range: "700 km", type: "Medium-range", details: "Solid-fuel missile with range between Fateh-110 and Shahab-3. Produced at Khojir facility.", icon: "fa-location-crosshairs" },
          { name: "Sejjil", range: "2,000 km", type: "Long-range", details: "Solid-fuel for quicker launch readiness and improved mobility. Two-stage design.", icon: "fa-explosion" },
        ]
      },
      cruise: {
        label: "Cruise Missiles",
        icon: "fa-jet-fighter",
        items: [
          { name: "Hoveyzeh", range: "1,300+ km", type: "Land-attack cruise", details: "Long-range, high accuracy, low-altitude flight path difficult to detect. Turboprop engine.", icon: "fa-plane" },
          { name: "Soumar", range: "1,350+ km", type: "Land-attack cruise", details: "Similar to Western cruise missiles. Flies low to avoid radar. Jet engine propulsion.", icon: "fa-plane" },
          { name: "Qader", range: "300 km", type: "Anti-ship cruise", details: "Maritime context weapon for threatening ships in Strait of Hormuz and Persian Gulf.", icon: "fa-ship" },
          { name: "Zafar", range: "Hundreds of km", type: "Anti-ship cruise", details: "Used to threaten naval vessels and complicate maritime defense of enemy forces.", icon: "fa-ship" },
        ]
      },
      drones: {
        label: "Drones & UAVs",
        icon: "fa-plane-up",
        items: [
          { name: "Shahed-136 / Shahed-type", range: "2,000+ km", type: "One-way attack drone", details: "Medium-distance kamikaze drone with combat payload. Mass-produced. Used extensively against Gulf states, Cyprus, and Israel. Delta-wing design with rear propeller.", icon: "fa-paper-plane" },
          { name: "Explosive Boat Drones", range: "Coastal", type: "Naval drone", details: "Remote-controlled boats laden with explosives used to attack oil tankers and ships. Used against Sonangol Namibe and others.", icon: "fa-anchor" },
          { name: "Reconnaissance Drones", range: "Various", type: "ISR", details: "Used for targeting, damage assessment, and escort missions.", icon: "fa-eye" },
        ]
      },
      hypersonic: {
        label: "Hypersonic",
        icon: "fa-meteor",
        items: [
          { name: "Fattah II", range: "1,400+ km", type: "Hypersonic ballistic", details: "Complex maneuverability and high speed (Mach 5+). Designed to defeat modern defense systems like Arrow, THAAD, and Patriot. Represents significant evolution in arsenal.", icon: "fa-bolt" },
        ]
      },
      naval: {
        label: "Naval & Asymmetric",
        icon: "fa-anchor",
        items: [
          { name: "IRIS Dena (Frigate)", range: "N/A", type: "Frigate", details: "Sunk by USS Charlotte near Sri Lanka with Mark 48 torpedo. Had participated in International Fleet Review 2026 in India.", icon: "fa-ship" },
          { name: "IRIS Shahid Soleimani", range: "N/A", type: "Corvette", details: "Sunk by US forces along with 17 other ships/submarines on Mar 3.", icon: "fa-ship" },
          { name: "Small Attack Vessels", range: "Coastal", type: "Asymmetric swarm", details: "Armed with anti-ship missiles and marine drones. Coordinate swarm attacks on trade routes and naval forces.", icon: "fa-sailboat" },
          { name: "Mine-laying Vessels", range: "Strait of Hormuz", type: "Mine warfare", details: "16 mine-laying vessels struck by US on Mar 7. Used to threaten Hormuz shipping lanes.", icon: "fa-triangle-exclamation" },
          { name: "Commercial Ship Attacks", range: "Strait of Hormuz", type: "Sabotage", details: "10 commercial ships blown up in Hormuz in a single day (Mar 4). At least 10 oil tankers attacked since Feb 28.", icon: "fa-fire" },
        ]
      },
      airforce: {
        label: "Air Force",
        icon: "fa-fighter-jet",
        items: [
          { name: "Su-24 Bombers", range: "Combat radius 600 km", type: "Strike bomber", details: "Two shot down by Qatari F-15s on Mar 2 — were 2 minutes from Qatari territory targeting Al Udeid/Ras Laffan.", icon: "fa-jet-fighter" },
          { name: "Su-35 Fighters (Russian)", range: "3,600 km", type: "Air superiority", details: "Nearly 50 Russian-built jets being integrated into Iranian Air Force. Equipped with R-37M long-range air-to-air missiles.", icon: "fa-jet-fighter" },
          { name: "MiG-29 Fighters", range: "1,500 km", type: "Multirole", details: "Russian-supplied legacy fighters still in service.", icon: "fa-jet-fighter" },
          { name: "F-14 Tomcat", range: "3,200 km", type: "Interceptor", details: "Legacy US aircraft from pre-revolution. Targeted by Israeli strikes.", icon: "fa-plane" },
          { name: "F-4 Phantom / F-5 Tiger", range: "Various", type: "Legacy", details: "Aging fleet from Shah era. Struck by Israeli attacks on Mar 1.", icon: "fa-plane" },
          { name: "Yak-130 Trainer/Light Attack", range: "2,000 km", type: "Training/light attack", details: "One downed by Israeli F-35I on Mar 4.", icon: "fa-plane" },
        ]
      },
      airdefense: {
        label: "Air Defense",
        icon: "fa-shield-halved",
        items: [
          { name: "S-300 (Russian)", range: "200 km", type: "Long-range SAM", details: "Iran's primary long-range air defense system. Russian-supplied.", icon: "fa-shield" },
          { name: "HQ-9B (Chinese)", range: "200 km", type: "Long-range SAM", details: "Chinese-supplied. Reports indicate it struggled against advanced Western/Israeli radar jamming in 2026.", icon: "fa-shield" },
          { name: "Verba MANPADS (Russian)", range: "6 km", type: "Short-range", details: "9K333 shoulder-fired system with 9M336 IR-homing missiles. Purchased late 2025 for low-altitude defense.", icon: "fa-person-military-rifle" },
        ]
      },
      cluster: {
        label: "Cluster Munitions",
        icon: "fa-burst",
        items: [
          { name: "Cluster Bomb Warheads", range: "On ballistic missiles", type: "Area-denial", details: "Warheads burst at high altitude, scattering dozens of bomblets. ~50% of projectiles toward Israel by Mar 10. Bomblets (<3kg) lethal to people outside shelters. Arrow can intercept carrier missile but not dispersed bomblets. Iron Dome not designed for cluster munitions.", icon: "fa-circle-nodes" },
        ]
      }
    }
  },
  us: {
    label: "United States",
    icon: "🇺🇸",
    color: "#1565c0",
    categories: {
      fighters: {
        label: "Combat Aircraft",
        icon: "fa-jet-fighter",
        items: [
          { name: "F-35 Lightning II", range: "2,200 km", type: "Stealth multirole", details: "~30 Air Force F-35s amassed from RAF Lakenheath 48th FW and Vermont ANG 158th FW. Marine F-35Cs from VMFA-314 on USS Abraham Lincoln. On Mar 20, one F-35 made emergency landing after Iran mission — likely hit by Iranian fire (would be first confirmed F-35 combat damage).", icon: "fa-jet-fighter" },
          { name: "F-22 Raptor", range: "2,960 km", type: "Air superiority", details: "~12 from Joint Base Langley-Eustis deployed to Israel — first combat deployment there. Likely escorted strike aircraft and engaged air-to-air threats.", icon: "fa-jet-fighter" },
          { name: "F-15E Strike Eagle", range: "3,900 km", type: "Strike fighter", details: "Multiple squadrons in Middle East. Effective shooting down Iranian drones and missiles. 3 lost to Kuwaiti friendly fire (crews survived).", icon: "fa-jet-fighter" },
          { name: "F-16 Fighting Falcon", range: "4,220 km", type: "Multirole / SEAD", details: "Dozens in region including 'Wild Weasel' SEAD variants from Spangdahlem ('SP' tails). Suppression of enemy air defenses.", icon: "fa-jet-fighter" },
          { name: "F/A-18 Super Hornet", range: "2,300 km", type: "Carrier strike", details: "Operated from USS Ford and USS Lincoln. Strike missions with Tomahawks and drones against command centers.", icon: "fa-jet-fighter" },
          { name: "EA-18G Growler", range: "2,300 km", type: "Electronic attack", details: "Jams and attacks enemy air defenses. Both carriers carry them. ~6 operating from regional base. Used in both Epic Fury and prior Operation Absolute Resolve.", icon: "fa-tower-broadcast" },
          { name: "A-10 Thunderbolt II", range: "4,150 km", type: "Ground attack", details: "At least one squadron in Middle East. Chairman of Joint Chiefs confirmed A-10 'Warthogs' are hunting and killing Iranian fast-attack watercraft in Strait of Hormuz (Mar 20).", icon: "fa-jet-fighter" },
        ]
      },
      bombers: {
        label: "Bombers",
        icon: "fa-plane",
        items: [
          { name: "B-2 Spirit", range: "11,100 km", type: "Stealth bomber", details: "4 B-2s flew round-trip from US to strike hardened ballistic missile sites with 2,000-lb guided bombs on Day 1. Penetration of heavily defended targets.", icon: "fa-plane" },
          { name: "B-1B Lancer", range: "12,000 km", type: "Strategic bomber", details: "12 B-1Bs operating from RAF Fairford, UK as of Mar 13. Central to bombing campaign against Iranian missile facilities.", icon: "fa-plane" },
          { name: "B-52 Stratofortress", range: "14,080 km", type: "Strategic bomber", details: "6 B-52s at RAF Fairford. Long-range strike platform. 18 total bombers at the base for Iran campaign.", icon: "fa-plane" },
        ]
      },
      missiles: {
        label: "Missiles & Munitions",
        icon: "fa-rocket",
        items: [
          { name: "Tomahawk Cruise Missile", range: "1,600+ km", type: "Land-attack cruise", details: "Central to opening phase. Subsonic, all-weather, low-altitude radar evasion. Launched from destroyers and submarines.", icon: "fa-rocket" },
          { name: "PrSM (Precision Strike Missile)", range: "500+ km (up to 1,000 km planned)", type: "Tactical ballistic", details: "FIRST EVER COMBAT USE during Operation Epic Fury. Fired from HIMARS. Replaces ATACMS. Increment 1 range exceeds old INF Treaty limits.", icon: "fa-rocket" },
          { name: "JDAM (Joint Direct Attack Munition)", range: "28 km (glide)", type: "GPS-guided bomb kit", details: "Converts conventional bombs into precision weapons. Accurate in poor weather. Widely used by strike aircraft.", icon: "fa-bomb" },
          { name: "GBU-28 Bunker Buster", range: "Dropped from aircraft", type: "5,000-lb penetrator", details: "Laser-guided. Hardened casing breaks through concrete before detonating. Used against underground bunkers and nuclear facilities.", icon: "fa-bomb" },
          { name: "GBU-72 Advanced 5K Penetrator", range: "Dropped from aircraft", type: "5,000-lb penetrator", details: "Confirmed Mar 20 as the weapon used against underground coastal defence cruise missile storage along the Strait of Hormuz. Next-generation deep-penetration bomb.", icon: "fa-bomb" },
          { name: "Mark 48 Torpedo", range: "50+ km", type: "Heavyweight torpedo", details: "Fired by USS Charlotte submarine to sink IRIS Dena frigate near Sri Lanka. Wire/acoustic guided.", icon: "fa-water" },
          { name: "LUCAS Drones", range: "Various", type: "One-way attack", details: "Low-Cost Uncrewed Combat Attack System — modeled after Iranian Shahed drones. First-ever combat use by Task Force Scorpion Strike. 'American-made retribution.'", icon: "fa-paper-plane" },
        ]
      },
      naval: {
        label: "Naval Assets",
        icon: "fa-anchor",
        items: [
          { name: "USS Gerald R. Ford (CVN-78)", range: "Unlimited", type: "Aircraft carrier", details: "Lead carrier with full air wing including F/A-18s, EA-18Gs, E-2D Hawkeyes. Operated in Eastern Mediterranean.", icon: "fa-ship" },
          { name: "USS Abraham Lincoln (CVN-72)", range: "Unlimited", type: "Aircraft carrier", details: "Operating south of Iran with Marine F-35Cs from VMFA-314. Second carrier in theater.", icon: "fa-ship" },
          { name: "USS George H.W. Bush (CVN-77)", range: "Unlimited", type: "Aircraft carrier", details: "Third carrier deployed Mar 7. Strikes on Tehran/Isfahan infrastructure.", icon: "fa-ship" },
          { name: "USS Charlotte (SSN-766)", range: "Unlimited", type: "Los Angeles-class submarine", details: "Torpedoed and sank IRIS Dena near Sri Lanka. Mark 48 torpedo engagement.", icon: "fa-water" },
          { name: "Guided-Missile Destroyers", range: "Unlimited", type: "Arleigh Burke-class", details: "Numerous destroyers accompanied both Ford and Lincoln. Multiple fired Tomahawk land-attack cruise missiles at Iran.", icon: "fa-ship" },
        ]
      },
      isr: {
        label: "ISR & Support",
        icon: "fa-satellite-dish",
        items: [
          { name: "E-3 Sentry AWACS", range: "9,250 km", type: "Command & control", details: "6 in Middle East with rotating radar. Battle management and airspace control.", icon: "fa-satellite-dish" },
          { name: "E-2D Hawkeye", range: "2,580 km", type: "Carrier AEW", details: "Carrier-based radar. Operated from Ford and Lincoln during Epic Fury.", icon: "fa-satellite-dish" },
          { name: "E-11 BACN", range: "12,200 km", type: "Communications relay", details: "5 based in Middle East. Airborne communications relay for beyond-line-of-sight links.", icon: "fa-tower-broadcast" },
          { name: "P-8 Poseidon", range: "7,500 km", type: "Maritime patrol", details: "Sea surveillance near Strait of Hormuz. Multiple operating in Middle East and Mediterranean.", icon: "fa-binoculars" },
          { name: "RC-135 Rivet Joint", range: "9,130 km", type: "Signals intelligence", details: "Among most valuable US spy planes. Multiple operating from Crete, Greece.", icon: "fa-tower-observation" },
          { name: "MQ-9 Reaper", range: "1,850 km", type: "RPAS/Drone", details: "Intelligence, battle damage assessment, precision strikes. Approximately 12 MQ-9s lost since Feb 28. Italian MQ-9 destroyed at Ali Al Salem (Mar 15).", icon: "fa-plane-up" },
          { name: "KC-46 Pegasus / KC-135", range: "Various", type: "Aerial refueling", details: "Dozens stationed in Europe and Middle East. Critical for long-range strike missions. 2 collided over Iraq (Mar 12) — 4 killed, 2 missing. 5 damaged at Prince Sultan AB.", icon: "fa-gas-pump" },
          { name: "C-17 Globemaster III / C-130", range: "Various", type: "Airlift", details: "Dozens of flights hauling weapons, people, cargo to Middle East. Extremely active pre-strike logistics.", icon: "fa-truck-plane" },
          { name: "HIMARS Launcher", range: "500+ km (with PrSM)", type: "Rocket artillery", details: "M-142 platform for PrSM and ATACMS. Long deployed in Middle East. First PrSM combat use confirmed.", icon: "fa-rocket" },
        ]
      },
      airdefense: {
        label: "Air Defense",
        icon: "fa-shield-halved",
        items: [
          { name: "MIM-104 Patriot", range: "160 km", type: "SAM system", details: "Primary air defense for Middle East bases. Intercepted numerous Iranian ballistic missiles.", icon: "fa-shield" },
          { name: "THAAD", range: "200 km", type: "High-altitude BMD", details: "Terminal High Altitude Area Defense. Radar damaged in Jordan (Mar 6), replaced. Shields against medium-range ballistic missiles.", icon: "fa-shield" },
          { name: "Standard Missile (SM-2/SM-6)", range: "240+ km", type: "Naval SAM", details: "Fired from destroyers and cruisers. Naval component of multi-layer air defense.", icon: "fa-shield" },
        ]
      }
    }
  },
  israel: {
    label: "Israel",
    icon: "🇮🇱",
    color: "#0d47a1",
    categories: {
      aircraft: {
        label: "Combat Aircraft",
        icon: "fa-jet-fighter",
        items: [
          { name: "F-35I 'Adir'", range: "2,200 km", type: "Stealth multirole", details: "Penetrated Iranian airspace using low-visibility design and advanced sensors. Downed Iranian Yak-130 on Mar 4. Intelligence gathering and precision strikes.", icon: "fa-jet-fighter" },
          { name: "F-15I 'Ra'am'", range: "5,745 km", type: "Strike fighter", details: "Carried heavy bomb loads over long distances to Iranian targets. Primary long-range strike platform.", icon: "fa-jet-fighter" },
        ]
      },
      missiles: {
        label: "Missiles & Munitions",
        icon: "fa-rocket",
        items: [
          { name: "Delilah Cruise Missile", range: "250 km", type: "Stand-off", details: "Allows aircraft to fire from outside enemy air defense range. Precision land-attack.", icon: "fa-rocket" },
          { name: "Rampage Missile", range: "250+ km", type: "Stand-off", details: "Air-launched ballistic missile. Supersonic. Used against hardened and defended sites.", icon: "fa-rocket" },
          { name: "SPICE Guidance Kit", range: "100+ km", type: "Precision bomb kit", details: "Converts standard bombs into smart munitions. Effective in GPS-jammed environments using scene-matching.", icon: "fa-bomb" },
        ]
      },
      airdefense: {
        label: "Air Defense",
        icon: "fa-shield-halved",
        items: [
          { name: "Arrow (2/3)", range: "150+ km / exo-atmospheric", type: "Ballistic missile defense", details: "Good performance intercepting Iranian ballistic missiles. Cannot stop cluster bomblets once dispersed.", icon: "fa-shield" },
          { name: "David's Sling", range: "300 km", type: "Medium-range defense", details: "Designed for cruise missiles and medium-range ballistic threats.", icon: "fa-shield" },
          { name: "Iron Dome", range: "70 km", type: "Short-range defense", details: "Geared toward rockets from short ranges/low altitudes. Not designed for cluster munition bomblets.", icon: "fa-shield" },
        ]
      },
      strikes: {
        label: "Key Strikes",
        icon: "fa-crosshairs",
        items: [
          { name: "Natanz Nuclear Site", range: "—", type: "Strategic strike", details: "Hit nuclear site entrance on Mar 2. Special forces operations conducted.", icon: "fa-radiation" },
          { name: "Targeted Killing — Khamenei", range: "—", type: "Decapitation strike", details: "Targeted killing of Ayatollah Ali Khamenei in compound in Tehran (Mar 1).", icon: "fa-crosshairs" },
          { name: "SNSC HQ + Covert Nuclear Site", range: "—", type: "Strategic strike", details: "Destroyed on Mar 3 along with 300+ missile launchers and Bushehr Airport.", icon: "fa-radiation" },
          { name: "300+ Ballistic Sites", range: "—", type: "Systematic destruction", details: "Rendered inoperable by Mar 14. 260–290 of 410–440 launchers destroyed (ISW). 60%+ neutralized.", icon: "fa-explosion" },
          { name: "Targeted Killing — Intelligence Min. Khatib", range: "—", type: "Decapitation strike", details: "Israel confirmed killing of Iran's Intelligence Minister Khatib in overnight air attack on Tehran (Mar 18). Other senior intelligence officials also eliminated.", icon: "fa-crosshairs" },
          { name: "South Pars Gas Facilities", range: "—", type: "Strategic infrastructure", details: "Offshore natural gas facilities associated with South Pars field attacked (Mar 18). South Pars is Iran's largest natural gas field.", icon: "fa-fire" },
          { name: "Taleghan Compound (Parchin)", range: "—", type: "Nuclear strike", details: "Covert nuclear weapons development site southeast of Tehran. Struck by Israeli Air Force on Mar 20 based on precise intelligence to prevent nuclear weapon development.", icon: "fa-radiation" },
          { name: "Kuh-e Barjamali Assembly Facility", range: "—", type: "Missile production", details: "Short/medium-range ballistic missile final assembly site at Khojir Aerospace Complex. CENTCOM published damage imagery from Mar 7 strikes. Produced Fath-360, Fateh-110, Zolfaghar, and Haj Qasem missiles. Iran supplied Fath-360s to Russia for Ukraine.", icon: "fa-industry" },
          { name: "Khojir Aerospace Complex", range: "—", type: "Defence industrial", details: "IDF struck Defence Ministry weapons production/storage site at this complex east of Tehran (Mar 22). Extensive damage to planetary mixer and casting sites confirmed from Mar 4 satellite imagery.", icon: "fa-industry" },
          { name: "Decapitation — Basij Leadership", range: "—", type: "Targeted killing", details: "IDF killed Basij Commander Brig Gen Soleimani and deputy Ghoreyshi (Mar 17), Basij Intelligence Chief Esmail Ahmadi (Mar 20), IRGC Spokesperson Brig Gen Naeini (Mar 20), IRGC Aerospace Commander in Esfahan Ghoreyshi (Mar 20), and Intel Ministry official Shamestan (Mar 20).", icon: "fa-crosshairs" },
          { name: "Intelligence Ministry HQs", range: "—", type: "Strategic strike", details: "Multiple Intelligence and Security Ministry headquarters struck in Tehran. Minister Khatib killed Mar 18. Additional HQ and improvised 'emergency command centre' struck Mar 22.", icon: "fa-building" },
        ]
      }
    }
  },
  gulf: {
    label: "Gulf States",
    icon: "🌊",
    color: "#00695c",
    categories: {
      airdefense: {
        label: "Air Defense Systems",
        icon: "fa-shield-halved",
        items: [
          { name: "MIM-104 Patriot (US)", range: "160 km", type: "SAM", details: "Backbone of Saudi and UAE defense. Used extensively to intercept Iranian ballistic missiles and drones across all Gulf states.", icon: "fa-shield" },
          { name: "THAAD (US)", range: "200 km", type: "BMD", details: "High-altitude intercept. Deployed in UAE and Saudi Arabia. Radar damaged in Jordan.", icon: "fa-shield" },
          { name: "Pantsir-S1 (Russian)", range: "20 km", type: "Short-range SHORAD", details: "Used by UAE and Saudi Arabia for point defense against drones and cruise missiles.", icon: "fa-shield" },
          { name: "Barak MX (Israeli — IAI)", range: "150 km", type: "Multi-layer defense", details: "Sold to UAE. Intercepts UAVs, missiles, rockets, aircraft. Deal estimated at ~$600 million.", icon: "fa-shield" },
          { name: "SPYDER (Israeli — Rafael)", range: "80 km", type: "SAM", details: "Based on Python 5 and Derby air-to-air missiles. Sold to UAE.", icon: "fa-shield" },
          { name: "SkyKnight (UAE/German)", range: "Various", type: "Counter-drone", details: "Developed by Abu Dhabi's EDGE Group with Germany's Rheinmetall. Electronic/kinetic drone defeat.", icon: "fa-shield" },
        ]
      },
      aircraft: {
        label: "Combat Aircraft",
        icon: "fa-jet-fighter",
        items: [
          { name: "F-15 (Qatar)", range: "5,550 km", type: "Air superiority", details: "Qatari F-15s shot down 2 Iranian Su-24 bombers on Mar 2 — first QEAF air-to-air kill. Aircraft were 2 min from Qatari territory.", icon: "fa-jet-fighter" },
          { name: "F/A-18 Hornet (Kuwait)", range: "3,300 km", type: "Multirole", details: "Kuwaiti F/A-18 shot down 3 American F-15Es in friendly fire incident on Mar 2. US crews survived.", icon: "fa-jet-fighter" },
          { name: "F-16 Block 60 'Desert Falcon' (UAE)", range: "4,220 km", type: "Advanced multirole", details: "Advanced variant operated by UAE with conformal fuel tanks and advanced avionics.", icon: "fa-jet-fighter" },
          { name: "Dassault Rafale F4 (UAE — procuring)", range: "3,700 km", type: "Multirole", details: "UAE is procuring French Rafale F4 for additional air superiority capability.", icon: "fa-jet-fighter" },
        ]
      },
      performance: {
        label: "Interception Performance",
        icon: "fa-chart-bar",
        items: [
          { name: "UAE Performance", range: "—", type: "Stats", details: "174 ballistic missiles tracked (161 intercepted = 92.5%), 689 drones (645 intercepted = 93.6%), 8 cruise missiles struck. Interceptor stockpile concerns by Day 3.", icon: "fa-chart-simple" },
          { name: "Bahrain Performance", range: "—", type: "Stats", details: "125 missiles + 211 drones intercepted by Mar 15. 54 strikes intercepted by early March.", icon: "fa-chart-simple" },
          { name: "Qatar Performance", range: "—", type: "Stats", details: "66 missiles intercepted on Day 1 alone. Multiple overnight interception operations. F-15s achieved air-to-air kills.", icon: "fa-chart-simple" },
          { name: "Jordan Performance", range: "—", type: "Stats", details: "Week 1: 108 of 119 intercepted (90.8%). Week 2: 79 of 85 intercepted (92.9%). Total: 187 of 204.", icon: "fa-chart-simple" },
          { name: "Saudi Performance", range: "—", type: "Stats", details: "Multiple interception waves. Ras Tanura, Shaybah, Riyadh/Eastern Province defended. Prince Sultan AB struck despite defense.", icon: "fa-chart-simple" },
          { name: "Stockpile Concern", range: "—", type: "Warning", details: "By Day 3, concerns emerged in UAE and Qatar about rapid depletion of interceptor missile stockpiles at current fire rates.", icon: "fa-triangle-exclamation" },
        ]
      }
    }
  },
  russia: {
    label: "Russia",
    icon: "🇷🇺",
    color: "#b71c1c",
    categories: {
      supplied: {
        label: "Supplied to Iran",
        icon: "fa-truck-fast",
        items: [
          { name: "Su-35 Fighter Jets", range: "3,600 km", type: "Air superiority", details: "Nearly 50 being integrated into Iranian Air Force. Frequently equipped with R-37M long-range AAMs. Major upgrade over legacy fleet.", icon: "fa-jet-fighter" },
          { name: "R-37M Air-to-Air Missile", range: "300+ km", type: "Long-range AAM", details: "Equipped on Su-35s. Extended-range engagement capability against aircraft and cruise missiles.", icon: "fa-rocket" },
          { name: "S-300 Air Defense System", range: "200 km", type: "Long-range SAM", details: "Iran's primary long-range air defense. Russian-supplied. Multi-target engagement capability.", icon: "fa-shield" },
          { name: "Verba (9K333) MANPADS", range: "6 km", type: "Shoulder-fired SAM", details: "Purchased late 2025 with 9M336 IR-homing missiles. Enhanced low-altitude defense against cruise missiles and drones.", icon: "fa-person-military-rifle" },
          { name: "T-72 Main Battle Tank", range: "500 km", type: "MBT", details: "Russian-supplied armored vehicle in Iranian ground forces.", icon: "fa-truck-monster" },
          { name: "BMP-2 Infantry Fighting Vehicle", range: "600 km", type: "IFV", details: "Russian-supplied for mechanized infantry operations.", icon: "fa-truck-monster" },
          { name: "MiG-29 Fighter", range: "1,500 km", type: "Multirole", details: "Legacy Russian fighter still in Iranian service. Being supplemented by Su-35s.", icon: "fa-jet-fighter" },
        ]
      },
      partnership: {
        label: "Military Partnership",
        icon: "fa-handshake",
        items: [
          { name: "Expanding Arms Supply", range: "—", type: "Strategic", details: "Russia expanding supply of SAMs, helicopters, and advanced combat aircraft to Iran — partly in exchange for Iranian drones.", icon: "fa-arrows-rotate" },
          { name: "Drone-for-Arms Exchange", range: "—", type: "Trade", details: "Iran provides Shahed-type drones to Russia for Ukraine war; Russia reciprocates with advanced military technology.", icon: "fa-arrows-rotate" },
        ]
      }
    }
  },
  china: {
    label: "China",
    icon: "🇨🇳",
    color: "#c62828",
    categories: {
      supplied: {
        label: "Support to Iran",
        icon: "fa-boxes-stacked",
        items: [
          { name: "BeiDou Navigation System", range: "Global", type: "Satellite navigation", details: "Full military access granted to Iran in 2021. Plausibly used for drone and missile guidance throughout Middle East attacks. Alternative to US-controlled GPS.", icon: "fa-satellite" },
          { name: "Sodium Perchlorate (Rocket Fuel)", range: "—", type: "Fuel precursor", details: "Two Iranian vessels departed China's Gaolan Port (week of Mar 2) with sodium perchlorate for solid rocket fuel. Similar 1,000-ton shipment in Jan 2025.", icon: "fa-flask" },
          { name: "Drone Components", range: "—", type: "Technology transfer", details: "Sensors, semiconductors, and guidance kits enabling increased Iranian drone production and capabilities.", icon: "fa-microchip" },
          { name: "HQ-9 Air Defense System", range: "200 km", type: "SAM (exported)", details: "Chinese air defense used by Iran. HQ-9B reportedly struggled against advanced Western/Israeli radar jamming in 2026.", icon: "fa-shield" },
          { name: "Anti-Ship Cruise Missiles", range: "Various", type: "Naval strike", details: "Nearly finalized deal for anti-ship cruise missiles. Delivery date not agreed. Would represent shift toward direct kinetic military support.", icon: "fa-ship" },
          { name: "Offensive Drones", range: "Various", type: "UAV", details: "Reports of direct drone sales to Iran in the days leading up to February 2026 strikes.", icon: "fa-plane-up" },
          { name: "Electronic Warfare Systems", range: "—", type: "EW", details: "Reportedly supplied systems designed to jam stealth aircraft. Navigational support via BeiDou.", icon: "fa-tower-broadcast" },
        ]
      }
    }
  },
  europe: {
    label: "European & Allied",
    icon: "🇪🇺",
    color: "#283593",
    categories: {
      uk: {
        label: "United Kingdom",
        icon: "fa-flag",
        items: [
          { name: "RAF Typhoon", range: "3,790 km", type: "Multirole fighter", details: "Shot down attack drone directed at Qatar (Mar 2). Defensive air sorties in UAE (Mar 9).", icon: "fa-jet-fighter" },
          { name: "HMS Dragon (Destroyer)", range: "Unlimited", type: "Type 45 destroyer", details: "Deployed to defend Cyprus alongside European coalition.", icon: "fa-ship" },
          { name: "AW159 Wildcat Helicopters", range: "780 km", type: "Naval helicopter", details: "2 deployed with HMS Dragon for maritime/anti-drone operations.", icon: "fa-helicopter" },
          { name: "RAF Fairford (Bomber Base)", range: "—", type: "Forward operating base", details: "18 US bombers (12 B-1B + 6 B-52) operating from Gloucestershire, England for Iran campaign.", icon: "fa-warehouse" },
          { name: "RAF Lakenheath (Fighter Base)", range: "—", type: "Forward operating base", details: "F-35s and F-15Es with 'LN' tail codes participating in air campaign.", icon: "fa-warehouse" },
          { name: "RAF Akrotiri, Cyprus", range: "—", type: "Forward operating base", details: "Struck by Shahed-type drone (Mar 1) hitting hangar. Partial evacuation. British forces intercepted 2 more drones later.", icon: "fa-warehouse" },
        ]
      },
      france: {
        label: "France",
        icon: "fa-flag",
        items: [
          { name: "Dassault Rafale Jets", range: "3,700 km", type: "Multirole fighter", details: "Deployed to protect French bases following attacks at Camp de la Paix and Al Dhafra (Mar 3).", icon: "fa-jet-fighter" },
          { name: "Languedoc Frigate", range: "Unlimited", type: "FREMM frigate", details: "Deployed to defend Cyprus as part of 7-nation coalition.", icon: "fa-ship" },
          { name: "Air Defence & Anti-Drone Systems", range: "Various", type: "Ground-based", details: "Deployed to Cyprus for base defense.", icon: "fa-shield" },
          { name: "Camp de la Paix", range: "—", type: "Naval air base", details: "Near Zayed Port, Abu Dhabi. Struck by Iranian drones (Mar 1).", icon: "fa-warehouse" },
        ]
      },
      greece: {
        label: "Greece",
        icon: "fa-flag",
        items: [
          { name: "F-16V Fighters", range: "4,220 km", type: "Multirole", details: "4 deployed. Intercepted 2 Iranian drones in Lebanese airspace headed toward Cyprus (Mar 4).", icon: "fa-jet-fighter" },
          { name: "HS Kimon & Psara Frigates", range: "Unlimited", type: "Frigates", details: "Deployed to defend Cyprus as part of coalition.", icon: "fa-ship" },
        ]
      },
      others: {
        label: "Other Nations",
        icon: "fa-globe",
        items: [
          { name: "Italy — Federico Martinengo Frigate", range: "Unlimited", type: "Frigate", details: "Deployed to Cyprus defense. Italian forces at Ali Al Salem; MQ-9 Reaper destroyed (Mar 15).", icon: "fa-ship" },
          { name: "Spain — Cristóbal Colón Frigate", range: "Unlimited", type: "F100 frigate", details: "Deployed to defend Cyprus.", icon: "fa-ship" },
          { name: "Germany — Nordrhein-Westfalen Frigate", range: "Unlimited", type: "F125 frigate", details: "Deployed to Cyprus. Spangdahlem AB F-16 'Wild Weasels' ('SP' tails) in air campaign.", icon: "fa-ship" },
          { name: "Netherlands — HNLMS Evertsen Frigate", range: "Unlimited", type: "De Zeven Provinciën-class", details: "Deployed to defend Cyprus.", icon: "fa-ship" },
          { name: "Canada — Military Presence", range: "—", type: "Ground forces", details: "Camp Canada at Ali Al Salem struck (Mar 2, revealed Mar 12). No casualties. Government criticized for lack of transparency.", icon: "fa-person-military-rifle" },
          { name: "Australia — Boeing E-7 Wedgetail", range: "7,040 km", type: "EWACS", details: "Sent to UAE with missiles but no troops (Mar 10). Closed embassy/consulate in Abu Dhabi/Dubai.", icon: "fa-satellite-dish" },
        ]
      }
    }
  }
};

// ===== WEAPON IMAGES (Wikimedia Commons) =====
const weaponImages = {
  // Iran - Ballistic
  "Fateh-110": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Fateh-110_Missile_by_YPA.IR_02.jpg/330px-Fateh-110_Missile_by_YPA.IR_02.jpg",
  "Shahab-3": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Great_Prophet_II_%2830%29.jpg/330px-Great_Prophet_II_%2830%29.jpg",
  "Emad": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Emad_missile_by_Tasnimnews_03.jpg/330px-Emad_missile_by_Tasnimnews_03.jpg",
  "Sejjil": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Sejjil_missile_launch_-_November_2008_%2821%29.jpg/330px-Sejjil_missile_launch_-_November_2008_%2821%29.jpg",
  // Iran - Cruise / Drone / Hypersonic
  "Shahed-136 / Shahed-type": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/2023_IRGC_Aerospace_Force_achievements_Exhibition_in_Qom_%2833%29.jpg/330px-2023_IRGC_Aerospace_Force_achievements_Exhibition_in_Qom_%2833%29.jpg",
  "Fattah II": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Unveiling_ceremony_of_Fattah_hypersonic_missile_%2864%29.jpg/330px-Unveiling_ceremony_of_Fattah_hypersonic_missile_%2864%29.jpg",
  // Iran - Air Force
  "Su-24 Bombers": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sukhoi_Su-24_inflight_Mishin-2.jpg/330px-Sukhoi_Su-24_inflight_Mishin-2.jpg",
  "Su-35 Fighters (Russian)": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Russian_Air_Force%2C_RF-81719%2C_Sukhoi_Su-35S_%2849581740157%29.jpg/330px-Russian_Air_Force%2C_RF-81719%2C_Sukhoi_Su-35S_%2849581740157%29.jpg",
  // Iran - Air Defense
  "S-300 (Russian)": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/S-300_-_2009_Moscow_Victory_Day_Parade_%282%29.jpg/330px-S-300_-_2009_Moscow_Victory_Day_Parade_%282%29.jpg",
  "IRIS Dena (Frigate)": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Iranian_naval_personnel_reunite_with_their_family_after_the_first_voyage_around_the_world_%2803%29.jpg/330px-Iranian_naval_personnel_reunite_with_their_family_after_the_first_voyage_around_the_world_%2803%29.jpg",
  // US - Combat Aircraft
  "F-35 Lightning II": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/F-35A_flight_%28cropped%29.jpg/330px-F-35A_flight_%28cropped%29.jpg",
  "F-22 Raptor": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg/330px-F-22_Raptor_edit1_%28cropped%29.jpg",
  "F-15E Strike Eagle": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/F-15E_takes_on_fuel_from_KC-10.jpg/330px-F-15E_takes_on_fuel_from_KC-10.jpg",
  "F-16 Fighting Falcon": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/F-16_June_2008.jpg/330px-F-16_June_2008.jpg",
  "F/A-18 Super Hornet": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/US_Navy_071203-N-8923M-074_An_F-A-18F_Super_Hornet%2C_from_the_Red_Rippers_of_Strike_Fighter_Squadron_%28VFA%29_11%2C_makes_a_sharp_turn_above_the_flight_deck_aboard_the_Nimitz-class_nuclear-powered_aircraft_carrier_USS_Harry_S._Truman.jpg/330px-thumbnail.jpg",
  "EA-18G Growler": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/U.S._Navy_EA-18G_Growler_breaks_away_from_a_U.S._Air_Force_KC-135_%28altered%29.jpg/330px-U.S._Navy_EA-18G_Growler_breaks_away_from_a_U.S._Air_Force_KC-135_%28altered%29.jpg",
  "A-10 Thunderbolt II": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Fairchild_Republic_A-10_Thunderbolt_II_-_32156159151.jpg/330px-Fairchild_Republic_A-10_Thunderbolt_II_-_32156159151.jpg",
  // US - Bombers
  "B-2 Spirit": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/RAF_F-35B_integration_flying_training_with_USAF_B-2_30092019_-_4.jpg/330px-RAF_F-35B_integration_flying_training_with_USAF_B-2_30092019_-_4.jpg",
  "B-1B Lancer": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/B-1B_air_refueling.jpg/330px-B-1B_air_refueling.jpg",
  "B-52 Stratofortress": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/B-52_Stratofortress_assigned_to_the_307th_Bomb_Wing_%28cropped%29.jpg/330px-B-52_Stratofortress_assigned_to_the_307th_Bomb_Wing_%28cropped%29.jpg",
  // US - Missiles
  "Tomahawk Cruise Missile": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tomahawk_Block_IV_cruise_missile_-crop.jpg/330px-Tomahawk_Block_IV_cruise_missile_-crop.jpg",
  "GBU-28 Bunker Buster": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Mk_48_torpedo_maintenance_1982.JPEG/330px-Mk_48_torpedo_maintenance_1982.JPEG",
  "Mark 48 Torpedo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Mk_48_torpedo_maintenance_1982.JPEG/330px-Mk_48_torpedo_maintenance_1982.JPEG",
  // US - ISR/Support
  "MQ-9 Reaper": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/MQ-9_Reaper_UAV_%28cropped%29.jpg/330px-MQ-9_Reaper_UAV_%28cropped%29.jpg",
  "HIMARS Launcher": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/HIMARS_-_missile_launched.jpg/330px-HIMARS_-_missile_launched.jpg",
  "E-3 Sentry AWACS": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/E-3_Sentry_Airborne_Warning_and_Control_System_%28AWACS%29_conducts_a_mission.jpg/330px-E-3_Sentry_Airborne_Warning_and_Control_System_%28AWACS%29_conducts_a_mission.jpg",
  "P-8 Poseidon": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/US_Navy_P-8_Poseidon_taking_off_at_Perth_Airport.jpg/330px-US_Navy_P-8_Poseidon_taking_off_at_Perth_Airport.jpg",
  "KC-46 Pegasus / KC-135": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/KC-46_Pegasus_prepares_to_refuel_C-17_%28cropped%29.jpg/330px-KC-46_Pegasus_prepares_to_refuel_C-17_%28cropped%29.jpg",
  "C-17 Globemaster III / C-130": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/C-17_test_sortie.jpg/330px-C-17_test_sortie.jpg",
  // US - Naval
  "USS Gerald R. Ford (CVN-78)": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/USS_Gerald_R._Ford_%28CVN-78%29_underway_in_the_Atlantic_Ocean_on_9_October_2022_%28221009-N-TL968-1248%29.JPG/330px-USS_Gerald_R._Ford_%28CVN-78%29_underway_in_the_Atlantic_Ocean_on_9_October_2022_%28221009-N-TL968-1248%29.JPG",
  // US - Air Defense
  "MIM-104 Patriot": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/U-s-service-members-stand-by-a-patriot-missile-battery-in-gaziantep-turkey.jpg/330px-U-s-service-members-stand-by-a-patriot-missile-battery-in-gaziantep-turkey.jpg",
  "THAAD": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_first_of_two_Terminal_High_Altitude_Area_Defense_%28THAAD%29_interceptors_is_launched_during_a_successful_intercept_test_-_US_Army.jpg/330px-The_first_of_two_Terminal_High_Altitude_Area_Defense_%28THAAD%29_interceptors_is_launched_during_a_successful_intercept_test_-_US_Army.jpg",
  // Israel
  "F-35I 'Adir'": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/F-35A_flight_%28cropped%29.jpg/330px-F-35A_flight_%28cropped%29.jpg",
  "F-15I 'Ra'am'": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/F-15E_takes_on_fuel_from_KC-10.jpg/330px-F-15E_takes_on_fuel_from_KC-10.jpg",
  "Iron Dome": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/IDF_Iron_Dome_2021.jpg/330px-IDF_Iron_Dome_2021.jpg",
  "Arrow (2/3)": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/IAF-Arrow-3-%D7%97%D7%A5-sq1666.jpg/330px-IAF-Arrow-3-%D7%97%D7%A5-sq1666.jpg",
  "David's Sling": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/David-Sling-0001.jpg/330px-David-Sling-0001.jpg",
  // Gulf - Air Defense
  "MIM-104 Patriot (US)": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/U-s-service-members-stand-by-a-patriot-missile-battery-in-gaziantep-turkey.jpg/330px-U-s-service-members-stand-by-a-patriot-missile-battery-in-gaziantep-turkey.jpg",
  "THAAD (US)": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_first_of_two_Terminal_High_Altitude_Area_Defense_%28THAAD%29_interceptors_is_launched_during_a_successful_intercept_test_-_US_Army.jpg/330px-The_first_of_two_Terminal_High_Altitude_Area_Defense_%28THAAD%29_interceptors_is_launched_during_a_successful_intercept_test_-_US_Army.jpg",
  "Pantsir-S1 (Russian)": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/MAKS_Airshow_2013_%28Ramenskoye_Airport%2C_Russia%29_%28521-05%29.jpg/330px-MAKS_Airshow_2013_%28Ramenskoye_Airport%2C_Russia%29_%28521-05%29.jpg",
  // Gulf - Aircraft
  "Dassault Rafale F4 (UAE — procuring)": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Rafale_-_RIAT_2009_%283751416421%29.jpg/330px-Rafale_-_RIAT_2009_%283751416421%29.jpg",
  // Russia
  "Su-35 Fighter Jets": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Russian_Air_Force%2C_RF-81719%2C_Sukhoi_Su-35S_%2849581740157%29.jpg/330px-Russian_Air_Force%2C_RF-81719%2C_Sukhoi_Su-35S_%2849581740157%29.jpg",
  "S-300 Air Defense System": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/S-300_-_2009_Moscow_Victory_Day_Parade_%282%29.jpg/330px-S-300_-_2009_Moscow_Victory_Day_Parade_%282%29.jpg",
  "Verba (9K333) MANPADS": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/S-300_-_2009_Moscow_Victory_Day_Parade_%282%29.jpg/330px-S-300_-_2009_Moscow_Victory_Day_Parade_%282%29.jpg",
  "MiG-29 Fighter": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sukhoi_Su-24_inflight_Mishin-2.jpg/330px-Sukhoi_Su-24_inflight_Mishin-2.jpg",
  // Europe
  "RAF Typhoon": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/RAF_Eurofighter_EF-2000_Typhoon_F2_Lofting-1.jpg/330px-RAF_Eurofighter_EF-2000_Typhoon_F2_Lofting-1.jpg",
  "Dassault Rafale Jets": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Rafale_-_RIAT_2009_%283751416421%29.jpg/330px-Rafale_-_RIAT_2009_%283751416421%29.jpg",
  "Australia — Boeing E-7 Wedgetail": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/A30-001_in_flight_over_the_United_States_in_April_2025_%28cropped%29.jpg/330px-A30-001_in_flight_over_the_United_States_in_April_2025_%28cropped%29.jpg",
};

// ===== METADATA STATS =====
const metadataStats = {
  targetsStruck: "9,000+",
  airSorties: "8,500+",
  iranianShipsDestroyed: "100+",
  launchersNeutralized: "260–290",
  totalLaunchers: "410–440",
  percentDestroyed: "60%+",
  oilTankersAttacked: "10+",
  weeksExpected: "Ongoing",
  iranDailyMissiles: "~18 (down from 182)",
  iranDailyDrones: "~25 (down from hundreds)",
  clusterMunitionRate: "~70%",
  bahInterceptions: "130+ missiles + 220+ drones",
  uaeInterceptions: "360+ missiles + 1,750+ drones",
  jordanInterceptions: "187 of 204",
  israelInterceptionRate: "92%",
  totalIranMissilesAtIsrael: "400+",
  oilExportDecline: "60%+",
  maritimeIncidents: "21 confirmed (UKMTO)",
};

// ===== MARITIME ATTACKS =====
const maritimeAttacks = [
  { date: "Mar 1", vessel: "Skylight (Palau)", location: "5nm N of Khasab, Oman", details: "4 injuries, crew evacuated" },
  { date: "Mar 1", vessel: "MKD VYOM (Marshall Islands)", location: "50nm N of Muscat", details: "1 crew member killed" },
  { date: "Mar 1", vessel: "Hercules Star (Gibraltar)", location: "17nm NW of Mina Saqr, UAE", details: "Fire extinguished" },
  { date: "Mar 2", vessel: "Stena Imperative (US-flagged)", location: "Bahrain port", details: "2 projectiles, fire, crew evacuated" },
  { date: "Mar 2", vessel: "Oil tanker (Marshall Islands)", location: "52nm off Muscat", details: "Drone boat attack, 1 killed" },
  { date: "Mar 3", vessel: "Libra Trader / Gold Oak", location: "7-10nm off Fujairah", details: "Minor damage" },
  { date: "Mar 4", vessel: "Safeen Prestige (Malta)", location: "2nm N of Oman", details: "Engine fire, crew abandoned" },
  { date: "Mar 4", vessel: "10 commercial ships", location: "Strait of Hormuz", details: "Blown up by Iran in single day" },
  { date: "Mar 5", vessel: "Sonangol Namibe", location: "Khor al-Zubair, Iraq", details: "Explosive boat drone attack" },
  { date: "Mar 6", vessel: "Tugboat", location: "6nm N of Oman", details: "Hit while assisting Safeen Prestige" },
  { date: "Mar 7", vessel: "Unknown vessel", location: "10nm N of Jubail, Saudi", details: "Possible drone attack, crew evacuated" },
  { date: "Mar 11", vessel: "Mayuree Naree (Thailand)", location: "11nm N of Oman", details: "Fire, crew evacuated" },
  { date: "Mar 11", vessel: "One Majesty (Japan)", location: "25nm NW of Ras Al Khaimah", details: "Minor damage" },
  { date: "Mar 11", vessel: "Star Gwyneth (Marshall Islands)", location: "50nm NW of Dubai", details: "Hull damaged" },
  { date: "Mar 11", vessel: "Safesea Vishnu / Zefyros", location: "Near Iraq", details: "Iraq oil ports ceased operations, 1 body recovered" },
  { date: "Mar 17", vessel: "Gas Al Ahmadiah (Kuwait)", location: "23nm E of Fujairah", details: "Minor structural damage" },
  { date: "Mar 21", vessel: "Unknown vessel", location: "15nm N of Sharjah, UAE", details: "Projectile explosion nearby — UKMTO classified as 'suspicious activity'" },
];
// Note: UKMTO has recorded 21 confirmed maritime incidents in the Strait of Hormuz since Feb 28. Last confirmed Iranian attack on a vessel was Mar 11. Daily oil exports from Middle East fallen by at least 60% since war start.

// ===== ANUSHKA'S TAKES =====
const analysisData = [
  {
    title: "The Off-the-Shelf Air Force Meets America's Copycat Drone",
    body: `Iran turned civilian engines and GPS modules into cheap, mass-produced <span class="take-ref" data-note="See Iran's full drone arsenal in the Weapons Database under Iran → Drones / UAVs." data-link="#weapons-db">"Shahed" kamikaze drones</span>. No runways, no pilots, no billion-dollar jets. It gave Iran an air force that sanctions cannot touch. The US response was to copy the playbook. Washington deployed the <span class="take-ref" data-note="See the LUCAS entry in the Weapons Database under United States → Drones / UAVs." data-link="#weapons-db">Low-Cost Uncrewed Combat Attack System (LUCAS)</span> — the first time a superpower has openly adopted its adversary's suicide-drone model. They even called it "American-made retribution."`
  },
  {
    title: "Kill the Leaders, and the Missiles Still Fly",
    body: `The US and Israel have destroyed <span class="take-ref" data-note="Launcher neutralisation counts tracked in the timeline, March 11–17, 2026." data-link="#battlefield">over 60% of Iran's rocket launchers</span>. They killed <span class="take-ref" data-note="Targeted killing of Ayatollah Khamenei detailed in the March 1 timeline entry." data-link="#battlefield">Ayatollah Ali Khamenei</span>, <span class="take-ref" data-note="Israel confirmed killing Intelligence Minister Khatib in the March 18 timeline entry." data-link="#battlefield">Intelligence Minister Khatib</span>, and <span class="take-ref" data-note="Iran's March 18 cluster missile strikes on Ramat Gan were described as revenge for Larijani's assassination." data-link="#battlefield">security chief Ali Larijani</span>. Iran kept firing. The reason is that <span class="take-ref" data-note="See the Weapons Database under Iran → Ballistic Missiles for Sejjil (2,000 km, solid-fuel) and Kheibar Shekan." data-link="#weapons-db">solid-fuel missiles like the Sejjil and Kheibar Shekan</span> need almost no prep time. They launch from hidden underground "missile cities" scattered across the country. You can wipe out the top brass and still face a barrage the next morning.`
  },
  {
    title: "Why Shooting Down a Missile Can Still Kill You",
    body: `Iran found a gap in <span class="take-ref" data-note="See the Weapons Database under Israel → Air Defence Systems for Arrow-3, Iron Dome, and David's Sling." data-link="#weapons-db">Israel's Arrow and Iron Dome</span>. The trick is cluster munitions. A missile carrying dozens of small bomblets releases them at high altitude — before interceptors can reach it. Even when the main missile is shot down, the bomblets scatter over populated areas. People outdoors have almost no protection. This is how civilians died in <span class="take-ref" data-note="March 18 timeline: cluster missiles hit Ramat Gan, killing 2. Earlier strikes on Yehud also in the timeline." data-link="#battlefield">Ramat Gan and Yehud</span>. Iron Dome was never designed for this.`
  },
  {
    title: "Swarm the Surface, Lose the Deep",
    body: `Iran does not try to match Western navies ship-for-ship. Instead, it uses <span class="take-ref" data-note="See the Weapons Database under Iran → Naval Assets for fast-attack craft, midget subs, and drone boats." data-link="#weapons-db">midget submarines, fast-attack boats, and remote-controlled explosive drone boats</span> to swarm the Strait of Hormuz and threaten commercial shipping. The US answered with what it does best underwater. The <span class="take-ref" data-note="The sinking of IRIS Dena is in the March 4 timeline. Also see Maritime & Shipping Attacks." data-link="#maritime">submarine USS Charlotte torpedoed and sank the Iranian frigate IRIS Dena</span> in the Indian Ocean — one of the only confirmed submarine-on-ship kills in modern warfare.`
  },
  {
    title: "Iran Iterates Fast. The US Spends Big.",
    body: `Iran builds weapons quickly and cheaply, testing them in the field and improving as it goes. It produced entirely new systems like the <span class="take-ref" data-note="See the Weapons Database under Iran → Air Defence for the 358 loitering SAM." data-link="#weapons-db">358 loitering surface-to-air missile</span> specifically to shoot down Western drones. To get past Iran's growing defences, the US and Israel rely on expensive stealth — <span class="take-ref" data-note="See the Weapons Database under United States → Aircraft for B-2, F-35, and F-22 deployment numbers." data-link="#weapons-db">B-2 bombers, F-35s, and F-22s</span> delivering <span class="take-ref" data-note="CENTCOM confirmed use of 5,000-lb bunker busters on Hormuz missile sites on March 17. See also Weapons Database → United States → Bombs & Munitions." data-link="#battlefield">5,000-pound GBU-28 bunker-busters</span> and Tomahawk cruise missiles. Two very different approaches to the same problem.`
  },
  {
    title: "Weapons Built to Be Smuggled",
    body: `Iran designs its weapons to come apart. Missiles and drones are built in modular pieces — small enough to fit in shipping containers, trucks, or fishing boats. This is not a bug. It is the point. It lets Iran arm groups like the <span class="take-ref" data-note="See Ecosystem of Actors for Houthi, Hezbollah, and other Iran-backed group operations." data-link="#ecosystem">Houthis and Hezbollah</span> without moving a single Iranian soldier. The front lines are outsourced. The plausible deniability is built in.`
  },
  {
    title: "Running Out of Interceptors",
    body: `Every Iranian missile or drone that gets shot down costs the defender an interceptor — and those are expensive and hard to replace quickly. Gulf states are burning through <span class="take-ref" data-note="See the Weapons Database under United States → Air Defence Systems for Patriot PAC-3 and THAAD details." data-link="#weapons-db">US-made Patriot and THAAD stockpiles</span> at a rate nobody planned for. The result is a scramble for alternatives. Arab states that never bought Israeli weapons before are now urgently shopping for <span class="take-ref" data-note="See the Weapons Database under Gulf States → Air Defence for Barak MX and SPYDER specs." data-link="#weapons-db">Israeli systems like the Barak MX and SPYDER</span>. The politics of the Middle East arms market are shifting in real time.`
  },
  {
    title: "Hitting the Money, Not the Military",
    body: `Iran has gone after the Gulf's economic infrastructure as much as its military bases. Desalination plants. <span class="take-ref" data-note="Dubai International Airport struck at least 3 times — see timeline entries for March 1, 3, and 16." data-link="#battlefield">Dubai International Airport</span> — hit three times. <span class="take-ref" data-note="BAPCO refinery fire and force majeure detailed in the March 9 timeline entry." data-link="#battlefield">Bahrain's BAPCO refinery</span> — forced into force majeure. Abu Dhabi's ADNOC refinery — shut down. Oil tankers, commercial shipping, aviation hubs. The message is simple — if you back this war, it will cost your economy. And it is working.`
  },
  {
    title: "New American Missiles Get Their First War",
    body: `This conflict is the testing ground for a new generation of US weapons. On Day 1, the Army fired the <span class="take-ref" data-note="First-ever combat use of PrSM logged on Feb 28 (Day 1) in the timeline." data-link="#battlefield">Precision Strike Missile (PrSM) in combat for the first time</span>. Launched from <span class="take-ref" data-note="See the Weapons Database under United States → Rockets & Artillery for HIMARS and PrSM specs." data-link="#weapons-db">HIMARS launchers</span>, it doubles the range of the old ATACMS to over 500 kilometres. These are the weapons the US developed after walking away from the INF Treaty. Now they have a real-world track record.`
  },
  {
    title: "Who Keeps Iran in the Fight",
    body: `Iran is not doing this alone. <span class="take-ref" data-note="See the Weapons Database under China for sodium perchlorate supply and BeiDou satellite navigation details." data-link="#weapons-db">China supplies solid rocket fuel ingredients (sodium perchlorate) and access to its BeiDou satellite navigation</span>. <span class="take-ref" data-note="See the Weapons Database under Russia for Su-35 fighters, R-37M missiles, and Verba MANPADS." data-link="#weapons-db">Russia has sent Su-35 fighters, R-37M long-range missiles, and Verba shoulder-fired air defence systems</span>. Without this support, Iran's war effort would look very different. Meanwhile, Gulf states that used to stay on the sidelines are now shooting back. The <span class="take-ref" data-note="See the Ecosystem of Actors for Qatar's role, and the March 2 timeline for this air engagement." data-link="#ecosystem">Qatari Air Force shot down two Iranian Su-24 bombers</span> — its first air-to-air kills ever — minutes before they reached Qatari territory.`
  }
];
