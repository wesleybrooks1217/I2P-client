import {ADD_CAREER, FETCH_CAREER_FAILURE, FETCH_CAREER_REQUEST, FETCH_CAREER_SUCCESS} from './careerTypes'

export const addCareer = () => {
    return {
        type: ADD_CAREER,
        payload: career_object
    }
}


export const fetchCareerRequest = () => {
    return {
        type: FETCH_CAREER_REQUEST
    }
}

export const fetchCareerSuccess = users => {
    return {
        type: FETCH_CAREER_SUCCESS,
        payload: career_object
    }
}

export const fetchCareerFailure = error => {
    return {
        type: FETCH_CAREER_FAILURE,
        payload: error
    }
}


export const fetchCareer = () => {
    return function(dispatch) {
        dispatch(fetchCareerRequest())
        axios.get("http://127.0.0.1:8000/api/career/")
            .then(response => {
                // response.data is the array of users
                const career = response.data.map(career => career.id )
                dispatch(fetchCareerSuccess(career))
            })
            .catch(error => {
                dispatch(fetchCareerFailure(error.message))
                // error.message is the error description
            })
    }
}

