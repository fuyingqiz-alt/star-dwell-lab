import { MoonStar } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "./LanguageProvider";

const faqs = [
  { qZh: "咨询前需要准备什么？", qEn: "What should I prepare before a session?", aZh: "本命盘和年运咨询需要准确的出生日期、时间和地点；个人节奏速读只需要带着你眼前的问题来。", aEn: "For natal and year-ahead consultations, bring your exact birth date, time and place. For a rhythm reading, just bring your question." },
  { qZh: "咨询是怎么进行的？", qEn: "How does a consultation take place?", aZh: "线上通过语音进行，也可以预约线下沙龙。预约后我们会通过微信或 WhatsApp 确认具体时间和方式。", aEn: "Sessions happen by online voice call, or in person at a salon. After booking, we confirm the time and format on WeChat or WhatsApp." },
  { qZh: "可以问事业或商业上的决定吗？", qEn: "Can I ask about career or business decisions?", aZh: "可以。事业方向、合作判断、重大决策的时机，都可以结合星盘与地占一起梳理。", aEn: "Yes. Career direction, partnership decisions and timing major moves can all be explored through charts and geomancy." },
  { qZh: "咨询内容会保密吗？", qEn: "Is what I share kept confidential?", aZh: "严格保密。你分享的一切只用于本次咨询，不会对外透露。", aEn: "Strictly confidential. Everything you share stays within the session." },
];

export default function FaqSection() {
  const { english } = useLanguage();
  return <section className="section-space cosmos-band overflow-hidden"><div className="star-dust" aria-hidden="true" /><div className="page-width relative max-w-3xl">
    <div className="section-heading"><p className="eyebrow">FAQ</p><h2>{english ? "Common questions" : "常见问题"}</h2><div className="celestial-divider mt-6 justify-start" aria-hidden="true"><MoonStar className="w-4 h-4 moon-ornament" /></div></div>
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => <AccordionItem key={faq.qEn} value={`faq-${index}`} className="border-border">
        <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:text-primary">{english ? faq.qEn : faq.qZh}</AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-7">{english ? faq.aEn : faq.aZh}</AccordionContent>
      </AccordionItem>)}
    </Accordion>
  </div></section>;
}
