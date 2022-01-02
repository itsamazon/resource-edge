import React, { useState } from "react";
import re from '../../images/reicon.svg'
import res from '../../images/res.png'
import { Link } from 'react-router-dom'
import './styles.css'
import right from '../../images/rightgroup.png'
import left from '../../images/leftgroup.svg'
import circle from '../../images/check-circle-outline.png'


const Recoveryemail = (props) => {
    return(
        <div className='login'>
            <div className='logincontent'>
                <div className='head'>
                    <img src ={re}/>
                    <img src ={res}/>
                </div>
                <div></div>
                <div className='form'>
                    <h1 id='resetp'>Reset Password</h1>
                    <img src={circle} id='check_circle' />
                    <p id='emailp'>A recovery email has been sent to your email address. </p>
                    <div className='forgotpassword'>
                        <Link to='/login'>Back to login</Link>
                    </div>
                    
                </div>
            </div>
            <div className='decor'>
                    <img src={left}/>
                    <img src={right}/>
            </div>
        </div>
    )
}


export default Recoveryemail;
