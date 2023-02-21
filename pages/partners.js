import Navbar from "@components/navbar";
import Footer from "@components/footer";

// Page Specific Imports
import Hero from "@components/partnerPage/hero";
import PartnersDisplay from "@components/partnerPage/partnersDisplay";

export default function Partners(){
    return(
        <>
            <Navbar />
            <PartnersDisplay />
            <Footer />
        </>
    )
}


