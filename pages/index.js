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
import LogoCloud from "@components/landingPage/LogoCloud";
import SmallBanner from "@components/landingPage/smallbanner";
import Pricing from "@components/landingPage/Pricing";
import Resources from "@components/landingPage/Resources";
import Globe from "@components/landingPage/globe";

// mouse trailer
import MouseTrailer from "@components/mouseTrailer/mouseTrailer";

function App() {
  return (
    <>
      <MouseTrailer />
      <Hero side="right" />
      {/* <LogoCloud /> */}
      {/* <Globe/> */}
      <AboutUs />
      {/* <Pricing /> */}
      {/* <Resources /> */}

      <Features />
      <VerticalTimeline />
      {/* <PoweredBy /> */}
      <Teams />
      <Stats />
    </>
  );
}

export default App;
