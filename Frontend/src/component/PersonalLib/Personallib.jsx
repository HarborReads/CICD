import React, { useState, useEffect } from 'react';
import data from '../search/TemplateData.json';
import BookInfo from './bookContainers';

function Personallib() {
  const [shelves, setShelves] = useState([]);
  const [shelfName, setShelfName] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showMenuIndex, setShowMenuIndex] = useState(-1);

  useEffect(() => {
    const savedShelves = localStorage.getItem('shelves');
    if (savedShelves) {
      setShelves(JSON.parse(savedShelves));
    }
  }, []);

  const handleAddShelf = () => {
    if (shelfName.trim() !== '') {
      const newShelves = [...shelves, { name: shelfName, books: [] }];
      setShelves(newShelves);
      localStorage.setItem('shelves', JSON.stringify(newShelves));
      setShelfName('');
    }
  };

  const handleRemoveShelf = (index) => {
    const newShelves = shelves.filter((shelf, i) => i !== index);
    setShelves(newShelves);
    localStorage.setItem('shelves', JSON.stringify(newShelves));
  };

  const handleRemoveBook = (shelfIndex, bookToRemove) => {
    const updatedShelves = shelves.map((shelf, index) => {
      if (index === shelfIndex) {
        return {
          ...shelf,
          books: shelf.books.filter(book => book !== bookToRemove)
        };
      }
      return shelf;
    });
    setShelves(updatedShelves);
    localStorage.setItem('shelves', JSON.stringify(updatedShelves));
  };

  const filterBooksByShelf = (shelfName) => {
    let filteredBooks = data;
    if (shelfName !== 'All') {
      filteredBooks = filteredBooks.filter(book => book.shelf === shelfName);
      if (selectedFilter !== 'All') {
        filteredBooks = filteredBooks.filter(book => book.status === selectedFilter);
      }
    } else {
      if (selectedFilter !== 'All') {
        filteredBooks = filteredBooks.filter(book => book.status === selectedFilter);
      }
    }
    return filteredBooks;
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
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
            className='text-white bg-brown rounded w-45 ml-2 mr-2 px-2 py-1 mr-2'// Adjust the margin-right value to your preference
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
                  <h2 className="text-2xl font-semibold">{shelf.name}</h2>
                  <button
                    className="text-sm bg-red-500 text-white px-2 py-1 rounded-md mb-2"
                    onClick={() => handleRemoveShelf(shelfIndex)}
                  >
                    Remove Shelf
                  </button>
                </div>
                <div className="flex overflow-x-auto">
                  {filterBooksByShelf(shelf.name).map((book, bookIndex) => (
                    <div key={bookIndex} className="flex items-center">
                      <BookInfo book={book} onRemove={() => handleRemoveBook(shelfIndex, book)} />
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
