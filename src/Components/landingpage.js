import react from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Hr from "./Hr";

const LandingPage = () => {
    return(
        <div>
            <NavBar />
            <div className='land'>
            <Intro />
            <Hr />
            </div>
            
        </div>
    )
}

export default LandingPage