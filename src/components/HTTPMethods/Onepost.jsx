import React, {useEffect} from 'react'
import { useParams,  } from 'react-router-dom'
import { useState } from 'react';

const Onepost = () => {
    const [dat, setdata] = useState([])
    const route = useParams();
    const id = route.id

    useEffect(()=>{
        fetch( `http://localhost:2222/posts/${id}`)
        .then((res)=> res.json())
        .then((data)=> {
            setdata([data])
            console.log(data)
            console.log(dat)
        })
    }, [])
  return (
    <div>
         {dat.map((el, i)=>(
            <>
                <div key={el.id} className='d-flex shadow gap-3 justify-content-center align-items-center my-2 p-2'>
                <div>
                <h4 className='text-center'>{el.author}</h4>
              
              <div className='fw-bold'>{el.title}</div>
                <div>{el.body}</div> 
                </div>
                </div>
            </>
        ))}
    </div>
  )
}

export default Onepost