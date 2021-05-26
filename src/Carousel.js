import React from 'react'
import {FiArrowRightCircle, FiArrowLeftCircle} from 'react-icons/fi';
import './carousel.css';
import {images} from './images';



const imageCenter = {
    objectFit: 'cover', 
    height: '60%',
    top : '10%',
    position : 'absolute',
    zIndex : 3,
    borderRadius : '7px'
}

const imageLeft = {
    objectFit: 'cover', 
    height: '60%',
    top : '15%',
    position : 'absolute',
    zIndex : 0,
    left : '10%',
    filter : 'blur(9px)',
    borderRadius : '7px'
}

const imageRight = {
    objectFit: 'cover', 
    height: '60%',
    top : '15%',
    position : 'absolute',
    zIndex : 0,
    right : '10%',
    filter : 'blur(9px)',
    borderRadius : '7px'
}


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
                <FiArrowLeftCircle className="left-arrow" id="left" onClick={this.prev}/>
                <FiArrowRightCircle className="right-arrow" id="right" onClick={this.next}/>
                <div className="darken">
                    <img src={images[this.state.num % images.length]} style={imageLeft} className="image-left" alt='1'></img>
                </div>
                <img src={images[(this.state.num + 1) % images.length]} style={imageCenter} className="image-center" id="center" alt='2'></img>
                <div className="darken">
                    <img src={images[(this.state.num + 2) % images.length]} style={imageRight} className="image-right" alt='3'></img>
                </div>
            </div>
        );
    }
}

export default Carousel;