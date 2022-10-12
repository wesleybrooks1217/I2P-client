import React, { useState } from 'react';
import "./Homeroom.css";

function Cabinet(props) {
    const [open, setOpen] = useState(false);
    function handleClick() {
        setOpen(!open)
        props.setCabinetState(open)
    }
    return (
        <div onClick={handleClick} className='cabinet-container'>
         
        </div>
    )
}

export default Cabinet;