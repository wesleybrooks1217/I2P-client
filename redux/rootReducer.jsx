import {combineReducers} from 'redux'
import courseReducer from './courses/courseReducer'
import collegeReducer from './college/collegeReducer'
import careerReducer from './career/careerReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    course: courseReducer,
    college: collegeReducer,
    career: careerReducer,
    user: userReducer
})

export default rootReducer