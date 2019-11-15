import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {setSearchInputText, setSearchResutlts, setSearchResultsListVisibility} from '../../actions/searchActions'
import youtubeSearch from "../../api/youtube";

import './styles.css';

class SearchBar extends Component {
    onSubmit = (e) => {
        e.preventDefault();
        if (this.props.inputText.length === 0)
            return;
        switch (this.props.hosting) {
            case 'youtube':
                youtubeSearch(this.props.inputText).then(results => this.props.setResults(results));
                this.props.setResultsListVisibility(true);
                break;
            default:
                break;
        }
    };

    onFocus = () => {
        if (this.props.results.length !== 0) {
            this.props.setResultsListVisibility(true)
        }
    };

    render() {
        return (
            <div className="form-box">
                <form onSubmit={this.onSubmit}>
                    <input className="searchBar"
                        type="text"
                        placeholder="Ссылка или поиск"
                        value={this.props.inputText}
                        onChange={(e) => (this.props.setInputText(e.target.value))}
                        onBlur={() => this.props.setResultsListVisibility(false)}
                        onFocus={this.onFocus}
                    />
                </form>
            </div>
        );
    }
}

SearchBar.propTypes = {
    hosting: PropTypes.string.isRequired,
    inputText: PropTypes.string.isRequired,
    results: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        channel: PropTypes.string,
        id: PropTypes.string
    })).isRequired,
    setInputText: PropTypes.func.isRequired,
    setResults: PropTypes.func.isRequired,
    setResultsListVisibility: PropTypes.func.isRequired
};

const mapStateToProps = ({search}) => {
    return {
        hosting: search.hosting,
        inputText: search.inputText,
        results: search.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setInputText: (inputText) => dispatch(setSearchInputText(inputText)),
        setResults: (results) => dispatch(setSearchResutlts(results)),
        setResultsListVisibility: (visibility) => dispatch(setSearchResultsListVisibility(visibility))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);
