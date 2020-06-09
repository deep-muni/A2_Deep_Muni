import React, {Component} from "react";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import Carousel from "../product-carousel/Carousel";
import Company from "../company/Company";
import Brand from "../brands/Brand";

class Home extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Company/>
                <Carousel/>
                <Brand/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
