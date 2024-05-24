import React, { useEffect } from 'react';
import './Home.css'; // Import CSS file for styling

function Home() {
  useEffect(() => {
    const container = document.querySelector('.letter-container');
    const subContainer = document.querySelector('.sub-container');

    // Clear the container to prevent duplicates
    container.innerHTML = '';
    subContainer.innerHTML = '';

    // Define the text to display
    const text = 'Bucket List';
    const subText = "Afueth'S";

    // Create elements for each letter and apply animation with staggered delay
    for (let i = 0; i < text.length; i++) {
      const letter = document.createElement('span');
      letter.textContent = text[i];
      letter.className = `letter ${i % 4 === 0 ? 'viga' : i % 4 === 1 ? 'ultra' : i % 4 === 2 ? 'press-start' : 'monoton'}`; // Assign a class based on index
      letter.style.animationDelay = `${i * 0.5}s`; // Staggered delay for each letter
      container.appendChild(letter);
    }

    // Create elements for each letter of the subText and apply animation with staggered delay
    for (let i = 0; i < subText.length; i++) {
      const letter = document.createElement('span');
      letter.textContent = subText[i];
      letter.className = `letter sub ${i % 4 === 0 ? 'viga' : i % 4 === 1 ? 'ultra' : i % 4 === 2 ? 'press-start' : 'monoton'}`; // Assign a class based on index
      letter.style.animationDelay = `${text.length * 0.5 + i * 0.5}s`; // Staggered delay for each letter after "Bucket List" has finished
      subContainer.appendChild(letter);
    }
  }, []);

  return (
    <div className='home'>
      <div className='vignette-overlay'></div>
      <div className='sub-container' aria-label="Afueth'S">
        {/* Empty div for dynamically added letters */}
      </div>
      <div className='letter-container' aria-label="Bucket List">
        {/* Empty div for dynamically added letters */}
      </div>
    
    </div>
  );
}

export default Home;
