import React from 'react';
import '../css/card.css';
import {AiFillStar} from 'react-icons/ai';

let starsRender = [];

class TestimonyCard extends React.Component{

    constructor(props){
        super(props);
        
    }

    addStars = () =>{
        starsRender = [];
        for(let i = 0; i < this.props.testimonies.stars; i++){
            starsRender.push(<AiFillStar className="soloStar" key={i}/>);
        }
        console.log(starsRender);
    }


    render(){
        this.addStars()

        return(
            
                <div className="card">
                    <span className="name">
                        {this.props.testimonies.name}
                    </span>
                    <div className="stars">
                        {starsRender.map((element) => {
                          return element
                        })}
                    </div>
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