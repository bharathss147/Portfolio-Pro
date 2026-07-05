import ScrollReveal from "./ScrollReveal";

const services = [
  "Graphic Design",
  "Website Development",
  "UI/UX Design",
  "Branding",
  "Posters",
  "Logos",
  "Social Media Design",
];

const Dezigno = () => {
  return (
    <section id="dezigno" className="relative z-[2] py-[130px]">
      <div className="max-w-[1160px] mx-auto px-8">
        <ScrollReveal>
          <div className="eyebrow">03 — Studio</div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass p-14 max-md:p-[36px_26px] grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-center relative">
            <div>
              <div className="font-display text-[clamp(2.2rem,5vw,3.2rem)] font-bold tracking-[-0.02em] mb-3.5">
                DE<span className="grad-text">ZIGNO</span>
              </div>
              <p className="text-[#9aa0b4] mb-[22px] max-w-[420px]">
                A creative design & development studio I founded — helping
                brands and individuals stand out through thoughtful design and
                clean code.
              </p>
              <a
                href="https://www.dezigno.studio"
                target="_blank"
                rel="noopener"
                className="btn btn-ghost"
              >
                Visit dezigno.studio →
              </a>
            </div>

            <ul className="list-none grid grid-cols-2 gap-2.5">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-[0.88rem] text-[#9aa0b4] flex items-center gap-2"
                >
                  <span className="w-[5px] h-[5px] rounded-full bg-[#35e6c4] shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Dezigno;
