import React from 'react';
import logo from '../images/logoblack.png';

const stickyNav = {
    position : 'fixed',
    width : '100%',
    backgroundColor : '#f2f2f2',
    height : '150px',
    boxShadow : '0px 8px 20px black',
    top : '0',
    display:'flex',
    zIndex : '100'
}
class Navigation extends React.Component {



    render(){
        return(
                <div style={stickyNav}>
                    <img src={logo} alt="" style={{ objectFit: 'cover', height: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px'}}/>            
                </div>
        );
    }
}

export default Navigation;