import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface DetailPageLayoutProps {
  children: React.ReactNode;
  backLabel?: string;
}

const DetailPageLayout = ({ children, backLabel = "返回首页 / Back" }: DetailPageLayoutProps) => (
  <div className="min-h-screen bg-background">
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-heading text-xl md:text-2xl font-semibold tracking-[0.15em] text-primary">
            STAR-DWELL LAB
          </span>
          <span className="font-heading text-xs md:text-sm text-silver tracking-[0.3em] mt-0.5">
            星 宅 所
          </span>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-silver hover:text-primary transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="tracking-widest">{backLabel}</span>
        </Link>
      </div>
    </header>
    <main className="pt-24 pb-20">{children}</main>
    <footer className="border-t border-border py-8 text-center">
      <p className="text-xs text-silver tracking-widest">
        © 2026 STAR-DWELL LAB. All Rights Reserved.
      </p>
    </footer>
  </div>
);

export default DetailPageLayout;
