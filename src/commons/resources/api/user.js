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

  listUser() {
    return api.get(`${baseURL}/1`);
  }
} 

export default UserApi
