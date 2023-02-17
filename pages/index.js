import Navbar from "@components/navbar";
import Hero from "@components/hero";
import AboutUs from "@components/aboutus";
import PoweredBy from "@components/poweredBy";
import Features from "@components/features";
import Footer from "@components/footer";
import Cta from "@components/cta";
import VerticalTimeline from "@components/timeline";
import Stats from "@components/stats";
import Teams from "@components/Team";

function App() {
  return (
    <div>
      <Navbar />
      <Hero side="right" />
      <AboutUs/>
      <Cta side="left" />
      <Features />
      <VerticalTimeline />
      {/* <PoweredBy /> */}
      <Teams />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
