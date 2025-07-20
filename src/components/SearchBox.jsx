import React from 'react';
import styles from './SearchBox.module.css'; 

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="Search contacts..."
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
