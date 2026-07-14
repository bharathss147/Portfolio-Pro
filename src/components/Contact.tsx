import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, Download, Copy, ExternalLink, Check, Sparkles, ChevronRight } from 'lucide-react';
import ScrollReveal from "./ScrollReveal";

// -------------------------------------------------------------
// Glass Cube Component
// -------------------------------------------------------------
interface CubeProps {
  id: string;
  icon: React.ElementType;
  label: string;
  value: string;
  link?: string;
  type: "email" | "github" | "linkedin" | "resume";
}

const GlassCube: React.FC<CubeProps> = ({ id, icon: Icon, label, value, link, type }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for 3D tilt (Magnetic Effect)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for rotation
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { damping: 20, stiffness: 150 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { damping: 20, stiffness: 150 });
  
  // Specific states for interactions
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x / rect.width);
    mouseY.set(y / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Type-specific animations
  const isEmail = type === "email";
  const isGithub = type === "github";
  const isLinkedin = type === "linkedin";
  const isResume = type === "resume";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{ 
        y: [0, -10, 0],
        rotateZ: isResume && isHovered ? 5 : 0, // Resume rotates slowly
      }}
      transition={{ 
        y: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
        rotateZ: { duration: 0.6, ease: "easeOut" }
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full max-w-[280px] aspect-square mx-auto cursor-pointer group z-10"
    >
      {/* Holographic Particles for LinkedIn */}
      {isLinkedin && (
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="absolute inset-[-50px] pointer-events-none z-0 flex items-center justify-center"
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0.5, 1.5, 0.5],
                    x: (Math.random() - 0.5) * 150,
                    y: (Math.random() - 0.5) * 150
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  className="absolute w-2 h-2 rounded-full bg-[#00D9FF] blur-[2px]"
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Main Glass Body */}
      <motion.div
        className={`w-full h-full rounded-[24px] border transition-all duration-700 relative overflow-visible
          ${isHovered ? 'bg-white/[0.08] border-[#00D9FF]/60 shadow-[0_0_40px_rgba(0,217,255,0.2),inset_0_0_30px_rgba(255,255,255,0.1)]' 
                      : 'bg-white/[0.03] border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.1)]'}
          backdrop-blur-[30px] flex flex-col items-center justify-center p-6`}
        style={{ 
          transform: isEmail && isHovered ? 'translateZ(40px) rotateZ(8deg)' : 'translateZ(20px)',
          transformStyle: "preserve-3d",
        }}
      >
        {/* Futuristic Glass Panel for GitHub */}
        {isGithub && (
          <motion.div 
            className="absolute top-0 right-0 bottom-0 left-1/2 bg-gradient-to-l from-[#00D9FF]/20 to-transparent rounded-r-[24px] origin-right border-r border-t border-b border-[#00D9FF]/0 pointer-events-none"
            animate={{ 
              rotateY: isHovered ? -70 : 0,
              opacity: isHovered ? 1 : 0,
              borderColor: isHovered ? "rgba(0, 217, 255, 0.5)" : "rgba(0, 217, 255, 0)"
            }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
            style={{ transformStyle: "preserve-3d" }}
          />
        )}

        {/* Top Glossy Reflection */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.08] to-transparent rounded-t-[24px] pointer-events-none" />

        {/* Inner Content */}
        <div className="relative z-10 flex flex-col items-center text-center transform-gpu" style={{ transform: 'translateZ(30px)' }}>
          <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center border transition-all duration-500
            ${isHovered ? 'bg-[#00D9FF]/20 border-[#00D9FF]/50 shadow-[0_0_20px_#00D9FF]' : 'bg-white/5 border-white/10'}`}>
            <Icon size={28} className={isHovered || (isResume && isHovered) ? 'text-[#00D9FF]' : 'text-white/70'} />
          </div>

          <h3 className="font-mono text-[0.75rem] uppercase tracking-[3px] text-[#A5A7B8] mb-2">
            {label}
          </h3>
          
          <p className="font-medium text-white text-[0.95rem] truncate w-full max-w-[200px]">
            {value}
          </p>

          {/* Action Buttons */}
          <div className="h-10 mt-4 overflow-hidden w-full flex justify-center">
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isEmail ? (
                    <button 
                      onClick={handleCopy}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#00D9FF]/20 border border-[#00D9FF]/30 text-white text-sm transition-colors"
                    >
                      {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                      {copied ? 'Copied!' : 'Copy Email'}
                    </button>
                  ) : (
                    <a 
                      href={link || '#'} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#00D9FF]/20 border border-[#00D9FF]/30 text-white text-sm transition-colors"
                    >
                      {isResume ? <Download size={16} /> : <ExternalLink size={16} />}
                      {isResume ? 'Download PDF' : `Open ${label}`}
                    </a>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </motion.div>

      {/* Volumetric shadow/glow below the cube */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[#00D9FF]/20 blur-[20px] rounded-[100%] transition-opacity duration-500 opacity-50 group-hover:opacity-100 pointer-events-none" />
    </motion.div>
  );
};


// -------------------------------------------------------------
// Main Contact Section
// -------------------------------------------------------------
const Contact = () => {
  return (
    <section 
      id="contact" 
      className="relative w-full min-h-screen py-[150px] overflow-hidden flex flex-col items-center justify-center font-['Inter',sans-serif]"
    >
      {/* Global Background Effects (Same as Projects) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Radial Gradients */}
        <div className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-[#6E5BFF] opacity-[0.18] blur-[150px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#00D9FF] opacity-[0.18] blur-[120px]" />
        
        {/* Subtle grid/noise overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
      </div>

      {/* Section Header */}
      <div className="relative z-20 max-w-[800px] mx-auto px-6 text-center mb-24">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#00D9FF] text-sm font-mono tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(0,217,255,0.1)]">
            <Sparkles size={16} />
            06 — Contact
          </div>
          <h2 className="font-['Satoshi','General_Sans',sans-serif] text-5xl md:text-6xl lg:text-[64px] font-bold text-white tracking-tight mb-6 leading-tight">
            Let's create the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#6E5BFF]">future together.</span>
          </h2>
          <p className="text-[#A5A7B8] text-lg md:text-xl max-w-[600px] mx-auto font-light leading-relaxed">
            Have a project in mind, or just want to say hello? Step into the network and let's start a conversation.
          </p>
        </ScrollReveal>
      </div>

      {/* Holographic Network & Cubes */}
      <div className="relative z-20 w-full max-w-[1000px] mx-auto px-6 mb-32">
        
        {/* Holographic Connecting Lines (Desktop only) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" style={{ filter: 'drop-shadow(0 0 8px rgba(0,217,255,0.5))' }}>
            {/* Draw delicate dashed lines connecting the centers */}
            <path d="M 500 50 L 250 300 L 750 300 Z" fill="none" stroke="rgba(0,217,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>

        {/* Diamond Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center relative">
          
          {/* Top */}
          <div className="lg:col-start-2 lg:col-span-1 lg:row-start-1 w-full flex justify-center">
            <GlassCube 
              id="1" 
              type="email" 
              icon={Mail} 
              label="Email" 
              value="bharathss147@gmail.com" 
            />
          </div>
          
          {/* Left */}
          <div className="lg:col-start-1 lg:col-span-1 lg:row-start-2 w-full flex justify-center">
            <GlassCube 
              id="2" 
              type="github" 
              icon={Github} 
              label="GitHub" 
              value="github.com/bharathss147" 
              link="https://github.com/bharathss147" 
            />
          </div>
          
          {/* Right */}
          <div className="lg:col-start-3 lg:col-span-1 lg:row-start-2 w-full flex justify-center">
            <GlassCube 
              id="3" 
              type="linkedin" 
              icon={Linkedin} 
              label="LinkedIn" 
              value="linkedin.com/in/bharathssns" 
              link="https://www.linkedin.com/in/bharathssns/" 
            />
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-20 text-center pb-20">
        <ScrollReveal>
          <a href="mailto:bharathss147@gmail.com" className="group relative inline-flex items-center justify-center">
            {/* Glowing Aura */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] to-[#6E5BFF] rounded-full blur-[20px] opacity-40 group-hover:opacity-80 transition-opacity duration-700" />
            
            {/* Glass Button */}
            <motion.div 
              whileHover={{ y: -4 }}
              whileTap={{ y: 2 }}
              className="relative flex items-center gap-3 px-10 py-5 rounded-full bg-white/5 backdrop-blur-md border border-[#00D9FF]/40 text-white font-medium text-lg overflow-hidden"
            >
              {/* Animated Gradient flow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
              
              <span className="relative z-10">Let's Build Something Together</span>
              <ChevronRight size={20} className="text-[#00D9FF] group-hover:translate-x-1 transition-transform relative z-10" />
            </motion.div>
          </a>
        </ScrollReveal>
      </div>

    </section>
  );
};

export default Contact;
