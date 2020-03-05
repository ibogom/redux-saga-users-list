import { USERS } from '../../constants';
import { normalizeUsers } from './users.normalizers'

const initialState = {
  usersById: {},
  usersIds: []
}

const usersReducer = (state = initialState, action) => {
  if (action.type === USERS.LOAD_SUCCESS) {
    return {
      ...state,
     ...normalizeUsers(action.users)
    }
  }
  return state;
};

export default usersReducer;
