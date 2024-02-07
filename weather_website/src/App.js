import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {About} from './pages/About'
import {Weather} from './pages/Weather'
import ToDo from './pages/ToDo'
import MyNavbar from './components/MyNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <MyNavbar/> 
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/weather' element={<Weather/>}/>
        <Route path='/todo' element={<ToDo/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;