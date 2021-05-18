import React from 'react';
import logo from './logoblue.png';
import NavOptions from './NavOptions';
const stickyNav = {
    position : 'sticky',
    position: '-webkit-sticky',
    width : '100%',
    backgroundColor : 'white',
    height : '180px',
    boxShadow : '0px 8px 20px black',
    top : '0',
}
class Navigation extends React.Component {



    render(){
        return(
                <div style={stickyNav}>
                <img src={logo} style={{ objectFit: 'cover', height: '60%', marginLeft : '10px', marginTop: '10px'}}/>
                <NavOptions/>                
                </div>
        );
    }
}

export default Navigation;