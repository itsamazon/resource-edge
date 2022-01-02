import react from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Hr from "./Hr";
import AdminL from "./AdminL";
import Footer from "./Footer";
import '../styles/components/landingpage.css'

const LandingPage = () => {
    return(
        <div>
            <NavBar />
            <Intro /> 
            <Hr />
            <AdminL />
            <Footer />
        </div>
    )
}

export default LandingPage