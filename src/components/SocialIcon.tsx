import { Facebook, Instagram, Music2, BookHeart, Youtube, Video } from "lucide-react";
import type { SocialPlatform } from "@/data/social";
const map = { instagram: Instagram, tiktok: Music2, facebook: Facebook, xiaohongshu: BookHeart, youtube: Youtube, channels: Video };
export default function SocialIcon({ id }: { id: SocialPlatform }) { const Icon = map[id]; return <Icon className="w-4 h-4" aria-hidden="true" />; }
