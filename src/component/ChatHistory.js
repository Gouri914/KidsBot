import React from 'react';

const ChatHistory = ({ messages }) => {
  return (
    <div className='container' style={{ height: '650px', marginLeft: '16.7%', width: '83%', marginTop: '1%' }}>
      <div className='row'>
        <div className="col-10" style={{ overflowY: 'auto' }}>
          {messages.map((msg) => (
            <div key={msg.index} className={msg.type}>
              <span className="message-index">{msg.index}</span>
              {msg.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChatHistory;