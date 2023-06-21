import React, {useReducer, useState} from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'

function Login() {

    const history = useNavigate()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const signin = (e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            const user = userCredential.user;
            console.log(user)
            history('/')
        })
        .catch(err => alert(err.message))

    }

    const register =(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            if(userCredential){
                const user = userCredential.user;
                alert(user)
                history('/')
            }
            console.log(`created successfully ${auth}`)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

  return (
    <div className='login'>
        <Link to="/">
            <img className='login__image' 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
        </Link>

        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>Email</h5>
                <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

                <button className='login__signInButton' onClick={signin}> Sign In</button>

            </form>
            <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className="login__registerButton" onClick={register}>Create your Amazon account</button>
        </div>
    </div>
  )
}

export default Login
