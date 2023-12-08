import React from 'react';

const Chat = () => {
  return (
    <div>
      <h1>Message</h1>
      <div id="chatContent">

      </div>
      <input type="text" id="myChat" />
      <input type="submit" id="send" value="Send" />
    </div>
  );
};

export default Chat;