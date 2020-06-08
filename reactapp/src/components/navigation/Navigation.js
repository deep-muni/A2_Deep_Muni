import React from "react";
import './Navigation.css';
import {Link} from "react-router-dom";

const {Component} = require("react");

class Navigation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showing: false
        }

        this.side_panel = [
            {'name': 'Account', 'url': 'account'},
            {'name': 'Category', 'url': 'category'},
            {'name': 'Help', 'url': 'help'},
            {'name': 'Admin', 'url': 'admin'},
        ];

        this.navigate = [
            {'name': 'Cart', 'url': 'cart'},
            {'name': 'Login', 'url': 'login'},
            {'name': 'Register', 'url': 'register'}
        ];

        this.toggle = this.toggle.bind(this);

    }

    toggle(){
        const isShowing = this.state.showing;
        this.setState({
            showing: !isShowing
        })
    }

    render() {
        return (
            <div>
                <div className="bar">
                    <div className="menu" onClick={this.toggle}/>
                    <div className={this.state.showing ? "search-bar search-move" : "search-bar"}>
                        <div className="search">
                            <input type="text" id="search" placeholder="Search"/>
                        </div>
                        <div className="search-icon"/>
                    </div>
                    <ul className="right">
                        {
                            this.navigate.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <div className="label">{item.name}</div>
                                        <Link to={item.url} className="link"/>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className={this.state.showing ? "side-panel show-panel" : "side-panel"}>
                    <ul>
                        {
                            this.side_panel.map((item,index) => {
                                return(
                                    <li className="item" key={index}>
                                        <div className="label">{item.name}</div>
                                        <div className="arrow"/>
                                        <Link to={item.url} className="link"/>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>

            </div>
        );
    }
}

export default Navigation;
