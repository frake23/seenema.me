import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './Player.module.css';

import { useWebsocket } from '../WebSocket/SocketContext';

const Player = () => {
    const { username, roomname } = useSelector(state => state.session);
    const socket = useWebsocket();

    useEffect(() => {
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';

            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            let player;
            window.onYouTubeIframeAPIReady = () => {
                player = new window.YT.Player('ytplayer', {
                    videoId: 'M7lc1UVf-VE',
                    events: {
                        'onStateChange': () => {
                            socket.emit('pause', { username, roomname });
                            console.log('pause')
                        }
                    }
                });
                socket.on('pause', () => {
                    console.log('kek');
                    player.pauseVideo();
                })
            }

        }
    });

    return (
        <div className={styles.videoContainer}>
            <div id="ytplayer" className={styles.videoPlayer}></div>
        </div>
    )
}

export default Player;
