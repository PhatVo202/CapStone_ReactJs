import { SET_USER_INFOR } from "../types/userType";

export const setUserInforAction = (data) => {
  return {
    type: SET_USER_INFOR,
    payload: data,
  };
};
