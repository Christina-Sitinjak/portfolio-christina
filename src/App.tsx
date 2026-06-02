import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code,
  Palette,
  Database,
  Globe,
  Moon,
  Sun,
  Download,
  ArrowDown
} from 'lucide-react';

import { projects } from './projectsData';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const organisations = [
  {
    id: 'A',
    title: 'BEM Institut Teknologi Del',
    role: 'Staff — Data & Information',
    dept: 'Departemen Pusat Dalam Kampus (DPDK)',
    period: 'May 2025 – Present',
    color: 'from-blue-500 to-indigo-600',
    lightBg: 'from-blue-50 to-indigo-50',
    darkBg: 'dark:from-blue-900/20 dark:to-indigo-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    accent: 'text-blue-600 dark:text-blue-400',
    desc: 'Managed and organized data and information for internal campus activities within the DPDK department, supporting transparency and smooth information flow across student body initiatives.',
    tags: ['Data Management', 'Student Government', 'Information'],
  },
  {
    id: 'B',
    title: 'Wakil Ketua — Program Cinta Almamater (PCA) 2025',
    role: 'Vice Chairperson',
    dept: 'Institut Teknologi Del',
    period: 'July 2025',
    color: 'from-violet-500 to-purple-600',
    lightBg: 'from-violet-50 to-purple-50',
    darkBg: 'dark:from-violet-900/20 dark:to-purple-900/20',
    border: 'border-violet-200 dark:border-violet-800',
    accent: 'text-violet-600 dark:text-violet-400',
    desc: 'Selected from 50 candidates across the Class of 2024 to co-lead the new student orientation program. Coordinated all program activities, managed logistics, and ensured a welcoming experience for incoming students.',
    tags: ['Leadership', 'Event Coordination', 'New Student Orientation'],
  },
  {
    id: 'C',
    title: 'Asisten Matrikulasi — Angkatan 2025',
    role: 'Matriculation Assistant',
    dept: 'Institut Teknologi Del · D3 Teknologi Informasi',
    period: 'July 2025',
    color: 'from-emerald-500 to-teal-500',
    lightBg: 'from-emerald-50 to-teal-50',
    darkBg: 'dark:from-emerald-900/20 dark:to-teal-900/20',
    border: 'border-emerald-200 dark:border-emerald-800',
    accent: 'text-emerald-600 dark:text-emerald-400',
    desc: 'Selected as 1 of 4 matriculation assistants for D3 Information Technology, chosen based on highest GPA in the Class of 2024. Guided and supported incoming students through academic orientation activities.',
    tags: ['Highest GPA Selection', 'Academic Mentoring', 'Orientation'],
  },
  {
    id: 'D',
    title: 'Kakak Asuh — Program Asrama 2025',
    role: 'Student Mentor',
    dept: 'Dormitory Program, Institut Teknologi Del',
    period: 'August 2025 – July 2026',
    color: 'from-rose-500 to-pink-500',
    lightBg: 'from-rose-50 to-pink-50',
    darkBg: 'dark:from-rose-900/20 dark:to-pink-900/20',
    border: 'border-rose-200 dark:border-rose-800',
    accent: 'text-rose-600 dark:text-rose-400',
    desc: 'Mentored and guided junior students from the Class of 2025 throughout one full academic year in the campus dormitory program, providing support in academic and day-to-day campus life.',
    tags: ['Mentoring', 'Dormitory Program', 'Student Welfare'],
  },
];

