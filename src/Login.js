import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'
import {auth , provider } from "./firebase"
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

const Login = () => {

    const[state , dispatch] = useStateValue();

    const signIn = () => {
        auth
          .signInWithPopup(provider)
          .then((result) => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
          } )

          .catch((error) => {
            alert(error.message);
          });
    }

  return (
    <div className='login'>
      <div className="login__container">
        <img src='https://user-images.githubusercontent.com/5147537/54070671-0a173780-4263-11e9-8946-09ac0e37d8c6.png' 
        alt=''
        />
        <h1> Sign in to Siddhant's Slack</h1>
        <p> Developer.slack.com</p>
        <Button onClick={signIn} >Sign In with Google</Button>
      </div>
    </div>
  )
}

export default Login
