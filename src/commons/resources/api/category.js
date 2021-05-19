import api from '.'

const baseURL = '/category'

const CategoryApi = {
  listCategories(){
    return api.get(baseURL);    
  }
} 

export default CategoryApi
