import React from 'react'
import Button from './Button'
import { useState } from 'react';




const Addtodo = ({addUser, setuser}) => {
   
 

  return (
    <div className='w-100 p-5'>
        <input className=''  onChange={(e)=>setuser(e.target.value)} type="text" placeholder='Author' />
        <Button title="add user" myClick={addUser} />

    </div>
  )
}

export default Addtodo;