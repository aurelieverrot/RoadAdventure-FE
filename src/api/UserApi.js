import axios from 'axios';
axios.defaults.withCredentials = true;
const endpoint = 'http://localhost:4000/api/v1';

const signup = (user) => {
  return axios.post(endpoint+'/login', user);
}

const login = (user) => {
  return axios.post(endpoint+'/login', user);
}

const logout = () => {
  return axios.delete(endpoint+'/logout')
}
  
const verify = () => {
  return axios.get(endpoint+'/verify');
}

const show = (id) => {
  return axios.get(endpoint+'/users/'+id);
}

const update = (user) => {
  return axios.put(endpoint+'/users/'+user._id, user);
}

export default {
  signup,
  login,
  logout,
  verify,
  show,
  update
}