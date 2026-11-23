import wechatQr from "@/assets/wechat-qr.jpg";
import whatsappQr from "@/assets/whatsapp-qr.jpg";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingLink } from "@/data/consultations";
import { useLanguage } from "./LanguageProvider";
import ImageZoom from "./ImageZoom";

export default function ContactSection() {
  const { english } = useLanguage();
  return <section id="contact" className="section-space border-t border-border bg-secondary/50"><div className="page-width grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
    <div><p className="eyebrow mb-5">LET’S TALK</p><h2 className="section-title">{english ? "Make time for your question." : <>把你的问题，<br />留一点时间好好聊。</>}</h2><p className="text-muted-foreground leading-7 mt-6">{english ? "Message Hannah on WeChat or WhatsApp to discuss your question and arrange an online voice consultation." : "通过微信或 WhatsApp 联系美柒，沟通你想咨询的问题，预约线上语音咨询。"}</p>
      <Button asChild size="lg" className="mt-8 h-12"><a href={bookingLink("咨询预约 / Consultation")} target="_blank" rel="noopener noreferrer"><MessageCircle />{english ? "Book on WhatsApp" : "WhatsApp 预约"}<ArrowUpRight /></a></Button>
      <p className="text-primary mt-5 text-sm">+65 8680 6951 <span className="text-muted-foreground ml-2">{english ? "Singapore" : "新加坡"}</span></p>
    </div>
    <div className="grid grid-cols-2 gap-4 md:gap-8">
      {[{ src: wechatQr, title: "微信", en: "WeChat" }, { src: whatsappQr, title: "WhatsApp", en: "WhatsApp" }].map(item => <div key={item.en} className="text-center min-w-0"><div className="qr-surface p-3 md:p-4 rounded-sm"><ImageZoom src={item.src} label={`${item.en} 二维码 / QR code`} className="w-full aspect-square" /></div><p className="text-sm mt-4">{english ? item.en : item.title}</p><p className="text-muted-foreground text-xs mt-1">{english ? "Scan to connect" : "扫码联系美柒"}</p></div>)}
    </div>
  </div></section>;
}
