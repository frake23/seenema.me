import React from 'react';

import icon from '../../icons/seenema.svg';
import styles from './Header.module.css';

import Search from "../Search/Search";

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={icon} alt="seenema" className={styles.seenemaIcon}/>
            <Search/>
        </header>
    );
}

export default Header;