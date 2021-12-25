import react from "react";
import res from "../images/res.png";
import re from "../images/re.png"
import menuicon from "../images/menu-outline.png"
import close from "../images/Dropdown/Vector.png"

const NavBar = () => {
    
    return(
    <nav className='navbar'  >
        <input type='checkbox' id='check'/>
        <label className='logo'>
            <img src={res} id='wlogo' />
            <img src={re} id='mlogo' />
        </label>
        <ul className='myul checked'>
            <li><a href=''>Features</a></li>
            <li><a href=''>About</a></li>
        </ul>
        <div className='btn checked'>
        <button id='signup'>Sign up</button>
        <button id='signin'>Sign in</button>
        </div>
        
        <label for="check" className='checkbtn'><img src={menuicon}/></label>
        <label for="check" className='closebtn'><img src={close}/></label>
    </nav>
)}

export default NavBar