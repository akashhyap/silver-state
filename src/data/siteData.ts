// src/data/siteData.ts
// Single source of truth for all Silver State content

export const siteConfig = {
  name: 'Silver State Refrigeration, HVAC & Plumbing',
  shortName: 'Silver State',
  tagline: 'Exceptional Service For Your Home & Business.',
  phone: '(725) 213-7309',
  phoneRaw: '7252137309',
  email: 'contact@ssrfg.com',
  address: '4535 Copper Sage St., Las Vegas, NV 89115',
  license: 'NV LIC #55453',
  founded: '2000',
  social: {
    linkedin: 'https://www.linkedin.com/company/silverstate-hvac-plumbing',
    facebook: 'https://www.facebook.com/SSRHVAC/',
    instagram: 'https://www.instagram.com/ssrhvac/',
  },
};

// ─── HVAC SPOKES ────────────────────────────────────────────────────────────

export const hvacSpokes = [
  {
    slug: 'ac-repair',
    title: 'AC Repair',
    metaTitle: 'AC Repair Services | Fast Same-Day HVAC Repair',
    metaDesc: 'Emergency and same-day AC repair by NATE-certified technicians. Refrigerant leaks, compressor issues, thermostat faults — we fix it all. Serving NV, CA, AZ, UT & TX.',
    headline: 'Fast, Reliable AC Repair — Same Day Available',
    intro: 'When your air conditioner breaks down in the middle of a Las Vegas summer, every minute matters. Our NATE-certified technicians respond fast, diagnose accurately, and restore your comfort the same day.',
    services: ['AC Repair & Diagnostics', 'Refrigerant Leak Detection & Repair', 'Compressor Repair', 'Thermostat Calibration & Replacement', 'Capacitor & Contactor Replacement', 'Blower Motor Repair', '24/7 Emergency AC Service'],
    faqs: [
      { q: 'How quickly can you repair my AC?', a: 'We offer 24/7 emergency service and typically restore cooling within the same day of your call.' },
      { q: 'What are common reasons an AC stops working?', a: 'Most failures are caused by low refrigerant, a bad capacitor, dirty coils, thermostat issues, or a tripped breaker. Our technicians diagnose the root cause — not just the symptom.' },
      { q: 'Do you service all AC brands?', a: 'Yes. We service all major brands including Carrier, Trane, Lennox, Rheem, Goodman, and more.' },
    ],
    related: ['ac-installation', 'hvac-maintenance', 'emergency-hvac'],
  },
  {
    slug: 'ac-installation',
    title: 'AC Installation',
    metaTitle: 'AC Installation Services | New Air Conditioner Install',
    metaDesc: 'Professional AC installation for residential homes. Proper sizing, energy-efficient systems, warranty-backed. Serving Nevada, California, Arizona, Utah & Texas.',
    headline: 'Professional AC Installation — Sized Right, Done Right',
    intro: 'Installing the wrong-sized AC is one of the most common and costly mistakes homeowners make. Our certified technicians perform a full load calculation before recommending a system, ensuring optimal efficiency and comfort for years to come.',
    services: ['New AC System Installation', 'AC Replacement & Upgrade', 'Load Calculation & System Sizing', 'Ductwork Assessment', 'Smart Thermostat Integration', 'Post-Install Testing & Commissioning', 'Financing Available'],
    faqs: [
      { q: 'How long does AC installation take?', a: 'Most residential AC installations are completed in 4–8 hours, including removal of the old unit and full system testing.' },
      { q: 'What SEER rating should I choose?', a: 'In hot climates like Nevada and Arizona, we recommend 16 SEER or higher for significant energy savings. Our team will guide you based on your home size and budget.' },
      { q: 'Do you offer financing?', a: 'Yes, we offer flexible financing options to help you get the system you need without the upfront burden.' },
    ],
    related: ['ac-repair', 'ac-replacement', 'hvac-maintenance'],
  },
  {
    slug: 'ac-replacement',
    title: 'AC Replacement',
    metaTitle: 'AC Replacement | When to Replace Your Air Conditioner',
    metaDesc: 'Signs your AC needs replacing? Silver State handles full system replacements — assessment, removal, new install, testing. NATE-certified. 24/7 service.',
    headline: 'Is It Time to Replace Your AC? We Make It Easy.',
    intro: 'Most air conditioners last 10–15 years. If yours is aging, frequently breaking down, or using R-22 refrigerant, replacement often costs less in the long run than continued repairs. We handle the entire process — from assessment to haul-away to installation.',
    services: ['Full AC System Replacement', 'Old Unit Removal & Disposal', 'Energy Efficiency Assessment', 'System Sizing & Selection', 'Rebate & Incentive Assistance', 'Warranty Registration', 'Financing Available'],
    faqs: [
      { q: 'When should I replace instead of repair my AC?', a: 'If your unit is over 10 years old, requires R-22 refrigerant, or repair costs exceed 50% of replacement cost, replacement is usually the smarter investment.' },
      { q: 'What happens to my old unit?', a: 'We handle complete removal and responsible disposal of your old system, including refrigerant recovery.' },
      { q: 'Are there rebates available for new AC systems?', a: 'Yes — utility rebates and federal tax credits are often available for high-efficiency equipment. We help you navigate what applies to your situation.' },
    ],
    related: ['ac-installation', 'ac-repair', 'hvac-maintenance'],
  },
  {
    slug: 'hvac-maintenance',
    title: 'HVAC Maintenance',
    metaTitle: 'HVAC Maintenance Plans | Seasonal Tune-Ups',
    metaDesc: 'Keep your HVAC running efficiently with Silver State\'s maintenance plans. Biannual tune-ups, filter changes, coil cleaning, and priority service. Serving 5 states.',
    headline: 'Preventive HVAC Maintenance — Extend Life, Cut Costs',
    intro: 'Regular HVAC maintenance is the single most effective way to prevent breakdowns, extend system life, and keep energy bills in check. Our Maintenance Club members receive biannual tune-ups, priority scheduling, and exclusive discounts.',
    services: ['Biannual Tune-Up (Spring & Fall)', 'Air Filter Replacement', 'Coil Cleaning (Evaporator & Condenser)', 'Refrigerant Level Check', 'Electrical Component Inspection', 'Thermostat Calibration', 'Lubrication of Moving Parts', 'Drain Line Flush'],
    faqs: [
      { q: 'How often should I service my HVAC?', a: 'Twice per year — once in spring before cooling season, once in fall before heating season. This keeps both your AC and furnace in peak condition.' },
      { q: 'What is the Silver State Maintenance Club?', a: 'Our membership program includes biannual tune-ups, priority emergency service, discounts on repairs, and a satisfaction guarantee.' },
      { q: 'Does maintenance affect my warranty?', a: 'Yes — many manufacturers require documented annual maintenance to keep warranties valid. Our service records protect your coverage.' },
    ],
    related: ['ac-repair', 'furnace-repair', 'indoor-air-quality'],
  },
  {
    slug: 'furnace-repair',
    title: 'Furnace Repair',
    metaTitle: 'Furnace Repair Services | Fast Heating Repair',
    metaDesc: 'Furnace not heating? NATE-certified technicians diagnose and repair all furnace brands. Same-day service available. Serving NV, CA, AZ, UT & TX.',
    headline: 'Furnace Repair — Fast Response, All Brands',
    intro: 'A broken furnace in winter is a genuine emergency. Our NATE-certified technicians are dispatched 24/7 to diagnose and repair any furnace brand or model — from igniter failures and heat exchanger cracks to control board issues and gas valve problems.',
    services: ['Furnace Diagnostics & Repair', 'Igniter Replacement', 'Heat Exchanger Inspection & Repair', 'Blower Motor Repair', 'Control Board Replacement', 'Gas Valve Service', 'Pilot Light & Burner Service', 'All Brands Serviced'],
    faqs: [
      { q: 'Why is my furnace blowing cold air?', a: 'Common causes include a faulty igniter, tripped limit switch, malfunctioning gas valve, or a dirty filter restricting airflow. We diagnose the exact cause before any repair.' },
      { q: 'Is a cracked heat exchanger dangerous?', a: 'Yes — a cracked heat exchanger can allow carbon monoxide to leak into your home. If we detect one, we\'ll advise you immediately and discuss repair vs. replacement options.' },
      { q: 'How long does furnace repair take?', a: 'Most furnace repairs are completed within a few hours. If parts need to be ordered, we\'ll provide space heaters and schedule return service quickly.' },
    ],
    related: ['furnace-installation', 'hvac-maintenance', 'heat-pump-services'],
  },
  {
    slug: 'furnace-installation',
    title: 'Furnace Installation',
    metaTitle: 'Furnace Installation | New Heating System Install',
    metaDesc: 'Professional furnace installation and replacement. Proper sizing, brand selection, full install and testing. Licensed and NATE-certified. Serving 5 states.',
    headline: 'Furnace Installation — The Right System for Your Home',
    intro: 'A properly sized and installed furnace delivers reliable warmth, lower energy bills, and decades of performance. Our certified technicians handle everything from system selection and sizing to installation, testing, and permit management.',
    services: ['Gas Furnace Installation', 'Electric Furnace Installation', 'Dual-Fuel System Installation', 'Old Unit Removal & Disposal', 'Ductwork Modification', 'Thermostat Integration', 'Permit & Code Compliance', 'Financing Available'],
    faqs: [
      { q: 'What AFUE rating should I look for?', a: 'We recommend 80% AFUE minimum, and 96%+ for maximum efficiency. High-efficiency furnaces qualify for rebates and pay back their cost in energy savings.' },
      { q: 'How long does furnace installation take?', a: 'Standard furnace installation takes 4–6 hours. More complex jobs involving ductwork modifications may take a full day.' },
      { q: 'Do I need permits for a furnace installation?', a: 'Yes, in most jurisdictions. We handle all permits and ensure your installation meets local codes.' },
    ],
    related: ['furnace-repair', 'heat-pump-services', 'hvac-maintenance'],
  },
  {
    slug: 'heat-pump-services',
    title: 'Heat Pump Services',
    metaTitle: 'Heat Pump Installation & Repair | Silver State HVAC',
    metaDesc: 'Heat pump installation, repair, and maintenance by licensed HVAC technicians. Efficient heating and cooling in one system. Serving NV, CA, AZ, UT & TX.',
    headline: 'Heat Pump Services — One System for Year-Round Comfort',
    intro: 'Heat pumps deliver both heating and cooling from a single system, making them ideal for mild climates like California, Arizona, and southern Nevada. Our technicians install, service, and repair all heat pump types including air-source, ground-source, and variable-speed systems.',
    services: ['Heat Pump Installation', 'Heat Pump Repair', 'Heat Pump Maintenance', 'Refrigerant Recharge', 'Reversing Valve Repair', 'Defrost Control Service', 'All Brands Serviced'],
    faqs: [
      { q: 'Is a heat pump right for my climate?', a: 'Heat pumps work best in climates where temperatures rarely drop below 20°F. They\'re ideal for Southern Nevada, California, and Arizona, and increasingly viable in Utah and Texas.' },
      { q: 'Why is my heat pump blowing cool air in heat mode?', a: 'This typically indicates a refrigerant issue, faulty reversing valve, or a defrost cycle problem. Our technicians can diagnose and repair it same-day.' },
      { q: 'How efficient are heat pumps vs. gas furnaces?', a: 'Heat pumps can deliver 2–4x more energy than they consume, making them 200–400% efficient compared to even the best gas furnaces at 96%.' },
    ],
    related: ['ac-installation', 'furnace-repair', 'mini-split-systems'],
  },
  {
    slug: 'mini-split-systems',
    title: 'Mini-Split Systems',
    metaTitle: 'Ductless Mini-Split Installation & Repair | Silver State',
    metaDesc: 'Ductless mini-split systems for homes without ductwork. Installation, repair, and maintenance of all major brands. Serving NV, CA, AZ, UT & TX.',
    headline: 'Mini-Split Systems — Ductless Comfort, Zone by Zone',
    intro: 'Mini-split systems provide targeted heating and cooling without ductwork — perfect for room additions, garages, historic homes, or any space that a central HVAC system can\'t reach. We install and service single-zone and multi-zone systems from all leading brands.',
    services: ['Single-Zone Mini-Split Installation', 'Multi-Zone Mini-Split Installation', 'Mini-Split Repair & Diagnostics', 'Refrigerant Service', 'Remote & WiFi Control Setup', 'All Major Brands Serviced'],
    faqs: [
      { q: 'Who needs a mini-split system?', a: 'Homes without ductwork, room additions, garages, server rooms, sunrooms, and any space where running new ducts isn\'t practical or cost-effective.' },
      { q: 'How noisy are mini-splits?', a: 'Mini-splits are among the quietest HVAC systems available, typically operating at 19–30 dB — quieter than a whisper.' },
      { q: 'Can a mini-split replace my central HVAC?', a: 'For whole-home comfort, a multi-zone mini-split system can fully replace traditional central HVAC while providing individual room temperature control.' },
    ],
    related: ['ac-installation', 'heat-pump-services', 'indoor-air-quality'],
  },
  {
    slug: 'smart-thermostats',
    title: 'Smart Thermostat Installation',
    metaTitle: 'Smart Thermostat Installation & Programming | Silver State',
    metaDesc: 'Upgrade to a smart thermostat for remote control, energy savings, and automatic scheduling. Installation and programming by Silver State. Serving 5 states.',
    headline: 'Smart Thermostats — Control Your Comfort Anywhere',
    intro: 'A smart thermostat is the simplest upgrade that delivers the fastest return. Control your home\'s temperature from anywhere, set automated schedules, and reduce energy consumption by up to 23%. We install, program, and integrate all leading smart thermostat brands.',
    services: ['Nest Thermostat Installation', 'Ecobee Installation', 'Honeywell Home Installation', 'Carrier & Brand-Specific Controllers', 'Multi-Zone Programming', 'WiFi & App Integration', 'Compatibility Assessment'],
    faqs: [
      { q: 'Will a smart thermostat work with my HVAC system?', a: 'Most smart thermostats are compatible with standard central HVAC systems. We perform a compatibility check before installation to ensure seamless integration.' },
      { q: 'How much can I save with a smart thermostat?', a: 'Studies show average savings of $131–$145 per year on energy bills, plus the convenience of never coming home to an uncomfortable house.' },
      { q: 'How long does installation take?', a: 'Typically 30–60 minutes for installation and programming, including connecting your HVAC system and setting up the mobile app.' },
    ],
    related: ['hvac-maintenance', 'ac-repair', 'furnace-repair'],
  },
  {
    slug: 'emergency-hvac',
    title: '24/7 Emergency HVAC',
    metaTitle: '24/7 Emergency HVAC Service | Same-Day AC & Heating Repair',
    metaDesc: 'HVAC emergency? Silver State is available 24/7 for urgent AC breakdowns, heating failures, and refrigerant leaks. Same-day response across NV, CA, AZ, UT & TX.',
    headline: 'HVAC Emergency? We Answer 24/7 — Day or Night.',
    intro: 'HVAC emergencies don\'t wait for business hours. Whether your AC dies during a 115° Las Vegas afternoon or your furnace fails overnight in Utah, Silver State dispatches certified technicians immediately. No overtime charges. No excuses.',
    services: ['24/7 AC Breakdown Response', '24/7 Heating Failure Response', 'Refrigerant Leak Emergency', 'Carbon Monoxide Concerns', 'Post-Storm System Assessment', 'Same-Day Parts & Repairs', 'All Markets — NV, CA, AZ, UT & TX'],
    faqs: [
      { q: 'Is there an extra charge for emergency/after-hours calls?', a: 'We believe in transparent pricing. Our Maintenance Club members receive priority emergency service at standard rates. Contact us for current pricing details.' },
      { q: 'What should I do while waiting for a technician?', a: 'Turn the system off to prevent further damage. Use fans or portable heaters as appropriate. If you smell gas or suspect carbon monoxide, evacuate immediately and call emergency services.' },
      { q: 'How fast is your emergency response?', a: 'Our goal is to have a technician on-site within 2 hours of your call. In most markets we achieve this consistently.' },
    ],
    related: ['ac-repair', 'furnace-repair', 'hvac-maintenance'],
  },
];

