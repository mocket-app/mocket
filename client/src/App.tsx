import React, { useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";

import MainContainer from './components/MainContainer';
import Login from './components/Login';
<<<<<<< HEAD
// import MocketContainer from './components/MocketContainer';
=======
import MocketContainer from './components/MocketContainer';
import { ClassNames } from '@emotion/react';

>>>>>>> baa4d4112acb7e7c6c2439ebb6a4cae87b8f167f


const App = () => {

  const navigate = useNavigate();

  const mocketAppRedirect = () => {
    navigate('/mocketApp');
  }

  return (
<<<<<<< HEAD
    <>
      
      <MainContainer />
    </>
=======
    <div className = "appContainer">
      <Routes>
        <Route path="/" element={<Login mocketAppRedirect={mocketAppRedirect} />}/>
        <Route path="/mocketApp" element={<MocketContainer />}/>
      </Routes>
    </div>
>>>>>>> baa4d4112acb7e7c6c2439ebb6a4cae87b8f167f
  )
}

export default App

