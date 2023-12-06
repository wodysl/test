import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // 아이콘 임포트
import React, { Component, useRef, useEffect, useState} from "react";

// mongoose.connect('mongodb+srv://honghwarang:45fkd62dus@cluster0.sti7z1m.mongodb.net/?retryWrites=true&w=majority',{
//     useNewUrlParser : true, useUnifiedTopology : true
// }).then(()=>console.log("MongoDB Connect"))
//     .catch(err=>console.log(err))

// mongoose.set('strictQuery', true);

//Router
import {BrowserRouter, Route, Routes} from 'react-router-dom';


import Sign from './react/Sign';
import Gpt from './react/Gpt';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>

          <Route path="/gpt" element={<Gpt />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </BrowserRouter>
    </div>
  ); 
}
export default App;
