import { MessageCircle, MessagesSquare, CalendarCheck, MoonStar } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  { icon: MessageCircle, zh: "扫码联系", en: "Reach out", descZh: "通过微信或 WhatsApp 扫码添加美柒，简单说说你想聊的问题。", descEn: "Add Hannah on WeChat or WhatsApp and share the question on your mind." },
  { icon: MessagesSquare, zh: "沟通背景", en: "Share context", descZh: "沟通你的情况和在意的点，确认适合的咨询方式与时间。", descEn: "Talk through your situation and confirm the right consultation and timing." },
  { icon: CalendarCheck, zh: "约定时间", en: "Book your session", descZh: "线上语音或线下沙龙，按约定的时间开始你的咨询。", descEn: "Meet by online voice call or at an in-person salon at the agreed time." },
];

export default function ProcessSection() {
  const { english } = useLanguage();
  const { ref, visible } = useScrollReveal(0.05);
  return <section className="section-space bg-secondary/50 border-y border-border cosmos-band-alt overflow-hidden"><div className="star-dust" aria-hidden="true" /><div className="page-width relative">
    <div className="section-heading"><p className="eyebrow">HOW IT WORKS</p><h2>{english ? "How a consultation begins" : "预约流程"}</h2><div className="celestial-divider mt-6 justify-start" aria-hidden="true"><MoonStar className="w-4 h-4 moon-ornament" /></div></div>
    <div ref={ref} className={`grid md:grid-cols-3 gap-5 reveal ${visible ? "is-visible" : ""}`}>
      {steps.map((step, index) => <article key={step.en} className="service-card border border-border bg-card rounded-sm p-7 md:p-8">
        <div className="flex justify-between items-center mb-8"><step.icon className="w-7 h-7 text-primary" /><span className="font-heading text-primary/70 text-sm">0{index + 1}</span></div>
        <h3 className="text-xl font-medium">{english ? step.en : step.zh}</h3>
        <p className="text-muted-foreground text-sm leading-7 mt-4">{english ? step.descEn : step.descZh}</p>
      </article>)}
    </div>
  </div></section>;
}
