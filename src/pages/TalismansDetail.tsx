import DetailPageLayout from "@/components/DetailPageLayout";
import productTalismans from "@/assets/product-talismans.jpg";

const planets = [
  {
    name: "太阳 / The Sun ☉",
    keywords: "权威 · 领导力 · 荣耀 · 生命力",
    keywordsEn: "Authority · Leadership · Glory · Vitality",
    desc: "太阳星符为佩戴者注入核心权威能量，增强个人影响力与领导魅力。适用于需要在团队或公众面前展现决断力的企业主与高管。",
    descEn: "The Solar talisman infuses the wearer with sovereign authority, amplifying personal influence and leadership charisma. Ideal for executives and founders who need decisive presence.",
  },
  {
    name: "月亮 / The Moon ☽",
    keywords: "直觉 · 情感 · 潜意识 · 守护",
    keywordsEn: "Intuition · Emotion · Subconscious · Protection",
    desc: "月亮星符深化直觉感知力，稳定情绪波动，在不确定的局势中守护佩戴者的内在平衡与判断力。",
    descEn: "The Lunar talisman deepens intuitive perception, stabilises emotional fluctuations, and guards inner equilibrium amid uncertainty.",
  },
  {
    name: "木星 / Jupiter ♃",
    keywords: "扩张 · 财富 · 智慧 · 正义",
    keywordsEn: "Expansion · Wealth · Wisdom · Justice",
    desc: "木星星符是财富与机遇的核心驱动力。助力商业拓展、投资决策，以及法律与谈判中的有利局面。",
    descEn: "The Jovian talisman is the core driver of wealth and opportunity — empowering business expansion, investment decisions, and favourable legal outcomes.",
  },
  {
    name: "火星 / Mars ♂",
    keywords: "行动力 · 勇气 · 竞争 · 防御",
    keywordsEn: "Action · Courage · Competition · Defence",
    desc: "火星星符赋予果断的行动力与坚定的意志力。适用于面临激烈竞争、需要攻克困局或抵御外部威胁的场景。",
    descEn: "The Martial talisman bestows decisive action and unwavering willpower. Suited for intense competition, breaking through obstacles, or defending against external threats.",
  },
  {
    name: "水星 / Mercury ☿",
    keywords: "沟通 · 商业 · 智识 · 灵活",
    keywordsEn: "Communication · Commerce · Intellect · Agility",
    desc: "水星星符优化一切与沟通、交易和智识相关的活动。增强谈判技巧、商业嗅觉与信息整合能力。",
    descEn: "The Mercurial talisman optimises all communication, trade, and intellectual activities — sharpening negotiation, commercial acumen, and information synthesis.",
  },
  {
    name: "金星 / Venus ♀",
    keywords: "和谐 · 人际 · 美感 · 吸引力",
    keywordsEn: "Harmony · Relationships · Beauty · Attraction",
    desc: "金星星符构建和谐的人际磁场，增强社交魅力与亲和力。适用于需要维系重要合作关系或提升个人品牌美感的场景。",
    descEn: "The Venusian talisman builds a harmonious interpersonal field, enhancing social magnetism and affability — perfect for maintaining key partnerships or elevating personal branding.",
  },
  {
    name: "土星 / Saturn ♄",
    keywords: "纪律 · 结构 · 保护 · 边界",
    keywordsEn: "Discipline · Structure · Protection · Boundaries",
    desc: "土星星符建立坚不可摧的防护壁垒与严密的秩序结构。适用于需要长期稳定、资产保护或约束对手的高阶场景。",
    descEn: "The Saturnine talisman erects impenetrable barriers and rigorous structure — for long-term stability, asset protection, or constraining adversaries.",
  },
];

const TalismansDetail = () => (
  <DetailPageLayout>
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-16">
        <div className="aspect-[21/9] max-w-3xl mx-auto mb-12 overflow-hidden rounded-sm">
          <img src={productTalismans} alt="The 7-Star Talismans" className="w-full h-full object-cover" />
        </div>
        <h1 className="font-heading text-3xl md:text-5xl font-light text-primary tracking-wide">
          行星七星符系列
        </h1>
        <p className="font-heading text-lg text-silver mt-2 italic">The 7-Star Planetary Talismans</p>
        <div className="gold-line w-24 mx-auto mt-6" />
        <p className="text-foreground/70 mt-6 max-w-2xl mx-auto leading-relaxed text-sm">
          核心星符产品。每一枚星符均严格遵循该行星的行星时刻 (Planetary Hour) 进行手工定制，是行星逻辑的具象化载体——将宇宙法则凝聚于方寸之间。
        </p>
        <p className="text-foreground/50 mt-2 max-w-2xl mx-auto leading-relaxed text-xs italic">
          Our flagship talisman collection. Each piece is hand-crafted at the precise Planetary Hour, embodying planetary logic in tangible form — condensing universal law into a personal artefact.
        </p>
      </div>

      <div className="space-y-6">
        {planets.map((p, i) => (
          <div
            key={i}
            className="border border-border bg-card p-8 md:p-10 hover:border-primary/30 transition-all duration-500 rounded-sm hover:glow-gold"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
              <div className="md:w-1/4 shrink-0">
                <h3 className="font-heading text-xl md:text-2xl text-foreground">{p.name}</h3>
                <p className="text-primary/70 text-xs tracking-widest mt-2">{p.keywords}</p>
                <p className="text-silver/50 text-[10px] tracking-widest mt-1">{p.keywordsEn}</p>
              </div>
              <div className="md:w-3/4">
                <p className="text-foreground/70 text-sm leading-relaxed">{p.desc}</p>
                <p className="text-foreground/40 text-xs leading-relaxed mt-2 italic">{p.descEn}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </DetailPageLayout>
);

export default TalismansDetail;
