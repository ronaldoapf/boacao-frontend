import api from './api';

const getUsers = async () => {
 return api.get('users');
};

const getUsersByID = (id) => {
  return api.get(`users/${id}`);
};

export { getUsers, getUsersByID };