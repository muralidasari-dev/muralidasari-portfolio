import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ArrowUp,
  Download,
  ExternalLink,
  Zap,
  Layers,
  Cpu,
  Code,
  Database,
  BookOpen,
  Award,
  LucideIcon, 
} from "lucide-react";

/**
 * App.tsx — Modern Portfolio Landing Page (TypeScript Final Fix)
 * * ALL FIXES APPLIED:
 * 1. Framer Motion Fix: Corrected easing strings to cubic-bezier arrays (e.g., [0.42, 0, 0.58, 1])
 * to satisfy TypeScript's strict Variants typing (Error 2322).
 * 2. Layout: Optimal responsive layout and clean alignment confirmed.
 */

// --------------------- TYPE DEFINITIONS ---------------------

interface Project {
  title: string;
  description: string;
  impact: string;
  stack: string[];
  github: string;
  demo: string;
  date: string;
  tagline: string; 
}

interface Skill {
  name: string;
  category: string;
  level: number;
}

interface ExpertiseItem {
  title: string;
  icon: 'cpu' | 'layers' | 'code'; 
  bullets: string[];
  recruiterNotes: string;
}

interface EducationItem {
  degree: string;
  school: string;
  notes: string;
  duration: string;
}

interface CertificationItem {
  org: string;
  title: string;
}

interface MuraliProfile {
  name: string;
  title: string;
  shortTitle: string;
  tagline: string;
  bio: string;
  github: string;
  linkedin: string;
  email: string;
  resume: string;
  heroImage: string;
  location: string;
  availability: string;
  metrics: {
    projects: number;
    experienceYears: number;
    happyClients: number;
  };
  expertise: ExpertiseItem[];
  skills: Skill[];
  projects: Project[];
  education: EducationItem[];
  certifications: CertificationItem[];
}

