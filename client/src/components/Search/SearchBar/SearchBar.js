import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    setSearchResultsListVisibility,
    fetchSearchResults
} from '../../../actions/searchActions'

import styles from './SearchBar.module.css';

const SearchBar = (props) => {
    const [inputText, setInputText] = useState('');

    return (
        <div className={styles.formBox}>
            <form onSubmit={(e) => props.fetchResults(e, inputText)}>
                <input className={styles.searchBar}
                       type="text"
                       placeholder="Ссылка или поиск"
                       value={inputText}
                       onChange={e => setInputText(e.target.value)}
                       onBlur={() => props.setResultsListVisibility(false)}
                       onFocus={() => props.results.length !== 0 ? props.setResultsListVisibility(true): null}
                />
            </form>
        </div>
    );
};

SearchBar.propTypes = {
    results: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        channel: PropTypes.string,
        id: PropTypes.string
    })).isRequired,
    setResultsListVisibility: PropTypes.func.isRequired,
    fetchResults: PropTypes.func.isRequired
};

const mapStateToProps = ({search}) => {
    return {
        results: search.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setResultsListVisibility: (visibility) => dispatch(setSearchResultsListVisibility(visibility)),
        fetchResults: (e, inputText) => {
            e.preventDefault();
            return dispatch(fetchSearchResults(inputText))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);
