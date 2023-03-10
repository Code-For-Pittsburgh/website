import Navbar from "@components/navbar";
import Footer from "@components/footer";

// page specific imports
import AboutSite from "@components/aboutPage/aboutSite";

export default function About(){
    return(
        <>
            <Navbar />
            <AboutSite />
            <Footer />
        </>
    )
}