import React from 'react';

const card = {
    height : '500px',
    width : '100%',
    backgroundColor: '#c45a52',
    borderStyle : 'solid',
    display: 'flex',
    justifyContent :'center',
    alignItems: 'center'
}

class Cards extends React.Component {
    render(){
        return (
            <div style={card}>
                <p>IN WORKS</p>
            </div>
        )
    }
}

export default Cards;