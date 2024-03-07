import React from 'react';

function PersonallibLeftBar() {
  const buttons = [
    "BookShelves",
    "All",
    "Read",
    "Currently Reading",
    "Want to Read"
  ];

  const buttonList = buttons.map((button, index) => (
    <li key={index}>
      <a
        href="#"
        className="flex items-center p-2 px-4 hover:bg-gradient-to-r from-nav-bg to-nav-brown- hover rounded-full"
      >
        <span className="text-black text-lg mb-2">{button}</span>
      </a>
    </li>
  ));

  return (
    <div className="h-full  px-3 py-4 overflow-y-auto bg-white  ">
      <div className='flex justify-center items-center mt-3 mb-5'>
        <h1 className='text-black text-2xl underline'>My Books</h1>
      </div>
      <aside>
        <ul>
          {buttonList}
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
            </a>
          </li>
        </ul>
        <div>
          <h1 className='text-black text-xl underline'>Name</h1>
          <h1 className='text-black text-base mt-3'>Add a Shelf :</h1>
          <input className='text-black bg-gray-200 rounded-2xl mr-2'></input>
          <button className='text-black text-base bg-blue-500 rounded-xl w-16'>Add</button>
        </div>
      </aside>
    </div>
  );
}

export default PersonallibLeftBar;
