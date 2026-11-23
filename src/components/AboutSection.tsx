import portrait from "@/assets/hannah-portrait.jpg";
import { useLanguage } from "./LanguageProvider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function AboutSection() {
  const { english } = useLanguage();
  const { ref, visible } = useScrollReveal(0.05);
  return <section id="about" className="section-space"><div ref={ref} className={`page-width grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-20 items-center reveal ${visible ? "is-visible" : ""}`}>
    <div className="portrait-frame max-w-sm w-full mx-auto relative"><img src={portrait} alt="美柒 Hannah" loading="lazy" className="w-full aspect-[4/5] object-cover object-top" /></div>
    <div><p className="eyebrow mb-5">MEET HANNAH</p><h2 className="section-title">{english ? "About Hannah" : "关于美柒"}</h2><p className="font-heading text-3xl text-primary mt-6">美柒 Hannah</p><p className="text-muted-foreground text-sm mt-2">{english ? "Founder of Star Dwell Lab · Singapore" : "星宅所主理人 · 新加坡"}</p>
      <div className="gold-line w-24 my-7" /><p className="text-foreground/90 leading-8">{english ? "I use tarot, astrology dice and birth charts to help you make sense of choices in career, relationships and life transitions. We begin with your current question and explore what matters, at your own pace." : "我用塔罗、占星骰子和星盘，陪你梳理事业、关系和人生转折中的选择。从你眼前的问题出发，一起看清在意的事情，找到自己的节奏。"}</p>
      <p className="text-muted-foreground text-sm leading-7 mt-5">{english ? "An integrative Western Metaphysics specialist. Second-generation lineage with twenty-two years of dedicated study." : "西方玄学体系整合专家。第二代传承，二十二载研习积淀。"}</p>
    </div>
  </div></section>;
}
