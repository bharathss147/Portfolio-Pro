import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import ScrollReveal from "./ScrollReveal";

const experienceData = [
  {
    period: "2024 — Present",
    role: "Founder & Creative Director",
    org: "DEZIGNO",
    description: "Leading a creative studio delivering branding, graphic design, social media creatives, and web development for clients seeking premium visual identity.",
    tags: ["Branding", "UI/UX", "Web Development", "AI", "Client Management"],
  },
  {
    period: "2023 — Present",
    role: "Computer Science Engineering Student",
    org: "SNS College of Engineering",
    description: "Pursuing B.E. in Computer Science with focus on software development, AI/ML, and computer vision applications.",
    tags: ["Python", "AI/ML", "Computer Vision", "Data Structures"],
  },
  {
    period: "2024",
    role: "Hackathon Winner",
    org: "PDF Reader AI",
    description: "Built an AI-powered PDF Question & Answer system that understands documents and answers user queries — won first prize at a national-level hackathon.",
    tags: ["AI", "NLP", "Document AI", "Python"],
  },
];

const DEBOUNCE_MS = 750;

// ────────────────────────────────────────────
// Single Glass Panel Card
// ────────────────────────────────────────────
interface GlassCardProps {
  data: typeof experienceData[0];
  /** 0 = active · <0 = floated up (past) · >0 = waiting below (future) */
  position: number;
}

