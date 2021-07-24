import { createSlice } from '@reduxjs/toolkit';

const ExerciseListSlice = createSlice({
    name: 'exercises',
    initialState: [
        "Упражнение 1",
        "Упражнение 2",
        "Упражнение 3",
        "Упражнение 4",
        "Упражнение 5",
        "Упражнение 6",
        "Упражнение 7",
        "Упражнение 8",
    ],
    reducers: {
        get: (state, action) => {
            console.log(action);
        }
    }
})

export const { get } = ExerciseListSlice.actions

export default ExerciseListSlice.reducer