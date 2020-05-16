export const Type = {
  ADDCONTACT: 'ADDCONTACT',
  ADDCONTACTSLS: 'ADDCONTACTSLS',
  DELETECONTACT: 'DELETECONTACT',
  CHANGEFILTER: 'CHANGEFILTER',
  EXISTCONTACTTOGGLE: 'EXISTCONTACTTOGGLE',
};

export const addContact = user => ({
  type: Type.ADDCONTACT,
  payload: user,
});

export const addContactsLS = users => ({
  type: Type.ADDCONTACTSLS,
  payload: users,
});

export const isContactExist = () => ({
  type: Type.EXISTCONTACTTOGGLE,
});

export const deleteContact = id => ({
  type: Type.DELETECONTACT,
  payload: id,
});

export const changeFilter = filter => ({
  type: Type.CHANGEFILTER,
  payload: filter,
});
