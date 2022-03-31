import Login from "./Components/Page/login";
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Animals from "./Components/Page/animals";
import React from "react";
import { useState } from "react";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Login />}/>
        <Route  path='/animalpage' element ={ localStorage.getItem("accessToken") ? <Animals/> : <Login /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