// ─── PLUMBING SPOKES ─────────────────────────────────────────────────────────

export const plumbingSpokes = [
  {
    slug: 'drain-cleaning',
    title: 'Drain Cleaning',
    metaTitle: 'Drain Cleaning Services | Clog Removal | Silver State',
    metaDesc: 'Fast drain cleaning for kitchen, bathroom, and sewer lines. Hydrojetting and snaking available. Same-day service. Licensed plumbers across NV, CA, AZ, UT & TX.',
    headline: 'Drain Cleaning — Clear Clogs Fast, Keep Them Gone',
    intro: 'A slow or blocked drain isn\'t just inconvenient — it can signal a larger sewer issue. Our licensed plumbers use professional-grade snaking and hydrojetting to clear any blockage and leave your drains flowing freely.',
    services: ['Drain Snaking & Augering', 'Hydrojetting', 'Kitchen Drain Cleaning', 'Bathroom Drain Cleaning', 'Floor Drain Cleaning', 'Main Sewer Line Cleaning', 'Video Camera Inspection', 'Grease Trap Service'],
    faqs: [
      { q: 'What is hydrojetting?', a: 'Hydrojetting uses high-pressure water (up to 4,000 PSI) to blast grease, scale, roots, and debris from pipe walls — far more effective than snaking alone for severe blockages.' },
      { q: 'Why do my drains keep clogging?', a: 'Recurring clogs often indicate a deeper issue: tree root intrusion, a collapsed pipe, excessive grease buildup, or incorrect pipe pitch. We diagnose the root cause.' },
      { q: 'How do I prevent drain clogs?', a: 'Avoid putting grease, coffee grounds, and fibrous foods down kitchen drains. Use hair catchers in bathroom drains. Annual drain maintenance prevents most recurring issues.' },
    ],
    related: ['leak-detection-repair', 'pipe-repair-replacement', 'sewer-line-services'],
  },
  {
    slug: 'leak-detection-repair',
    title: 'Leak Detection & Repair',
    metaTitle: 'Leak Detection & Repair | Find Hidden Leaks Fast | Silver State',
    metaDesc: 'Advanced leak detection for hidden pipe and slab leaks. Non-invasive technology, fast repair. Serving NV, CA, AZ, UT & TX. 24/7 emergency available.',
    headline: 'Leak Detection — Find It Fast, Fix It Right',
    intro: 'Hidden water leaks can cause thousands of dollars in damage before you ever notice them. Our technicians use advanced acoustic detection and thermal imaging to locate leaks non-invasively, preserving your walls and flooring while delivering precise repairs.',
    services: ['Acoustic Leak Detection', 'Thermal Imaging Inspection', 'Slab Leak Detection & Repair', 'Water Line Leak Repair', 'Pipe Leak Repair', 'Irrigation System Leak Repair', 'Emergency Leak Response'],
    faqs: [
      { q: 'How do I know if I have a hidden leak?', a: 'Warning signs include unexplained increases in your water bill, warm spots on floors, the sound of running water when nothing is on, mold growth, or low water pressure.' },
      { q: 'What is a slab leak?', a: 'A slab leak occurs when pipes beneath your concrete foundation leak. Left untreated, they cause serious structural damage and mold. We detect and repair them with minimal disruption to your slab.' },
      { q: 'Do you repair the damage caused by the leak?', a: 'We focus on the plumbing repair. For water damage restoration, we can refer you to trusted partners in your area.' },
    ],
    related: ['pipe-repair-replacement', 'drain-cleaning', 'sewer-line-services'],
  },
  {
    slug: 'pipe-repair-replacement',
    title: 'Pipe Repair & Replacement',
    metaTitle: 'Pipe Repair & Replacement | Repiping Services | Silver State',
    metaDesc: 'Damaged, corroded, or leaking pipes? Silver State handles repair, replacement, and full repiping projects. Licensed plumbers serving 5 states.',
    headline: 'Pipe Repair & Repiping — Built to Last',
    intro: 'From a single cracked pipe to a full-home repipe, our licensed plumbers handle every scale of pipe work. We use durable copper, CPVC, and PEX materials and back every repair with a workmanship guarantee.',
    services: ['Emergency Pipe Repair', 'Burst Pipe Repair', 'Corroded Pipe Replacement', 'Whole-Home Repiping', 'Galvanized Pipe Replacement', 'PEX & CPVC Installation', 'Trenchless Pipe Repair'],
    faqs: [
      { q: 'When should I repipe my home?', a: 'If your home has galvanized steel pipes over 50 years old, you have persistent low water pressure, discolored water, or frequent leaks in multiple locations — a full repipe is usually the most cost-effective solution.' },
      { q: 'How long does whole-home repiping take?', a: 'Most single-family homes can be fully repiped in 2–3 days. We minimize disruption and restore water service each evening.' },
      { q: 'What pipe material do you recommend?', a: 'PEX is our preferred material for repiping — it\'s flexible, freeze-resistant, durable, and significantly less expensive than copper while matching its longevity.' },
    ],
    related: ['leak-detection-repair', 'drain-cleaning', 'sewer-line-services'],
  },
  {
    slug: 'water-heater-repair',
    title: 'Water Heater Repair',
    metaTitle: 'Water Heater Repair | No Hot Water? We Fix It Fast',
    metaDesc: 'Water heater not working? Our licensed plumbers diagnose and repair all brands — gas, electric, and tankless. Same-day service available. Serving 5 states.',
    headline: 'Water Heater Repair — Hot Water Restored Today',
    intro: 'No hot water is a household emergency. Our licensed plumbers diagnose and repair all water heater types — gas, electric, and tankless — and carry common parts on every truck for same-day repairs.',
    services: ['No Hot Water Diagnosis', 'Thermostat Replacement', 'Heating Element Replacement', 'Anode Rod Service', 'Pressure Relief Valve Replacement', 'Sediment Flush', 'Gas Valve & Pilot Light Service', 'Tankless Unit Repair'],
    faqs: [
      { q: 'Why is my water heater making a popping or rumbling noise?', a: 'Sediment buildup is the most common cause. Mineral deposits settle at the bottom of the tank and cause noise as water heats through them. A flush often resolves this.' },
      { q: 'Why do I keep running out of hot water?', a: 'This typically indicates a failed heating element (electric), a thermostat issue, or a tank that\'s simply undersized for your household. We\'ll diagnose which applies.' },
      { q: 'Should I repair or replace my water heater?', a: 'If your unit is under 8 years old, repair is usually the right call. Over 10–12 years, replacement often makes more financial sense given efficiency gains.' },
    ],
    related: ['water-heater-installation', 'tankless-water-heaters', 'pipe-repair-replacement'],
  },
  {
    slug: 'water-heater-installation',
    title: 'Water Heater Installation',
    metaTitle: 'Water Heater Installation & Replacement | Silver State Plumbing',
    metaDesc: 'Professional water heater installation and replacement. All fuel types and brands. Proper sizing, full install, and haul-away. Financing available.',
    headline: 'Water Heater Installation — Right Size, Right System',
    intro: 'Choosing the right water heater for your home\'s size and usage is as important as the installation itself. Our licensed plumbers size, select, install, and test your new unit — and handle removal and disposal of the old one.',
    services: ['Traditional Tank Water Heater Installation', 'Tankless Water Heater Installation', 'Gas & Electric Units', 'Old Unit Removal & Disposal', 'Code-Compliant Installation', 'Expansion Tank Installation', 'Financing Available'],
    faqs: [
      { q: 'What size water heater do I need?', a: 'For a 1–2 person household, a 30–40 gallon tank is typically sufficient. For 3–4 people, 50 gallons. 5+ people may need 80 gallons or a tankless unit. We calculate the right size for you.' },
      { q: 'How long does water heater installation take?', a: 'Most standard tank installations take 2–3 hours. Tankless installations typically take 4–6 hours due to additional venting and gas line work.' },
      { q: 'Is a tankless water heater worth the extra cost?', a: 'Tankless units cost more upfront but last 20+ years vs. 10–12 for tank units, and reduce energy costs by 20–30%. For most households, the payback period is 5–8 years.' },
    ],
    related: ['tankless-water-heaters', 'water-heater-repair', 'pipe-repair-replacement'],
  },
  {
    slug: 'tankless-water-heaters',
    title: 'Tankless Water Heaters',
    metaTitle: 'Tankless Water Heater Installation & Repair | Silver State',
    metaDesc: 'Upgrade to on-demand hot water with a tankless system. Installation, repair, and maintenance by licensed plumbers. Serving NV, CA, AZ, UT & TX.',
    headline: 'Tankless Water Heaters — Endless Hot Water, Lower Bills',
    intro: 'Tankless water heaters heat water on demand — eliminating standby heat loss and ensuring you never run out of hot water. Our licensed plumbers install and service all major tankless brands for both residential and light commercial applications.',
    services: ['Tankless Water Heater Installation', 'Gas Line Sizing & Upgrade', 'Venting Installation', 'Descaling & Maintenance', 'Error Code Diagnosis & Repair', 'All Major Brands Serviced', 'Rebate Assistance'],
    faqs: [
      { q: 'Can a tankless unit supply my whole house?', a: 'Yes — properly sized whole-home tankless units can supply unlimited hot water to multiple fixtures simultaneously. We size the unit based on your peak demand.' },
      { q: 'Do tankless heaters require maintenance?', a: 'Annual descaling is recommended in hard-water areas like Las Vegas. We offer maintenance programs to keep your unit running at peak efficiency.' },
      { q: 'What is the lifespan of a tankless water heater?', a: 'With proper maintenance, tankless units routinely last 20–25 years — roughly double the lifespan of traditional tank water heaters.' },
    ],
    related: ['water-heater-installation', 'water-heater-repair', 'water-softeners'],
  },
  {
    slug: 'water-softeners',
    title: 'Water Softeners',
    metaTitle: 'Water Softener Installation & Service | Silver State Plumbing',
    metaDesc: 'Hard water is tough on pipes and appliances. Silver State installs and services whole-home water softeners. Las Vegas hard water specialists.',
    headline: 'Water Softeners — Protect Your Pipes, Improve Your Water',
    intro: 'Las Vegas has some of the hardest water in the country, with hardness levels exceeding 300 mg/L in many areas. Hard water destroys water heaters, clogs pipes, stains fixtures, and irritates skin. Our water softener installations protect your entire plumbing system.',
    services: ['Whole-Home Water Softener Installation', 'Salt-Based & Salt-Free Systems', 'Water Quality Testing', 'Softener Repair & Service', 'Salt Delivery Programs', 'Reverse Osmosis Integration', 'Scale Removal Treatment'],
    faqs: [
      { q: 'How hard is Las Vegas water?', a: 'Las Vegas water typically tests between 250–400 mg/L — classified as "very hard." This is among the highest in the US and significantly shortens the lifespan of water heaters and appliances.' },
      { q: 'What is the difference between salt-based and salt-free softeners?', a: 'Salt-based systems exchange calcium and magnesium ions for sodium, truly softening the water. Salt-free systems condition water to reduce scale without removing minerals — better for those on sodium-restricted diets.' },
      { q: 'How much does a water softener installation cost?', a: 'Contact us for a free estimate. Costs vary based on unit size, water hardness level, and installation complexity.' },
    ],
    related: ['tankless-water-heaters', 'pipe-repair-replacement', 'leak-detection-repair'],
  },
  {
    slug: 'bathroom-plumbing',
    title: 'Bathroom Plumbing',
    metaTitle: 'Bathroom Plumbing Services | Sinks, Toilets, Tubs & Showers',
    metaDesc: 'Complete bathroom plumbing — sink repair, toilet installation, tub and shower services. Licensed plumbers. Same-day service available.',
    headline: 'Bathroom Plumbing — Every Fixture, Every Fix',
    intro: 'From a running toilet to a full bathroom remodel, our licensed plumbers handle all bathroom plumbing work with precision and care. We work around your schedule and leave the space cleaner than we found it.',
    services: ['Toilet Repair & Installation', 'Bathroom Sink Repair & Replacement', 'Faucet Repair & Installation', 'Tub & Shower Plumbing', 'Shower Pan & Valve Replacement', 'Drain Repair & Replacement', 'Bathroom Remodel Plumbing'],
    faqs: [
      { q: 'Why is my toilet running constantly?', a: 'Usually a worn flapper, faulty fill valve, or a float set too high. Most running toilet repairs take under an hour and cost a fraction of the wasted water bill.' },
      { q: 'Can you match my existing fixtures?', a: 'We carry a wide selection of fixtures and can order specific brands or finishes to match your existing bathroom aesthetic.' },
      { q: 'Do you handle shower valve replacements?', a: 'Yes — including pressure-balancing valves, thermostatic valves, and complete shower valve system upgrades.' },
    ],
    related: ['drain-cleaning', 'leak-detection-repair', 'pipe-repair-replacement'],
  },
  {
    slug: 'kitchen-plumbing',
    title: 'Kitchen Plumbing',
    metaTitle: 'Kitchen Plumbing Services | Sinks, Disposals & More',
    metaDesc: 'Kitchen plumbing repair and installation — sinks, faucets, garbage disposals, dishwasher connections. Licensed plumbers serving 5 states.',
    headline: 'Kitchen Plumbing — Keeping Your Kitchen Running Smoothly',
    intro: 'The kitchen is the hardest-working plumbing area in any home. From sink repairs and faucet upgrades to garbage disposal installation and dishwasher connections, our licensed plumbers keep your kitchen functioning flawlessly.',
    services: ['Kitchen Sink Repair & Installation', 'Faucet Repair & Replacement', 'Garbage Disposal Installation & Repair', 'Dishwasher Connection', 'Under-Sink Leak Repair', 'Water Filter Installation', 'Drain Cleaning'],
    faqs: [
      { q: 'My kitchen sink is draining slowly — what\'s the cause?', a: 'Grease buildup is the most common cause of slow kitchen drains. We use hydrojetting or professional-grade snaking to clear the line completely.' },
      { q: 'Can you install a pot filler?', a: 'Yes — pot filler installation requires a new water supply line above the stove. We handle the full rough-in and fixture installation.' },
      { q: 'My garbage disposal hums but won\'t turn — can it be fixed?', a: 'Usually yes. A humming disposal is typically jammed. We can often clear it during the same visit, or replace the unit if the motor has failed.' },
    ],
    related: ['garbage-disposals', 'drain-cleaning', 'leak-detection-repair'],
  },
  {
    slug: 'garbage-disposals',
    title: 'Garbage Disposal Repair & Installation',
    metaTitle: 'Garbage Disposal Installation & Repair | Silver State Plumbing',
    metaDesc: 'Garbage disposal not working? We install, repair, and replace all brands. Fast, affordable service. Licensed plumbers across NV, CA, AZ, UT & TX.',
    headline: 'Garbage Disposal Services — Fast Fix or Full Replace',
    intro: 'A broken garbage disposal is a kitchen inconvenience that our licensed plumbers can resolve in under an hour in most cases. We repair all brands and install quiet, powerful replacement units when repair isn\'t cost-effective.',
    services: ['Garbage Disposal Repair', 'Garbage Disposal Installation', 'Brand Replacement', 'Jam Clearing', 'Leak Repair', 'Dishwasher Drain Connection', 'All Brands Serviced'],
    faqs: [
      { q: 'Why is my garbage disposal leaking?', a: 'Leaks commonly occur at the sink flange, the dishwasher connection, or the discharge pipe. Each requires a different repair approach — we diagnose the source and fix it properly.' },
      { q: 'What should I never put in a garbage disposal?', a: 'Grease, fibrous vegetables (celery, artichokes), bones, coffee grounds, eggshells, and fruit pits cause the most damage and clogs.' },
      { q: 'How long do garbage disposals last?', a: 'Most disposals last 8–12 years with proper use. If yours is near that age and requires frequent resets or is making grinding noises, replacement is usually the better investment.' },
    ],
    related: ['kitchen-plumbing', 'drain-cleaning', 'leak-detection-repair'],
  },
  {
    slug: 'backflow-services',
    title: 'Backflow Prevention & Testing',
    metaTitle: 'Backflow Prevention & Testing | Certified Backflow Services',
    metaDesc: 'Certified backflow prevention installation, testing, and repair. Protect your water supply from contamination. Serving NV, CA, AZ, UT & TX.',
    headline: 'Backflow Services — Protect Your Water Supply',
    intro: 'Backflow occurs when contaminated water flows backward into your clean water supply — a serious public health risk. Most municipalities require annual backflow testing. Our certified technicians perform testing, repairs, and new installations in full compliance with local codes.',
    services: ['Annual Backflow Testing', 'Backflow Preventer Installation', 'Repair & Rebuilding', 'Certification Documentation', 'Residential & Commercial', 'Irrigation System Backflow', 'RPZ & DCVA Assemblies'],
    faqs: [
      { q: 'Who is required to have backflow testing?', a: 'Most commercial properties, irrigation systems, and many residential properties with irrigation or specialty connections are required to have annual backflow testing by local ordinance.' },
      { q: 'What is an RPZ valve?', a: 'A Reduced Pressure Zone (RPZ) assembly is the highest level of backflow protection, required for high-hazard connections. It uses two check valves and a pressure differential relief valve.' },
      { q: 'How long does backflow testing take?', a: 'Testing typically takes 30–60 minutes. We provide official documentation for your records and submit required reports to your water authority.' },
    ],
    related: ['pipe-repair-replacement', 'leak-detection-repair', 'drain-cleaning'],
  },
  {
    slug: 'manabloc-systems',
    title: 'ManaBloc Plumbing Systems',
    metaTitle: 'ManaBloc Plumbing System Installation & Repair | Silver State',
    metaDesc: 'Expert ManaBloc plumbing system installation, maintenance, and repair for Las Vegas and Southwest homes. Licensed plumbers with ManaBloc experience.',
    headline: 'ManaBloc Plumbing — Expert Service for Southwest Homes',
    intro: 'ManaBloc systems were widely installed in Las Vegas-area homes built in the 1990s and 2000s. As these systems age, they require specialized knowledge to repair and maintain properly. Silver State\'s plumbers have extensive ManaBloc experience and carry common replacement parts.',
    services: ['ManaBloc Valve Replacement', 'Port Repair & Sealing', 'Full System Assessment', 'Leak Diagnosis', 'System Replacement', 'PEX Conversion', 'Emergency Shut-Off Support'],
    faqs: [
      { q: 'What is a ManaBloc system?', a: 'ManaBloc is a manifold-based distribution system that routes individual PEX lines from a central manifold to each fixture. It allows easy shut-off of individual lines without affecting the rest of the home.' },
      { q: 'Why are ManaBloc systems problematic as they age?', a: 'The polysulfone plastic used in older ManaBloc systems can become brittle and develop micro-cracks over time, especially in the desert heat. This leads to slow leaks that can cause significant water damage.' },
      { q: 'Should I replace my ManaBloc system entirely?', a: 'If valves are stiff, cracked, or leaking in multiple places, a full replacement with modern PEX is often more cost-effective than repeated repairs. We provide honest assessments.' },
    ],
    related: ['pipe-repair-replacement', 'leak-detection-repair', 'water-softeners'],
  },
  {
    slug: 'sewer-line-services',
    title: 'Sewer Line Services',
    metaTitle: 'Sewer Line Repair & Replacement | Sewer Camera Inspection',
    metaDesc: 'Sewer line problems? Silver State offers camera inspections, hydrojetting, repair, and full replacement. 24/7 emergency sewer service across 5 states.',
    headline: 'Sewer Line Services — Camera Inspection to Complete Repair',
    intro: 'Sewer line problems range from root intrusion and blockages to full collapses requiring pipe replacement. Our licensed plumbers use video camera inspection to diagnose exact conditions before recommending any repair, ensuring you get the right solution — not the most expensive one.',
    services: ['Sewer Camera Inspection', 'Sewer Line Hydrojetting', 'Root Intrusion Removal', 'Sewer Line Repair', 'Trenchless Pipe Lining', 'Sewer Line Replacement', '24/7 Emergency Sewer Service'],
    faqs: [
      { q: 'What are signs of a sewer line problem?', a: 'Multiple slow drains throughout the home, sewage odors, wet spots in the yard above the sewer line, or gurgling sounds from toilets when other fixtures are used all indicate sewer line issues.' },
      { q: 'What is trenchless sewer repair?', a: 'Trenchless methods (pipe lining or pipe bursting) repair or replace sewer lines with minimal excavation — preserving your lawn, driveway, and landscaping in most cases.' },
      { q: 'How often do sewer lines need cleaning?', a: 'Most residential sewer lines benefit from hydrojetting every 1–2 years, especially in areas with mature trees whose roots seek moisture in sewer lines.' },
    ],
    related: ['drain-cleaning', 'pipe-repair-replacement', 'leak-detection-repair'],
  },
];

