import {BrowserRouter,Route,Routes} from 'react-router-dom';
import React from "react";
import LandingPage from '../Components/landingpage';
import Authentication from "../Components/authenticationpage";
import Dashboardpage from '../Components/dashboard';
import ResetPassword from '../Components/login/resetpassword';
import Recoveryemail from '../Components/login/recovery';
const AppRoute = () =>(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element = { < LandingPage />} />
            <Route exact path='/login' element= {<Authentication />}/>
            <Route exact path='/dashboard' element= {<Dashboardpage />}/>
            <Route exact path='/resetpassword' element= {<ResetPassword />}/>
            <Route exact path='/recoveryemail' element={<Recoveryemail />} />
        </Routes>
     </BrowserRouter>
)

export default AppRoute