import { getContacts } from '../../Redux/contactsReducers/contactSelectors';
import { getFilterQuery } from '../../Redux/filterReducers/filterSelectors';
import { connect } from 'react-redux';
import Contacts from './Contacts';

const mapStateToProps = state => ({
  contactState: getContacts(state),
  filterState: getFilterQuery(state),
});

export default connect(mapStateToProps)(Contacts);
