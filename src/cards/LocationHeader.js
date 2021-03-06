import React from 'react';


const position = {
    position : 'absolute',
    width: '100%',
}

const positionWord = {
    display : 'flex',
    justifyContent : 'center',
    marginBottom : '1%'
}

const font = {
    fontFamily: 'Crimson Text, serif', 
    fontWeight: '50',
    fontSize : '3vw',
    textTransform : 'uppercase',
    color : '#f2f2f2',
}

const line = {
    width : '50%',
    height: '.5px',
    border : 'none',
    backgroundColor : '#f2f2f2'
}

class LocationHeader extends React.Component{


    render(){
        return(
            <div style={position}>
                <div style={positionWord}>
                    <span style={font}>
                        LOCATION
                    </span>
                </div>
                <div style={positionWord}>
                    <hr style={line}></hr>
                </div>
            </div>
        )
    }
}

export default LocationHeader;