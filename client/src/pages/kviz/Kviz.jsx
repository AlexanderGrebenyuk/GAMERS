import React from 'react';
import './KvizCss.css';
import { Link } from 'react-router-dom';

function Kviz({ user }) {
   
    

  return (
    <div>
      {user ? (
        <>
        <div className='category'>
            <Link to={'/games/1'}>
        <img className='imege' src="/games2.png" alt="pudge" />
        </Link>
        <Link to={'/films/6'}>
        <img className='imege' src="/movies.png" alt="pudge1" />
        </Link>
        </div>
        </>
      ) : (
        <div style={{marginTop: '150px'}}>
          <h1>КВИЗАРУС</h1>
          <h2 style={{marginTop: '50px'}}>ЧТОБЫ СЫГРАТЬ - СНАЧАЛА НУЖНО ВОЙТИ ИЛИ ЗАРЕГАТЬСЯ</h2>
        </div>
      )}
    </div>
  );
}

export default Kviz;
