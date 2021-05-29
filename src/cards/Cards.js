import React from 'react';
import IntroCard from './IntroCard';
import Carousel from './Carousel';
import Info from './Info';
import Testimonies from './Testimonies';

class Cards extends React.Component {
    render(){
        return (
            <div>
                <IntroCard/>
                <Carousel/>
                <Testimonies/>
                <Info/>
            </div>
        )
    }
}

export default Cards;