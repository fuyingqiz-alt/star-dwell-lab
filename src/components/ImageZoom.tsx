import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ZoomIn } from "lucide-react";

export default function ImageZoom({ src, label, className = "" }: { src: string; label: string; className?: string }) {
  return <Dialog>
    <DialogTrigger asChild><Button variant="ghost" className={`image-zoom relative h-auto p-0 overflow-hidden ${className}`} aria-label={label}>
      <img src={src} alt={label} className="w-full h-full object-contain" loading="lazy" />
      <span className="absolute bottom-2 right-2 p-1.5 bg-background text-primary rounded-sm"><ZoomIn className="w-4 h-4" /></span>
    </Button></DialogTrigger>
    <DialogContent className="w-[calc(100%-2rem)] max-w-3xl max-h-[90dvh] overflow-y-auto p-5 pt-12">
      <DialogTitle className="text-base">{label}</DialogTitle>
      <img src={src} alt={label} className="max-h-[72dvh] w-full object-contain" />
    </DialogContent>
  </Dialog>;
}