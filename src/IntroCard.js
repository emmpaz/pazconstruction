import React from 'react';

const backgroundDiv = {
    backgroundColor : '#36454f',
    height : '650px',
    width : '100%',
    display : 'flex',
    justifyContent : 'center'
}

const name = {
    marginTop : '20%', 
    height : 'auto', 
    fontFamily: 'Bodoni MT,Didot,Didot LT STD,Hoefler Text,Garamond,Times New Roman,serif', 
    fontSize : '50px',
    color : '#f2f2f2'
}
const underName = {
    marginTop : '30%', 
    height : 'auto', 
    fontFamily: 'Bodoni MT,Didot,Didot LT STD,Hoefler Text,Garamond,Times New Roman,serif', 
    fontSize : '20px',
    color : '#f2f2f2'
}
class IntroCard extends React.Component{
    render(){
        return(
            <div style={backgroundDiv}>
                <div style = {name}>
                    <span>
                        Paz Construction & Drywall, Inc
                    </span>
                </div>
                <div style={underName}>
                    <span>
                        Your Roofing Experts &diams; Licensed & Bonded
                    </span>
                </div>
            </div>
        );
    }
}

export default IntroCard;