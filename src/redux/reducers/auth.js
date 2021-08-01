import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  FORGET_PW,
  UPDATE_PROF,
  VERIFY_ACC,
} from '../actions/type';

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload
      }; //payload comes from action

    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case FORGET_PW:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
      case UPDATE_PROF:
      return {
        ...state,
        isLoggedIn: true,
        user: user,
      };
      case VERIFY_ACC:
        return {
          ...state,
          isLoggedIn: true,
          user: user,
        }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
