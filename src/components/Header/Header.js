import React, {Component} from 'react';

import SeenemaIcon from '../../icons/seenema.svg';
import './styles.css'

import Search from "../Search/Search";

class Header extends Component {
    render() {
        return (
            <header className="desktopHeader">
                <img src={SeenemaIcon} alt="seenema" className="seenemaIcon"/>
                <Search/>
            </header>
        );
    }
}

export default Header;