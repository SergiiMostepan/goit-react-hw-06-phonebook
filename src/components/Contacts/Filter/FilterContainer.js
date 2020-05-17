import { connect } from 'react-redux';
import { filterSlice } from '../../../Redux/filterReducers/filterReducers';
import {
  getFilterQuery,
  getFilterOnChangeQuery,
} from '../../../Redux/filterReducers/filterSelectors';
import Filter from './Filter';

const mapStateToProps = state => ({
  filterState: getFilterQuery(state),
});

const mapDispatchToProps = dispatch => ({
  changeFilter: e =>
    dispatch(getFilterOnChangeQuery(filterSlice, e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
