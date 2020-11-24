import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import NoMatch from "./NoMatch";

function Application() {
    const user = null;
    return (
        user ?
            <ProfilePage />
            :
        <Router>
            <Switch>
                <Route exact path="/">
                    <SignIn />
                </Route>
                <Route exact path="/signUp">
                    <SignUp />
                </Route>
                <Route exact path="/passwordReset">
                    <PasswordReset />
                </Route>
                <Route>
                    <NoMatch />
                </Route>
            </Switch>
        </Router>

    );
}
export default Application;