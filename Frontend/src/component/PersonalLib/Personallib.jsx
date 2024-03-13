import React, { useState, useEffect } from 'react';
import BookInfo from './bookContainers';

function Personallib({ currentSession }) {
  const [shelves, setShelves] = useState([]);
  const [shelfName, setShelfName] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const userId = currentSession.user.id;

  useEffect(() => {
    fetchUserShelves();
  }, []);

  const fetchUserShelves = () => {
    fetch(`http://localhost:3001/library/shelves`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId })
    })
    .then(response => response.json())
    .then(response => {
      const { shelves, defaultShelf } = response;
      const defaultShelfExists = shelves.some(shelf => shelf.name === defaultShelf.name);
      const updatedShelves = defaultShelfExists ? [...shelves] : [...shelves, defaultShelf];
      setShelves(updatedShelves);
    })
      .catch(error => console.error('Error fetching user shelves:', error));
  };

  const handleAddShelf = () => {
    if (shelfName.trim() !== '') {
      fetch(`http://localhost:3001/library/addShelf`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, shelfName })
      })
        .then(response => response.json())
        .then(() => {
          setShelves([...shelves, { name: shelfName, books: [] }]);
          setShelfName('');
        })
        .catch(error => console.error('Error adding shelf:', error));
    }
  };

  const handleRemoveShelf = (index) => {
    const shelfId = shelves[index]._id;
    fetch(`http://localhost:3001/library/removeShelf`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, shelfId })
    })
      .then(response => response.json())
      .then(() => {
        const newShelves = [...shelves];
        newShelves.splice(index, 1);
        console.log(newShelves);
        setShelves(newShelves);
      })
      .catch(error => console.error('Error removing shelf:', error));
  };

  const handleUpdateBookState = (shelfIndex, bookToUpdate, newState) => {
    const updatedShelves = shelves.map((shelf, index) => {
      if (index === shelfIndex) {
        return {
          ...shelf,
          books: shelf.books.map(book => {
            if (book === bookToUpdate) {
              return {
                ...book,
                state: newState
              };
            }
            return book;
          })
        };
      }
      return shelf;
    });
    setShelves(updatedShelves);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const filterBooksByShelf = (shelfName) => {
    let filteredBooks = [];
    shelves.forEach((shelf) => {
      if (shelf && shelf.name === shelfName || shelfName === 'All') {
        if (Array.isArray(shelf.books)) {
          filteredBooks = [...filteredBooks, ...shelf.books];
        }
      }
    });
    
    if (selectedFilter !== 'All') {
      filteredBooks = filteredBooks.filter((book) => book.state === selectedFilter);
    }
    return filteredBooks;
  };
  return (
    <div>
      <div className="mb-4">
        <h1 className='text-2xl md:text-4xl font-medium text-black mb-8'>Personal Library</h1>
      </div>
      <div className="bg-very-light-maroon rounded-lg shadow-md p-4  items-center">
        <div className="flex items-center">
          <input
            className='text-black bg-gray-200 rounded-2xl mr-2 pl-2 py-1 w-1/3'
            placeholder='Enter your new shelf name'
            value={shelfName}
            onChange={(e) => setShelfName(e.target.value)}
          />
          <button
            className='text-white bg-brown rounded w-45 ml-2 mr-2 px-2 py-1 mr-2'
            onClick={handleAddShelf}
          > 
            Add Shelf
          </button>
          <select
            className='text-black bg-gray-200 rounded-2xl pl-2 pr-4 py-1 ml-2'
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Read">Read</option>
            <option value="Currently Reading">Currently Reading</option>
            <option value="Want to Read">Want to Read</option>
          </select>
        </div>
        <div className="mt-4">
          {shelves.map((shelf, shelfIndex) => (
            <div key={shelfIndex} className="mb-4">
              <div className="bg-nav-bg rounded-lg shadow-md p-4 mb-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold">{shelf && shelf.name}</h2>
                  <button
                    className="text-sm bg-red-500 text-white px-2 py-1 rounded-md mb-2"
                    onClick={() => handleRemoveShelf(shelfIndex)}
                  >
                    Remove Shelf
                  </button>
                </div>
                <div className="flex overflow-x-auto">
                {filterBooksByShelf(shelf && shelf.name).map((book, bookIndex) => (
                  <div key={bookIndex} className="flex items-center">
                    <BookInfo
                      bookId={book}
                      shelf={shelf}
                      userId={userId}
                      setShelves={setShelves}
                      onUpdateState={(newState) => handleUpdateBookState(shelf, book, newState)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Personallib;
