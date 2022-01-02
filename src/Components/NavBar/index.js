import react, {useState} from "react";
import res from "../../images/res.png";
import re from "../../images/re.png"
import menuicon from "../../images/menu-outline.png"
import close from "../../images/Dropdown/Vector.png"
import './style.css'
import Authentication from "../authenticationpage";
import { useNavigate, Link } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setOpen] = useState(false)
    const toggleMenu = ()=>setOpen(!isOpen)
    return(
    <nav onBlur={toggleMenu} className='navbar'>
       {/** <input type='checkbox' id='check'/> */}
        <button onClick={toggleMenu}  type='checkbox' className='checkbtn'>
            {isOpen? <img src={close}/>:<img src={menuicon}/> }
        </button>
        <div className='logo'>
            <img src={res} id='wlogo' />
            <img src={re} id='mlogo' />
        </div>

        <ul className='checked'>
        <li><a href=''>Features</a></li>
        <li><a href=''>About</a></li>
        </ul>
        <div className='btn checked'>
            <button id='signup'>Sign up</button>
            <button id='signin'>Sign in</button>
        </div>

        {isOpen && <>
            <ul className='myul'>
                <li><a href=''>Features</a></li>
                <li><a href=''>About</a></li>
            </ul>
            <div className='buttons-container'>
                <Link to="/signup" id='signup'>Sign Up</Link>
                <Link to="/login" id='signin' >Sign In</Link>
            </div>
         </>
        }
        
        
       
       {/** <label for="check" className='checkbtn'><img src={menuicon}/></label>
    <label for="check" className='closebtn'><img src={close}/></label>*/}
    </nav>
)}

export default NavBar