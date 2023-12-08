import './App.css';
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
import Chat from './react/Chat';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>

          <Route path="/gpt" element={<Gpt />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  ); 
}
export default App;