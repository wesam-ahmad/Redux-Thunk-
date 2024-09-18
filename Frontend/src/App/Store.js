import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../Tasks/TaskSlice';

// Configure the Redux store
export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
