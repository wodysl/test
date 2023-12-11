//express
const express = require('express');
const app = express();
const port = 8080;
const server = app.listen(port, function(){
    console.log('Listening on '+ port)
});


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb://localhost:27017";

// 데이터베이스와 컬렉션 이름
const dbName = 'wodysl';
const collectionName = 'chat';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
}
});

// Connect the client to the server	(optional starting in v4.7)
client.connect();
console.log("connected")
    
const database = client.db(dbName);
const collection = database.collection(collectionName);


//socket
const SocketIO = require('socket.io');
const io = SocketIO(server, {path: '/socket.io'});

// 채팅방 목록
const chatRooms = {};

io.on('connection', function(socket){
    console.log(socket.id, ' connected...');

    // 클라이언트가 특정 채팅방에 입장 요청
    socket.on('joinRoom', (roomName) => {
        socket.join(roomName);

        // 채팅방이 없으면 생성
        if (!chatRooms[roomName]) {
        chatRooms[roomName] = [];
        }

        // 해당 채팅방에 현재 유저 입장 메시지 전송
        // io.to(roomName).emit('message', { user: 'System', text: `${socket.id} has joined ${roomName}` });
        // io.to(roomName).emit('message', `${socket.id} 님이 ${roomName}에 입장하셨습니다앙.`);
        io.to(roomName).emit('message', { user: 'System', text: `${socket.id} has joined ${roomName}` });
    });

    //채팅 전송시 발송자를 제외하고 모두에게 전송
    socket.on('sendMessage', function({room, message}){
        console.log("[",room, "] ", socket.id, ': ', message);
        // io.to(room).emit('message', `${socket.id}님이 전송 >> ${message}`);
        io.to(room).emit('message', { user: socket.id, text: message });
    });

    socket.on('leaveRoom', (roomName) => {
        //나감 전송 
        // io.to(roomName).emit('message', `${socket.id} 님이 나갔습니다.`);
        io.to(roomName).emit('message', { user: 'System', text: `${socket.id} has left ${roomName}` });
    });

    //연결 끊기
    socket.on('disconnect', function(){
        console.log("8080포트 연결 끊음");
    });
});