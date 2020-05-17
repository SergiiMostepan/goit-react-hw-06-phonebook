import { connect } from 'react-redux';
import { contactSlice } from '../../../Redux/contactsReducers/contactsReducers';
import {
  OnAddContact,
  getContacts,
} from '../../../Redux/contactsReducers/contactSelectors';
import InputForm from './InputForm';
import shortid from 'shortid';

const mapStateToProps = state => ({
  contactState: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  addContact: (e, state) =>
    dispatch(
      OnAddContact(contactSlice, {
        userName: state.userName,
        userPhone: state.userPhone,
        id: shortid.generate(),
      }),
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
