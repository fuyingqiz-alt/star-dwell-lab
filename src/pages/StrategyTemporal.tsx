import DetailPageLayout from "@/components/DetailPageLayout";

const features = [
  {
    name: "择吉时 · 精准时机锁定",
    en: "Electional Astrology — Precision Timing",
    desc: "运用西方古典择吉占星 (Electional Astrology) 的严格法则，为您的重大行动——签约、开业、发布、搬迁、婚期——锁定宇宙时序中最有利的精准时刻。",
    descEn: "Applying the rigorous principles of classical Electional Astrology to pinpoint the most auspicious cosmic moment for your major actions — contract signing, grand opening, product launch, relocation, wedding date.",
  },
  {
    name: "本命星盘深度解析",
    en: "Natal Chart Deep Analysis",
    desc: "基于您的精确出生数据，绘制并深度解读您的本命星盘。识别先天的优势领域、潜在挑战以及关键的人生主题——为后续所有决策提供底层认知框架。",
    descEn: "Based on your precise birth data, casting and deeply interpreting your natal chart. Identifying innate strengths, potential challenges, and key life themes — providing the foundational cognitive framework for all subsequent decisions.",
  },
  {
    name: "行运与推运预测",
    en: "Transits & Progressions Forecasting",
    desc: "通过分析当前行星行运 (Transits) 与推运 (Progressions) 与您本命盘的互动关系，精准预测未来 1-3 年内的关键时间窗口——机遇期、挑战期与转折点。",
    descEn: "By analysing the interaction between current planetary Transits & Progressions and your natal chart, precisely forecasting key time windows within the next 1–3 years — opportunity periods, challenge phases, and turning points.",
  },
  {
    name: "合盘分析 · 关系动力学",
    en: "Synastry — Relationship Dynamics",
    desc: "将两人的星盘进行叠合分析 (Synastry)，揭示商业合伙、婚姻关系或核心团队成员之间的深层动力学——和谐点、摩擦点与需要特别管理的能量交汇。",
    descEn: "Overlaying two charts for Synastry analysis, revealing the deep dynamics between business partners, marital relationships, or core team members — harmony points, friction zones, and energy intersections requiring special management.",
  },
];

const StrategyTemporal = () => (
  <DetailPageLayout>
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="font-heading text-3xl md:text-5xl font-light text-primary tracking-wide">
          时序规律解析
        </h1>
        <p className="font-heading text-lg text-silver mt-2 italic">Temporal Analysis — Classical Western Astrology</p>
        <div className="gold-line w-24 mx-auto mt-6" />
        <p className="text-foreground/70 mt-6 max-w-2xl mx-auto leading-relaxed text-sm">
          基于西方古典占星的严谨体系，锁定精准的「时机」。我们不做娱乐化的星座解读，而是运用古典技法进行深度的时序分析，确保您的重大决策与宇宙时序同步。
        </p>
        <p className="text-foreground/50 mt-2 max-w-2xl mx-auto leading-relaxed text-xs italic">
          Grounded in the rigorous system of classical Western astrology, pinpointing the precise "moment." We don't do entertainment-style horoscope readings — we employ classical techniques for deep temporal analysis, ensuring your major decisions synchronise with cosmic timing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="border border-border bg-card p-8 hover:border-primary/30 transition-all duration-500 rounded-sm hover:glow-gold"
          >
            <span className="text-primary/25 font-heading text-4xl font-light">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-heading text-xl text-foreground mt-3 mb-1">{f.name}</h3>
            <p className="text-xs text-silver tracking-widest uppercase mb-4">{f.en}</p>
            <p className="text-foreground/70 text-sm leading-relaxed">{f.desc}</p>
            <p className="text-foreground/40 text-xs leading-relaxed mt-3 italic">{f.descEn}</p>
          </div>
        ))}
      </div>
    </div>
  </DetailPageLayout>
);

export default StrategyTemporal;
