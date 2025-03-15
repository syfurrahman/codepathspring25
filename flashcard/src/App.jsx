import React from 'react';
import FlashcardList from './components/FlashcardList';
import './App.css';

const App = () => {
  const flashcards = [
    { question: 'Who is this?', answer: 'Stephen Curry', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png' },
    { question: 'Who is this?', answer: 'Kendrick Lamar', image: 'https://cdn-images.dzcdn.net/images/cover/82db4c0f8e9412cafb1cd765b076d58c/0x1900-000000-80-0-0.jpg' },
    { question: 'Who is this?', answer: 'Lionel Messi', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTuqmrx5e_mLUJdFRMBSjfvojvWtGs8th027w_2GVvqouy6dkr_MbHORDgV0GTq-PlKuqfFlhjJi1iIziGq9Rc2ag' },
    { question: 'Who is this?', answer: 'Cristiano Ronaldo', image: 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-of-portugal-reacts-as-he-looks-on-during-news-photo-1725633476.jpg' },
    { question: 'Who is this?', answer: 'Drake', image: 'https://imageio.forbes.com/specials-images/imageserve/5ed578988b3c370006234c35/0x0.jpg?format=jpg&crop=1031,1031,x43,y49,safe&height=416&width=416&fit=bounds' },
    { question: 'Who is this?', answer: 'Rihanna', image: 'https://imageio.forbes.com/specials-images/imageserve/67606f22d9918d6930c26d22/0x0.jpg?format=jpg&crop=1549,1552,x551,y201,safe&height=416&width=416&fit=bounds' },
    { question: 'Who is this?', answer: 'Central Cee', image: 'https://i.scdn.co/image/ab67616d0000b273d531f45a2948d22e5c5ff66f' },
    { question: 'Who is this?', answer: 'Angelina Jolie', image: 'https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_FMjpg_UX1000_.jpg' },
    { question: 'Who is this?', answer: 'Leonardo DiCaprio', image: 'https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg' },
    { question: 'Who is this?', answer: 'Margot Robbie', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTyc7D9Cy4O73acOiN0W3vsn2tzVEHlkG6oUTOZkObq0SA2cUcy1aEMOZlErUijll8KwjOcjTwDRnIobDyP4Av5rg' }
  ];

  return (
    <div className="App">
      <h1 className ='title-flash'>Guess the Celebrity</h1>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
};

export default App;