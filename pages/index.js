import Navbar from "@components/navbar";
import Hero from "@components/hero";
import Benefits from "@components/benefits";
import SideView from "@components/sideview";
import Features from "@components/features";
import OurTech from "@components/ourtech";
import Footer from "@components/footer";
import VerticalTimeline from "@components/timeline";
import Data from "@components/data/sideviewData";
import Faq from "@components/faq";
import Cta from "@components/cta";
import AboutUs from "@components/aboutus";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <Navbar />
      <Hero />
      {Data.map((data, index) => (
        <SideView key={index} data={data} />
      ))}
      <AboutUs />
      <Benefits />
      <Features />
      <OurTech />
      <VerticalTimeline />
      <Faq />
      <Cta />

      <Footer />
    </div>
  );
}

export default App;
