import './App.css';
import Sign from './Sign';
import '@fortawesome/fontawesome-free/css/all.min.css'; // 아이콘 임포트
import React, { Component, useRef, useEffect, useState} from "react";

// mongoose.connect('mongodb+srv://honghwarang:45fkd62dus@cluster0.sti7z1m.mongodb.net/?retryWrites=true&w=majority',{
//     useNewUrlParser : true, useUnifiedTopology : true
// }).then(()=>console.log("MongoDB Connect"))
//     .catch(err=>console.log(err))

// mongoose.set('strictQuery', true);

  

function App() {

  

  return (
     <Sign />
  ); 
}
export default App;