const researches = [
  {
    title: "Analysis and Mapping of Students' Competency in Number Theory",
    subtitle: 'with AI Scaffolding Support (ChatGPT): Visual Representation & Computational Thinking',
    role: 'Research Member',
    collab: 'Collaboration with Lecturer, Institut Teknologi Del',
    period: '2026',
    status: 'Funded · Upcoming — July 2026',
    statusColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    icon: '🧠',
    tags: ['AI', 'Computational Thinking', 'Education Research', 'Funded'],
  },
  {
    title: 'Pengenalan Coding dan Algoritma Sederhana untuk Siswa SMP',
    subtitle: 'Community service research for SMP Negeri 1 Laguboti — introducing coding and simple algorithms to junior high students.',
    role: 'Research Member',
    collab: 'Funded Community Service Research',
    period: '2026',
    status: 'Funded · Upcoming — July 2026',
    statusColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    icon: '💻',
    tags: ['Community Service', 'Coding Education', 'Funded'],
  },
  {
    title: 'Empowering Lake Toba Communities Through Computational Thinking',
    subtitle: 'A 2026 initiative to bring computational thinking skills to Lake Toba communities.',
    role: 'Research Member',
    collab: 'Funded Research Project',
    period: '2026',
    status: 'Funded · Upcoming — July 2026',
    statusColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    icon: '🌊',
    tags: ['Community Empowerment', 'Computational Thinking', 'Funded'],
  },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "System Analyst · Backend Developer";
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      return localStorage.getItem('theme') === 'dark';
    } catch {
      return false;
    }
  });

  // Typing animation
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Dark mode
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      try { localStorage.setItem('theme', 'dark'); } catch {}
    } else {
      document.documentElement.classList.remove('dark');
      try { localStorage.setItem('theme', 'light'); } catch {}
    }
  }, [isDark]);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'skills', 'projects', 'organisational-experience', 'research', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Org', id: 'organisational-experience' },
    { label: 'Research', id: 'research' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    {
      name: 'System Analysis',
      icon: Globe,
      items: [
        'System Analysis',
        'Use Case Diagram',
        'BPMN',
        'Flowchart',
        'ERD, CDM, PDM',
        'Requirement Specification',
      ]
    },
    {
      name: 'Backend Dev',
      icon: Database,
      items: [
        'PHP', 'Laravel',
        'Node.js',
        'MySQL', 'PostgreSQL',
        'REST API',
        'C Language', 'OOP'
      ]
    },
    {
      name: 'Frontend & Design',
      icon: Palette,
      items: [
        'HTML', 'CSS',
        'JavaScript', 'React.js',
        'Next.js', 'Flutter',
        'Tailwind', 'Bootstrap',
        'Figma (redesign)',
      ]
    },
    {
      name: 'Tools & Tech',
      icon: Code,
      items: [
        'Git', 'GitHub',
        'Enterprise Architect',
        'PowerDesigner',
        'Visual Paradigm', 'StarUML',
        'draw.io', 'Trello',
        'VS Code',
      ]
    },
    {
      name: 'Soft Skills',
      icon: Globe,
      items: [
        'Project Management',
        'Team Coordination',
        'Role Coordination',
        'Communication',
        'Analytical Thinking',
        'Documentation',
        'Leadership',
        'Organizational Involvement'
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20" />

      {/* ── NAVBAR ──────────────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
          <motion.a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Christina Sitinjak
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:scale-110 transition-transform"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsDark(!isDark)} className="hover:scale-110 transition-transform">
              {isDark ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:scale-110 transition-transform">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-8 py-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700"
          >
            <img src="tina.jpeg" alt="Christina Sitinjak" className="w-full h-full object-cover" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Christina Sitinjak!
            </span>
          </h1>

          <p className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mb-4 h-12">
            I'm a <span className="text-blue-600 dark:text-blue-400 font-bold">{typedText}</span>
            <span className="animate-pulse">|</span>
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            I combine system analysis, database design, and backend development to build
            structured, well-thought-out applications. Before writing a single line of code,
            I map out the system — use cases, BPMN, ERD — then bring it to life on the
            backend using Laravel, PHP, and Node.js.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.a
              href="/pdf/CV_Christina_Adelia_Sitinjak_EN.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold flex items-center gap-3 shadow-lg"
            >
              Download CV <Download size={20} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-full font-semibold hover:border-blue-600 transition-colors"
            >
              View My Work
            </motion.button>
          </div>

          <div className="flex justify-center gap-8 text-gray-600 dark:text-gray-400">
            <a href="https://github.com/Christina-Sitinjak" target="_blank" className="hover:text-blue-600 hover:scale-125 transition-all">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/christina-sitinjak-6b0782411" target="_blank" className="hover:text-blue-600 hover:scale-125 transition-all">
              <Linkedin size={28} />
            </a>
            <a href="mailto:sitinjakchristina959@gmail.com" className="hover:text-blue-600 hover:scale-125 transition-all">
              <Mail size={28} />
            </a>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <ArrowDown size={32} className="text-gray-400" />
        </motion.div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────── */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-white dark:bg-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border border-gray-200/40 dark:border-gray-700 shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl mb-4">
                  <img src="tina.jpeg" alt="Christina Sitinjak" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Christina Sitinjak
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">System Analyst • Backend Developer</p>

                <div className="flex gap-3 mb-5">
                  <a href="/pdf/CV_Christina_Adelia_Sitinjak_EN.pdf" download className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md hover:scale-105 transition-transform">
                    <Download size={16} /> Download CV
                  </a>
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <Mail size={14} /> Contact
                  </button>
                </div>

                <div className="w-full grid grid-cols-3 gap-3 mt-2">
                  <div className="p-2 rounded-lg bg-white/70 dark:bg-gray-800/60 border border-gray-100/40 dark:border-gray-700 text-center">
                    <div className="text-lg font-semibold">5+</div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/70 dark:bg-gray-800/60 border border-gray-100/40 dark:border-gray-700 text-center">
                    <div className="text-lg font-semibold">4th</div>
                    <div className="text-xs text-gray-500">Semester</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/70 dark:bg-gray-800/60 border border-gray-100/40 dark:border-gray-700 text-center">
                    <div className="text-lg font-semibold">3.62</div>
                    <div className="text-xs text-gray-500">GPA</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                A D3 Information Technology student at Institut Teknologi Del with a strong
                foundation in system analysis, database design, and backend development.
                Experienced in leading project teams, producing full system documentation
                (ERD, CDM, PDM, BPMN, use cases), and implementing backend logic.
                Runner-up at Medan Coding Competition (MCC) 2026 — North Sumatra level.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-gray-100/40 dark:border-gray-700">
                  <h4 className="font-semibold mb-2">What I do</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <li>• Analyze & design systems (ERD, BPMN, use cases)</li>
                    <li>• Build and structure backend APIs & databases</li>
                    <li>• Lead and coordinate development teams</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 border border-gray-100/40 dark:border-gray-700">
                  <h4 className="font-semibold mb-2">Strengths</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <li>• Structured thinking before coding</li>
                    <li>• Database architecture & relational design</li>
                    <li>• Cross-functional team coordination</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── SKILLS ──────────────────────────────────────────────── */}
      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Skills & Expertise</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {skills.slice(0, 4).map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.07, y: -8 }}
                  className="p-6 rounded-2xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-xl
                    shadow-[0_0_20px_rgba(0,0,0,0.08)] dark:shadow-[0_0_30px_rgba(0,0,0,0.4)]
                    border border-gray-200/50 dark:border-gray-700/60
                    hover:shadow-[0_8px_30px_rgba(59,130,246,0.25)] transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-blue-600 mb-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <h3 className="font-semibold text-lg mb-3">{skill.name}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex gap-2">
                        <span className="w-2 h-2 mt-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center">
            {(() => {
              const lastSkill = skills[4];
              const Icon = lastSkill.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -6 }}
                  className="w-full md:w-3/4 lg:w-1/2 p-8 rounded-2xl
                    bg-gradient-to-br from-gray-50 via-white to-gray-100
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                    border border-gray-200 dark:border-gray-700
                    shadow-[0_0_25px_rgba(0,0,0,0.08)]
                    hover:shadow-[0_12px_35px_rgba(147,51,234,0.25)]
                    transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-purple-500 mb-5 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)] mx-auto" />
                  <h3 className="font-semibold text-xl mb-6 text-center bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                    {lastSkill.name}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300 text-sm">
                    {lastSkill.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })()}
          </div>
        </div>
      </motion.section>

      {/* ── PROJECTS ────────────────────────────────────────────── */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 px-6 bg-white dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Featured Projects</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
              From system analysis and database design to backend implementation — projects built with structure and purpose.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="block group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
                >
                  {/* ── Square image 1:1 (sesuai 3375×3375) ── */}
                  <div className="relative w-full" style={{ aspectRatio: '1 / 1' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Role badge — muncul saat hover, di bawah */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <span className="inline-block text-xs font-medium text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        {project.role}
                      </span>
                    </div>

                    {/* Period badge — selalu terlihat di kanan atas */}
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-semibold text-white bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                        {project.period}
                      </span>
                    </div>
                  </div>

                  {/* ── Card Content ── */}
                  <div className="p-7">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                      {project.desc}
                    </p>

                    {/* Highlights — 2 baris pertama */}
                    <ul className="space-y-1.5 mb-5">
                      {project.highlights.slice(0, 2).map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-100 dark:border-blue-800 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:gap-3 transition-all duration-300">
                      <Globe size={15} />
                      View details
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── ORGANISATIONAL EXPERIENCE ───────────────────────────── */}
      <motion.section
        id="organisational-experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 px-6 bg-white dark:bg-gray-900 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800">
              Leadership & Involvement
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Organisational Experience</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
              Roles and responsibilities beyond the classroom — leadership, coordination, and community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {organisations.map((org, i) => (
              <motion.div
                key={org.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative rounded-2xl border ${org.border} bg-gradient-to-br ${org.lightBg} ${org.darkBg} p-6 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden`}
              >
                {/* Decorative circle */}
                <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${org.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />

                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${org.color} flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0`}>
                    {org.id}
                  </div>
                  <span className={`text-xs font-medium ${org.accent} bg-white/70 dark:bg-gray-800/60 px-3 py-1 rounded-full border ${org.border}`}>
                    {org.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 leading-snug">{org.title}</h3>
                <p className={`text-sm font-semibold ${org.accent} mb-0.5`}>{org.role}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{org.dept}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{org.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {org.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/80 dark:bg-gray-800/60 text-gray-600 dark:text-gray-300 border border-gray-200/60 dark:border-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── RESEARCH ────────────────────────────────────────────── */}
      <motion.section
        id="research"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 px-6 bg-gray-50 dark:bg-gray-800 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400 mb-3 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800">
              Academic Contributions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Research</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
              Research projects in collaboration with lecturers — all funded and scheduled for 2026.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {researches.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="flex gap-5 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/60 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 flex items-center justify-center text-2xl shadow-inner border border-purple-100 dark:border-purple-800">
                  {r.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug pr-2">
                      {r.title}
                    </h3>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${r.statusColor}`}>
                      {r.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2 leading-relaxed">
                    {r.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span className="font-semibold text-purple-600 dark:text-purple-400">{r.role}</span>
                    <span>·</span>
                    <span>{r.collab}</span>
                    <span>·</span>
                    <span>{r.period}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {r.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200/60 dark:border-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 max-w-4xl mx-auto flex items-start gap-3 p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800"
          >
            <span className="text-lg flex-shrink-0"></span>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              All 3 research projects are conducted in collaboration with lecturers at Institut Teknologi Del.
              All projects have received official funding. All are scheduled for implementation in{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">July 2026</span>.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ── EDUCATION ───────────────────────────────────────────── */}
      <motion.section
        id="education"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-white dark:bg-gray-900"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Education</h2>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 rounded-full" />

            <div className="space-y-12 md:space-y-16">
              <div className="flex items-start md:items-center md:justify-between">
                <div className="flex items-start md:w-1/2 md:pr-8">
                  <div className="z-10 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mr-6 shadow-lg flex-shrink-0">
                    <span className="text-sm font-semibold">1</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl shadow-sm w-full">
                    <h3 className="text-xl font-semibold">Institut Teknologi Del</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">D3 Information Technology • GPA 3.62 / 4.00</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Sitoluama, Kec. Laguboti, Toba, Sumatera Utara</p>
                  </div>
                </div>
                <div className="hidden md:flex md:flex-col md:items-center md:ml-8 md:w-1/2">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">August 2024 – Present</span>
                </div>
              </div>

              <div className="flex items-start md:items-center md:justify-between">
                <div className="flex items-start md:w-1/2 md:order-2 md:pl-8">
                  <div className="z-10 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center text-white ml-6 shadow-lg flex-shrink-0">
                    <span className="text-sm font-semibold">2</span>
                  </div>
                  <div className="bg-gradient-to-r from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 p-6 rounded-xl shadow-sm w-full">
                    <h3 className="text-xl font-semibold">SMAN 1 Laguboti</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">Senior High School • Science Major</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">JL. Sekolah No. 3 Laguboti</p>
                  </div>
                </div>
                <div className="hidden md:flex md:flex-col md:items-center md:mr-8 md:w-1/2 md:order-1">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">Jul 2021 – Apr 2024</span>
                </div>
              </div>
            </div>

            <div className="md:hidden mt-8 space-y-8">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold">Institut Teknologi Del</h4>
                    <p className="text-sm text-gray-500">D3 Information Technology • GPA 3.62 / 4.00</p>
                  </div>
                </div>
                <span className="text-sm text-blue-600 dark:text-blue-400">2024 – Present</span>
              </div>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center text-white shadow-lg flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold">SMAN 1 Laguboti</h4>
                    <p className="text-sm text-gray-500">Senior High School • Science Major</p>
                  </div>
                </div>
                <span className="text-sm text-blue-600 dark:text-blue-400">Jul 2020 – Apr 2023</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── CONTACT ─────────────────────────────────────────────── */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Let's Work Together</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Have an idea or project? Contact me by email or check my social media profiles below.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <motion.div whileHover={{ scale: 1.02 }} className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/40 dark:border-gray-700 shadow-sm">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:sitinjakchristina959@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    sitinjakchristina959@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/40 dark:border-gray-700 shadow-sm">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/christina-sitinjak-6b0782411" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline break-all">
                    linkedin.com/in/christina-sitinjak-6b0782411
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/40 dark:border-gray-700 shadow-sm">
                <div className="p-3 rounded-lg bg-gray-700 text-white">
                  <Github size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <a href="https://github.com/Christina-Sitinjak" target="_blank" className="text-gray-700 dark:text-gray-300 hover:underline break-all">
                    github.com/Christina-Sitinjak
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/40 dark:border-gray-700 shadow-sm">
                <div className="p-3 rounded-lg bg-gradient-to-br from-pink-500 to-red-400 text-white">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-700 dark:text-gray-300">Toba, Sumatera Utara, Indonesia</p>
                  <p className="text-sm text-gray-500">Open to remote work.</p>
                </div>
              </motion.div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <motion.a whileHover={{ scale: 1.15 }} href="https://github.com/Christina-Sitinjak" target="_blank" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800/60 shadow">
                <Github size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.15 }} href="https://www.linkedin.com/in/christina-sitinjak-6b0782411" target="_blank" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800/60 shadow">
                <Linkedin size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.15 }} href="mailto:sitinjakchristina959@gmail.com" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800/60 shadow">
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-white/60 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/40 border border-gray-200/40 dark:border-gray-700 shadow-lg flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-3">Find me on social</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Follow for updates, project previews, and occasional tech content.</p>

              <div className="grid grid-cols-1 gap-4">
                <a href="https://www.instagram.com/christina.stjk/" target="_blank" className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/60 hover:scale-105 transition-transform">
                  <div className="p-2 rounded-full bg-pink-500 text-white">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zm6.75-3a1.25 1.25 0 11-1.25-1.25 1.25 1.25 0 011.25 1.25zM12 10.5A1.5 1.5 0 1010.5 12 1.5 1.5 0 0012 10.5z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Instagram</div>
                    <div className="text-sm text-gray-500">@christina.stjk</div>
                  </div>
                  <div className="ml-auto text-sm text-pink-500">Follow</div>
                </a>

                <a href="/pdf/CV_Christina_Adelia_Sitinjak_EN.pdf" download className="flex items-center gap-3 justify-center p-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow hover:opacity-95 transition-opacity">
                  <Download size={16} /> Download CV
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a href="https://open.spotify.com/user/31vkqqhkgsozt2ect3lhq73vzma4?si=rNmFgoMORAuW_w1us2GLNg" target="_blank" className="flex-1 p-3 rounded-lg bg-green-500 text-white text-center font-medium hover:scale-105 transition-transform">
                Spotify
              </a>
              <a href="https://www.instagram.com/christina.stjk/" target="_blank" className="flex-1 p-3 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 text-white text-center font-medium hover:scale-105 transition-transform">
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="relative bg-gray-900 dark:bg-black text-gray-300 pt-16 pb-10 mt-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-[0_0_20px_rgba(99,102,241,0.7)]" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-6 mb-10">
            <motion.a whileHover={{ scale: 1.25 }} className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors shadow-lg" href="https://github.com/Christina-Sitinjak" target="_blank">
              <Github size={22} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.25 }} className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors shadow-lg" href="https://www.linkedin.com/in/christina-sitinjak-6b0782411" target="_blank">
              <Linkedin size={22} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.25 }} className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors shadow-lg" href="mailto:sitinjakchristina959@gmail.com">
              <Mail size={22} />
            </motion.a>
          </div>

          <h3 className="text-center text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Christina Sitinjak
          </h3>
          <p className="text-center text-gray-400 mt-2">
            Crafting structured digital solutions with precision and analytical thinking
          </p>

          <div className="w-full h-px bg-gray-700 my-8"></div>

          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Christina Adelia Sitinjak. Built with passion, caffeine, and stubborn persistence.
          </p>
        </div>

        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 blur-3xl rounded-full"></div>
      </footer>

    </div>
  );
}
