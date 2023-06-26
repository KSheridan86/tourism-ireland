// import React, { useState } from 'react';
// import axios from 'axios';

// const Accommodation = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [results, setResults] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(
//         "https://ksheridan86.github.io/Data/Accommodation.json"
//       );
//       setResults(response.data);
//     } catch (error) {
//       console.error('Error occurred during search:', error);
//     }
//   };

//   return (
//     <div className='text-center mt-2 accommodation'>
//       <div className="p-3">
//         <h1>Accommodation</h1>
//           Do you want to plan your trip like a pro? or realize you've had one to many shandies and need a place to crash?
//         <br></br>
//           Fear not, we've got you covered!
//         <br></br>
//           Just enter the town you want to visit below and we'll give you a list of all the best places to stay!
//         <br></br>
//       </div>
//       <input
//         className="border-dark rounded mt-2"
//         placeholder='Enter a town name...'
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
//       /><br></br>
//       <button className="mt-2 btn border-2 border-dark rounded" onClick={handleSearch}>Search</button>


//     {results.length > 0 ? (
//       results.map((result) => {
//         if (result.AddressLocality === searchTerm && searchTerm !== '') {
//           let href = result.Url
//           return (
//             <div className='text-center border border-dark rounded m-2 p-2 mt-2'>
//               <h4>{result.Name}</h4>
//               <p>{result.Tags}</p>
//               <a href={href} target='_blank' rel="noreferrer">{result.Url}</a>
//             </div>
//           );
//         } 
//       })) : ( searchTerm !== '' && <p>No results found</p> )}

//     </div>
//   );
// };

// export default Accommodation;

import React, { useState } from 'react';
import axios from 'axios';

const Accommodation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    try {
      const response = await axios.get(
        "https://ksheridan86.github.io/Data/Accommodation.json"
      );
      setResults(response.data);
    } catch (error) {
      console.error('Error occurred during search:', error);
    }
  };

  const filteredResults = results.filter(
    (result) => result.AddressLocality === searchTerm && searchTerm !== ''
  );

  return (
    <div className='text-center mt-2 accommodation'>
      <div className="p-3">
        <h1>Accommodation</h1>
        Do you want to plan your trip like a pro? or realize you've had one too many shandies and need a place to crash?
        <br></br>
        Fear not, we've got you covered!
        <br></br>
        Just enter the town you want to visit below, and we'll give you a list of all the best places to stay!
        <br></br>
      </div>
      <input
        className="border-dark rounded mt-2"
        placeholder='Enter a town name...'
        type="text"
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
        }
      />
      <br></br>
      <button className="mt-2 btn border-2 border-dark rounded" onClick={handleSearch}>
        Search
      </button>

      {filteredResults.length > 0 ? (
        filteredResults.map((result) => {
          let href = result.Url;
          return (
            <div className='text-center border border-dark rounded m-2 p-2 mt-2'>
              <h4>{result.Name}</h4>
              <p>{result.Tags}</p>
              <a href={href} target='_blank' rel="noreferrer">
                {result.Url}
              </a>
            </div>
          );
        })
      ) : (
        searchTerm !== '' && <p>No results found</p>
      )}
    </div>
  );
};

export default Accommodation;