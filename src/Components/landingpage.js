import react from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";

const LandingPage = () => {
    return(
        <div>
            <NavBar />
            <div className='land'>
            <Intro />
            </div>
        </div>
    )
}

export default LandingPage