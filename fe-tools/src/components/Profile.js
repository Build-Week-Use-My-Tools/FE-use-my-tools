import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Navigation from "./Navigation";

import LoaningTools from './LoaningTools'
import BorrowingTools from './BorrowingTools'
import AddTool from './AddTool'


const Profile = (props) => {
    const[userToolList, setUserToolList] = useState([])
    console.log('props in Profile.js', props)


    return (
        <div>
            <h1>Profile Page</h1>
            {/* <button onClick={() => {props.history.push('/addtool')}}>Add tool available to loan</button> */}
            <AddTool userToolList={userToolList} setUserToolList={setUserToolList} />
            
            <div className='lb'>
                <LoaningTools userToolList={userToolList} />
                <BorrowingTools />
            </div>
            
            
        </div>
    );
}

export default Profile