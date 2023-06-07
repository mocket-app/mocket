import React, { useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";

import MainContainer from './components/MainContainer';
import Login from './components/Login';
import MocketContainer from './components/MocketContainer';
import { ClassNames } from '@emotion/react';



const App = () => {

  const navigate = useNavigate();

  const mocketAppRedirect = () => {
    navigate('/mocketApp');
  }

  return (
    <div className = "appContainer">
      <Routes>
        <Route path="/" element={<Login mocketAppRedirect={mocketAppRedirect} />}/>
        <Route path="/mocketApp" element={<MocketContainer />}/>
      </Routes>
    </div>
  )
}

export default App

