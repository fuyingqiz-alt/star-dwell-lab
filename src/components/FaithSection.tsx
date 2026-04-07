import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const faithItems = [
  {
    title: "亚伯拉罕与一神教体系",
    subtitle: "Abrahamic & Monotheistic",
    desc: "针对基督徒使用古典诗篇玄法 (Psalm Magic)；天主教背景引入圣徒连结 (Saints Intercession)；穆斯林客户提供基于《古兰经》系统的对应方案。",
    descEn: "For Christians: Classical Psalm Magic. For Catholics: Saints Intercession. For Muslims: Quranic-based alignment solutions.",
  },
  {
    title: "东方古典与区域信仰",
    subtitle: "Eastern & Regional Traditions",
    desc: "针对佛教徒运用正统佛法仪轨；印度教背景运用特定的神祇与法则进行对应。",
    descEn: "For Buddhists: Orthodox Buddhist ritual protocols. For Hindus: deity-specific and dharmic alignments.",
  },
  {
    title: "自然法则与非宗教体系",
    subtitle: "Natural Law & Secular Systems",
    desc: "调用七星魔法 (7-Star Magic)、行星频率校准、系统草药学以及希腊纸草玄法 (PGM)。",
    descEn: "Utilising 7-Star Magic, planetary frequency calibration, systematic herbalism, and Greek Magical Papyri (PGM).",
  },
];

const FaithSection = () => {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();
  const { ref: cardsRef, visible: cardsVisible } = useScrollReveal(0.1);

  return (
    <section id="faith" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-light text-primary tracking-wide">
            多维信仰对应体系
          </h2>
          <p className="font-heading text-lg text-silver mt-2 italic">Universal Faith Alignment</p>
          <div className="gold-line w-24 mx-auto mt-6" />
          <p className="text-foreground/70 mt-6 max-w-xl mx-auto leading-relaxed text-sm">
            "我们尊重每一种信仰，并为您匹配最精准的法则。"
          </p>
          <p className="text-foreground/50 mt-1 max-w-xl mx-auto leading-relaxed text-xs italic">
            "We honour every faith and match you with the most precise metaphysical framework."
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          {faithItems.map((item, i) => (
            <div
              key={i}
              className={`group border border-border hover:border-primary/40 bg-card p-8 transition-all duration-700 hover:glow-gold rounded-sm ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: cardsVisible ? `${i * 150}ms` : "0ms" }}
            >
              <span className="text-primary/25 font-heading text-5xl font-light">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-xl text-foreground mt-4 mb-1">{item.title}</h3>
              <p className="text-xs text-silver tracking-widest uppercase mb-4">{item.subtitle}</p>
              <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
              <p className="text-foreground/40 text-xs leading-relaxed mt-3 italic">{item.descEn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaithSection;
