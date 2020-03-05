import { DETAILS } from '../../constants'
import { normalizeUserData } from './user.normalizers'

const initialState = {
}

const userReducer = (state = initialState, action) => {
  if (action.type === DETAILS.LOAD_SUCCESS) {
    return {
      ...state,
      ...normalizeUserData(action.data)
    }
  }
  return state;
};

export default userReducer
