import api from '.'

const baseURL = '/users'

const UserApi = {
  create(payload) {
    return api.post(baseURL, payload);    
  },

  updateData(payload, id) {
    const route = `${baseURL}/${id}`
    return api.put(route, payload);
  },

  listUser(id) {
    return api.get(`${baseURL}/${id}`);
  }
} 

export default UserApi
