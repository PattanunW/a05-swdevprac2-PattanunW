import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface DateReserveProps {
  value: Date | null;
  onChange: (newDate: Date | null) => void;
}

const DateReserve: React.FC<DateReserveProps> = ({ value, onChange }) => {
  return (
    <DatePicker
      label="Booking Date"
      value={value}
      onChange={onChange}
    />
  );
};

export default DateReserve;
