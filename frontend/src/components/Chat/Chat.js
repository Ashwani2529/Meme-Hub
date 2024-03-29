import React, { useEffect, useState } from 'react';
// import {user} from "../UserDetails";
import socketIo from "socket.io-client";
import "./Chat.css";
import sendLogo from "../images/send.png";
import Message from "../Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import closeIcon from "../images/close.png";

let socket;
let user;
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
        const fetchUserAndConnectSocket = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/auth/getuser", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: localStorage.getItem("email") }),
                });
    
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
    
                const userData = await response.json();
                const user = userData.name;
    
                // Initialize socket connection after fetching user data
                const newSocket = socketIo(ENDPOINT, { transports: ['websocket'] });
    
                newSocket.on('connect', () => {
                    setid(newSocket.id);
                    newSocket.emit('joined', { user });
                });
    
                newSocket.on('welcome', (data) => {
                    setShowWelcome(false);
                    setMessages([...messages, data]);
                });
    
                newSocket.on('userJoined', (data) => {
                    setMessages([...messages, data]);
                });
    
                newSocket.on('leave', (data) => {
                    setMessages([...messages, data]);
                });
    
                return newSocket;
            } catch (error) {
                console.error('Error fetching user data or establishing socket connection:', error);
                return null; // Return null if there's an error
            }
        };
    
        const initializeSocket = async () => {
            const newSocket = await fetchUserAndConnectSocket();
            if (newSocket) {
                socket = newSocket;
            }
        };
    
        initializeSocket();
    // eslint-disable-next-line
    }, []); // empty dependency array to ensure it runs only once
    
    useEffect(() => {
        if (socket) {
            socket.on('sendMessage', (data) => {
                setMessages([...messages, data]);
            });
            return () => {
                socket.off('sendMessage');
            };
        }
        // eslint-disable-next-line
    }, [socket, messages]);
    

    return (
        <div className="chatPage">
            <div className="chatContainer">
                <div className="header">
                    <h2>ChatVerse</h2>
                    <a href="/user"> <img src={closeIcon} alt="Close" /></a>
                </div>
                <ReactScrollToBottom className="chatBox">
    {showWelcome && <Message user="Ashwani: " message={`Welcome to the ChatVerse, ${user}`} />} {/* Show welcome message */}
    {messages.map((item, index) => (
        <Message
            key={index}
            user={item.id === id ? '' : item.user}
            message={item.message}
            classs={item.id === id ? 'right' : 'left'}
        />
    ))}
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
