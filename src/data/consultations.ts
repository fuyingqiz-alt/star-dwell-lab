export const consultations = [
  { id: "rhythm", title: "个人节奏速读", en: "Personal Rhythm Reading", price: 99, minutes: 15, desc: "适合手上有一个具体决定，想梳理现在要不要行动。", descEn: "For a specific decision when you want to explore whether now is the time to act." },
  { id: "natal", title: "本命盘深度咨询", en: "In-depth Natal Chart Consultation", price: 168, minutes: undefined, desc: "适合梳理事业、关系或反复遇到的人生课题。", descEn: "For exploring career, relationships, or recurring patterns in your life." },
  { id: "annual", title: "2027 年运咨询", en: "2027 Year-Ahead Consultation", price: 198, minutes: undefined, desc: "适合提前梳理未来一年的重点和时间节奏。", descEn: "For exploring the priorities and timing of the year ahead." },
] as const;

export function bookingLink(subject: string) {
  return `https://wa.me/6586806951?text=${encodeURIComponent(`你好美柒 Hannah，我想预约 / Hello Hannah, I'd like to enquire about：${subject}`)}`;
}