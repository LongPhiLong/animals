import Login from "./Components/Page/login";
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Animals from "./Components/Page/animals";
import React from "react";
import { useState } from "react";

function App() {
  return (
     <BrowserRouter>
      <Routes>
              <Route  path='/animalpage' render ={()=> { 
                return localStorage.getItem("accessToken") ? <Animals/> : <Login /> 
                }}/>
              <Route  path='/' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
