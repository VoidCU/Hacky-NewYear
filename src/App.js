import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from "./pages/Home";
import Aboutus  from './pages/Aboutus';
import Nopage from './pages/nopage';
import Navbar from './pages/Navbar';

function App() {
  return (
      <div>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/*' element={<Nopage/>}/>
        </Routes>
      </div>
      
  );
}

export default App