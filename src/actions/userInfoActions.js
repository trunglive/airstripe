import { ADD_USER_INFO } from './actionTypes';

export const addUserInfo = (userInfo) => ({
  type: ADD_USER_INFO,
  userInfo
});