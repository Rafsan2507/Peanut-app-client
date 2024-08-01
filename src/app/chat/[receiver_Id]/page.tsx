'use client';
import MessageComponent from '@/components/Message/MessageComponent'
import React from 'react'
import {io} from 'socket.io-client';

const socket = io('http://localhost:3001');

type Props = {}

const page = (props: Props) => {
  return (
    <MessageComponent socket={socket} />
  )
}

export default page