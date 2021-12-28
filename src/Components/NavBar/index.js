import react from "react";
import res from "../../images/res.png";
import re from "../../images/re.png"
import menuicon from "../../images/menu-outline.png"
import close from "../../images/Dropdown/Vector.png"
import './style.css'
import Authentication from "../authenticationpage";
import { useNavigate, Link } from 'react-router-dom';

const NavBar = () => {
    const loadlogin= () => {
        return (
          <Authentication />
        )
    }
    
    return(
    <nav className='navbar'>
        <input type='checkbox' id='check'/>
        <div className='logo'>
            <img src={res} id='wlogo' />
            <img src={re} id='mlogo' />
        </div>
       
            <ul className='myul checked'>
                <li><a href=''>Features</a></li>
                <li><a href=''>About</a></li>
            </ul>
            <div className='btn checked'>
                <Link to="/signup" id='signup'>Sign Up</Link>
                <Link to="/login" id='signin' >Sign In</Link>
            </div>
     
        
        
       
       <label for="check" className='checkbtn'><img src={menuicon}/></label>
        <label for="check" className='closebtn'><img src={close}/></label>
    </nav>
)}

export default NavBar