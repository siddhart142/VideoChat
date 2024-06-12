// import express from 'express';
import { Server } from 'socket.io';
// import { createServer } from 'node:http';

// const app = express();
// const server = createServer(app);
const io = new Server(4000,{
    cors : true,
});

const emailToSocketIdMap = new Map()
const socketIdtoEmailMap = new Map()

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on("room:join", (data) => {
        const {email, room} = data
        console.log(data)
        emailToSocketIdMap.set(email,socket.id)
        socketIdtoEmailMap.set(socket.id,email)
        io.to(socket.id).emit("room:join",data)
    } )
  });