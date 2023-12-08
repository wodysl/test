const express = require('express');
const app = express();

const port = 8080;
const server = app.listen(port, function(){
    console.log('Listening on '+ port)
});

const SocketIO = require('socket.io');
const io = SocketIO(server, {path: '/socket.io'});

io.on('connection', function(socket){
    console.log(socket.id, ' connected...');

    //채팅방에 입장시 모두에게 입장 메세지를 전송
    io.emit('msg', `${socket.id} has entered the chatroom.`);

    //채팅 전송시 발송자를 제외하고 모두에게 전송
    socket.on('msg', function(data){
        console.log(socket.id, ': ', data);
        socket.broadcast.emit('msg', `${socket.id}: ${data}`);
    });

    //채팅 연결해제시 모두에게 퇴장 메세지를 전송
    socket.on('disconnect', function(data){
        io.emit('msg', `${socket.id} has left the chatroom`);
    });
});