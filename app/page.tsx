import HeroSection from "./components/HeroSection";
import ResortSection from "./components/ResortSection";
import GallerySection from "./components/GallerySection";
import ScheduleSection from "./components/ScheduleSection";
import TransportSection from "./components/TransportSection";
import LunchSection from "./components/LunchSection";
import BedroomSection from "./components/BedroomSection";
import AmenitiesSection from "./components/AmenitiesSection";
import VirtualTourSection from "./components/VirtualTourSection";
import DinnerSection from "./components/DinnerSection";
import BreakfastSection from "./components/BreakfastSection";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ScrollReveal><ResortSection /></ScrollReveal>
      <ScrollReveal><TransportSection /></ScrollReveal>
      <ScrollReveal><ScheduleSection /></ScrollReveal>
      <ScrollReveal><LunchSection /></ScrollReveal>
      <ScrollReveal><GallerySection /></ScrollReveal>
      <ScrollReveal><VirtualTourSection /></ScrollReveal>
      <ScrollReveal><DinnerSection /></ScrollReveal>
      <ScrollReveal><BedroomSection /></ScrollReveal>
      <ScrollReveal><AmenitiesSection /></ScrollReveal>
      <ScrollReveal><BreakfastSection /></ScrollReveal>
      <ScrollReveal><Footer /></ScrollReveal>
      <BackToTop />
    </main>
  );
}
