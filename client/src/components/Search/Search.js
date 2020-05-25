import React from 'react';

import SearchBar from "./SearchBar/SearchBar";
import SearchResultList from "./SearchResultsList/SearchResultList";

import styles from './Search.module.css';

const Search = () => {
    return (
        <div className={styles.searchBox}>
            <SearchBar />
            <SearchResultList />
        </div>
    );
};

export default Search;
