import { useEffect, useRef } from "react";

/** Animated celestial chart: twinkling stars canvas + slowly rotating astrolabe rings. */
export default function StarChart() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!; const ctx = c.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0;
    const stars = Array.from({ length: 160 }, () => ({ x: Math.random(), y: Math.random(), r: Math.random() * 1.3 + 0.2, p: Math.random() * 6.28, s: Math.random() * 0.02 + 0.005 }));
    const resize = () => { const d = window.devicePixelRatio || 1; w = c.offsetWidth; h = c.offsetHeight; c.width = w * d; c.height = h * d; ctx.setTransform(d, 0, 0, d, 0, 0); };
    const gold = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      stars.forEach((s, i) => {
        s.p += s.s; const a = 0.35 + Math.sin(s.p) * 0.35;
        ctx.fillStyle = `hsl(${gold} / ${a})`; ctx.beginPath(); ctx.arc(s.x * w, s.y * h, s.r, 0, 6.28); ctx.fill();
        if (i % 9 === 0 && stars[i + 1]) { ctx.strokeStyle = `hsl(${gold} / 0.08)`; ctx.beginPath(); ctx.moveTo(s.x * w, s.y * h); ctx.lineTo(stars[i + 1].x * w, stars[i + 1].y * h); ctx.stroke(); }
      });
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    resize(); draw(); window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  const glyphs = ["☉", "☽", "☿", "♀", "♂", "♃", "♄"];
  return <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
    <canvas ref={ref} className="absolute inset-0 w-full h-full" />
    <svg viewBox="-300 -300 600 600" className="star-chart absolute left-1/2 top-1/2 w-[150vw] max-w-[900px] -translate-x-1/2 -translate-y-1/2 md:left-[72%] md:w-[80vw]">
      <g className="spin-slow">
        <circle r="280" className="chart-line" /><circle r="270" className="chart-line chart-dash" />
        {Array.from({ length: 72 }, (_, i) => <line key={i} x1="0" y1={-270} x2="0" y2={i % 6 ? -262 : -250} className="chart-line" transform={`rotate(${i * 5})`} />)}
        {glyphs.map((g, i) => <text key={g} y={-225} className="chart-glyph" transform={`rotate(${i * 360 / 7})`} textAnchor="middle">{g}</text>)}
      </g>
      <g className="spin-reverse">
        <circle r="190" className="chart-line" /><circle r="120" className="chart-line chart-dash" />
        <polygon points={Array.from({ length: 7 }, (_, i) => { const a = (i * 4 * Math.PI * 2) / 7 - Math.PI / 2; return `${Math.cos(a) * 190},${Math.sin(a) * 190}`; }).join(" ")} className="chart-line" />
        <circle r="5" cx="190" className="chart-planet" /><circle r="4" cx="-120" className="chart-planet" />
      </g>
      <g className="spin-slow"><circle r="60" className="chart-line" /><line x1="-280" x2="280" className="chart-line" /><line y1="-280" y2="280" className="chart-line" /><circle r="3" className="chart-planet" /></g>
    </svg>
  </div>;
}
