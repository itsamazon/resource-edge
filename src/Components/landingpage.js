import react from "react";
import NavBar from "./NavBar";
import Intro from "./intro";

const LandingPage = () => {
    return(
        <>
        <NavBar />
        <div className='land'>
         <Intro />
        </div>
        </>
    )
}

export default LandingPage