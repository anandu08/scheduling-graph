import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScheduleState {
  [date: string]: {
    [hour: string]: string;
  };
}

interface SetScheduleByDatePayload {
  date: string;
  schedule: {
    [hour: string]: string;
  };
}

const initialState: ScheduleState = {};

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setScheduleByDate: (state, action: PayloadAction<SetScheduleByDatePayload>) => {
      const { date, schedule } = action.payload;
      state[date] = schedule;
    },
    setScheduleByHour: (state, action: PayloadAction<{ date: string; hour: string; value: string }>) => {
      const { date, hour, value } = action.payload;
      if (!state[date]) {
        state[date] = {};
      }
      state[date][hour] = value;
    },
  },
});

export const { setScheduleByDate, setScheduleByHour } = scheduleSlice.actions;

export default scheduleSlice.reducer;
