import React, { useState } from 'react';
import './NavBarCss.css';
import { NavLink } from 'react-router-dom';

function Navbar({ user }) {


const [scoreUser, setScoreUser] = useState(0)


  
  return (
    <>
      {user ? (
        <div className='flexy'>
          <h2>играет {user.name}</h2>
          <h2>у {user.name} 0 очков</h2>
        </div>
      ) : (
        <nav className="pixel-navbar">
          <ul>
            <li>
              <NavLink to="/kviz">КУИЗ</NavLink>
            </li>
            {/* <li>
        <NavLink to='/cards'>КАРТОЧКИ</NavLink>
        </li> */}

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
