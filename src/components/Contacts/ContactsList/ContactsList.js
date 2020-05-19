import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactTransition from '../transitions/Contacts.module.css';
import ContactContainer from './ContacContainer';
import styles from './Contactlist.module.css';

const ContactList = ({ contacts, deleteContact }) =>
  contacts.length > 0 ? (
    <TransitionGroup component="ul" className={styles.continer}>
      {contacts.map(({ userName, userPhone, id }) => (
        <CSSTransition key={id} timeout={250} classNames={ContactTransition}>
          <ContactContainer userName={userName} userPhone={userPhone} id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  ) : (
    <h3> You don `t have any contacts</h3>
  );

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      userName: PropTypes.string.isRequired,
      userPhone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
