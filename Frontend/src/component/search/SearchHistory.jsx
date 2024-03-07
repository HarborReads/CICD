/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import BookInfo from '../Reusables/BookInfo'; 

function SearchHistory() {
  const [searchHistory, setSearchHistory] = useState([]);
  const userId = "60f6a3b4f8d9a652fc2f2e87";

  useEffect(() => {
    // Fetch search history data from the server
    fetch('http://localhost:3001/books/search/history', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId: userId })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch search history');
        }
        return response.json();
      })
      .then(data => {
        console.log('Search history data:', data);
        setSearchHistory(data.searchHistory);
      })
      .catch(error => {
        console.error('Error fetching search history:', error);
      });
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Search History</h2>
      {searchHistory.length === 0 ? (
        <div className="text-gray-500 text-center">No search history found</div>
      ) : (
        <div className="overflow-x-auto flex flex-nowrap">
          {searchHistory.map((val) => (
            <div key={val.id}>
            <BookInfo book={val}/>
          </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchHistory;
