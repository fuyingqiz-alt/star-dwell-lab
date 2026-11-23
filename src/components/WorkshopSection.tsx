import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageProvider";
import botanical from "@/assets/product-botanical.jpg";
import bowls from "@/assets/product-bowls.jpg";

export default function WorkshopSection() {
  const { english } = useLanguage();
  return <section id="workshop" className="section-space bg-secondary/50 border-y border-border"><div className="page-width">
    <div className="section-heading"><p className="eyebrow">CRAFT & RITUAL</p><h2>{english ? "Handmade pieces & personal rituals" : "手作与仪式"}</h2></div>
    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
      {[{ image: botanical, title: "手作产品", en: "Handcrafted pieces", desc: "喷雾、香、精油与巫瓶，让日常有一份属于自己的心意。", descEn: "Sprays, incense, essential oils and ritual bottles — a personal intention for everyday life.", hash: "handmade" }, { image: bowls, title: "定制仪式", en: "Bespoke rituals", desc: "围绕你关心的主题，先沟通，再讨论合适的仪式与安排。", descEn: "Begin with a conversation about your intentions, then explore a fitting ritual and arrangement.", hash: "rituals" }].map(item => <div key={item.hash}>
      <Link to={`/workshop#${item.hash}`} className="block aspect-[16/9] overflow-hidden mb-6"><img src={item.image} alt={english ? "Craft tradition illustration" : "手作传统示意图"} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" /></Link>
      <h3 className="text-2xl">{english ? item.en : item.title}</h3><p className="text-muted-foreground text-sm leading-7 mt-4">{english ? item.descEn : item.desc}</p>
      <Button asChild variant="link" className="mt-4 px-0"><Link to={`/workshop#${item.hash}`}>{english ? "Explore" : "了解更多"}<ArrowUpRight /></Link></Button>
    </div>)}
    </div>
  </div></section>;
}
