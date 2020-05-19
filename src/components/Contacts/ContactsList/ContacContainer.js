import { connect } from 'react-redux';
import { contactSlice } from '../../../Redux/contactsReducers/contactsReducers';
import { OnDeleteContact } from '../../../Redux/contactsReducers/contactSelectors';
import ContactItem from './CotactItem';

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(OnDeleteContact(contactSlice, id)),
});

export default connect(null, mapDispatchToProps)(ContactItem);