const GlassCard: React.FC<GlassCardProps> = ({ data, position }) => {
  const isActive = position === 0;
  const isPast   = position < 0;

  return (
    <motion.div
      animate={{
        y:       isPast ? -600 : isActive ? 0 : 180,
        opacity: isActive ? 1 : 0,
        scale:   isActive ? 1 : isPast ? 0.86 : 0.94,
        z:       isActive ? 0 : isPast ? -260 : 100,
      }}
      transition={{ type: 'spring', stiffness: 60, damping: 20, mass: 0.9 }}
      className="absolute inset-x-0 mx-auto w-[90%] max-w-[800px]"
      style={{
        transformStyle: 'preserve-3d',
        zIndex:         isActive ? 10 : 0,
        pointerEvents:  isActive ? 'auto' : 'none',
      }}
    >
      <div className="relative w-full rounded-[32px] border backdrop-blur-[35px] overflow-hidden
                      bg-white/[0.05] border-white/[0.09]
                      shadow-[0_10px_40px_rgba(0,0,0,0.45),inset_0_1px_2px_rgba(255,255,255,0.1)]
                      hover:bg-white/[0.08] hover:border-white/[0.16]
                      hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_35px_rgba(0,217,255,0.18),inset_0_1px_3px_rgba(255,255,255,0.25)]
                      transition-all duration-700">

        {/* Top Edge Highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70" />

        {/* Internal Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none
                        bg-[url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')]
                        mix-blend-overlay" />

        <div className="p-8 md:p-10">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h3 className="font-['Satoshi','General_Sans',sans-serif] text-2xl md:text-[1.85rem] font-bold text-white tracking-tight mb-2 leading-tight">
                {data.role}
              </h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF]" />
                <span className="text-[#00D9FF] font-medium tracking-wide text-sm md:text-base">
                  {data.org}
                </span>
              </div>
            </div>
            <span className="font-mono text-xs tracking-[2px] text-[#A5A7B8] uppercase border border-white/10
                             px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md flex-shrink-0">
              {data.period}
            </span>
          </div>

          {/* Description */}
          <p className="text-[#A5A7B8] text-base md:text-[1.05rem] leading-relaxed mb-8 max-w-[600px]">
            {data.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2.5">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs text-white/70 px-4 py-2 rounded-xl
                           bg-white/[0.04] border border-white/[0.08] backdrop-blur-md
                           hover:bg-[#00D9FF]/20 hover:border-[#00D9FF]/50 hover:text-[#00D9FF]
                           hover:shadow-[0_0_15px_rgba(0,217,255,0.25)]
                           transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ────────────────────────────────────────────
// Main Experience Section
// ────────────────────────────────────────────
const Experience = () => {
  const cardViewportRef   = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  // Mutable refs so event handlers always see latest values
  const lockedRef          = useRef(false);
  const activeCardRef      = useRef(0);
  const lastScrollTime     = useRef(0);
  const recentlyReleasedRef = useRef(false);
  const releaseTimerRef    = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep ref in sync with state
  useEffect(() => { activeCardRef.current = activeCard; }, [activeCard]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const viewport = cardViewportRef.current;
      if (!viewport) return;

      const rect  = viewport.getBoundingClientRect();
      // "At top" = the cards viewport has just aligned with the top of the screen
      const isAtTop = rect.top >= -25 && rect.top <= 25;

      // ── Auto-lock when section snaps into view ──────────────────
      if (isAtTop && !lockedRef.current && !recentlyReleasedRef.current) {
        lockedRef.current = true;
        if (e.deltaY < 0) {
          // Entering from BELOW (scrolling up) → start at last card
          setActiveCard(experienceData.length - 1);
          activeCardRef.current = experienceData.length - 1;
        } else {
          // Entering from ABOVE (scrolling down) → start at first card
          setActiveCard(0);
          activeCardRef.current = 0;
        }
      }

      if (!lockedRef.current) return;

      const current = activeCardRef.current;
      const total   = experienceData.length;

      // ── Release cases — do NOT preventDefault so browser scrolls naturally ──
      const releasingForward = e.deltaY > 0 && current >= total - 1;
      const releasingBack    = e.deltaY < 0 && current <= 0;

      if (releasingForward || releasingBack) {
        lockedRef.current = false;
        recentlyReleasedRef.current = true;
        if (releaseTimerRef.current) clearTimeout(releaseTimerRef.current);
        releaseTimerRef.current = setTimeout(() => {
          recentlyReleasedRef.current = false;
        }, 1500);
        return; // Let browser handle this scroll event naturally
      }

      // ── Locked & not releasing — intercept the scroll ───────────
      e.preventDefault();

      const now = Date.now();
      if (now - lastScrollTime.current < DEBOUNCE_MS) return; // Debouncing

      lastScrollTime.current = now;

      if (e.deltaY > 0) {
        const next = current + 1;
        setActiveCard(next);
        activeCardRef.current = next;
      } else {
        const prev = current - 1;
        setActiveCard(prev);
        activeCardRef.current = prev;
      }
    };

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lockedRef.current) return;
      const current = activeCardRef.current;
      const total   = experienceData.length;

      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        if (current < total - 1) {
          const next = current + 1;
          setActiveCard(next);
          activeCardRef.current = next;
        } else {
          lockedRef.current = false;
        }
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        if (current > 0) {
          const prev = current - 1;
          setActiveCard(prev);
          activeCardRef.current = prev;
        } else {
          lockedRef.current = false;
        }
      }
    };

    // Reset lock when section leaves viewport entirely
    const observer = new IntersectionObserver(
      ([entry]) => { if (!entry.isIntersecting) lockedRef.current = false; },
      { threshold: 0 }
    );
    if (cardViewportRef.current) observer.observe(cardViewportRef.current);

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      observer.disconnect();
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      if (releaseTimerRef.current) clearTimeout(releaseTimerRef.current);
    };
  }, []);

  return (
    <section id="experience" className="relative w-full overflow-hidden">

      {/* Background — same as Projects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-[#6E5BFF] opacity-[0.18] blur-[150px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#00D9FF] opacity-[0.18] blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
      </div>

      {/* Section Header */}
      <div className="relative z-20 pt-[130px] pb-[60px] px-6 max-w-[1200px] mx-auto text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10
                          text-[#6E5BFF] text-sm font-mono tracking-widest uppercase mb-8
                          shadow-[0_0_15px_rgba(110,91,255,0.15)]">
            <Star size={16} />
            05 — Experience
          </div>
          <h2 className="font-['Satoshi','General_Sans',sans-serif] text-5xl md:text-7xl font-bold text-white tracking-[-0.02em] mb-6">
            Journey so far.
          </h2>
          <p className="text-[#A5A7B8] text-lg md:text-xl max-w-[600px] mx-auto font-light leading-relaxed">
            Building skills through real projects, client work, and continuous learning.
          </p>
        </ScrollReveal>
      </div>

      {/* ─── Card Viewport (exactly h-screen — this is what gets locked) ─── */}
      <div
        ref={cardViewportRef}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        style={{ perspective: '1200px' }}
      >
        {/* Left progress bar */}
        <div className="absolute left-8 top-1/4 bottom-1/4 w-[1px] bg-white/10 hidden md:block">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#00D9FF] to-[#6E5BFF] shadow-[0_0_8px_#00D9FF]"
            animate={{ height: `${((activeCard + 1) / experienceData.length) * 100}%` }}
            transition={{ type: 'spring', stiffness: 80, damping: 22 }}
          />
        </div>

        {/* Right dot navigation */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
          {experienceData.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveCard(i);
                activeCardRef.current = i;
                lockedRef.current = true;
              }}
              className={`rounded-full transition-all duration-300 ${i === activeCard
                ? 'w-[6px] h-6 bg-[#00D9FF] shadow-[0_0_10px_#00D9FF]'
                : 'w-[6px] h-[6px] bg-white/20 hover:bg-white/50'}`}
            />
          ))}
        </div>

        {/* Cards */}
        {experienceData.map((data, i) => (
          <GlassCard key={i} data={data} position={i - activeCard} />
        ))}
      </div>

    </section>
  );
};

export default Experience;
