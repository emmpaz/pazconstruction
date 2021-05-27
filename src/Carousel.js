import React from 'react'
import {FiArrowRightCircle, FiArrowLeftCircle} from 'react-icons/fi';
import './carousel.css';
import {images} from './images';
import CarouselHeader from './CarouselHeader';


class Carousel extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            num : 0,
            length : images.length
        }
    }
    next = () => {
        this.setState(prevState => ({
            num : prevState.num + 1
        }))    
    }

    prev = () => {
        this.setState(prevState => ({
            num : (prevState.num === 0) ? this.state.length - 1 : prevState.num - 1
        }))
    }
    
    render(){
        return(
            <div className="background">
                <CarouselHeader/>
                <div className="grid">
                    <FiArrowLeftCircle className="left-arrow" id="left" onClick={this.prev}/>
                    <FiArrowRightCircle className="right-arrow" id="right" onClick={this.next}/>
                </div>
                <div className="darken">
                    <img src={images[this.state.num % images.length]}  className="image-left" alt='1'></img>
                </div>
                <img src={images[(this.state.num + 1) % images.length]}  className="image-center" id="center" alt='2'></img>
                <div className="darken">
                    <img src={images[(this.state.num + 2) % images.length]}  className="image-right" alt='3'></img>
                </div>
            </div>
        );
    }
}

export default Carousel;