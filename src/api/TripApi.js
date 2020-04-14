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

const tripUpdate = (trip) => {
  return axios.put(endpoint+`${trip._id}`, trip);
}

const tripDelete = (trip) => {
  return axios.delete(endpoint+`/${trip._id}`);
}

export default {
  tripIndex,
  tripShow,
  tripCreate,
  tripUpdate,
  tripDelete
}