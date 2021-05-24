import React from "react";
import {Switch, Route,Redirect} from "react-router";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import Resume from "./Resume";
import NewResume from "./newResume";
import ReadOtp from "./readOtp";

export default function Routes(props) {
    return(

        <BrowserRouter basename={'/portfolio'}>
            <Switch>
                <Route path={'/'} exact render={(props)=><App {...props}/>}/>
                <Route path={'/resume/'} exact render={(props)=><NewResume {...props}/>}/>
                <Route path={'/newResume'} exact render={(props)=><Resume {...props}/>}/>
                <Route path={'/otptest'} exact render={(props)=><ReadOtp {...props}/>}/>
            </Switch>
        </BrowserRouter>
    )

}