import React, { useEffect, useState } from 'react'
import { useSocket } from '../context/SocketProvider'
function Lobby() {

  const [email,setEmail] = useState("")
  const [room,setRoom] = useState("")
  const socket = useSocket();

  const handleSubmitForm = async (e) =>{
    e.preventDefault();

    socket.emit('room:join',{email,room})

    console.log({email,room})
  }


  useEffect(()=>{
    socket.on("room:join",(data)=>{
      console.log("data from Be rcvd")
    })
  },[socket])

  
  return (
    <div>
      Lobby
      <form onSubmit={handleSubmitForm}>
        <label  htmlFor='email'>Email</label>
        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        <br/>
        <label  htmlFor='roomId'>room</label>
        <input type="text" id="roomId" value={room} onChange={e => setRoom(e.target.value)} />
        <br/>
        <button>Join</button>

      </form>
    </div>
  )
}

export default Lobby
