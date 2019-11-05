import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const SearchResult = (props) => {
    let content;
    if (props.hosting === 'youtube') {
        content =
            <Fragment>
                <div className="previewBox">
                    <img src={props.result.snippet.thumbnails.medium.url} alt={props.result.snippet.title} className="previewImage"/>
                </div>
                <div className="infoBox">
                    <span className="resultTitle">
                        {props.result.snippet.title}
                    </span>
                    <span className="resultChannel">
                        {props.result.snippet.channelTitle}
                    </span>
                </div>
            </Fragment>
    }
    return (
        <div className="contentBox">
            {content}
        </div>
    );
};

SearchResult.propTypes = {
    hosting: PropTypes.string,
    result: PropTypes.object
};

export default SearchResult;