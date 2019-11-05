import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import SearchResult from "../SearchResult/SearchResult";
import InvisibleComponent from "../InvisibleComponent/InvisibleComponent";

const SearchResultList = (props) => {
    let content;
    if (props.searchResults.length === 0) {
        content =
            <div className="nothingFoundBox">
                <span className="nothingFoundText">Ничего не найдено</span>
            </div>
    } else {
        content =
            <ul className="searchResultsList">
                <li className="resultItem">
                    {props.searchResults.map(searchResult => {
                        return (<SearchResult hosting={props.hosting} result={searchResult} key={searchResult.id.videoId}/>)
                    })}
                </li>
            </ul>
}
    return (
        <InvisibleComponent show={props.show}>
            <div className="searchResultListBox">
                {content}
            </div>
        </InvisibleComponent>
    );
};

SearchResultList.propTypes = {
    hosting: PropTypes.string,
    searchResults: PropTypes.array,
    show: PropTypes.bool
};

export default SearchResultList;