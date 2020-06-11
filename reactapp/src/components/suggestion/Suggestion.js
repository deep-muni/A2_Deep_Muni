import React, {Component} from "react";
import './Suggestion.css';

class Suggestion extends Component {
    render() {
        return (
            <p className="name" onClick={this.props.onClick}>{this.props.name}</p>
        );
    }
}

export default Suggestion;
