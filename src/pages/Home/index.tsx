import React, {useState} from 'react';
import './home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { logout} from '../../store/Auth';

export default function Login() {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);



  return (
    <div className="home">
      Home
    </div>
  )
}