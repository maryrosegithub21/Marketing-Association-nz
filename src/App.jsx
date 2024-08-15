
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import React from 'react';


function App() {
  

  return (
    <>
 <Routes>
     <Route path='/' element={<Home />} />

</Routes>

    </>

    
  )
}

export default App
