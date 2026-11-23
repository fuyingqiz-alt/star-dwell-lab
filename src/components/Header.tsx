import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { english, toggle } = useLanguage();
  const location = useLocation();
  useEffect(() => { setMenuOpen(false); }, [location]);
  useEffect(() => { if (!menuOpen) return; const close = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); }; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, [menuOpen]);
  const items = [
    { zh: "咨询与价格", en: "Consultations", to: "/#strategy" },
    { zh: "客户反馈", en: "Client voices", to: "/feedback" },
    { zh: "手作与仪式", en: "Craft & rituals", to: "/workshop" },
    { zh: "关于美柒", en: "About Hannah", to: "/#about" },
  ];
  return <header className="site-header fixed inset-x-0 top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
    <div className="page-width flex items-center justify-between gap-3 h-24">
      <Link to="/" className="brand-lockup shrink-0" aria-label="Star Dwell Lab 星宅所 首页"><span className="font-heading text-lg md:text-xl text-primary">STAR-DWELL LAB</span><span className="text-sm text-primary mt-1">星宅所</span></Link>
      <nav aria-label="主导航" className="hidden lg:flex items-center gap-7">{items.map(item => <Link className="nav-link text-sm" key={item.to} to={item.to}>{english ? item.en : item.zh}</Link>)}</nav>
      <div className="flex items-center gap-2 md:gap-4">
        <Button variant="ghost" size="sm" onClick={toggle} aria-label={english ? "切换中文" : "Switch to English"} className="text-muted-foreground px-2">{english ? "中" : "EN"}</Button>
        <Button asChild size="sm" className="hidden sm:inline-flex"><Link to="/#contact">{english ? "Book" : "预约"}<ArrowUpRight /></Link></Button>
        <Button size="icon" variant="ghost" className="lg:hidden" aria-label={menuOpen ? "关闭菜单" : "打开菜单"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(value => !value)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
    </div>
    {menuOpen && <nav id="mobile-navigation" aria-label="手机导航" className="lg:hidden border-t border-border bg-background px-6 py-5 flex flex-col">{items.map(item => <Link key={item.to} className="py-4 border-b border-border text-base" to={item.to} onClick={() => setMenuOpen(false)}>{english ? item.en : item.zh}</Link>)}<Button asChild className="mt-5"><Link to="/#contact" onClick={() => setMenuOpen(false)}>{english ? "Book a consultation" : "预约"}<ArrowUpRight /></Link></Button></nav>}
  </header>;
}
