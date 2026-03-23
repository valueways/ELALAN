import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Portfolio from "./components/Portfolio";
import StructuralIntegrity from "./components/StructuralIntegrity";
import ReviewGrid from "./components/ReviewGrid";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior for the whole page
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="relative">
      <CustomCursor />
      <Navbar />
      <Hero />
      <StatsBar />
      <Portfolio />
      <StructuralIntegrity />
      <ReviewGrid />
      <Footer />
      
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] grain-overlay opacity-[0.015]" />
    </main>
  );
}
