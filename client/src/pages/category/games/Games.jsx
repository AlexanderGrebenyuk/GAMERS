import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../../services/axios';
import './GamesCss.css';

function Games({user}) {
  const [game, setGame] = useState([]);
  const [inp, setInp] = useState('');
  const [openNext, setOpenNext] = useState(false)
  const [answer, setAnswer] = useState('')
  const [notTrue, setNotTrue] = useState(false)
  const [yesTrue, setYesTrue] = useState(false)

  const [scoreUser, setScoreUser] = useState(0)

  const { questionId } = useParams();
  const navigate = useNavigate();

  const axiosQuest = async () => {
    const { data } = await axiosInstance.get('/questions');

    if (data.message === 'success') {
      setGame(data.question);
    }
  };

  const axiosScore = async (id) => {
    const { data } = await axiosInstance.update(`/users/${id}`, {
      score:100
    });
    console.log('data----',data);
    if (data.message === 'success') {
      setGame(data.question);
    }
  }


  useEffect(() => {
    axiosQuest();
  }, []);

  let gamee;

  if (questionId) {
    gamee = game.find((findGame) => findGame.id === +questionId);
  }

  const handleNextClick = () => {
    const nextId = parseInt(questionId) + 1;
    if (nextId <= 5) {
      navigate(`/games/${nextId}`);
    } else if (nextId > 5) {
      navigate('/kviz');
    }
    setOpenNext(false);
    setInp('')
    setYesTrue(false)
  };

  const handleCheckAnswer = () => {
    setAnswer(inp);
    if (inp.toLowerCase() === gamee.answer.toLowerCase()) {
      setOpenNext(true);
      setNotTrue(false)
      setYesTrue(true)
      axiosScore(user.id)
    } else {
      setOpenNext(false);
      setNotTrue(true)
    }


  };

  return (
    <div>
      {gamee ? (
        <div className="flexy1">
          <h1>ИЗ КАКОЙ ИГРЫ ИМГ?</h1>
          {yesTrue && <p style={{color: 'green', fontSize: '30px'}}>АЙ ДА КРАСАВА</p> } 
          {notTrue && <p style={{color: 'red', fontSize: '30px'}}>НЕ ВЕРНО, БРО</p> } 
          <img
            className="img1"
            src={`http://localhost:3000/${gamee.img}`}
            alt="img"
          />
          <div>
          <input
            type="text1"
            id="text1"
            name="text1"
            value={inp}
            onChange={(e) => setInp(e.target.value)}
            required
          />
      <button onClick={handleCheckAnswer}>Проверить</button>
          </div>
          {openNext && <button onClick={handleNextClick}>Вперед</button>}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Games;
