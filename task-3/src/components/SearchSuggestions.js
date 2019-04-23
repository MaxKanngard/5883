import React from 'react';
import './SearchSuggestions.css';
import { boldStringByMatch } from '../utils/makeTextBold';

export default ({ items, addToHistory, searchText }) => {
  const shouldReturnSuggestionBox = items && items.length;
  if (shouldReturnSuggestionBox)
    return (
      <div className="suggestion-box">
        <ul>
          {items.map(item => (
            <li
              key={item}
              onClick={() => addToHistory(item)}
              value={item}
              className="suggestion-item"
              dangerouslySetInnerHTML={boldStringByMatch(item, searchText)}
            />
          ))}
        </ul>
      </div>
    );
  return <div />;
};
