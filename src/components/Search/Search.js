import React from 'react';

import SearchBar from "../SearchBar/SearchBar";
import SearchResultList from "../SearchResultsList/SearchResultList";

const Search = () => {
    return (
        <div className="searchBox">
            <SearchBar />
            <SearchResultList />
        </div>
    );
};

export default Search;
