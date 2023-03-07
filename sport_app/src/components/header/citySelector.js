import React, { useState } from 'react';
import cities from './cities';

const CitySelector = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCitySelect = (e) => {
    setSelectedCity(e.target.value);
  }

  return (
    <div className="city-dropdown">
      <label htmlFor="cities">City:</label>
      <select id="cities" value={selectedCity} onChange={handleCitySelect}>
        <option value="">Select a City</option>
        {cities.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector;

