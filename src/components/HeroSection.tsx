import { ArrowDown, ArrowUpRight, MoonStar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageProvider";
import StarChart from "./StarChart";

export default function HeroSection() {
  const { english } = useLanguage();
  return <section className="hero-section relative overflow-hidden flex items-center">
    <div className="hero-glow absolute inset-0" />
    <StarChart />
    <div className="hero-shade absolute inset-0" />
    <span className="sparkle text-xl left-[8%] top-[22%]" aria-hidden="true">✦</span>
    <span className="sparkle sparkle-violet text-2xl left-[16%] top-[64%]" style={{ animationDelay: "1.2s" }} aria-hidden="true">✧</span>
    <span className="sparkle text-sm left-[46%] top-[14%]" style={{ animationDelay: "2s" }} aria-hidden="true">✦</span>
    <span className="sparkle sparkle-violet text-lg right-[10%] top-[70%]" style={{ animationDelay: "0.6s" }} aria-hidden="true">☾</span>
    <span className="sparkle text-base right-[24%] top-[18%]" style={{ animationDelay: "2.8s" }} aria-hidden="true">✧</span>
    <div className="page-width relative z-10 py-14 md:py-20">
      <p className="eyebrow mb-8 animate-fade-up flex items-center gap-4">
        <span className="inline-block w-10 h-px bg-primary/60" aria-hidden="true" />
        STAR-DWELL LAB <span className="text-primary/70">✦</span> 星宅所
      </p>
      <h1 className="hero-title animate-fade-up">
        <span className="block text-foreground">星辰有序，</span>
        <span className="block text-gradient-gold mt-2">心宅自安。</span>
        <span lang="en" className="block mt-5 font-display italic text-foreground/80 text-[0.42em] tracking-[0.08em] leading-snug">Where the stars align, the soul finds its home.</span>
      </h1>
      <p className="hero-copy mt-8 max-w-xl animate-fade-up-delay-1">{english ? "I’m Hannah, founder of Star Dwell Lab. Through tarot, astrology dice and birth charts, I help you explore choices in career, relationships and life transitions." : "我是美柒 Hannah，星宅所主理人。我用塔罗、占星骰子和星盘，陪你梳理事业、关系和人生转折中的选择。"}</p>
      <p className="mt-6 flex items-center gap-2.5 text-primary text-sm tracking-[0.25em] animate-fade-up-delay-2">
        <MoonStar className="w-4 h-4 shrink-0" aria-hidden="true" />
        {english ? "Singapore · Online voice consultations" : "新加坡 · 线上语音咨询"}
      </p>
      <Button asChild size="lg" className="mt-10 h-12 btn-glow animate-fade-up-delay-3"><a href="#strategy">{english ? "View consultations & prices" : "查看咨询与价格"}<ArrowUpRight /></a></Button>
      <div className="mt-14 text-primary/70 flex items-center gap-4 float-subtle" aria-hidden="true"><span className="w-16 h-px bg-primary/40" /><MoonStar className="w-4 h-4 moon-ornament" /><ArrowDown className="w-4 h-4" /></div>
    </div>
  </section>;
}
