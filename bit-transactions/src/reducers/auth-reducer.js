export function authReducer(state = {login: '', password: '', isAuth: false}, action) {
  switch (action.type) {
    case 'LOG_IN': {
      state = {login: action.payload.login, password: action.payload.password, isAuth: true};
      break;
    }
    case 'LOG_OUT': {
      state = {...state, isAuth: false};
      break;
    }
  }
  return state;
}