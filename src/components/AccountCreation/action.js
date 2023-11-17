// action.js
export const addUser = (user) => {
    const newUser = {
      ...user,
      createdTime: new Date().toLocaleString(), // Add creation time
    };
  
    return {
      type: 'ADD_USER',
      payload: newUser,
    };
  };
  