import Navbar from "@components/navbar";
import Hero from "@components/hero";
import Benefits from "@components/benefits";
import SideView from "@components/sideview";
import Features from "@components/features";
import OurTech from "@components/ourtech";
import Footer from "@components/footer";
import VerticalTimeline from "@components/timeline";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <Navbar />
      <Hero />
      <SideView />
      <Benefits />
      <Benefits right={true} />
      <Features />
      <OurTech />
      <VerticalTimeline />
      <Footer />
    </div>
  );
}

export default App;
