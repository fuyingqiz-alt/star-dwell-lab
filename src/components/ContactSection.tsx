import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import wechatQr from "@/assets/wechat-qr.jpg";
import whatsappQr from "@/assets/whatsapp-qr.jpg";
import { Phone } from "lucide-react";

const ContactSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-light text-primary tracking-wide">
            开启私密咨询
          </h2>
          <p className="font-heading text-lg text-silver mt-2 italic">Private Concierge</p>
          <div className="gold-line w-24 mx-auto mt-6" />
          <p className="text-foreground/70 mt-6 max-w-xl mx-auto leading-relaxed text-sm">
            每一项咨询或产品的定制，均需结合您的信仰背景与特定行星时刻。仅接受提前预约。
          </p>
          <p className="text-foreground/40 mt-2 max-w-xl mx-auto leading-relaxed text-xs italic">
            Every consultation requires alignment with your faith and planetary timing. By appointment only.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="border border-border bg-card p-8 flex flex-col items-center justify-center rounded-sm hover:border-primary/30 transition-all duration-500">
            <Phone className="w-6 h-6 text-primary mb-4" />
            <p className="text-xs text-silver tracking-widest uppercase mb-4">WhatsApp / Call · 电话</p>
            <a
              href="tel:+6586806951"
              className="font-heading text-2xl text-foreground hover:text-primary transition-colors duration-300"
            >
              +65 8680 6951
            </a>
            <p className="text-muted-foreground text-xs mt-2">Singapore · 新加坡</p>
          </div>

          <div className="border border-border bg-card p-8 flex flex-col items-center justify-center rounded-sm hover:border-primary/30 transition-all duration-500">
            <div className="w-44 h-44 overflow-hidden rounded-sm mb-4 border border-border">
              <img src={whatsappQr} alt="WhatsApp QR Code" loading="lazy" width={176} height={176} className="w-full h-full object-cover" />
            </div>
            <p className="text-foreground/70 text-sm text-center">扫码添加 WhatsApp</p>
            <p className="text-silver text-xs mt-1 italic">Scan for WhatsApp</p>
          </div>

          <div className="border border-border bg-card p-8 flex flex-col items-center justify-center rounded-sm hover:border-primary/30 transition-all duration-500">
            <div className="w-44 h-44 overflow-hidden rounded-sm mb-4 border border-border">
              <img src={wechatQr} alt="WeChat QR Code" loading="lazy" width={176} height={176} className="w-full h-full object-cover" />
            </div>
            <p className="text-foreground/70 text-sm text-center">扫码添加微信</p>
            <p className="text-silver text-xs mt-1 italic">Scan for WeChat</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
