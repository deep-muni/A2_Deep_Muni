import React, {Component} from "react";
import './Carousel.css';
import veggies from './raw/veggie.png';
import exotic from './raw/exotic.png';
import fruits from './raw/fruits.png';
import essentials from './raw/essential.png';

class Carousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 1
        }

        this.images = [
            {'id': 1, 'name': 'veggie', 'source': veggies},
            {'id': 2, 'name': 'fruit', 'source': fruits},
            {'id': 3, 'name': 'exotic', 'source': exotic},
            {'id': 4, 'name': 'essential', 'source': essentials}
        ];

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(){
        let current = this.state.id;
        current += 1;

        if(current > this.images.length){
            this.setState({
                id: 1
            })
        }else{
            this.setState({
                id: current
            })
        }
    }

    decrement(){
        let current = this.state.id;
        current -= 1;

        if(current < 1){
            this.setState({
                id: this.images.length
            })
        }else{
            this.setState({
                id: current
            })
        }
    }

    render() {
        return (
            <div className="carousel-area">
                <p className="heading1">Variety of Products</p>
                <div className="image-section">
                    <div className="before" onClick={this.decrement}>&#10094;</div>
                    {
                        this.images.filter(i => i.id === this.state.id).map((im,index) => (
                            <img src={im.source} className="image" width="480px" height="360px"
                            key={index} alt={im.name}/>
                        ))
                    }
                    <div className="after" onClick={this.increment}>&#10095;</div>
                </div>
            </div>
        );
    }
}

export default Carousel;
