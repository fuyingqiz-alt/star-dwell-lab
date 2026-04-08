import DetailPageLayout from "@/components/DetailPageLayout";
import productPapyrus from "@/assets/product-papyrus.jpg";

const pgmItems = [
  {
    name: "PGM 神谕连接仪式",
    en: "Divine Oracle Rites",
    desc: "基于希腊纸草玄法中的神谕召唤法则 (Oracle Invocations)，建立与特定神性力量的直接沟通通道。用于获取关键决策的深层指引。",
    descEn: "Based on Oracle Invocations from the Greek Magical Papyri, establishing direct communication channels with specific divine forces for deep guidance on critical decisions.",
  },
  {
    name: "PGM 束缚与释放法则",
    en: "Binding & Releasing Protocols",
    desc: "运用 PGM 中记载的束缚咒法 (Binding Spells) 与释放仪轨，精准约束不利因素或释放被压制的正面能量与机遇。",
    descEn: "Employing Binding Spells and releasing rituals documented in the PGM to precisely constrain adverse factors or liberate suppressed positive energy and opportunities.",
  },
  {
    name: "PGM 守护神连结",
    en: "Guardian Deity Alignment",
    desc: "通过特定的 PGM 仪轨，识别并激活您的个人守护神 (Personal Daimon) 连接，建立持续的高维守护与指引体系。",
    descEn: "Through specific PGM rituals, identifying and activating your Personal Daimon connection to establish a continuous higher-dimensional guidance and protection system.",
  },
  {
    name: "PGM 爱与和谐法则",
    en: "Love & Harmony Workings",
    desc: "源自 PGM 中关于人际关系的古典法则。用于修复、增强或建立重要的人际纽带——商业伙伴、家庭关系或核心社交圈。",
    descEn: "Derived from classical PGM protocols on interpersonal relations. Used to repair, strengthen, or establish vital bonds — business partners, family ties, or core social circles.",
  },
  {
    name: "PGM 净化与驱逐仪轨",
    en: "Purification & Exorcism Rites",
    desc: "运用 PGM 中严格的净化流程，清除空间或个人能量场中附着的负面实体、残留印记与不和谐频率。",
    descEn: "Applying rigorous PGM purification processes to clear negative entities, residual imprints, and disharmonious frequencies from personal or spatial energy fields.",
  },
];

const PapyrusDetail = () => (
  <DetailPageLayout>
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-16">
        <div className="aspect-[21/9] max-w-3xl mx-auto mb-12 overflow-hidden rounded-sm">
          <img src={productPapyrus} alt="PGM Papyrus Craft" className="w-full h-full object-cover" />
        </div>
        <h1 className="font-heading text-3xl md:text-5xl font-light text-primary tracking-wide">
          PGM 莎草纸玄法载体
        </h1>
        <p className="font-heading text-lg text-silver mt-2 italic">Greek Magical Papyri — Papyrus Craft</p>
        <div className="gold-line w-24 mx-auto mt-6" />
        <p className="text-foreground/70 mt-6 max-w-2xl mx-auto leading-relaxed text-sm">
          希腊纸草玄法 (PGM) 是西方玄学传统中最核心的一级文献之一。我们基于这些古典文本进行手绘定制，每一件作品都是意志与宇宙法则连接的精密媒介。
        </p>
        <p className="text-foreground/50 mt-2 max-w-2xl mx-auto leading-relaxed text-xs italic">
          The Greek Magical Papyri (PGM) represent one of the most foundational primary sources in the Western metaphysical tradition. We create hand-painted custom works based on these classical texts — each piece a precision medium linking will to universal law.
        </p>
      </div>

      <div className="space-y-6">
        {pgmItems.map((item, i) => (
          <div
            key={i}
            className="border border-border bg-card p-8 md:p-10 hover:border-primary/30 transition-all duration-500 rounded-sm hover:glow-gold flex flex-col md:flex-row md:items-start gap-4 md:gap-8"
          >
            <div className="md:w-1/4 shrink-0">
              <span className="text-primary/25 font-heading text-4xl font-light">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-xl text-foreground mt-2">{item.name}</h3>
              <p className="text-xs text-silver tracking-widest uppercase mt-1">{item.en}</p>
            </div>
            <div className="md:w-3/4">
              <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
              <p className="text-foreground/40 text-xs leading-relaxed mt-2 italic">{item.descEn}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </DetailPageLayout>
);

export default PapyrusDetail;
