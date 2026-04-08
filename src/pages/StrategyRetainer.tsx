import DetailPageLayout from "@/components/DetailPageLayout";

const features = [
  {
    name: "月度/季度深度推演",
    en: "Monthly / Quarterly Deep Analysis",
    desc: "每月或每季度进行一次系统性的局势推演。运用地占术 (Geomancy) 对您的商业版图、投资组合与核心利益关系进行全面扫描，识别隐藏的风险与机遇节点。",
    descEn: "A systematic scenario analysis conducted monthly or quarterly. Using Geomancy to comprehensively scan your business landscape, investment portfolio, and core stakeholder relationships — identifying hidden risks and opportunity nodes.",
  },
  {
    name: "关键决策节点支持",
    en: "Critical Decision-Point Support",
    desc: "在面临重大商业决策——并购、融资、合伙、诉讼、重大人事变动——时，提供即时的占卜分析与策略建议。确保您在信息不对称的情况下仍能做出最优判断。",
    descEn: "Providing instant divinatory analysis and strategic counsel when facing major business decisions — M&A, fundraising, partnerships, litigation, major personnel changes. Ensuring optimal judgement even under information asymmetry.",
  },
  {
    name: "风险预警与对冲方案",
    en: "Risk Early Warning & Hedging",
    desc: "通过持续的星象监测与地占推演，提前锁定潜在的风险窗口期。并为每一个识别到的风险提供对应的玄法对冲方案——从行星护符到特定仪轨。",
    descEn: "Through continuous astrological monitoring and geomantic analysis, pinpointing potential risk windows in advance. For each identified risk, providing corresponding metaphysical hedging solutions — from planetary talismans to specific ritual protocols.",
  },
  {
    name: "私密性与信息安全",
    en: "Confidentiality & Information Security",
    desc: "所有陪跑咨询内容均严格保密。我们深刻理解高净值客户对隐私的极致需求。不留纸质记录，不使用第三方平台，仅通过加密通道进行沟通。",
    descEn: "All retainer consultations are strictly confidential. We deeply understand HNW clients' paramount need for privacy. No paper records, no third-party platforms — communication only through encrypted channels.",
  },
];

const StrategyRetainer = () => (
  <DetailPageLayout>
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="font-heading text-3xl md:text-5xl font-light text-primary tracking-wide">
          长期战略陪跑
        </h1>
        <p className="font-heading text-lg text-silver mt-2 italic">Retainer Model — Ongoing Strategic Support</p>
        <div className="gold-line w-24 mx-auto mt-6" />
        <p className="text-foreground/70 mt-6 max-w-2xl mx-auto leading-relaxed text-sm">
          为企业主与高净值个人提供私密、持续的商业决策支持。我们不做一次性的「算命」，而是作为您的长期战略顾问，运用地占术 (Geomancy) 与古典占星进行持续的局势推演与风险评估。
        </p>
        <p className="text-foreground/50 mt-2 max-w-2xl mx-auto leading-relaxed text-xs italic">
          Confidential, ongoing strategic support for entrepreneurs and HNW individuals. We don't do one-off "fortune telling" — we serve as your long-term strategic advisor, employing Geomancy and classical astrology for continuous scenario analysis and risk assessment.
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

export default StrategyRetainer;
