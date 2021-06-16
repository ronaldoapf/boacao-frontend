import api from '.'
import Storage from 'utils/Storage';

const baseURL = '/donation'

api.interceptors.request.use(config => {
	const token = Storage.get('@Token');
	config.headers.authorization = token;
	return config;
})

const DonationApi = {
  createDonation(payload) {
    return api.post(baseURL, payload, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  listAllDonations(userId, status){
    let query;
    if(status && userId) {
      query = `${baseURL}?userId=${userId}&status=${status}`;
    }
    else if(status && !userId) {
      query = `${baseURL}?status=${status}`;
    }
    else {
      query = `${baseURL}?userId=${userId}`;
    }
    return api.get(query);
  },
  showSpecificDonation(id){
    return api.get(`${baseURL}/${id}`);
  },
  listDonations(id) {
    const query = `${baseURL}?userId=${id}`;
    return api.get(query); 
  },
  deleteDonation(id) {
    const query = `${baseURL}/${id}`
    return api.delete(query);
  },
  updateDonation(id, payload) {
    const query = `${baseURL}/${id}`
    return api.put(query, payload);
  }
} 

export default DonationApi