// --------------------- Profile Data ---------------------
const MURALI: MuraliProfile = {
  name: "Murali Dasari",
  title: "AI DS · Cloud Computing · Web Technologies", 
  shortTitle: "AI DS · Cloud · Web",
  tagline: "Fresher passionate about building production-ready, data-driven applications and scalable cloud architectures that deliver measurable impact.",
  bio:
    "I specialize in building high-performance, end-to-end AI/Data Science pipelines and scalable cloud-native web applications. My focus is on delivering clean, rigorously tested code and cost-efficient architecture that effectively translates raw data and models into robust, user-facing software products. As a dedicated fresher, I bring strong foundations in Python, deep expertise in cloud services (AWS/GCP), and modern full-stack development (React/Next.js) ready to contribute measurable value immediately. Outside of tech, I enjoy exploring data-driven storytelling, productivity tools, and open-source projects.",
  github: "https://github.com/muralidasari-dev",
  linkedin: "https://linkedin.com/in/muralidasari-",
  email: "muralidasari.dev@gmail.com",
  resume: "/Murali_Dasari_Resume.pdf",
  heroImage: "/murali_hero.jpg", 
  location: "India",
  availability: "Open to work · Intern / Entry-level roles",
  metrics: {
    projects: 4,
    experienceYears: 0,
    happyClients: 0,
  },
  expertise: [
    {
      title: "AI & Data Science", 
      icon: "cpu",
      bullets: [
        "Data preprocessing, feature engineering and exploratory analysis.",
        "Model prototyping and evaluation workflows (not black-box).",
        "Presentation-ready dashboards and visualizations for stakeholders.",
      ],
      recruiterNotes:
        "Strong foundation in Python, Pandas, NumPy; familiar with model evaluation and reproducible experiments.",
    },
    {
      title: "Cloud Computing",
      icon: "layers",
      bullets: [
        "Built and deployed serverless apps and containerized services on AWS/GCP.",
        "CI/CD pipelines, Infrastructure as Code basics (Terraform).",
        "Focus on cost-aware, scalable architectures for production readiness.",
      ],
      recruiterNotes: "Comfortable with Docker, basic Terraform, Cloud Run / Lambda patterns.",
    },
    {
      title: "Full-Stack Web Development",
      icon: "code",
      bullets: [
        "Responsive front-ends with React/Next.js and clean UI/UX principles.",
        "Backend REST APIs with Node/Express and database integration (MongoDB).",
        "Performance-minded development and accessibility awareness.",
      ],
      recruiterNotes: "Hands-on with React, Next.js, Node, and modern CSS/Tailwind patterns.",
    },
  ],
  skills: [
    { name: "Python", category: "Programming", level: 90 },
    { name: "JavaScript", category: "Programming", level: 85 },
    { name: "SQL", category: "Programming", level: 75 },
    { name: "Version Control (Git/GitHub)", category: "DevOps", level: 80 },
    { name: "CI/CD (GitHub Actions)", category: "DevOps", level: 60 },
    { name: "React / Next.js", category: "Web Frameworks", level: 80 },
    { name: "Node.js / Express", category: "Backend", level: 70 },
    { name: "AWS (S3, Lambda)", category: "Cloud", level: 65 },
    { name: "GCP (Cloud Run, Functions)", category: "Cloud", level: 60 },
    { name: "Pandas / NumPy", category: "Data Science", level: 85 },
    { name: "Docker", category: "DevOps", level: 70 },
    { name: "MongoDB", category: "Database", level: 75 },
    { name: "Terraform", category: "DevOps", level: 50 },
    { name: "D3.js", category: "Visualization", level: 60 },
  ],
  projects: [
    {
      title: "Real-time Fraud Detection API",
      tagline: "Low-latency ML serving on GCP Cloud Functions.", 
      description:
        "Deployed a lightweight ML model (Python/Scikit-learn) as a serverless API endpoint (GCP Cloud Functions) for transaction analysis.",
      impact: "Simulated low-latency, scalable serving of AI model in a production environment.",
      stack: ["Python", "Scikit-learn", "GCP Cloud Functions", "Docker"],
      github: "https://github.com/muralidasari-dev/fraud-api",
      demo: "#",
      date: "2024-05",
    },
    {
      title: "Full-Stack Portfolio CMS",
      tagline: "Secure CRUD operations via Next.js and MongoDB.",
      description:
        "A personal content management system for portfolio updates built with Next.js and a simple MongoDB backend.",
      impact: "Demonstrates full-stack capability, secure CRUD operations, and modern frontend practices.",
      stack: ["Next.js", "React", "MongoDB", "TailwindCSS"],
      github: "https://github.com/muralidasari-dev/portfolio-cms",
      demo: "#",
      date: "2024-03",
    },
    {
      title: "AI DS Web Dashboard",
      tagline: "Interactive analytics platform for real-time model monitoring.",
      description:
        "Interactive analytics platform built with React and D3 to visualize model outputs and KPIs in real time.",
      impact: "Helped interpret dataset drift and model behaviour during evaluation.",
      stack: ["React", "D3.js", "MongoDB", "GCP"],
      github: "https://github.com/muralidasari-dev/viz-dashboard",
      demo: "#",
      date: "2024-01",
    },
    {
      title: "Serverless Marketplace (Student Project)",
      tagline: "Cost-effective serverless operations using AWS Lambda/DynamoDB.",
      description: "Next.js + AWS Lambda storefront with dynamic pricing and simple admin panel.",
      impact: "Learnings: cost-effective serverless ops and CI/CD basics.",
      stack: ["Next.js", "AWS Lambda", "DynamoDB"],
      github: "https://github.com/muralidasari-dev/serverless-webapp",
      demo: "#",
      date: "2023-08",
    },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      school: "Avanthi Institute of Engineering and Technology",
      duration: "2022–2026 (Expected)",
      notes: "Major: Computer Science | Coursework: Data Structures, DBMS, Cloud Fundamentals",
    },
  ],
  certifications: [
    { org: "IBM", title: "Python for Data Science, AI, and Development" },
    { org: "Andrew Ng / Coursera", title: "Machine Learning" },
    { org: "Google Cloud", title: "Cloud Digital Leader (Training)" },
    { org: "AWS Academy", title: "Introduction to Cloud Foundations" },
    { org: "DeepLearning.AI", title: "AI for Everyone" },
  ],
};

// --------------------- Motion Variants (FIXED Easing) ---------------------
const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Variants for the animation shown in the screenshot (name reveal)
const introTextVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    // FIX 1: Replaced "easeOut" string with cubic-bezier array
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } },
};
const introTitleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    // FIX 2: Replaced "easeOut" string with cubic-bezier array
    show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6, ease: [0.42, 0, 0.58, 1] } },
};
const staggerContainer = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };


