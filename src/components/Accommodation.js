import React, { useState } from 'react';
import axios from 'axios';

const Accommodation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isVisible, setIsVisible] = useState(false);


  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "https://ksheridan86.github.io/Data/Accommodation.json"
      );
      setResults(response.data);
      setIsVisible(true);
    } catch (error) {
      console.error('Error occurred during search:', error);
    }
  };

  const filteredResults = results.filter(
    (result) => result.AddressLocality === searchTerm && searchTerm !== ''
  );

  const filteredByCity = results.filter(
    (result) => result.AddressRegion === searchTerm && searchTerm !== ''
  )

  return (
    <div className='text-center accommodation'>
      <div className="p-3">
        <h1>Fancy getting your head down for a few hours?</h1>
        Planning your trip like a pro? 
        <br className="mb-2"></br> 
        or just now realizing you've had one too many shandies and need a place to crash?
        <br className='mb-2'></br>
        Fear not, we've got you covered!
        <br className="mb-2"></br>
        Just enter the town you want to visit below, and we'll give you a list of all the best places to stay!
        <br></br>
      </div>
      <input
        className="border-dark rounded mt-2 p-1"
        placeholder='Enter a town name...'
        type="text"
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
        }
      />
      <br></br>
      <button className="mt-2 btn btn-warning border-2 border-dark rounded" onClick={handleSearch}>
        Search
      </button>


      <div className="container-fluid">
        <div className="row justify-content-center">
          {filteredResults.length > 0 ? (
            filteredResults.map((result) => {
            let href = result.Url;
            return (
              <div className='acc-box text-center rounded m-2 p-2 mt-4 mb-2 col-10 col-md-4 col-lg-3'>
                <h4>{result.Name}</h4>
                <p>{result.Tags}</p>
                <a href={href} target='_blank' rel="noreferrer">
                  {result.Url}
                </a>
              </div>
              );
            })
          ) : ( searchTerm !== '' && isVisible && <p></p> )}
          {filteredByCity.length > 0 ? (
            filteredByCity.map((result) => {
            let href = result.Url;
            return (
              <div className='acc-box text-center rounded m-2 p-2 mt-4 mb-2 col-10 col-md-4 col-lg-3'>
                <h4>{result.Name}</h4>
                <p>{result.Tags}</p>
                <a href={href} target='_blank' rel="noreferrer">
                  {result.Url}
                </a>
              </div>
              );
            })
          ) : ( searchTerm !== '' && isVisible && <p>No results found</p> )}
        </div>
      </div>
    </div>
  );
};

export default Accommodation;