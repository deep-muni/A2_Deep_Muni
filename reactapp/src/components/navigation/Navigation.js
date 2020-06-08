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
            {'name': 'Cart', 'url': 'cart', cname: 'item hide'},
            {'name': 'Login', 'url': 'login', cname: 'item hide' },
            {'name': 'Register', 'url': 'register', cname: 'item hide'},
            {'name': 'Account', 'url': 'account', cname: 'item'},
            {'name': 'Category', 'url': 'category', cname: 'item'},
            {'name': 'Help', 'url': 'help', cname: 'item'},
            {'name': 'Admin', 'url': 'admin', cname: 'item'}
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
                <nav className="bar">
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
                    <Link to={'/'}><div className="logo"/></Link>
                </nav>
                <div className={this.state.showing ? "side-panel show-panel" : "side-panel"}>
                    <ul>
                        {
                            this.side_panel.map((item,index) => {
                                return(
                                    <li className={item.cname} key={index}>
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
