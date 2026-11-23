export type SocialPlatform = "instagram" | "tiktok" | "facebook" | "xiaohongshu" | "youtube" | "channels";
export interface SocialLink { id: SocialPlatform; name: string; url: string; group: "brand" | "personal" }
// Fill in real URLs only; entries with an empty url are never shown.
export const socialLinks: SocialLink[] = [
  { id: "instagram", name: "Instagram", url: "", group: "brand" },
  { id: "tiktok", name: "TikTok", url: "", group: "brand" },
  { id: "facebook", name: "Facebook", url: "", group: "brand" },
  { id: "youtube", name: "YouTube", url: "", group: "brand" },
  { id: "channels", name: "视频号", url: "", group: "brand" },
  { id: "xiaohongshu", name: "小红书", url: "", group: "personal" },
];
export const visibleSocialLinks = (group: SocialLink["group"], items = socialLinks) => items.filter(item => item.group === group && /^https:\/\//.test(item.url));
