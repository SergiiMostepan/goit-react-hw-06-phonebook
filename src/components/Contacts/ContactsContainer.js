import { contactSlice } from '../../Redux/contactsReducers/contactsReducers';
import {
  getContacts,
  OnAddContactLS,
} from '../../Redux/contactsReducers/contactSelectors';
import { getFilterQuery } from '../../Redux/filterReducers/filterSelectors';
import { connect } from 'react-redux';
import Contacts from './Contacts';

const mapStateToProps = state => ({
  contactState: getContacts(state),
  filterState: getFilterQuery(state),
});

const mapDispatchToProps = dispatch => ({
  addContacts: contactsFromLS =>
    dispatch(OnAddContactLS(contactSlice, contactsFromLS)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
