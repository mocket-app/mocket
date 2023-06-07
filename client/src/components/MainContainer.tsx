import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from './Login';
import MocketContainer from './MocketContainer';

const MainContainer = () => {
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
        //res object is gonna look like {loggedIn: bool, body:User Document obj from mongodb}
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
        <Route path="/" element={<Login mocketAppRedirect={mocketAppRedirect} />}/>
        <Route path="/mocketApp" element={<MocketContainer />}/>
      </Routes>
    </div>
  )
}



export default MainContainer;