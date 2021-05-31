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
    fontSize : '50px',
    textTransform : 'uppercase',
    color : '#f2f2f2',
}

const line = {
    width : '50%',
}

class CarouselHeader extends React.Component {
    render(){
        return(
            <div style={position}>
                <div style={positionWord}>
                    <span style={font}>
                        Gallery
                    </span>
                </div>
                <div style={positionWord}>
                    <hr style={line}></hr>
                </div>
            </div>
        )
    }
}

export default CarouselHeader;