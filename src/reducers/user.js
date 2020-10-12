import * as Types from "../constants/constants";
const initialStateUser = { loggedIn: false };

let users = (state = initialStateUser, action) => {
  switch (action.type) {
    case Types.LOGIN:
      return { loggedIn: true };
    case Types.LOGOUT:
      localStorage.clear();
      return { loggedIn: false };
    default:
      return { ...state };
  }
};
export default users;
