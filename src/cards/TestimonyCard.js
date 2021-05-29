import React from 'react';
import '../css/card.css';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';

class TestimonyCard extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="container">
                <div className="arrows">
                    <IoArrowBack className="back"/>
                    <IoArrowForward className="forward"/>
                </div>
                <div className="card">
                    <span className="name">
                        {this.props.testimonies[0].name}
                    </span>
                </div>
            </div>
        )
    }
}

export default TestimonyCard;