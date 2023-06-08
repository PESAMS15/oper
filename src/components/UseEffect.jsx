import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffect = () => {
  const [data, setdata] = useState([])
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => setdata(json))
    
    
    }, [])
    
  return (
    <div className='text-center'>

      {  data.map((el)=>(
        <>
            <div id='ok' className='p-2 d-flex gap-5'>
                <div>{el.id}</div>
                <div>{el.title}</div>
                <div className=''>{el.completed}</div>
                
            </div>
        </>
      ))}
      

    </div>

  )
}

export default UseEffect