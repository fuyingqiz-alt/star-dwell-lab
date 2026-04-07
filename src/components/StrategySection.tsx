const StrategySection = () => (
  <section id="strategy" className="py-24 md:py-32 bg-secondary/30">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-5xl font-light text-primary tracking-wide">
          高阶决策支持
        </h2>
        <p className="font-heading text-lg text-silver mt-2 italic">Strategic Consultancy</p>
        <div className="gold-line w-24 mx-auto mt-6" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-border bg-card/40 p-10 hover:border-primary/30 transition-all duration-500 rounded-sm">
          <h3 className="font-heading text-2xl text-foreground mb-2">长期战略陪跑</h3>
          <p className="text-xs text-silver tracking-widest uppercase mb-6">Retainer Model</p>
          <p className="text-foreground/60 text-sm leading-relaxed">
            为企业主提供私密、持续的商业决策支持。运用地占术 (Geomancy) 进行局势推演与风险评估。
          </p>
        </div>
        <div className="border border-border bg-card/40 p-10 hover:border-primary/30 transition-all duration-500 rounded-sm">
          <h3 className="font-heading text-2xl text-foreground mb-2">时序规律解析</h3>
          <p className="text-xs text-silver tracking-widest uppercase mb-6">Temporal Analysis</p>
          <p className="text-foreground/60 text-sm leading-relaxed">
            基于西方古典占星，锁定精准的"时机"，确保重大决策与宇宙时序同步。
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default StrategySection;
