import axios from 'axios';

const initialState = {
  users: [],
  toilets: [],
};

//______________ Action Types_______________________
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_TOILETS = 'GET_ALL_TOILETS';

// ______________ Action Creators:______________
export const gotAllUsers = users => {
  return {
    type: GET_ALL_USERS,
    users: users,
  };
};
export const gotAllToilets = toilets => {
  return {
    type: GET_ALL_TOILETS,
    toilets: toilets,
  };
};

// ______________ Thunk Creators:______________
export const fetchUsers = () => {
  return async (dispatch, getState) => {
    const res = await axios.get('/api/users');
    const users = res.data;
    dispatch(gotAllUsers(users));
  };
};
export const fetchToilets = () => {
  return async (dispatch, getState) => {
    const res = await axios.get('/api/toilets');
    const toilets = res.data;
    dispatch(gotAllToilets(toilets));
  };
};

// ______________ Reducer:______________
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_ALL_USERS:
    //   return { ...state, users: action.users };
    // case GET_ALL_TOILETS:
    //   return { ...state, toilets: action.toilets };
    default:
      return state;
  }
};

export default rootReducer;
