import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    url:{},
    genres:{}
  },
  reducers: {
    getApiConfguration:(state,action)=>{
        state.url=action.payload
    },
    getGenres:(state,action)=>{
        state.genres=action.payload
    }
  }
})


export const { getApiConfguration,getGenres } = homeSlice.actions

export default homeSlice.reducer