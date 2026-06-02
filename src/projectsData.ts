export interface Project {
  slug: string;
  title: string;
  desc: string;
  image: string;
  tags: string[];
  role: string;
  period: string;
  highlights: string[];
  full: string[];
  live: string;
  github: string;
}

export const projects: Project[] = [
  {
    slug: 'lppm-it-del',
    title: 'LPPM Information System — Institut Teknologi Del',
    desc: 'A web-based information system for the Institute of Research and Community Service (LPPM) at IT Del, covering research management, community service data, and reporting — built with full system analysis and database design from scratch.',
    image: '/projects/images/lppm.png',
    tags: ['Laravel', 'PHP', 'MySQL', 'ERD', 'BPMN', 'System Analysis'],
    role: 'Project Manager · System Analyst · Backend Developer',
    period: '2025 – Present',
    highlights: [
      'Produced full system documentation: BPMN, use cases, ERD, CDM, PDM',
      'Designed complete database architecture and entity relationships',
      'Developed backend modules for admin and guest-facing interfaces',
      'Led team coordination and ensured deliverables met specifications',
    ],
    full: [
      'The LPPM Information System is a web-based platform developed for the Institute of Research and Community Service (Lembaga Penelitian dan Pengabdian kepada Masyarakat) at Institut Teknologi Del. The system centralizes the management of research activities, community service programs, and reporting processes that were previously handled manually.',
      'As Project Manager and System Analyst, I led the team from the requirements gathering phase through to implementation. I was responsible for producing the complete system documentation including BPMN process flows, use case diagrams, Entity Relationship Diagrams (ERD), Conceptual Data Models (CDM), and Physical Data Models (PDM).',
      'On the technical side, I designed the full database architecture — defining all entities, attributes, and relational logic — and developed the backend modules for both the admin dashboard and the guest-facing interface. This project is my most comprehensive end-to-end system development experience to date, combining analytical rigor with hands-on backend implementation.',
    ],
    live: '#',
    github: '#',
  },
  {
    slug: 'medflow',
    title: 'MedFlow — AI-Based Smart Angkot & Traffic Prediction System',
    desc: 'An AI-powered mobile application for predicting public transport (angkot) routes and traffic conditions in Medan City — winner of 2nd Place at Medan Coding Competition (MCC) 2026, North Sumatra level.',
    image: '/projects/images/medflow.png',
    tags: ['Mobile App', 'AI', 'Flutter', 'Traffic Prediction', 'MCC 2026'],
    role: 'Team Leader · System Analyst',
    period: 'May 2026',
    highlights: [
      'Led a 4-member team in a North Sumatra-level Mobile Apps Competition at UMSU',
      'Responsible for system analysis, role assignment, and solution planning',
      'Built AI-powered prediction system for Medan public transport & traffic',
      'Awarded 2nd Place — MCC 2026 Mobile Apps Competition',
    ],
    full: [
      'MedFlow is an AI-based mobile application designed to address the challenge of unpredictable public transport (angkot) schedules and traffic congestion in Medan City. The app provides real-time route predictions and traffic forecasting to help commuters plan their journeys more efficiently and sustainably.',
      'This project was developed for the Medan Coding Competition (MCC) 2026 — a Mobile Apps Competition held at Universitas Muhammadiyah Sumatera Utara (UMSU), open to university students across North Sumatra. Our team of four competed against other institutions with a focus on creating digital solutions for real urban mobility problems.',
      'As Team Leader and System Analyst, I was responsible for defining the overall system architecture, breaking down the feature scope, assigning roles to team members, and ensuring the project vision stayed aligned with the competition objectives. The team successfully brought home 2nd Place in the Mobile Apps category.',
    ],
    live: '#',
    github: '#',
  },
  {
    slug: 'tobareads',
    title: 'TobaReads — Mobile Application',
    desc: 'A mobile reading application themed around Lake Toba culture, developed as the 3rd Semester Capstone Project. The app promotes local literature and reading habits among students.',
    image: '/projects/images/tobareads.png',
    tags: ['Flutter', 'Dart', 'Mobile App', 'UI/UX'],
    role: 'Project Manager · System Analyst · Frontend Developer',
    period: '2024 – 2025',
    highlights: [
      'Designed system architecture and coordinated the development team',
      'Analyzed user requirements and documented the full system flow',
      'Contributed to the development of the application user interface',
    ],
    full: [
      'TobaReads is a mobile application developed as the 3rd Semester Capstone Project (Proyek Akhir 3). The app is themed around Lake Toba culture and aims to promote local literature and healthy reading habits among students and the surrounding community.',
      'As Project Manager and System Analyst, I led the team in planning the project scope, analyzing user requirements, and documenting the full system flow. I also took on a frontend development role for this project — unlike my other projects where I focus primarily on backend and database design — contributing directly to the user interface and overall user experience of the application.',
      'The project gave me a broader understanding of mobile UI development using Flutter, while also reinforcing my ability to manage a team through the full software development lifecycle from planning to delivery.',
    ],
    live: '#',
    github: '#',
  },
  {
    slug: 'uec-laguboti',
    title: 'Website — Universal English Course (UEC) Laguboti',
    desc: 'A fully functional website for an English language course institution in Laguboti, enabling course registration, schedule management, and student information — built as the 2nd Semester Capstone Project.',
    image: '/projects/images/uec.png',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'Bootstrap', 'Laravel'],
    role: 'Project Manager · System Analyst · Backend Developer',
    period: '2024',
    highlights: [
      'Led the project from requirements gathering to deployment',
      'Conducted system requirements analysis and designed the database structure',
      'Contributed to backend development of the full website',
    ],
    full: [
      'The UEC Laguboti website was developed as the 2nd Semester Capstone Project (Proyek Akhir 1) for Universal English Course, an English language institution based in Laguboti. The system provides a digital platform for the institution to manage course registrations, class schedules, and student information.',
      'As Project Manager and System Analyst, I led the team through the full project lifecycle — from gathering requirements and designing the system to implementation and final delivery. I conducted the system analysis, designed the database structure, and contributed directly to the backend development of the website.',
      'This was my first major capstone project and marked the beginning of my pattern of combining system analysis with backend development — planning the data architecture before writing any code. It laid the foundation for how I approach all subsequent projects.',
    ],
    live: '#',
    github: '#',
  },
  {
    slug: 'rumah-kreatif-toba',
    title: 'Redesign — Rumah Kreatif Toba Website',
    desc: 'A UI/UX redesign project for the Rumah Kreatif Toba website, focused on improving user experience, visual identity, and modern layout — designed entirely in Figma with new wireframes and interactive prototypes.',
    image: '/projects/images/rkt.png',
    tags: ['Figma', 'UI/UX', 'Wireframing', 'Prototyping', 'Redesign'],
    role: 'UI/UX Designer',
    period: '2024 – 2025',
    highlights: [
      'Redesigned the full website interface using Figma',
      'Analyzed user needs and created updated wireframes and interactive prototypes',
    ],
    full: [
      'This project involved a full UI/UX redesign of the Rumah Kreatif Toba website — a platform supporting the creative economy community around Lake Toba. The goal was to modernize the visual identity, improve the information hierarchy, and create a more intuitive user experience.',
      'Working individually, I used Figma to analyze the existing design, identify usability issues, and produce an updated set of wireframes and high-fidelity prototypes. The redesign covered the landing page, program information sections, and contact flows.',
      'Although UI/UX design is not my primary strength, this project gave me valuable insight into the design process and how thoughtful interface decisions directly impact user behavior — knowledge that has since informed how I think about backend data structure and feature scope in my other projects.',
    ],
    live: '#',
    github: '#',
  },
];