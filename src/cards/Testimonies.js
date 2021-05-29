import React from 'react';
import '../css/testimony.css';
import TestimonyCard from './TestimonyCard';
import TestimonyHeader from './TestimonyHeader';
import {testimonies} from '../exports/testimonyList';

class Testimonies extends React.Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div className="background">
                <TestimonyHeader/>
                <TestimonyCard testimonies={testimonies}/>
            </div>
        )
    }
}

export default Testimonies;