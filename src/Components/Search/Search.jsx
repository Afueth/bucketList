import React, { useState, useEffect } from 'react';
import './Search.css'; // Import the CSS file for styling
import { db } from '../../firebaseConfig'; // Import Firestore instance
import { collection, query, where, getDocs } from 'firebase/firestore';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    if (searchTerm !== '') {
      const fetchMovies = async () => {
        const q = query(collection(db, 'movies'), where('name', '>=', searchTerm), where('name', '<=', searchTerm + '\uf8ff'));
        const querySnapshot = await getDocs(q);
        const movies = querySnapshot.docs.map(doc => doc.data());
        setFilteredMovies(movies);
      };
      fetchMovies();
    } else {
      setFilteredMovies([]);
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="search-results">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <div key={index} className="search-result-card">
              <img src={movie.image} alt={movie.name} className="search-result-image" />
              <div className="search-result-details">
                <h3>{movie.name}</h3>
                <p>Rating: {movie.rating} / 5</p>
              </div>
            </div>
          ))
        ) : (
          searchTerm && <div className="no-results">Movie is not Found 😱</div>
        )}
      </div>
    </div>
  );
}

export default Search;
