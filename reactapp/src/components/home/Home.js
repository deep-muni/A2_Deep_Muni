import React, {Component} from "react";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";

class Home extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div style={{height: '300px', lineHeight: '300px'}}>WORKING ON THIS AREA</div>
                <Footer/>
            </div>
        );
    }
}

export default Home;
