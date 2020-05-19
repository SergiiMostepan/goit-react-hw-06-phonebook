export const getContacts = state => state.contactState;

export const OnDeleteContact = (reducer, id) =>
  reducer.actions.deleteContact(id);

export const OnAddContact = (reducer, newContact) =>
  reducer.actions.addContact(newContact);
