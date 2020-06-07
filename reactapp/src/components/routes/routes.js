import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../home/Home";
import Register from "../register/Register";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/register' component={Register}/>
            </Switch>
        );
    }
}

export default Routes;
