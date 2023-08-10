import React, { useEffect, useState } from 'react';
import {user} from "../UserDetails";
import {io} from "socket.io-client";
import "./Chat.css";
import sendLogo from "../images/send.png";
import Message from "../Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import closeIcon from "../images/close.png";

let socket;

// const ENDPOINT = "https://chatverse-xl8a.onrender.com";
const ENDPOINT="http://localhost:3001";

const Chat = () => {
    const [id, setid] = useState("");
    const [messages, setMessages] = useState([]);
    const [showWelcome, setShowWelcome] = useState(false);

    const send = () => {
        const message = document.getElementById('chatInput').value;
        socket.emit('message', { message, id });
        document.getElementById('chatInput').value = "";
    }

    useEffect(() => {
        console.log(user);
        socket = io(ENDPOINT, {  
            cors: {
            origin: "http://localhost:3001",
            credentials: true
          },transports : ['websocket'] });

        socket.on('connection', () => {
            setid(socket.id);

        })
        console.log(socket);
        socket.emit('joined', { user });

        socket.on('welcome', (data) => {
            setShowWelcome(false);
            setMessages([...messages, data]);
        });

        socket.on('userJoined', (data) => {
            setMessages([...messages, data]);
        });

        socket.on('leave', (data) => {
            setMessages([...messages, data]);
        });

        return () => {
            socket.disconnect();
            socket.off();
        }

    },
        // eslint-disable-next-line
        [])

    useEffect(() => {
        socket.on('sendMessage', (data) => {
            setMessages([...messages, data]);
        });
        return () => {
            socket.off();
        };
    }, [messages]);

    return (
        <div className="chatPage">
            <div className="chatContainer">
                <div className="header">
                    <h2>ChatVerse</h2>
                    <a href="/"> <img src={closeIcon} alt="Close" /></a>
                </div>
                <ReactScrollToBottom className="chatBox">
                    {showWelcome && <Message user="Ashwani: " message={`Welcome to the ChatVerse, ${user}`} />} {/* Show welcome message */}
                    {messages.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
                </ReactScrollToBottom>
                <div className="inputBox" id="inputwala">
                    <input onKeyDown={(event) => event.key === 'Enter' ? send() : null} type="text" id="chatInput" />
                    <button onClick={send} className="sendBtn"><img src={sendLogo} alt="Send" /></button>
                </div>
            </div>
        </div>
    )
}

export default Chat;
