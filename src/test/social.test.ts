import { describe, it, expect } from "vitest";
import { visibleSocialLinks, type SocialLink } from "@/data/social";
import { consultations } from "@/data/consultations";
describe("rules", () => {
  it("hides platforms without a real link", () => {
    const items: SocialLink[] = [{ id: "instagram", name: "Instagram", url: "", group: "brand" }, { id: "tiktok", name: "TikTok", url: "https://tiktok.com/@x", group: "brand" }];
    expect(visibleSocialLinks("brand", items).map(i => i.id)).toEqual(["tiktok"]);
  });
  it("shows the confirmed prices", () => {
    expect(consultations.map(c => c.price)).toEqual([99, 168, 198]);
  });
});
