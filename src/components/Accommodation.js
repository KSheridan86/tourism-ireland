import React, { useState } from 'react';
import axios from 'axios';

const Accommodation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://failteireland.azure-api.net/opendata-api/v1/accommodation`
        
      );
      console.log(response.data)
      setResults(response.data.results);
    } catch (error) {
      console.error('Error occurred during search:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
      {results.map((result) => {
  if (result.address.addressLocality === searchTerm) {
    return result.name;
  } else {
  return (
    ''
  )};
})}
      </ul>
    </div>
  );
};

export default Accommodation;