import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../home/Home";
import Register from "../register/Register";
import Result from "../result/Result";
import Profile from "../profile/Profile";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/result' component={Result}/>
                <Route exact path='/profile' component={Profile}/>
            </Switch>
        );
    }
}

export default Routes;
