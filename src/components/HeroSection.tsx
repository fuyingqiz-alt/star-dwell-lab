import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="mb-6 animate-fade-up">
          <span className="inline-block text-xs tracking-[0.4em] uppercase text-silver border border-border px-4 py-1.5 rounded-full">
            Singapore · 新加坡
          </span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-light tracking-wider text-primary animate-fade-up leading-tight">
          格物天星，理序心宅。
        </h1>
        <p className="font-heading text-lg sm:text-xl md:text-2xl text-silver mt-4 animate-fade-up-delay-1 italic tracking-wide">
          Stars Align, Souls Abide.
        </p>

        <div className="gold-line w-32 mx-auto my-10 animate-fade-up-delay-1" />

        <p className="text-foreground/80 mt-4 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base animate-fade-up-delay-2">
          逻辑解析已知，玄学洞察未知。在 STAR-DWELL LAB，我们深耕古典西方玄学体系，通过对星辰时序与地合逻辑的精密采样，为您在复杂的利益博弈中，寻找撬动结局的定力点。
        </p>
        <p className="text-foreground/50 mt-3 max-w-2xl mx-auto leading-relaxed text-xs sm:text-sm animate-fade-up-delay-2 italic">
          Logic deciphers the known; metaphysics illuminates the unknown. We cultivate classical Western metaphysical systems — precisely sampling celestial timing and geomantic logic to find your leverage point amid complex stakes.
        </p>

        <a
          href="#contact"
          className="inline-block mt-12 bg-primary text-primary-foreground px-10 py-3.5 text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-500 animate-fade-up-delay-3 rounded-sm font-medium"
        >
          预约私密咨询 — Book Consultation
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up-delay-3">
        <div className="w-px h-16 bg-gradient-to-b from-primary/30 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
