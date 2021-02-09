import React from 'react';
import './SearchBox.css';

const SearchBox = ({ onInputChange }) => {
    return (
        <div className="input_text">
            <input
                onChange={(event) => onInputChange(event.target.value)}
                placeholder="Type keywords"
                className="search-input"
            />
        </div>
    );
};

export default SearchBox;