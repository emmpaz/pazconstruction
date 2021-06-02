import React from 'react';
import IntroCard from './IntroCard';
import Carousel from './Carousel';
import Info from './Info';
import Testimonies from './Testimonies';
import Location from './Location';

class Cards extends React.Component {
    render(){
        return (
            <div>
                <IntroCard/>
                <Carousel/>
                <Testimonies/>
                <Location/>
                <Info/>
            </div>
        )
    }
}

export default Cards;