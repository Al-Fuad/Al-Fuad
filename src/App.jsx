import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Smartphone, 
  ShieldCheck, 
  Menu, 
  X, 
  Download,
  ChevronRight,
  Terminal,
  Cpu,
  Lock,
  Zap,
  Activity,
  GraduationCap,
  Briefcase
} from 'lucide-react';

// --- CONFIGURATION & DATA ---
const DATA = {
  name: "S. M. Al Fuad Nur",
  role: "Software Engineer | Flutter Developer | Cybersecurity Enthusiast",
  location: "Dhaka, Bangladesh",
  about: "I am a dedicated Software Engineer with a BSc in Software Engineering (Major in Cyber Security) from Daffodil International University. My journey began in the world of high-performance mobile development with Flutter, which naturally evolved into a deep passion for Application Security. I specialize in building secure, scalable mobile and web architectures, with a specific focus on Runtime Application Self-Protection (RASP) and secure coding practices.",
  skills: [
    { category: "Mobile Core", items: ["Dart", "Flutter", "Swift", "State Management(BLoC, GetX)"], icon: <Smartphone className="w-5 h-5" />, color: "cyan" },
    { category: "Security & RASP", items: ["App Security", "Reverse Engineering", "OWASP", "Encryption"], icon: <ShieldCheck className="w-5 h-5" />, color: "emerald" },
    { category: "Full Stack", items: ["Node.js", "Django", "React.js", "Firebase", "Supabase"], icon: <Cpu className="w-5 h-5" />, color: "indigo" }
  ],
  projects: [
    {
      title: "Ecommerce",
      type: "Mobile Commerce UI",
      description: "A ecommerce application ui. Built with Flutter, Firebase and GetX for state management.",
      tags: ["Flutter", "Firebase", "GetX"],
      size: "large",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1000&auto=format&fit=crop",
      github: "https://github.com/Al-Fuad/e_commerce_with_flutter",
      demo: "https://github.com/Al-Fuad/e_commerce_with_flutter"
    },
    {
      title: "Securely",
      type: "Flutter Plugin for Security",
      description: "An open-source Flutter plugin that implements runtime self-protection to detect rooted devices and debugger attachments.",
      tags: ["Dart", "RASP", "Swift", "Kotlin"],
      size: "medium",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
      github: "https://github.com/Al-Fuad/Securely",
      demo: "https://pub.dev/packages/securely"
    },
    {
      title: "Enterprise ERP",
      type: "FinTech Solution",
      description: "Scalable business management tool focused on data integrity and modular permission-based access.",
      tags: ["Flutter", "REST", "Auth", "GetX", "MVC"],
      size: "small",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      github: "",
      demo: ""
    },
    {
      title: "WhatsApp Clone",
      type: "Chat Application UI",
      description: "A WhatsApp clone built with Flutter, featuring real-time chat and Firebase integration.",
      tags: ["Flutter", "Firebase", "GetX"],
      size: "small",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop",
      github: "https://github.com/Al-Fuad/whatsapp_clone_with_flutter",
      demo: "https://github.com/Al-Fuad/whatsapp_clone_with_flutter"
    },
    {
      title: "EMistry",
      type: "Services Marketplace",
      description: "A marketplace for local services built with Flutter, BLoC and custom UI packages.",
      tags: ["Flutter", "REST", "BLoC", "CleanArch"],
      size: "small",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop",
      github: "",
      demo: ""
    }
  ],
  experience: [
    {
      company: "Nymphs Solution",
      role: "Junior Flutter Developer",
      period: "Jan 2025 - Jul 2025",
      description: "Developed and maintained mobile applications using Flutter and Dart."
    }
  ],
  education: [
    {
      institution: "Daffodil International University",
      degree: "BSc in Software Engineering\n(Major in Cyber Security)",
      period: "2022 - 2026",
      description: "Specialized in Cyber Security. Academic research focused on mobile application vulnerability assessment."
    }
  ]
};

// --- STYLES ---
const colors = {
  bg: "#020617", // Deeper black
  card: "#0f172a", // Darker card
  accent: "#22d3ee", // Vibrant cyan
  glow: "rgba(34, 211, 238, 0.3)"
};

