import React from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';

import {SocketContext} from './SocketContext';

const SocketProvider = ({ children }) => {
    const { username, roomname } = useSelector(state => state.session);
    if (!username || !roomname)
        return null;

    const socket = io.connect('http://localhost:3001');

    socket.on('connect', () => {
        socket.emit('joinRoom', {username, roomname})
    })

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider;