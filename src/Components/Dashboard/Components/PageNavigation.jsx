import React from 'react';
import "../dashboardstyles.css"
import { Book2, School, BuildingCommunity} from 'tabler-icons-react';
function PageNavigation() {
    return (
        <div className='page-nav-container'>
            <div className='page-img'>
                <Book2 size={30}/>
            </div>
            <div className='page-img'>
                <School size={30} />
            </div>
            <div className='page-img'>
                <BuildingCommunity size={30} />
            </div>
           
        </div>
    )
}

export default PageNavigation;