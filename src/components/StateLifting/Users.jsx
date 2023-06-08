import React, {useState} from 'react'
import Addtodo from './Addtodo'
import DispTodo from './DispTodo'

const Users = () => {
    const [user, setuser] = useState("");
    const [allUser, setallUser] = useState([]);

    const addUser = ()=>{
        setallUser([...allUser, user])
    }
    const del = (i)=>{
        let currUsers = allUser
        currUsers.splice(i, 1)
        setallUser([...currUsers])
    }
  return (
    <div>
        <Addtodo setuser ={setuser} addUser={addUser} />
        <DispTodo allUser={allUser} delUser={del} />
    </div>
  )
}

export default Users