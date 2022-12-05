import { useState } from "react";
import "./Homeroom.css"

function Desk(props) {
    const [open, setOpen] = useState(false)
    function handleClick() {
        setOpen(!open)
        props.setDeskState(open)
        
    }
    return (
        <div onClick={handleClick} className='desk-container'>

        </div>
    )
}

export default Desk;
