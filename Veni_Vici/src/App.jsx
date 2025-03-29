import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]); // State to store API data
  const [bannedAttributes, setBannedAttributes] = useState([]); // State for banned attributes
  const [filteredResults, setFilteredResults] = useState([]); // State for filtered results
  const [currentResult, setCurrentResult] = useState(null); // State for the current displayed result
  const [history, setHistory] = useState([]); // State to store history of displayed results

  // Function to fetch data from the TVMaze API
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.tvmaze.com/shows'); // TVMaze API for shows
      const json = await response.json();
      setData(json); // Store all shows in state
      filterResults(json); // Filter results based on banned attributes
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to filter results based on banned attributes
  const filterResults = (shows) => {
    const filtered = shows.filter((show) => {
      return (
        !bannedAttributes.includes(show.name) &&
        !bannedAttributes.includes(show.genres.join(', ')) &&
        !bannedAttributes.includes(show.language)
      );
    });
    setFilteredResults(filtered);

    // Set a random show from the filtered results
    if (filtered.length > 0) {
      const randomResult = filtered[Math.floor(Math.random() * filtered.length)];
      setCurrentResult(randomResult); // Set the current result
    } else {
      setCurrentResult(null); // No valid results
    }
  };

  // Function to update the history with the current result
  const updateHistory = (result) => {
    setHistory((prevHistory) => [...prevHistory, result]);
  };

  // Fetch data on initial render
  useEffect(() => {
    fetchData();
  }, []);

  // Re-filter results whenever bannedAttributes change
  useEffect(() => {
    filterResults(data);
  }, [bannedAttributes]);

  // Update history whenever the current result changes
  useEffect(() => {
    if (currentResult) {
      updateHistory(currentResult); // Add the current result to the history
    }
  }, [currentResult]);

  // Function to handle banning an attribute
  const handleBanAttribute = (attribute) => {
    if (!bannedAttributes.includes(attribute)) {
      setBannedAttributes((prev) => [...prev, attribute]);
    }
  };

  // Function to remove an attribute from the ban list
  const handleRemoveBan = (attribute) => {
    setBannedAttributes((prev) => prev.filter((attr) => attr !== attribute));
  };

  return (
    <div className="App">
      <h1>TV Show Info</h1>
      <button onClick={fetchData} className="fetch-button">Fetch Random Show</button>
      {currentResult ? (
        <div className="show-card">
          <h2>{currentResult.name}</h2>
          <p>Genres: {currentResult.genres.join(', ') || 'N/A'}</p>
          <p>Language: {currentResult.language || 'N/A'}</p>
          <p>Premiered: {currentResult.premiered || 'N/A'}</p>
          <div className="image-container">
            <img src={currentResult.image?.medium || ''} alt={currentResult.name} />
          </div>
          <div className="ban-buttons">
            <button onClick={() => handleBanAttribute(currentResult.name)}>Ban Show Name</button>
            <button onClick={() => handleBanAttribute(currentResult.genres.join(', '))}>Ban Genres</button>
            <button onClick={() => handleBanAttribute(currentResult.language)}>Ban Language</button>
          </div>
        </div>
      ) : (
        <p>No results available. Adjust your ban list or try again.</p>
      )}
      <div className="ban-list">
        <h3>Banned Attributes</h3>
        <ul>
          {bannedAttributes.map((attr, index) => (
            <li key={index}>
              {attr} <button onClick={() => handleRemoveBan(attr)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="history">
        <h3>Previously Displayed Results</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index} className="history-item">
              <p>{item.name}</p>
              <img src={item.image?.medium || ''} alt={item.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;