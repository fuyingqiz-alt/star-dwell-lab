import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "信仰体系", en: "Faith", href: "#faith" },
    { label: "决策咨询", en: "Strategy", href: "#strategy" },
    { label: "玄学精品", en: "Boutique", href: "#workshop" },
    { label: "关于顾问", en: "About", href: "#about" },
    { label: "联络预约", en: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-heading text-xl md:text-2xl font-semibold tracking-[0.15em] text-primary">
            STAR-DWELL LAB
          </span>
          <span className="font-heading text-xs md:text-sm text-silver tracking-[0.3em] mt-0.5">
            星 宅 所
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center text-silver hover:text-primary transition-colors duration-300"
            >
              <span className="text-xs tracking-[0.2em]">{item.label}</span>
              <span className="text-[10px] tracking-widest uppercase opacity-50 group-hover:opacity-80 transition-opacity">{item.en}</span>
            </a>
          ))}
        </nav>

        <button
          className="lg:hidden text-silver hover:text-primary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-widest text-silver hover:text-primary transition-colors duration-300 py-2"
              >
                {item.label} <span className="text-xs opacity-50 uppercase ml-2">{item.en}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
