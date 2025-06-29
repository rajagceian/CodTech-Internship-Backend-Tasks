const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',  // Change this to your frontend URL in production
    methods: ['GET', 'POST']
  }
});

app.get('/', (req, res) => {
  res.send('Chat server is running...');
});

// Store users in rooms
io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  // Join room
  socket.on('join_room', (room) => {
    socket.join(room);
    console.log(`User ${socket.id} joined room: ${room}`);
  });

  // Handle message send
  socket.on('send_message', (data) => {
    const { room, message, sender } = data;
    io.to(room).emit('receive_message', {
      sender,
      message,
      timestamp: new Date()
    });
  });

  // Leave room (optional)
  socket.on('leave_room', (room) => {
    socket.leave(room);
    console.log(`User ${socket.id} left room: ${room}`);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`🚀 Chat server running on http://localhost:${PORT}`);
});
