import React from 'react'
import {FiArrowRightCircle, FiArrowLeftCircle, FiSliders} from 'react-icons/fi';
import '../css/carousel.css';
import {images} from '../exports/images';
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
            num : (prevState.num + 1 == images.length) ? 0 : prevState.num + 1
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
                    {images.map((slide, index)=>{
                        return (
                            <div className={index === this.state.num ? 'slide active' : 'slide'} key={index}>
                                {index === this.state.num && (<img src={slide} alt="slide" className="image-center"/>)}
                            </div>
                        )
                    })}
                   
    
            </div>
        );
    }
}

export default Carousel;