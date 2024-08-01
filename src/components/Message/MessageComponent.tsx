'use client';
import React, { useState, useEffect, FormEvent } from 'react';
import { useParams } from 'next/navigation';
import { fetchMessages, postMessage } from '@/services/chatServices';
import { AiOutlineSend } from "react-icons/ai";
import { getToken } from '@/services/tokenServices';

type Props = {
  socket: any
}
type Message = {
  content: string;
  type: 'sent' | 'received';
  timestamp: string;
}

const decodeToken = (token: any) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

const MessageComponent = (props: Props) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState('');
  
  const params = useParams();
  const receiver_Id = params.receiver_Id;

  useEffect(() => {
    const token = getToken();
    const decodedToken = decodeToken(token);
    const userId = decodedToken?.id;
    props.socket.emit('authenticate', { token });


    const fetchAndSetMessages = async () => {
      try {
        const fetchedMessages = await fetchMessages(Number(receiver_Id));
        setMessages(fetchedMessages.map((msg: any) => ({
          content: msg.content,
          type: msg.sender_Id === userId ? 'sent' : 'received',
          timestamp: new Date(msg.timestamp).toLocaleTimeString()
        })));
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchAndSetMessages();

    props.socket.on('newMessage', (data: { sender_Id: number, content: string}) => {
      const newMessage: Message = {
        content: data.content,
        type: 'received',
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      props.socket.off('newMessage');
    };
  },[props.socket]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newMessage: Message = {
      content: text,
      type: 'sent',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages([...messages, newMessage]);
    setText('');

    try {
      const response = await postMessage(Number(receiver_Id), newMessage.content);
      console.log('Message posted:', response);
    } catch (error) {
      console.error('Error posting message:', error);
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] flex flex-col bg-gradient-to-tl from-[#d4a4fa] to-[#6e7df0]">
      <div className="flex-1 p-2 flex flex-col overflow-y-scroll">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`max-w-3/5 mb-2 p-2 rounded-lg ${
              message.type === 'sent' ? 'bg-white/50 self-end text-right' : 'bg-white/50 self-start text-left'
            }`}
          >
            <p className="text-gray-600">{message.content}</p>
            <span className="text-gray-500 text-xs">{message.timestamp}</span>
          </div>
        ))}
      </div>
      <form id="msg-form" className="flex mt-auto p-4 bg-white/40 box-border" onSubmit={handleSubmit}>
        <input
          id="text"
          placeholder="Type a message"
          className="h-[5vh] flex-1 bg-white my-auto ml-[3vw] mr-[4vw] px-[5vw] rounded-full text-gray-600 text-base"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        
        <button
          type="submit"
          className="w-[12vw] h-[5vh]  inline-block align-middle rounded-[1vh]"
        >
          <AiOutlineSend className="size-[3.5vh] ml-[2vw]" color="#7c3aed"/>
        </button>
      </form>
    </div>
  );
};

export default MessageComponent;
