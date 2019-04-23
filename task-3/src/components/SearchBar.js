import React from 'react';
import './SearchBar.css';

export default ({ handleChange, handleSubmit, searchText, clearSearch }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={searchText}
          id="searchInput"
          type="search"
          placeholder="Search for a country..."
          autoComplete="off"
          tabIndex="1"
        />
      </form>
      <button className="clear-search" onClick={() => clearSearch()} />
    </div>
  );
};
