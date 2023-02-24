import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setScheduleByDate } from '../store/scheduleSlice';
import DatePicker from 'react-datepicker';
import { RootState } from '../store/rootReducer';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
  onDateChange: (date: string | null) => void;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const dispatch = useDispatch();
  const formattedDate = selectedDate?.toISOString().substr(0, 10);

  useEffect(() => {
    const fetchSchedule = async () => {
      if (formattedDate) {
        const schedule = await dispatch(setScheduleByDate({ date: formattedDate }));
        onDateChange(schedule.date);
      } else {
        onDateChange(null);
      }
    };
    fetchSchedule();
  }, [formattedDate, dispatch, onDateChange]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="dd/MM/yyyy"
      isClearable
      placeholderText="Select a date"
    />
  );
};

export default CustomDatePicker;
