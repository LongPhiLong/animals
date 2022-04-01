import Login from "./Components/Page/login";
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import React from "react";
import Animals from './Components/Page/animals'

function App() {
  return (
     <BrowserRouter>
      <Routes>
              <Route  path='/animalpage' element ={ 
                localStorage.getItem("accessToken") ? <Animals/> :< Login/> 
                }
              />
              <Route exact path='/' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
