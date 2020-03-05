import axios from 'axios'

const REQUEST_TIMEOUT = 10000

const api = axios.create({
  baseURL: `https://reqres.in/api/`,
  withCredentials: false,
  timeout: REQUEST_TIMEOUT
})

const fetchUsers = async () => {
  const { data } = await api.get('/users')
  return data
}

const fetchUserDetails = async id => {
  const { data } = await api.get(`/users/${id}`)
  return data
}

export { fetchUsers, fetchUserDetails }
