import ScrollReveal, { ScrollRevealItem } from "./ScrollReveal";

const projectsData = [
  {
    num: "01",
    title: "BLINKOZ",
    description:
      "AI-powered eye tracking software enabling cursor movement and mouse clicks using eye blinks — built to improve accessibility and human-computer interaction.",
    stack: ["Python", "OpenCV", "MediaPipe"],
  },
  {
    num: "02",
    title: "VOXTEND",
    description:
      "Offline voice recognition and multilingual translation app that converts speech into translated text through an intuitive interface.",
    stack: ["Speech Recognition", "Translation"],
  },
  {
    num: "03",
    title: "WORLD COIN",
    description:
      "A concept project exploring modern digital currency, fintech UI, and a blockchain-inspired user experience.",
    stack: ["Fintech UI", "Concept Design"],
  },
  {
    num: "04",
    title: "PDF Reader AI",
    description:
      "An AI-powered PDF Question & Answer system that understands documents and answers user queries efficiently.",
    stack: ["AI/LLM", "Document QA"],
    award: "🏆 1st Prize — Hackathon",
  },
  {
    num: "05",
    title: "DEZIGNO Website",
    description:
      "Designed and developed a modern portfolio and service website showcasing branding, graphic design, UI/UX, and web development services.",
    stack: ["Web Design", "Branding"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative z-[2] py-[130px]">
      <div className="max-w-[1160px] mx-auto px-8">
        <ScrollReveal>
          <div className="eyebrow">04 — Projects</div>
          <h2 className="font-display text-[clamp(2rem,4vw,2.9rem)] font-semibold tracking-[-0.02em] mb-3.5 max-w-[640px]">
            Selected work.
          </h2>
          <p className="text-[#9aa0b4] max-w-[560px] text-[1.02rem] mb-14">
            Projects that pair applied engineering with real usability.
          </p>
        </ScrollReveal>

        <ScrollReveal stagger className="grid grid-cols-1 lg:grid-cols-2 gap-[22px]">
          {projectsData.map((project) => (
            <ScrollRevealItem key={project.num}>
              <div className="glass p-[30px] cursor-default transition-all duration-[450ms] hover:-translate-y-1.5 hover:border-white/[0.16] hover:shadow-[0_24px_50px_-20px_rgba(124,92,255,0.35)]"
                style={{ transitionTimingFunction: "cubic-bezier(.16,.84,.44,1)" }}
              >
                <div className="flex justify-between items-start mb-[18px]">
                  <span className="font-mono text-[0.72rem] text-[#5c6178]">
                    {project.num}
                  </span>
                  {project.award && (
                    <span className="text-[0.68rem] font-mono bg-[rgba(53,230,196,0.1)] text-[#35e6c4] px-2.5 py-1 rounded-full border border-[rgba(53,230,196,0.25)]">
                      {project.award}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-[1.35rem] mb-2.5 font-semibold">
                  {project.title}
                </h3>
                <p className="text-[#9aa0b4] text-[0.92rem] mb-[18px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.68rem] text-[#5c6178] px-2.5 py-1 border border-white/[0.09] rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
