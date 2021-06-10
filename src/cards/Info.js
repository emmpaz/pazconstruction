import React from 'react';
import logo from '../images/logowhite.png';
import '../css/hover.css';


const emailBox = {
    fontFamily: 'Bodoni MT,Didot,Didot LT STD,Hoefler Text,Garamond,Times New Roman,serif', 
    fontSize : '20px',
    color : '#f2f2f2',
    marginRight : ' 6px',
}
const numberBox = {
    fontFamily: 'Bodoni MT,Didot,Didot LT STD,Hoefler Text,Garamond,Times New Roman,serif', 
    fontSize : '30px',
    color : '#f2f2f2',
    position: 'absolute',
    top: '39%',
}
const fontBox = {
    fontFamily: 'Bodoni MT,Didot,Didot LT STD,Hoefler Text,Garamond,Times New Roman,serif',
    fontSize : '20px',
    marginLeft : ' 6px',
}

class Info extends React.Component {

    render(){
        return(
            <div className="backgroundInfo">
                <div style={emailBox}>
                    <a href="mailto: constructionpaz@gmail.com" className="email">
                        email
                    </a>
                </div>
                <div style={numberBox}>
                    <a href="tel:316-305-1306" className="number">
                        316-305-1306
                    </a>
                </div>
                <div style={fontBox}>
                    <a href="https://www.facebook.com/PAZ-Construction-Drywall-Inc-299476817419772" className="facebook">facebook</a>
                </div>
            </div>
        );
    }
}

export default Info;