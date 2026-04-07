const AboutSection = () => (
  <section id="about" className="py-24 md:py-32 bg-secondary/30">
    <div className="container mx-auto px-6 max-w-3xl text-center">
      <h2 className="font-heading text-3xl md:text-5xl font-light text-primary tracking-wide">
        首席顾问
      </h2>
      <p className="font-heading text-lg text-silver mt-2 italic">The Consultant</p>
      <div className="gold-line w-24 mx-auto mt-6 mb-10" />

      <div className="border border-border bg-card/40 p-10 md:p-14 rounded-sm">
        <p className="font-heading text-2xl md:text-3xl text-foreground mb-6 font-light">
          Hannah <span className="text-silver">(美柒)</span>
        </p>
        <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
          西方秘法体系整合专家。第二代传承，二十二载研习积淀。致力于将古老文明的智慧转化为现代精英阶层在不确定性中寻找确定性的认知工具。
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
