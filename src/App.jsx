import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Components/Home/Home.jsx';
import NavBar from './Components/Navbar/NavBar.jsx';
import Movie from './Components/Movies/Movie.jsx';
import Add from './Components/Add/Add.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Search from './Components/Search/Search.jsx';
import { db } from './firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';

function App() {
  const [activeComponent, setActiveComponent] = useState('home');
  const [movies, setMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesCollection = collection(db, 'movies');
      const movieSnapshot = await getDocs(moviesCollection);
      const movieList = movieSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMovies(movieList);
    };

    fetchMovies();
  }, []);

  const addMovie = async (movie) => {
    const moviesCollection = collection(db, 'movies');
    const docRef = await addDoc(moviesCollection, movie);
    const newMovie = { id: docRef.id, ...movie };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Home />;
      case 'movie':
        return <Movie movies={movies} />;
      case 'notification':
        return <Add addMovie={addMovie} isLoggedIn={isLoggedIn} key={isLoggedIn} />;
      case 'search':
        return <Search />;
      case 'account':
        return <Profile handleLogin={handleLogin} handleLogout={handleLogout} />;
      default:
        return <Home />;
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <div className="App">
      <NavBar setActiveComponent={setActiveComponent} />
      <div className="content">
        {renderActiveComponent()}
      </div>
    </div>
  );
}

export default App;
