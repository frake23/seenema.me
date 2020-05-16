import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchResult.module.css';

const SearchResult = (props) => {
    return (
        <div className={styles.contentBox}>
            <div className={styles.previewBox}>
                <img src={props.result.image} alt={props.result.title} className={styles.previewImage}/>
            </div>
            <div className={styles.infoBox}>
                <span className={styles.resultTitle}>
                    {props.result.title}
                </span>
                <span className={styles.resultChannel}>
                    {props.result.channel}
                </span>
            </div>
        </div>
    );
};

SearchResult.propTypes = {
    result: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        channel: PropTypes.string,
        id: PropTypes.string
    }).isRequired
};

export default SearchResult;
