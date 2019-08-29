import React, { useContext } from 'react'
import { AllToolListContext } from '../contexts/AllToolListContext'

const LoaningTools = () => {
    const tools = useContext(AllToolListContext)

    console.log('context working?', tools)
    return (
        <div>
            <h2 className='loan'>Loaning tools</h2>
        </div>
    )
}

export default LoaningTools