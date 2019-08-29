import React, { useState, useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import axios from 'axios'
import { AllToolListContext } from './contexts/AllToolListContext'
import { SetAllToolListContext} from './contexts/SetAllToolListContext'


import Login from './components/Login'
import RegisterForm from './components/RegisterForm'
import MainPage from './components/MainPage'
import Profile from './components/Profile'
import AddTool from './components/AddTool'
import EditTool from './components/EditTool'
import CreateOwner  from './components/CreateOwner'

const fakeData = [{owner: 'mat', tools:[{tool1: 'hammer', tool2: 'saw'}]}, {owner: 'fred', tools:[{tool1: 'ham', tool2: 'airplane'}]}]


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
    <AllToolListContext.Provider value={allToolList}>
      <SetAllToolListContext.Provider value={setAllToolList}>

        <div className="App">
          
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={RegisterForm} />
          <Route exact path='/mainpage' render={props => <MainPage {...props} allToolList={allToolList} />} />
          <Route exact path='/profile' render={props => <Profile {...props} allToolList={allToolList} />} />
          <Route exact path='/addtool' render={props => <AddTool {...props} allToolList={allToolList} setAllToolList={setAllToolList} />} />
          <Route exact path='/edittool' render={props => <EditTool {...props} allToolList={allToolList} setAllToolList={setAllToolList} />} />
          <Route exact path='/createowner' render={props => <CreateOwner {...props} allToolList={allToolList} setAllToolList={setAllToolList} />} />
        </div>
      </SetAllToolListContext.Provider>
    </AllToolListContext.Provider>
  );
}

export default App;
