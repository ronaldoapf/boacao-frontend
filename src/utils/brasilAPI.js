import { BrasilAPI } from 'brasilapi'

const BrasilApi = {
  search(){
    const api = new BrasilAPI();
    return api.cep('38411-094');
  }
}

export default BrasilApi
