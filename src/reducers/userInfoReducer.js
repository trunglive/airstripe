import { ADD_USER_INFO } from "../actions/actionTypes";

const initialUserInfo = {};

const userInfoReducer = (state = initialUserInfo, action) => {
  switch (action.type) {
    case ADD_USER_INFO:
      return action.userInfo;
    default:
      return state;
  }
};

export default userInfoReducer;
