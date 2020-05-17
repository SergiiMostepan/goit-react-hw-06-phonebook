import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filterState, changeFilter }) => (
  <div className={styles.container}>
    <div> Find contacts by name </div>
    <input
      className={styles.inputFeld}
      type="text"
      name="filter"
      value={filterState.filter}
      onChange={changeFilter}
    />
  </div>
);

Filter.propTypes = {
  filterState: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
