import React from 'react';
import first from './first.jpg';
import sec from './2.png';
import third from './3.jpeg';
import fourth from './four.jpg';

const images = [
    first,
    sec,
    third,
    fourth
]

const background = {
    backgroundColor : '#556d7c',
    width :'100%',
    height : '500px',
    position : 'relative',
    display : 'flex',
    justifyContent : 'center',
}

const imageC = {
    objectFit: 'cover', 
    height: '70%',
    top : '10%',
    position : 'absolute',
    zIndex : 3
}

const imageLeft = {
    objectFit: 'cover', 
    height: '70%',
    top : '15%',
    position : 'absolute',
    zIndex : 0,
    left : '15%',
    filter : 'blur(9px)'
}

const imageRight = {
    objectFit: 'cover', 
    height: '70%',
    top : '15%',
    position : 'absolute',
    zIndex : 0,
    left : '60%',
    filter : 'blur(9px)'
}
const buttonStyle = {
    position : 'absolute',
    top: '50%',
    left : '75%'
}


class Carousel extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            num : 0
        }
    }
    rotate = () => {
        this.setState(prevState => ({
            num : prevState.num + 1
        }))
    }
    
    render(){
        return(
            <div style={background}>
                <img src={images[this.state.num % images.length]} style={imageLeft}></img>
                <img src={images[(this.state.num + 1) % images.length]} style={imageC}></img>
                <img src={images[(this.state.num + 2) % images.length]} style={imageRight}></img>
                <button style={buttonStyle} onClick={this.rotate}>BUTTOn</button>
            </div>
        );
    }
}

export default Carousel;