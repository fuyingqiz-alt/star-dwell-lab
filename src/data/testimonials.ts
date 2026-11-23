import feedback48 from "@/assets/feedback/feedback-48.webp";
import feedback49 from "@/assets/feedback/feedback-49.webp";
import feedback50 from "@/assets/feedback/feedback-50.webp";
import feedback51 from "@/assets/feedback/feedback-51.webp";
import feedback52 from "@/assets/feedback/feedback-52.webp";
import feedback53 from "@/assets/feedback/feedback-53.webp";
import feedback54 from "@/assets/feedback/feedback-54.webp";
import feedback55 from "@/assets/feedback/feedback-55.webp";
import feedback56 from "@/assets/feedback/feedback-56.webp";
import feedback57 from "@/assets/feedback/feedback-57.webp";
import feedback58 from "@/assets/feedback/feedback-58.webp";
import feedback59 from "@/assets/feedback/feedback-59.webp";
import feedback60 from "@/assets/feedback/feedback-60.webp";
import feedback61 from "@/assets/feedback/feedback-61.webp";
import feedback62 from "@/assets/feedback/feedback-62.webp";
import feedback63 from "@/assets/feedback/feedback-63.webp";
import feedback64 from "@/assets/feedback/feedback-64.webp";
import feedback65 from "@/assets/feedback/feedback-65.webp";
import feedback66 from "@/assets/feedback/feedback-66.webp";
import feedback67 from "@/assets/feedback/feedback-67.webp";
import feedback68 from "@/assets/feedback/feedback-68.webp";
import feedback69 from "@/assets/feedback/feedback-69.webp";
import feedback70 from "@/assets/feedback/feedback-70.webp";
import feedback71 from "@/assets/feedback/feedback-71.webp";
import feedback72 from "@/assets/feedback/feedback-72.webp";
import feedback73 from "@/assets/feedback/feedback-73.webp";
import feedback74 from "@/assets/feedback/feedback-74.webp";
import feedback75 from "@/assets/feedback/feedback-75.webp";
import feedback76 from "@/assets/feedback/feedback-76.webp";
import feedback77 from "@/assets/feedback/feedback-77.webp";
import feedback78 from "@/assets/feedback/feedback-78.webp";
import feedback79 from "@/assets/feedback/feedback-79.webp";
import feedback80 from "@/assets/feedback/feedback-80.webp";
import feedback81 from "@/assets/feedback/feedback-81.webp";
import feedback82 from "@/assets/feedback/feedback-82.webp";
import feedback83 from "@/assets/feedback/feedback-83.webp";
import feedback84 from "@/assets/feedback/feedback-84.webp";
import feedback85 from "@/assets/feedback/feedback-85.webp";
import feedback86 from "@/assets/feedback/feedback-86.webp";
import feedback87 from "@/assets/feedback/feedback-87.webp";

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
export const testimonials: Testimonial[] = [
  {
    id: "relationship-clarity",
    category: "experience",
    quote: "来见你之前我自己觉得在感情里我处于很迷茫的一个状态，之前吸引到自己的，事实证明不是能走的很远的；而自己内心一部分需要的，又不是一开始能吸引到自己的。但是答案不是非黑即白的，是可以合二为一的。谢谢 Hannah 你全面、理性但温柔的指引，让我分清一个人能让我心动，和一个人建立长期稳定关系，是两件事情；与此同时也提醒我需要自己耐心观察和筛选。而自己一个人的这段时间，是很好的理清自己真正需求的时间，静待花开。",
    service: "感情咨询 · 塔罗与星盘",
    screenshot: feedback48,
    publicApproved: true,
    deidentified: true,
    featured: true,
  },
  {
    id: "natal-chart-experience",
    category: "experience",
    quote: "整体咨询体验感很好，老师很专业。前期准备就很充足，会让我提前准备好一些基础信息和困惑的问题，预约好时间之后也会准时开始。咨询过程中老师会将专业的星盘术语用我能听懂的话讲出来，对我今年年初发生过的一些变化分析也很精准，关于困扰我的问题的解答也很详细，能够指明方向，整体时长也很充实，谢谢老师的咨询～",
    service: "本命盘深度咨询",
    screenshot: feedback50,
    publicApproved: true,
    deidentified: true,
    featured: true,
  },
  {
    id: "first-reading-trust",
    category: "experience",
    quote: "没事没事，我懂，算的第一次的时候我就蛮信你的。太感谢小姐姐了，今天辛苦啦。",
    service: "个人节奏速读",
    screenshot: feedback56,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "maya-totem-experience",
    category: "experience",
    quote: "光玛雅图腾分析可能会觉得很抽象啥的，但是美柒老师会指引你回到现实中去重构逻辑链，直到最后你悟出来的东西和玛雅图腾的东西合二为一。最后还有行动指南。",
    service: "玛雅图腾体验",
    screenshot: feedback57,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "annual-forecast-verified",
    category: "followup",
    quote: "你说六月要花点钱，不然会受伤流血之类的。还真的准。",
    service: "年运咨询 · 咨询后回访",
    screenshot: feedback49,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "sc-citizenship-timing",
    category: "followup",
    quote: "完美预测我 SC citizenship 批准时间。她说最快 3 月 20 日出结果，我在 3 月 19 收到初步信号，今天早上正式收到 In Principal Approval！！！竟然可以预测的如此精准！",
    service: "关键时间预测 · 咨询后回访",
    screenshot: feedback52,
    publicApproved: true,
    deidentified: true,
    featured: true,
  },
  {
    id: "business-turnaround",
    category: "followup",
    quote: "去年 11、12 月，我们的业绩连续下滑，大概 30%。那段时间，其实不是不努力，而是明显感觉到——有些地方不顺。她立刻帮我整体情况梳理了一下后，然后再告诉我说马上就要来了，真的太神奇了。结果从那之后开始，几乎每天都有实实在在的大单进来。有 Hannah 产品及服务的加持真的突飞猛进，很多原本卡住的事，真的会一一立刻解决。",
    service: "事业与商业决策咨询 · 咨询后回访",
    screenshot: feedback53,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "job-offer-progress",
    category: "followup",
    quote: "工作算是定下来了，谢谢你的帮忙。",
    service: "求职进展 · 咨询后回访",
    screenshot: feedback55,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "big-order-news",
    category: "followup",
    quote: "今天收到了个大单！",
    service: "咨询后回访 · 好消息分享",
    screenshot: feedback51,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "bowl-practice-followup",
    category: "craft",
    quote: "这种实践的就是你都不知道它会以什么样的方式帮你达成目的。",
    service: "阿拉姆魔碗 · 实践回访",
    screenshot: feedback54,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "guest-count-prediction",
    category: "followup",
    quote: "2位有兴趣的嘉宾，2位路演会员的合伙人，1位去过别分会但还在考虑的嘉宾，1位来当替代几次的年轻人。你 4-6，很标准的答案💯",
    service: "人数判断 · 咨询后回访",
    screenshot: feedback58,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "returning-client-booking",
    category: "experience",
    quote: "好的好的我预约一个，需要给定金吗，多少钱……我就之前在你的另一个号算过，真的准。",
    service: "年运咨询 · 复购预约",
    screenshot: feedback59,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "core-issue-insight",
    category: "experience",
    quote: "是的，谢谢你。直击了我俩最核心的问题，也是一直存在的问题。",
    service: "感情咨询 · 问题洞察",
    screenshot: feedback60,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "big-deal-good-news",
    category: "followup",
    quote: "宝贝，你太棒了，我开了大单🥰🥰🥰 这几天进账好几万。原本已经在跟进，来了又价格往上提。",
    service: "咨询后回访 · 好消息分享",
    screenshot: feedback61,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "mind-opened",
    category: "experience",
    quote: "老师讲得好好🥺……我就一下子感觉开阔了。",
    service: "咨询体验",
    screenshot: feedback62,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "report-instant-reaction",
    category: "experience",
    quote: "哇塞我来瞅瞅……我不中了哈哈哈哈",
    service: "咨询报告 · 即时反馈",
    screenshot: feedback63,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "feels-accurate",
    category: "experience",
    quote: "哇，没事的哈哈，谢谢美柒老师，感觉还挺准的。",
    service: "咨询报告 · 体验反馈",
    screenshot: feedback64,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "detailed-report",
    category: "experience",
    quote: "谢谢美柒老师！！～超级无敌详细了，父母关系这块和我自己感受到的信息非常相似，事业财富的建议也给了我好多信心😉 看到前世的部分还掉了两滴小珍珠 hhhh",
    service: "深度报告 · 体验反馈",
    screenshot: feedback65,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "business-wealth-chart",
    category: "craft",
    quote: "Hannah 是一位用“魔法”帮你植入信念的吠陀风水师。比如她说“招财”也分很多种，会让人真的静下来思考，到底我想赚/能赚/开心赚-怎样的钱；包括“桃花”和“缘分”，也不仅是男女之情，而是贵人之遇。愿你也收到她的魔法助力，永远相信自己会【越来越好】",
    service: "商业招财盘 · 客户评价",
    screenshot: feedback66,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "so-accurate",
    category: "experience",
    quote: "这个说的好准啊",
    service: "咨询报告 · 体验反馈",
    screenshot: feedback67,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "family-report-accurate",
    category: "experience",
    quote: "这个说的好准啊",
    service: "深度报告 · 家属反馈",
    screenshot: feedback68,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "yearly-return",
    category: "followup",
    quote: "不得不说，每年找你看牌是真的很准哪",
    service: "年度塔罗 · 长期回访",
    screenshot: feedback69,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "cleaning-business-boost",
    category: "craft",
    quote: "自从使用了 Hannah 的商业招财盘之后，业绩出现了非常明显的提升。原本几单还在观望、迟迟未确认的大项目，竟然在同一时期陆续敲定，一切顺得出乎意料地顺畅。对我来说，商业招财盘带来的不是迷信，而是一种“能量 + 思维清晰度 + 专注力”的综合效果。当人的频率稳了、心态对了，行动有效率，客户自然愿意跟随。",
    service: "商业招财盘 · 客户评价",
    screenshot: feedback70,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "wallpaper-4d",
    category: "craft",
    quote: "The wallpaper power lah bro haha … I strike my house number starter $20k / 果然有用",
    service: "能量壁纸 · 好消息回访",
    screenshot: feedback71,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "business-game-changer",
    category: "experience",
    quote: "Working with Hannah has been a game-changer for my business. I initially sought her guidance for a specific professional hurdle, but the insight she provided went far deeper than traditional consulting. She helped me identify and shift the underlying energy blocks that were stalling my progress. Since our sessions, I’ve noticed a significant increase in my professional clarity and a renewed sense of momentum in my ventures. If you are looking to align your business goals with a higher perspective, I cannot recommend her enough.",
    service: "事业与商业咨询 · 客户评价",
    screenshot: feedback72,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "tuning-reconnect",
    category: "craft",
    quote: "真是绝了 姐妹，每次我俩互删，每次调完频之后他都会给我打个电话。简直神了，都断连好几天了。我单方面为你封神了 姐妹，我要给你介绍客户",
    service: "调频仪式 · 回访反馈",
    screenshot: feedback73,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "new-order-3980",
    category: "followup",
    quote: "给你个反馈，今天收的3980代理，昨儿刚调的频",
    service: "调频仪式 · 成交回访",
    screenshot: feedback74,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "family-gratitude",
    category: "craft",
    quote: "Hannah has been a true blessing to my family. She helped my nephew pull through a very difficult period in the hospital with her incredible and heartfelt solution, and he is now steadily on the road to recovery. We are deeply grateful for her care, compassion, and dedication. I sincerely appreciate everything she has done for us and would highly recommend her to anyone seeking genuine guidance and support on their life journey.",
    service: "家属感谢 · 个人体验分享，不构成医疗承诺",
    screenshot: feedback75,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "voice-session-resonance",
    category: "experience",
    quote: "明白，是我😂 拿捏了",
    service: "线上语音咨询 · 体验反馈",
    screenshot: feedback76,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "wealth-candle",
    category: "craft",
    quote: "昨天刚点上招财蜡烛 今天就收4000+",
    service: "招财蜡烛 · 手作反馈",
    screenshot: feedback77,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "divination-change",
    category: "experience",
    quote: "我真的需要改变，我知道了。占卜真的是非常好，不是让你害怕未来，是让你变得更好预防未来会发生对你不好的事情。我必然努力改变，咱们一起",
    service: "塔罗占卜 · 体验反馈",
    screenshot: feedback78,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "marriage-timing",
    category: "followup",
    quote: "现在谈着21年结婚，正好和阿柒说的对上了",
    service: "感情时间预测 · 回访反馈",
    screenshot: feedback79,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "tarot-accurate-repeat",
    category: "experience",
    quote: "小姐姐蛮准的……嗯……我确实觉得他在pua我。挺准的，这个隔多久可以算一次呀",
    service: "感情塔罗 · 体验反馈",
    screenshot: feedback80,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "video-reading-remembered",
    category: "followup",
    quote: "见面说呗，就是比较准？比较准这样的，不会忘，欠你顿饭我都记得",
    service: "视频占卜 · 回访反馈",
    screenshot: feedback81,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "candle-movie-date",
    category: "craft",
    quote: "我靠，他约我看电影，我去，啊啊啊啊啊",
    service: "感情蜡烛 · 手作反馈",
    screenshot: feedback82,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "candle-reconcile",
    category: "craft",
    quote: "我昨天跟我对象分了，然后想挽回那种。确实，当时点了以后有2天挽回了，而且特别好",
    service: "挽回蜡烛 · 手作反馈",
    screenshot: feedback83,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "romance-prediction",
    category: "followup",
    quote: "小姐姐早上好呀，你真的挺厉害的，说准了这会我有桃花",
    service: "感情占卜 · 回访反馈",
    screenshot: feedback84,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "new-life",
    category: "followup",
    quote: "最后一次反馈：九月份真的开始新生活了，想好了今年剩下这段时间怎么走，考了普通话，约好了挣人生第一桶金（？，想清了副业的路线，搞明白了如何跟家人相处，和喜欢的人见面了，会相信未来会更好，最后希望会发财",
    service: "人生方向咨询 · 回访反馈",
    screenshot: feedback85,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "tuning-loyalty",
    category: "craft",
    quote: "太厉害了，你看看第一次数值……跟现在差别太大了。给人的感觉是关系已经定住了",
    service: "感情调频 · 仪式反馈",
    screenshot: feedback86,
    publicApproved: true,
    deidentified: true,
  },
  {
    id: "tuning-chat-better",
    category: "craft",
    quote: "那天晚上调频完，感觉跟我对象聊的就还挺好的。我以为要等个一段时间",
    service: "感情调频 · 仪式反馈",
    screenshot: feedback87,
    publicApproved: true,
    deidentified: true,
  },
];
export const feedbackCategories = [
  { id: "experience", title: "咨询体验", en: "Consultation experience" },
  { id: "followup", title: "咨询后回访", en: "After the consultation" },
  { id: "craft", title: "仪式与手作反馈", en: "Rituals & handcrafted pieces" },
] as const;
export const publicTestimonials = (items: Testimonial[]) => items.filter(item => item.publicApproved && item.deidentified);
export const visibleFeedbackCategories = (items: Testimonial[]) => feedbackCategories.filter(category => publicTestimonials(items).some(item => item.category === category.id));
