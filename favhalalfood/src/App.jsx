import React from 'react';
import './App.css';
import FoodCard from './FoodCard';

const App = () => {
  const foodPlaces = [
    {
      name: "Adel's Famous Halal Food",
      description: 'Best for chicken over rice.',
      image: 'https://www.tastingtable.com/img/gallery/is-adels-famous-halal-cart-really-worth-an-hour-in-line/where-is-adels-famous-halal-cart-located-and-what-are-the-hours-1695757778.jpg',
      location: 'West 49th St. 6th Ave, New York, NY 10020'
    },
    {
      name: "Shah's Halal Food",
      description: 'Best shawarma in town.',
      image: 'https://www.shahshalalfood.com/wp-content/uploads/2024/06/astoria3.jpeg',
      location: '30-19 30th Ave. 1 Fl, Astoria, NY 11102'
    },
    {
      name: "HUNCHOS Halal spot",
      description: 'Best shawarma in town.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLHk_F22aFDQ7eZJdBxXNEQIk1c9x801kaQ&s',
      location: '30-19 30th Ave. 1 Fl, Astoria, NY 11102'
    },
    {
      name: "Sharif's Famous",
      description: 'Casual eatery with a salad bar offering halal comfort food and small plates, such as chicken over yellow rice.',
      image: 'https://s3-media0.fl.yelpcdn.com/bphoto/JWgNnIkmsB5fhbWHON0b3g/348s.jpg',
      location: '31st St & Broadway. New York, NY 10001'
    },
    {
      name: "Terry and Yaki",
      description: 'Best shawarma in town.',
      image: 'https://fta.ams3.cdn.digitaloceanspaces.com/domains/nyfta.org/member/102/4DUe2EzhIonCWc2LRgCeLtxUaYUhBdeR.png',
      location: 'Various in New York'
    },
    {
      name: "SHAWARMA BAY",
      description: 'Made Fresh Daily Shawarma & Chapli kebab.',
      image: 'https://s3-media0.fl.yelpcdn.com/bphoto/XUzJG6hbwASNkQGkPIcCiA/348s.jpg',
      location: '1290 6th Ave, Manhattan, NY 10104'
    },
    {
      name: "Halal Guys",
      description: 'Famous for their chicken and gyro over rice.',
      image: 'https://cdn.vox-cdn.com/thumbor/A5TQGwT3e-zAqGg3qpun0mSlFbQ=/0x0:1024x683/1200x800/filters:focal(415x248:577x410)/cdn.vox-cdn.com/uploads/chorus_image/image/62561510/halal_guys_restaurant_opening_london.0.jpg',
      location: 'Various in New York'
    },
    {
      name: "Fluffies Hot Chicken - LES",
      description: 'Fluffies Hot Chicken is all about serving up delicious hot fried chicken sandwiches and tenders.',
      image: 'https://lh5.googleusercontent.com/p/AF1QipMySWqefUuFLgRKKb8tDt0FtmwJzooctJ4Q0XYr=w276-h368-k-no',
      location: '47 Clinton St, New York, NY 10002'
    },
    {
      name: "Empire Halal",
      description: 'Halal food truck serving up familiar eats from gyros to falafel.',
      image: 'https://lh3.googleusercontent.com/p/AF1QipN78khTXqkcQj7S4oRiDF4EByzFYtkUPQBn3XLn=s1360-w1360-h1020',
      location: '1107 3rd Ave, New York, NY 10065'
    },
    {
      name: "Hunter halal truck",
      description: 'Affordable halal food truck.',
      image: 'https://lh3.googleusercontent.com/p/AF1QipNqyn244qY7nAwaQhMPLGUyUxOe3SYClbMSXan_=s1360-w1360-h1020',
      location: '904 Lexington Ave, New York, NY 10065'
    },
  ];

  return (
    <div className="App">
      <img src="https://png.pngtree.com/png-vector/20220511/ourmid/pngtree-red-and-white-awning-mockup-png-image_4592900.png" alt="Awning" className="awning-image" />
      <h1>Favorite Halal Food Places</h1>
      <div className="food-cards-container">
        {foodPlaces.map((place, index) => (
          <FoodCard
            key={index}
            name={place.name}
            description={place.description}
            image={place.image}
            location={place.location}
          />
        ))}
      </div>
    </div>
  );
}

export default App;