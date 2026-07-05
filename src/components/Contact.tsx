import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  return (
    <section id="contact" className="relative z-[2] py-[130px]">
      <div className="max-w-[1160px] mx-auto px-8">
        <ScrollReveal>
          <div className="eyebrow">06 — Contact</div>
          <h2 className="font-display text-[clamp(2rem,4vw,2.9rem)] font-semibold tracking-[-0.02em] mb-3.5 max-w-[640px]">
            Let's build something together.
          </h2>
          <p className="text-[#9aa0b4] max-w-[560px] text-[1.02rem] mb-14">
            Have a project in mind, or just want to say hello? I'm always open
            to new opportunities and conversations.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass p-10 max-w-[680px]">
            <div className="space-y-6">
              <a
                href="mailto:bharathss147@gmail.com"
                className="flex items-center gap-4 text-[#9aa0b4] transition-colors duration-300 hover:text-[#eceef4] group"
              >
                <span className="w-[42px] h-[42px] rounded-xl bg-white/[0.07] flex items-center justify-center text-lg transition-all duration-300 group-hover:bg-[rgba(53,230,196,0.1)] group-hover:text-[#35e6c4]">
                  ✉
                </span>
                <div>
                  <span className="block font-mono text-[0.68rem] uppercase tracking-[0.08em] text-[#5c6178] mb-0.5">
                    Email
                  </span>
                  <span className="text-[0.98rem] font-medium">
                    bharathss147@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/bharathssns/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRKVh8qU4RaCVwh5UUB%2BZHQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#9aa0b4] transition-colors duration-300 hover:text-[#eceef4] group"
              >
                <span className="w-[42px] h-[42px] rounded-xl bg-white/[0.07] flex items-center justify-center text-lg transition-all duration-300 group-hover:bg-[rgba(53,230,196,0.1)] group-hover:text-[#35e6c4]">
                  🔗
                </span>
                <div>
                  <span className="block font-mono text-[0.68rem] uppercase tracking-[0.08em] text-[#5c6178] mb-0.5">
                    LinkedIn
                  </span>
                  <span className="text-[0.98rem] font-medium">
                    linkedin.com/in/bharathssns
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/bharathss147"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#9aa0b4] transition-colors duration-300 hover:text-[#eceef4] group"
              >
                <span className="w-[42px] h-[42px] rounded-xl bg-white/[0.07] flex items-center justify-center text-lg transition-all duration-300 group-hover:bg-[rgba(53,230,196,0.1)] group-hover:text-[#35e6c4]">
                  💻
                </span>
                <div>
                  <span className="block font-mono text-[0.68rem] uppercase tracking-[0.08em] text-[#5c6178] mb-0.5">
                    GitHub
                  </span>
                  <span className="text-[0.98rem] font-medium">
                    github.com/bharathss147
                  </span>
                </div>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
