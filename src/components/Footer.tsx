const Footer = () => {
  return (
    <footer className="relative z-[2] border-t border-white/[0.09] py-10">
      <div className="max-w-[1160px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono text-[0.78rem] text-[#5c6178]">
          © {new Date().getFullYear()} Bharath S. All rights reserved.
        </span>
        <div className="flex gap-6">
          <a
            href="https://github.com/bharathss147"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.78rem] text-[#5c6178] transition-colors duration-300 hover:text-[#eceef4]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bharathssns/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRKVh8qU4RaCVwh5UUB%2BZHQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.78rem] text-[#5c6178] transition-colors duration-300 hover:text-[#eceef4]"
          >
            LinkedIn
          </a>
          <a
            href="mailto:bharath@example.com"
            className="font-mono text-[0.78rem] text-[#5c6178] transition-colors duration-300 hover:text-[#eceef4]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
