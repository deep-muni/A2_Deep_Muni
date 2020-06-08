import React, {Component} from "react";
import './Register.css'
import {Link} from "react-router-dom";

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            validation: {
                un_err: false,
                fn_err: false,
                ln_err: false,
                dob_err: false,
                pass_err: false,
                cp_err: false,
            },
            error: false,
            filled: false,
            initial: true
        };

        this.validate = this.validate.bind(this);
        this.register = this.register.bind(this);
    }

    validate(e){
        switch(e.target.id) {
            case 'uname':
                if(e.target.value === ''){
                    this.setState({
                        validation: Object.assign({}, this.state.validation, {
                            un_err: true,
                        })
                    });
                }else{
                    this.setState({
                        validation: Object.assign({}, this.state.validation, {
                            un_err: false,
                        })
                    });
                }
                break;
            case 'fname':
                if(e.target.value === ''){
                    this.setState({
                        validation: Object.assign({}, this.state.validation, {
                            fn_err: true,
                        })
                    });
                }else{
                    this.setState({
                        validation: Object.assign({}, this.state.validation, {
                            fn_err: false,
                        })
                    });
                }
                break;
            case 'lname':
                if(e.target.value === ''){
                    this.setState({
                        validation: Object.assign({}, this.state.validation, {
                            ln_err: true,
                        })
                    });
                }else{
                    this.setState({
                        validation: Object.assign({}, this.state.validation, {
                            ln_err: false,
                        })
                    });
                }
                break;
            case 'dob':
                if(e.target.value === ''){
                    this.setState({
                        validation: Object.assign({}, this.state.validation, {
                            dob_err: true,
                        })
                    });
                }else{
                    this.setState({
                        validation: Object.assign({}, this.state.validation, {
                            dob_err: false,
                        })
                    });
                }
                break;
            case 'pass':
                if(e.target.value === ''){
                    this.setState({
                        validation: Object.assign({}, this.state.validation, {
                            pass_err: true,
                        })
                    });
                }else{
                    this.setState({
                        validation: Object.assign({}, this.state.validation, {
                            pass_err: false,
                        })
                    });
                }
                break;
            case 'cpass':
                if(e.target.value === document.getElementById('pass').value){
                    this.setState({
                        validation: Object.assign({}, this.state.validation, {
                            cp_err: false,
                        })
                    });
                }else{
                    this.setState({
                        validation: Object.assign({}, this.state.validation, {
                            cp_err: true,
                        })
                    });
                }
                break;
            default:
                break;
        }
        this.setState({
            initial: false
        });
    }

    register(){
        const hasError = Object.keys(this.state.validation).some(val => this.state.validation[val]);
        if(hasError){
            this.setState({
                error: true
            });
        }else{
            if(this.state.initial){
                this.setState({
                    filled: true
                });
            }else{
                this.props.history.push('/login');
            }
        }
        setTimeout(() => {
            this.setState({
                error: false,
                filled: false
            });
        },2500);
    }

    render() {
        return (
            <div className="wrapper">
                <div className={this.state.error ? "form_area onerror" : "form_area"}>
                    <form>
                        <div className="input-section">
                            <label htmlFor="uname">User Name</label>
                            <input type="text" id="uname" className="inp"
                                   onBlur={this.validate} onChange={this.validate}/>
                            {this.state.validation.un_err ? <div className="error">User Name is required</div> : null}
                        </div>

                        <div className="input-section">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" className="inp"
                                   onBlur={this.validate} onChange={this.validate}/>
                            {this.state.validation.fn_err ? <div className="error">First Name is required</div> : null}
                        </div>

                        <div className="input-section">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" className="inp"
                                   onBlur={this.validate} onChange={this.validate}/>
                            {this.state.validation.ln_err ? <div className="error">Last Name is required</div>: null}
                        </div>

                        <div className="input-section">
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" id="dob" className="inp"
                                   onBlur={this.validate} onChange={this.validate}/>
                            {this.state.validation.dob_err ? <div className="error">Date of Birth is required</div>: null}
                        </div>

                        <div className="input-section">
                            <label htmlFor="pass">Password</label>
                            <input type="password" id="pass" className="inp"
                                   onBlur={this.validate} onChange={this.validate}/>
                            {this.state.validation.pass_err ? <div className="error">Password is required</div> : null}
                        </div>

                        <div className="input-section">
                            <label htmlFor="cpass">Confirm Password</label>
                            <input type="password" id="cpass" className="inp"
                                   onBlur={this.validate} onChange={this.validate}/>
                            {this.state.validation.cp_err ? <div className="error">Password does not match</div> : null}
                        </div>
                    </form>
                    <div className="input-section">
                        {this.state.error ? <div className="submitError">Please correct the errors!!</div> : null}
                        {this.state.filled ? <div className="submitError">Please fill the form!!</div> : null}
                        <button className="submit" onClick={this.register}>Register</button>
                    </div>
                    <div className="redirect">
                        <span>Already a User? </span>
                        <Link className="linkLogin" to={"/login"}> Login</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
