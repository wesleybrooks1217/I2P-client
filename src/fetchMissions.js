// actions.js
import axios from 'axios';

export const FETCH_MISSIONS = 'FETCH_MISSIONS';

/* base code for fetch mission 
export const fetchMissions = () => async dispatch => {
  const res = await axios.get('http://127.0.0.1:8000/api/missions/');

  dispatch({ type: FETCH_MISSIONS, payload: res.data });
};

// reducers.js
import { FETCH_MISSIONS } from './actions';

const initialState = {
  missions: [],
  userMissions: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return { ...state, missions: action.payload };
    default:
      return state;
  }
};

*/





















