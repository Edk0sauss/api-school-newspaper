import React from 'react';
import {Image, Button} from 'semantic-ui-react'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import './App.css';
import AdminPage from './view/AdminPage/AdminPage';
import AllToucanPage from './view/AllToucanPage/AllToucanPage';
import Login from './view/Login';
import env from './.env';
import isLogged from './utils/Oauth';
import logo from './image/logo.png'

function App() {
  return (
      <div style={{verticalAlign:"center"}}>
      <Image src={logo} alt="Logo" href="/" style={{marginLeft:'30%', width:'40%'}} />
      <Router >
        <Link to="/admin" style={{float:"right", margin:"2em"}} >
          <Button icon="male" content="Espace admin"/>
        </Link>
        <Route exact path='/' component={AllToucanPage} />
        <Route exact path='/admin' render={()=>isLogged() ? <AdminPage/> : window.location=`${env.backURL}/oauth/login`}/>
        <Route exact path='/login/:token' component={Login} />
      </Router>
      </div>
  );
}

export default App;
