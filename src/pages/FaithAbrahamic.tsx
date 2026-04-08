import DetailPageLayout from "@/components/DetailPageLayout";

const traditions = [
  {
    name: "基督教 · 古典诗篇玄法",
    en: "Christianity — Classical Psalm Magic",
    desc: "运用《诗篇》中蕴含的精密法则结构，针对不同人生场景——保护、胜诉、驱邪、恩惠——选用对应的诗篇进行仪式化诵念与能量激活。每一篇诗篇都是一把精确的钥匙。",
    descEn: "Employing the precise structural laws embedded in the Psalms. For each life scenario — protection, legal victory, exorcism, favour — the corresponding Psalm is selected for ritual recitation and energy activation. Each Psalm is a precision key.",
  },
  {
    name: "天主教 · 圣徒连结与代求",
    en: "Catholicism — Saints Intercession",
    desc: "在天主教丰富的圣徒体系中，每位圣徒守护着特定的领域。我们依据您的具体需求，为您匹配最精准的圣徒连结，建立持续的代求通道——从商业圣徒到治愈圣徒，从旅行者守护到迷失者指引。",
    descEn: "Within Catholicism's rich pantheon of Saints, each patron guards a specific domain. We match you with the most precise Saint for your need, establishing a sustained intercession channel — from commercial patrons to healing saints, from travellers' guardians to guides for the lost.",
  },
  {
    name: "伊斯兰教 · 古兰经系统方案",
    en: "Islam — Quranic Alignment Solutions",
    desc: "基于《古兰经》中特定苏拉 (Surah) 与阿亚 (Ayah) 的灵性属性，为穆斯林客户构建符合伊斯兰法则的完整方案。所有操作均严格尊重伊斯兰教义边界。",
    descEn: "Building complete solutions for Muslim clients based on the spiritual attributes of specific Surahs and Ayahs from the Holy Quran. All operations strictly respect Islamic doctrinal boundaries.",
  },
];

const FaithAbrahamic = () => (
  <DetailPageLayout>
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="font-heading text-3xl md:text-5xl font-light text-primary tracking-wide">
          亚伯拉罕与一神教体系
        </h1>
        <p className="font-heading text-lg text-silver mt-2 italic">Abrahamic & Monotheistic Traditions</p>
        <div className="gold-line w-24 mx-auto mt-6" />
        <p className="text-foreground/70 mt-6 max-w-2xl mx-auto leading-relaxed text-sm">
          在一神教传统中，信仰不仅是灵魂的归宿，更是干预法则的根基。我们深入理解每一个分支传统的核心教义，确保所有玄法操作与您的信仰体系完全契合。
        </p>
        <p className="text-foreground/50 mt-2 max-w-2xl mx-auto leading-relaxed text-xs italic">
          In monotheistic traditions, faith is not only the soul's refuge but the foundation of metaphysical intervention. We deeply understand the core doctrines of each branch, ensuring all operations are fully aligned with your belief system.
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

export default FaithAbrahamic;
