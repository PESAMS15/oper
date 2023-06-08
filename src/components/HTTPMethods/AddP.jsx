import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const AddP = () => {
    const navigate = useNavigate()
    const [author, setauthor] = useState("")
    const [title, settitle] = useState("")
    const [body, setbody] = useState("")
   
    const addPost = (e)=>{
        e.preventDefault();
        let data = {author, title, body}
        console.log(data)
        fetch("http://localhost:1234/posts",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(data) 
        })
        .then(navigate("/http"))
        // .then((res)=> res.json)
        // .then((info)=>{
        //     console.log(info)
        //     Navigate("/http")
        // })
      

    }
  return (
    <div>
        <form action="" method="post">
            <input className='form-control w-50 my-3 mx-auto' onChange={(e)=>setauthor(e.target.value)} type="text" placeholder='author'  />
            <input className='form-control w-50 my-3 mx-auto' onChange={(e)=>settitle(e.target.value)} type="text" placeholder='title' />
            <input className='form-control w-50 my-3 mx-auto' onChange={(e)=>setbody(e.target.value)} type="text" placeholder='body' />
            <button onClick={addPost} className='btn btn-lg btn-primary d-block mx-auto'>Submit</button>
        </form>
    </div>
  )
}

export default AddP