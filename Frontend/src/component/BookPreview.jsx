import React, { useState } from 'react';

function BookPreview() {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="w-[800px] h-[630px] rounded-[20px] mx-auto relative" style={{ background: "linear-gradient(to bottom, #FFFFFF 0%, #A24857 250%)", overflow: "hidden" }}>
      <button className="absolute left-3 top-3 bg-white text-black px-3 py-1 rounded-full">&lt;</button>
      <div className="w-[987px] h-[404px] relative">
        <img src="src\assets\BookPreview.png" className="w-[183px] h-[234px] absolute left-[55px] top-[45px] rounded-[10px] object-cover" style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }} />
        <p className="w-[384px] h-[75px] absolute left-[275px] top-[54px] text-3xl font-bold text-left text-black">Inside Out and Back Again</p>
        <p className="w-[384px] h-[75px] absolute left-[275px] top-[90px] text-l font-bold text-left text-black">by Thanhha Lai</p>
        <div className="flex items-center absolute left-[275px] top-[130px]">
          <span className="text-black mr-1">Ratings:</span>
          <div className="flex">
            <p className="text-3xl text-yellow-400">☆</p>
            <p className="text-3xl text-yellow-400">★</p>
            <p className="text-3xl text-yellow-400">★</p>
            <p className="text-3xl text-yellow-400">★</p>
            <p className="text-3xl text-yellow-400">★</p>
          </div>
          <button className="ml-1 bg-[white] text-black px-4 py-1 rounded-md">Reviews</button>
        </div>
        <p className="text-xs text-left text-black absolute left-[275px] top-[170px]">Genres - Historical Fiction, Poetry, Childrens, Historical</p>
        <p className="text-xs text-left text-black absolute left-[275px] top-[185px]">262 pages, Hardcover</p>
        <p className="text-xs text-left text-black absolute left-[275px] top-[200px]">First published February 22, 2011</p>
        <p className="w-[700px] text-[15px] absolute left-[55px] top-[285px] text-justify text-black">For all the ten years of her life, Hà has only known Saigon: the thrills of its markets, the joy of its traditions, and the warmth of her friends close by. But now the Vietnam War has reached her home. Hà and her family are forced to flee as Saigon falls, and they board a ship headed toward hope. In America, Hà discovers the foreign world of Alabama: the coldness of its strangers, the dullness of its food... and the strength of her very own family.</p>
        <p className="w-[700px] font-bold text-[15px] absolute left-[55px] top-[410px] text-justify text-black">Book Info:</p>
        <p className="w-[700px] text-[15px] absolute left-[55px] top-[435px] text-justify text-black">Title: Inside Out and Back Again</p>
        <p className="w-[700px] text-[15px] absolute left-[55px] top-[465px] text-justify text-black">ISBN: 9780544022563</p>
        <p className="w-[700px] text-[15px] absolute left-[55px] top-[495px] text-justify text-black">Author: Thanhha Lai</p>
        <p className="w-[700px] text-[15px] absolute left-[55px] top-[525px] text-justify text-black">Genre: Historical Fiction</p>
        <p className="w-[700px] text-[15px] absolute left-[55px] top-[555px] text-justify text-black">Number of Pages: 272</p>
        <button className="w-[170px] h-[35px] absolute left-[285px] top-[240px] rounded-[30px] bg-brown border border-white" />
        <button className="text-m font-bold text-left text-white h-[39px] absolute left-[326px] top-[235px]">Add to shelf</button>
      </div>
    </div>
  );
}

export default BookPreview;
