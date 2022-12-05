import React from 'react';

function AwardPin(props) {
    function handleColor() {
        return props.color;
    }
    return (
        
            <button style={{margin: '12px 12px',backgroundColor: {handleColor}, width: '30px', height: '30px',borderRadius: '45%', border: '.2px solid black'}}>
                {props.icon}


            </button>
  
    )
}

export default AwardPin;