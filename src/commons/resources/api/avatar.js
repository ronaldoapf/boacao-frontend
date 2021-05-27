import api from '.'

const baseURL = '/avatar';

const AvatarApi = {
  create(payload) {
    return api.post(baseURL, payload);    
  },
} 

export default AvatarApi;
