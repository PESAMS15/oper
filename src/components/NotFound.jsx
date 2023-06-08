import React from 'react'
import Button from './StateLifting/Button'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    const goHome =()=>{
        navigate("/")
    }
  return (
    <div className='text-center'>
        <h1>You've lost your way</h1>
        <Button myClick={goHome} title="go home" />

    </div>
  )
}

export default NotFound