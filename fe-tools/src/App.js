import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom'
import axios from 'axios'

import Login from './components/Login'
import RegisterForm from './components/RegisterForm'
import MainPage from './components/MainPage'
import ToolDetails from './components/ToolDetails'
import Profile from './components/Profile'

function App() {
  const[toolList, setToolList] = useState([])

  // useEffect(() => {
  //   axios.get('https://bw-usemytools.herokuapp.com/')
  //     .then(res => console.log(res))
  // })

  return (
    <div className="App">
      <h1>Yo!</h1>
      <h2>test Change</h2>
      <NavLink to='/mainpage'>Main Page</NavLink>
      <Route path='/' component={Login} />
      <Route path='/register' component={RegisterForm} />
      <Route exact path='/mainpage' component={MainPage} />
      <Route exact path='/mainpage/:id' component={ToolDetails} />
      <Route path='/profile' component={Profile} />

    </div>
  );
}

export default App;
