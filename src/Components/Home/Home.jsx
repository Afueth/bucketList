import React, { useEffect } from 'react';
import './Home.css'; // Import CSS file for styling

function Home() {
  useEffect(() => {
    const container = document.querySelector('.letter-container');

    // Clear the container to prevent duplicates
    container.innerHTML = '';

    // Define the text to display
    const text = 'Bucket List';

    // Create elements for each letter and apply animation with staggered delay
    for (let i = 0; i < text.length; i++) {
      const letter = document.createElement('span');
      letter.textContent = text[i];
      letter.className = `letter ${i % 4 === 0 ? 'viga' : i % 4 === 1 ? 'ultra' : i % 4 === 2 ? 'press-start' : 'monoton'}`; // Assign a class based on index
      letter.style.animationDelay = `${i * 0.5}s`; // Staggered delay for each letter
      container.appendChild(letter);
    }
  }, []);

  return (
    <div className='home'>
      <div className='vignette-overlay'></div>
      <div className='letter-container' aria-label="Bucket List">
        {/* Empty div for dynamically added letters */}
      </div>
    </div>
  );
}

export default Home;
