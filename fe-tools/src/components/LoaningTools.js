import React from 'react'

const LoaningTools = (props) => {
    console.log('props.props', props)
    return (
        <div>
            <h2 className='loan'>Loaning tools</h2>
            <button onClick={() => {props.props2.history.push('/edittool/:id')}}>Edit tool available to loan</button>
        </div>
    )
}

export default LoaningTools