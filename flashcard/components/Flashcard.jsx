import React from 'react';
import './Flashcard.css';

const Flashcard = ({ flashcard, flipped, setFlipped }) => {
  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="flashcard-content flashcard-front">
        <img src={flashcard.image} alt="Flashcard" className="flashcard-image" />
        <p className="flashcard-question">{flashcard.question}</p>
      </div>
      <div className="flashcard-content flashcard-back">
        <p>{flashcard.answer}</p>
      </div>
    </div>
  );
};

export default Flashcard;