// Authentic campus discovery dataset for CAMPUS / CULTURE
// Carefully curated photography, authentic schedules, and multi-category clubs/events

export const CATEGORIES = [
  { id: 'All', label: 'All Disciplines', count: 18 },
  { id: 'Technical', label: 'Technical & Systems', count: 5 },
  { id: 'Cultural', label: 'Cultural & Arts', count: 4 },
  { id: 'Sports', label: 'Athletics & Alpine', count: 3 },
  { id: 'Social Impact', label: 'Social Impact & Ecology', count: 3 },
  { id: 'Workshops', label: 'Hands-on Labs & Studio', count: 3 },
];

export const EVENTS = [
  {
    id: 'evt-synapse-2026',
    title: 'Synapse 2026: Autonomous Robotics & Micro-Aerial Showcase',
    slug: 'synapse-2026-robotics',
    category: 'Technical',
    date: 'Nov 14, 2026',
    time: '14:00 – 19:30 IST',
    venue: 'Centre for Advanced Robotics, Hall 3B',
    shortDescription: 'Live test trials of student-built quadruped rovers, LiDAR slam drones, and edge-AI perception systems across simulated obstacle courses.',
    fullDescription: 'Synapse is our premier autumn engineering exposition. Over four hours, eight interdisciplinary teams will run autonomous traversal demos across rugged indoor terrains, real-time computer vision benchmarks, and collaborative drone flocking routines. Open to all students interested in mechatronics, embedded firmware, and neural SLAM.',
    featured: true,
    status: 'Open',
    capacity: 220,
    registeredCount: 178,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    tags: ['Robotics', 'ROS2', 'Computer Vision', 'Embedded'],
    speakers: [
      { name: 'Dr. Aris Thorne', role: 'Director of Mechatronics & Autonomous Control' },
      { name: 'Maya Chen (Y4)', role: 'Lead Autonomy Architect, Rover Team' }
    ],
    schedule: [
      { time: '14:00 - 14:30', title: 'Telemetry & Bench Test Setup', room: 'Hangar Bay' },
      { time: '14:30 - 16:30', title: 'Live Obstacle Traversal Trials', room: 'Arena A' },
      { time: '16:45 - 18:00', title: 'Edge Neural Perception Benchmarks', room: 'Auditorium' },
      { time: '18:00 - 19:30', title: 'Open Source Code Exchange & Mixer', room: 'Mezzanine' }
    ],
    prerequisites: 'Open to all branches. Bring your laptop if you want to inspect telemetry feeds live.'
  },
  {
    id: 'evt-nocturne-sound',
    title: 'Nocturne: Monolithic Architecture & Sound Spatialization',
    slug: 'nocturne-architecture-sound',
    category: 'Cultural',
    date: 'Nov 18, 2026',
    time: '20:00 – 23:00 IST',
    venue: 'Brutalist Atrium, Faculty of Built Environments',
    shortDescription: 'An immersive 16-channel ambisonic sound performance within the exposed concrete atrium, exploring acoustics, psychoacoustics, and spatial light.',
    fullDescription: 'Engineered as a dialogue between post-war brutalist architectural geometry and algorithmic sound design. Student electroacoustic composers utilize ambisonic speaker rigs to transform concrete acoustics into resonant harmonic chambers. Ambient light projections by the Media Design Guild.',
    featured: false,
    status: 'Filling Fast',
    capacity: 150,
    registeredCount: 136,
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=80',
    tags: ['Acoustics', 'Architecture', 'Ambient', 'Spatial Sound'],
    speakers: [
      { name: 'Vikram Joshi', role: 'Sound Synthesis Researcher & Faculty Guest' },
      { name: 'Elena Rostova', role: 'Spatial Media Director' }
    ],
    schedule: [
      { time: '20:00 - 20:45', title: 'Acoustic Impulse Response Talk', room: 'Atrium Level 1' },
      { time: '21:00 - 22:30', title: 'Multi-Channel Ambisonic Performance', room: 'Main Void' },
      { time: '22:30 - 23:00', title: 'Acoustic Architecture Q&A', room: 'Terrace' }
    ],
    prerequisites: 'Ear protection recommended; quiet listening zone enforced during performance.'
  },
  {
    id: 'evt-open-ground-climb',
    title: 'Open Ground: Inter-Collegiate Bouldering & Endurance Sprint',
    slug: 'open-ground-bouldering-sprint',
    category: 'Sports',
    date: 'Nov 21, 2026',
    time: '08:00 – 17:00 IST',
    venue: 'Alpine Wall & Campus Track Pavilion',
    shortDescription: 'Annual campus bouldering showdown featuring 35 problem routes ranging from V2 to V9, coupled with twilight 5K cross-country track trials.',
    fullDescription: 'Whether you are topping your first V3 project or pushing V8 dynamic dynos, Open Ground celebrates grit and physical problem-solving. Full route resets by certified route-setters, safety harnesses provided, chalk stations across all boulders, and nutrition hydration stations sponsored by the Athletic Union.',
    featured: false,
    status: 'Open',
    capacity: 180,
    registeredCount: 112,
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1200&q=80',
    tags: ['Bouldering', 'Athletics', 'Climbing', 'Endurance'],
    speakers: [
      { name: 'Kavita Nair (Y4)', role: 'President, Alpine & Bouldering Union' },
      { name: 'Coach Marcus Vance', role: 'Collegiate High-Performance Trainer' }
    ],
    schedule: [
      { time: '08:00 - 09:30', title: 'Registration, Route Preview & Warmup', room: 'Wall B' },
      { time: '10:00 - 13:00', title: 'Bouldering Heats: V2 - V5', room: 'Main Wall' },
      { time: '14:00 - 16:00', title: 'Finals: V6 - V9 Dynamic Problems', room: 'Overhang Sector' },
      { time: '16:15 - 17:00', title: 'Podium & Athletic Fellowship', room: 'Pavilion Lawn' }
    ],
    prerequisites: 'Climbing shoes and chalk available for loan on site. Signed campus waiver mandatory.'
  },
  {
    id: 'evt-resilience-summit',
    title: 'Resilience Summit: Zero-Waste Campus Blueprint & Exhibition',
    slug: 'resilience-summit-ecology',
    category: 'Social Impact',
    date: 'Nov 25, 2026',
    time: '10:00 – 16:30 IST',
    venue: 'Bio-Conservatory & West Quad Pavilion',
    shortDescription: 'Student-led research presentations on circular micro-grids, decentralised compost digesters, and sustainable campus water reclamation.',
    fullDescription: 'The campus ecology summit puts actionable policy and direct engineering solutions first. Watch real-time biomass gasification prototypes, evaluate native plant canopy thermal mapping, and vote on student-allocated sustainability grant funds.',
    featured: false,
    status: 'Open',
    capacity: 250,
    registeredCount: 194,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    tags: ['Sustainability', 'Ecology', 'Circular Economy', 'Renewables'],
    speakers: [
      { name: 'Prof. Ananya Sen', role: 'Chair of Ecological Engineering' },
      { name: 'Tariq Al-Mansoor (Y3)', role: 'Lead, Campus Solar Micro-Grid' }
    ],
    schedule: [
      { time: '10:00 - 11:30', title: 'Audited Campus Carbon & Energy Audit', room: 'Lecture Hall 1' },
      { time: '11:45 - 13:15', title: 'Biomaterial Prototyping Showcase', room: 'Conservatory' },
      { time: '14:30 - 16:30', title: 'Student Grant Pitch & Jury Review', room: 'Amphitheatre' }
    ],
    prerequisites: 'Open to all departments. Lunch provided using local farm partners.'
  },
  {
    id: 'evt-raw-press-workshop',
    title: 'Raw Press: Risograph, Silkscreen & Editorial Masterclass',
    slug: 'raw-press-risograph-workshop',
    category: 'Workshops',
    date: 'Nov 28, 2026',
    time: '13:00 – 18:00 IST',
    venue: 'The Guild Print House, Building E, Basement Lab',
    shortDescription: 'Get your hands stained with soy inks. Learn two-color Risograph layering, manual registration, and screen printing your own zine spreads.',
    fullDescription: 'Tactile print design in an era of digital exhaustion. Learn halftone color separation, drum mechanics, and grain manipulation on genuine two-drum Riso duplicators. Every participant leaves with a physical 16-page risograph pamphlet and custom poster prints.',
    featured: false,
    status: 'Waitlist',
    capacity: 24,
    registeredCount: 24,
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=80',
    tags: ['Printmaking', 'Risograph', 'Typography', 'Zine Design'],
    speakers: [
      { name: 'Kiran Verma', role: 'Master Printmaker & Editorial Designer' },
      { name: 'Sora Tanaka', role: 'Art Director, Student Press' }
    ],
    schedule: [
      { time: '13:00 - 14:00', title: 'Color Theory & Ink Density for Stencil Printing', room: 'Print Lab' },
      { time: '14:15 - 16:30', title: 'Hands-on Drum Swaps & Master Cutting', room: 'Station 1-4' },
      { time: '16:45 - 18:00', title: 'Binding, Trimming & Edition Exchange', room: 'Finishing Table' }
    ],
    prerequisites: 'All paper, soy inks, and aprons provided. Bring digital or hand-drawn sketches.'
  },
  {
    id: 'evt-quantum-systems',
    title: 'Algorithmic Horizons: High-Performance Quantum Simulators',
    slug: 'quantum-systems-symposium',
    category: 'Technical',
    date: 'Dec 02, 2026',
    time: '15:00 – 18:30 IST',
    venue: 'Turing Lecture Theatre & High-Compute Cluster',
    shortDescription: 'Deep-dive into Qiskit circuit synthesis, tensor network simulators, and quantum error mitigation experiments conducted on cluster nodes.',
    fullDescription: 'Jointly hosted with the Institute for Quantum Information. Graduate and undergraduate researchers demo state-vector simulations of NISQ circuits, demonstrate VQE algorithms for molecular ground-state energies, and provide cluster access tokens for student projects.',
    featured: false,
    status: 'Open',
    capacity: 140,
    registeredCount: 88,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
    tags: ['Quantum', 'Algorithms', 'High Compute', 'Physics'],
    speakers: [
      { name: 'Dr. Devika Rangan', role: 'Quantum Algorithms Lead' },
      { name: 'Sameer Sen', role: 'HPC Systems Administrator' }
    ],
    schedule: [
      { time: '15:00 - 16:00', title: 'From Linear Algebra to Clifford Gates', room: 'Turing Theatre' },
      { time: '16:15 - 17:30', title: 'Live Circuit Compilation on GPU Clusters', room: 'Cluster Lab' },
      { time: '17:30 - 18:30', title: 'Student Research Lightning Pitches', room: 'Lobby' }
    ],
    prerequisites: 'Familiarity with Python and basic linear algebra recommended.'
  },
  {
    id: 'evt-chamber-orchestra',
    title: 'Acoustic Vaults: Minimalist Chamber & Modular Synthesizers',
    slug: 'acoustic-vaults-chamber-synth',
    category: 'Cultural',
    date: 'Dec 05, 2026',
    time: '19:30 – 22:00 IST',
    venue: 'The Old Chapel Stone Hall',
    shortDescription: 'A dialogue between string quartets and Eurorack modular synthesizers, reinterpreting Steve Reich, Terry Riley, and original student works.',
    fullDescription: 'Historic limestone arches meet control-voltage oscillators. The student chamber ensemble pairs acoustic cello, violin, and bass with generative modular synthesizer patches. Lighting is strictly warm candlelight and focused low-kelvin spots.',
    featured: false,
    status: 'Filling Fast',
    capacity: 120,
    registeredCount: 110,
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80',
    tags: ['Strings', 'Modular Synth', 'Minimalism', 'Chamber Music'],
    speakers: [
      { name: 'Nikhil Prabhu', role: 'Conductor & String Director' },
      { name: 'Lea Schneider', role: 'Modular Synthesis Lead' }
    ],
    schedule: [
      { time: '19:30 - 20:30', title: 'Phase Patterns: Reich for Strings & Voltage', room: 'Vault Hall' },
      { time: '20:45 - 22:00', title: 'Generative Improvisations & Solo Cadenzas', room: 'Altar Platform' }
    ],
    prerequisites: 'General admission. Seating is unassigned on stone benches and cushions.'
  },
  {
    id: 'evt-astronomy-night',
    title: 'Night Sky Field Expedition: Astrophotography & Optical Rigging',
    slug: 'astronomy-night-optics',
    category: 'Workshops',
    date: 'Dec 09, 2026',
    time: '21:00 – 02:00 IST',
    venue: 'Observatory Dome & High Ridge Meadow',
    shortDescription: 'Field workshop capturing deep-sky nebulae and lunar craters using motorized equatorial mounts and narrowband astro cameras.',
    fullDescription: 'Leave campus light domes behind. We deploy three Schmidt-Cassegrain telescopes and motorized star trackers at the campus observatory ridge. Learn calibration frames (darks, flats, bias), polar alignment, and PixInsight image stacking under zero moonlight.',
    featured: false,
    status: 'Open',
    capacity: 45,
    registeredCount: 38,
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    tags: ['Astrophotography', 'Optics', 'Deep Space', 'Astronomy'],
    speakers: [
      { name: 'Prof. Ronald Vance', role: 'Observatory Director' },
      { name: 'Zara K.', role: 'Head of Sky Observation' }
    ],
    schedule: [
      { time: '21:00 - 21:45', title: 'Polar Alignment & Sensor Calibration', room: 'Observation Deck' },
      { time: '22:00 - 00:30', title: 'Deep-Sky Long-Exposure Acquisition', room: 'Telescope Dome' },
      { time: '00:30 - 02:00', title: 'FITS Image Stacking & Hot Cocoa', room: 'Field Station' }
    ],
    prerequisites: 'Dress warmly (temperatures drop significantly on the ridge). Red headlamps provided.'
  }
];

