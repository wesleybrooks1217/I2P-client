import {ADD_CAREER } from './careerTypes'

export const initialState = {
    careerList: []
}

export const careerReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CAREER: return {
            ...state,
            careerList: state.careerList.append(action.payload)
        }
        default: return state
    }
}

export default careerReducer