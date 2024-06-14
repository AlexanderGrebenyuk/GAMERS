import React, { useState } from 'react';
import './RegistrationCss.css';

function Registration() {
  const [signUpForm, setSignUpForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  function logIn(e) {
    e.preventDefault();
    const newForm = { ...signUpForm };

    delete newForm.passwordAgain;
    setSignUpForm(newForm);

    fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signUpForm),
    }).then((res) => res.json())
    .then((data) => (window.location.href = '/authorization'));
  }

  return (
    <div className="container">
      <h2>РЕГИСТРАЦИЯ</h2>
      <form onSubmit={logIn}>
        <label htmlFor="name">ИМЯ</label>
        <input
          type="text"
          id="name"
          name="name"
          value={signUpForm.name}
          onChange={(e) =>
            setSignUpForm({ ...signUpForm, name: e.target.value })
          }
          required
        />

        <label htmlFor="email">МЫЛО</label>
        <input
          type="email"
          id="email"
          name="email"
          value={signUpForm.email}
          onChange={(e) =>
            setSignUpForm({ ...signUpForm, email: e.target.value })
          }
          required
        />

        <label htmlFor="password">ПАРОЛЬ</label>
        <input
          type="password"
          id="password"
          name="password"
          value={signUpForm.password}
          onChange={(e) =>
            setSignUpForm({ ...signUpForm, password: e.target.value })
          }
          required
        />

        <button type="submit">ну</button>
      </form>
    </div>
  );
}

export default Registration;
