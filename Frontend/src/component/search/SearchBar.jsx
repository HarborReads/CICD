/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function SearchBar({ setSearchTerm }) {
    const [searchBar, setSearchBar] = useState('');

    const handleSearchClick = () => {
        setSearchTerm(searchBar);
    };

    return (
        <div className='flex justify-center items-center mt-5 mx-auto'>
            <input
                className='input w-full sm:w-80 h-[40px] rounded-l-full pl-4 border border-slate-500'
                type='text'
                placeholder='Search'
                onChange={(event) => setSearchBar(event.target.value)}
            />
            <button
                className='bg-slate-700 text-white rounded-r-full px-4 h-[40px] transition-colors duration-300 ease-in-out hover:bg-slate-500'
                onClick={handleSearchClick}
            >
                Search
            </button>
        </div>

    );
}

export default SearchBar;
