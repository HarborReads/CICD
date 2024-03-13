// import React, { useState, useEffect } from 'react';

// function BookSection() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const books = [
//     {
//       imageUrl: 'https://i.pinimg.com/564x/41/f2/87/41f2878d02fc547c84b32fafa6dedfa4.jpg',
//     },
//     {
//       imageUrl: 'https://i.pinimg.com/564x/99/96/53/999653547826dba81536e2dcb4cf801d.jpg',
//     },
//     {
//       imageUrl: 'https://i.pinimg.com/564x/fa/be/2d/fabe2da48e5b1495890de95319b2fc67.jpg',
//     },
//     {
//       imageUrl: 'https://i.pinimg.com/736x/2f/c4/b9/2fc4b96c36eb4101c9b759e00215ce68.jpg',
//     },
//     {
//       imageUrl: 'https://i.pinimg.com/564x/cf/f7/9c/cff79c48e5e19bb42458bd8917a7456e.jpg',
//     },
//     {
//       imageUrl: 'https://i.pinimg.com/564x/2d/8d/9b/2d8d9b6013f408f1902cf4e41ff989f0.jpg',
//     },
//     {
//       imageUrl: 'https://i.pinimg.com/564x/e2/54/21/e25421628a4c42d2121ba8b9c35ce112.jpg',
//     },
//     {
//       imageUrl: 'https://i.pinimg.com/564x/c5/e2/f5/c5e2f57d12cee479a78684f8d2e9577d.jpg',
//     },
//     {
//       imageUrl: 'https://i.pinimg.com/564x/5a/4b/ae/5a4baed9e7ee0406a765d0286ebeca5c.jpg',
//     },
//     {
//       imageUrl: 'https://i.pinimg.com/564x/84/78/6d/84786d35ee36279aefb0f16dc409d211.jpg',
//     },
//     {
//       imageUrl: 'https://i.pinimg.com/564x/15/58/63/1558637a9e5671573fbba7b008edbf62.jpg',
//     },
//   ];
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % books.length);
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(timer);
//   }, [books.length]);

//   return (
//     <>
//       <div >
//         <img src={books[activeIndex].imageUrl} alt={`Book ${activeIndex + 1}`} className="my-2  w-52 h-55 ml-10 p-2 overflow" style={{ marginTop: "-8px" }} />
//       </div>
//     </>
//   );
  
  
  
// }

// export default BookSection;
import React, { useState, useEffect } from 'react';

const quotes = [
  "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.”    ― Haruki Murakami",
  "Reading furnishes the mind only with materials of knowledge; it is thinking that makes what we read ours.”       ― John Locke",
  "“I think books are like people, in the sense that they’ll turn up in your life when you most need them.”         ― Emma Thompson",
  // Add more quotes here...
];

const QuoteCarousel = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 8000); // Change quote every 4 seconds

    return () => clearTimeout(timer);
  }, [quoteIndex]);

  return (
    <div className=" flex flex-col items-center p-5  ">
      <div className="w-full rounded-tl-lg rounded-br-lg border border-brown bg-light-brown">
        <p className="text-brown text-white font-semibold text-center p-2">{quotes[quoteIndex]}</p>
      </div>
    </div>
  );
};

export default QuoteCarousel;

