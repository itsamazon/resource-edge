import {BrowserRouter,Route,Routes} from 'react-router-dom';
import React from "react";
import LandingPage from '../Components/landingpage';
import Authentication from "../Components/authenticationpage";
import Dashboardpage from '../Components/dashboard';
import ResetPassword from '../Components/login/resetpassword';
const AppRoute = () =>(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element = { < LandingPage />} />
            <Route exact path='/login' element= {<Authentication />}/>
            <Route exact path='/dashboard' element= {<Dashboardpage />}/>
            <Route exact path='/resetpassword' element= {<ResetPassword />}/>
            
        </Routes>
     </BrowserRouter>
)

export default AppRoute