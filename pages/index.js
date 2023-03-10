import Navbar from "@components/navbar";
import Hero from "@components/landingPage/hero";
import AboutUs from "@components/landingPage/aboutus";
import PoweredBy from "@components/landingPage/poweredBy";
import Features from "@components/landingPage/features";
import Footer from "@components/footer";
import Cta from "@components/landingPage/cta";
import VerticalTimeline from "@components/landingPage/timeline";
import Stats from "@components/landingPage/stats";
import Teams from "@components/landingPage/Team";
import MouseTrailer from "@components/mouseTrailer/mouseTrailer";

function App() {
  return (
    <>
      <Navbar />
      <MouseTrailer />
      <Hero side="right" />
      <AboutUs/>
      <Cta side="left" />
      <Features />
      <VerticalTimeline />
      {/* <PoweredBy /> */}
      <Teams />
      <Stats />
      <Footer />
    </>
  );
}

export default App;
