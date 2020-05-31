import React from 'react';

import styles from './Player.module.css';

const Player = () => {
    

    return (
        <div className={styles.videoContainer}>
            <iframe id="ytplayer" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&amp;widgetid=1" className={styles.videoPlayer}></iframe>
        </div>
    )
}

export default Player;
