import { APP } from '../../constants'

const initialState = {
  title: ''
}

const appReducer = (state = initialState, action) => {
  if (action.type === APP.SET_TITLE) {
    return {
      ...state,
      title: action.title
    }
  }
  return state;
};

export default appReducer
