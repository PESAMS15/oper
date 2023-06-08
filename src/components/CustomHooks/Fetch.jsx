import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const useFetch = (url) => {
    const [data, setdata ]= useState(null)
    const [err, seterr] = useState("")
    useEffect(() => {
      axios.get(url)
      .then((res)=>{
        console.log(res)
        setdata(res.data)
      })
      .catch((error)=>{
        console.log(error)
        seterr(error)
      })
    
      
    }, [url])

    return {data, err}

  return (
    <div>
        
    </div>
  )
}

export default useFetch