import React from 'react';

const alignment = {
    position : 'absolute',
    display: 'flex',
    width: '100%',
    justifyContent : 'space-between',
    margin: '0 auto',
    alignItems: 'center',
    top: '65%',
    msTransform : 'translateY(-50%)', 
    transform : 'translateY(-50%)'
}

const font = {
    fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif', 
    fontWeight: '50',
    fontSize : '20px',
    textTransform : 'lowercase'
}

class NavOptions extends React.Component {


    render() {
        return (
            <div style={alignment}>
                <p>   
                </p>
                <h1 style={font}>
                    <a target="_blank" href="#" style={{textDecoration : 'none', color:'black'}}>
                    Testimonies
                    </a>
                </h1>
                <h1 style={font}>
                    <a target="_blank" href="#" style={{textDecoration : 'none', color: 'black'}}>
                    Gallery
                    </a>
                </h1>
                <p>
                </p>
            </div>
        )
    }
}

export default NavOptions;