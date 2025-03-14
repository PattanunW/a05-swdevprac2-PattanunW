import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { enUS } from 'date-fns/locale';

interface DateReserveProps {
  value: Date | null;
  onChange: (newDate: Date | null) => void;
}

export default function DateReserve({ value, onChange }: DateReserveProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS}>
      <DatePicker
        label="Select Date"
        value={value}
        onChange={onChange}
      />
    </LocalizationProvider>
  );
}
