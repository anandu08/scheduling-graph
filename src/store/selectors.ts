import { RootState } from './rootReducer';
import { createSelector } from '@reduxjs/toolkit';

export const selectSchedule = (state: RootState) => state.schedule;

export const getScheduleByDate = (date: string) =>
  createSelector(
    [selectSchedule],
    (schedule) => schedule[date] || []
  );
