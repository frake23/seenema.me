import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const SearchResult = (props) => {
    return (
        <div className="contentBox">
            <div className="previewBox">
                <img src={props.result.image} alt={props.result.title} className="previewImage"/>
            </div>
            <div className="infoBox">
                <span className="resultTitle">
                    {props.result.title}
                </span>
                <span className="resultChannel">
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
