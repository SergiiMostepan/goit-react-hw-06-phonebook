import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import * as contactActions from '../../../Redux/contactsActions';
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
      this.props.contactState.contacts.find(
        item =>
          item.userName.toLowerCase() === this.state.userName.toLowerCase(),
      )
    ) {
      this.props.isContactExist();
      setTimeout(() => this.props.isContactExist(), 1000);

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

const mapStateToProps = state => ({
  contactState: state,
});

const mapDispatchToProps = dispatch => ({
  addContact: (e, state) =>
    dispatch(
      contactActions.addContact({
        userName: state.userName,
        userPhone: state.userPhone,
        id: shortid.generate(),
      }),
    ),
  isContactExist: () => dispatch(contactActions.isContactExist()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
