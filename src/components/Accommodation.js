import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Accommodation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, []);

  const handleSearch = () => {
    setIsClicked(true);

    if (searchTerm === '') {
      setSearchResults([]);
      return;
    }

    const filteredResults = results.filter(
      (result) =>
        (result.AddressLocality === searchTerm || result.AddressRegion === searchTerm)
    );

    setSearchResults(filteredResults);
  };

  const renderResults = () => {

    if (searchResults.length > 0) {
      return searchResults.map((result) => {
        const href = result.Url;

        return (
          <div
            className='my-shadow acc-box text-center rounded m-2 p-3 mt-4 mb-2 col-12 col-md-4 col-lg-4'
            key={result.id}>
            <h4>{result.Name}</h4>
            <p>{result.Tags}</p>
            <a className="hotel-url" href={href} target='_blank' rel="noreferrer">
              {result.Url}
            </a>
          </div>
        );
      });
    }

    return null;
  };

  return (
    <div className='text-center accommodation container'>
      <div className="row justify-content-center">
        <div className="p-3 col-12 col-lg-6 fs-5">
          <h1 className="title-shadow mt-3 mb-3">Fancy getting your head down for a few hours?</h1>
          <p className="mb-3">Planning your trip like a pro? </p>
          <p className='mb-3'>Realizing you've had one too many shandies and need a place to crash?</p>
          <p className="mb-3">Fear not, we've got you covered!</p>
          <p className="mb-3">Just enter the town you want to visit below, and we'll give you a list of all the best places to stay!</p>
        </div>
      </div>
      <input
        className="my-shadow border-dark rounded p-1"
        placeholder='Enter a town name...'
        type="text"
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
        }
      />
      <br></br>
      <button
        className="my-shadow mt-4 mb-4 btn btn-warning border-2 border-dark rounded"
        onClick={handleSearch}
      >
        Search
      </button>
      {isClicked && searchTerm === '' && <p>Please enter a town name.</p>}
      {isClicked && searchResults.length === 0 && searchTerm !== '' && isVisible && <p>No results found!</p>}

      <div className="container mb-5">
        <div className="row justify-content-around">
          {renderResults()}
        </div>
      </div>
    </div>
  );
};

export default Accommodation;