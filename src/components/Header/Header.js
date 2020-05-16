import React, {Component} from 'react';

import SeenemaIcon from '../../icons/seenema.svg';
import styles from './Header.module.css';

import Search from "../Search/Search";

class Header extends Component {
    render() {
        return (
            <header className={styles.desktopHeader}>
                <img src={SeenemaIcon} alt="seenema" className={styles.seenemaIcon}/>
                <Search/>
            </header>
        );
    }
}

export default Header;