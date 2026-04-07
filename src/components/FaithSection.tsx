const faithItems = [
  {
    title: "亚伯拉罕与一神教体系",
    subtitle: "Abrahamic & Monotheistic",
    desc: "针对基督徒使用古典诗篇秘法 (Psalm Magic)；天主教背景引入圣徒连结 (Saints Intercession)；穆斯林客户提供基于《古兰经》系统的对应方案。",
  },
  {
    title: "东方古典与区域信仰",
    subtitle: "Eastern & Regional Traditions",
    desc: "针对佛教徒运用正统佛法仪轨；印度教背景运用特定的神祇与法则进行对应。",
  },
  {
    title: "自然法则与非宗教体系",
    subtitle: "Natural Law & Secular Systems",
    desc: "调用七星魔法 (7-Star Magic)、行星频率校准、系统草药学以及希腊纸草秘法 (PGM)。",
  },
];

const FaithSection = () => (
  <section id="faith" className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-5xl font-light text-primary tracking-wide">
          多维信仰对应体系
        </h2>
        <p className="font-heading text-lg text-silver mt-2 italic">Universal Faith Alignment</p>
        <div className="gold-line w-24 mx-auto mt-6" />
        <p className="text-foreground/70 mt-6 max-w-xl mx-auto leading-relaxed text-sm">
          "我们尊重每一种信仰，并为您匹配最精准的法则。"
          真正的干预机制应当与您的底层信仰系统深度契合。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {faithItems.map((item, i) => (
          <div
            key={i}
            className="group border border-border hover:border-primary/40 bg-card/50 p-8 transition-all duration-500 hover:glow-gold rounded-sm"
          >
            <span className="text-primary/40 font-heading text-5xl font-light">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-heading text-xl text-foreground mt-4 mb-1">{item.title}</h3>
            <p className="text-xs text-silver tracking-widest uppercase mb-4">{item.subtitle}</p>
            <p className="text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FaithSection;
