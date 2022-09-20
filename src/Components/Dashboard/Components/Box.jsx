import React, {useEffect} from 'react';
import "../dashboardstyles.css"
import MyNext4UClick from './MyNext4UClick';
function Box(props) {
 
   
    return (
        <div className='box-container'>
          {props.item === 'myNext4U' ?
            <MyNext4UClick /> : ""}
        
         
        </div>
    )
}

export default Box;