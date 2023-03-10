import Navbar from "@components/navbar";
import Footer from "@components/footer";

export default function MissingPage(){
    return(
        <>
            <Navbar />
            <div className="mx-auto my-96 text-center">
                <p>
                    Uh oh. We couldn&apos;t find this page. Check back soon!
                </p>
            </div>
            <Footer />
        </>
    )
}