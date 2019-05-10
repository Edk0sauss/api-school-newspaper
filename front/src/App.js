import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import MainPage from './view/mainPage';
import Login from './view/Login';
import env from './.env'

function App() {
  return (
    <Router >
      <Route exact path='/' render={()=>false ? <MainPage/> : window.location=`${env.backURL}/oauth/login`}/>
      <Route exact path='/login/:token' component={Login} />
    </Router>
  );
}

export default App;
