import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import hannahPortrait from "@/assets/hannah-portrait.jpg";

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-light text-primary tracking-wide">
            首席顾问
          </h2>
          <p className="font-heading text-lg text-silver mt-2 italic">The Consultant</p>
          <div className="gold-line w-24 mx-auto mt-6" />
        </div>

        <div
          ref={ref}
          className={`flex flex-col md:flex-row gap-12 items-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-64 h-80 md:w-72 md:h-[420px] flex-shrink-0 overflow-hidden rounded-sm border border-primary/20 shadow-lg">
            <img
              src={hannahPortrait}
              alt="Hannah - Lead Consultant"
              loading="lazy"
              width={288}
              height={420}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="font-heading text-3xl md:text-4xl text-foreground mb-1 font-light">
              Hannah
            </p>
            <p className="font-heading text-xl text-silver mb-1">(美柒)</p>
            <p className="text-xs text-primary tracking-[0.2em] uppercase mb-8">Lead Metaphysics Consultant</p>
            <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
              西方玄学体系整合专家。第二代传承，二十二载研习积淀。致力于将古老文明的智慧转化为现代精英阶层在不确定性中寻找确定性的认知工具。
            </p>
            <p className="text-foreground/40 leading-relaxed text-xs md:text-sm mt-4 italic">
              An integrative Western Metaphysics specialist. Second-generation lineage with twenty-two years of dedicated study. Committed to translating ancient civilisational wisdom into cognitive tools for modern elites seeking certainty amid uncertainty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
