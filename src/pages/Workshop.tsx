import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Droplets, Flame, FlaskConical, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageProvider";
import { bookingLink } from "@/data/consultations";

const products = [
  { icon: Droplets, zh: "喷雾", en: "Sprays", d: "空间与随身使用的调和喷雾。", de: "Blended sprays for your space or to carry with you." },
  { icon: Flame, zh: "香", en: "Incense", d: "日常静心与仪式使用的手作香。", de: "Handmade incense for quiet moments and rituals." },
  { icon: Sparkles, zh: "精油", en: "Essential oils", d: "依据意图调配的精油。", de: "Oils blended around a personal intention." },
  { icon: FlaskConical, zh: "巫瓶", en: "Ritual bottles", d: "封存心意的手作巫瓶。", de: "Handmade bottles that hold an intention." },
];
const topics = [["事业与工作转折", "Career and work transitions"], ["关系与情感", "Relationships"], ["居家与空间", "Home and space"], ["新阶段的开始", "Starting a new chapter"]];
const steps = [["发消息说明你的主题", "Message Hannah about your intention"], ["沟通细节与合适的方式", "Talk through details and a fitting approach"], ["确认安排与时间", "Confirm the arrangement and timing"], ["完成仪式并交付说明", "Ritual completed, with notes delivered"]];

export default function Workshop() {
  const { english } = useLanguage();
  const { hash } = useLocation();
  useEffect(() => { if (hash) document.getElementById(hash.slice(1))?.scrollIntoView(); else window.scrollTo(0, 0); }, [hash]);
  return <><Header /><main className="pt-28">
    <div className="page-width pb-10"><Button asChild variant="link" className="px-0"><Link to="/"><ArrowLeft />{english ? "Home" : "返回首页"}</Link></Button>
      <p className="eyebrow mt-6">CRAFT & RITUAL</p><h1 className="page-title">{english ? "Craft & rituals" : "手作与仪式"}</h1></div>
    <section id="handmade" className="section-space border-t border-border scroll-mt-24"><div className="page-width">
      <div className="section-heading"><h2>{english ? "Handcrafted pieces" : "手作产品"}</h2><p className="text-muted-foreground mt-4">{english ? "Prices on enquiry." : "价格请咨询。"}</p></div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">{products.map(p => <article key={p.en} className="service-card border border-border bg-card rounded-sm p-5"><p.icon className="w-6 h-6 text-primary mb-5" /><h3 className="text-lg">{english ? p.en : p.zh}</h3><p className="text-muted-foreground text-sm leading-6 mt-2">{english ? p.de : p.d}</p></article>)}</div>
      <Button asChild size="lg" className="mt-8 h-12 w-full sm:w-auto"><a href={bookingLink(english ? "Handcrafted pieces" : "询问手作")} target="_blank" rel="noopener noreferrer">{english ? "Ask about handcrafted pieces" : "询问手作"}<ArrowUpRight /></a></Button>
    </div></section>
    <section id="rituals" className="section-space border-t border-border scroll-mt-24"><div className="page-width">
      <div className="section-heading"><h2>{english ? "Bespoke rituals" : "定制仪式"}</h2></div>
      <div className="grid md:grid-cols-3 gap-8">
        <div><h3 className="footer-title">{english ? "Topics" : "可以咨询的主题"}</h3><ul className="mt-4 space-y-2 text-sm">{topics.map(t => <li key={t[1]}>· {english ? t[1] : t[0]}</li>)}</ul></div>
        <div><h3 className="footer-title">{english ? "How booking works" : "预约流程"}</h3><ol className="mt-4 space-y-2 text-sm">{steps.map((s, i) => <li key={s[1]}>{i + 1}. {english ? s[1] : s[0]}</li>)}</ol></div>
        <div><h3 className="footer-title">{english ? "Delivery" : "交付方式"}</h3><p className="mt-4 text-sm leading-7">{english ? "Rituals are arranged after our conversation. You receive written notes and, where relevant, a handmade piece by post or collection in Singapore. Pricing is discussed individually." : "沟通后安排仪式，完成后提供文字说明；如涉及手作物品，可在新加坡邮寄或自取。价格按个别情况沟通。"}</p></div>
      </div>
      <Button asChild size="lg" variant="outline" className="mt-8 h-12 w-full sm:w-auto"><a href={bookingLink(english ? "Bespoke ritual" : "咨询定制仪式")} target="_blank" rel="noopener noreferrer">{english ? "Enquire about a bespoke ritual" : "咨询定制仪式"}<ArrowUpRight /></a></Button>
    </div></section>
  </main><Footer /></>;
}
