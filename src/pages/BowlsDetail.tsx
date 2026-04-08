import DetailPageLayout from "@/components/DetailPageLayout";
import productBowls from "@/assets/product-bowls.jpg";

const bowlTypes = [
  {
    name: "恩惠碗",
    en: "Grace & Favour Bowl",
    desc: "汇聚来自上层力量的恩典与福佑。为佩戴者在关键时刻开启意想不到的助力与贵人运，让局势向有利方向倾斜。",
    descEn: "Channels grace and blessings from higher forces. Opens unexpected assistance and benefactor energy at critical moments, tilting circumstances in your favour.",
  },
  {
    name: "防小人碗",
    en: "Adversary Shield Bowl",
    desc: "精准识别并中和来自竞争对手、职场政治或人际关系中的暗箭与负面影响。构建一道强大的防御屏障，将恶意与阻碍反射回源头。",
    descEn: "Precisely identifies and neutralises covert hostility from competitors, workplace politics, or interpersonal sabotage. Erects a powerful defensive barrier that reflects malice back to its source.",
  },
  {
    name: "镇宅碗",
    en: "Estate Anchoring Bowl",
    desc: "稳固居所或办公场域的能量场，清除不和谐的频率与残留的负面印记。为空间注入稳定、安宁与繁荣的底层基调。",
    descEn: "Stabilises the energy field of residences or offices, clearing disharmonious frequencies and residual negative imprints. Infuses space with foundational stability, tranquillity, and prosperity.",
  },
  {
    name: "商业碗",
    en: "Commerce Empowerment Bowl",
    desc: "专为商业场景设计。助力合同签订、项目推进、客户关系维护与商业谈判，增强商业活动中的整体势能与成功率。",
    descEn: "Designed specifically for commercial contexts — facilitating contract closings, project advancement, client retention, and negotiations. Amplifies overall momentum and success rate in business activities.",
  },
  {
    name: "招财碗",
    en: "Wealth Attraction Bowl",
    desc: "激活并放大财富吸引的磁场。调频至丰盛与富足的宇宙频率，为佩戴者打开多维度的财富通道。",
    descEn: "Activates and amplifies the wealth-attraction field. Tunes into the cosmic frequency of abundance and prosperity, opening multi-dimensional channels of wealth for the bearer.",
  },
];

const BowlsDetail = () => (
  <DetailPageLayout>
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-16">
        <div className="aspect-[21/9] max-w-3xl mx-auto mb-12 overflow-hidden rounded-sm">
          <img src={productBowls} alt="Aramaic Incantation Bowls" className="w-full h-full object-cover" />
        </div>
        <h1 className="font-heading text-3xl md:text-5xl font-light text-primary tracking-wide">
          阿拉姆魔碗
        </h1>
        <p className="font-heading text-lg text-silver mt-2 italic">Aramaic Incantation Bowls</p>
        <div className="gold-line w-24 mx-auto mt-6" />
        <p className="text-foreground/70 mt-6 max-w-2xl mx-auto leading-relaxed text-sm">
          源自近东古典工艺的重现与升华。每一只魔碗均以阿拉姆语 (Aramaic) 古典咒文为核心，手工绘制于陶碗内壁，构建稳固的防护与驱动场域——是古老智慧在现代语境下的精密复兴。
        </p>
        <p className="text-foreground/50 mt-2 max-w-2xl mx-auto leading-relaxed text-xs italic">
          A revival and elevation of ancient Near Eastern craft. Each bowl is hand-inscribed with classical Aramaic incantations, building stable fields of protection and empowerment — a precision restoration of ancient wisdom in the modern context.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {bowlTypes.map((b, i) => (
          <div
            key={i}
            className="border border-border bg-card p-8 hover:border-primary/30 transition-all duration-500 rounded-sm hover:glow-gold"
          >
            <span className="text-primary/25 font-heading text-4xl font-light">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-heading text-xl text-foreground mt-3 mb-1">{b.name}</h3>
            <p className="text-xs text-silver tracking-widest uppercase mb-4">{b.en}</p>
            <p className="text-foreground/70 text-sm leading-relaxed">{b.desc}</p>
            <p className="text-foreground/40 text-xs leading-relaxed mt-3 italic">{b.descEn}</p>
          </div>
        ))}
      </div>
    </div>
  </DetailPageLayout>
);

export default BowlsDetail;
