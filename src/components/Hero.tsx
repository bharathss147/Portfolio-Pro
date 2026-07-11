import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Crown } from "lucide-react";

const roles = [
  "Software Developer",
  "UI/UX Designer",
  "Graphic Designer",
  "Web Developer",
  "Founder of DEZIGNO",
];

const roleColors = [
  "#35e6c4",
  "#7c5cff",
  "#ff7eb3",
  "#6ff0d6",
  "#b7a6ff",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // 3D tilt for ID card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateZ(0)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateY(0) rotateX(0)";
    }
  };

  return (
    <section className="min-h-svh flex items-center relative z-[2] pt-[120px]">
      <div className="max-w-[1160px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-[60px] items-center">
        {/* Left content */}
        <div
          className={`transition-all duration-[2500ms] ${
            isMounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(.16,.84,.44,1)" }}
        >
          {/* Kicker */}
          <div className="font-mono text-[0.85rem] text-[#35e6c4] tracking-wide flex items-center gap-2.5 mb-[26px]">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                background: "#35e6c4",
                boxShadow: "0 0 0 rgba(53,230,196,0.5)",
              }}
            />
            AVAILABLE FOR INTERNSHIPS & FREELANCE
          </div>

          {/* Heading */}
          <h1 className="font-display text-[clamp(2.6rem,6vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.03em] mb-6">
            Designing experiences.
            <br />
            Building <span className="grad-text">intelligent</span>
            <br />
            software.
          </h1>

          {/* Animated Roles */}
          <div className="text-[clamp(1rem,2vw,1.25rem)] text-[#9aa0b4] mb-[34px] min-h-[1.6em] flex items-center font-medium relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, color: roleColors[roleIndex % roleColors.length] }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 0.84, 0.44, 1] }}
                className="absolute left-0 whitespace-nowrap"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
            {/* Invisible spacer to maintain layout */}
            <span className="invisible pointer-events-none whitespace-nowrap" aria-hidden="true">
              {roles.reduce((a, b) => (a.length > b.length ? a : b))}
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-3.5 flex-wrap mb-[52px]">
            <a href="#projects" className="btn btn-primary">
              View Projects →
            </a>
            <a
              href="https://drive.google.com/file/d/1qKLwPMXm_3xG-wXyYMoZ2ywbO6asUNBX/view"
              target="_blank"
              rel="noopener"
              className="btn btn-ghost"
            >
              Download Resume
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-[38px] flex-wrap">
            <div>
              <b className="font-display text-[1.7rem] block font-semibold">
                3rd
              </b>
              <span className="text-[0.82rem] text-[#5c6178]">
                Year, CSE @ SNS CE
              </span>
            </div>
            <div>
              <b className="font-display text-[1.7rem] block font-semibold">
                5+
              </b>
              <span className="text-[0.82rem] text-[#5c6178]">
                Featured Projects
              </span>
            </div>
            <div>
              <b className="font-display text-[1.7rem] block font-semibold">
                1
              </b>
              <span className="text-[0.82rem] text-[#5c6178]">
                Founded Studio — Dezigno
              </span>
            </div>
            <div>
              <b className="font-display text-[1.7rem] block font-semibold">
                🏆
              </b>
              <span className="text-[0.82rem] text-[#5c6178]">
                Hackathon Winner
              </span>
            </div>
          </div>
        </div>

        {/* ID Card */}
        <div
          className={`transition-all duration-[2500ms] delay-[400ms] ${
            isMounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{
            perspective: 1200,
            transitionTimingFunction: "cubic-bezier(.16,.84,.44,1)",
          }}
        >
          <div
            ref={cardRef}
            className="transition-transform duration-150 ease-out relative w-full max-w-[650px] mx-auto lg:mx-0"
            style={{ transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Glass Card Background */}
            <div className="glass p-[28px_32px] rounded-[26px] flex flex-col items-center w-full relative z-10 border border-blue-500/40 shadow-[0_0_35px_rgba(37,99,235,0.15)] overflow-hidden"
                 style={{
                   background: "radial-gradient(circle at 10% 20%, rgba(15, 23, 42, 0.95) 0%, rgba(3, 7, 18, 0.98) 100%)",
                   backgroundImage: "linear-gradient(to right, rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.04) 1px, transparent 1px)",
                   backgroundSize: "40px 40px"
                 }}>
              
              {/* Card top info */}
              <div className="flex justify-between items-start w-full mb-8 relative z-10">
                <div className="font-mono text-[0.75rem] text-blue-400/80 tracking-wider font-semibold">
                  ID // CSE-2028
                </div>
                <div className="font-mono text-[0.75rem] text-blue-400/80 flex items-center gap-1.5 tracking-wider font-semibold">
                  COIMBATORE, IN <MapPin size={14} className="text-blue-500" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 w-full relative z-10">
                {/* Left Side: Avatar & Signature */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-32 h-32 md:w-[140px] md:h-[140px] rounded-full overflow-hidden border-2 border-blue-500/60 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] transition-shadow duration-300 cursor-pointer bg-[#12141d] mb-5 relative group"
                       style={{ transform: "translateZ(20px)" }}>
                    <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img src="/profile.jpg" alt="Bharath S" className="w-full h-full object-cover object-[center_20%]" />
                  </div>
                  
                  {/* Signature */}
                  <div className="flex flex-col items-center -mt-2">
                    <span style={{ fontFamily: "'Caveat', cursive" }} className="text-blue-400 text-[2.4rem] transform -rotate-6 font-semibold">BHARATH.S</span>
                    <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent mt-1"></div>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-[1px] bg-gradient-to-b from-transparent via-blue-500/30 to-transparent my-2"></div>

                {/* Right Side: Bio & Tags */}
                <div className="flex flex-col flex-1 text-center md:text-left pt-2">
                  <div className="font-display text-[2.2rem] font-bold mb-1 tracking-tight text-white drop-shadow-md leading-none">
                    Bharath S
                  </div>
                  <div className="text-[0.95rem] text-blue-400/90 mb-4 font-medium">
                    Developer · Designer · Founder
                  </div>
                  
                  <div className="w-12 h-[2px] bg-blue-500 rounded-full mb-5 mx-auto md:mx-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

                  <p className="text-[0.9rem] text-[#9aa0b4] mb-6 leading-relaxed max-w-[280px] mx-auto md:mx-0">
                    I design and build digital experiences that are fast, modern and meaningful.
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2.5 mt-auto">
                    {["Python", "Figma", "UI/UX", "Branding", "OpenCV"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[0.68rem] px-3 py-1.5 rounded-lg border border-blue-500/30 text-blue-200/80 bg-blue-500/5 hover:border-blue-500/60 hover:bg-blue-500/10 transition-colors"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center w-full pt-6 mt-6 border-t border-blue-500/20 relative z-10">
                <div className="flex items-center gap-2 text-[0.8rem] text-blue-400/70 font-medium">
                  <Crown size={16} className="text-blue-500" />
                  Founder, DEZIGNO
                </div>
                <div className="font-display text-[1rem] font-bold text-blue-400">
                  est. 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
