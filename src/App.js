import './App.css';
import React, {useEffect} from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase'
import { useStateValue } from './stateProvider';

function App() {
  const [{basket}, dispatch] = useStateValue()
  
  useEffect(() => {
    // will only run once when the app component loads...

   onAuthStateChanged(auth, (authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    })
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
     
        <Routes>
          <Route path="/login" Component={Login}/>
          <Route path='/checkout' element={<><Header /> <Checkout /></>} />
          <Route path='/' element={<><Header /> <Home /></>} />           
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
