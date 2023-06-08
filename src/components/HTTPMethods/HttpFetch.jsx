import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Skeleton } from 'antd'

const HttpFetch = () => {
    const [data, setdata] = useState(null)
    const [loader, setloader] = useState(true)
    const [err, seterr] = useState("")
    // console.log(data)
    useEffect(() => {
      setTimeout(() => {
        try {
            fetch("http://localhost:2222/posts")
            .then(response => response.json())
            .then(json => setdata(json))
            .then(setloader(false))
            .catch((err)=>{
                console.log(err)
                seterr("Server could not respond")
            })
        } catch (error) {
            console.log(error)
            seterr("Failerd to fetch data")
        }
      }, 3000);
    
    
    }, [])
    

  return (
    <div>
        {!data && loader?
        ([...Array(5)].map((el, i)=>(
            <div>
                  <Skeleton className='shadow gap-3 align-items-center my-2 p-2'  active />
            </div>
        ))) :null
        }
       
        {data &&
        
        data.map((el)=>(
            <>
               
                <div key={el.id} className='d-flex shadow gap-3 align-items-center my-2 p-2'>
                    <h4>{el.id}</h4>
                <div>
                <h4 className='text-center'>{el.author}</h4>
              
              <div className='fw-bold'>{el.title}</div>
                <div>{el.body}</div> 
                <Link to={`/onepost/${el.id}`}>see more</Link>
                {/* <button onClick={del}>Delete</button> */}
                </div>
                </div>
            </>
        ))}
    </div>

  )
}

export default HttpFetch