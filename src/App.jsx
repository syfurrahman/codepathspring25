import React from 'react';
import FlashcardList from './components/FlashcardList';
import './App.css';

const App = () => {
  const flashcards = [
    { question: 'What is React?', answer: 'A JavaScript library for building user interfaces.' },
    { question: 'What is a component?', answer: 'A reusable piece of UI.' },
    { question: 'What is state?', answer: 'An object that determines how that component renders & behaves.' },
    { question: 'What is a prop in React?', answer: 'A special keyword for passing data from one component to another.' },
    { question: 'What is JSX?', answer: 'A syntax extension that allows mixing HTML with JavaScript.' },
    { question: 'What is a hook in React?', answer: 'A special function that lets you use state and other React features.' },
    { question: 'What is useEffect?', answer: 'A hook that lets you perform side effects in function components.' },
    { question: 'What is a virtual DOM?', answer: 'A lightweight copy of the real DOM that React uses to optimize updates.' },
    { question: 'What is a higher-order component?', answer: 'A function that takes a component and returns a new component.' },
    { question: 'What is Redux?', answer: 'A state management library for JavaScript applications.' }
  ];

  return (
    <div className="App">
      <h1> React Flashcard App</h1>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
};

export default App;