import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/reducers'
import userReducer from './user/reducers'

export default configureStore({
  reducer: {
    user:userReducer,
    auth:authReducer
  },
})