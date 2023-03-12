import Navbar from "@components/navbar";
import Footer from "@components/footer";
import MouseTrailer from "@components/mouseTrailer/mouseTrailer";

export default function About(){
    return(
        <>
            <MouseTrailer/>
            <Navbar />
            <div className="text-center mx-auto my-96">
                This post is comming soon, but just know we are planning something big. Check out our timeline on the main page for a hint as to what&apos;s coming. 
            </div>
            <Footer />
        </>
    )
}