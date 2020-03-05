import { USERS, DETAILS } from '../constants';

const loadUsers = () => ({
  type: USERS.LOAD,
});

const setUsers = users => ({
  type: USERS.LOAD_SUCCESS,
  users,
});

const setError = error => ({
  type: USERS.LOAD_FAIL,
  error,
});

const loadUserDetails = id => ({
  type: DETAILS.LOAD,
  id,
});

const setUserDetails = (data) => ({
  type: DETAILS.LOAD_SUCCESS,
  data
});

const setUserDetailsError = error => ({
  type: DETAILS.LOAD_FAIL,
  error,
});

export {
  loadUsers,
  setUsers,
  setError,
  loadUserDetails,
  setUserDetails,
  setUserDetailsError,
};
