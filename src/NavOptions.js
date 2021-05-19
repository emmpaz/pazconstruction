import React from 'react';

const alignment = {
    position : 'absolute',
    display: 'flex',
    width: '100%',
    justifyContent : 'space-between',
    margin: '0 auto',
    alignItems: 'center',
    top: '50%',
    msTransform : 'translateY(-50%)', 
    transform : 'translateY(-50%)'
    
}

const font = {
    fontFamily : 'Century Gothic, CenturyGothic, Geneva, AppleGothic, sans-serif',
    fontWeight: '500'
}

class NavOptions extends React.Component {


    render() {
        return (
            <div style={alignment}>
                <p>   
                </p>
                <h1 style={font}>
                    Testimonies
                </h1>
                <h1 style={font}>
                    Gallery
                </h1>
                <p>
                </p>
            </div>
        )
    }
}

export default NavOptions;