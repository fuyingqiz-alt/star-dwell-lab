import celestial from "@/assets/celestial-orbits.png";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageProvider";

export default function HeroSection() {
  const { english } = useLanguage();
  return <section className="hero-section relative overflow-hidden flex items-center">
    <img src={celestial} alt="" className="absolute inset-x-0 bottom-0 top-auto h-[45%] w-full object-cover object-[right_top] md:h-[72%] md:object-top" fetchPriority="high" />
    <div className="hero-shade absolute inset-0" />
    <div className="page-width relative z-10 py-14 md:py-20">
      <p className="eyebrow mb-7 animate-fade-up">STAR-DWELL LAB <span className="mx-3">/</span> 星宅所</p>
      <h1 className="hero-title animate-fade-up">{english ? <>Caught at a crossroads?<br />See your choices clearly.</> : <>卡在一个决定上？<br />先把眼前的选择看清楚。</>}</h1>
      <p className="hero-copy mt-7 max-w-xl animate-fade-up-delay-1">{english ? "I’m Hannah, founder of Star Dwell Lab. Through tarot, astrology dice and birth charts, I help you explore choices in career, relationships and life transitions." : "我是美柒 Hannah，星宅所主理人。我用塔罗、占星骰子和星盘，陪你梳理事业、关系和人生转折中的选择。"}</p>
      <p className="text-primary text-sm mt-5 animate-fade-up-delay-2">{english ? "Singapore · Online voice consultations" : "新加坡 · 线上语音咨询"}</p>
      <Button asChild size="lg" className="mt-9 h-12 animate-fade-up-delay-3"><a href="#strategy">{english ? "View consultations & prices" : "查看咨询与价格"}<ArrowUpRight /></a></Button>
      <div className="mt-12 text-primary/70 flex items-center gap-4" aria-hidden="true"><span className="w-16 h-px bg-primary/40" /><ArrowDown className="w-4 h-4" /></div>
    </div>
  </section>;
}
