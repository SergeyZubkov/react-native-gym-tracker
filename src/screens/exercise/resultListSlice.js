import { createSlice } from '@reduxjs/toolkit';

const resultListSlice = createSlice({
    name: 'results',
    initialState: [
        {
            date: new Date(2021, 1, 24).toISOString(),
            weights: [5, 6, 7, 8],
            repetitions: [15, 12, 10, 8]
        },
    ],
    reducers: {
        addResult(state, action) {
            state.push(action.payload)
        }
    }
}) 

export const { addResult } = resultListSlice.actions

export default resultListSlice.reducer