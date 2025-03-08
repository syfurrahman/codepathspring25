import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './FlashcardList.css';

const FlashcardList = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setFlipped(false); // Reset flipped state
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    setFlipped(false); // Reset flipped state
  };

  return (
    <div className="flashcard-list">
      <Flashcard flashcard={flashcards[currentIndex]} flipped={flipped} setFlipped={setFlipped} />
      <div className="navigation-buttons">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default FlashcardList;