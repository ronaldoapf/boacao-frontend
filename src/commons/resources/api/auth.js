import api from '.'

const baseURL = '/session'

const AuthApi = {
  signIn(payload){
    return api.post(baseURL, payload);    
  }
} 

export default AuthApi
