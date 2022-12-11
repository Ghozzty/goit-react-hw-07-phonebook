import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contSlice = createSlice({
  name: 'book',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteCont(state, action) {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const contReducer = persistReducer(persistConfig, contSlice.reducer);

export const { addContact, deleteCont, setFilter } = contSlice.actions;

// selectors

export const getContacts = state => state.book.contacts;
export const getFilter = state => state.book.filter;
