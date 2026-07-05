import { useEffect, useRef } from "react";
import ScrollReveal, { ScrollRevealItem } from "./ScrollReveal";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillCategories = [
  {
    icon: "💻",
    title: "Programming & Dev",
    skills: [
      { name: "C", level: "Core", width: 78 },
      { name: "Python", level: "Applied — CV & AI", width: 65 },
      { name: "Web & App Development", level: "Building", width: 72 },
    ],
  },
  {
    icon: "🧩",
    title: "UI / UX Design",
    skills: [
      { name: "Wireframing & Prototyping", level: "Core", width: 85 },
      { name: "Interface Design", level: "Advanced", width: 88 },
      { name: "Experience Design", level: "Advanced", width: 80 },
    ],
  },
  {
    icon: "🎨",
    title: "Graphic Design",
    skills: [
      { name: "Brand Identity & Logo", level: "Core", width: 90 },
      { name: "Poster & Social Creatives", level: "Advanced", width: 86 },
      { name: "Video Editing", level: "Working", width: 60 },
    ],
  },
  {
    icon: "🤝",
    title: "Soft Skills",
    skills: [
      { name: "Client Management", level: "Founder-tested", width: 82 },
      { name: "Leadership & Teamwork", level: "Strong", width: 84 },
      { name: "Adaptability", level: "Strong", width: 88 },
    ],
  },
];

const tools = [
  "Figma",
  "Adobe Photoshop",
  "Canva",
  "FlutterFlow",
  "After Effects",
  "Git & GitHub",
  "VS Code",
  "OS & Software Troubleshooting",
];

const SkillCard = ({
  category,
}: {
  category: (typeof skillCategories)[0];
}) => {
  const { ref, isVisible } = useScrollReveal();
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && barsRef.current) {
      const bars = barsRef.current.querySelectorAll<HTMLDivElement>(".bar-fill");
      bars.forEach((bar) => {
        const w = bar.dataset.width;
        if (w) bar.style.width = w + "%";
      });
    }
  }, [isVisible]);

  return (
    <div ref={ref} className="glass p-7" ref-trigger="true">
      <h3 className="font-display text-[1.15rem] mb-5 flex items-center gap-2.5 font-semibold">
        <span className="w-[34px] h-[34px] rounded-[10px] bg-white/[0.07] flex items-center justify-center text-base">
          {category.icon}
        </span>
        {category.title}
      </h3>
      <div ref={barsRef} className="space-y-4">
        {category.skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between text-[0.85rem] mb-[7px] text-[#9aa0b4]">
              <b className="text-[#eceef4] font-medium">{skill.name}</b>
              <span>{skill.level}</span>
            </div>
            <div className="bar-track">
              <div className="bar-fill" data-width={skill.width} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative z-[2] py-[130px]">
      <div className="max-w-[1160px] mx-auto px-8">
        <ScrollReveal>
          <div className="eyebrow">02 — Skills</div>
          <h2 className="font-display text-[clamp(2rem,4vw,2.9rem)] font-semibold tracking-[-0.02em] mb-3.5 max-w-[640px]">
            A dual toolkit — engineering and design.
          </h2>
          <p className="text-[#9aa0b4] max-w-[560px] text-[1.02rem] mb-14">
            From wireframe to working software, I move across the full stack of
            building digital products.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <SkillCard key={cat.title} category={cat} />
          ))}
        </div>

        <ScrollReveal className="mt-14">
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="font-mono text-[0.82rem] px-[18px] py-2.5 rounded-full bg-white/[0.045] border border-white/[0.09] text-[#9aa0b4] transition-all duration-300 hover:text-[#eceef4] hover:border-[#35e6c4] hover:-translate-y-[3px] cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;
