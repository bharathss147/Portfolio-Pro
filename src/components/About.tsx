import ScrollReveal from "./ScrollReveal";

const infoData = [
  { label: "College", value: "SNS College of Engineering" },
  { label: "Degree", value: "B.E. Computer Science" },
  { label: "Year / Semester", value: "3rd Year · 5th Sem" },
  { label: "Graduation", value: "2028" },
  { label: "CGPA", value: "7.30" },
  { label: "Location", value: "Coimbatore, TN" },
  { label: "Languages", value: "Tamil, English" },
  { label: "Studio", value: "Founder, DEZIGNO" },
];

const About = () => {
  return (
    <section id="about" className="relative z-[2] py-[130px]">
      <div className="max-w-[1160px] mx-auto px-8">
        <ScrollReveal>
          <div className="eyebrow">01 — About</div>
          <h2 className="font-display text-[clamp(2rem,4vw,2.9rem)] font-semibold tracking-[-0.02em] mb-3.5 max-w-[640px]">
            Where code meets craft.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[60px] items-start">
          <ScrollReveal>
            <div className="space-y-[18px]">
              <p className="text-[#9aa0b4] text-[1.02rem]">
                I'm{" "}
                <strong className="text-[#eceef4] font-semibold">
                  Bharath S
                </strong>
                , a third-year Computer Science Engineering student at{" "}
                <strong className="text-[#eceef4] font-semibold">
                  SNS College of Engineering, Coimbatore
                </strong>
                . My curiosity for technology grew into a genuine passion for
                software development, UI/UX design, and digital creativity.
              </p>
              <p className="text-[#9aa0b4] text-[1.02rem]">
                Alongside my academic path, I founded{" "}
                <strong className="text-[#eceef4] font-semibold">
                  DEZIGNO
                </strong>{" "}
                — a creative studio delivering graphic design, branding, social
                media creatives, and web development for clients who want more
                than a template.
              </p>
              <p className="text-[#9aa0b4] text-[1.02rem]">
                I believe in continuous learning, teamwork, and building
                technology that improves people's lives — with the long-term
                goal of becoming a software engineer and growing my own
                technology company.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-2 gap-px bg-white/[0.09] border border-white/[0.09] rounded-lg overflow-hidden">
              {infoData.map((item) => (
                <div
                  key={item.label}
                  className="bg-[#0b0d12] py-5 px-[22px]"
                >
                  <span className="block font-mono text-[0.68rem] uppercase tracking-[0.08em] text-[#5c6178] mb-1.5">
                    {item.label}
                  </span>
                  <b className="text-[0.98rem] font-semibold">{item.value}</b>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
