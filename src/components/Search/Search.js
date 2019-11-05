import React, {Component} from 'react';
import axios from 'axios';

import SearchBar from "../SearchBar/SearchBar";
import SearchResultList from "../SearchResultsList/SearchResultList";

const API_KEY = 'AIzaSyDAG1LSJS_KYvOMDMbk6ICbojSLNCQo9aY';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hosting: 'youtube',
            searchResults: [],
            showResults: false,
            inputText: ''
        }
    }

    onSearchSubmit = (inputText) => {
        if (this.state.hosting === 'youtube') {
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    part: 'snippet',
                    q: inputText,
                    maxResults: 15,
                    type: 'video',
                    key: API_KEY
                }
            }).then((res) => {
                this.setState({
                    searchResults: res.data.items,
                    showResults: true,
                    inputText: inputText
                });
            });
        }

    };

    onSearchBarBlur = () => {
      this.setState({
          showResults: false
      })
    };

    onSearchBarFocus = () => {
        if (this.state.inputText !== '') {
            this.setState({
                showResults: true
            })
        }
    };

    render() {
        return (
            <div className="searchBox">
                <SearchBar onSearchSubmit={this.onSearchSubmit} onBlur={this.onSearchBarBlur} onFocus={this.onSearchBarFocus}/>
                <SearchResultList hosting={this.state.hosting} searchResults={this.state.searchResults} show={this.state.showResults}/>
            </div>
        )
    }
}

export default Search;
