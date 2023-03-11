import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
require('dotenv').config()

const initialState = {
  loading: false,
  videosList: [],
  error: '',
}

const url = `${process.env.API_URL}/video/video/mostViewedVideos`
console.log(url)

export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
  const response = await axios.get(url)
  return response.data.data
})

export const counterSlice = createSlice({
  name: 'videos',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.pending, (state) => {
      state.loading = true
    })

    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.loading = false
      state.videosList = action.payload
      state.error = ''
    })

    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.loading = false
      state.videosList = []
      state.error = `${action.error.message}`
    })
  },
  reducers: {},
})

export default counterSlice.reducer