import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import contactReducer from './contactsReducers';

const store = createStore(contactReducer, devToolsEnhancer());

export default store;
