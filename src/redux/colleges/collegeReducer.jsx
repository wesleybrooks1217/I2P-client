import {ADD_COURSE } from './collegeTypes'

const initialState = {
    collegeList: []
}

const collegeReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COLLEGE: return {
            ...state,
            collegeList: state.collegeList.append(action.payload)
        }
        default: return state
    }
}

export default collegeReducer