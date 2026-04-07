import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-light tracking-wider text-primary animate-fade-up leading-tight">
          格物天星，理序心宅。
        </h1>
        <p className="font-heading text-lg sm:text-xl md:text-2xl text-silver mt-4 animate-fade-up-delay-1 italic tracking-wide">
          Stars Align, Souls Abide.
        </p>

        <div className="gold-line w-32 mx-auto my-8 animate-fade-up-delay-1" />

        <p className="text-sm sm:text-base text-silver tracking-widest uppercase animate-fade-up-delay-2">
          驻新加坡 · 专为精英决策者定制的高阶西方玄学智库
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground tracking-widest uppercase animate-fade-up-delay-2 mt-1">
          Based in Singapore · Premium Western Metaphysics Think Tank for Elite Decision Makers
        </p>

        <p className="text-foreground/80 mt-8 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base animate-fade-up-delay-2">
          逻辑解析已知，玄学洞察未知。在 STAR-DWELL LAB，我们摒弃浅薄的预言，深耕古典西方玄学体系。通过对星辰时序与地合逻辑的精密采样，为您在复杂的利益博弈中，寻找撬动结局的定力点。
        </p>
        <p className="text-foreground/60 mt-3 max-w-2xl mx-auto leading-relaxed text-xs sm:text-sm animate-fade-up-delay-2 italic">
          Logic deciphers the known; metaphysics illuminates the unknown. At STAR-DWELL LAB, we reject shallow prophecy and cultivate classical Western metaphysical systems — precisely sampling celestial timing and geomantic logic to find your leverage point amid complex stakes.
        </p>

        <a
          href="#contact"
          className="inline-block mt-10 border border-primary/50 text-primary px-8 py-3 text-sm tracking-[0.2em] uppercase hover:bg-primary/10 hover:border-primary transition-all duration-500 animate-fade-up-delay-3 rounded-sm"
        >
          预约私密咨询 &mdash; Book Private Consultation
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up-delay-3">
        <div className="w-px h-12 bg-gradient-to-b from-primary/40 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
