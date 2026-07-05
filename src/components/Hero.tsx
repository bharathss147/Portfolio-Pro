import { useRef, useEffect, useState } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";

const roles = [
  "Software Developer",
  "UI/UX Designer",
  "Graphic Designer",
  "Web Developer",
  "Founder of DEZIGNO",
];

const Hero = () => {
  const typedText = useTypewriter(roles, 120, 80, 2000);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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

          {/* Typewriter */}
          <div className="text-[clamp(1rem,2vw,1.25rem)] text-[#9aa0b4] mb-[34px] min-h-[1.6em] flex items-center gap-2.5 font-medium">
            <span>{typedText}</span>
            <span className="inline-block w-0.5 h-[1.1em] bg-[#35e6c4] animate-blink" />
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
            className="glass p-[34px_30px] rounded-[26px] transition-transform duration-150 ease-out"
            style={{ transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Card top */}
            <div className="flex justify-between items-start mb-10">
              <div
                className="w-14 h-14 rounded-[16px] flex items-center justify-center font-display font-semibold text-[#04050a] text-[1.3rem]"
                style={{
                  background: "linear-gradient(135deg, #7c5cff, #35e6c4)",
                }}
              >
                BS
              </div>
              <div className="font-mono text-[0.68rem] text-[#5c6178] text-right leading-relaxed">
                ID // CSE-2028
                <br />
                COIMBATORE, IN
              </div>
            </div>

            <div className="font-display text-[1.5rem] font-semibold mb-1">
              Bharath S
            </div>
            <div className="text-[0.85rem] text-[#9aa0b4] mb-[26px]">
              Developer · Designer · Founder
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-[26px]">
              {["Python", "Figma", "UI/UX", "Branding", "OpenCV"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.68rem] px-2.5 py-[5px] rounded-lg bg-white/5 border border-white/[0.09] text-[#9aa0b4]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center border-t border-white/[0.09] pt-[18px]">
              <span className="text-[0.76rem] text-[#5c6178]">
                Founder, DEZIGNO Studio
              </span>
              <span className="font-display text-[0.95rem] font-semibold grad-text">
                est. 2024
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-[34px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#5c6178] font-mono text-[0.68rem] tracking-[0.1em]">
        <span>SCROLL</span>
        <div
          className="w-px h-[34px] animate-scroll-line"
          style={{
            background: "linear-gradient(#35e6c4, transparent)",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
