import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom'

import axios from 'axios'

import Login from './components/Login'
import RegisterForm from './components/RegisterForm'
import MainPage from './components/MainPage'
import ToolCard from './components/ToolCard'
import Profile from './components/Profile'
import AddTool from './components/AddTool'


function App() {
  const[allToolList, setAllToolList] = useState([])

  useEffect(() => {
    axios.get('https://bw-usemytools.herokuapp.com/owners', {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
      .then(res => {
        
        console.log('res.data from app.js get', res.data)
        setAllToolList(res.data)
        }
      )
  }, [])

  return (
    <div className="App">

      <Route exact path='/' component={Login} />
      <Route exact path='/register' component={RegisterForm} />
      <Route exact path='/mainpage' render={props => <MainPage {...props} allToolList={allToolList} setAllToolList={setAllToolList} />} />
      <Route exact path='/mainpage/:id' component={ToolCard} />
      <Route exact path='/profile' render={props => <Profile {...props} allToolList={allToolList} setAllToolList={setAllToolList} />} />
      <Route exact path='/addtool' render={props => <AddTool {...props} allToolList={allToolList} setAllToolList={setAllToolList} />} />

    </div>
  );
}

export default App;
