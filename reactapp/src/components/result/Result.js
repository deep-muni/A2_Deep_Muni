import React, {Component} from "react";
import Navigation from "../navigation/Navigation";
import Card from "../result-card/Card";
import './Result.css'
import Footer from "../footer/Footer";

class Result extends Component {

    constructor(props) {
        super(props);

        this.state = {
            matchedProducts: []
        };

        this.product = [
            {'name': 'Yellow Potato', 'brand': 'Brand: Lorem Ipsum', 'price': '$50'},
            {'name': 'Yellow Potato', 'brand': 'Brand: Lorem Ipsum', 'price': '$20'},
            {'name': 'Yellow Potato', 'brand': 'Brand: Lorem Ipsum', 'price': '$40'},
            {'name': 'Yellow Potato', 'brand': 'Brand: Lorem Ipsum', 'price': '$30'},
            {'name': 'Yellow Potato', 'brand': 'Brand: Lorem Ipsum', 'price': '$60'},
            {'name': 'Yellow Potato', 'brand': 'Brand: Lorem Ipsum', 'price': '$60'},
            {'name': 'Spring Onions', 'brand': 'Brand: Lorem Ipsum', 'price': '$80'},
            {'name': 'Onions', 'brand': 'Brand: Lorem Ipsum', 'price': '$80'},
            {'name': 'White Potato', 'brand': 'Brand: Lorem Ipsum', 'price': '$80'},
            {'name': 'Sweet Potato', 'brand': 'Brand: Lorem Ipsum', 'price': '$80'},
            {'name': 'Green Pepper', 'brand': 'Brand: Lorem Ipsum', 'price': '$80'},
            {'name': 'Yellow Pepper', 'brand': 'Brand: Lorem Ipsum', 'price': '$80'},
            {'name': 'Red Onions', 'brand': 'Brand: Lorem Ipsum', 'price': '$80'},
            {'name': 'Pink Cabbage', 'brand': 'Brand: Lorem Ipsum', 'price': '$80'},
            {'name': 'Green Cabbage', 'brand': 'Brand: Lorem Ipsum', 'price': '$80'},
            {'name': 'Broccoli', 'brand': 'Brand: Lorem Ipsum', 'price': '$80'},
            {'name': 'Apple', 'brand': 'Brand: Lorem Ipsum', 'price': '$80'},
            {'name': 'Pineapple', 'brand': 'Brand: Lorem Ipsum', 'price': '$80'},
            {'name': 'Banana', 'brand': 'Brand: Lorem Ipsum', 'price': '$80'},
            {'name': 'Kiwi', 'brand': 'Brand: Lorem Ipsum', 'price': '$80'},
            {'name': 'Watermelon', 'brand': 'Brand: Lorem Ipsum', 'price': '$80'},
            {'name': 'Straw Berry', 'brand': 'Brand: Lorem Ipsum', 'price': '$80'},
            {'name': 'Black Berry', 'brand': 'Brand: Lorem Ipsum', 'price': '$80'},
            {'name': 'Mushrooms', 'brand': 'Brand: Lorem Ipsum', 'price': '$80'},
            {'name': 'Tomato', 'brand': 'Brand: Lorem Ipsum', 'price': '$80'},
            {'name': 'Cherry Tomato', 'brand': 'Brand: Lorem Ipsum', 'price': '$80'}
        ];

    }

    updateList(){
        const match = this.product.filter(item => {
           return item.name === this.props.location.state.id;
        });

        if(match.length === 0){
            return (
              <div className="nomatch">No Match Found</div>
            );
        }

        return(
            match.map((item, index) =>{
                return(
                    <Card key={index} name={item.name} price={item.price} brand={item.brand}/>
                )
            })
        );
    }

    render() {
        return (
            <div>
                <Navigation/>
                <div className="result_tag">Showing Results: {this.props.location.state.id}</div>
                <div className="products">{this.updateList()}</div>
                <Footer/>
            </div>
        );
    }
}

export default Result;
