

const { spawn } = require('child_process');
const iconv  = require('iconv-lite');

// import session from 'express-session';
// import cookieParser from 'cookie-parser';

// import express from 'express';

// import crypto from 'crypto';

// import dotenv from 'dotenv';

// node_test.js
const express = require('express');
const crypto = require('crypto');



const app = express();
const port = 3001;

//CORS 해결
const cors = require("cors");
app.use(cors());

// body-parser 설정
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // JSON 형식의 body 파싱
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded 형식의 body 파싱
app.use(express.static('public'));


app.listen(port, function () {
  console.log("mongo.js 서버 port: 3001");
});

const test_gpt = (gpt_q) => {
  return new Promise((resolve, reject) => {
      const result = spawn('python', ['../python/openAI.py', gpt_q]);

      let decodedData = '';

      result.stdout.on('data', function (data) {
          decodedData = iconv.decode(data, 'utf-8');
          console.log("suc",decodedData);
          resolve(decodedData); // 값이 들어오면 보내기
      });

      result.stderr.on('data', function (data) {
          decodedData = iconv.decode(data, 'utf-8');
          console.log("error",decodedData);
          reject(decodedData); // 에러 발생
      });
  });
};



app.post('/gpt', (req, res) => {
  const gpt_q = req.body.query;
  console.log(gpt_q);

  if (gpt_q != null) {
    test_gpt(gpt_q)
      .then((gpt_answer) => {
          console.log('Success gpt');
          res.status(200).send(gpt_answer);                
      })
      .catch((error) => {
          console.error('Error:', error);
          res.send('Server error');
      });
  } else {
      res.status(400).send('Bad request');
  }
});



// export {set_embed_file, get_json_name, go_gpt};


