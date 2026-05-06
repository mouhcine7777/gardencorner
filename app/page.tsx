import HeroSection from "./components/HeroSection";
import StickyMenu from "./components/StickyMenu";
import AboutCorners from "./components/AboutCorners";
import EventsSlider from "./components/EventsSlider";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StickyMenu />
      <AboutCorners />
      <EventsSlider />
      <Footer />
    </main>
  );
}