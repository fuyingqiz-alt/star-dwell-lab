import DetailPageLayout from "@/components/DetailPageLayout";
import productBotanical from "@/assets/product-botanical.jpg";

const categories = [
  {
    name: "古典魔药学",
    en: "Classical Potion Craft",
    desc: "基于中世纪与文艺复兴时期的古典配方体系，严格遵循行星属性与元素对应关系调配。每一剂魔药都是植物智慧与行星法则的精密结合。",
    descEn: "Based on medieval and Renaissance-era classical formularies, meticulously blended according to planetary attributes and elemental correspondences. Each potion is a precision fusion of botanical wisdom and planetary law.",
  },
  {
    name: "Hoodoo 根工与民间魔法",
    en: "Hoodoo Rootwork & Folk Magic",
    desc: "源自非裔美洲的根工传统 (Rootwork)。运用特定的根茎、矿物与天然油脂，针对实际生活场景——招财、爱情、保护、清障——进行高效的能量干预。",
    descEn: "Rooted in African-American Rootwork traditions. Employing specific roots, minerals, and natural oils for highly effective energy interventions in real-life scenarios — wealth, love, protection, and obstacle clearing.",
  },
  {
    name: "草药魔法与自然魔法",
    en: "Herbal Magic & Natural Sorcery",
    desc: "系统化运用植物的内在灵性属性。通过烟熏、浸泡、研磨与仪式化应用，激活植物中蕴藏的行星频率与元素力量，实现空间净化、个人增强与目标校准。",
    descEn: "Systematically harnessing the innate spiritual properties of plants. Through fumigation, infusion, grinding, and ritual application, activating planetary frequencies and elemental forces within botanicals for spatial cleansing, personal empowerment, and goal alignment.",
  },
  {
    name: "蜡烛魔法",
    en: "Candle Magic",
    desc: "以行星色彩对应、精油涂抹 (Dressing) 与特定符文刻写为基础的蜡烛仪式体系。火焰作为意志的载体，将您的意图以最直接的方式传导至目标频率。",
    descEn: "A candle ritual system built on planetary colour correspondences, oil dressing, and specific sigil carving. Flame as the carrier of will, channelling your intention to the target frequency in the most direct manner.",
  },
];

const BotanicalDetail = () => (
  <DetailPageLayout>
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-16">
        <div className="aspect-[21/9] max-w-3xl mx-auto mb-12 overflow-hidden rounded-sm">
          <img src={productBotanical} alt="Botanical Curation" className="w-full h-full object-cover" />
        </div>
        <h1 className="font-heading text-3xl md:text-5xl font-light text-primary tracking-wide">
          系统化植物调理
        </h1>
        <p className="font-heading text-lg text-silver mt-2 italic">Botanical Curation & Ritual Herbalism</p>
        <div className="gold-line w-24 mx-auto mt-6" />
        <p className="text-foreground/70 mt-6 max-w-2xl mx-auto leading-relaxed text-sm">
          依据行星属性配比的自然媒介体系。我们将古典魔药学、Hoodoo 根工传统、草药魔法与蜡烛魔法进行系统整合，为您构建一套完整的植物能量调理方案。
        </p>
        <p className="text-foreground/50 mt-2 max-w-2xl mx-auto leading-relaxed text-xs italic">
          A natural media system blended by planetary correspondences. We systematically integrate classical potion craft, Hoodoo rootwork, herbal magic, and candle magic into a comprehensive botanical energy curation programme.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((c, i) => (
          <div
            key={i}
            className="border border-border bg-card p-8 hover:border-primary/30 transition-all duration-500 rounded-sm hover:glow-gold"
          >
            <span className="text-primary/25 font-heading text-4xl font-light">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-heading text-xl text-foreground mt-3 mb-1">{c.name}</h3>
            <p className="text-xs text-silver tracking-widest uppercase mb-4">{c.en}</p>
            <p className="text-foreground/70 text-sm leading-relaxed">{c.desc}</p>
            <p className="text-foreground/40 text-xs leading-relaxed mt-3 italic">{c.descEn}</p>
          </div>
        ))}
      </div>
    </div>
  </DetailPageLayout>
);

export default BotanicalDetail;