// --------------------- Utility UI pieces ---------------------
interface IconButtonProps {
  href: string;
  children: React.ReactNode;
  label: string;
}
const IconButton: React.FC<IconButtonProps> = ({ href, children, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white shadow-sm hover:shadow-md transition-all duration-200"
  >
    {children}
  </a>
);

interface SectionTitleProps {
  pre?: string;
  title: string;
  subtitle?: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({ pre, title, subtitle }) => (
  <div className="mb-8">
    {pre && <div className="text-sm text-amber-500 font-semibold mb-1 uppercase tracking-wider">{pre}</div>}
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 leading-tight">{title}</h2>
    {subtitle && <p className="text-gray-700 max-w-3xl text-lg">{subtitle}</p>}
  </div>
);

// --------------------- Background: Soft Particle + gradient ---------------------
function BrightParticleBg() {
  const ref = useRef<HTMLCanvasElement | null>(null); 
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d"); 
    if (!ctx) return; 

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    
    interface Particle {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      hue: number;
      a: number;
    }
    
    let particles: Particle[] = [];
    const count = Math.max(20, Math.floor((width * height) / 180000));

    function rand(min: number, max: number): number { 
      return Math.random() * (max - min) + min;
    }

    const initializeParticles = (w: number, h: number) => {
        particles = [];
        for (let i = 0; i < count; i++) {
          particles.push({
            x: rand(0, w),
            y: rand(0, h),
            r: rand(30, 100),
            vx: rand(-0.06, 0.06),
            vy: rand(-0.02, 0.02),
            hue: rand(30, 50),
            a: rand(0.03, 0.12),
          });
        }
    }

    initializeParticles(width, height);

    let animationId: number = 0; 
    function draw() {
      if (!ctx) return; 

      ctx.clearRect(0, 0, width, height);
      // FIX: Warmer, professional off-white gradient background
      const g = ctx.createLinearGradient(0, 0, width, height);
      g.addColorStop(0, "#f9f6f1"); // Very light cream/off-white
      g.addColorStop(1, "#fefcfb"); // Near white
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x > width + p.r) p.x = -p.r;
        if (p.x < -p.r) p.x = width + p.r;
        if (p.y > height + p.r) p.y = -p.r;
        if (p.y < -p.r) p.y = height + p.r;

        const grad = ctx.createRadialGradient(p.x, p.y, p.r * 0.1, p.x, p.y, p.r);
        grad.addColorStop(0, `hsla(${p.hue},80%,60%,${p.a})`);
        grad.addColorStop(1, `hsla(${p.hue + 30},70%,95%,0)`);
        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();
    const onResize = () => {
      if (!canvas) return; 

      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initializeParticles(width, height);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
    };
  }, []); 

  return <canvas ref={ref} className="fixed inset-0 -z-20 w-full h-full pointer-events-none" aria-hidden />;
}

