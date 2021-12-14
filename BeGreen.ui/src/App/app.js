import React, { useState } from 'react';
// import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Routes from '../helpers/Routes';
import NavBar from '../components/NavBar';

function App() {
  const [user] = useState(false);


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
