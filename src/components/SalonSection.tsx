import { ArrowUpRight, Sparkles, MoonStar, Hand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingLink } from "@/data/consultations";
import { useLanguage } from "./LanguageProvider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const salons = [
  {
    icon: Sparkles,
    zh: "占星沙龙",
    en: "Astrology Salon",
    descZh: "小规模的线下聚会，围绕星盘、行运与当下天象，一起聊聊星星如何照进日常。适合想入门占星、或想深入理解自己星盘的你。",
    descEn: "A small in-person gathering around birth charts, transits and the current sky — how the stars speak to everyday life. For the curious and the committed alike.",
  },
  {
    icon: Hand,
    zh: "手作沙龙",
    en: "Craft Salon",
    descZh: "亲手做一件属于自己的心意之物：喷雾、香、草药蜡烛或巫瓶。在轻松的下午，把心意揉进手作里，带回家慢慢用。",
    descEn: "Craft something of your own — a spray, incense, a herbal candle or a ritual bottle. An unhurried afternoon of making, with something personal to take home.",
  },
];

export default function SalonSection() {
  const { english } = useLanguage();
  const { ref, visible } = useScrollReveal(0.05);
  return <section id="salon" className="section-space cosmos-band overflow-hidden"><div className="star-dust" aria-hidden="true" /><div className="page-width relative">
    <div className="section-heading"><p className="eyebrow">SALONS</p><h2>{english ? "In-person salons in Singapore" : "线下沙龙"}</h2><div className="celestial-divider mt-6 justify-start" aria-hidden="true"><MoonStar className="w-4 h-4 moon-ornament" /></div><p className="text-muted-foreground mt-5">{english ? "Beyond online consultations — small gatherings where we meet, learn and make things together. Dates are arranged case by case, so ask about the next session." : "除了线上咨询，也有小规模的线下聚会，一起见面、学习和动手。沙龙档期不固定，欢迎先咨询下期安排。"}</p></div>
    <div ref={ref} className={`grid md:grid-cols-2 gap-5 reveal ${visible ? "is-visible" : ""}`}>
      {salons.map(salon => <article key={salon.en} className="service-card border border-border bg-card rounded-sm p-7 md:p-10 flex flex-col">
        <salon.icon className="w-8 h-8 text-primary mb-8" />
        <h3 className="text-2xl font-medium">{english ? salon.en : salon.zh}</h3>
        <p className="text-muted-foreground text-sm leading-7 mt-5 flex-1">{english ? salon.descEn : salon.descZh}</p>
        <Button asChild variant="outline" className="mt-8 w-full h-12"><a href={bookingLink(english ? salon.en : salon.zh)} target="_blank" rel="noopener noreferrer">{english ? "Ask about the next salon" : "咨询下期沙龙"}<ArrowUpRight /></a></Button>
      </article>)}
    </div>
  </div></section>;
}
