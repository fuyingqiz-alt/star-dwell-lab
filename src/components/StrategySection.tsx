import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const StrategySection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="strategy" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-light text-primary tracking-wide">
              高阶决策支持
            </h2>
            <p className="font-heading text-lg text-silver mt-2 italic">Strategic Consultancy</p>
            <div className="gold-line w-24 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to="/strategy/retainer"
              className="group border border-border bg-background p-10 hover:border-primary/30 transition-all duration-500 rounded-sm hover:glow-gold block"
            >
              <h3 className="font-heading text-2xl text-foreground mb-2">长期战略陪跑</h3>
              <p className="text-xs text-silver tracking-widest uppercase mb-6">Retainer Model</p>
              <p className="text-foreground/70 text-sm leading-relaxed">
                为企业主提供私密、持续的商业决策支持。运用地占术 (Geomancy) 进行局势推演与风险评估。
              </p>
              <p className="text-foreground/40 text-xs leading-relaxed mt-3 italic">
                Confidential, ongoing strategic support for business owners. Employing Geomancy for scenario analysis and risk assessment.
              </p>
              <div className="flex items-center gap-2 mt-5 text-primary text-xs tracking-widest group-hover:gap-3 transition-all duration-300">
                <span>查看详情 / View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
            <Link
              to="/strategy/temporal"
              className="group border border-border bg-background p-10 hover:border-primary/30 transition-all duration-500 rounded-sm hover:glow-gold block"
            >
              <h3 className="font-heading text-2xl text-foreground mb-2">时序规律解析</h3>
              <p className="text-xs text-silver tracking-widest uppercase mb-6">Temporal Analysis</p>
              <p className="text-foreground/70 text-sm leading-relaxed">
                基于西方古典占星，锁定精准的"时机"，确保重大决策与宇宙时序同步。
              </p>
              <p className="text-foreground/40 text-xs leading-relaxed mt-3 italic">
                Leveraging classical Western astrology to pinpoint the precise "moment," ensuring major decisions synchronise with cosmic timing.
              </p>
              <div className="flex items-center gap-2 mt-5 text-primary text-xs tracking-widest group-hover:gap-3 transition-all duration-300">
                <span>查看详情 / View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
