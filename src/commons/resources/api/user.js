import api from '.'

const baseURL = '/users'

const UserApi = {
  create(payload){
    return api.post(baseURL, payload);    
  }
} 

export default UserApi
