import React, {useEffect, useRef} from 'react';
import io from 'socket.io-client';

const Chat = () => {

  const myChat = useRef("");

  var socket = io.connect('http://localhost:8080', 
        //{path: '/socket.io'}
        {transports: ['websocket']});
    
    
    socket.on('msg', function(data){
        // DOM 요소를 생성
        var msgLine = document.createElement('div');
        msgLine.className = 'msgLine';

        var msgBox = document.createElement('div');
        msgBox.className = 'msgBox';
        msgBox.innerHTML = data;
        msgBox.style.display = 'inline-block';

        // DOM 요소를 조립
        msgLine.appendChild(msgBox);

        // chatContent에 추가
        document.getElementById('chatContent').appendChild(msgLine);

        // chatContent 스크롤을 가장 아래로 이동
        var chatContent = document.getElementById('chatContent');
        chatContent.scrollTop = chatContent.scrollHeight;
    });

    const chatSubmit = () => {
      // var input = document.getElementById("myChat");

      var msgLine = document.createElement('div');
      msgLine.className = 'msgLine';
      
      var msgBox = document.createElement('div');
      msgBox.className = 'msgBox';
      msgBox.textContent = myChat.current.value;
      msgBox.style.display = 'inline-block';
      
      msgLine.style.textAlign = 'right';
      msgLine.appendChild(msgBox);
      
      document.getElementById('chatContent').appendChild(msgLine);
      
      socket.emit('msg', this.value);
      
      myChat.current.value = "";
      document.getElementById('chatContent').scrollTop = document.getElementById('chatContent').scrollHeight;
  }

  return (
    <div>
      <h1>Message</h1>
      <div id="chatContent">

      </div>
      {/* <input type="text" id="myChat" ref={myChat} /> */}
      <input type="text" ref={myChat} />
      <button type="submit" id="send" value="Send" onClick={chatSubmit}>전송</button>
    </div>
  );
};

export default Chat;