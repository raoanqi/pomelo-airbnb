import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeGoodPriceData } from '@/services/modules/home'

export const fetchHomeDataAction = createAsyncThunk('fetchdata', async () => {
  console.log('执行网络请求')
  const res = await getHomeGoodPriceData()
  return res
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    // 高性价比房源数据
    goodPriceInfo: {}
  },
  reducers: {
    // 设置高性价比房源数据
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  // todo：这里研究下extraReducers的用法
  extraReducers: {
    // 将数据存入store
    [fetchHomeDataAction.fulfilled]: (state, { payload }) => {
      state.goodPriceInfo = payload
    }
  }
})

//todo：注意这个导出
export const { changeGoodPriceInfoAction } = homeSlice.actions

export default homeSlice.reducer
