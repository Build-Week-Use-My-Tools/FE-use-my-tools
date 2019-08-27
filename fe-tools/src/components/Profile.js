import React, { useState } from 'react'
import Navigation from "./Navigation";

import LoaningTools from './LoaningTools'
import BorrowingTools from './BorrowingTools'


const Profile = (props) => {
    console.log('props in Profile.js', props)
    const {addedTools, setAddedTools} = useState()

    return (
        <div>
            <h1>Profile Page</h1>
            <button>Add tool available to loan</button>
            <div className='lb'>
                <LoaningTools />
                <BorrowingTools />
            </div>
            
            
        </div>
    );
}

export default Profile