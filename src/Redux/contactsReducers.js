import { Type } from './contactsActions';

const contactReducer = (
  state = {
    contacts: [],
    filter: '',
    isContactExist: false,
  },
  action,
) => {
  switch (action.type) {
    case Type.ADDCONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case Type.ADDCONTACTSLS:
      return {
        ...state,
        contacts: [...state.contacts, ...action.payload],
      };

    case Type.EXISTCONTACTTOGGLE:
      return {
        ...state,
        isContactExist: !state.isContactExist,
      };

    case Type.DELETECONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload,
        ),
      };

    case Type.CHANGEFILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default contactReducer;
