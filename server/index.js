const http = require("http")
const express = require("express")
const cors = require("cors")
const socketIO = require("socket.io")
const dotenv = require("dotenv").config()
const app = express()
const port = process.env.PORT
app.use(cors())
app.get("/",(req,res)=>{
    res.send("WELL IT'S WORKING")
})
const server = http.createServer(app)
const io = socketIO(server);
io.on("connection",()=>{
    console.log("New Connection")
})
server.listen(port,()=>{
    console.log(`Server is working on http://localhost:${port}`)
})