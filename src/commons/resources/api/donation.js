import api from '.'

const baseURL = '/donation'

const DonationApi = {
  create(payload){
    return api.post(baseURL, payload);    
  }
} 

export default DonationApi
