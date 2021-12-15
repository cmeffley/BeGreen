import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Routes from '../helpers/Routes';
import NavBar from '../components/NavBar';
import { getFirebaseUser } from '../helpers/data/UserData';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        getFirebaseUser(authed.uid).then((response) => {
          setUser(response);
        });
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);
  console.log(user);
  return (
    <div className='App'>
       <Router>
        <NavBar user={user}/>
        <Routes user={user}/>
      </Router>
    </div>
  );
}

export default App;
