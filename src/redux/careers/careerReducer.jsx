import {ADD_CAREER, FETCH_CAREER_FAILURE, FETCH_CAREER_REQUEST, FETCH_CAREER_SUCCESS} from './careerTypes'

const initialState = {
    careerList: []
}

const careerReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CAREER: return {
            ...state,
            careerList: state.careerList.append(action.payload)
        }
        default: return state
    }
}

export default careerReducer
