import Navbar from "@components/navbar";
import Footer from "@components/footer";
import MouseTrailer from "@components/mouseTrailer/mouseTrailer";

// Page Specific Imports
import ContactEntry from "../components/contactPage/contactEntry";

export default function Contact(){
    return(
        <>
            <MouseTrailer/>
            <Navbar />
            <ContactEntry />
            <Footer />
        </>
    )
}



