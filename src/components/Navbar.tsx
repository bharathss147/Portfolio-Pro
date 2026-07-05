import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Dezigno", href: "#dezigno" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scrollspy
  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        id="siteHeader"
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 border-b ${
          scrolled
            ? "py-3 border-white/[0.09] bg-[#06070a]/65 backdrop-blur-[16px] backdrop-saturate-[140%]"
            : "py-[18px] border-transparent"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(.16,.84,.44,1)",
        }}
      >
        <div className="max-w-[1160px] mx-auto px-8">
          <nav className="flex items-center justify-between">
            <a
              href="#top"
              className="font-display font-semibold text-[1.1rem] flex items-center gap-2 tracking-tight"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #7c5cff, #35e6c4)",
                  boxShadow: "0 0 10px #35e6c4",
                }}
              />
              Bharath S
            </a>

            {/* Desktop nav */}
            <ul className="hidden md:flex gap-0.5 list-none">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`text-[0.86rem] px-4 py-2 rounded-full transition-all duration-300 ${
                      activeSection === item.href
                        ? "text-[#eceef4] bg-white/[0.045]"
                        : "text-[#9aa0b4] hover:text-[#eceef4] hover:bg-white/[0.045]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="hidden md:inline-flex text-[0.82rem] px-[18px] py-[9px] rounded-full font-semibold text-[#04050a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_#7c5cff33]"
              style={{
                background: "linear-gradient(135deg, #7c5cff, #35e6c4)",
              }}
            >
              Let's talk
            </a>

            <button
              className="md:hidden bg-transparent border-none text-[#eceef4] text-xl cursor-pointer"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[1500] flex flex-col items-center justify-center gap-7 transition-all duration-400 ${
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{
          background: "rgba(6,7,10,0.97)",
          backdropFilter: "blur(10px)",
          transitionTimingFunction: "cubic-bezier(.16,.84,.44,1)",
        }}
      >
        <button
          className="absolute top-[26px] right-8 text-xl bg-transparent border-none text-[#eceef4] cursor-pointer"
          onClick={closeMobile}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-display text-[1.6rem] text-[#eceef4] hover:text-[#35e6c4] transition-colors"
            onClick={closeMobile}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
