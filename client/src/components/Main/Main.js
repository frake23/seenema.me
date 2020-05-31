import React from 'react';

import styles from './Main.module.css';

import Chat from '../Chat/Chat';
import Player from '../Player/Player';

const Main = () => {
    return (
        <div className={styles.mainBody}>
            <div className={styles.videoContent}>
                <Player/>
            </div>
            <Chat/>
        </div>
    )
};

export default Main;
