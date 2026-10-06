import SiteHeader from "./component/SiteHeader.jsx";
import Hero from "./component/Hero.jsx";
import PracticeAreas from "./component/PracticeAreas.jsx";
import AboutSection from "./component/AboutSection.jsx";
import InsightsSection from "./component/InsightsSection.jsx";
import ContactSection from "./component/ContactSection.jsx";
import SiteFooter from "./component/SiteFooter.jsx";

export default function App() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <Hero />
        <PracticeAreas />
        <AboutSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
