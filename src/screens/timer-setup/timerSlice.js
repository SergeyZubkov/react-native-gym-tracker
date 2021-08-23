import { createSlice, current } from '@reduxjs/toolkit';

const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        workInterval: 45,
        restInterval: 40,
        rounds: 3
    },
    reducers: {
        changeTimerParam(state, { payload }) {
            const { paramName, value } = payload;
            state[paramName] = value;
            return state
        }
    }
})

export const { changeTimerParam } = timerSlice.actions;

export default timerSlice.reducer;