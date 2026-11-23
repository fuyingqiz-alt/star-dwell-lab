import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";
import { testimonials, publicTestimonials, visibleFeedbackCategories } from "@/data/testimonials";
import { FeedbackCard } from "@/components/FeedbackSection";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Feedback() {
  const { english } = useLanguage();
  const items = publicTestimonials(testimonials);
  return <><Header /><main className="pt-32 min-h-[80dvh]">
    <div className="page-width pb-12"><Button asChild variant="link" className="px-0"><Link to="/"><ArrowLeft />{english ? "Home" : "返回首页"}</Link></Button>
      <p className="eyebrow mt-8">CLIENT VOICES</p><h1 className="page-title">{english ? "Client feedback" : "客户反馈"}</h1>
      <p className="text-muted-foreground mt-5 leading-7">{english ? "Shared with permission. Personal details remain private." : "经客户许可分享，隐去个人信息，保留真实原话。"}</p>
    </div>
    <div className="feedback-surface section-space"><div className="page-width">
      {!items.length ? <div className="py-10 text-center"><MessageSquare className="w-8 h-8 text-primary mx-auto mb-6" /><h2 className="text-xl">{english ? "Client stories will be shared here" : "期待在这里分享真实的咨询体验"}</h2><p className="text-muted-foreground mt-4">{english ? "No public client materials are available yet." : "目前暂无获准公开的客户素材。"}</p></div> : visibleFeedbackCategories(testimonials).map(category => <section key={category.id} className="mb-12 last:mb-0"><h2 className="text-2xl mb-8">{english ? category.en : category.title}</h2><div className="grid md:grid-cols-2 gap-6">{items.filter(item => item.category === category.id).map(item => <FeedbackCard key={item.id} item={item} />)}</div></section>)}
    </div></div>
  </main><Footer /></>;
}