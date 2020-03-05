import { combineReducers } from 'redux'

import { usersReducer } from './users'
import { userReducer } from './user'
import { appReducer } from './app'

const rootReducer = combineReducers({
  app: appReducer,
  users: usersReducer,
  user: userReducer
})

export default rootReducer;
