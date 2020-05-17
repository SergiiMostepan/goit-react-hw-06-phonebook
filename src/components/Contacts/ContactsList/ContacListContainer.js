import { connect } from 'react-redux';
import { contactSlice } from '../../../Redux/contactsReducers/contactsReducers';
import { OnDeleteContact } from '../../../Redux/contactsReducers/contactSelectors';
import ContactList from './ContactsList';

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(OnDeleteContact(contactSlice, id)),
});

export default connect(null, mapDispatchToProps)(ContactList);
