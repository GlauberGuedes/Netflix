import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {login, logout} from '../../store/Auth';

export default function Login() {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState({email : '', senha: ''});

  const handleLogin = (e:any) => {
    e.preventDefault();
    if(!email || !senha) {
      setError({
        email: email ? '' : 'Este campo é obrigatório.',
        senha: senha ? '' : 'Este campo é obrigatório.',
      })
      return;
    }

    dispatch(login(
      {email: email,
       password: senha,
       localStorageKey: 'token',
       localStorageValue: {
        email: email,
        password: senha,
        token: true
       }}));

       navigate('/home');

  }

  return (
    <div className="login">
      <form onSubmit={(e) => handleLogin(e)}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          {error.email && email.length === 0 ? <div className="login-error">{error.email}</div> : ''}
        </label>
        <label>
          Senha:
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
          {error.senha && senha.length === 0 ? <div  className="login-error">{error.senha}</div> : ''}
        </label>
        <button>Entrar</button>
      </form>
    </div>
  )
}