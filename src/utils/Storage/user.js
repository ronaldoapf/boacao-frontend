import Storage from '.'

const User = {
  setToken(token){
    Storage.set('token', token);
  }
}

export default User;