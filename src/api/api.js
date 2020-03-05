import axios from 'axios'

const REQUEST_TIMEOUT = 10000

const api = axios.create({
  baseURL: `https://`,
  withCredentials: false,
  timeout: REQUEST_TIMEOUT
})

const fetchUsers = async () => {
  const response = await api.get('/users');
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const fetchUserDetails = async id => {
  const response = await axios.get(`/users/${id}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchUsers, fetchUserDetails }
