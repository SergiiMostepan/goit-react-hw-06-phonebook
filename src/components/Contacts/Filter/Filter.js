import React from 'react';
import { connect } from 'react-redux';
import * as contactActions from '../../../Redux/contactsActions';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ contactState, changeFilter }) => (
  <div className={styles.container}>
    <div> Find contacts by name </div>
    <input
      className={styles.inputFeld}
      type="text"
      name="filter"
      value={contactState.filter}
      onChange={changeFilter}
    />
  </div>
);

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChangeFilter: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({
  contactState: state,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: e => dispatch(contactActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
