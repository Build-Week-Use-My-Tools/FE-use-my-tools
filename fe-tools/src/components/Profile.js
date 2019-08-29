import React from 'react'

import LoaningTools from './LoaningTools'
import BorrowingTools from './BorrowingTools'

import ProfileNav from "./ProfileNav";


const Profile = (props) => {



    return (
        <div>
            <h1>Profile Page</h1>
            <ProfileNav/>
            <button onClick={() => {props.history.push('/addtool')}}>Add tool available to loan</button>
            <div className='lb'>
                <LoaningTools />
                <BorrowingTools />
            </div>
            
            
        </div>
    );
}

export default Profile