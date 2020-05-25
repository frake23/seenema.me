import React from 'react';
import PropTypes from 'prop-types';

import icon from '../../icons/seenema.svg';
import styles from './Logo.module.css';

const Logo = (props) => {
    return (
        <a href="/" style={{height: props.height}}>
            <img src={icon} alt="seenema" style={{height: props.height}}/>
        </a>
    )
};

Logo.propTypes = {
    height: PropTypes.number.isRequired
};

export default Logo;
