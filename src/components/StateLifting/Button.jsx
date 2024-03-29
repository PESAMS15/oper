import React from 'react'

const Button = (props) => {
  return (
    <button className='btn btn-primary' onClick={props.myClick}>{props.title}</button>
  )
}

export default Button