import React from 'react';
import './SearchHistory.css';
import { formatDateTimeAMPM } from '../utils/dateTime';

export default ({ items, clearHistory, removeItemFromHistory }) => {
  return (
    <div className="search-history-container">
      <h2>
        Search history
        <span className="clear-history" onClick={() => clearHistory()}>
          Clear search history
        </span>
      </h2>
      <ul>
        {items.map(item => (
          <li key={item.timestamp} className="history-item">
            {item.countryName}
            <time>{formatDateTimeAMPM(item.timestamp)}</time>
            <button onClick={() => removeItemFromHistory(item)} />
          </li>
        ))}
      </ul>
    </div>
  );
};
