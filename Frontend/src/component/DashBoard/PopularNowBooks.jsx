import React, { useState, useEffect } from 'react';
import BookInforRate from './BookInforRate';

function PopularBooksList() {
  const [popularBooks, setPopularBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // Fetch popular books data from the server
    fetch('http://localhost:3001/books/popular/highly-rated-books', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch popular books');
        }
        return response.json();
      })
      .then(data => {
        setPopularBooks(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching popular books:', error);
        setIsLoading(false);
      });
  }, []); // Fetch data only once when the component mounts

  if (isLoading) {
    return <div className='text-center text-gray-500'>Loading...</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {popularBooks.length === 0 ? (
        <div className="text-gray-500 text-center">No popular books found</div>
      ) : (
        <div className="overflow-x-auto flex flex-nowrap">
          {popularBooks.map(book => (
            <div key={book.id}>
              <BookInforRate book={book} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PopularBooksList;
