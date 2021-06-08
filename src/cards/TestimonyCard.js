import React from 'react';
import '../css/card.css';

class TestimonyCard extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            
                <div className="card">
                    <span className="name">
                        {this.props.testimonies.name}
                    </span>
                    <hr/>
                    <span className={this.props.testimonies.message.length === 0 ? "traits no message" : "traits"}>
                        {this.props.testimonies.traits}
                    </span>
                    {this.props.testimonies.message.length > 1 ? <span className="message">"{this.props.testimonies.message}"</span> : null }
                </div>
         
        )
    }
}

export default TestimonyCard;