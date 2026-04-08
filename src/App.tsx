import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
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
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
