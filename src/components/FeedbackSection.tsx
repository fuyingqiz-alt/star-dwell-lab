import { Link } from "react-router-dom";
import { ArrowUpRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageProvider";
import ImageZoom from "./ImageZoom";
import { testimonials, publicTestimonials, type Testimonial } from "@/data/testimonials";

export function FeedbackCard({ item }: { item: Testimonial }) {
  return <article className="feedback-card border border-border p-6 md:p-8 rounded-sm">
    <Quote className="w-5 h-5 text-primary mb-4" />
    <blockquote className="whitespace-pre-line leading-8 text-base">{item.quote}</blockquote>
    <p className="text-sm text-muted-foreground mt-6">{item.service}</p>
    {item.screenshot && <ImageZoom src={item.screenshot} label="客户反馈截图 / Client feedback screenshot" className="mt-5 w-full max-h-60" />}
  </article>;
}
export default function FeedbackSection() {
  const { english } = useLanguage();
  const items = publicTestimonials(testimonials).filter(item => item.featured);
  if (!items.length) return null;
  return <section className="feedback-surface section-space"><div className="page-width">
    <div className="section-heading"><p className="eyebrow">CLIENT VOICES</p><h2>{english ? "Client reflections" : "精选客户反馈"}</h2></div>
    <div className="grid md:grid-cols-3 gap-6">{items.map(item => <FeedbackCard item={item} key={item.id} />)}</div>
    <Button asChild variant="link" className="mt-6"><Link to="/feedback">{english ? "All feedback" : "查看客户反馈"}<ArrowUpRight /></Link></Button>
  </div></section>;
}