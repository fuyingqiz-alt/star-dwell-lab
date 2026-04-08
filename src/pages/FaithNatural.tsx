import DetailPageLayout from "@/components/DetailPageLayout";

const systems = [
  {
    name: "七星魔法 · 行星频率校准",
    en: "7-Star Magic & Planetary Frequency Calibration",
    desc: "核心操作体系。基于七大古典行星（太阳、月亮、水星、金星、火星、木星、土星）的频率特征，通过精确的时序采样与仪式化操作，将个人的能量场与特定行星频率进行校准与同步。",
    descEn: "The core operating system. Based on the frequency signatures of the seven classical planets (Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn), aligning and synchronising your personal energy field with specific planetary frequencies through precise temporal sampling and ritual operations.",
  },
  {
    name: "系统草药学",
    en: "Systematic Herbalism",
    desc: "超越简单的植物药理学。将每一种植物视为行星法则在自然界的具象化表达。通过严格的行星-植物对应体系，配制仪式用油、熏香、浴方与护身符填充材料。",
    descEn: "Beyond simple plant pharmacology. Each botanical is viewed as a tangible expression of planetary law in the natural world. Through rigorous planet-botanical correspondences, we formulate ritual oils, incenses, bath recipes, and talisman filling materials.",
  },
  {
    name: "希腊纸草玄法 (PGM)",
    en: "Greek Magical Papyri (PGM)",
    desc: "西方玄学传统中最核心的一级文献群。涵盖神谕召唤、守护灵连结、束缚与释放法则、净化驱逐仪轨等完整的操作体系。是学术与实践兼备的最高等级文献。",
    descEn: "The most foundational primary source corpus in the Western metaphysical tradition. Encompassing oracle invocations, guardian spirit connections, binding & releasing protocols, and purification rites — the highest-level texts combining scholarship and practice.",
  },
  {
    name: "赫尔墨斯主义与炼金哲学",
    en: "Hermeticism & Alchemical Philosophy",
    desc: "\"如其在上，如其在下。\" 赫尔墨斯传统提供了理解宇宙运作法则的底层哲学框架。所有操作的理论根基，均植根于这一古老而精密的智慧体系。",
    descEn: "\"As above, so below.\" The Hermetic tradition provides the foundational philosophical framework for understanding universal operational laws. The theoretical root of all our operations is grounded in this ancient and precise wisdom system.",
  },
];

const FaithNatural = () => (
  <DetailPageLayout>
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="font-heading text-3xl md:text-5xl font-light text-primary tracking-wide">
          自然法则与非宗教体系
        </h1>
        <p className="font-heading text-lg text-silver mt-2 italic">Natural Law & Secular Systems</p>
        <div className="gold-line w-24 mx-auto mt-6" />
        <p className="text-foreground/70 mt-6 max-w-2xl mx-auto leading-relaxed text-sm">
          对于不持有特定宗教信仰的客户，我们运用基于自然法则与宇宙运作规律的纯粹体系。这些方法论不依赖任何宗教教义，而是直接与宇宙的底层运作逻辑进行交互。
        </p>
        <p className="text-foreground/50 mt-2 max-w-2xl mx-auto leading-relaxed text-xs italic">
          For clients who do not hold a specific religious faith, we employ pure systems based on natural law and universal operational principles. These methodologies do not rely on any religious doctrine but interact directly with the underlying logic of cosmic operations.
        </p>
      </div>

      <div className="space-y-6">
        {systems.map((s, i) => (
          <div
            key={i}
            className="border border-border bg-card p-8 md:p-10 hover:border-primary/30 transition-all duration-500 rounded-sm hover:glow-gold"
          >
            <span className="text-primary/25 font-heading text-4xl font-light">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-heading text-xl md:text-2xl text-foreground mt-3 mb-1">{s.name}</h3>
            <p className="text-xs text-silver tracking-widest uppercase mb-5">{s.en}</p>
            <p className="text-foreground/70 text-sm leading-relaxed">{s.desc}</p>
            <p className="text-foreground/40 text-xs leading-relaxed mt-3 italic">{s.descEn}</p>
          </div>
        ))}
      </div>
    </div>
  </DetailPageLayout>
);

export default FaithNatural;
