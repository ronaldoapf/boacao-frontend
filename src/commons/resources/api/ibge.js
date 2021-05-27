import axios from 'axios'

class IbgeApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://servicodados.ibge.gov.br/api/v1'
    })
  }

  ufListing() {
    return this.api.get('/localidades/estados')
  }

  cityListing(uf) {
    return this.api.get(`/localidades/estados/${uf}/municipios`)
  }
}

export default new IbgeApi();

// /localidades/estados