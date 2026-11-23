import { MessageCircle } from "lucide-react";
import { bookingLink } from "@/data/consultations";
import { visibleSocialLinks } from "@/data/social";
import { useLanguage } from "./LanguageProvider";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  const { english } = useLanguage();
  const social = visibleSocialLinks("brand");
  return <footer className="border-t border-border py-12">
    <div className="page-width grid gap-10 sm:grid-cols-2">
      <div><h2 className="footer-title">{english ? "Book a consultation" : "预约咨询"}</h2>
        <ul className="mt-4 space-y-3 text-sm">
          <li><a className="footer-link" href="/#contact"><MessageCircle className="w-4 h-4" />{english ? "WeChat (scan QR)" : "微信（扫码添加）"}</a></li>
          <li><a className="footer-link" href={bookingLink("咨询预约 / Consultation")} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4" />WhatsApp</a></li>
        </ul></div>
      {social.length > 0 && <div><h2 className="footer-title">{english ? "Follow Star Dwell Lab" : "关注星宅所"}</h2>
        <ul className="mt-4 space-y-3 text-sm">{social.map(item => <li key={item.id}><a className="footer-link" href={item.url} target="_blank" rel="noopener noreferrer"><SocialIcon id={item.id} />{item.name}</a></li>)}</ul></div>}
    </div>
    <div className="page-width mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
      <p className="font-heading text-primary text-sm tracking-widest">STAR DWELL LAB · 星宅所</p>
      <p className="mt-2">© 2026 STAR-DWELL LAB. All Rights Reserved.</p>
    </div>
  </footer>;
}
