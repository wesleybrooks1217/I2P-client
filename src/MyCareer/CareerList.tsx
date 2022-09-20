import './CareerList.css';
import {ArrowBigDown} from 'tabler-icons-react';

let onArrowPressed = () => {
    console.log("Arrow pressed");
}

let onListElementPressed = () => {
    console.log("element pressed");
}

function CareerList () {
    return (

        <div className='container'>
            <h1> Career List </h1>
            <ul>
                <li onClick = {onListElementPressed}> Career 1</li>
                <li onClick = {onListElementPressed}> Career 2</li>
                <li onClick = {onListElementPressed}> Career 3</li>
                <li onClick = {onListElementPressed}> Career 4</li>
                <li onClick = {onListElementPressed}> Career 5</li>
                <li onClick = {onListElementPressed}> Career 6</li>
            </ul>

            <ArrowBigDown 
            size = {48}
            strokeWidth = {2}
            color = {'black'}
            onClick = {onArrowPressed}/>
        </div>
    );
};

export default CareerList;