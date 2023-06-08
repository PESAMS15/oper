import React from 'react'
import { useState } from 'react'
import Card from './components/Card';
const Event = () => {
    const [title, settitle] = useState("");
    const [author, setauthor] = useState("")
    const [content, setcontent] = useState("")
    // const [arr, setarr] = useState(['Value1', 'Value2', 'Value3'])
    const [arre, setarre] = useState([]) 
    localStorage.setItem("arr", JSON.stringify(arre))
     let arr = localStorage.getItem("arr")
     let coarr = JSON.parse(arr)
     console.log(coarr)

   

    const addContent = ()=>{
        let info = {name: author, tit: title, cont: content}
        console.log(title)
        console.log(author)
        setarre([...arre, info])
        // localStorage.setItem("arr", JSON.stringify(arre))

            
        
            setauthor("");
            settitle("");
            setcontent("");
           
        // console.log(content)
        // console.log(arre);
    }
    const del = (i)=>{
        let currUsers = arre
        currUsers.splice(i, 1)
        setarre([...currUsers])
    }
  return (
    
    <div className='w-25 mx-auto my-5'>
       
        <input className='d-block' value={author} onChange={(e)=>setauthor(e.target.value)} type="text" placeholder='Author' />
        <input className='' placeholder='title' value={title} onChange={(e)=>settitle(e.target.value)} type="text" />
        <textarea value={content} className='d-block' name="" onChange={(e)=>setcontent(e.target.value)} placeholder='Content' id="" cols="30" rows="10"></textarea>
        <button className='btn btn-primary' onClick={addContent}>Add Content</button>


        {coarr == ""? "There are no users currently":
        
        
        
        coarr.map((el, i)=>(
            <div key={i}>
                <h1>{i+1}.  </h1>
                <p>{el.name}</p>
                <p>{el.tit}</p>
                <p>{el.cont}</p>
                <button onClick={()=> del(i)} className='btn btn-sm btn-danger'>&times</button>
            </div>
        ))}
         <Card myClass="card shadow rounded bg-warning w-55 p-1" text ="hasduijhuiajsdbkuisdfbjm" />
        <Card myClass="card shadow rounded bg-danger w-75 p-1" text="uhadjiskmnfjikbuiaejkbfuiljk" />

    </div>
    
  )
}

export default Event