export interface Consultation {
  id: string;
  title: string;
  en: string;
  /** Confirmed price in SGD; undefined means price on enquiry. */
  price?: number;
  minutes?: number;
  desc: string;
  descEn: string;
}

export const consultations: readonly Consultation[] = [
  { id: "rhythm", title: "个人节奏速读", en: "Personal Rhythm Reading", price: 88, minutes: 15, desc: "适合手上有一个具体决定，想梳理现在要不要行动。", descEn: "For a specific decision when you want to explore whether now is the time to act." },
  { id: "natal", title: "本命盘深度咨询", en: "In-depth Natal Chart Consultation", price: 188, desc: "适合梳理事业、关系或反复遇到的人生课题。", descEn: "For exploring career, relationships, or recurring patterns in your life." },
  { id: "annual", title: "年运咨询", en: "Year-Ahead Consultation", price: 188, desc: "基于流年盘，适合提前梳理未来一年的重点和时间节奏。", descEn: "Based on your annual chart, for exploring the priorities and timing of the year ahead." },
  { id: "business", title: "事业与商业决策咨询", en: "Career & Business Decisions", desc: "适合创业方向、合作判断、重大决策时机，用地占与星盘一起推演。", descEn: "For business direction, partnership decisions and timing major moves, using geomancy and charts together." },
];

export function bookingLink(subject: string) {
  return `https://wa.me/6586806951?text=${encodeURIComponent(`你好美柒 Hannah，我想预约 / Hello Hannah, I'd like to enquire about：${subject}`)}`;
}