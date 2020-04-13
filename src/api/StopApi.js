import axios from "axios";
axios.defaults.withCredentials = true;
const endpoint = 'http://localhost:4001/api/v1/stops';

const stopIndex = () => {
  return axios.get(endpoint);
}

const stopShow = (stop) => {
  return axios.get(endpoint+`${stop._id}`, stop);
}

const stopCreate = (stop) => {
  return axios.post(endpoint, stop);
}

const stopUpdate = (stop) => {
  return axios.put(endpoint+`${stop._id}`, stop);
}

const stopDelete = (stop) => {
  return axios.delete(endpoint+`/${stop._id}`);
}

export default {
  stopIndex,
  stopShow,
  stopCreate,
  stopUpdate,
  stopDelete,
}