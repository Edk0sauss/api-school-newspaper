import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import AdminPage from './view/AdminPage/AdminPage';
import AllToucanPage from './view/AllToucanPage/AllToucanPage';
import PageHeader from './view/PageHeader'
import Login from './view/Login';
import env from './.env';
import isLogged from './utils/Oauth';

function App() {
  return (
    <Router >
      <PageHeader />
      <Route exact path='/' component={AllToucanPage} />
      <Route exact path='/admin' render={()=>isLogged() ? <AdminPage/> : window.location=`${env.backURL}/oauth/login`}/>
      <Route exact path='/login/:token' component={Login} />
    </Router>
  );
}

export default App;
