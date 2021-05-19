import api, { multipartApi } from '.'
import Storage from 'utils/Storage';

const baseURL = '/donation'

api.interceptors.request.use(config => {
	const token = Storage.get('@Token');
	config.headers.authorization = token;
	return config;
})

const DonationApi = {
  createDonation(payload) {
    return multipartApi.post(baseURL, payload);
  },

  listDonations(id) {
    const query = `${baseURL}?userId=${id}`;
    return api.get(query); 
  },

  deleteDonation(id) {
    const query = `${baseURL}/${id}`
    return api.delete(query);
  }
} 

export default DonationApi
