import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    setSearchInputText,
    setSearchResultsListVisibility,
    fetchSearchResults
} from '../../../actions/searchActions'

import styles from './SearchBar.module.css';

const SearchBar = (props) => {
    return (
        <div className={styles.formBox}>
            <form onSubmit={(e) => {props.fetchResults(e)}}>
                <input className={styles.searchBar}
                       type="text"
                       placeholder="Ссылка или поиск"
                       value={props.inputText}
                       onChange={(e) => (props.setInputText(e.target.value))}
                       onBlur={() => props.setResultsListVisibility(false)}
                       onFocus={() => props.results.length !== 0 ? props.setResultsListVisibility(true): null}
                />
            </form>
        </div>
    );
};

SearchBar.propTypes = {
    inputText: PropTypes.string.isRequired,
    results: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        channel: PropTypes.string,
        id: PropTypes.string
    })).isRequired,
    setInputText: PropTypes.func.isRequired,
    setResultsListVisibility: PropTypes.func.isRequired,
    fetchResults: PropTypes.func.isRequired
};

const mapStateToProps = ({search}) => {
    return {
        inputText: search.inputText,
        results: search.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setInputText: (inputText) => dispatch(setSearchInputText(inputText)),
        setResultsListVisibility: (visibility) => dispatch(setSearchResultsListVisibility(visibility)),
        fetchResults: (e) => {
            e.preventDefault();
            return dispatch(fetchSearchResults())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);
