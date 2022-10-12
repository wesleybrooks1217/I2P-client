import React, { useState } from 'react';
import "./AcademicAdvising.css";

function Bookshelf(props) {
    const [open, setOpen] = useState(false);
    function handleClick() {
        setOpen(!open)
        props.setBookshelfState(open)
    }
    return (
        <div onClick={handleClick} className='bookshelf-container'>
         
        </div>
    )
}

export default Bookshelf;