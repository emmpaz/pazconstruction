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
    fontFamily: 'Bodoni MT,Didot,Didot LT STD,Hoefler Text,Garamond,Times New Roman,serif', 
    fontWeight: '50',
    fontSize : '50px',
    textTransform : 'lowercase',
    color : '#f2f2f2',
}

const line = {
    borderTop : '1px solid #f2f2f2',
    width : '40%',
}

class TestimonyHeader extends React.Component {

    render(){


        return(
            <div style={position}>
                <div style={positionWord}>
                    <span style={font}>
                        Testimony
                    </span>
                </div>
                <div style={positionWord}>
                    <hr style={line}></hr>
                </div>
            </div>
        )
    }
}

export default TestimonyHeader;