import api from '.'

const baseURL = '/session'

const AuthApi = {
  login(payload){
    return api.post(baseURL, payload);    
  }
} 

export default AuthApi
