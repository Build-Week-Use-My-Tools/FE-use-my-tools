import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom'
import { axiosWithAuth } from '../src/utils/axiosWithAuth'
import axios from 'axios'

import Login from './components/Login'
import RegisterForm from './components/RegisterForm'
import MainPage from './components/MainPage'
import ToolDetails from './components/ToolDetails'
import Profile from './components/Profile'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const[toolList, setToolList] = useState([])

  // useEffect(() => {
  //   axiosWithAuth().get('https://bw-usemytools.herokuapp.com/owners',-H "accept: application/json")
  //     .then(res => console.log(res.data))
  // })

  return (
    <div className="App">
      <NavLink to='/mainpage'>Main Page</NavLink>
      <Route exact path='/' component={Login} />
      <Route exact path='/register' component={RegisterForm} />
      <PrivateRoute exact path='/mainpage' component={MainPage} />
      <Route exact path='/mainpage/:id' component={ToolDetails} />
      <Route exact path='/profile' component={Profile} />

    </div>
  );
}

export default App;
