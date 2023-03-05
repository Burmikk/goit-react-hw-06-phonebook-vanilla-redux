import { ADD_CONTACTS, ADD_FILTER, DELETE_CONTACT } from './types';
import { nanoid } from 'nanoid';

export const addContacts = payload => {
  return {
    type: ADD_CONTACTS,
    payload: {
      id: nanoid(2),
      ...payload,
    },
  };
};

export const addFilter = payload => {
  return {
    type: ADD_FILTER,
    payload,
  };
};

export const deleteContact = payload => {
  return {
    type: DELETE_CONTACT,
    payload,
  };
};
