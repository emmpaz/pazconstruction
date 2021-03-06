import React from 'react';
import back from '../images/hammer.jpg';
const backgroundDiv = {
    height : '1000px',
    width : '100%',
    display : 'flex',
    justifyContent : 'center',
    position: 'relative',
    backgroundImage : `linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.93)),
    url(${back})`
}

const name = {
    position: 'absolute',
    top : '30%', 
    height : 'auto', 
    fontFamily: 'Crimson Text, serif', 
    fontSize : '5vw',
    color : '#f2f2f2'
}
const Licensed_bonded = {
    position : 'absolute',
    top : '43%', 
    height : 'auto', 
    fontFamily: 'Bodoni MT,Didot,Didot LT STD,Hoefler Text,Garamond,Times New Roman,serif', 
    fontSize : '1.5vw',
    color : '#f2f2f2'
}

const verse = {
    position : 'absolute',
    top : '50%', 
    height : 'auto', 
    width: '35%',
    fontFamily: 'Bodoni MT,Didot,Didot LT STD,Hoefler Text,Garamond,Times New Roman,serif', 
    fontSize : '1.5vw',
    color : '#f2f2f2',
    textAlign : 'center'
}

class IntroCard extends React.Component{
    render(){
        return(
            <div>
                <div style={backgroundDiv}>
                    <div style = {name}>
                        <span>
                            Paz Construction & Drywall, Inc
                        </span>
                    </div>
                    <div style={Licensed_bonded}>
                        <span>
                            Your Roofing Experts &diams; Licensed & Bonded
                        </span>
                    </div>
                    <div style={verse}>
                        <span>
                            "And whatever you do in word or deed,
                            do all in the name of the Lord Jesus, giving thanks to God the Father through Him." - Col 3:17
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default IntroCard;