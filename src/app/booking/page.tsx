'use client';

import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Button, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

import { enUS } from 'date-fns/locale';

const Booking = () => {
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState(null);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const handleVenueChange = (event) => {
    setVenue(event.target.value);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleBookingSubmit = () => {
    console.log('Venue:', venue);
    console.log('Booking Date:', date);
  };

  return (
    <div>
      <h1>Booking</h1>
      <TextField
        name="Name-Lastname"
        label="Name-Lastname"
        variant="standard"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        name="Contact-Number"
        label="Contact-Number"
        variant="standard"
        fullWidth
        margin="normal"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <FormControl fullWidth style={{ marginBottom: '20px' }}>
        <InputLabel id="venue-select-label">Select Venue</InputLabel>
        <Select
          labelId="venue-select-label"
          id="venue-select"
          value={venue}
          onChange={handleVenueChange}
        >
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS}>
        <DatePicker
          label="Booking Date"
          value={date}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
        />
      </LocalizationProvider>

      <Button
        variant="contained"
        color="primary"
        onClick={handleBookingSubmit}
        style={{ marginTop: '20px' }}
      >
        Book Venue
      </Button>
    </div>
  );
};

export default Booking;
