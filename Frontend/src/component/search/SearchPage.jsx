// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import SearchHistory from './SearchHistory';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <br/>
      <SearchResults searchTerm={searchTerm} />
      <br/>
      <SearchHistory />
    </> 
  );
}

export default SearchPage;
