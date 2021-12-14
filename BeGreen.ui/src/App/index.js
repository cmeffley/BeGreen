import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Routes from '../helpers/Routes';
import NavBar from '../components/NavBar';
import { createUser, getFirebaseUser } from '../helpers/data/UserData';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        authed.getIdToken().then((token) => window.localStorage.setItem('token', token));
        const userInfo = {
          firstName: authed.displayName.split(' ')[0],
          lastName: authed.displayName.split(' ')[1],
          userName: authed.email.split('@gmail.com')[0],
          fbUserId: authed.uid,
          isAdmin: null
        };
        console.log(authed.uid);
        getFirebaseUser(authed.uid).then((response) => {
          if (response === null) {
            console.warn(response, 'created');
            createUser(userInfo).then(setUser);
          } else {
            setUser(response);
            console.warn(response, 'returning');
          }
        });
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
       <Router>
        <NavBar user={user} setUser={setUser}/>
        <Routes user={user}/>
      </Router>
    </div>
  );
}

export default App;
