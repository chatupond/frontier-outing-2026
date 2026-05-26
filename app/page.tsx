import HeroSection from "./components/HeroSection";
import ResortSection from "./components/ResortSection";
import GallerySection from "./components/GallerySection";
import ScheduleSection from "./components/ScheduleSection";
import TransportSection from "./components/TransportSection";
import LunchSection from "./components/LunchSection";
import BedroomSection from "./components/BedroomSection";
import VirtualTourSection from "./components/VirtualTourSection";
import DinnerSection from "./components/DinnerSection";
import BreakfastSection from "./components/BreakfastSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ResortSection />
      <ScheduleSection />
      <TransportSection />
      <LunchSection />
      <GallerySection />
      <VirtualTourSection />
      <DinnerSection />
      <BedroomSection />
      <BreakfastSection />
      <Footer />
    </main>
  );
}
