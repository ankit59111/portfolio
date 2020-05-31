import React from "react";
import {Switch, Route,Redirect} from "react-router";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import Resume from "./Resume";

export default function Routes(props) {
    return(
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact render={(props)=><App {...props}/>}/>
                <Route path={'/resume'} exact render={(props)=><Resume {...props}/>}/>
            </Switch>
        </BrowserRouter>
    )

}