// ─── COMMERCIAL SPOKES ───────────────────────────────────────────────────────

export const commercialSpokes = [
  {
    slug: 'hvac',
    title: 'Commercial HVAC',
    metaTitle: 'Commercial HVAC Services | Heating & Cooling for Businesses',
    metaDesc: 'Commercial HVAC installation, repair, and maintenance for businesses of all sizes. Serving NV, CA, AZ, UT & TX. Maintenance agreements available.',
    headline: 'Commercial HVAC — Keeping Your Business Comfortable',
    intro: 'Your business can\'t afford HVAC downtime. Silver State\'s commercial division serves businesses of every size — from retail shops to healthcare facilities — with expert HVAC installation, repair, and maintenance backed by maintenance agreements and 24/7 emergency response.',
    services: ['Commercial AC Installation & Repair', 'Commercial Furnace & Heating', 'Preventive Maintenance Agreements', 'Energy Efficiency Retrofits', 'Building Automation Integration', 'Indoor Air Quality Solutions', 'Emergency Commercial HVAC Service'],
  },
  {
    slug: 'rooftop-units',
    title: 'Commercial Rooftop Units',
    metaTitle: 'Commercial Rooftop Unit Installation & Repair | Silver State',
    metaDesc: 'Expert RTU installation, maintenance, and repair. Keep your rooftop HVAC units running at peak performance. Licensed commercial technicians across 5 states.',
    headline: 'Rooftop HVAC Units — Installation, Service & Repair',
    intro: 'Rooftop packaged units are the backbone of commercial HVAC across Nevada, Arizona, and California. Our certified commercial technicians install, service, and repair all major RTU brands, with emergency response available around the clock.',
    services: ['RTU Installation & Replacement', 'Preventive Maintenance', 'Compressor Repair', 'Economizer Service', 'Refrigerant Service', 'Controls & Thermostat Integration', 'All Major Brands'],
  },
  {
    slug: 'refrigeration',
    title: 'Commercial Refrigeration',
    metaTitle: 'Commercial Refrigeration Services | Walk-In Coolers & More',
    metaDesc: 'Commercial refrigeration repair, installation, and maintenance. Walk-in coolers, reach-in units, display cases. Serving restaurants, retail, healthcare across 5 states.',
    headline: 'Commercial Refrigeration — Protecting Your Products 24/7',
    intro: 'Commercial refrigeration failures cost businesses thousands in lost inventory and regulatory violations. Silver State\'s refrigeration specialists respond immediately to any failure — walk-in coolers, reach-in units, ice machines, display cases, and full cold-chain systems.',
    services: ['Walk-In Cooler & Freezer Service', 'Reach-In Refrigeration Repair', 'Display Case Service', 'Ice Machine Repair', 'Refrigeration System Installation', 'Preventive Maintenance Programs', '24/7 Emergency Response'],
  },
  {
    slug: 'plumbing',
    title: 'Commercial Plumbing',
    metaTitle: 'Commercial Plumbing Services | Silver State HVAC & Plumbing',
    metaDesc: 'Licensed commercial plumbing for businesses — drain cleaning, pipe repair, water heaters, grease traps, and more. Serving NV, CA, AZ, UT & TX.',
    headline: 'Commercial Plumbing — Licensed, Reliable, On-Time',
    intro: 'Commercial plumbing demands a higher level of expertise, capacity, and speed than residential work. Silver State\'s commercial plumbers handle everything from new construction rough-ins and grease trap service to backflow certification and emergency pipe repair.',
    services: ['Commercial Drain Cleaning', 'Grease Trap Service', 'Backflow Testing & Certification', 'Commercial Water Heater Service', 'Pipe Repair & Replacement', 'Fixture Installation', 'Sewer Line Service'],
  },
  {
    slug: 'air-duct-cleaning',
    title: 'Commercial Air Duct Cleaning',
    metaTitle: 'Commercial Air Duct Cleaning | Improve IAQ & HVAC Efficiency',
    metaDesc: 'Professional commercial duct cleaning and sanitizing for businesses. Improve indoor air quality, reduce energy costs, and extend HVAC life. Serving 5 states.',
    headline: 'Commercial Duct Cleaning — Healthier Air, Better Performance',
    intro: 'Contaminated ductwork reduces indoor air quality, increases employee sick days, and forces your HVAC system to work harder. Silver State\'s commercial duct cleaning uses NADCA-standard methods to remove dust, mold, allergens, and debris from your entire ventilation system.',
    services: ['Full Ductwork Cleaning', 'NADCA-Standard Methods', 'Sanitizing & Deodorizing', 'Before & After Documentation', 'Coil Cleaning', 'Air Handler Cleaning', 'Post-Cleaning Air Quality Testing'],
  },
  {
    slug: 'kitchen-hot-side',
    title: 'Commercial Kitchen Hot-Side Services',
    metaTitle: 'Commercial Kitchen Hot-Side Services | Restaurant Equipment',
    metaDesc: 'Hot-side commercial kitchen equipment repair, installation, and maintenance. Ovens, fryers, ranges, grills, and more. Serving restaurants across NV, CA, AZ, UT & TX.',
    headline: 'Hot-Side Kitchen Services — Keeping Your Kitchen in Service',
    intro: 'In a restaurant, hot-side equipment failure shuts down service and loses revenue by the hour. Silver State\'s commercial kitchen technicians respond fast to repair ovens, fryers, ranges, grills, steamers, and more — with preventive maintenance programs to minimize unexpected downtime.',
    services: ['Commercial Oven Repair & Service', 'Deep Fryer Repair', 'Commercial Range & Grill Service', 'Steamer & Braiser Repair', 'Commercial Dishwasher Service', 'Gas Line Service', 'Preventive Maintenance Programs'],
  },
  {
    slug: 'government-contracts',
    title: 'Government Contracts',
    metaTitle: 'Government HVAC & Plumbing Contracts | Silver State',
    metaDesc: 'Silver State holds government HVAC, refrigeration, and plumbing contracts for federal, state, and municipal facilities. Licensed, bonded, compliant. Serving 5 states.',
    headline: 'Government Contracts — Compliance-Ready, Mission-Capable',
    intro: 'Silver State has a proven track record serving government, military, healthcare, education, and municipal facilities. We are fully licensed, bonded, and insured across all operating states, with experience navigating government procurement requirements and compliance standards.',
    services: ['Federal & State Facility HVAC', 'Municipal Building Service', 'Educational Institution HVAC', 'Healthcare Facility Service', 'Military Installation Experience', 'Compliance Documentation', 'GSA & Municipal Procurement'],
  },
];

