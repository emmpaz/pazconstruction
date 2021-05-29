import React from 'react';
import '../css/testimony.css';
import TestimonyHeader from './TestimonyHeader';

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
            </div>
        )
    }
}

export default Testimonies;