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


const Login = (props) => {
    const navigate = useNavigate()
    const [isValid, setIsValid] = useState(false);
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
            // console.log('hello')
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]+))$/
            const test = regex.test(e.target.value)
            if(regex.test(e.target.value)){
                console.log('pass')
                setemail(e.target.value);
                setProgress(1)            
            }
            ;
        } else {

            //check length of password
            if(e.target.value.length < 6) {
                setIsValid(false)
            }else {
                setIsValid(true)
                setPassword(e.target.value)
                // setProgress(2)
                
            }
                
        
        //  return (
        //      setProgress(1)
        // //     e.target.name === 'email' ? setemail(e.target.value) :
        // //         e.target.name === 'password' ? setPassword(e.target.value) :
        // //             () => { }
        // )
    }
    
}

    

    const handleClick = (e) => {
        e.preventDefault();
        login(email, password);
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
                    <h1>Log in</h1>
                    <p>Access your resource edge account</p>
                    <div id={progress === 0 ? "hidemail": "displaydetail"}>
                        <p>Supposed Fullname</p>
                        <sm >{email}</sm>
                    </div>
                    <form onSubmit={handleClick}>
                        <label id={progress === 0 ? null: "hidemail"}>Email Address:</label>
                        <input id={progress === 0 ? "email" : "hidemail"} type="email" onChange={handleChange} name="email" placeholder='Enter email'/>
                        <label id={progress === 0 ? "hidepassword": progress === 1 ? null:null}>Password:</label>
                        <input id={progress === 0 ? "hidepassword": progress === 1 ? "password":null} onChange={handleChange}  type="password" name="password" placeholder='Enter password'/>
                        { isValid ? <button  id='submit' type="submit"> {isLoading?'Loading': 'Sign in'}</button> :
                        <button  id='submit' disabled type="submit"></button>}
                        
                    </form>
                    <div className='forgotpassword'>
                        <Link to=''>Forgot password?</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
