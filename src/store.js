import { configureStore } from '@reduxjs/toolkit';
import exercises from './screens/exercise-list/ExerciseListSlice';

export const store = configureStore({
    reducer: {
        exercises
    }
})