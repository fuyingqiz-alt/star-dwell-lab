import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FaithSection from "@/components/FaithSection";
import StrategySection from "@/components/StrategySection";
import WorkshopSection from "@/components/WorkshopSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background scroll-smooth">
    <Header />
    <HeroSection />
    <FaithSection />
    <StrategySection />
    <WorkshopSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
