import React, {Component} from "react";
import Navigation from "../navigation/Navigation";

class Result extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <p>{this.props.location.state.id}</p>
            </div>
        );
    }
}

export default Result;
