import React, {Component} from "react";
import './Footer.css';
import {Link} from "react-router-dom";

class Footer extends Component {

    constructor(props) {
        super(props);

        this.list_1 = [
            {'name': 'Terms & Condition', 'link' : ''},
            {'name': 'Careers', 'link' : ''},
            {'name': 'Privacy Policy', 'link' : ''}
        ];
        this.list_2 = [
            {'name': 'Google', 'link' : '', 'cname': 'fa fa-google icon'},
            {'name': 'Facebook', 'link' : '', 'cname': 'fa fa-facebook icon'},
            {'name': 'Instagram', 'link' : '', 'cname': 'fa fa-instagram icon'},
            {'name': 'LinkedIn', 'link' : '', 'cname': 'fa fa-linkedin icon'},
            {'name': 'Twitter', 'link' : '', 'cname': 'fa fa-twitter icon'}
        ];
        this.list_3 = [
            {'name': 'Login', 'link' : '/login'},
            {'name': 'Register', 'link' : '/register'},
            {'name': 'About Us', 'link' : '/about'},
            {'name': 'Contact Us', 'link' : '/contact'},
            {'name': 'Help', 'link' : '/help'}
        ];
    }


    render() {
        return (
            <footer className="foot-area">
                <div className="logo_1"/>
                <div className="listing">
                    <div className="lists floating_1">
                        <p className="head">Kart</p>
                        <ul>
                            {
                                this.list_1.map((item,index) => {
                                    return(
                                      <li key={index} className="items">
                                          <Link to={item.link} className="visit"/>
                                          <div className="label">{item.name}</div>
                                      </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className="lists floating_2">
                        <p className="head">Social</p>
                        <ul>
                            {
                                this.list_2.map((item,index) => {
                                    return(
                                        <li key={index} className="items">
                                            <Link to={item.link} className="visit"/>
                                            <i className={item.cname}/>
                                            <span className="label">{item.name}</span>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className="lists floating_3">
                        <p className="head">Navigate</p>
                        <ul>
                            {
                                this.list_3.map((item,index) => {
                                    return(
                                        <li key={index} className="items">
                                            <Link to={item.link} className="visit"/>
                                            <div className="label">{item.name}</div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
