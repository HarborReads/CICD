import React from 'react';
import SendIcon from '@mui/icons-material/PresentToAll';
import './ChatBot.css';

function InitialContent({userName,setChatType}) {
  const handleButtonClick = (value) => {
    setChatType(value);
  };
  return (
    <div className="flex flex-col justify-center items-center h-full  animate-fadeI">
      <div className="p-3 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-700">
          Hello, Mindula <span className="text-blue-500 to-red" style={{ animation: 'changeColor 5s infinite' }}>{userName}</span>!
        </h1>
        <p className="text-2xl md:text-4xl font-bold text-slate-500">How can I help you today?</p>
      </div>
      <div className="chatgrid text-slate-500" >
        <button className="button md:h-[9.375rem] h-[6rem]" style={{ fontSize: '1.25rem'}} onClick={()=>{handleButtonClick("newReadersChat")}}>
          New to reading?<br/> Need help finding a book?
          <SendIcon className="arrow" />
          <span className="click-to-send">Click to send</span>
        </button>
        <button className="button md:h-[9.375rem] h-[5.625rem]" style={{ fontSize: '1.25rem'}} onClick={()=>{handleButtonClick("avidReadersChat")}}>
          Love reading?<br/> Let's find your next book!
          <SendIcon className="arrow" />
          <span className="click-to-send" >Click to send</span>
        </button>
        <button className="button md:h-[9.375rem] h-[5.625rem] " style={{ fontSize: '1.25rem '}} onClick={()=>{handleButtonClick("bookChat")}}>
          Interested in chatting about books?
          <SendIcon className="arrow" />
          <span className="click-to-send">Click to send</span>
        </button>
      </div>
    </div>
  );
}

export default InitialContent;
