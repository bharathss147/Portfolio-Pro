import ScrollReveal, { ScrollRevealItem } from "./ScrollReveal";

const experienceData = [
  {
    period: "2024 — Present",
    role: "Founder & Creative Director",
    org: "DEZIGNO",
    description:
      "Leading a creative studio delivering branding, graphic design, social media creatives, and web development for clients seeking premium visual identity.",
    tags: ["Branding", "UI/UX", "Web Development", "Client Management"],
  },
  {
    period: "2023 — Present",
    role: "Computer Science Engineering Student",
    org: "SNS College of Engineering",
    description:
      "Pursuing B.E. in Computer Science with focus on software development, AI/ML, and computer vision applications.",
    tags: ["Python", "C", "AI/ML", "Data Structures"],
  },
  {
    period: "2024",
    role: "Hackathon Winner",
    org: "PDF Reader AI — 1st Prize",
    description:
      "Built an AI-powered PDF Question & Answer system that understands documents and answers user queries — won first prize at a national-level hackathon.",
    tags: ["AI/LLM", "NLP", "Document QA"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative z-[2] py-[130px]">
      <div className="max-w-[1160px] mx-auto px-8">
        <ScrollReveal>
          <div className="eyebrow">05 — Experience</div>
          <h2 className="font-display text-[clamp(2rem,4vw,2.9rem)] font-semibold tracking-[-0.02em] mb-3.5 max-w-[640px]">
            Journey so far.
          </h2>
          <p className="text-[#9aa0b4] max-w-[560px] text-[1.02rem] mb-14">
            Building skills through real projects, client work, and continuous
            learning.
          </p>
        </ScrollReveal>

        <ScrollReveal stagger className="space-y-6">
          {experienceData.map((item) => (
            <ScrollRevealItem key={item.role}>
              <div
                className="glass p-[30px] cursor-default transition-all duration-[450ms] hover:-translate-y-1.5 hover:border-white/[0.16] hover:shadow-[0_24px_50px_-20px_rgba(124,92,255,0.35)]"
                style={{
                  transitionTimingFunction: "cubic-bezier(.16,.84,.44,1)",
                }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-3">
                  <div>
                    <h3 className="font-display text-[1.35rem] font-semibold">
                      {item.role}
                    </h3>
                    <span className="text-[#35e6c4] text-[0.92rem] font-medium">
                      {item.org}
                    </span>
                  </div>
                  <span className="font-mono text-[0.72rem] text-[#5c6178] whitespace-nowrap mt-1 md:mt-0">
                    {item.period}
                  </span>
                </div>
                <p className="text-[#9aa0b4] text-[0.92rem] mb-[18px]">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
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

export default Experience;
