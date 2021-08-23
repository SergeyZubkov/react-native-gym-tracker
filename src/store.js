import { configureStore } from '@reduxjs/toolkit';
import exercises from './screens/exercise-list/ExerciseListSlice';
import results from './screens/exercise/resultListSlice';
import timer from './screens/timer-setup/timerSlice';

export const store = configureStore({
    reducer: {
        exercises,
        results, 
        timer
    }
})