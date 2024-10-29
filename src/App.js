import React, { useState } from 'react';
import './App.css'; // create and import CSS file

const App = () => {
  const [query, setQuery] = useState(''); //store user query
  const [articles, setArticles] = useState([]); //store articles

  const fetchArticles = async () => {
    const apiKey = process.env.REACT_APP_NEWS_KEY; // fetch API key from .env file
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${query}&apiKey=${apiKey}`;

    try {
      console.log("Searching news articles from:",apiUrl)
      const response = await fetch(apiUrl); //send request to API endpoint URL
      
      if (!response.ok) {
        throw new Error('Error in network response'); // error handling 
      }
      const data = await response.json(); //parse JSON response
      console.log(data)
      setArticles(data.articles.slice(0, 10)); // only return the first ten articles
    } 
    catch (error) {
      console.error("Error when fetching news articles:", error); //error handling
    }
  };

  //search button to initiate fetchArticles function
  const handleSearch = (e) => {
    e.preventDefault(); //ChatGPT generated code to control default behavior of web application submissions
    fetchArticles();
  };

  return (
    <div className="App">
      <h1>The Daily Scoop</h1>
      <h2>Choose a category from the list: business, entertainment, general, health, science, sports and technology</h2>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Enter category..." 
          required 
        />
        <button type="submit">Search</button>
      </form>

      <h3></h3>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;




