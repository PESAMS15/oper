import React from 'react'
import Button from './Button'

const DispTodo = ({allUser, delUser }) => {
    
  return (
    <div className='p-5'>
        <h1>List of Users</h1>
        {allUser == ""? "There are no users available" :
        // console.log(allUser)
        allUser.map((el, i)=>(
            <>
                <p key={i}>{el} <Button myClick={()=>delUser(i)} title='Del' /></p>
            </>
        ))

    
        }
    </div>
  )
}

export default DispTodo