import './App.css';
import React, { Component, useRef, useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Sign from './react/Sign';
import Gpt from './react/Gpt';
import Chatroom from './react/ChatRoom';

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/gpt" element={<Gpt />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/ChatRoom" element={<Chatroom />} />
        </Routes>
      </Router>
    </div>
  ); 
}
export default App;