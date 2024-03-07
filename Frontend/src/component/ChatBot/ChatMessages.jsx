import React from 'react';

function ChatMessages({ messages, botTyping }) {
  return (
    <div className="flex-1 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch flex flex-col p-3">
      {messages.slice(0).map((message, index) => (
        <div key={index} className={`flex items-end ${message.from === 'bot' ? '' : 'justify-end'}`}>
          <div className={`flex flex-col space-y-2 text-md leading-tight max-w-lg mx-2 ${message.from === 'bot' ? 'order-2 items-start' : 'order-1 items-end'}`}>
            <div>
              <span className={`px-4 py-3 rounded-xl inline-block ${message.from === 'bot' ? 'rounded-bl-none bg-gray-100 text-gray-600' : 'rounded-br-none bg-blue-500 text-white'}`}>{message.text}</span>
            </div>
          </div>
          <img src={message.from === 'bot' ? 'https://cdn.icon-icons.com/icons2/1371/PNG/512/robot02_90810.png' : 'https://i.pravatar.cc/100?img=7'} alt="" className="w-6 h-6 rounded-full" />
        </div>
      ))}
      {botTyping && (
        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-md leading-tight mx-2 order-2 items-start">
            <div><img src="https://support.signal.org/hc/article_attachments/360016877511/typing-animation-3x.gif" alt="..." className="w-16 ml-6" /></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatMessages;
