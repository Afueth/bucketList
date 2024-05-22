import React, { useState } from 'react';
import './Movie.css'; // Make sure to import the CSS file

function Movie() {
  const cards = Array(200).fill(null); // Create an array of 200 items for 200 cards
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;

  // Calculate the index of the first and last card on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  // Calculate the total number of pages
  const totalPages = Math.ceil(cards.length / cardsPerPage);

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
        {currentCards.map((_, index) => (
          <div key={index} className="card"></div>
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
