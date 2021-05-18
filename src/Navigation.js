import React from 'react';

const stickyNav = {
    position : 'sticky',
    position: '-webkit-sticky',
    width : '100%',
    backgroundColor : '#6de3e1',
    height : '180px',
    boxShadow : '0px 8px 20px black',
    top : '0',
}
class Navigation extends React.Component {



    render(){
        return(
            <div style={stickyNav}>
            </div>
        );
    }
}

export default Navigation;