import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contactlist.module.css';

const ContactItem = ({ userName, userPhone, id, deleteContact }) => (
  <li className={styles.contact}>
    <div className={styles.userData}>
      <div> {userName} </div> <div>{userPhone}</div>
    </div>
    <button
      className={styles.button}
      type="button"
      onClick={() => deleteContact(id)}
    >
      <span> &#215;</span>
    </button>
  </li>
);

ContactItem.propTypes = {
  userName: PropTypes.string.isRequired,
  userPhone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
