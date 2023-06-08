import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className={props.myClass} >
            <h1>{props.text}</h1>
        </div>
    </div>
  )
}

export default Card