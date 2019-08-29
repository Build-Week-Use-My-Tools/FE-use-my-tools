import React from 'react'

const LoaningTools = (props) => {
    console.log('props.props on loaningTools', props)
    return (
        <div>
            <h2 className='loan'>Loaning tools</h2>
            <button onClick={() => {props.props2.history.push('/edittool')}}>Edit tool available to loan</button>
        </div>
    )
}

export default LoaningTools