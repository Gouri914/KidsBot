import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileLogin from './component/ProfileLogin.js';
import Sidetop from './component/Sidetop';
import Navbars from './component/Navbars.js';
import Course from './component/Course.js'
import Contentpage from './component/Contentpage.js'
import CreateAccount from './component/CreateAccount.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbars/>}/>
        <Route path="/ProfileLogin" element={<ProfileLogin />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Contentpage" element={<Contentpage/>} />
        <Route path="/CreateAccount" element={<CreateAccount/>} />
        <Route path="/Sidetop" element={<Sidetop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
