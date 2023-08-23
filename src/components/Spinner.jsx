import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
    return (
        <div className='flex justify-center items-center flex-col lg:flex-row'>
            <img src={loading} alt="loading" />
            <p className='text-white text-lg text-center'>Please Wait! we converting your currency....</p>
        </div>
    )
}

export default Spinner
