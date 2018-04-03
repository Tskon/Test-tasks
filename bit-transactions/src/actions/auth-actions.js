export function logIn(login, password) {
  return {
    type: 'LOG_IN',
    payload: {
      login, 
      password
    }
  }
}

export function logOut() {
  return {
    type: 'LOG_OUT',
    payload: axios.post('http://localhost:8090/get/banks')
  }
}