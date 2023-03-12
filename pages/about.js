import Navbar from "@components/navbar";
import Footer from "@components/footer";
import MouseTrailer from "@components/mouseTrailer/mouseTrailer";

// page specific imports
import AboutSite from "@components/aboutPage/aboutSite";

export default function About(){
    return(
        <>
            <MouseTrailer/>
            <Navbar />
            <AboutSite />
            <Footer />
        </>
    )
}