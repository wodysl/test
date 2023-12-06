var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http); // socket 객체 : io
// 해당 서버를 소켓 서버임을 설정

// 클라이언트가 최초 접속 시 보여지는 화면
app.get('/', function (req, res) {
  // res.sendFile(__dirname + '/index.html');
  res.sendFile('/Users/wodysl/Documents/chat/test/wodysl_react_test/public/index.html');
});

// 서버 실행
http.listen(3001, function () {
  console.log('server listening on port : 3001');
});

// connection을 수립하고, callback 인자로 socket을 받음
io.on('connection', function (socket) {
  // 연결이 성공했을 경우 실행됨

  socket.on('disconnect', function () {
      // 클라이언트의 연결이 끊어졌을 경우 실행됨
    });
});