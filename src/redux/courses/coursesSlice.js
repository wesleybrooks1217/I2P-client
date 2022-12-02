import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    courseList: []
};


export const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        ADD_COURSE(state,action) {
            state.courseList.append(action.paylod);
        }
    }
});

export const coursesActions = coursesSlice.actions;