// --- COMPONENTS ---

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-[60]" style={{ scaleX }} />;
};

const CyberBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#020617]">
    {/* Animated scanning line */}
    <motion.div 
      animate={{ top: ['-10%', '110%'] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 right-0 h-[2px] bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.2)] z-10"
    />
    {/* Subtle Grid */}
    <div className="absolute inset-0 opacity-[0.05]" 
         style={{backgroundImage: 'linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)', backgroundSize: '50px 50px'}}>
    </div>
    {/* Vignette */}
    <div className="absolute inset-0 bg-radial-gradient(circle, transparent 0%, #020617 90%)"></div>
  </div>
);

const SectionHeader = ({ title, code, subtitle }) => (
  <div className="mb-16">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-cyan-500/10 rounded border border-cyan-500/20">
        <Terminal size={18} className="text-cyan-400" />
      </div>
      <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase">System.Initialize // {code}</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase">
      {title}<span className="text-cyan-500">_</span>
    </h2>
    {subtitle && <p className="text-slate-500 font-mono text-sm max-w-lg">{subtitle}</p>}
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Added state for mobile menu

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || isOpen ? 'bg-[#020617]/90 backdrop-blur-xl border-b border-cyan-900/30 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center relative z-50">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-cyan-500 flex items-center justify-center font-black text-slate-950 rounded-sm skew-x-[-12deg] group-hover:shadow-[0_0_15px_#22d3ee] transition-all">
            N
          </div>
          <span className="text-white font-mono font-bold tracking-tighter hidden sm:block">ALFUAD.SWE</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {['About', 'Skills', 'Projects', 'History', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-cyan-400 font-mono text-xs uppercase tracking-widest transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-2 rounded-sm font-bold text-xs uppercase tracking-tighter transition-all flex items-center gap-2">
            <Download size={14} /> Resume.pdf
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-cyan-500 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#020617] border-b border-cyan-900/30 overflow-hidden absolute w-full left-0 top-full z-40"
          >
            <div className="flex flex-col p-8 gap-6 shadow-2xl">
              {['About', 'Skills', 'Projects', 'History', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-cyan-400 font-mono text-sm uppercase tracking-widest flex items-center gap-2"
                >
                  <ChevronRight size={12} className="text-cyan-500"/> {item}
                </a>
              ))}
              <div className="h-[1px] bg-slate-800 my-2"></div>
              <button className="bg-cyan-500 text-slate-950 px-6 py-4 rounded-sm font-bold text-sm uppercase tracking-tighter flex items-center justify-center gap-2 w-full hover:bg-white transition-colors">
                <Download size={16} /> Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-center items-start px-8 max-w-7xl mx-auto pt-20">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full mb-8 font-mono text-[10px] uppercase tracking-[0.2em]"
    >
      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
      System Status: Secure & Online
    </motion.div>

    <motion.h1 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6 uppercase"
    >
      S. M. AL FUAD<br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">NUR.</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="max-w-2xl text-slate-400 text-lg md:text-xl font-mono leading-relaxed mb-12"
    >
      Bridging the gap between <span className="text-cyan-400 italic">User Experience</span> and 
      <span className="text-white font-bold"> Digital Fortification.</span> 
      Flutter Engineer specialized in Mobile App Security & RASP.
    </motion.p>

    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex flex-wrap gap-4"
    >
      <a href="#projects" className="group relative px-8 py-4 bg-white text-slate-950 font-black uppercase text-sm tracking-tighter hover:bg-cyan-400 transition-all">
        Access Projects
        <div className="absolute top-0 right-0 w-2 h-2 bg-slate-950"></div>
      </a>
      <a href="#contact" className="px-8 py-4 border border-slate-800 text-white font-bold uppercase text-sm tracking-tighter hover:border-cyan-500 hover:text-cyan-400 transition-all">
        Initiate Contact
      </a>
    </motion.div>
  </section>
);

const SkillGrid = () => (
  <section id="skills" className="py-32 px-8 max-w-7xl mx-auto">
    <SectionHeader 
      title="Security Intelligence" 
      code="SKILL_DECRYPT" 
      subtitle="Comprehensive technical stack focusing on robust development and defensive engineering."
    />
    <div className="grid md:grid-cols-3 gap-6">
      {DATA.skills.map((skill, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10 }}
          className="bg-[#0f172a]/50 border border-slate-800 p-8 relative group overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent -mr-12 -mt-12 rounded-full blur-2xl group-hover:from-cyan-500/30 transition-all"></div>
          <div className="text-cyan-400 mb-6">{skill.icon}</div>
          <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">{skill.category}</h3>
          <div className="space-y-3">
            {skill.items.map(item => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-[1px] bg-cyan-500"></div>
                <span className="text-slate-400 font-mono text-xs">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const ProjectBento = () => (
  <section id="projects" className="py-32 px-8 max-w-7xl mx-auto">
    <SectionHeader title="Deployment Log" code="PROJECT_REPOS" />
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {DATA.projects.map((proj, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 0.98 }}
          className={`relative bg-[#0f172a] border border-slate-800 p-8 flex flex-col justify-end group overflow-hidden
            ${proj.size === 'large' ? 'md:col-span-8 md:row-span-2 min-h-[450px]' : ''}
            ${proj.size === 'medium' ? 'md:col-span-4 md:row-span-2 min-h-[450px]' : ''}
            ${proj.size === 'small' ? 'md:col-span-4 min-h-[300px]' : ''}
          `}
        >
          {/* Blurry Background Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
             <div className="absolute inset-0 bg-[#020617]/80 group-hover:bg-[#020617]/70 transition-all duration-500 z-10" />
             <img 
               src={proj.image} 
               alt={proj.title}
               className="w-full h-full object-cover blur-sm opacity-50 grayscale group-hover:scale-110 group-hover:blur-[2px] transition-all duration-700" 
             />
          </div>
          
          <div className="relative z-20">
            <div className="flex gap-2 mb-4">
              {proj.tags.map(t => (
                <span key={t} className="text-[10px] font-mono border border-cyan-500/30 bg-[#0f172a]/50 backdrop-blur text-cyan-400 px-2 py-0.5 rounded-sm">
                  {t}
                </span>
              ))}
            </div>
            <h4 className="text-2xl font-black text-white mb-2 uppercase group-hover:text-cyan-400 transition-colors drop-shadow-lg">
              {proj.title}
            </h4>
            <p className="text-slate-300 text-sm font-mono line-clamp-2 mb-6 drop-shadow-md">{proj.description}</p>
            
            {/* Buttons */}
            <div className="flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
               <a href={proj.github} className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 hover:border-cyan-500 text-xs font-bold uppercase tracking-wider text-white transition-colors">
                  <Github size={14} /> Source
               </a>
               <a href={proj.demo} className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-900 text-xs font-bold uppercase tracking-wider text-cyan-400 transition-colors">
                  <ExternalLink size={14} /> Demo
               </a>
            </div>
          </div>
          
          {/* Accent line */}
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyan-500 group-hover:w-full transition-all duration-500 z-30"></div>
        </motion.div>
      ))}
    </div>
  </section>
);

const ExperienceTimeline = () => (
  <section id="history" className="py-32 px-8 max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16">
      
      {/* Experience Column */}
      <div>
        <div className="flex items-center gap-3 mb-10">
          <Briefcase className="text-cyan-500" />
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Experience</h3>
        </div>
        <div className="space-y-12 relative border-l border-slate-800 pl-8">
          {DATA.experience.map((exp, i) => (
            <div key={i} className="relative group">
              <div className="absolute -left-[37px] top-1 w-4 h-4 bg-slate-950 border border-cyan-500 group-hover:bg-cyan-500 transition-all shadow-[0_0_10px_rgba(34,211,238,0.2)]"></div>
              <div className="mb-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between grid grid-cols-1 md:grid-cols-[2fr_1fr]">
                <h4 className="text-lg font-bold text-white uppercase">{exp.role}</h4>
                <span className="text-cyan-500 font-mono text-xs bg-cyan-500/5 px-2 py-1 rounded">{exp.period}</span>
              </div>
              <div className="text-slate-400 font-bold text-sm mb-3 text-cyan-500/80 uppercase tracking-tighter">{exp.company}</div>
              <p className="text-slate-500 text-sm font-mono leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Column */}
      <div>
        <div className="flex items-center gap-3 mb-10">
          <GraduationCap className="text-emerald-500" />
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Education</h3>
        </div>
        <div className="space-y-12 relative border-l border-slate-800 pl-8">
          {DATA.education.map((edu, i) => (
            <div key={i} className="relative group">
              <div className="absolute -left-[37px] top-1 w-4 h-4 bg-slate-950 border border-emerald-500 group-hover:bg-emerald-500 transition-all shadow-[0_0_10px_rgba(16,185,129,0.2)]"></div>
              <div className="mb-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between grid grid-cols-1 md:grid-cols-[2fr_1fr]">
                <h4 className="text-lg font-bold text-white uppercase">{edu.degree}</h4>
                <span className="text-emerald-500 font-mono text-xs bg-emerald-500/5 px-2 py-1 rounded">{edu.period}</span>
              </div>
              <div className="text-slate-400 font-bold text-sm mb-3 text-emerald-500/80 uppercase tracking-tighter">{edu.institution}</div>
              <p className="text-slate-500 text-sm font-mono leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 px-8 max-w-7xl mx-auto">
    <div className="bg-slate-900/50 border border-slate-800 p-12 md:p-20 relative overflow-hidden text-center">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter italic">
        Ready to build<br />
        <span className="text-cyan-500">Securely?</span>
      </h2>
      <p className="text-slate-400 font-mono max-w-xl mx-auto mb-12">
        Let's collaborate on high-performance secure mobile application.
      </p>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <a href="mailto:contact@alfuad.me" className="w-full md:w-auto px-12 py-5 bg-cyan-500 text-slate-950 font-black uppercase tracking-tighter hover:bg-white transition-all">
          Open Channel
        </a>
        <div className="flex gap-4">
          <a href="https://github.com/Al-Fuad" className="p-4 border border-slate-800 text-white hover:border-cyan-500 hover:text-cyan-400 transition-all"><Github /></a>
          <a href="https://www.linkedin.com/in/alfuad/" className="p-4 border border-slate-800 text-white hover:border-cyan-500 hover:text-cyan-400 transition-all"><Linkedin /></a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-slate-900 px-8 bg-[#020617] relative z-10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-slate-600 font-mono text-[10px] uppercase tracking-[0.3em] text-center md:text-left">
        © 2024 S.M. AL FUAD NUR // ALL RIGHTS RESERVED
      </div>
      <div className="flex gap-8 text-slate-500 font-mono text-[10px] uppercase">
        <span className="flex items-center gap-2"><Lock size={12}/> Encrypted Connection</span>
        <span className="flex items-center gap-2"><Zap size={12}/> V2.0.4-Build</span>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-[#020617] text-slate-300 min-h-screen font-sans selection:bg-cyan-500 selection:text-slate-950">
      <ScrollProgress />
      <CyberBackground />
      <Navbar />
      
      <main className="relative z-10 overflow-hidden">
        <Hero />
        
        {/* About Summary - High Contrast */}
        <section id="about" className="py-32 px-8 bg-white/5 border-y border-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 text-slate-800 font-black text-9xl opacity-20 pointer-events-none">01</div>
              <h3 className="text-3xl font-black text-white uppercase mb-8 leading-none">The Engineer<br/>The Defender.</h3>
              <p className="text-slate-400 font-mono text-sm leading-relaxed mb-6">
                With a rigorous background in Software Engineering from <span className="text-cyan-400">Daffodil International University</span>, 
                I treat code as a living architecture that must be both elegant and impenetrable.
              </p>
              <div className="h-0.5 w-20 bg-cyan-500"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-slate-800 bg-[#020617]">
                <div className="text-3xl font-black text-white mb-1">10+</div>
                <div className="text-cyan-500 font-mono text-[10px] uppercase tracking-widest">Major Apps Developed</div>
              </div>
              <div className="p-6 border border-slate-800 bg-[#020617]">
                <div className="text-3xl font-black text-white mb-1">03</div>
                <div className="text-cyan-500 font-mono text-[10px] uppercase tracking-widest">Security Projects</div>
              </div>
            </div>
          </div>
        </section>

        <SkillGrid />
        <ProjectBento />
        <ExperienceTimeline />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}