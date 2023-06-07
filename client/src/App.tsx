import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";

import Login from './components/Login';
import MocketContainer from './components/MocketContainer';
import { ClassNames } from '@emotion/react';

const App = () => {
  const navigate = useNavigate();

  const mocketAppRedirect = () => {
    navigate('/mocketApp');
  }
  
   // on loading App component, run fetch request to see if user has a valid session if they do they get directed to login page. if not they get directed to login page
   useEffect (() => {
    fetch('/api/session/checkLogin')
    .then(res => res.json())
    .then(res => {
        //if user has an active session in database server respose
        //res object is gonna look like {loggedIn: bool, body:User Document obj from SQL db}
        if(res.isLoggedIn){
            navigate('/mocketApp');
        } else {
            navigate('/login');
        }
      })
    },[]);

  return (
    <div className = "appContainer">
      <Routes>
        <Route path="/login" element={<Login mocketAppRedirect={mocketAppRedirect} />}/>
        <Route path="/mocketApp" element={<MocketContainer />}/>
      </Routes>
    </div>
  )
}

export default App

