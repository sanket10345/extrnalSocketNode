const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow cross-origin requests

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }, // Adjust in production
});

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("join-room", ({ roomName, username }) => {
    socket.join(roomName);
    console.log(`${username} joined room ${roomName}`);
  });

  socket.on("send-message", (messageObj) => {
    console.log(`Message from ${messageObj.username} in ${messageObj.roomName}: ${messageObj.message}`);
    socket.to(messageObj.roomName).emit("receive-message", messageObj);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`WebSocket server running on port ${PORT}`));
