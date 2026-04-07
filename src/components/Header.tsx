import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "信仰体系", href: "#faith" },
    { label: "决策咨询", href: "#strategy" },
    { label: "秘术工坊", href: "#workshop" },
    { label: "关于顾问", href: "#about" },
    { label: "联络预约", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="font-heading text-xl md:text-2xl font-semibold tracking-wide text-primary">
          STAR-DWELL LAB <span className="text-silver text-base font-normal">| 星宅所</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-widest uppercase text-silver hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+6586806951"
            className="hidden sm:flex items-center gap-2 border border-primary/40 text-primary px-4 py-2 text-sm tracking-wide hover:bg-primary/10 transition-all duration-300 rounded-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            +65 8680 6951
          </a>
          <button
            className="lg:hidden text-silver hover:text-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-widest uppercase text-silver hover:text-primary transition-colors duration-300 py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+6586806951"
              className="sm:hidden flex items-center gap-2 text-primary text-sm py-2"
            >
              <Phone className="w-3.5 h-3.5" />
              +65 8680 6951
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
