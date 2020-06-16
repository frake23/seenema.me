import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';

import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Header from "../../components/Header/Header";
import Main from '../../components/Main/Main';
import SocketProvider from '../../components/WebSocket/SocketProvider';

import {fetchRoom} from '../../actions/sessionActions';

const MainPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        const roomname = location.pathname.slice(1);
        dispatch(fetchRoom(roomname));
    });

    return (
        <SocketProvider>
            <PageWrapper>
                <Header/>
                <Main/>
            </PageWrapper>
        </SocketProvider>
    );
};

export default MainPage;