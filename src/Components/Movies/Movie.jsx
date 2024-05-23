import React, { useState } from 'react';
import './Movie.css'; // Make sure to import the CSS file
import StarRatings from 'react-star-ratings';

function Movie({ movies }) {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;

  // Calculate the index of the first and last card on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = movies.slice(indexOfFirstCard, indexOfLastCard);

  // Calculate the total number of pages
  const totalPages = Math.ceil(movies.length / cardsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Navigate to previous page
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Navigate to next page
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Navigate to the last page
  const handleLast = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div className="movie-container">
      <div className="card-grid">
        {currentCards.map((movie, index) => (
          <div key={index} className="card">
            <img src={movie.image} alt={movie.name} className="card-image" />
            <div className="card-details">
              <h3>{movie.name}</h3>
              <p>Genre: {movie.genre}</p>
              <div className="rating">
                <StarRatings
                  rating={Number(movie.rating)} // Ensure rating is a number
                  starRatedColor="yellow"
                  numberOfStars={5}
                  name='rating'
                  starDimension="20px"
                  starSpacing="2px"
                />
                <span className="rating-text">{Number(movie.rating)} / 5</span> {/* Ensure rating is a number */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        <button
          onClick={() => paginate(1)}
          className={currentPage === 1 ? 'active' : ''}
        >
          1
        </button>
        {totalPages > 1 && (
          <button
            onClick={() => paginate(2)}
            className={currentPage === 2 ? 'active' : ''}
          >
            2
          </button>
        )}
        <span>...</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
        <button onClick={handleLast} disabled={currentPage === totalPages}>
          Last
        </button>
      </div>
    </div>
  );
}

export default Movie;
