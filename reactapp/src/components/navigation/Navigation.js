import React, {Component} from "react";
import './Navigation.css';
import {Link, withRouter} from "react-router-dom";

class Navigation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showing: false
        }

        this.side_panel = [
            {'name': 'Cart', 'url': '', cname: 'item hide'},
            {'name': 'Login', 'url': '', cname: 'item hide' },
            {'name': 'Register', 'url': 'register', cname: 'item hide'},
            {'name': 'Account', 'url': '', cname: 'item'},
            {'name': 'Category', 'url': '', cname: 'item'},
            {'name': 'Help', 'url': '', cname: 'item'},
            {'name': 'Admin', 'url': '', cname: 'item'}
        ];

        this.navigate = [
            {'name': 'Cart', 'url': ''},
            {'name': 'Login', 'url': ''},
            {'name': 'Register', 'url': 'register'}
        ];

        this.toggle = this.toggle.bind(this);
        this.validate = this.validate.bind(this);

    }

    toggle(){
        const isShowing = this.state.showing;
        this.setState({
            showing: !isShowing
        })
    }

    validate(e){
        if((e.type === "keydown" && e.keyCode === 13) || e.type === "click"){
            let val = document.getElementById("search").value;
            if(val === ""){
                alert("Please enter a search string")
            }else{
                this.props.history.push({
                    pathname: '/result',
                    search: '?q='+val,
                });
            }
        }
    }

    render() {
        return (
            <nav className="bar">
                <div className="menu" onClick={this.toggle}/>
                <div className={this.state.showing ? "search-bar search-move" : "search-bar"}>
                    <div className="search">
                        <input type="text" id="search" placeholder="Search" onKeyDown={this.validate}/>
                    </div>
                    <div className="search-icon" onClick={this.validate}/>
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
            </nav>
        );
    }
}

export default withRouter(Navigation);
