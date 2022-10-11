
import react, { useEffect, useRef, useState } from 'react'
import "./AcademicAdvising.css"
import Advisor from './Advisor'
import Bookshelf from './Bookshelf'
import BookshelfSide from './BookshelfSide'
import AdvisorSide from './AdvisorSide'
import PersonalPage from '../PersonalPage'
import PageNavigation from '../PageNavigation'

function AcademicAdvising(props) {
    const [advisorState, setAdvisorState] = useState(false)
    const [shelfState, setShelfState] = useState(false)
    const [areaOpened, setAreaOpened] = useState('')

    useEffect(() => {
        props.setArea(areaOpened)
    })
    return (
   
        <div className='container'>
            <div className='top-container'>
            <PersonalPage />
            <PageNavigation />
            </div>
        <div className='academic-advisor-container'>
           <Advisor setAdvisorState={setAdvisorState} />
           <Bookshelf setBookshelfState={setShelfState} />
        </div>
        <AdvisorSide setArea={setAreaOpened} isOpen={advisorState}/>
        <BookshelfSide setArea={setAreaOpened} isOpen={shelfState} />
        </div>

    
       
        
    )
}

export default AcademicAdvising;