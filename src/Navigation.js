import React from 'react';
import logo from './logoblue.png';
import NavOptions from './NavOptions';
const stickyNav = {
    position : 'fixed',
    width : '100%',
    backgroundColor : 'white',
    height : '150px',
    boxShadow : '0px 8px 20px black',
    top : '0'
}
class Navigation extends React.Component {



    render(){
        return(
                <div style={stickyNav}>
                    <img src={logo} style={{ objectFit: 'cover', height: '60%', marginLeft : '25px', marginTop: '20px'}}/>
                <   NavOptions/>                
                </div>
        );
    }
}

export default Navigation;