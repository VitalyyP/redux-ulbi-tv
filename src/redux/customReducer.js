const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';

export const customerReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return [...state, action.payload];

    case REMOVE_CUSTOMER:
      return state.filter(customer => customer.id !== action.payload);

    default:
      return state;
  }
};

export const addCustomerAction = payload => ({ type: ADD_CUSTOMER, payload });
export const removeCustomerAction = payload => ({ type: REMOVE_CUSTOMER, payload });
