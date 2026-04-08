import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import productTalismans from "@/assets/product-talismans.jpg";
import productBowls from "@/assets/product-bowls.jpg";
import productPapyrus from "@/assets/product-papyrus.jpg";
import productBotanical from "@/assets/product-botanical.jpg";

const products = [
  {
    title: "行星七星符系列",
    en: "The 7-Star Talismans",
    desc: "核心星符产品。遵循行星时刻定制，行星逻辑的具象化载体。",
    descEn: "Core talisman collection. Custom-crafted at precise planetary hours.",
    image: productTalismans,
    link: "/workshop/talismans",
  },
  {
    title: "阿拉姆魔碗",
    en: "Aramaic Incantation Bowls",
    desc: "近东古典工艺重现。构建稳固的防护与驱动场域。",
    descEn: "Reviving ancient Near Eastern craft for protection and empowerment.",
    image: productBowls,
    link: "/workshop/bowls",
  },
  {
    title: "PGM 莎草纸玄法载体",
    en: "Papyrus Craft",
    desc: "基于希腊纸草玄法的手绘定制，意志与法则连接的精密媒介。",
    descEn: "Hand-painted works based on Greek Magical Papyri — linking will and universal law.",
    image: productPapyrus,
    link: "/workshop/papyrus",
  },
  {
    title: "系统化植物调理",
    en: "Botanical Curation",
    desc: "依据行星属性配比的自然媒介，维护个人微观气场。",
    descEn: "Natural media blended by planetary correspondences for your energy field.",
    image: productBotanical,
    link: "/workshop/botanical",
  },
];

const WorkshopSection = () => {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <section id="workshop" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-light text-primary tracking-wide">
            实体玄学载体
          </h2>
          <p className="font-heading text-lg text-silver mt-2 italic">The Metaphysics Boutique</p>
          <div className="gold-line w-24 mx-auto mt-6" />
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <Link
              to={p.link}
              key={i}
              className={`group border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-700 rounded-sm hover:glow-gold block ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: visible ? `${i * 120}ms` : "0ms" }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.en}
                  loading="lazy"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-xl text-foreground mb-1">{p.title}</h3>
                <p className="text-xs text-silver tracking-widest uppercase mb-4">{p.en}</p>
                <p className="text-foreground/70 text-sm leading-relaxed">{p.desc}</p>
                <p className="text-foreground/40 text-xs leading-relaxed mt-2 italic">{p.descEn}</p>
                <div className="flex items-center gap-2 mt-4 text-primary text-xs tracking-widest group-hover:gap-3 transition-all duration-300">
                  <span>查看详情 / View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
