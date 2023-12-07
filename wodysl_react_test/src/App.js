import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // 아이콘 임포트
import React from "react";
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
