import { describe, it, expect } from "vitest";
import { visibleSocialLinks, type SocialLink } from "@/data/social";
import { consultations } from "@/data/consultations";
describe("rules", () => {
  it("hides platforms without a real link", () => {
    const items: SocialLink[] = [{ id: "instagram", name: "Instagram", url: "", group: "brand" }, { id: "tiktok", name: "TikTok", url: "https://tiktok.com/@x", group: "brand" }];
    expect(visibleSocialLinks("brand", items).map(i => i.id)).toEqual(["tiktok"]);
  });
  it("shows the confirmed prices", () => {
    expect(consultations.map(c => c.price)).toEqual([60, 188, 188, undefined]);
    expect(consultations.find(c => c.id === "rhythm")?.minutes).toBe(20);
    expect(consultations.some(c => c.title.includes("2027"))).toBe(false);
  });
  it("keeps the business consultation price on enquiry until confirmed", () => {
    expect(consultations.find(c => c.id === "business")?.price).toBeUndefined();
  });
  it("shows the brand links the owner provided, with tracking params stripped", () => {
    expect(visibleSocialLinks("brand").map(i => i.url)).toEqual([
      "https://www.instagram.com/stardwelllab/",
      "https://www.tiktok.com/@_miracle809",
      "https://www.facebook.com/share/1A2ce173z4",
      "https://www.youtube.com/channel/UCRAMrW_4vqbQjQTuvioC32g",
    ]);
  });
  it("shows 小红书 under the personal group", () => {
    expect(visibleSocialLinks("personal").map(i => i.url)).toEqual(["https://xhslink.cn/o/KUSzr4vsU4"]);
  });
});
