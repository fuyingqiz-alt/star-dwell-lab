export type FeedbackCategory = "experience" | "followup" | "craft";
export interface Testimonial {
  id: string;
  category: FeedbackCategory;
  quote: string;
  service: string;
  screenshot?: string;
  publicApproved: boolean;
  deidentified: boolean;
  featured?: boolean;
}
// Only explicitly supplied, approved, deidentified client materials belong here.
export const testimonials: Testimonial[] = [];
export const feedbackCategories = [
  { id: "experience", title: "咨询体验", en: "Consultation experience" },
  { id: "followup", title: "咨询后回访", en: "After the consultation" },
  { id: "craft", title: "仪式与手作反馈", en: "Rituals & handcrafted pieces" },
] as const;
export const publicTestimonials = (items: Testimonial[]) => items.filter(item => item.publicApproved && item.deidentified);
export const visibleFeedbackCategories = (items: Testimonial[]) => feedbackCategories.filter(category => publicTestimonials(items).some(item => item.category === category.id));