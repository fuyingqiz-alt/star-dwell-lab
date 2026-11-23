import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Droplets, Flame, FlameKindling, FlaskConical, Moon, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageProvider";
import { bookingLink } from "@/data/consultations";
import spray from "@/assets/craft-spray.jpg";
import incense from "@/assets/craft-incense.jpg";
import oil from "@/assets/craft-oil.jpg";
import bottle from "@/assets/craft-witch-bottle.jpg";
import candle from "@/assets/craft-candle.jpg";
import altar from "@/assets/ritual-altar.jpg";

const products = [
  { icon: Droplets, zh: "喷雾", en: "Sprays", img: spray, d: "空间与随身使用的调和喷雾。", de: "Blended sprays for your space or to carry with you." },
  { icon: Flame, zh: "香", en: "Incense", img: incense, d: "日常静心与仪式使用的手作香。", de: "Handmade incense for quiet moments and rituals." },
  { icon: Sparkles, zh: "精油", en: "Essential oils", img: oil, d: "依据意图调配的精油。", de: "Oils blended around a personal intention." },
  { icon: FlaskConical, zh: "巫瓶", en: "Ritual bottles", img: bottle, d: "封存心意的手作巫瓶。", de: "Handmade bottles that hold an intention." },
  { icon: FlameKindling, zh: "草药蜡烛", en: "Herbal candles", img: candle, d: "手作草药蜡烛，配合意图与植物调配。", de: "Hand-poured candles blended with herbs around an intention." },
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">{products.map(p => <article key={p.en} className="image-card service-card"><div className="aspect-square overflow-hidden"><img src={p.img} alt={english ? p.en : p.zh} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" /></div><div className="p-4 md:p-5"><p.icon className="w-5 h-5 text-primary mb-3" /><h3 className="text-lg">{english ? p.en : p.zh}</h3><p className="text-muted-foreground text-sm leading-6 mt-2">{english ? p.de : p.d}</p></div></article>)}</div>
      <Button asChild size="lg" className="mt-8 h-12 w-full sm:w-auto"><a href={bookingLink(english ? "Handcrafted pieces" : "询问手作")} target="_blank" rel="noopener noreferrer">{english ? "Ask about handcrafted pieces" : "询问手作"}<ArrowUpRight /></a></Button>
    </div></section>
    <section id="rituals" className="section-space border-t border-border scroll-mt-24"><div className="page-width">
      <div className="section-heading"><h2>{english ? "Bespoke magic rituals" : "定制魔法仪式"}</h2></div>
      <div className="image-card mb-10 aspect-[16/9] md:aspect-[21/9]"><img src={altar} alt={english ? "Ritual altar with candles and planetary circle" : "烛光与行星法阵的仪式祭坛"} loading="lazy" width={1536} height={1024} className="w-full h-full object-cover" /></div>
      <div className="grid md:grid-cols-3 gap-8">
        <div><h3 className="footer-title">{english ? "Topics" : "可以咨询的主题"}</h3><ul className="mt-4 space-y-2 text-sm">{topics.map(t => <li key={t[1]}>· {english ? t[1] : t[0]}</li>)}</ul></div>
        <div><h3 className="footer-title">{english ? "How booking works" : "预约流程"}</h3><ol className="mt-4 space-y-2 text-sm">{steps.map((s, i) => <li key={s[1]}>{i + 1}. {english ? s[1] : s[0]}</li>)}</ol></div>
        <div><h3 className="footer-title">{english ? "Delivery" : "交付方式"}</h3><p className="mt-4 text-sm leading-7">{english ? "Rituals are arranged after our conversation. You receive written notes and, where relevant, a handmade piece by post or collection in Singapore. Pricing is discussed individually." : "沟通后安排仪式，完成后提供文字说明；如涉及手作物品，可在新加坡邮寄或自取。价格按个别情况沟通。"}</p></div>
      </div>
      <Button asChild size="lg" variant="outline" className="mt-8 h-12 w-full sm:w-auto"><a href={bookingLink(english ? "Bespoke ritual" : "咨询定制仪式")} target="_blank" rel="noopener noreferrer">{english ? "Enquire about a bespoke ritual" : "咨询定制仪式"}<ArrowUpRight /></a></Button>
    </div></section>
    <section id="moon" className="section-space border-t border-border scroll-mt-24"><div className="page-width">
      <div className="section-heading"><p className="eyebrow">NEW & FULL MOON</p><h2>{english ? "Monthly moon gatherings" : "每月新月 · 满月专属活动"}</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl leading-7">{english ? "Every month, Hannah hosts a small gathering around the new moon and the full moon — a quiet moment to set intentions, release what no longer serves you, and move with the rhythm of the month." : "每个月，美柒会围绕新月与满月各举办一场小型活动。在新月种下心意，在满月梳理与放下，跟着月亮的节奏过这个月。"}</p></div>
      <div className="grid md:grid-cols-2 gap-6">
        <article className="service-card p-6 md:p-8"><Moon className="w-6 h-6 text-primary mb-4" /><h3 className="text-xl">{english ? "New moon · setting intentions" : "新月 · 种下心意"}</h3><p className="text-muted-foreground text-sm leading-7 mt-3">{english ? "A guided moment to get clear on what you want to begin this month, with a simple candle ritual and a personal intention note." : "一起梳理这个月想开始的事，配合简单的蜡烛仪式，写下属于自己的心意。"}</p></article>
        <article className="service-card p-6 md:p-8"><Sparkles className="w-6 h-6 text-primary mb-4" /><h3 className="text-xl">{english ? "Full moon · release & review" : "满月 · 梳理与放下"}</h3><p className="text-muted-foreground text-sm leading-7 mt-3">{english ? "A gentle review of the month behind you — what to keep, what to let go — closing with a release ritual under the full moon." : "温和地回顾这一个月：什么值得留下，什么可以放下，以一场满月释放仪式收尾。"}</p></article>
      </div>
      <p className="text-muted-foreground text-sm mt-6">{english ? "Dates and details are announced each month. Message Hannah to join the next gathering." : "每月活动时间与安排会提前公布，想参加下一场，发消息给美柒即可。"}</p>
      <Button asChild size="lg" className="mt-6 h-12 w-full sm:w-auto"><a href={bookingLink(english ? "Moon gathering" : "新月满月活动")} target="_blank" rel="noopener noreferrer">{english ? "Join a moon gathering" : "预约新月满月活动"}<ArrowUpRight /></a></Button>
    </div></section>
  </main><Footer /></>;
}
