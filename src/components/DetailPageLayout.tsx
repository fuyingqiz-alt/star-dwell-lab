import { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageProvider";

interface DetailPageLayoutProps {
  children: React.ReactNode;
  backLabel?: string;
}

const cjk = /[\u4e00-\u9fff]/g;
const latin = /[A-Za-z]/g;

// Detail pages print each Chinese line next to its English line; in English mode hide the Chinese-dominant ones.
function applyLanguage(root: HTMLElement, english: boolean) {
  root.querySelectorAll<HTMLElement>("h1,h2,h3,h4,p,li,span").forEach(el => {
    if (el.dataset.langHidden) { el.hidden = false; delete el.dataset.langHidden; }
    if (!english || el.querySelector("h1,h2,h3,h4,p,li")) return;
    const text = el.textContent ?? "";
    if ((text.match(cjk)?.length ?? 0) > (text.match(latin)?.length ?? 0)) { el.hidden = true; el.dataset.langHidden = "1"; }
  });
}

const DetailPageLayout = ({ children, backLabel }: DetailPageLayoutProps) => {
  const { english, toggle } = useLanguage();
  const main = useRef<HTMLElement>(null);
  useEffect(() => { if (main.current) applyLanguage(main.current, english); }, [english, children]);
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link to="/" className="flex flex-col leading-tight">
            <span className="font-heading text-xl md:text-2xl font-semibold tracking-[0.15em] text-primary">STAR-DWELL LAB</span>
            <span className="font-heading text-xs md:text-sm text-silver tracking-[0.3em] mt-0.5">星 宅 所</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={toggle} aria-label={english ? "切换中文" : "Switch to English"} className="text-muted-foreground px-2">{english ? "中" : "EN"}</Button>
            <Link to="/" className="flex items-center gap-2 text-sm text-silver hover:text-primary transition-colors duration-300">
              <ArrowLeft className="w-4 h-4" />
              <span className="tracking-widest">{backLabel ?? (english ? "Back" : "返回首页")}</span>
            </Link>
          </div>
        </div>
      </header>
      <main ref={main} className="pt-24 pb-20">{children}</main>
      <footer className="border-t border-border py-8 text-center">
        <p className="text-xs text-silver tracking-widest">© 2026 STAR-DWELL LAB. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default DetailPageLayout;
