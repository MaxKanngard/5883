import React from 'react';
import SearchBar from './SearchBar';
import SearchSuggestions from './SearchSuggestions';
import { fetchCountryNames } from '../api/search-api';
import { isValidSearchText } from '../utils/isValidSearchText';
import './CountrySearcher.css';
import SearchHistory from './SearchHistory';
import '../styles/Button.css';
import '../styles/List.css';

export class CountrySearcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchHistory: [], searchText: '', searchSuggestions: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.addToHistory = this.addToHistory.bind(this);
    this.clearSearchHistory = this.clearSearchHistory.bind(this);
    this.removeFromHistory = this.removeFromHistory.bind(this);
  }

  async getSearchSuggestions(searchQuery) {
    if (isValidSearchText(searchQuery)) {
      const countryNames = await fetchCountryNames(searchQuery);
      this.setState({ searchSuggestions: countryNames });
    } else {
      this.clearSearchSuggestions();
    }
  }

  handleChange({ target }) {
    const searchText = target.value;
    this.setState({ searchText });
    return this.getSearchSuggestions(searchText);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.addToHistory(this.state.searchText);
  }

  addToHistory(suggestionName) {
    const newSearchItem = {
      countryName: suggestionName,
      timestamp: Date.now()
    };
    this.setState(state => ({
      searchHistory: state.searchHistory.concat(newSearchItem)
    }));
    this.clearSearch();
  }

  clearSearchSuggestions() {
    this.setState({ searchSuggestions: [] });
  }

  clearSearch() {
    this.clearSearchSuggestions();
    this.setState({ searchText: '' });
  }

  clearSearchHistory() {
    this.setState({ searchHistory: [] });
  }

  removeFromHistory(itemToRemove) {
    this.setState(state => ({
      searchHistory: state.searchHistory.filter(item => item !== itemToRemove)
    }));
  }

  render() {
    return (
      <div className="search-container">
        <h1>Search on country names</h1>
        <SearchBar
          searchText={this.state.searchText}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          clearSearch={this.clearSearch}
        />
        <SearchSuggestions
          items={this.state.searchSuggestions}
          addToHistory={this.addToHistory}
          searchText={this.state.searchText}
        />
        <SearchHistory
          items={this.state.searchHistory}
          clearHistory={this.clearSearchHistory}
          removeItemFromHistory={this.removeFromHistory}
        />
      </div>
    );
  }
}
