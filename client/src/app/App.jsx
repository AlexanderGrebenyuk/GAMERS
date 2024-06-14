import { useEffect, useState } from 'react'
import Main from '../pages/main/Main'
import './App.css'
import Registration from '../auth/Registration/Registration'
import Authorization from '../auth/Authorization/Authorization'
import Error404 from '../pages/error404/Error404'
import Navbar from '../pages/navbar/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Kviz from '../pages/kviz/Kviz'
import axiosInstance, { SetAccessToken } from '../services/axios'
import Games from '../pages/category/games/Games'
import Films from '../pages/category/films/Films'


function App() {

  const location = useLocation();
  const [user, setUser] = useState(null)

  useEffect(() => {
    axiosInstance.get("/tokens/refresh")  
    .then((data) => {
       const { accessToken, user } = data.data;
       setUser(user);
       SetAccessToken(accessToken);
    })

},[]);

  return (
    <div>
      {location.pathname !== '/asd' && <Navbar user={user} />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kviz" element={<Kviz user={user}/>} />
        <Route path="/games/:questionId" element={<Games user={user}/>} />
        <Route path="/films/:questionId" element={<Films user={user}/>} />
        {/* <Route path="/cards" element={<Cards />} /> */}
        <Route path="/registration" element={<Registration />} />
        <Route path="/authorization" element={<Authorization user={user} setUser={setUser}/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
