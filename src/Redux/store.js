import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactSlice } from './contactsReducers/contactsReducers';
import { filterSlice } from './filterReducers/filterReducers';

const rootReducer = combineReducers({
  contactState: contactSlice.reducer,
  filterState: filterSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contactState'],
};

const defaultMiddlewareConfig = {
  serializableCheck: {
    ignoredActions: ['persist/PERSIST'],
  },
};

const middleware = [...getDefaultMiddleware(defaultMiddlewareConfig)];

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: {
//     contactState: contactSlice.reducer,
//     filterState: filterSlice.reducer,
//   },
// });

// export default store;

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persistor = persistStore(store);
