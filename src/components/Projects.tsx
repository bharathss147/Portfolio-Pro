import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Mic, FileText, Database, Code, Shield, Cpu, Layout, Aperture } from 'lucide-react';

const projectsData = [
  {
    id: "01",
    title: "BLINKOZ",
    description: "AI-powered eye tracking software enabling cursor movement and mouse clicks using eye blinks — built to improve accessibility and human-computer interaction.",
    stack: ["Python", "OpenCV", "AI"],
    category: "AI / Computer Vision",
    link: "#",
    colSpan: "col-span-1 md:col-span-2",
    type: "horizontal",
  },
  {
    id: "02",
    title: "VOXTEND",
    description: "Offline voice recognition and multilingual translation app that converts speech into translated text through an intuitive interface.",
    stack: ["Speech Recognition", "React"],
    category: "AI / NLP",
    link: "#",
    colSpan: "col-span-1",
    type: "vertical",
  },
  {
    id: "03",
    title: "WORLD COIN",
    description: "A concept project exploring modern digital currency, fintech UI, and a blockchain-inspired user experience.",
    stack: ["Fintech UI", "Web3"],
    category: "Fintech",
    link: "https://drive.google.com/file/d/134wkXVEjQBC0jGG3LQc0xer97cEJAQHh/view?usp=drive_link",
    colSpan: "col-span-1",
    type: "vertical",
  },
  {
    id: "04",
    title: "PDF Reader AI",
    description: "An AI-powered PDF Question & Answer system that understands documents and answers user queries efficiently.",
    stack: ["AI/LLM", "Document QA"],
    category: "Productivity",
    link: "#",
    colSpan: "col-span-1 md:col-span-2",
    type: "horizontal",
  },
  {
    id: "05",
    title: "DEZIGNO Website",
    description: "Designed and developed a modern portfolio and service website showcasing branding, graphic design, UI/UX, and web development services.",
    stack: ["Web Design", "UI/UX", "Branding"],
    category: "Web Development",
    link: "https://www.dezigno.studio",
    colSpan: "col-span-1",
    type: "timeline",
  },
  {
    id: "06",
    title: "More Projects",
    description: "Exploring new ideas and building innovative solutions. Stay tuned for what's next!",
    stack: ["Coming Soon", "Innovation"],
    category: "In Progress",
    link: "#",
    colSpan: "col-span-1",
    type: "vertical",
  }
];

/* =========================================
   Visual Components for Left Area
========================================= */