// ─── LOCATIONS ───────────────────────────────────────────────────────────────

export const locations = [
  {
    slug: 'las-vegas-nv',
    city: 'Las Vegas', state: 'Nevada', stateAbbr: 'NV',
    phone: '(725) 213-7278', phoneRaw: '7252137278',
    address: '4535 Copper Sage Street, Las Vegas, NV 89115',
    climateAngle: 'triple-digit summer heat, hard water, and desert dust',
    intro: 'From triple-digit summers to plumbing issues that strike without warning, living and working in Las Vegas demands reliable service from experienced professionals.',
    neighborhoods: ['Aliante','Centennial Hills','Summerlin','Henderson','North Las Vegas','Downtown Las Vegas','Southern Highlands','Spring Valley','Southwest Las Vegas','Skye Canyon','Peccole Ranch','Rancho Oakey'],
  },
  {
    slug: 'henderson-nv',
    city: 'Henderson', state: 'Nevada', stateAbbr: 'NV',
    phone: '(725) 213-7278', phoneRaw: '7252137278',
    address: '4535 Copper Sage Street, Las Vegas, NV 89115',
    climateAngle: 'desert heat and hard water unique to the Henderson area',
    intro: 'Henderson\'s rapid growth has made it one of Nevada\'s largest cities — and our team is fully deployed to serve every neighborhood with fast, expert HVAC and plumbing service.',
    neighborhoods: ['Green Valley','Anthem','MacDonald Ranch','Seven Hills','Whitney Ranch','Basic Area','Water Street District','Inspirada'],
  },
  {
    slug: 'reno-nv',
    city: 'Reno', state: 'Nevada', stateAbbr: 'NV',
    phone: '(725) 213-7309', phoneRaw: '7252137309',
    address: 'Reno, NV Service Area',
    climateAngle: 'high desert winters, hot summers, and wildfire smoke season air quality',
    intro: 'Reno\'s high desert climate means cold winters, hot summers, and increasingly challenging air quality during fire season — making reliable HVAC and plumbing service more essential than ever.',
    neighborhoods: ['Midtown Reno','South Reno','Damonte Ranch','Caughlin Ranch','Northwest Reno','Spanish Springs','Sparks','Sun Valley'],
  },
  {
    slug: 'sparks-nv',
    city: 'Sparks', state: 'Nevada', stateAbbr: 'NV',
    phone: '(725) 213-7309', phoneRaw: '7252137309',
    address: 'Sparks, NV Service Area',
    climateAngle: 'high desert climate with cold winters and hot summers',
    intro: 'Sparks is a fast-growing community with unique HVAC and plumbing demands. Our local technicians know the area and respond quickly throughout the Sparks market.',
    neighborhoods: ['Spanish Springs','Vista','Wingfield','Sparks Marina','East Sparks','Lazy 5 Regional Park Area'],
  },
  {
    slug: 'sacramento-ca',
    city: 'Sacramento', state: 'California', stateAbbr: 'CA',
    phone: '(725) 213-7309', phoneRaw: '7252137309',
    address: 'Sacramento, CA Service Area',
    climateAngle: 'hot dry summers, Valley fog in winter, and wildfire smoke air quality concerns',
    intro: 'Sacramento\'s hot, dry summers create significant cooling demands, while Valley fog in winter adds heating requirements. Our California-licensed technicians serve the entire Greater Sacramento area.',
    neighborhoods: ['Elk Grove','Folsom','Roseville','Citrus Heights','Natomas','East Sacramento','Land Park','Midtown Sacramento'],
  },
  {
    slug: 'los-angeles-ca',
    city: 'Los Angeles', state: 'California', stateAbbr: 'CA',
    phone: '(725) 213-7309', phoneRaw: '7252137309',
    address: 'Los Angeles, CA Service Area',
    climateAngle: 'year-round mild weather with high AC demand, wildfire air quality, and aging infrastructure',
    intro: 'Los Angeles\'s diverse neighborhoods have equally diverse HVAC and plumbing needs — from aging Craftsman bungalows to modern commercial buildings. Our LA-area team is equipped for every challenge.',
    neighborhoods: ['Sherman Oaks','Burbank','Glendale','Pasadena','Long Beach','San Fernando Valley','Culver City','Santa Monica'],
  },
  {
    slug: 'phoenix-az',
    city: 'Phoenix', state: 'Arizona', stateAbbr: 'AZ',
    phone: '(520) 477-8377', phoneRaw: '5204778377',
    address: '3416 S 48th St., Suites 10 & 11, Phoenix, AZ 85040',
    climateAngle: 'extreme desert heat, monsoon season, and intense AC demand',
    intro: 'Phoenix summers push AC systems to their limits. When temperatures exceed 115°F, HVAC failure isn\'t an inconvenience — it\'s a health emergency. Silver State responds immediately, day or night.',
    neighborhoods: ['Scottsdale','Tempe','Mesa','Chandler','Gilbert','Surprise','Ahwatukee Foothills','Arcadia','Downtown Phoenix','North Scottsdale'],
  },
  {
    slug: 'tucson-az',
    city: 'Tucson', state: 'Arizona', stateAbbr: 'AZ',
    phone: '(520) 477-8377', phoneRaw: '5204778377',
    address: 'Tucson, AZ Service Area',
    climateAngle: 'desert heat, monsoon storms, and cool winter nights',
    intro: 'Tucson\'s desert climate brings intense summer heat and powerful monsoon storms that stress both HVAC and plumbing systems. Our Arizona-licensed technicians serve all Tucson neighborhoods.',
    neighborhoods: ['Marana','Oro Valley','Sahuarita','South Tucson','Midtown Tucson','Eastside Tucson','Foothills','Catalina Foothills'],
  },
  {
    slug: 'salt-lake-city-ut',
    city: 'Salt Lake City', state: 'Utah', stateAbbr: 'UT',
    phone: '(725) 213-7309', phoneRaw: '7252137309',
    address: 'Salt Lake City, UT Service Area',
    climateAngle: 'cold snowy winters, hot summers, and valley inversion air quality issues',
    intro: 'Salt Lake City\'s dramatic seasonal swings — from sub-freezing winters to 100°F summers — demand HVAC systems that perform across the full range. Our Utah-licensed technicians are ready year-round.',
    neighborhoods: ['Sugar House','Millcreek','Murray','Sandy','South Jordan','West Jordan','Draper','Riverton','Herriman'],
  },
  {
    slug: 'provo-ut',
    city: 'Provo', state: 'Utah', stateAbbr: 'UT',
    phone: '(725) 213-7309', phoneRaw: '7252137309',
    address: 'Provo, UT Service Area',
    climateAngle: 'cold mountain winters and warm summers in the Utah Valley',
    intro: 'Provo and the Utah Valley experience cold, snowy winters and increasingly warm summers. Residents rely on well-maintained HVAC systems year-round, and Silver State\'s licensed Utah technicians are ready to serve.',
    neighborhoods: ['Orem','American Fork','Springville','Spanish Fork','Payson','Lindon','Pleasant Grove'],
  },
  {
    slug: 'dallas-tx',
    city: 'Dallas', state: 'Texas', stateAbbr: 'TX',
    phone: '(725) 213-7309', phoneRaw: '7252137309',
    address: 'Dallas, TX Service Area',
    climateAngle: 'hot humid summers, occasional ice storms, and unpredictable weather',
    intro: 'Dallas weather is notoriously unpredictable — sweltering summers, occasional ice storms, and everything in between. Silver State\'s Texas team keeps homes and businesses comfortable regardless of what the weather brings.',
    neighborhoods: ['Plano','Frisco','McKinney','Allen','Arlington','Irving','Garland','Mesquite','Grand Prairie'],
  },
  {
    slug: 'houston-tx',
    city: 'Houston', state: 'Texas', stateAbbr: 'TX',
    phone: '(725) 213-7309', phoneRaw: '7252137309',
    address: 'Houston, TX Service Area',
    climateAngle: 'extreme heat, humidity, and hurricane season',
    intro: 'Houston\'s combination of extreme heat, high humidity, and hurricane season creates unique demands on HVAC and plumbing systems. Our Texas-licensed technicians are experienced with the region\'s specific challenges.',
    neighborhoods: ['Sugar Land','The Woodlands','Katy','Pearland','Pasadena','Baytown','Cypress','Friendswood'],
  },
];

