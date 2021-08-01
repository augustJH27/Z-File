import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  FORGET_PW,
  UPDATE_PROF,
  VERIFY_ACC,
} from '../actions/type';

import AuthService from '../../services/auth.service';

export const register = (email, password, confirmPassword) => (dispatch) => {
  return AuthService.register(email, password, confirmPassword).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload:
        {email, password, confirmPassword,
        }    
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
        payload:
        {email, password
        }  
      }); //email, email, password can be deleted

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (data) => {
      console.log(data, 'isidata');
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data.userToken.detailUser },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};


export const forget = (email, password, confirmPassword) => (dispatch) => {
  return AuthService.forget(email, password, confirmPassword).then(
    (response) => {
      dispatch({
        type: FORGET_PW,
        payload:
        {email, password, confirmPassword,
        }    
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      }); //email, email, password can be deleted
      
      return Promise.reject();
    }
  );
};

export const update = (email, fullName, id) => (dispatch) => {
  return AuthService.update(email, fullName, id).then(
    (response) => {
      dispatch({
        type: UPDATE_PROF,
        payload:
        {email, fullName,
        }    
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const verify = (IdNum, birthDate, bornPlace, expiryDate, id) => (dispatch) => {
  return AuthService.verify(IdNum, birthDate, bornPlace, expiryDate, id).then(
    (response) => {
      dispatch({
        type: VERIFY_ACC,
        payload:
        {IdNum, birthDate, bornPlace, expiryDate
        }    
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};