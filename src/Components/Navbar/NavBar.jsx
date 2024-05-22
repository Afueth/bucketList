import React, { useState } from 'react';
import './NavBar.css';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';

function NavBar({ setActiveComponent }) {
  const [activeIcon, setActiveIcon] = useState('home'); // State to track the active icon

  // Click event handlers
  const handleIconClick = (iconName) => {
    console.log(`${iconName} Icon Clicked`);
    setActiveIcon(iconName); // Set the active icon when clicked
    setActiveComponent(iconName); // Update the active component in the App component
  };

  return (
    <nav className='navbar' role='navigation' aria-label='Main Navigation'>
      <button onClick={() => handleIconClick('home')} aria-label='Home'>
        <HomeIcon style={{ transform: activeIcon === 'home' ? 'scale(1.8)' : 'scale(1)' }} />
      </button>
      <button onClick={() => handleIconClick('movie')} aria-label='Movies'>
        <MovieIcon style={{ transform: activeIcon === 'movie' ? 'scale(1.8)' : 'scale(1)' }} />
      </button>
      <button onClick={() => handleIconClick('notification')} aria-label='Notifications'>
        <CircleNotificationsIcon style={{ transform: activeIcon === 'notification' ? 'scale(1.8)' : 'scale(1)' }} />
      </button>
      <button onClick={() => handleIconClick('search')} aria-label='Search'>
        <SearchIcon style={{ transform: activeIcon === 'search' ? 'scale(1.8)' : 'scale(1)' }} />
      </button>
      <button onClick={() => handleIconClick('account')} aria-label='Account'>
        <AccountCircleIcon style={{ transform: activeIcon === 'account' ? 'scale(1.8)' : 'scale(1)' }} />
      </button>
    </nav>
  );
}

export default NavBar;
