import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import localStorageLoader from '../../utils/localStorage';
import Section from './Section/Section';
import InputForm from './InputForm/InputForm';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import HeaderTransition from './transitions/PhonebookHeader.module.css';
import Notify from '../../utils/Notification';
import * as contactActions from '../../Redux/contactsActions';
import NotifyTransition from './transitions/Notify.module.css';
import FilterTransition from './transitions/Filter.module.css';
import styles from './Contacts.module.css';

const taskFilter = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.userName.toLowerCase().includes(filter.toLowerCase()),
  );
};

class Contacts extends Component {
  state = {
    isLoaded: false,
  };

  componentDidMount() {
    this.setState({
      isLoaded: true,
    });
    const contactsFromLS = localStorageLoader.load('contacts');
    if (contactsFromLS) {
      this.props.addContacts(contactsFromLS);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.contactState.contacts !== this.props.contactState.contacts)
      localStorageLoader.save('contacts', this.props.contactState.contacts);
  }

  render() {
    const filteredTasks = taskFilter(
      this.props.contactState.contacts,
      this.props.contactState.filter,
    );
    return (
      <>
        <Section>
          <CSSTransition
            in={this.props.contactState.isContactExist}
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
          <InputForm> </InputForm>
          <CSSTransition
            in={this.props.contactState.contacts.length >= 2}
            timeout={250}
            classNames={FilterTransition}
            unmountOnExit
          >
            <Filter />
          </CSSTransition>
          <ContactList
            contacts={
              this.props.contactState.contacts.length >= 2
                ? filteredTasks
                : this.props.contactState.contacts
            }
          ></ContactList>
        </Section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contactState: state,
});

const mapDispatchToProps = dispatch => ({
  addContacts: contactsFromLS =>
    dispatch(contactActions.addContactsLS(contactsFromLS)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
