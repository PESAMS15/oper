import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import useFetch from './Fetch'

const Signup = () => {

    const {data, err} = useFetch("http://localhost:1111/posts")
    console.log(data)
    console.log(err)

  
  
  return (
    <div>
        
    </div>
  )
}

export default Signup