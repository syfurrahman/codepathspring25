import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './FlashcardList.css';

const FlashcardList = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setFlipped(false); // Reset flipped state
    setUserGuess(''); // Reset user guess
    setFeedback(''); // Reset feedback
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    setFlipped(false); // Reset flipped state
    setUserGuess(''); // Reset user guess
    setFeedback(''); // Reset feedback
  };

  const handleShuffle = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentIndex(randomIndex);
    setFlipped(false); // Reset flipped state
    setUserGuess(''); // Reset user guess
    setFeedback(''); // Reset feedback
  };

  const handleGuess = () => {
    if (userGuess.toLowerCase() === flashcards[currentIndex].answer.toLowerCase()) {
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
  };

  return (
    <div className="flashcard-list">
      <Flashcard flashcard={flashcards[currentIndex]} flipped={flipped} setFlipped={setFlipped} />
      <div className="guess-section">
        <input
          type="text"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          className={feedback}
          placeholder="Enter your guess"
        />
        <button onClick={handleGuess}>Submit</button>
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleShuffle}>Shuffle</button>
      </div>
    </div>
  );
};

export default FlashcardList;