const BlinkozVisual = () => (
  <div className="relative w-full h-full min-h-[250px] flex items-center justify-center overflow-hidden">
    {/* Fine Orbit Rings */}
    <motion.div 
      animate={{ rotateX: 60, rotateZ: 360 }} 
      transition={{ rotateZ: { duration: 20, repeat: Infinity, ease: "linear" } }}
      className="absolute w-[300px] h-[300px] rounded-full border border-[#6E5BFF]/20 shadow-[0_0_15px_rgba(110,91,255,0.1)]"
      style={{ transformStyle: 'preserve-3d' }}
    />
    <motion.div 
      animate={{ rotateX: 70, rotateY: 20, rotateZ: -360 }} 
      transition={{ rotateZ: { duration: 25, repeat: Infinity, ease: "linear" } }}
      className="absolute w-[240px] h-[240px] rounded-full border border-[#00D9FF]/20"
      style={{ transformStyle: 'preserve-3d' }}
    />
    
    {/* 3D Glassy Eye Sphere */}
    <motion.div 
      animate={{ y: [0, -10, 0] }} 
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10 w-[140px] h-[140px] rounded-full flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(30,30,120,0.8),inset_0_-10px_20px_rgba(0,0,0,0.6)] border border-white/5"
      style={{ 
        background: 'radial-gradient(circle at 35% 30%, #4a8cff 0%, #1a1ab4 35%, #03002e 75%, #000 100%)'
      }}
    >
      {/* Top glossy reflection */}
      <div className="absolute top-[3%] left-[10%] w-[60%] h-[35%] bg-gradient-to-b from-white/40 to-transparent rounded-[50%] rotate-[-20deg] pointer-events-none blur-[1px]" />
      
      {/* Eye Iris */}
      <div className="relative z-10 w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#00D9FF] to-[#0055ff] flex items-center justify-center shadow-[inset_0_0_15px_rgba(0,0,0,0.5),0_0_20px_rgba(0,217,255,0.4)]">
        {/* Pupil */}
        <div className="w-[32px] h-[32px] rounded-full bg-[#05051a] shadow-[inset_0_3px_5px_rgba(255,255,255,0.2),0_0_10px_rgba(0,0,0,0.8)] relative">
           {/* Pupil reflection */}
           <div className="absolute top-[15%] left-[20%] w-[8px] h-[8px] bg-white/40 rounded-full blur-[1px]" />
        </div>
      </div>
      
      {/* Bottom faint reflection */}
      <div className="absolute bottom-[-5%] right-[-10%] w-[70%] h-[40%] bg-gradient-to-t from-[#6E5BFF]/40 to-transparent rounded-[50%] rotate-[15deg] pointer-events-none blur-[2px]" />
    </motion.div>
    
    {/* Floating Orbs/Particles */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ 
          y: [-20, -60], 
          x: Math.sin(i) * 40,
          opacity: [0, 0.8, 0],
          scale: [0.5, 1, 0.5]
        }}
        transition={{ duration: 3 + i, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
        className="absolute w-1.5 h-1.5 rounded-full bg-[#6E5BFF] shadow-[0_0_10px_#6E5BFF]"
        style={{ left: `${35 + i * 10}%`, top: '70%' }}
      />
    ))}
  </div>
);

const VoxtendVisual = () => (
  <div className="relative w-full h-full min-h-[250px] flex items-center justify-center overflow-hidden">
    {/* Glass Sound Panel */}
    <motion.div 
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="w-[200px] h-[240px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center gap-6 relative z-10"
    >
      <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-[#00FFD5] to-[#00D9FF] flex items-center justify-center shadow-[0_0_40px_rgba(0,255,213,0.4)]">
        <Mic className="text-[#03002E]" size={36} />
      </div>
      {/* Waveform */}
      <div className="flex items-end gap-1.5 h-[40px]">
        {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: [`${h * 0.5}%`, `${h}%`, `${h * 0.5}%`] }}
            transition={{ duration: 1 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 bg-[#00FFD5] rounded-full shadow-[0_0_10px_#00FFD5]"
          />
        ))}
      </div>
    </motion.div>
  </div>
);

