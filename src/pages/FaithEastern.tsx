import DetailPageLayout from "@/components/DetailPageLayout";

const traditions = [
  {
    name: "佛教 · 正统仪轨",
    en: "Buddhism — Orthodox Ritual Protocols",
    desc: "运用正统佛法仪轨体系，包括特定经咒的持诵、护摩火供、坛城观修以及针对性的回向法则。我们尊重不同佛教宗派（南传、汉传、藏传）的教义差异，为您匹配最契合的修法路径。",
    descEn: "Employing orthodox Buddhist ritual systems including specific mantra recitation, Homa fire offerings, mandala contemplation, and targeted dedication of merit. We respect doctrinal differences across Theravada, Mahayana, and Vajrayana traditions, matching you with the most aligned practice path.",
  },
  {
    name: "印度教 · 神祇与法则对应",
    en: "Hinduism — Deity & Dharmic Alignments",
    desc: "基于印度教丰富的神祇体系——从吉祥天女 (Lakshmi) 的财富法则到象头神 (Ganesha) 的障碍清除，从杜尔迦 (Durga) 的强力保护到萨拉斯瓦蒂 (Saraswati) 的智慧开启——为您建立精准的神祇连结与仪轨方案。",
    descEn: "Based on Hinduism's rich deity system — from Lakshmi's wealth protocols to Ganesha's obstacle removal, from Durga's powerful protection to Saraswati's wisdom activation — establishing precise deity alignments and ritual programmes tailored to your needs.",
  },
  {
    name: "道教与区域民间信仰",
    en: "Taoism & Regional Folk Traditions",
    desc: "理解并尊重东亚文化圈内的道教传统与区域民间信仰体系。在操作中注意避免不同传统间的教义冲突，确保方案的兼容性与有效性。",
    descEn: "Understanding and respecting Taoist traditions and regional folk belief systems within the East Asian cultural sphere. Ensuring doctrinal compatibility and effectiveness by carefully avoiding conflicts between different traditions during operations.",
  },
];

const FaithEastern = () => (
  <DetailPageLayout>
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="font-heading text-3xl md:text-5xl font-light text-primary tracking-wide">
          东方古典与区域信仰
        </h1>
        <p className="font-heading text-lg text-silver mt-2 italic">Eastern & Regional Traditions</p>
        <div className="gold-line w-24 mx-auto mt-6" />
        <p className="text-foreground/70 mt-6 max-w-2xl mx-auto leading-relaxed text-sm">
          东方信仰体系博大精深，每一个传统都承载着数千年的修行智慧。我们以最深的敬意理解您的信仰背景，确保所有干预手段与您的精神根基完全共振。
        </p>
        <p className="text-foreground/50 mt-2 max-w-2xl mx-auto leading-relaxed text-xs italic">
          Eastern belief systems are vast and profound, each carrying millennia of spiritual wisdom. We approach your faith background with the deepest respect, ensuring all interventions resonate fully with your spiritual foundation.
        </p>
      </div>

      <div className="space-y-6">
        {traditions.map((t, i) => (
          <div
            key={i}
            className="border border-border bg-card p-8 md:p-10 hover:border-primary/30 transition-all duration-500 rounded-sm hover:glow-gold"
          >
            <span className="text-primary/25 font-heading text-4xl font-light">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-heading text-xl md:text-2xl text-foreground mt-3 mb-1">{t.name}</h3>
            <p className="text-xs text-silver tracking-widest uppercase mb-5">{t.en}</p>
            <p className="text-foreground/70 text-sm leading-relaxed">{t.desc}</p>
            <p className="text-foreground/40 text-xs leading-relaxed mt-3 italic">{t.descEn}</p>
          </div>
        ))}
      </div>
    </div>
  </DetailPageLayout>
);

export default FaithEastern;
