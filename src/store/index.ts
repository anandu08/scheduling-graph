import { combineReducers } from '@reduxjs/toolkit';
import scheduleReducer from './scheduleSlice';

const rootReducer = combineReducers({
  schedule: scheduleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
