import react from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Hr from "./Hr";
import AdminL from "./AdminL";
import Footer from "./Footer";

const LandingPage = () => {
    return(
        <div>
            <NavBar />
            <div className='land'>
            <Intro />
            <Hr />
            <AdminL/>
            <Footer/>
            </div>
            
        </div>
    )
}

export default LandingPage