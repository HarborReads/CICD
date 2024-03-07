import  navImage from '../assets/naviBottom.png';

import React, { useState, useEffect } from 'react';

function BookSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const books = [
    // {
    //   imageUrl: 'https://i.pinimg.com/564x/41/f2/87/41f2878d02fc547c84b32fafa6dedfa4.jpg',
    // },
    // {
    //   imageUrl: 'https://i.pinimg.com/564x/99/96/53/999653547826dba81536e2dcb4cf801d.jpg',
    // },
    // {
    //   imageUrl: 'https://i.pinimg.com/564x/fa/be/2d/fabe2da48e5b1495890de95319b2fc67.jpg',
    // },
    // {
    //   imageUrl: 'https://i.pinimg.com/736x/2f/c4/b9/2fc4b96c36eb4101c9b759e00215ce68.jpg',
    // },
    // {
    //   imageUrl: 'https://i.pinimg.com/564x/cf/f7/9c/cff79c48e5e19bb42458bd8917a7456e.jpg',
    // },
    // {
    //   imageUrl: 'https://i.pinimg.com/564x/2d/8d/9b/2d8d9b6013f408f1902cf4e41ff989f0.jpg',
    // },
    // {
    //   imageUrl: 'https://i.pinimg.com/564x/e2/54/21/e25421628a4c42d2121ba8b9c35ce112.jpg',
    // },
    // Add more book objects as needed
    {
      imageUrl: 'https://i.pinimg.com/564x/c5/e2/f5/c5e2f57d12cee479a78684f8d2e9577d.jpg',
    },
    // {
    //   imageUrl: 'https://i.pinimg.com/564x/5a/4b/ae/5a4baed9e7ee0406a765d0286ebeca5c.jpg',
    // },
    // {
    //   imageUrl: 'https://i.pinimg.com/564x/84/78/6d/84786d35ee36279aefb0f16dc409d211.jpg',
    // },
    // {
    //   imageUrl: 'https://i.pinimg.com/564x/15/58/63/1558637a9e5671573fbba7b008edbf62.jpg',
    // },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % books.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, [books.length]);

  return (
    <>
      <div className='border border-gray-100'>
        <img src={navImage} alt={`Book ${activeIndex + 1}`} className="object-cover mx-auto w-52 block" />
        <img src={books[activeIndex].imageUrl} alt={`Book ${activeIndex + 1}`} className="my-2  w-52 h-55 ml-10 p-2 overflow-y-auto" style={{ marginTop: "-8px" }} />
      </div>
    </>
  );
  
  
  
}

export default BookSection;