import React, {Component} from "react";
import './Register.css'

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            un_err: false,
            fn_err: false,
            ln_err: false,
            dob_err: false,
            pass_err: false,
            cp_err: false
        };

        this.validate = this.validate.bind(this);
        this.register = this.register.bind(this);
    }

    validate(e){
        switch(e.target.id) {
            case 'uname':
                if(e.target.value === ''){
                    this.setState({un_err: true});
                }else{
                    this.setState({un_err: false});
                }
                break;
            case 'fname':
                if(e.target.value === ''){
                    this.setState({fn_err: true});
                }else{
                    this.setState({fn_err: false});
                }
                break;
            case 'lname':
                if(e.target.value === ''){
                    this.setState({ln_err: true});
                }else{
                    this.setState({ln_err: false});
                }
                break;
            case 'dob':
                if(e.target.value === ''){
                    this.setState({dob_err: true});
                }else{
                    this.setState({dob_err: false});
                }
                break;
            case 'pass':
                if(e.target.value === ''){
                    this.setState({pass_err: true});
                }else{
                    this.setState({pass_err: false});
                }
                if(e.target.value === document.getElementById('cpass').value){
                    this.setState({cp_err: false});
                }else{
                    this.setState({cp_err: true});
                }
                break;
            case 'cpass':
                if(e.target.value === document.getElementById('pass').value){
                    this.setState({cp_err: false});
                }else{
                    this.setState({cp_err: true});
                }
                break;
            default:
                break;
        }
    }

    register(){
        const hasFalseKeys = Object.keys(this.state).some(k => !this.state[k]);
        console.log(hasFalseKeys);
    }

    render() {
        return (
            <div className="form_area">
                <form>
                    <div className="input-section">
                        <label htmlFor="uname">User Name</label>
                        <input type="text" id="uname" placeholder="User Name" className="inp" onBlur={this.validate}/>
                        {this.state.un_err ? <div className="error">User Name is required</div> : null}
                    </div>

                    <div className="input-section">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" placeholder="First Name" className="inp" onBlur={this.validate}/>
                        {this.state.fn_err ? <div className="error">First Name is required</div> : null}
                    </div>

                    <div className="input-section">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" placeholder="Last Name" className="inp" onBlur={this.validate}/>
                        {this.state.ln_err ? <div className="error">Last Name is required</div>: null}
                    </div>

                    <div className="input-section">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" id="dob" className="inp" onBlur={this.validate}/>
                        {this.state.dob_err ? <div className="error">Date of Birth is required</div>: null}
                    </div>

                    <div className="input-section">
                        <label htmlFor="pass">Password</label>
                        <input type="password" id="pass" placeholder="Password" className="inp" onBlur={this.validate}
                               onChange={this.validate}/>
                        {this.state.pass_err ? <div className="error">Password is required</div> : null}
                    </div>

                    <div className="input-section">
                        <label htmlFor="cpass">Confirm Password</label>
                        <input type="password" id="cpass" placeholder="Confirm Password" className="inp"
                               onBlur={this.validate} onChange={this.validate}/>
                        {this.state.cp_err ? <div className="error">Password does not match</div> : null}
                    </div>
                </form>
                <button className="submit" onClick={this.register}>Register</button>
            </div>
        );
    }
}

export default Register;
