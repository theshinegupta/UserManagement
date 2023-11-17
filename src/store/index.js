import { createStore } from 'redux';

const initialState = {
  users: JSON.parse(localStorage.getItem('users')) || [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const newUsers = [...state.users, action.payload];
      localStorage.setItem('users', JSON.stringify(newUsers));
      return { ...state, users: newUsers };
    // Add other actions as needed

    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
