import React from 'react';
import logo from '../images/logowhite.png';
import '../css/hover.css';

const background ={
    width : '100%',
    height : '700px',
    position : 'relative'
}

const image = {
    objectFit: 'cover', 
    height: '20%', 
    position : 'absolute',
    top:'30%',
    left: '20%'
}

const linebreak = {
    width:'1px',
    position: 'absolute',
    borderLeft : '3px solid white',
    height: '300px',
    left : '33%',
    top : '20%'
}

const email = {
    fontFamily: 'Bodoni MT,Didot,Didot LT STD,Hoefler Text,Garamond,Times New Roman,serif', 
    fontSize : '20px',
    color : '#f2f2f2',
    position: 'absolute',
    top : '30%',
    left : '35%'
}
const number = {
    fontFamily: 'Bodoni MT,Didot,Didot LT STD,Hoefler Text,Garamond,Times New Roman,serif', 
    fontSize : '20px',
    color : '#f2f2f2',
    position: 'absolute',
    top: '40%',
    left: '35%'
}
const font = {
    fontFamily: 'Bodoni MT,Didot,Didot LT STD,Hoefler Text,Garamond,Times New Roman,serif',
    position : 'absolute',
    top : '50%',
    left : '35%',
    fontSize : '20px'
}

class Info extends React.Component {

    render(){
        return(
            <div style={background}>
                <div className="bottom logo">
                    <img src={logo} style={image} alt="1"></img>
                </div>
                <div className="line break">
                    <span style={linebreak}></span>
                </div>
                <div className="email" style={email}>
                    <span>
                        constructionpaz@gmail.com
                    </span>
                </div>
                <div className="number" style={number}>
                    <span>
                        (316) 305-1306
                    </span>
                </div>
                <div>
                    <a target="_blank" href="https://www.facebook.com/PAZ-Construction-Drywall-Inc-299476817419772" className="facebook" style={font}>facebook</a>
                </div>
            </div>
        );
    }
}

export default Info;