// --------------------- Intro Overlay (Dynamic Reveal) ---------------------
interface IntroOverlayProps {
  onFinish: () => void;
}
const IntroOverlay: React.FC<IntroOverlayProps> = ({ onFinish }) => {
  useEffect(() => {
    // Total animation time before fade out: 2.2s
    const t = setTimeout(() => onFinish && onFinish(), 2500); // Increased duration slightly
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    // Background is white, matching the theme, but uses Framer Motion for fade out
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.1, duration: 0.8 }} // Fade out after 2.1s
      className="fixed inset-0 z-50 flex items-center justify-center bg-white" // Background is white
    >
      <motion.div initial="hidden" animate="show" className="flex flex-col items-center">
        
        <motion.h1 
          variants={introTextVariants}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-4" 
          style={{ fontFamily: "Poppins, Inter, sans-serif" }}
        >
          {MURALI.name}
        </motion.h1>
        <motion.p 
          variants={introTitleVariants}
          className="text-lg md:text-xl text-amber-600 font-medium"
        >
          {MURALI.title}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

// --------------------- Header / Nav ---------------------
interface HeaderProps {
  active: string;
}
const Header: React.FC<HeaderProps> = ({ active }) => {
  const [open, setOpen] = useState(false);
  
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "expertise", label: "Expertise" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "academic", label: "Academics" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-4 z-40">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-500/90 flex items-center justify-center text-white font-bold text-lg shadow-inner">
            <div className="text-sm font-bold text-white">MD</div> {/* Reverted to MD text logo */}
          </div>
          <div className="text-gray-900 hidden sm:block">
            <div className="font-bold text-lg">{MURALI.name.split(' ')[0]}</div>
            <div className="text-xs text-amber-600 font-medium">{MURALI.shortTitle}</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={`text-sm uppercase tracking-wider font-semibold hover:text-amber-500 transition-colors duration-200 ${active === link.id ? "text-amber-600 border-b-2 border-amber-500 pb-1" : "text-gray-700"}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={MURALI.resume} className="hidden lg:inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg font-semibold shadow-md hover:bg-amber-600 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
            <Download className="w-4 h-4" /> Download CV
          </a>

          <button className="md:hidden p-2 rounded-md bg-white shadow-lg border border-gray-100" onClick={() => setOpen((v) => !v)} aria-label="open menu">
            {open ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden mt-3 px-6">
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)} className={`block text-gray-800 uppercase py-2 font-medium border-b border-gray-100 last:border-b-0 ${active === link.id ? "text-amber-600" : "hover:text-amber-500"}`}>
                    {link.label}
                  </a>
                ))}
                <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
                  <IconButton href={MURALI.github} label="GitHub">
                    <Github className="w-5 h-5" />
                  </IconButton>
                  <IconButton href={MURALI.linkedin} label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </IconButton>
                  <a href={MURALI.resume} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-500 text-white font-semibold shadow-md" target="_blank" rel="noopener noreferrer">
                     Resume
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// --------------------- Hero ---------------------
function Hero() {
  const mailtoLink = `mailto:${MURALI.email}?subject=Collaboration/Hiring Inquiry for ${MURALI.name}`;

  return (
    // FIX 1: Reduced vertical padding slightly for more density
    <section id="home" className="flex items-center py-20 md:py-24">
      {/* FIX 2: Reduced gap to gap-4 for tighter grouping. Applied 60/40 custom grid. */}
      <div className="container mx-auto px-6 grid lg:grid-cols-[3fr_2fr] gap-4 items-center">
        <motion.div initial="hidden" animate="show" variants={staggerContainer}>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900" style={{ fontFamily: "Poppins, Inter, sans-serif" }}>
            {MURALI.name}
            {/* FIX 3: Reverted font size to md:text-4xl, allowing natural wrap and preventing overlap */}
            <span className="block text-3xl md:text-4xl mt-3 text-amber-600 font-semibold">{MURALI.title}</span>
          </motion.h1>
          
          {/* Text fields now fill 100% of the allocated 60% grid column */}
          <motion.p variants={fadeInUp} className="text-amber-700 font-semibold italic mt-4 text-xl p-3 bg-amber-50 rounded-lg border-l-4 border-amber-400">
            {MURALI.tagline}
          </motion.p>
          
          {/* FIX 5: Applied text-justify to the main bio text */}
          <motion.p variants={fadeInUp} className="text-gray-700 mt-6 text-lg text-justify">
            {MURALI.bio}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4 items-center">
            {/* FIX 6: Updated 'Hire Me' button to use mailto link with pre-filled subject */}
            <a href={mailtoLink} className="inline-flex items-center gap-3 bg-amber-500 px-6 py-3 rounded-lg text-white font-bold shadow-xl shadow-amber-200 hover:bg-amber-600 transition duration-300 transform hover:scale-[1.03]">
              Hire Me / Collaborate
              <Zap className="w-5 h-5" />
            </a>

            <a href={MURALI.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-gray-300 px-5 py-3 rounded-lg text-gray-800 font-medium hover:bg-gray-100 transition duration-300">
              <Download className="w-4 h-4" /> View Resume
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 flex items-center gap-6">
            <div className="flex gap-4">
              <div className="p-4 rounded-lg bg-white border border-gray-100 shadow-md">
                <div className="text-sm text-gray-600">Key Projects</div>
                <div className="text-2xl font-bold text-gray-900">{MURALI.metrics.projects}+</div>
              </div>
              <div className="p-4 rounded-lg bg-white border border-gray-100 shadow-md">
                <div className="text-sm text-gray-600">Open For</div>
                <div className="text-2xl font-bold text-gray-900">{MURALI.availability.split('·')[0]}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* IMAGE COLUMN (40% width) */}
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="flex justify-center lg:justify-end">
          {/* Constrained height to stop the image from stretching the entire section */}
          <div className="relative w-full max-w-xs lg:max-w-md lg:h-[480px] rounded-3xl overflow-hidden border-2 border-white shadow-xl bg-white transition-all duration-500 hover:shadow-amber-100">
            <img src={MURALI.heroImage} alt={MURALI.name} className="object-cover w-full h-full" />
            <div className="absolute bottom-4 left-4 bg-amber-500/90 px-3 py-1 rounded-full text-white font-medium text-sm shadow-md">
              {MURALI.availability}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --------------------- About ---------------------
function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle pre="About Me" title="A Fresher Focused on Production-Ready Tech" subtitle="I build practical, data-driven solutions and scalable web applications, always aiming for clean architecture and measurable business impact." />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 text-amber-600">
                <BookOpen className="w-6 h-6" /> What I bring to the table
              </h3>
              <ul className="list-inside list-disc text-gray-700 space-y-3 text-lg">
                <li>End-to-end project capability: from data ingestion and cleaning to model deployment and front-end integration.</li>
                <li>Cloud-first mindset: designing for scalability, resilience, and cost-awareness on AWS/GCP.</li>
                <li>Full-Stack Agility: The ability to move seamlessly between backend logic, data processing, and user-facing web layers (React/Next.js).</li>
                <li>Strong software fundamentals: committed to writing clean, maintainable, and tested code.</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-amber-50 border border-amber-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Highlights (Student / Fresher)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-lg bg-white border border-amber-200">
                  <div className="text-xs text-gray-600 uppercase font-semibold">Project Focus</div>
                  <div className="text-xl font-bold text-amber-700 mt-1">AI DS & Web Full-Stack</div>
                  <div className="text-sm text-gray-700 mt-2">Built 4 key projects to demonstrate full lifecycle from model to live web deployment.</div>
                </div>
                <div className="p-5 rounded-lg bg-white border border-amber-200">
                  <div className="text-xs text-gray-600 uppercase font-semibold">Cloud Exposure</div>
                  <div className="text-xl font-bold text-amber-700 mt-1">AWS / GCP Serverless</div>
                  <div className="text-sm text-gray-700 mt-2">Hands-on with Lambda/Cloud Functions, Docker, and IaC (Terraform basics) for deployment.</div>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-amber-500 font-semibold">Availability</div>
                  <div className="text-gray-900 font-bold mt-1 text-lg">{MURALI.availability}</div>
                </div>
                <div>
                  <div className="text-sm text-amber-500 font-semibold">Email</div>
                  <div className="text-gray-900 font-medium mt-1 break-all">{MURALI.email}</div>
                </div>
                <div className="mt-4 flex gap-3 pt-4 border-t border-gray-100">
                  <IconButton href={MURALI.github} label="GitHub">
                    <Github className="w-5 h-5" />
                  </IconButton>
                  <IconButton href={MURALI.linkedin} label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </IconButton>
                  <a href={`mailto:${MURALI.email}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white shadow-sm hover:shadow-md text-gray-700" aria-label="Mail">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

// --------------------- Expertise ---------------------
function Expertise() {
  const iconMap: { [key in ExpertiseItem['icon']]: LucideIcon } = {
    cpu: Cpu,
    layers: Layers,
    code: Code,
  };

  return (
    <section id="expertise" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-6">
        <SectionTitle pre="Expertise" title="Practical, Production-Minded Specializations" subtitle="Focused skill sets built around delivering robust, scalable solutions in key technology domains." />

        <motion.div initial="hidden" whileInView="show" variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
          {MURALI.expertise.map((e) => {
            const IconComponent = iconMap[e.icon];
            return (
              <motion.div key={e.title} variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl transition-transform duration-300 hover:shadow-amber-100 hover:scale-[1.01]">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-xl bg-amber-100 text-amber-600 flex-shrink-0">
                    {IconComponent && <IconComponent className="w-7 h-7" />}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{e.title}</h4> 
                  </div>
                </div>

                <p className="text-gray-600 mt-4 italic text-sm border-l-2 border-amber-300 pl-3">Recruiter Note: {e.recruiterNotes}</p>
                
                <ul className="mt-6 text-gray-700 space-y-3 text-base">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-1 text-amber-500 font-extrabold text-xl">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// --------------------- Skills ---------------------
function Skills() {
  const coreLanguages = MURALI.skills.filter((s) => s.category === "Programming").sort((a, b) => b.level - a.level);
  const cloudDataTools = MURALI.skills.filter((s) => ["Cloud", "Data Science", "DevOps"].includes(s.category)).sort((a, b) => b.level - a.level).slice(0, 6);
  const webStack = MURALI.skills.filter((s) => ["Web Frameworks", "Backend", "Database", "Visualization"].includes(s.category)).sort((a, b) => b.name.localeCompare(a.name));

  const mongoDbSkill = MURALI.skills.find(s => s.name === 'MongoDB');


  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle pre="Skills" title="Technical Toolkit: From Data to Deployment" subtitle="Proficient in the modern stack for AI/DS, Cloud Infrastructure, and Full-Stack web development." />

        <motion.div initial="hidden" whileInView="show" variants={staggerContainer} className="grid lg:grid-cols-3 gap-8">
          
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
            <h4 className="text-2xl text-gray-900 font-bold mb-6">Core Programming & Databases</h4>
            <div className="space-y-6">
              {coreLanguages.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
              {mongoDbSkill && (
                <SkillBar name="MongoDB / SQL" level={mongoDbSkill.level} />
              )}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
            <h4 className="text-2xl text-gray-900 font-bold mb-6">Cloud, Data Science & DevOps</h4>
            <div className="grid gap-6">
              {cloudDataTools.map((s) => (
                <div key={s.name} className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-amber-200/50 text-amber-700">
                      {(s.category === "Cloud" || s.name.includes("AWS") || s.name.includes("GCP")) && <Layers className="w-5 h-5" />}
                      {(s.category === "Data Science" || s.name.includes("Pandas")) && <Database className="w-5 h-5" />}
                      {(s.category === "DevOps" || s.name.includes("Docker")) && <Code className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="text-gray-900 font-semibold">{s.name}</div>
                      <div className="text-xs text-gray-600">{s.category}</div>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-amber-600">{s.level}%</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
            <h4 className="text-2xl text-gray-900 font-bold mb-6">Web & Full Stack Ecosystem</h4>
            <div className="flex flex-wrap gap-3">
              {webStack.map((s) => (
                <div key={s.name} className="px-4 py-2 bg-amber-100 rounded-full border border-amber-200 text-sm font-medium text-amber-700 shadow-sm transition-all duration-200 hover:bg-amber-200">
                  {s.name}
                </div>
              ))}
              <div className="px-4 py-2 bg-gray-100 rounded-full border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
                  TailwindCSS
              </div>
            </div>
            <p className="text-gray-700 mt-6 text-sm italic border-t pt-4">I prioritize code quality and clear documentation in all my projects, available on GitHub.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

interface SkillBarProps {
  name: string;
  level: number;
}
const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-100 flex-shrink-0">
            <div className="text-sm font-bold text-amber-700">{name.split(' ')[0][0]}</div>
          </div>
          <div className="flex-grow">
            <div className="text-gray-900 font-semibold">{name}</div>
            <div className="text-xs text-gray-600">Proficiency</div>
          </div>
        </div>
        <div className="text-sm font-bold text-gray-700 ml-4">{level}%</div>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} whileInView={{ width: `${level}%` }} transition={{ duration: 1.2, delay: 0.2 }} className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500" />
      </div>
    </div>
  );
}

// --------------------- Projects ---------------------
function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-6">
        <SectionTitle pre="Work" title="Selected Projects & Case Studies" subtitle={`A curated list of ${MURALI.metrics.projects} key projects demonstrating AI DS pipeline development and scalable web architecture.`} />

        <motion.div initial="hidden" whileInView="show" variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
          {MURALI.projects.map((p) => (
            <motion.article key={p.title} variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl transition-transform duration-300 hover:scale-[1.01] hover:shadow-amber-100">
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-gray-900 font-bold text-2xl pr-4">{p.title}</h3>
                  <div className="text-sm text-gray-500 flex-shrink-0">{p.date}</div>
                </div>
                
                {/* Displaying Project Tagline */}
                <p className="text-amber-700 text-sm font-medium mb-3 italic">{p.tagline}</p>


                <p className="text-gray-700 text-base">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">{s}</span>
                  ))}
                </div>

                <div className="mt-6 text-base text-gray-800 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <strong className="text-amber-600">Impact:</strong> <span className="ml-1">{p.impact}</span>
                </div>

                <div className="mt-6 flex gap-3 items-center pt-4 border-t border-gray-100">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow">
                    <Github className="w-5 h-5" /> Code
                  </a>

                  <a href={p.demo} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-100 transition">
                    <ExternalLink className="w-5 h-5" /> Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
            <a href={MURALI.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gray-800 px-6 py-3 rounded-lg text-white font-semibold shadow-lg hover:bg-gray-700 transition">
                <Github className="w-5 h-5" /> See All Projects on GitHub
            </a>
        </div>
      </div>
    </section>
  );
}

// --------------------- Academic Background (Combined) ---------------------
function AcademicBackground() {
  return (
    <section id="academic" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle pre="Academics & Certifications" title="Foundations in CSE, AI/DS, and Cloud" subtitle="My formal education and verified industry certifications ensuring a strong technical base." />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Block */}
          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg">
            <h3 className="text-2xl font-bold text-amber-600 mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6" /> Formal Education
            </h3>
            {MURALI.education.map((e) => (
              <div key={e.school} className="p-5 rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                <div className="text-sm font-semibold">{e.degree}</div> {/* Added font-semibold */}
                
                {/* FIX 7: Combined school and duration onto one line */}
                <div className="text-sm text-gray-700 mt-1">{e.school} ({e.duration})</div> 
                
                {/* FIX 8: Reformatted notes into a clean list below */}
                <div className="text-xs text-gray-600 mt-2">{e.notes}</div>
              </div>
            ))}
          </div>

          {/* Certifications Block */}
          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg">
            <h3 className="text-2xl font-bold text-amber-600 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6" /> Verified Certifications
            </h3>
            {/* The certification mapping loop is correct below */}
            <div className="grid sm:grid-cols-2 gap-4">
              {MURALI.certifications.map((c) => (
                <div key={c.title} className="bg-amber-50 p-4 rounded-xl border border-amber-100 shadow-sm transition-transform duration-200 hover:scale-[1.03]">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs text-gray-600 font-semibold">{c.org}</div>
                      <div className="text-base font-bold text-gray-900 mt-1 leading-snug">{c.title}</div>
                    </div>
                    <div className="text-amber-500 font-extrabold text-2xl flex-shrink-0 ml-3">✓</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-6 text-sm italic">These credentials validate my practical skills in key industry domains.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


// --------------------- Contact ---------------------
interface ContactFormState {
  name: string;
  replyto: string; 
  message: string;
}

// Formspree ID for submission
const FORMSPREE_ID = "xvgwjrzg";
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

function Contact() {
  const [form, setForm] = useState<ContactFormState>({ name: "", replyto: "", message: "" });
  const [status, setStatus] = useState<'sending' | 'sent' | 'error' | null>(null); 

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Map the name attribute to the corresponding state property
    setForm((f) => ({ 
      ...f, 
      [name === 'email' ? 'replyto' : name]: value 
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
        const response = await fetch(FORMSPREE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                name: form.name,
                _replyto: form.replyto, // Formspree standard field for reply email
                message: form.message,
                _context: "Sent from Murali Dasari Portfolio Contact Form"
            }),
        });

        if (response.ok) {
            setStatus("sent");
            setForm({ name: "", replyto: "", message: "" });
        } else {
            setStatus("error");
            console.error("Formspree submission failed with status:", response.status);
        }
    } catch (error) {
        setStatus("error");
        console.error("Network error during form submission:", error);
    } finally {
        setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle pre="Contact" title="Let's build something impactful together" subtitle="If you're hiring for AI DS, Cloud, or Web roles, reach out—I'm eager to learn, contribute, and demonstrate immediate value." />

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 border-b pb-3 text-amber-600">Get in Touch Directly 📧</h3> 
            
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-amber-50 border border-amber-100">
                <div className="text-sm text-gray-600">Email</div>
                <a href={`mailto:${MURALI.email}`} className="font-bold text-gray-900 text-lg hover:text-amber-500 transition">{MURALI.email}</a>
              </div>

              <div className="p-4 rounded-lg bg-amber-50 border border-amber-100">
                <div className="text-sm text-gray-600">Location</div>
                <div className="font-bold text-gray-900 text-lg">{MURALI.location}</div>
              </div>

              <div className="p-4 rounded-lg bg-amber-50 border border-amber-100">
                <div className="text-sm text-gray-600">Availability</div>
                <div className="font-bold text-gray-900 text-lg">{MURALI.availability}</div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-gray-700 mb-4">Connect with me on social platforms:</p>
                <div className="flex gap-4">
                  <IconButton href={MURALI.github} label="GitHub">
                    <Github className="w-5 h-5" />
                  </IconButton>
                  <IconButton href={MURALI.linkedin} label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </IconButton>
                  <a href={MURALI.resume} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-amber-500 text-white font-semibold hover:bg-amber-600 transition" target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5" /> Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">Send a Message 💬</h3>
            <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-700 font-medium mb-1">Name</label>
                  <input name="name" value={form.name} onChange={onChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition" />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 font-medium mb-1">Email</label>
                  {/* FIX 2: name="email" binds to state, value={form.replyto} holds the value */}
                  <input name="email" value={form.replyto} onChange={onChange} required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition" />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 font-medium mb-1">Message (Tell me about the role!)</label>
                  <textarea name="message" value={form.message} onChange={onChange} required rows={6} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition" /> 
                </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <button type="submit" disabled={status === "sending" || status === "sent"} className={`inline-flex items-center gap-3 px-6 py-3 rounded-lg text-white font-bold transition duration-300 ${status === "sending" ? "bg-amber-400 opacity-70" : status === "sent" ? "bg-green-500" : status === "error" ? "bg-red-500" : "bg-amber-500 hover:bg-amber-600 shadow-md"}`}>
                {status === "sending" ? "Sending..." : status === "sent" ? "Sent Successfully! 🎉" : status === "error" ? "Error! Try Again." : "Send Message"}
                {status !== "sent" && <Zap className="w-4 h-4" />}
              </button>
              {status === "sent" && <span className="text-sm text-green-600 font-semibold">Message sent — thank you!</span>}
              {status === "error" && <span className="text-sm text-red-600 font-semibold">Failed to send. Please check your Formspree setup.</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// --------------------- Footer & Back-to-top ---------------------
function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="py-12 border-t border-gray-100 mt-12 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-gray-600 text-sm">Designed & Developed by Murali Dasari © {new Date().getFullYear()} | All Rights Reserved.</div>
          <div className="flex items-center gap-4">
            <a href={MURALI.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 inline-flex items-center gap-2 hover:text-amber-600 transition">
              <Github className="w-5 h-5" />
            </a>
            <a href={MURALI.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 inline-flex items-center gap-2 hover:text-amber-600 transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${MURALI.email}`} className="text-gray-700 inline-flex items-center gap-2 hover:text-amber-600 transition">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.a 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 30 }} 
            href="#home" 
            className="fixed right-6 bottom-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-500 text-white shadow-xl hover:bg-amber-600 transition"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  );
}

// --------------------- Root App ---------------------
export default function App() {
  const [active, setActive] = useState("home");
  const [showIntro, setShowIntro] = useState(true);
  const sectionIds = ["home", "about", "expertise", "skills", "projects", "academic", "contact"];

  useEffect(() => {
    // FIX for the "React App" title: Set the document title dynamically
    document.title = `${MURALI.name} | ${MURALI.title}`;
    
    document.documentElement.style.fontFamily = "Inter, Poppins, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue'";
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      let current = "home";
      const midPoint = scrollY + windowHeight / 2; 

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          if (el.offsetTop <= midPoint) {
            current = id;
          } else {
            break; 
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen antialiased bg-white text-gray-900">
      <BrightParticleBg />

      {showIntro && <IntroOverlay onFinish={() => setShowIntro(false)} />}

      <div className="relative">
        <div className="py-6">
          <Header active={active} />
        </div>

        <main className="relative">
          <Hero />
          <About />
          <Expertise />
          <Skills />
          <Projects />
          <AcademicBackground />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}