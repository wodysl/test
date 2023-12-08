const express = require('express');         // express 가져옴
const app = express();                      // express 반환값 app에 넣어줌
const port = 8080;

app.listen(port, function() {               // port를 인자로 넘기고 문제 없으면 문구 출력
    console.log('Listening on '+port);
});

app.get("/", function (req, res) {
    res.send("Hello World!");
});