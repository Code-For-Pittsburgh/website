import Navbar from "@components/navbar";
import Footer from "@components/footer";

// page specific imports
import CompanySite from "@components/companyPage/companySite";

export default function Company(){
    return(
        <>
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