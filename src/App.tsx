import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/components/LanguageProvider";
import Index from "./pages/Index.tsx";
import Feedback from "./pages/Feedback.tsx";
import Workshop from "./pages/Workshop.tsx";
import NotFound from "./pages/NotFound.tsx";
import TalismansDetail from "./pages/TalismansDetail.tsx";
import BowlsDetail from "./pages/BowlsDetail.tsx";
import PapyrusDetail from "./pages/PapyrusDetail.tsx";
import BotanicalDetail from "./pages/BotanicalDetail.tsx";
import FaithAbrahamic from "./pages/FaithAbrahamic.tsx";
import FaithEastern from "./pages/FaithEastern.tsx";
import FaithNatural from "./pages/FaithNatural.tsx";
import StrategyRetainer from "./pages/StrategyRetainer.tsx";
import StrategyTemporal from "./pages/StrategyTemporal.tsx";

const queryClient = new QueryClient();

// react-router does not jump to #anchors on its own, so nav links like /#about need this
function HashScroll() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return; }
    const jump = () => {
      const target = document.getElementById(hash.slice(1));
      if (!target) return false;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    };
    if (!jump()) {
      // the section may not be mounted yet right after a page change
      const timer = window.setTimeout(jump, 150);
      return () => window.clearTimeout(timer);
    }
  }, [pathname, hash]);
  // tapping a link whose hash is already in the URL changes nothing, so scroll on click too
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest?.("a");
      const href = link?.getAttribute("href") ?? "";
      const id = href.slice(href.indexOf("#") + 1);
      if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
      <BrowserRouter>
        <HashScroll />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/workshop/talismans" element={<TalismansDetail />} />
          <Route path="/workshop/bowls" element={<BowlsDetail />} />
          <Route path="/workshop/papyrus" element={<PapyrusDetail />} />
          <Route path="/workshop/botanical" element={<BotanicalDetail />} />
          <Route path="/faith/abrahamic" element={<FaithAbrahamic />} />
          <Route path="/faith/eastern" element={<FaithEastern />} />
          <Route path="/faith/natural" element={<FaithNatural />} />
          <Route path="/strategy/retainer" element={<StrategyRetainer />} />
          <Route path="/strategy/temporal" element={<StrategyTemporal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
