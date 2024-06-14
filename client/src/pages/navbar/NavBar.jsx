import React, { useState } from 'react';
import './NavBarCss.css';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import axiosInstance, { SetAccessToken } from '../../services/axios';

function Navbar({ user, scoreUser, setScoreUser,setUser }) {
  const navigate = useNavigate();
  const logOut = () => {
    axiosInstance.get('/auth/logout');
    setUser(null);
    SetAccessToken('');
    navigate('/')
  }
  
  return (
    <>
      {user ? (
        <div className="flexy">
          <h2 className="asd">ИГРАЕТ {user.name}</h2>
          <h2 className="asd">
            У {user.name} {scoreUser} ОЧКОВ
          </h2>
          <button onClick={logOut} style={{height: '40px'}}>ВЫХОД</button>
        </div>
      ) : (
        <nav className="pixel-navbar">
          <ul>
            <li>
              <NavLink to="/kviz">КУИЗ</NavLink>
            </li>

            <li>
              <NavLink to="/registration">РЕГИСТРАЦИЯ</NavLink>
            </li>
            <li>
              <NavLink to="/authorization">ВХОД</NavLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navbar;
