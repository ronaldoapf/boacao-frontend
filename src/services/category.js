import api from './api';

const getCategories = async () => {
 return api.get('category');
};

export { getCategories };