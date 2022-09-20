import { render } from '@testing-library/react';
import React, {useEffect} from 'react';
import "../dashboardstyles.css"
import MyNext4UClick from './MyNext4UClick';
function Box(props) {

    useEffect(() => {
        renderComponent()
    }, [props.state])
    
    function renderComponent() {
        if (props.item === "myNext4U") {
            return <MyNext4UClick />
        }
    }
 
   
    return (
        <div className='box-container'>
         {renderComponent}
         
        </div>
    )
}

export default Box;