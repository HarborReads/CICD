/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import BookInfo from '../Reusables/BookInfo';

// eslint-disable-next-line react/prop-types
function SearchResults({ searchTerm }) {
  const [searchResults, setSearchResults] = useState([]);
  const userId = "60f6a3b4f8d9a652fc2f2e87";
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // Fetch search results data from the server
    fetch('http://localhost:3001/books/search/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: userId,
        title: searchTerm
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch search results');
        }
        return response.json();
      })
      .then(data => {
        setSearchResults(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
        setIsLoading(false);
      });
  }, [searchTerm]); // Fetch data whenever the searchTerm changes

  if (isLoading) {
    return <div className='text-center text-gray-500'>Loading...</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Search Results</h2> {/* Changed text-white to text-gray-700 */}
      {searchResults.length === 0 ? (
        <div className="text-gray-500 text-center">Enter a query on the search bar to find books</div>
      ) : (
        <div className="overflow-x-auto flex flex-nowrap">
        {searchResults.map((val) => (
          <div key={val.id}>
            <BookInfo book={val}/>
          </div>
        ))}
      </div>
      )}
      {searchResults.length > 3 && (
        <div className="flex justify-end mt-4">
          <button className="text-white">View All</button>
        </div>
      )}
    </div>
  );
}

export default SearchResults;