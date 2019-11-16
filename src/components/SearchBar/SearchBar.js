import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    setSearchInputText,
    setSearchResultsListVisibility,
    fetchSearchResults
} from '../../actions/searchActions'

import './styles.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="form-box">
                <form onSubmit={(e) => {this.props.fetchResults(e)}}>
                    <input className="searchBar"
                        type="text"
                        placeholder="Ссылка или поиск"
                        value={this.props.inputText}
                        onChange={(e) => (this.props.setInputText(e.target.value))}
                        onBlur={() => this.props.setResultsListVisibility(false)}
                        onFocus={() => this.props.results.length !== 0 ? this.props.setResultsListVisibility(true): null}
                    />
                </form>
            </div>
        );
    }
}

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
