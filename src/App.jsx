import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home/Home.jsx';
import NavBar from './Components/Navbar/NavBar.jsx';
import Movie from './Components/Movies/Movie.jsx';
import Notifications from './Components/Notifications/Notifications.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Search from './Components/Search/Search.jsx';

function App() {
  const [activeComponent, setActiveComponent] = useState('home'); // State to track the active component

  // Function to render the active component
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Home />;
      case 'movie':
        return <Movie />;
      case 'notification':
        return <Notifications />;
      case 'search':
        return <Search />;
      case 'account':
        return <Profile />;
      default:
        return <Home />;
    }
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
