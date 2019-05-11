import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MainPage from './view/mainPage';
import Login from './view/Login';
import env from './.env'
import isLogged from './utils/Oauth';

function App() {
  return (
    <Router >
      <Route exact path='/' render={()=>isLogged() ? <MainPage/> : window.location=`${env.backURL}/oauth/login`}/>
      <Route exact path='/login/:token' component={Login} />
    </Router>
  );
}

export default App;
