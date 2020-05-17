import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './InputForm.module.css';

class InputForm extends Component {
  // static propTypes = {
  //   onAddContacts: PropTypes.func.isRequired,
  // };

  state = {
    userName: '',
    userPhone: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  isContactExist = e => {
    if (
      this.props.contactState.find(
        item =>
          item.userName.toLowerCase() === this.state.userName.toLowerCase(),
      )
    ) {
      this.props.isExist();
      setTimeout(() => this.props.isExist(), 1000);

      return;
    }
    this.props.addContact(e, this.state);
  };

  hendleSubmit = e => {
    e.preventDefault();
    this.isContactExist(e);
    this.setState({
      userName: '',
      userPhone: '',
    });
  };

  render() {
    return (
      <div className={styles.continer}>
        <h3 className={styles.inputName}> Name </h3>
        <form onSubmit={this.hendleSubmit}>
          <input
            className={styles.inputFeld}
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <h3 className={styles.inputName}> Number </h3>
          <input
            className={styles.inputFeld}
            type="text"
            name="userPhone"
            value={this.state.userPhone}
            onChange={this.handleChange}
          />
          <button className={styles.BtnSubmit} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default InputForm;