export const CLUBS = [
  {
    id: 'club-quantum',
    name: 'Quantum Computing & Algorithms Society',
    shortName: 'QCAS',
    category: 'Technical',
    tagline: 'Bridging pure quantum mechanics, tensor networks, and cloud QPU programming.',
    description: 'A research-first student collective working on quantum circuit optimization, error mitigation schemes, and Qiskit/PennyLane implementations. We host weekly paper reading circles and sponsor teams for MIT iQuHACK.',
    longDescription: 'Founded in 2022, QCAS is committed to bringing quantum information science out of theoretical physics and into hands-on computer science. Our members work directly on IBM Quantum, Rigetti QPUs, and local GPU-accelerated state-vector simulators. We run semester-long incubation groups for students writing undergraduate research manuscripts.',
    leadName: 'Rohan Deshmukh',
    leadRole: 'President (Physics & CS Y4)',
    memberCount: 164,
    foundedYear: '2022',
    meetingSchedule: 'Wednesdays at 18:30 IST & Saturdays at 14:00 IST',
    venue: 'Advanced Science Quad, Lab 204',
    tags: ['Quantum', 'Physics', 'Python', 'Algorithms', 'Research'],
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    upcomingEventId: 'evt-quantum-systems',
    requirements: 'Curiosity about linear algebra and quantum states. No prior hardware background required.',
    socials: {
      github: 'https://github.com/qcas-campus',
      website: 'https://qcas.campus.edu',
      discord: 'https://discord.gg/qcas'
    },
    faqs: [
      { q: 'Do I need a physics degree to join?', a: 'Not at all. More than half of our members come from Computer Science, Electrical Engineering, and Mathematics.' },
      { q: 'Are computing credits provided?', a: 'Yes, members receive allocated compute quotas on our local GPU simulation server and access to cloud QPU testbeds.' }
    ]
  },
  {
    id: 'club-robotics',
    name: 'Autonomous Robotics & Aerial Systems Lab',
    shortName: 'AERO-ROBOTICS',
    category: 'Technical',
    tagline: 'Hardware, firmware, and reinforcement learning for autonomous mobile agents.',
    description: 'We design and machine custom rovers, micro-quadcopters, and underwater submersibles. From custom PCBs to brushless motor controllers and ROS2 navigation pipelines, we build everything in-house.',
    longDescription: 'AERO-ROBOTICS is the premier engineering lab on campus. Our 800-sq-ft fabrication workshop includes CNC mills, SLA resin printers, a soldering rework station, and an indoor flight netting arena. Members compete internationally in the University Rover Challenge and RoboSub.',
    leadName: 'Nadia Solis',
    leadRole: 'Chief Engineer (Mechanical & Mechatronics Y4)',
    memberCount: 240,
    foundedYear: '2018',
    meetingSchedule: 'Tuesdays & Thursdays at 17:30 IST',
    venue: 'FabLab High Bay, Engineering Block 1',
    tags: ['Robotics', 'ROS2', 'SolidWorks', 'C++', 'Control Systems'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    upcomingEventId: 'evt-synapse-2026',
    requirements: 'Commitment of at least 4 hours per week for workshop training and build sprints.',
    socials: {
      github: 'https://github.com/aerorobotics-lab',
      website: 'https://aerorobotics.org',
      discord: 'https://discord.gg/aerorobotics'
    },
    faqs: [
      { q: 'Can first-year students join?', a: 'Yes! We run a dedicated 6-week boot camp covering CAD, soldering, microcontrollers, and Git every autumn.' },
      { q: 'What tools are available?', a: 'Full access to 4-axis CNC milling, laser cutters, 3D printing, oscilloscopes, and the indoor test cage.' }
    ]
  },
  {
    id: 'club-cinema',
    name: 'Cinema & Avant-Garde Film Guild',
    shortName: 'KINO GUILD',
    category: 'Cultural',
    tagline: 'Curating global cinema, 16mm celluloid archives, and student short films.',
    description: 'A sanctuary for cinema lovers. We screen rare international prints, host director retrospectives, conduct weekly screenwriting workshops, and provide cinema camera gear for student productions.',
    longDescription: 'Kino Guild believes films are made to be discussed in person. We program curated seasons that span French New Wave, Japanese Golden Era, slow cinema, and contemporary underground cinema. We also maintain a rental locker of Blackmagic cinema cameras, prime lenses, and sound recorders available freely to active members.',
    leadName: 'Devan Chatterjee',
    leadRole: 'Curator & Festival Director (Media Studies Y3)',
    memberCount: 195,
    foundedYear: '2016',
    meetingSchedule: 'Fridays at 19:00 IST (Screening & Discussion)',
    venue: 'Old Humanities Hall, Room 102 Screening Theatre',
    tags: ['Film', 'Screenwriting', 'Directing', 'Cinematography', 'Criticism'],
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    upcomingEventId: 'evt-nocturne-sound',
    requirements: 'Passion for thoughtful filmmaking and openness to diverse global perspectives.',
    socials: {
      website: 'https://kino-guild.campus.edu',
      instagram: 'https://instagram.com/kinoguild'
    },
    faqs: [
      { q: 'Can I rent film equipment for personal projects?', a: 'Yes, members who complete our camera and lighting safety briefing can borrow equipment free of charge for approved projects.' }
    ]
  },
  {
    id: 'club-typography',
    name: 'Typographic & Editorial Design Collective',
    shortName: 'PRESS WORK',
    category: 'Cultural',
    tagline: 'Celebrating Swiss modernism, experimental variable fonts, and print design.',
    description: 'We research visual communication, publication architecture, bespoke typeface design, and modern digital interfaces. Publishers of the quarterly campus journal "MARGINS".',
    longDescription: 'Press Work investigates how letterforms shape thought. From brutalist posters and micro-typography to interactive web glyphs and tactile bookbinding, our members collaborate across graphic design, typography, and web typography. We host visiting foundry designers and curate annual campus typeface exhibitions.',
    leadName: 'Siddharth Rao',
    leadRole: 'Design Lead (Applied Arts Y4)',
    memberCount: 142,
    foundedYear: '2020',
    meetingSchedule: 'Mondays at 18:00 IST',
    venue: 'Studio 4, School of Design',
    tags: ['Typography', 'Editorial', 'Bookbinding', 'Graphic Design', 'Figma'],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    upcomingEventId: 'evt-raw-press-workshop',
    requirements: 'Bring enthusiasm for detail, spacing, visual rhythm, and ink on paper.',
    socials: {
      github: 'https://github.com/presswork-studio',
      website: 'https://margins-journal.org'
    },
    faqs: [
      { q: 'Is digital experience required?', a: 'We teach both analog typesetting and modern Glyphs/FontForge and web typography software.' }
    ]
  },
  {
    id: 'club-energy',
    name: 'Off-Grid Solar & Clean Energy Initiative',
    shortName: 'CIRCUIT / GREEN',
    category: 'Social Impact',
    tagline: 'Designing decentralised photovoltaic microgrids and energy storage.',
    description: 'An applied sustainability engineering group deploying solar benches, lithium iron phosphate battery monitors, and micro-hydro sensors for campus and rural community electrification.',
    longDescription: 'Circuit / Green transforms sustainability from rhetoric into hardware. In the past two years, members installed 18kW of supplementary solar capacity on campus rooftops, automated campus quad lighting, and deployed water filtration telemetry stations in neighboring rural districts.',
    leadName: 'Zainab Qureshi',
    leadRole: 'Project Director (Electrical & Environmental Y4)',
    memberCount: 175,
    foundedYear: '2019',
    meetingSchedule: 'Saturdays at 10:30 IST (Site & Lab Work)',
    venue: 'Renewable Power Lab & Rooftop Test Array',
    tags: ['Solar', 'Clean Tech', 'Microgrid', 'Batteries', 'IoT'],
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    upcomingEventId: 'evt-resilience-summit',
    requirements: 'Interest in energy transition and hands-on electrical installations.',
    socials: {
      website: 'https://circuitgreen.org',
      github: 'https://github.com/circuitgreen'
    },
    faqs: [
      { q: 'Do you work with campus administration?', a: 'Yes, our proposals are directly reviewed and funded through the campus sustainability capital fund.' }
    ]
  },
  {
    id: 'club-ecology',
    name: 'Campus Wildlife & Native Reforestation Alliance',
    shortName: 'FOREST / QUAD',
    category: 'Social Impact',
    tagline: 'Preserving native biodiversity, bird migration corridors, and micro-forests.',
    description: 'We track campus fauna, propagate native saplings, restore wetland buffer ponds, and monitor seasonal avian flyways with camera traps and acoustic bio-loggers.',
    longDescription: 'Forest / Quad stewards over 120 acres of native woodland surrounding the university perimeter. Our students conduct annual botanical censuses, manage an indigenous seed bank, and run night acoustic monitoring surveys for urban bat and owl populations.',
    leadName: 'Aditya Kulkarni',
    leadRole: 'Field Coordinator (Botany & Ecology Y3)',
    memberCount: 130,
    foundedYear: '2017',
    meetingSchedule: 'Sundays at 07:00 IST (Bird Survey & Planting)',
    venue: 'Botanical Greenhouse & Lake Station',
    tags: ['Biodiversity', 'Forestry', 'Ecology', 'Fieldwork', 'Conservation'],
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    upcomingEventId: 'evt-resilience-summit',
    requirements: 'Comfortable with early mornings, field boots, and outdoor conservation work.',
    socials: {
      instagram: 'https://instagram.com/forestquad',
      website: 'https://forestquad.campus.edu'
    },
    faqs: [
      { q: 'Can beginners join the bird counts?', a: 'Absolutely. We pair every newcomer with an experienced field naturalist and binoculars.' }
    ]
  },
  {
    id: 'club-bouldering',
    name: 'Collegiate Bouldering & Alpine Club',
    shortName: 'ALPINE UNION',
    category: 'Sports',
    tagline: 'Vertical puzzle solving, outdoor sandstone crags, and alpine fitness.',
    description: 'We train on the campus climbing wall, organize weekend expeditions to regional granite crags, and teach anchor rigging, lead belaying, and movement technique.',
    longDescription: 'From complete first-timers curious about climbing movement to seasoned climbers sending 7A outdoor boulders, Alpine Union provides a supportive, safety-obsessed, and high-energy community. We host bouldering clinics every Tuesday and lead climbing nights on Thursdays.',
    leadName: 'Kavita Nair',
    leadRole: 'Captain & Safety Marshal (Computer Science Y4)',
    memberCount: 210,
    foundedYear: '2015',
    meetingSchedule: 'Tuesdays & Thursdays at 18:00 IST, Crag trips on weekends',
    venue: 'Campus Bouldering Centre & Outdoor Tower',
    tags: ['Climbing', 'Bouldering', 'Outdoors', 'Fitness', 'Safety'],
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    upcomingEventId: 'evt-open-ground-climb',
    requirements: 'Signed campus athletic waiver. Climbing shoes can be borrowed for free.',
    socials: {
      instagram: 'https://instagram.com/alpineunion',
      website: 'https://alpineunion.org'
    },
    faqs: [
      { q: 'What if I am afraid of heights?', a: 'Bouldering takes place above thick safety crash mats at a maximum height of 4.5 meters, making it ideal for overcoming fears in a controlled environment.' }
    ]
  },
  {
    id: 'club-track',
    name: 'Endurance Athletics & Track Union',
    shortName: 'STRIDE UNION',
    category: 'Sports',
    tagline: 'Track intervals, tempo trail circuits, and collegiate road racing.',
    description: 'A disciplined running society welcoming dawn joggers and competitive middle-distance racers alike. We organize weekly 5K campus time trials and half-marathon training blocks.',
    longDescription: 'Stride Union meets before campus stirs. Guided by volunteer student captains and training methodologies from Lydiard and Pfitzinger, we offer pace groups from 6:30 min/km to sub-3:45 min/km. We also study biomechanics and running economy using wearable IMU sensors.',
    leadName: 'Akash Varma',
    leadRole: 'Endurance Lead (Mechanical Y3)',
    memberCount: 185,
    foundedYear: '2019',
    meetingSchedule: 'Mondays, Wednesdays & Saturdays at 06:15 IST',
    venue: 'Synthetic Athletic Track & Forest Loop',
    tags: ['Running', 'Athletics', 'Track', 'Endurance', 'Health'],
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    upcomingEventId: 'evt-open-ground-climb',
    requirements: 'A pair of running shoes and a desire to be consistent.',
    socials: {
      strava: 'https://strava.com/clubs/campus-stride',
      website: 'https://stride.campus.edu'
    },
    faqs: [
      { q: 'I am a slow runner, will I be left behind?', a: 'Never. Our golden rule is that no runner runs alone. Every group has an experienced sweeper.' }
    ]
  },
  {
    id: 'club-maker',
    name: 'Hardware Hackers & Embedded Fab Lab',
    shortName: 'HACK / FORGE',
    category: 'Workshops',
    tagline: 'Soldering irons, ESP32 microcontrollers, FPGA synthesis, and PCB routing.',
    description: 'A community workshop where software meets copper. We build custom mechanical keyboards, synthesize modular synths, reverse-engineer vintage electronics, and design wearable computing.',
    longDescription: 'Hack / Forge is open 24/7 to members who pass our electrical and thermal safety audit. We keep bins of passive components, microcontrollers (STM32, RP2040, ESP32-S3), pick-and-place tools, reflow ovens, and oscilloscopes. Every Friday night is an open bench hackathon.',
    leadName: 'Tanvi Mathur',
    leadRole: 'Lab Master (Electrical & Computer Y4)',
    memberCount: 220,
    foundedYear: '2021',
    meetingSchedule: 'Fridays at 18:00 IST until late',
    venue: 'Makerspace Vault, Central Library Basement',
    tags: ['Electronics', 'Embedded', 'PCB', 'Hardware', 'DIY'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    upcomingEventId: 'evt-raw-press-workshop',
    requirements: 'Willingness to take apart machines and put them back together safely.',
    socials: {
      github: 'https://github.com/hackforge-campus',
      website: 'https://hackforge.dev'
    },
    faqs: [
      { q: 'Can I bring broken appliances to fix?', a: 'Yes! We host a monthly "Repair Café" where we fix audio receivers, laptop fans, and kitchen gadgets together.' }
    ]
  },
  {
    id: 'club-analog',
    name: 'Darkroom & Analog Photography Circle',
    shortName: 'SILVER & GRAIN',
    category: 'Workshops',
    tagline: '35mm, medium format film development, chemical printing, and cyanotypes.',
    description: 'We keep traditional wet-chemical photography alive. Members mix their own developers, expose prints under optical enlargers, and experiment with historical solar prints.',
    longDescription: 'Silver & Grain operates a fully functional 8-station black-and-white wet darkroom on campus. We stock D-76, Rodinal, fiber-based papers, and negative film scanners. Whether you shoot a thrifted Olympus Trip 35 or a 4x5 large format view camera, this is your creative laboratory.',
    leadName: 'Mira Bose',
    leadRole: 'Darkroom Custodian (Architecture Y4)',
    memberCount: 110,
    foundedYear: '2014',
    meetingSchedule: 'Thursdays at 17:00 IST & Open Darkroom Saturdays',
    venue: 'Old Arts Basement, Darkroom B-12',
    tags: ['Photography', 'Film', 'Darkroom', 'Chemistry', 'Visual Arts'],
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    upcomingEventId: 'evt-astronomy-night',
    requirements: 'Completion of a 90-minute chemical safety and enlarger handling orientation.',
    socials: {
      instagram: 'https://instagram.com/silverandgrain',
      website: 'https://silvergrain.campus.edu'
    },
    faqs: [
      { q: 'Do you provide chemistry?', a: 'Standard B&W chemistry (developer, stop bath, fixer) is funded by the society and free for student members.' }
    ]
  },
  {
    id: 'club-orchestra',
    name: 'Classical & Contemporary Chamber Orchestra',
    shortName: 'PHILHARMONIC',
    category: 'Cultural',
    tagline: 'Symphonic masterworks, modern minimalism, and interdisciplinary scores.',
    description: 'A 65-piece full orchestral ensemble comprising undergraduate and graduate musicians across all engineering and arts faculties. We perform two major seasonal concerts each year.',
    longDescription: 'The Philharmonic brings together violinists studying chemical engineering, cellists researching machine learning, and percussionists passionate about architecture. Our repertoire balances classic orchestral canons (Beethoven, Mahler, Stravinsky) with contemporary commissions by student composers.',
    leadName: 'Nikhil Prabhu',
    leadRole: 'Conductor & Concertmaster (CS & Music Y4)',
    memberCount: 95,
    foundedYear: '2012',
    meetingSchedule: 'Tuesdays at 19:30 IST & Sundays at 15:00 IST',
    venue: 'University Concert Auditorium & Practice Studios',
    tags: ['Orchestra', 'Strings', 'Classical', 'Symphonic', 'Concerts'],
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    upcomingEventId: 'evt-chamber-orchestra',
    requirements: 'Audition on your instrument; sight-reading comfort at intermediate level.',
    socials: {
      youtube: 'https://youtube.com/@campusphilharmonic',
      website: 'https://philharmonic.campus.edu'
    },
    faqs: [
      { q: 'Are practice rooms available?', a: 'Yes, members gain 24/7 keycard access to sound-isolated practice booths with tuned pianos.' }
    ]
  },
  {
    id: 'club-formula',
    name: 'Formula Student Electric Racing',
    shortName: 'CAMPUS RACING',
    category: 'Technical',
    tagline: 'Designing, simulating, and racing custom 400V electric formula racecars.',
    description: 'An intensive competitive motorsport squad designing carbon fiber monocoques, regenerative braking systems, custom motor inverters, and aerodynamic aero packages.',
    longDescription: 'Campus Racing represents the university at Formula Student competitions worldwide. We operate like an elite racing engineering team: rigorous telemetry data acquisition, CFD aerodynamic simulations, FEA structural validation, and driver training on professional motion rigs.',
    leadName: 'Karthik Sundaram',
    leadRole: 'Team Principal (Aerospace & Electrical Y4)',
    memberCount: 160,
    foundedYear: '2017',
    meetingSchedule: 'Daily build sprints & Team Sync Saturdays at 11:00 IST',
    venue: 'Motorsport Garage, Automotive Test Facility',
    tags: ['Motorsport', 'Electric Vehicle', 'CFD', 'Aerodynamics', 'Composites'],
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    upcomingEventId: 'evt-synapse-2026',
    requirements: 'Extreme dedication, engineering problem-solving, and team-first mindset.',
    socials: {
      website: 'https://racing.campus.edu',
      instagram: 'https://instagram.com/campusracing',
      github: 'https://github.com/campusracing'
    },
    faqs: [
      { q: 'Can non-engineering students contribute?', a: 'Definitely. We have critical roles in sponsorship procurement, media production, telemetry telemetry UI design, and operations.' }
    ]
  }
];

export const CAMPUS_RESOURCES = [
  {
    category: 'Research & Fabrication',
    items: [
      {
        title: 'Central Maker FabLab',
        location: 'Engineering Complex, Building 1',
        hours: '24/7 with badge access',
        description: 'Waterjet cutting, 5-axis Haas CNC mills, laser cutters, electronics testing stations, and additive manufacturing.',
        actionLabel: 'View Equipment & Induction',
        link: '#lab-fab'
      },
      {
        title: 'High-Performance GPU Cluster',
        location: 'Turing Computer Center, Level 2',
        hours: 'Always available via SSH',
        description: 'Cluster of 128 NVIDIA H100/A100 GPUs allocated for student machine learning, physics simulations, and graphics rendering.',
        actionLabel: 'Request Compute Quota',
        link: '#compute'
      },
      {
        title: 'Materials Testing & Scanning Lab',
        location: 'Civil & Materials Building, Wing C',
        hours: 'Mon-Fri: 09:00 - 18:00',
        description: 'Tensile test frames, scanning electron microscopes (SEM), and thermal analysis rigs for hardware projects.',
        actionLabel: 'Book Session',
        link: '#materials'
      }
    ]
  },
  {
    category: 'Well-Being & Student Commons',
    items: [
      {
        title: 'The Quiet Quad Pavilion',
        location: 'West Lawn Conservatory',
        hours: '06:00 - 00:00 Daily',
        description: 'Sound-dampened architectural glass pavilion surrounded by native bamboo gardens for deep reading and reflection.',
        actionLabel: 'Floor Plan & Rules',
        link: '#quiet-quad'
      },
      {
        title: 'Peer Mentorship & Academic Guild',
        location: 'Student Centre, Mezzanine 3',
        hours: 'Mon-Sat: 10:00 - 20:00',
        description: 'Confidential peer tutoring across mathematics, data structures, mechanics, and thesis writing.',
        actionLabel: 'Find a Mentor',
        link: '#mentorship'
      },
      {
        title: 'Recreation & High-Performance Gym',
        location: 'Athletic Union Complex',
        hours: '05:30 - 22:30 Daily',
        description: 'Olympic lifting platforms, indoor 50m lap pool, squash courts, and athletic trainer assessments.',
        actionLabel: 'Pass & Timetable',
        link: '#gym'
      }
    ]
  },
  {
    category: 'Innovation Grants & Venture Hub',
    items: [
      {
        title: 'Undergraduate Discovery Fund',
        location: 'Innovation Hub, Suite 400',
        hours: 'Rolling monthly submissions',
        description: 'Micro-grants from $500 to $4,000 for student experiments, creative art installations, and independent prototypes.',
        actionLabel: 'Download Proposal Guidelines',
        link: '#grants'
      },
      {
        title: 'Venture Incubation Garage',
        location: 'South Hangar, Bay 2',
        hours: 'Open to cohort members',
        description: 'Zero-equity co-working space, legal counsel office hours, and direct alumni angel investor syndicate connections.',
        actionLabel: 'Apply for Spring Cohort',
        link: '#incubator'
      },
      {
        title: 'Student Publication & Zine Archive',
        location: 'Main Library, Special Collections',
        hours: 'Mon-Fri: 11:00 - 19:00',
        description: 'Physical archive of student newspapers, underground zines, research journals, and audio recordings since 1968.',
        actionLabel: 'Browse Catalogue',
        link: '#archives'
      }
    ]
  }
];

export const CAMPUS_STATS = [
  { value: '48+', label: 'Active Student Collectives', caption: 'Governed and operated directly by students' },
  { value: '120+', label: 'Annual Field Events', caption: 'Symposia, open exhibitions, and tournaments' },
  { value: '8,400+', label: 'Active Student Members', caption: 'Across 6 faculties and multidisciplinary schools' },
  { value: '$45K+', label: 'Annual Seed Grants', caption: 'Non-dilutive funding for student-initiated projects' },
];

export const LIVE_CAMPUS_STATUS = {
  activeNow: 4,
  eventsToday: 2,
  campusAtmosphere: 'High Energy',
  weather: '22°C Clear Dusk',
  nextMajorEvent: 'Synapse 2026 Robotics'
};

