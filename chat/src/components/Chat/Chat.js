import React, { useEffect, useState } from 'react'
import "./chat.css"
import { user } from "../Join/Join";
import socketIo from "socket.io-client"
import Message from "../Message/Message"
import ReactScrollToBottom from "react-scroll-to-bottom"
import closeIcon from "../../images/closeicon.png"

const ENDPOINT = "https://chatappback.vercel.app/"
let socket;
const Chat = () => {
    const [id, setId] = useState("")
    const [messages, setMessages] = useState([])
    const send = () => {
        const message = document.getElementById('chatInput').value;
        socket.emit('message', { message, id });
        document.getElementById('chatInput').value = ""
    }
    useEffect(() => {
        socket = socketIo(ENDPOINT, { transports: ['websocket'] })
        socket.on('connect', () => {
            // alert("connected");
            setId(socket.id)
        })
        socket.emit('joined', { user })
        socket.on('Welcome', (data) => {
            setMessages([...messages,data])
            console.log(data.user, data.message)
        })
        socket.on('userJoined', (data) => {
            setMessages([...messages,data])
            console.log(data.user, data.message)
        })
        socket.on('leave', (data) => {
            setMessages([...messages,data])
            console.log(data.user, data.message)
        })
        return () => {
            socket.disconnect();
            socket.off()
        }
    }, [])
    useEffect(() => {
        socket.on('sendMessage', (data) => {
            setMessages([...messages,data])
            console.log(data.user, data.message, data.id)
        })
        return () => {
            socket.off()
        }
    }, [messages])
    return (
        <div className='ChatPage'>
            <div className='ChatContainer'>
                <div className='header'>
                    <h2> Geek Mate </h2>
                    <a href="/" > <img src={closeIcon} alt="Close" /> </a>                    
                </div>
                <ReactScrollToBottom className='chatBox'>
                    {messages.map((item,i)=> <Message user={item.id===id?'':item.user} message={item.message} classs={item.id===id?'right':'left'}/> )}
                </ReactScrollToBottom>
                <div className='inputBox'>
                    <input type='text' id='chatInput' />
                    <button onClick={send} className='sendBtn'>✈️</button>
                </div>
            </div>
        </div>
    )
}

export default Chat
