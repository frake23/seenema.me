import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles.css';

import SearchResult from "../SearchResult/SearchResult";
import InvisibleComponent from "../InvisibleComponent/InvisibleComponent";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const SearchResultList = (props) => {
    let content;
    if (props.searchResults.length === 0) {
        content =
            <div className="centeringWrapper">
                <span className="nothingFoundText">Ничего не найдено</span>
            </div>
    } else {
        content =
            <ul className="searchResultsList">
                <li className="resultItem">
                    {props.searchResults.map(searchResult => {
                        return (<SearchResult result={searchResult} key={searchResult.id}/>)
                    })}
                </li>
            </ul>
}
    return (
        <InvisibleComponent show={props.show}>
            <div className="searchResultListBox">
                {props.loading ? <div className="centeringWrapper"><LoadingSpinner/></div> : content}
            </div>
        </InvisibleComponent>
    );
};

SearchResultList.propTypes = {
    searchResults: PropTypes.array,
    show: PropTypes.bool,
    loading: PropTypes.bool
};

const mapStateToProps = ({ search }) => ({
    searchResults: search.results,
    show: search.resultsVisibility,
    loading: search.loading
});

export default connect(
    mapStateToProps,
)(SearchResultList);
