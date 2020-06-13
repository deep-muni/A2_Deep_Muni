import React, {Component} from "react";
import './Footer.css';
import {Link} from "react-router-dom";

class Footer extends Component {

    constructor(props) {
        super(props);

        this.list_1 = [
            {'name': 'Terms & Condition', 'link' : '', 'urlClass': 'visit isDisabled'},
            {'name': 'Careers', 'link' : '', 'urlClass': 'visit isDisabled'},
            {'name': 'Privacy Policy', 'link' : '', 'urlClass': 'visit isDisabled'}
        ];
        this.list_2 = [
            {'name': 'Google', 'link' : '', 'cname': 'fa fa-google icon' , 'urlClass': 'visit isDisabled'},
            {'name': 'Facebook', 'link' : '', 'cname': 'fa fa-facebook icon' , 'urlClass': 'visit isDisabled'},
            {'name': 'Instagram', 'link' : '', 'cname': 'fa fa-instagram icon' , 'urlClass': 'visit isDisabled'},
            {'name': 'LinkedIn', 'link' : '', 'cname': 'fa fa-linkedin icon' , 'urlClass': 'visit isDisabled'},
            {'name': 'Twitter', 'link' : '', 'cname': 'fa fa-twitter icon' , 'urlClass': 'visit isDisabled'}
        ];
        this.list_3 = [
            {'name': 'Login', 'link' : '' , 'urlClass': 'visit isDisabled'},
            {'name': 'Register', 'link' : '/register', 'urlClass': 'visit'},
            {'name': 'About Us', 'link' : '', 'urlClass': 'visit isDisabled'},
            {'name': 'Contact Us', 'link' : '', 'urlClass': 'visit isDisabled'},
            {'name': 'Help', 'link' : '', 'urlClass': 'visit isDisabled'}
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
                                          <Link to={item.link} className={item.urlClass}/>
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
                                            <Link to={item.link} className={item.urlClass}/>
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
                                            <Link to={item.link} className={item.urlClass}/>
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
