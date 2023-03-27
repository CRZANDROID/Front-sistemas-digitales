import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SearchWithCalendar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm, selectedDate);
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="form-group">
        <DatePicker
          placeholderText='Fecha a buscar'
          id="selectedDate"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="form-control"
        />
      </div>
    </form>
  );
}

export default SearchWithCalendar;