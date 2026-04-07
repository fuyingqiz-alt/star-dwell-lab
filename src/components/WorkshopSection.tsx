const products = [
  {
    title: "行星七星符系列",
    en: "The 7-Star Talismans",
    desc: "核心星符产品。遵循行星时刻定制，行星逻辑的具象化载体。",
  },
  {
    title: "阿拉姆魔碗",
    en: "Aramaic Incantation Bowls",
    desc: "近东古典工艺重现。构建稳固的防护与驱动场域。",
  },
  {
    title: "PGM 莎草纸秘法载体",
    en: "Papyrus Craft",
    desc: "基于希腊纸草秘法的手绘定制，意志与法则连接的精密媒介。",
  },
  {
    title: "系统化植物调理",
    en: "Botanical Curation",
    desc: "依据行星属性配比的自然媒介，维护个人微观气场。",
  },
];

const WorkshopSection = () => (
  <section id="workshop" className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-5xl font-light text-primary tracking-wide">
          实体秘术载体
        </h2>
        <p className="font-heading text-lg text-silver mt-2 italic">The Occult Boutique</p>
        <div className="gold-line w-24 mx-auto mt-6" />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="group border border-border bg-card/30 overflow-hidden hover:border-primary/30 transition-all duration-500 rounded-sm"
          >
            <div className="aspect-[16/9] bg-secondary/50 flex items-center justify-center border-b border-border">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto border border-primary/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-primary/60 font-heading text-lg">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="text-muted-foreground text-xs tracking-widest uppercase">{p.en}</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-heading text-xl text-foreground mb-1">{p.title}</h3>
              <p className="text-xs text-silver tracking-widest uppercase mb-4">{p.en}</p>
              <p className="text-foreground/60 text-sm leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkshopSection;
