import Link from "next/link";
import Image from "next/image";
import test from "../pages/test.png";
import Navbar from "@components/navbar";
import Hero from "@components/hero";
import Benefits from "@components/benefits";
import SideView from "@components/sideview";
import Features from "@components/features";
import OurTech from "@components/ourtech";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <Navbar />
      <Hero />
      <Benefits />
      <SideView />
      <Features />
      <OurTech />

      <div class="border-t mt-20">
        <footer>
          <div class="flex flex-col md:flex-row gap-3 items-center justify-between py-10 max-w-screen-lg mx-auto text-sm px-5 text-gray-500">
            <p>
              © 2023{" "}
              <a
                href="https://web3templates.com"
                target="_blank"
                rel="noopener">
                Code For Pittsburgh
              </a>
              . All rights reserved
            </p>
            <nav class="flex gap-5">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer">
                Terms
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer">
                License
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer">
                FAQ
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
