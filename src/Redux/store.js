import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactsReducers/contactsReducers';
import { filterSlice } from './filterReducers/filterReducers';

const store = configureStore({
  reducer: {
    contactState: contactSlice.reducer,
    filterState: filterSlice.reducer,
  },
});

export default store;
