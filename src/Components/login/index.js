import React, { useState } from "react";
import { LoginAction } from '../../store/actions/loginActions'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import re from '../../images/reicon.svg'
import res from '../../images/res.png'
import { Link } from 'react-router-dom'
import './styles.css'
import right from '../../images/rightgroup.png'
import left from '../../images/leftgroup.svg'


const Login = () => {
    const navigate = useNavigate()
    const [isLoading, setIsloading] = useState(false)
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')
    const login = (username, password) => {
        console.log("login function fired")
        setIsloading(true);
        let payload = { username: username.toUpperCase(), password: password }
        props.loginAction(payload).then(result => {
            // console.log(props)
            if (result.success) {
                setIsloading(false);
                navigate("/dashboard")
            }
        })
    }
    const handleChange = (e) => {
        return (
            e.target.name === 'username' ? setusername(e.target.value) :
                e.target.name === 'password' ? setPassword(e.target.value) :
                    () => { }
        )
    }

    const handleClick = (e) => {
        e.preventDefault();
        username.length && password.length && login(username, password);
    }
    return(
        <div className='login'>
            <div className='logincontent'>
                <div className='head'>
                    <img src ={re}/>
                    <img src ={res}/>
                </div>
                <div className='form'>
                    <h1>Log in</h1>
                    <p>Access your resource edge account</p>
                    <form>
                        <label>Email Address:</label>
                        <input id='email' type="email" name="email" placeholder='Enter email'/>
                        <input id='submit' type="submit" value="Log in" />
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
