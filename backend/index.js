const connectToMongo = require("./db.js");
const express = require("express");
const http = require('http');
const cors = require("cors");
const app = express();
// const socketIO = require('socket.io');
const {Server}=require('socket.io');
const port = 5000;
app.use(cors());
const users = [{}];
app.use(express.json({ limit: "25mb" }));
connectToMongo();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const server = http.createServer(app);
const io=new Server(server,{
cors:{
  origin:"http://localhost:3000",
  methods:["GET","POST","DELETE"],

},
});


// const io = socketIO(server);
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("HAHAHA");
});

//socket
io.on("connection", (socket) => { 
  // console.log("sggggg")// Pass the socket object as a parameter
  socket.on('joined', ({ user }) => {
    users[socket.id] = user;
    socket.broadcast.emit('userJoined', { user: "Ashwani: ", message: ` ${users[socket.id]} joined the Chat` });
    socket.emit('welcome', { user: "Ashwani ", message: `Welcome to the ChatVerse ,${users[socket.id]} ` })
  })

  socket.on('message', ({ message, id }) => {
    io.emit('sendMessage', { user: users[id], message, id });
  })

  socket.on('disconnect', () => {
    socket.broadcast.emit('leave', { user: "Ashwani", message: `${users[socket.id]} left` });
  })
});

app.listen(port, () => {
  console.log(`${port}`);
});
server.listen(3001,()=>{
  // console.log("socket connected");
})