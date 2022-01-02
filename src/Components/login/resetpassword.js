import React, { useState } from "react";
import { LoginAction } from '../../store/actions/loginAction'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import re from '../../images/reicon.svg'
import res from '../../images/res.png'
import { Link } from 'react-router-dom'
import './styles.css'
import right from '../../images/rightgroup.png'
import left from '../../images/leftgroup.svg'


const ResetPassword = (props) => {
    const navigate = useNavigate()
    const [isValid, setIsValid] = useState(false);
    const [error,seterror] = useState('')
    const [isLoading, setIsloading] = useState(false)
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const [progress, setProgress] = useState(0)
    const login = (email, password) => {
        console.log("login function fired")
        setIsloading(true);
        let payload = { email: email.toUpperCase(), password: password }
        props.loginAction(payload).then(result => {
            // console.log(props)
            if (result.success) {
                setIsloading(false);
                navigate("/dashboard")
            }
        })
    }
    const handleChange = (e) => {
        if(e.target.type === 'email'){
            if(e.target.value.trim()){
                if(e.target.value != ''){
                    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]+))$/
                    const test = regex.test(e.target.value)
                    if(regex.test(e.target.value)){
                        console.log('pass')
                        setemail(e.target.value);
                        // setProgress(1)            
                    }
                }else {
                    seterror('Enter email address')
                }
            }
           
        } else {

            //check length of password
            if(e.target.value.length < 6) {
                setIsValid(false)
            }else {
                setIsValid(true)
                setPassword(e.target.value)
                // setProgress(2)
                
            }
    }
    
}

    

    const handleClick = (e) => {
        e.preventDefault();
        if({error} != ''){

        }
        else
        {login(email, password);}
    }
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
                    <p id='resetpp'>To enable us reset your password, enter your email below</p>
                    <form onSubmit={handleClick}>
                        <label>Email Address:</label>
                        <input id="email" type="email" onChange={handleChange} name="email" placeholder='Enter email'/>
                        { error ? <p>{error} </p> : null}
                        <button  id='submit' type="submit">{isLoading?'Loading': 'Sign in'}</button>
                    </form>
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

const mapStateToProps = (state) => {
    // console.log('state',state);
    return {
        userDetails: state.login.userDetails,
    }
}

const mapDispatchToProps = {
    loginAction: LoginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
