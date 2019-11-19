import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {PageFooter, PageHeader, AllToucanPage} from './view/index'
import Login from './view/Login';
import isLogged from './utils/Oauth';
import env from './.env'

function App() {
	const logged = isLogged();
  	return (
    <Router >
      <PageHeader isLogged={logged} />
      <Route exact path='/login/:token' component={Login} />
	  <Route exact path='/' render={()=><AllToucanPage isAdmin={logged} backURL={env.backURL}/>}/>
	  <PageFooter/>
    </Router>
  );
}

export default App;
