import React, { useState, useEffect } from 'react';
import './Add.css';

function Add({ addMovie, isLoggedIn }) {
  const [movieName, setMovieName] = useState('');
  const [movieGenre, setMovieGenre] = useState('');
  const [movieImage, setMovieImage] = useState('');
  const [movieRating, setMovieRating] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = movieName && movieGenre && movieImage && movieRating;
    setIsFormValid(isValid);
  }, [movieName, movieGenre, movieImage, movieRating]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      name: movieName,
      genre: movieGenre,
      image: movieImage,
      rating: movieRating,
    };
    addMovie(newMovie);
    setMovieName('');
    setMovieGenre('');
    setMovieImage('');
    setMovieRating('');
  };

  return isLoggedIn ? (
    <div className="add-form-container-unique">
      <form className="add-form-unique" onSubmit={handleSubmit}>
        <h2>Add Movie</h2>
        <div className="form-group-unique">
          <label htmlFor="movieName">Movie Name</label>
          <input
            type="text"
            id="movieName"
            className="input-field-unique"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
        </div>
        <div className="form-group-unique">
          <label htmlFor="movieGenre">Movie Genre</label>
          <select
            id="movieGenre"
            className="input-field-unique"
            value={movieGenre}
            onChange={(e) => setMovieGenre(e.target.value)}
          >
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Adventure">Adventure</option>
            <option value="Animation">Animation</option>
            <option value="Documentary">Documentary</option>
            <option value="Musical">Musical</option>
            <option value="Mystery">Mystery</option>
          </select>
        </div>
        <div className="form-group-unique">
          <label htmlFor="movieImage">Movie Image URL</label>
          <input
            type="text"
            id="movieImage"
            className="input-field-unique"
            value={movieImage}
            onChange={(e) => setMovieImage(e.target.value)}
          />
        </div>
        <div className="form-group-unique">
          <label htmlFor="movieRating">Movie Rating</label>
          <input
            type="number"
            id="movieRating"
            className="input-field-unique"
            value={movieRating}
            onChange={(e) => setMovieRating(e.target.value)}
            min="0"
            max="10"
            step="0.1"
          />
        </div>
        <button type="submit" className="submit-button-unique" disabled={!isFormValid}>
          Add Movie
        </button>
      </form>
    </div>
  ) : (
    <div className="not-logged-in-message">
      This is a Personal BucketList. Why are you here? Just Get Out!
    </div>
  );
}

export default Add;
