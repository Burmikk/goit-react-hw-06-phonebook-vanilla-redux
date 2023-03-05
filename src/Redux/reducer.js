import { ADD_CONTACTS, ADD_FILTER, DELETE_CONTACT } from './types';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CONTACTS:
      const newContact = [...state.contacts, action.payload];
      return { ...state, contacts: newContact };
    case ADD_FILTER:
      return { ...state, filter: action.payload };
    case DELETE_CONTACT:
      const arr = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      return { ...state, contacts: arr };

    default:
      return state;
  }
};
