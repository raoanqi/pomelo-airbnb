import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getEntireRoomList } from '@/services/modules/entire'

export const fetchEntireDataAction = createAsyncThunk(
  'fetchEntireData',
  (payload, { dispatch }) => {
    getEntireRoomList().then(res=>{})
  }
)

const entireSlice = createSlice({
  name: 'entire',
  initialState: {},
  reducers: {}
})

export const {} = entireSlice.actions

export default entireSlice.reducer
