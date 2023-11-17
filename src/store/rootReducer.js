// reducers/users.js
const initialState = {
    userList: [],
  };
  
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          userList: [...state.userList, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default usersReducer;
  