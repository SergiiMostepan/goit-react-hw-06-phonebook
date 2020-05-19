import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
// import localStorageLoader from '../../utils/localStorage';
import Section from './Section/Section';
import InputForm from './InputForm/InputFirmContainer';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/FilterContainer';
import HeaderTransition from './transitions/PhonebookHeader.module.css';
import Notify from '../../utils/Notification';
import NotifyTransition from './transitions/Notify.module.css';
import FilterTransition from './transitions/Filter.module.css';
import styles from './Contacts.module.css';

const taskFilter = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.userName.toLowerCase().includes(filter.toLowerCase()),
  );
};

class Contacts extends Component {
  static propTypes = {
    addContacts: PropTypes.func.isRequired,
    filterState: PropTypes.string.isRequired,
    contactState: PropTypes.array.isRequired,
  };

  state = {
    isLoaded: false,
    isContactExist: false,
  };

  // componentDidMount() {
  //   this.setState({
  //     isLoaded: true,
  //   });
  //   const contactsFromLS = localStorageLoader.load('contacts');
  //   if (contactsFromLS) {
  //     this.props.addContacts(contactsFromLS);
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.contactState !== this.props.contactState)
  //     localStorageLoader.save('contacts', this.props.contactState);
  // }

  hendleContactExist = () => {
    this.setState({
      isContactExist: !this.state.isContactExist,
    });
  };

  render() {
    const filteredTasks = taskFilter(
      this.props.contactState,
      this.props.filterState,
    );

    return (
      <Section>
        <CSSTransition
          in={this.state.isContactExist}
          timeout={250}
          classNames={NotifyTransition}
          unmountOnExit
        >
          <Notify />
        </CSSTransition>
        <CSSTransition
          in={this.state.isLoaded}
          timeout={500}
          classNames={HeaderTransition}
          unmountOnExit
        >
          <h1 className={styles.phoneBookHeader}> Phonebook </h1>
        </CSSTransition>
        <InputForm isExist={this.hendleContactExist}> </InputForm>
        <CSSTransition
          in={this.props.contactState.length >= 2}
          timeout={250}
          classNames={FilterTransition}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <ContactList
          contacts={
            this.props.contactState.length >= 2
              ? filteredTasks
              : this.props.contactState
          }
        ></ContactList>
      </Section>
    );
  }
}

export default Contacts;
