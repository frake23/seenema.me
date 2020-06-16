import React from 'react';

export const SocketContext = React.createContext({
    socket: null
});

export const useWebsocket = () => React.useContext(SocketContext);
