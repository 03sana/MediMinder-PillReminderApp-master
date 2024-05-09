import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state,action) => {
        console.log('setUser',action.payload)
      state.user = action.payload
    },
  },
})

export const {setUser} = counterSlice.actions

export default counterSlice.reducer