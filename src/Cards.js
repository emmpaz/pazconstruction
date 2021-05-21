import React from 'react';
import IntroCard from './IntroCard';
import Carousel from './Carousel';
import Info from './Info';

class Cards extends React.Component {
    render(){
        return (
            <div>
                <IntroCard/>
                <Carousel/>
                <Info/>
            </div>
        )
    }
}

export default Cards;