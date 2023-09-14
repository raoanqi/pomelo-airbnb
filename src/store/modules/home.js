import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getHomeGoodPriceData,
  getHomeHighScoreData
} from '@/services/modules/home'

export const fetchHomeDataAction = createAsyncThunk(
  'fetchdata',
  // 这里可以写多个action，考虑到都是home页面的数据，所以就放在一个action中进行实现
  // 因为高性价比与高评分两类数据没有依赖，就可以
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then(res => {
      dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then(res => {
      dispatch(changeHighScoreInfoAction(res))
    })
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    // 高性价比房源数据
    goodPriceInfo: {},
    // 高评分房源数据
    highScoreInfo: {}
  },
  reducers: {
    // 设置高性价比房源数据
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    // 设置高评分房源数据
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    }
  }
  // todo：这里研究下extraReducers的用法
  // extraReducers: {
  //   // 将数据存入store
  //   [fetchHomeDataAction.fulfilled]: (state, { payload }) => {
  //     state.goodPriceInfo = payload
  //   }
  // }
})

//todo：注意这个导出
export const { changeGoodPriceInfoAction, changeHighScoreInfoAction } =
  homeSlice.actions

export default homeSlice.reducer
