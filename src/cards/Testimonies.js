import React from 'react';
import '../css/testimony.css';
import '../css/card.css';
import TestimonyCard from './TestimonyCard';
import TestimonyHeader from './TestimonyHeader';
import {testimonies} from '../exports/testimonyList';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';

class Testimonies extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            currentTestimonyIndex : 0,
        }
    }

    next = () => {
        this.setState(prevState => ({
            currentTestimonyIndex : (prevState.currentTestimonyIndex + 1 === testimonies.length) ? 0 : prevState.currentTestimonyIndex + 1
        }))
    }

    prev = () => {
        this.setState(prevState => ({
            currentTestimonyIndex : (prevState.currentTestimonyIndex === 0) ? testimonies.length - 1 : prevState.currentTestimonyIndex - 1
        }))
    }

    render(){
        return(
            <div className="background">
                <TestimonyHeader/>
                <div className="arrows">
                    <IoArrowBack className="back" onClick={this.prev}/>
                    <IoArrowForward className="forward" onClick={this.next}/>
                </div>
                {testimonies.map((testimony, index) => {
                    return(
                    <div className={index === this.state.currentTestimonyIndex ? 'testimony active' : 'testimony'}>
                        {index === this.state.currentTestimonyIndex && (<TestimonyCard testimonies={testimony}/>)}
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default Testimonies;