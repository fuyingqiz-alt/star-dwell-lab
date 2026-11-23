export type SocialPlatform = "instagram" | "tiktok" | "facebook" | "xiaohongshu" | "youtube" | "channels";
export interface SocialLink { id: SocialPlatform; name: string; url: string; group: "brand" | "personal" }
// Fill in real URLs only; entries with an empty url are never shown.
export const socialLinks: SocialLink[] = [
  { id: "instagram", name: "Instagram", url: "https://www.instagram.com/stardwelllab/", group: "brand" },
  { id: "tiktok", name: "TikTok", url: "", group: "brand" },
  { id: "facebook", name: "Facebook", url: "https://www.facebook.com/share/1A2ce173z4", group: "brand" },
  { id: "youtube", name: "YouTube", url: "https://www.youtube.com/channel/UCRAMrW_4vqbQjQTuvioC32g", group: "brand" },
  { id: "channels", name: "视频号", url: "", group: "brand" },
  { id: "xiaohongshu", name: "小红书", url: "https://xhslink.cn/o/KUSzr4vsU4", group: "personal" },
];
export const visibleSocialLinks = (group: SocialLink["group"], items = socialLinks) => items.filter(item => item.group === group && /^https:\/\//.test(item.url));
