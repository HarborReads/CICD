import React from 'react';

function BookInfo({ book, onRemove }) {
  const handleRemoveClick = () => {
    onRemove(book);
  };

  return (
    <div className="flex-none w-56 m-4 p-4 rounded-md shadow bg-white">
      <img src={book.imageUrl} alt={book.title} className="h-48 w-full object-cover" />
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-gray-600">by {book.authors || 'Unavailable'}</p>
        <p className="text-gray-600">Categories: {book.genre && book.genre.length > 0 ? book.genre.join(', ') : 'Unavailable'}</p>
        <p className="text-gray-600">Rating: {book.rating || 'Unavailable'}</p>
        {book.year && <p className="text-gray-600">Published Year: {book.year.split('-')[0]}</p>}
        <button className="text-sm bg-red-500 text-white px-2 py-1 rounded-md mt-2" onClick={handleRemoveClick}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default BookInfo;