// ─── BLOG POSTS ──────────────────────────────────────────────────────────────

export const blogPosts = [
  // HVAC cluster
  {
    slug: 'spring-hvac-maintenance-checklist',
    cluster: 'hvac',
    title: 'Spring HVAC Maintenance Checklist for Homeowners',
    excerpt: 'Get your system ready before the heat hits. Everything you need to check before summer.',
    date: 'March 6, 2026',
    readTime: '6 min read',
    relatedService: '/residential/hvac/hvac-maintenance/',
    img: 'blog-spring-hvac',
    content: `Spring is the ideal time to prepare your HVAC system before summer heat arrives. Following this checklist can prevent costly breakdowns during the hottest months.

**Replace Your Air Filter**
Check your filter first — a clogged filter restricts airflow and forces your system to work harder. Replace it every 30–90 days depending on your filter type and home conditions.

**Clear Debris from the Outdoor Unit**
Winter accumulation of leaves, dirt, and debris can block airflow. Turn off the unit at the disconnect, then gently clear away any buildup. Trim any shrubs or vegetation to maintain 2 feet of clearance.

**Test Your Thermostat**
Switch your thermostat to cooling mode and verify your system turns on and reaches the set temperature. Consider upgrading to a smart thermostat for better efficiency.

**Check Your Condensate Drain Line**
A clogged condensate drain can cause water damage and trigger a safety shutoff. Flush it with a cup of diluted bleach to prevent algae buildup.

**Schedule Professional Maintenance**
While DIY tasks matter, professional maintenance includes refrigerant level checks, electrical component inspection, coil cleaning, and full system performance testing — services that require certified technicians.

Silver State's HVAC maintenance visits are designed to catch small issues before they become expensive failures. Schedule your spring tune-up today.`,
  },
  {
    slug: 'hvac-maintenance-las-vegas',
    cluster: 'hvac',
    title: 'The Ultimate HVAC Maintenance Checklist for Las Vegas Homeowners',
    excerpt: 'Living in Las Vegas means your HVAC is a lifeline. Here\'s how to protect it year-round.',
    date: 'February 18, 2026',
    readTime: '8 min read',
    relatedService: '/residential/hvac/hvac-maintenance/',
    img: 'blog-hvac-checklist',
    content: `Las Vegas HVAC systems face conditions unlike almost anywhere else in the country. With summer temperatures regularly exceeding 110°F and nearly zero humidity, your cooling system runs harder and longer than it was designed for in most climates.

**Why Las Vegas HVAC Needs Extra Attention**
The combination of extreme heat, hard water (Las Vegas water tests at 250–400 mg/L hardness), airborne dust, and nearly continuous summer operation creates unique maintenance demands.

**Monthly Tasks**
- Check and replace air filters (monthly in summer, every 2 months otherwise)
- Clear debris from around outdoor unit
- Listen for unusual noises or changes in operation

**Spring Pre-Season Checklist**
- Schedule professional coil cleaning — desert dust coats coils faster than in other climates
- Check refrigerant levels
- Test thermostat and calibrate if needed
- Inspect and clear condensate drain line

**Fall Pre-Season Checklist**  
- Service the heating system before temperatures drop
- Check heat strips (common in Las Vegas homes that use heat strips rather than gas furnaces)
- Inspect ductwork for leaks

**Annual Professional Service**
Silver State recommends two professional HVAC visits per year for Las Vegas homes — one in spring, one in fall. Our technicians know the specific demands of desert HVAC systems and can identify issues before the season's most critical weeks.`,
  },
  {
    slug: 'signs-ac-needs-replacing',
    cluster: 'hvac',
    title: 'How Long Does an AC Unit Last? Signs It\'s Time to Replace',
    excerpt: 'Know the warning signs before your AC fails during the hottest week of the year.',
    date: 'January 22, 2026',
    readTime: '5 min read',
    relatedService: '/residential/hvac/ac-replacement/',
    img: 'blog-spring-hvac',
    content: `Most air conditioning systems last between 10 and 15 years. In hot climates like Las Vegas, Phoenix, and Tucson, where systems run nearly year-round, the lifespan often falls toward the lower end of that range.

**Age of the System**
If your AC is over 10 years old, start planning for replacement — even if it\'s still working. Waiting until it fails completely often means emergency replacement during a heat wave, with less time to research options.

**Increasing Repair Costs**
Apply the 50% rule: if a repair costs more than 50% of the system\'s replacement cost, replacement is usually the better investment. Multiple smaller repairs in quick succession signal the same thing.

**R-22 Refrigerant**
Older systems using R-22 (Freon) refrigerant are increasingly expensive to service since R-22 was phased out in 2020. If your system uses R-22, replacement with a new R-410A system is strongly recommended.

**Rising Energy Bills**
As systems age and efficiency degrades, energy consumption rises. A new high-efficiency system (16+ SEER) can cut cooling costs by 30–50%.

**Poor Comfort Performance**
Uneven cooling, humidity problems, or struggling to reach set temperatures are signs of a declining system.

If you\'re experiencing two or more of these signs, contact Silver State for a free system assessment.`,
  },
  // Plumbing cluster
  {
    slug: 'running-toilet-troubleshoot',
    cluster: 'plumbing',
    title: 'How to Troubleshoot a Running Toilet: DIY Tips vs. When to Call a Plumber',
    excerpt: 'A running toilet wastes hundreds of gallons a month. Here\'s how to fix it — or know when to call.',
    date: 'February 10, 2026',
    readTime: '5 min read',
    relatedService: '/residential/plumbing/bathroom-plumbing/',
    img: 'blog-running-toilet',
    content: `A running toilet can waste 200 gallons of water per day — adding $50–$100 to your monthly water bill. The good news is that most running toilet issues are caused by one of three components, and two of them are straightforward DIY fixes.

**The Three Most Common Causes**

**1. Worn Flapper**
The flapper is the rubber seal at the bottom of the tank. When it wears out or warps, water continuously drips into the bowl. You can diagnose this with the food coloring test: add a few drops to the tank and wait 15 minutes without flushing. If color appears in the bowl, your flapper is leaking.

Fix: Replace the flapper. This is a 10-minute, under $10 repair available at any hardware store.

**2. Faulty Fill Valve**
If your toilet runs intermittently or you hear a faint hissing sound, the fill valve may be failing. The fill valve controls how much water enters the tank after each flush.

Fix: Fill valve replacement is a 20-30 minute DIY repair, but if you're not comfortable with it, it's a quick job for our plumbers.

**3. Float Set Too High**
If the float (the ball or cup that rises with water level) is set too high, water continuously spills into the overflow tube and drains to the bowl.

Fix: Adjust the float down until water stops 1 inch below the top of the overflow tube.

**When to Call a Plumber**
If the toilet runs despite replacing the flapper and adjusting the float, there may be a cracked fill valve, damage to the overflow tube, or a problem with the flush valve seat that requires professional attention.`,
  },
  {
    slug: 'hard-water-las-vegas-pipes',
    cluster: 'plumbing',
    title: 'Hard Water in Las Vegas: What It\'s Doing to Your Pipes',
    excerpt: 'Las Vegas has some of the hardest water in the US. Here\'s the long-term damage to your plumbing.',
    date: 'January 15, 2026',
    readTime: '6 min read',
    relatedService: '/residential/plumbing/water-softeners/',
    img: 'blog-hvac-checklist',
    content: `Las Vegas water regularly tests between 250–400 milligrams per liter of dissolved calcium and magnesium — classified as "very hard" to "extremely hard." For comparison, water under 60 mg/L is considered soft. The result is visible everywhere: white spots on dishes, dry skin after showering, and unseen damage building inside your pipes and appliances.

**Scale Buildup in Pipes**
Calcium carbonate deposits accumulate on the inside of pipes over time, gradually reducing water flow. In severe cases, pipes can become almost completely occluded, requiring replacement.

**Water Heater Efficiency Loss**
Scale accumulates at the bottom of water heater tanks, creating an insulating layer that forces the heating element to work harder. A water heater in a hard-water area can lose 25–40% of its efficiency within a few years.

**Appliance Lifespan Reduction**
Dishwashers, washing machines, and coffee makers all suffer accelerated wear from hard water. Studies show appliances in hard water areas fail significantly earlier than in soft water areas.

**The Solution**
A whole-home water softener installed at the main supply line treats all water entering your home before it reaches pipes, appliances, or fixtures. The unit exchanges calcium and magnesium ions for sodium, preventing scale from forming anywhere in your plumbing system.

Silver State installs both traditional salt-based softeners and salt-free conditioning systems. We test your water hardness first to ensure proper sizing.`,
  },
  {
    slug: 'sewer-line-warning-signs',
    cluster: 'plumbing',
    title: '5 Warning Signs Your Sewer Line Needs Repair',
    excerpt: 'Sewer line problems start small but become catastrophic fast. Know the early warning signs.',
    date: 'December 12, 2025',
    readTime: '5 min read',
    relatedService: '/residential/plumbing/sewer-line-services/',
    img: 'blog-running-toilet',
    content: `Your sewer line is the most critical — and most ignored — part of your home's plumbing system. Unlike a leaky faucet or running toilet, sewer line problems develop silently until they cause a complete backup or collapse. Catching them early can save thousands.

**1. Multiple Slow Drains Simultaneously**
If just one drain is slow, it\'s likely a local clog. But if multiple drains throughout your home are slow — kitchen, bathrooms, laundry — the problem is almost certainly in the main sewer line.

**2. Gurgling Sounds**
Toilets that gurgle when you run the washing machine or sink, or sinks that bubble when the toilet flushes, indicate a partially blocked sewer line. Air is trapped and escaping through available openings.

**3. Sewer Odors**
Your drains should never smell like sewage. Persistent sewer odors, especially in the yard or basement, can indicate a crack or break in the line that is releasing sewer gas.

**4. Wet Spots or Unusually Green Patches in Your Yard**
Sewer leaks are fertilizer. If you notice an exceptionally lush, green strip of grass running in a line, or wet ground above your sewer line route, the pipe may be leaking underground.

**5. Frequent Clogs Requiring Professional Clearing**
If you're calling a plumber to clear your main line more than once per year, you don't just have a recurring clog — you likely have root intrusion, a belly in the pipe, or a partial collapse that needs camera inspection and repair.`,
  },
  // Commercial cluster
  {
    slug: 'commercial-hvac-maintenance-frequency',
    cluster: 'commercial',
    title: 'How Often Should Commercial HVAC Systems Be Serviced?',
    excerpt: 'Commercial HVAC maintenance schedules differ significantly from residential. Here\'s what\'s required.',
    date: 'January 8, 2026',
    readTime: '6 min read',
    relatedService: '/commercial/hvac/',
    img: 'blog-hvac-checklist',
    content: `Commercial HVAC systems operate more intensively than residential units and serve a legal duty-of-care to building occupants. The right maintenance schedule depends on system type, usage hours, and occupancy type.

**Standard Commercial Maintenance Schedule**

Monthly:
- Filter inspection and replacement
- Thermostat and controls check
- Visual inspection of all accessible components

Quarterly:
- Coil inspection and cleaning
- Belt tension and lubrication
- Drain pan and condensate line inspection
- Refrigerant pressure check

Semi-Annually:
- Comprehensive system tune-up
- Electrical component inspection
- Full performance testing and documentation

Annually:
- Ductwork inspection
- Combustion analysis (gas systems)
- Full system report for compliance documentation

**Rooftop Units Require Extra Attention**
RTUs are exposed to UV, wind, rain, and temperature extremes year-round. Gasket and housing inspections should be added to quarterly visits in harsh climates.

**Why Maintenance Agreements Make Sense**
Silver State\'s commercial maintenance agreements provide scheduled service visits, priority emergency response, discounted repair rates, and full documentation for compliance purposes. Contact us for a custom agreement tailored to your facility.`,
  },
];
