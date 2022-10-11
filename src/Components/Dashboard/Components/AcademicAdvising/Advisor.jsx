import { useState } from "react";
import "./AcademicAdvising.css"

function Advisor(props) {
    const [open, setOpen] = useState(false)
    function handleClick() {
        setOpen(!open)
        props.setAdvisorState(open)
        
    }
    return (
        <div onClick={handleClick} className='advisor-container'>

        </div>
    )
}

export default Advisor;
