import { ArrowUpRight, Orbit, Moon, Sun, MoonStar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { consultations, bookingLink } from "@/data/consultations";
import { useLanguage } from "./LanguageProvider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const icons = [Moon, Orbit, Sun];
export default function StrategySection() {
  const { english } = useLanguage();
  const { ref, visible } = useScrollReveal(0.05);
  return <section id="strategy" className="section-space bg-background cosmos-band overflow-hidden"><div className="star-dust" aria-hidden="true" /><div className="page-width relative">
    <div className="section-heading"><p className="eyebrow">CONSULTATIONS</p><h2>{english ? "Consultations & prices" : "咨询与价格"}</h2><div className="celestial-divider mt-6 justify-start" aria-hidden="true"><MoonStar className="w-4 h-4 moon-ornament" /></div><p className="text-muted-foreground mt-5">{english ? "Start with the question that matters to you." : "从眼前最在意的那个问题开始。"}</p></div>
    <div ref={ref} className={`grid md:grid-cols-3 gap-5 reveal ${visible ? "is-visible" : ""}`}>
      {consultations.map((service, index) => { const Icon = icons[index]; return <article key={service.id} className="service-card border border-border bg-card rounded-sm p-7 md:p-8 flex flex-col">
        <div className="flex justify-between items-center mb-8"><Icon className="w-7 h-7 text-primary" /><span className="font-heading text-primary/70 text-sm">0{index + 1}</span></div>
        <h3 className="text-xl font-medium leading-8">{english ? service.en : service.title}</h3>
        <div className="mt-5 mb-6 flex items-baseline gap-3 flex-wrap"><span className="font-heading text-4xl text-primary">S${service.price}</span>{service.minutes && <span className="text-sm text-muted-foreground">/ {service.minutes} {english ? "minutes" : "分钟"}</span>}</div>
        <p className="text-muted-foreground text-sm leading-7 mb-8 flex-1">{english ? service.descEn : service.desc}</p>
        <Button asChild variant="outline" className="w-full h-12"><a href={bookingLink(english ? service.en : service.title)} target="_blank" rel="noopener noreferrer">{english ? "Enquire & book" : "预约咨询"}<ArrowUpRight /></a></Button>
      </article>; })}
    </div>
  </div></section>;
}
