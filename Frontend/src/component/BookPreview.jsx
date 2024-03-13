import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function BookPreview({ goBack, currentSession }) {
  const [bookDetails, setBookDetails] = useState(null);
  const [selectedShelf, setSelectedShelf] = useState('');
  const [userShelves, setUserShelves] = useState([]);
  const { bookId } = useParams();
  const userId = currentSession.user.id;
  console.log(!bookId ? "null" : "notnull");

  useEffect(() => {
    fetchBookDetails();
    fetchUserShelves();
  }, [bookId]); // Fetch data whenever the bookId changes

  const fetchUserShelves = () => {
    fetch(`http://localhost:3001/library/shelves`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: userId,
      })
    })
      .then(response => {
        console.log(response);
        if (!response.ok) {
          throw new Error('Failed to fetch user shelves');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        let shelves = [];
        if (data.defaultShelf) {
          shelves.push(data.defaultShelf);
        }
        if (data.shelves) {
          shelves = [...shelves, ...data.shelves];
        }
        setUserShelves(shelves);
      })
      .catch(error => {
        console.error('Error fetching user shelves:', error);
      });
  };
  

  const fetchBookDetails = () => {
    fetch('http://localhost:3001/books/search/preview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        bookId,
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        return response.json();
      })
      .then(data => {
        setBookDetails(data);
      })
      .catch(error => {
        console.error('Error fetching book details:', error);
      });
  };

  const handleAddToShelf = () => {
    if (selectedShelf) {
      fetch('http://localhost:3001/library/addBookToShelf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: userId,
          shelfId: selectedShelf,
          bookDetails: bookDetails,
        })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to add book to shelf');
          }
          // Update the UI or show a success message
        })
        .catch(error => {
          console.error('Error adding book to shelf:', error);
        });
    }
  };

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  function BookDescription({ description }) {
    return (
      <div className="overflow-y-auto">
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-pink-600">
      <div className="p-4">
        <button onClick={goBack} className="hover:text-gray text-black">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        </button>
      </div>
      <div className="flex-1">
        <div className="grid grid-cols-2 gap-10 p-4 border border-gray-200 rounded shadow-md" style={{ gridTemplateColumns: '25% auto' }}>
          <div>
            <img src={bookDetails.imageUrl} alt={bookDetails.title} className="w-full h-auto rounded-tr-xl rounded-br-xl" />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold mb-2">{bookDetails.title}</h2>
              <p className="text-sm text-gray-600">Authors: {bookDetails.authors.join(', ')}</p>
              <p className="text-sm text-gray-600">Rating: {bookDetails.rating}</p>
              <p className="text-sm text-gray-600">Genre: {bookDetails.genre}</p>
              <p className="text-sm text-gray-600">Page Count: {bookDetails.pageCount}</p>
              <p className="text-sm text-gray-600">Year: {bookDetails.year}</p>
              <br />
              <br />
              {!selectedShelf ? (
                <select value={selectedShelf} onChange={(e) => setSelectedShelf(e.target.value)}>
                  <option value="">Select a Shelf</option>
                  {userShelves.map((shelf) => (
                    <option key={shelf._id} value={shelf._id}>{shelf.name}</option>
                  ))}
                </select>
              ) : (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end" onClick={handleAddToShelf}>Add to Shelf</button>
              )}
            </div>
          </div>
        </div>
        <br /><br />
        <div className="overflow-y-auto bg-pink-100 p-4 rounded-b-md">
          <BookDescription description={bookDetails.description} />
        </div>
      </div>
    </div>
  );

}

export default BookPreview;
