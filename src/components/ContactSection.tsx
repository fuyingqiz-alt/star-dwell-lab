import { Phone } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-5xl font-light text-primary tracking-wide">
          开启私密咨询
        </h2>
        <p className="font-heading text-lg text-silver mt-2 italic">Private Concierge</p>
        <div className="gold-line w-24 mx-auto mt-6" />
        <p className="text-foreground/70 mt-6 max-w-xl mx-auto leading-relaxed text-sm">
          每一项咨询或产品的定制，均需结合您的信仰背景与特定行星时刻。为了保证精确度，仅接受提前预约。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-border bg-card/40 p-10 flex flex-col items-center justify-center rounded-sm">
          <Phone className="w-6 h-6 text-primary mb-4" />
          <p className="text-xs text-silver tracking-widest uppercase mb-4">WhatsApp / Call</p>
          <a
            href="tel:+6586806951"
            className="font-heading text-2xl text-foreground hover:text-primary transition-colors duration-300"
          >
            +65 8680 6951
          </a>
          <p className="text-muted-foreground text-xs mt-2">Singapore</p>
        </div>

        <div className="border border-border bg-card/40 p-10 flex flex-col items-center justify-center rounded-sm">
          <div className="w-48 h-48 border border-primary/20 rounded-sm flex items-center justify-center mb-4 bg-secondary/30">
            <p className="text-muted-foreground text-xs text-center px-4">WeChat QR Code<br />Placeholder</p>
          </div>
          <p className="text-foreground/70 text-sm text-center leading-relaxed">
            扫码添加 Hannah，开启私属逻辑采样之旅
          </p>
          <p className="text-silver text-xs mt-2 italic">Scan WeChat QR Code to Connect</p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
