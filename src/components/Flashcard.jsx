import React from 'react';
import './Flashcard.css';

const Flashcard = ({ flashcard, flipped, setFlipped }) => {
  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="flashcard-content flashcard-front">
        {flashcard.question}
      </div>
      <div className="flashcard-content flashcard-back">
        {flashcard.answer}
      </div>
    </div>
  );
};

export default Flashcard;