import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
    }

    onChange = (e) => {
        this.setState({
            inputText: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.inputText);
    };

    render() {
        return (
            <div className="form-box">
                <form onSubmit={this.onSubmit}>
                    <input className="searchBar"
                        type="text"
                        placeholder="Ссылка или поиск"
                        value={this.state.inputText}
                        onChange={this.onChange}
                        onBlur={this.props.onBlur}
                        onFocus={this.props.onFocus}
                    />
                </form>
            </div>
        );
    }
}

SearchBar.propTypes = {
    onSearchSubmit: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func
};

export default SearchBar;
