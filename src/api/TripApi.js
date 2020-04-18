import axios from "axios";
axios.defaults.withCredentials = true;
const endpoint = 'http://localhost:4000/api/v1/trips/';

const tripIndex = () => {
  return axios.get(endpoint);
}

const tripShow = (tripId) => {
  return axios.get(endpoint+`${tripId}`);
}

const tripCreate = (trip) => {
  return axios.post(endpoint, trip);
}

const tripUpdate = (tripId, trip) => {
  return axios.put(endpoint+`${tripId}`, trip);
}

const tripDelete = (tripId) => {
  return axios.delete(endpoint+`${tripId}`);
}

export default {
  tripIndex,
  tripShow,
  tripCreate,
  tripUpdate,
  tripDelete
}