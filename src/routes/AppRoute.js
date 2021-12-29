import {BrowserRouter,Route,Routes} from 'react-router-dom';
import React from "react";
import LandingPage from '../Components/landingpage';
import Authentication from "../Components/authenticationpage";
import Dashboardpage from '../Components/dashboard';
const AppRoute = () =>(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element = { < LandingPage />} />
            <Route exact path='/login' element= {<Authentication />}/>
            <Route path='/dashboard' element= {<Dashboardpage />}/>
            
        </Routes>
     </BrowserRouter>
)

export default AppRoute