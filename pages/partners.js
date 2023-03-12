import Navbar from "@components/navbar";
import Footer from "@components/footer";

// Page Specific Imports
import Hero from "@components/partnerPage/hero";
import PartnersDisplay from "@components/partnerPage/partnersDisplay";
import MouseTrailer from "@components/mouseTrailer/mouseTrailer";

export default function Partners(){
    return(
        <>
            <MouseTrailer/>
            <Navbar />
            <PartnersDisplay />
            <Footer />
        </>
    )
}