const WorldCoinVisual = () => (
  <div className="relative w-full h-full min-h-[250px] flex items-center justify-center overflow-hidden perspective-1000">
    <motion.div
      animate={{ rotateY: 360, y: [0, -20, 0] }}
      transition={{ rotateY: { duration: 10, repeat: Infinity, ease: "linear" }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
      className="relative z-10 w-[140px] h-[140px] rounded-full bg-gradient-to-br from-[#6E5BFF] to-[#00D9FF] p-1 shadow-[0_0_60px_rgba(110,91,255,0.5)]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="w-full h-full rounded-full bg-[#03002E] flex items-center justify-center border-4 border-[#6E5BFF]/50 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30" />
         <Shield className="text-[#6E5BFF]" size={50} />
      </div>
    </motion.div>
    {/* Grid Floor */}
    <div className="absolute bottom-[-50px] w-[200%] h-[150px] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-20 transform rotate-x-60" style={{ transform: "perspective(500px) rotateX(75deg)" }} />
  </div>
);

const PdfVisual = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-[28px]">
    {/* Diagonal split background */}
    <div className="absolute top-[-20%] left-[-20%] w-[75%] md:w-[55%] h-[150%] bg-gradient-to-br from-[#00D9FF]/15 to-transparent skew-x-[-20deg] border-r border-[#00D9FF]/40 shadow-[30px_0_60px_rgba(0,217,255,0.15)] flex items-center justify-center">
      {/* Tilted Phone UI */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="w-[160px] md:w-[240px] h-[300px] md:h-[420px] bg-[#010048]/90 border border-[#00D9FF]/20 rounded-2xl md:rounded-[32px] skew-x-[20deg] rotate-[-5deg] p-4 md:p-6 flex flex-col gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden ml-[-30px]"
      >
         {/* Top Nav */}
         <div className="w-full flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="w-5 h-5 rounded-full bg-[#00D9FF]/20 flex-shrink-0" />
            <div className="w-20 h-2 bg-white/20 rounded-full" />
         </div>
         {/* Chat bubble */}
         <div className="w-[85%] self-end bg-white/5 rounded-2xl border border-white/5 p-4 flex flex-col gap-3 mt-4">
            <div className="w-[90%] h-2.5 bg-white/60 rounded-full" />
            <div className="w-[60%] h-2.5 bg-white/40 rounded-full" />
            <div className="w-[75%] h-2.5 bg-white/40 rounded-full" />
         </div>
         {/* Answer bubble */}
         <div className="w-[90%] bg-[#00D9FF]/10 rounded-2xl border border-[#00D9FF]/20 p-4 flex flex-col gap-3 mt-2">
            <div className="w-[40%] h-2.5 bg-[#00D9FF]/80 rounded-full" />
            <div className="w-[95%] h-2.5 bg-[#00D9FF]/50 rounded-full" />
            <div className="w-[85%] h-2.5 bg-[#00D9FF]/50 rounded-full" />
         </div>
      </motion.div>
    </div>

    {/* Floating Document Icon */}
    <motion.div 
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      className="absolute top-[25%] left-[8%] md:left-[15%] w-[100px] h-[100px] md:w-[130px] md:h-[130px] bg-[#03002E]/80 backdrop-blur-2xl border border-[#00D9FF]/40 rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,217,255,0.4),inset_0_0_20px_rgba(0,217,255,0.1)] flex items-center justify-center z-10"
    >
      {/* CSS Document Icon */}
      <div className="relative w-[50px] h-[65px] md:w-[65px] md:h-[80px] bg-[#c5cce4] rounded-md shadow-lg overflow-hidden flex flex-col pt-8 md:pt-10 px-2.5 md:px-3.5 gap-1.5 md:gap-2">
        {/* Corner Fold */}
        <div className="absolute top-0 right-0 w-[18px] h-[18px] md:w-[24px] md:h-[24px] bg-[#9aa0b4] rounded-bl-lg shadow-sm z-20" />
        {/* The cut corner wrapper to hide the top right of the paper */}
        <div className="absolute top-[-10px] right-[-10px] w-[28px] h-[28px] md:w-[34px] md:h-[34px] bg-[#03002E] rotate-45 z-10" />
        {/* Lines */}
        <div className="w-[50%] h-[3.5px] bg-[#1a1c29] rounded-full relative z-0" />
        <div className="w-[100%] h-[3.5px] bg-[#1a1c29] rounded-full relative z-0" />
        <div className="w-[80%] h-[3.5px] bg-[#1a1c29] rounded-full relative z-0" />
        <div className="w-[60%] h-[3.5px] bg-[#1a1c29] rounded-full relative z-0" />
      </div>
    </motion.div>
  </div>
);



const MoreProjectsVisual = () => (
  <div className="relative w-full h-full min-h-[250px] flex items-center justify-center overflow-hidden perspective-1000">
    <div className="relative w-[150px] h-[150px]">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [-20, 20, -20],
            rotateX: [0, 180, 360],
            rotateY: [0, 180, 360]
          }}
          transition={{ duration: 8 + i, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
          className="absolute inset-0 border-2 border-[#00D9FF]/40 bg-[#00D9FF]/5"
          style={{ transformOrigin: "center" }}
        />
      ))}
    </div>
  </div>
);


/* =========================================
   Project Card Component (Framer Motion)
========================================= */

const ProjectCard = ({ project, index }: { project: typeof projectsData[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Effect Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  // Spotlight Effect
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // For 3D Tilt
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
    
    // For Spotlight
    setSpotlightPos({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  // Select Visual Component
  const renderVisual = () => {
    switch (project.id) {
      case "01": return <BlinkozVisual />;
      case "02": return <VoxtendVisual />;
      case "03": return <WorldCoinVisual />;
      case "04": return <PdfVisual />;
      case "06": return <MoreProjectsVisual />;
      default: return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={project.colSpan}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="relative group h-full rounded-[28px] overflow-hidden border border-white/5 backdrop-blur-[24px] cursor-pointer shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
      >
        {/* Card Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(18,20,40,0.92)] to-[rgba(9,11,22,0.82)] z-0 transition-opacity duration-500 group-hover:opacity-80" />
        
        {/* Neon Glow Behind Card on Hover */}
        <div 
          className="absolute inset-0 bg-[#00D9FF]/20 blur-[80px] z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        />

        {/* Mouse Spotlight Overlay */}
        <div 
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 rounded-[28px]" 
          style={{ 
            opacity: isHovered ? 1 : 0, 
            background: `radial-gradient(600px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(255,255,255,0.06), transparent 40%)`,
          }} 
        />

        {/* Render Absolute Visuals (like Card 4 Diagonal Split) */}
        {project.id === "04" && <PdfVisual />}

        {/* Card Border Glow on Hover */}
        <div className="absolute inset-0 rounded-[28px] border border-[#00D9FF]/0 group-hover:border-[#00D9FF]/30 transition-colors duration-500 z-20 pointer-events-none" />

        {project.type === "timeline" ? (
          <div className="relative z-20 h-full p-8 lg:p-10 flex flex-col pointer-events-none">
            {/* Main flex container for timeline and content */}
            <div className="flex flex-1 gap-6 md:gap-8 relative">
               
               {/* Left Timeline */}
               <div className="w-[80px] flex flex-col items-center relative z-10">
                  {/* Vertical Line */}
                  <div className="absolute top-[-20px] bottom-[-20px] w-[1px] bg-gradient-to-b from-transparent via-[#6E5BFF]/30 to-transparent" />
                  {/* Horizontal cross line */}
                  <div className="absolute top-[140px] left-[-20px] right-[-20px] h-[1px] bg-gradient-to-r from-transparent via-[#6E5BFF]/20 to-transparent" />
                  
                  {/* 05 Pill Background */}
                  <div className="absolute top-[-40px] w-[60px] h-[120px] bg-gradient-to-b from-[#6E5BFF]/20 to-transparent blur-[20px]" />

                  {/* 05 Text */}
                  <div className="relative mb-14 mt-2">
                     <span className="font-mono text-[#b7a6ff] text-lg font-medium">{project.id}</span>
                  </div>

                  {/* D Logo Box */}
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-[90px] h-[90px] bg-[#02001a]/90 backdrop-blur-xl rounded-[24px] border border-[#6E5BFF]/30 flex items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(110,91,255,0.15)] mb-auto"
                  >
                    <span className="font-display font-bold text-5xl bg-gradient-to-br from-[#00D9FF] to-[#0055ff] text-transparent bg-clip-text">D</span>
                    <span className="font-display font-bold text-5xl text-[#b7a6ff]">.</span>
                  </motion.div>

                  {/* Glowing Node */}
                  <div className="w-4 h-4 rounded-full bg-[#6E5BFF] shadow-[0_0_15px_#6E5BFF,0_0_30px_#6E5BFF] border-4 border-[#03002E] relative z-10 mt-8 mb-4" />
               </div>

               {/* Right Content */}
               <div className="flex-1 flex flex-col pt-12 pointer-events-auto">
                 <div className="flex items-center gap-3 mb-6">
                   <h3 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">{project.title}</h3>
                   <a href={project.link} target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors">
                     <ExternalLink size={20} strokeWidth={1.5} />
                   </a>
                 </div>
                 
                 <p className="text-white/70 text-[0.95rem] leading-relaxed mb-8">
                   {project.description}
                 </p>
                 
                 <div className="flex flex-wrap gap-2.5">
                   {project.stack.map(tag => (
                     <span key={tag} className="font-mono text-[0.7rem] px-4 py-1.5 rounded-full bg-[#6E5BFF]/5 border border-[#6E5BFF]/20 text-[#b7a6ff]">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
            </div>

            {/* Bottom Category */}
            <div className="mt-8 flex items-center gap-2 pt-2 pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-[#6E5BFF] shadow-[0_0_10px_#6E5BFF]" />
              <span className="text-white/60 text-sm font-medium tracking-wide">{project.category}</span>
            </div>
          </div>
        ) : (
          <div className={`relative z-20 h-full p-8 lg:p-10 flex ${project.type === 'horizontal' ? 'flex-col md:flex-row items-center' : 'flex-col'} gap-10 pointer-events-none`}>
            
            {/* Top Left Number & Top Right Link Button (Absolute position for standard look) */}
            <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-30 pointer-events-none">
               <span className="font-mono text-white/50 text-sm">{project.id}</span>
               {project.id !== "06" && (
                 <a href={project.link} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white group/btn pointer-events-auto transition-all duration-300 hover:bg-[#6E5BFF]/20 hover:border-[#6E5BFF]/50 hover:shadow-[0_0_20px_rgba(110,91,255,0.3)] hover:rotate-6">
                    <ExternalLink size={20} className="transition-transform group-hover/btn:scale-110" />
                 </a>
               )}
            </div>

            {/* Left Visual Area (Rendered in flow unless absolute) */}
            <div className={`w-full ${project.type === 'horizontal' ? 'md:w-1/2 h-full min-h-[300px]' : 'h-[250px]'} pt-8 flex justify-center items-center pointer-events-auto`}>
              {project.id !== "04" && renderVisual()}
            </div>

            {/* Right Content Area */}
            <div className={`w-full ${project.type === 'horizontal' ? 'md:w-1/2' : 'flex-1 flex flex-col justify-end'} pt-8 pointer-events-auto`}>
              
              <h3 className="font-display font-bold text-4xl text-white mb-4 tracking-tight">
                {project.title}
              </h3>
              
              <p className="text-white/75 text-[1.05rem] leading-relaxed mb-8 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.stack.map(tag => (
                  <span key={tag} className="font-mono text-[0.75rem] px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-[#00D9FF]/20 hover:border-[#00D9FF]/50 hover:shadow-[0_0_15px_rgba(0,217,255,0.2)]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Bar */}
              <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-[#00FFD5] shadow-[0_0_10px_#00FFD5]" />
                   <span className="text-white/60 text-sm font-medium tracking-wide">{project.category}</span>
                 </div>
                 {project.id !== "06" && (
                   <motion.div 
                     className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white cursor-pointer"
                     whileHover={{ x: 5, backgroundColor: "rgba(110,91,255,0.2)", borderColor: "rgba(110,91,255,0.5)" }}
                   >
                     <ArrowRight size={16} />
                   </motion.div>
                 )}
              </div>

            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

/* =========================================
   Main Projects Section
========================================= */

const Projects = () => {
  return (
    <section id="projects" className="relative w-full overflow-hidden py-[120px] px-6 lg:px-[80px]">
      
      {/* Global Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Radial Gradients */}
        <div className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-[#6E5BFF] opacity-[0.18] blur-[150px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#00D9FF] opacity-[0.18] blur-[120px]" />
        
        {/* Subtle grid/noise overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent mb-6 shadow-[0_0_15px_#00D9FF]"
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            PROJECTS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg lg:text-xl font-medium max-w-[600px]"
          >
            Things I've built with passion and code.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
