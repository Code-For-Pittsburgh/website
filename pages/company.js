import Navbar from "@components/navbar";
import Footer from "@components/footer";
import MouseTrailer from "@components/mouseTrailer/mouseTrailer";

// page specific imports
import CompanySite from "@components/companyPage/companySite";

export default function Company(){
    return(
        <>
            <MouseTrailer/>
            <Navbar />
            <div className="mx-auto my-96 text-center">
            <p>
                This page is underdevelopment. Check back soon!
            </p>
        </div> 
            <Footer />
        </>
    )
}