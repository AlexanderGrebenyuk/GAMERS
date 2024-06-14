import React, { useState } from 'react';
import './AuthorizationCss.css';
import { SetAccessToken } from '../../services/axios';

function Authorization({ setUser }) {
    const [loginForm, setLoginForm] = useState({ email: "", password: "" });

    const logIn = (e) => {
      e.preventDefault();
      fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginForm),
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
          if (data.message) {
            alert(data.message);
          } else {
            setUser(data.user)
            SetAccessToken(data.accessToken)
            window.location.href='/kviz'
          }
        });
    };

  return (
    <div className="container">
      <h2>ВХОД</h2>
      <form onSubmit={logIn}>
        <label htmlFor="email">МЫЛО</label>
        <input
          type="email"
          id="email"
          name="email"
          value={loginForm.email}
          onChange={(e) =>
            setLoginForm({ ...loginForm, email: e.target.value })
          }
          required
        />

        <label htmlFor="password">ПАРОЛЬ</label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginForm.password}
          onChange={(e) =>
            setLoginForm({ ...loginForm, password: e.target.value })
          }
          required
        />

        <button type="submit">го</button>
      </form>
    </div>
  );
}

export default Authorization;
