import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeLongforData,
  getHomePlusData
} from '@/services/modules/home'

export const fetchHomeDataAction = createAsyncThunk(
  'fetchHomeData',
  // 这里可以写多个action，考虑到都是home页面的数据，所以就放在一个action中进行实现
  /**
   * 这里可以使用多个await获取数据，但是因为await会阻塞后面的代码，所以不使用
   * 也可以考虑使用Promise.all()，但是这样的话，如果其中一个请求失败，那么整个请求都会失败
   * 因为各种数据之间没有依赖关系，所以直接使用多个then()分别获取数据，这样既不会阻塞后面的代码，也不会因为其中一个请求失败而导致整个请求失败
   */
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then(res => {
      dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then(res => {
      dispatch(changeHighScoreInfoAction(res))
    })
    getHomeDiscountData().then(res => {
      dispatch(changeDiscountInfoAction(res))
    })
    getHomeLongforData().then(res => {
      dispatch(changeLongforInfoAction(res))
    })
    getHomePlusData().then(res => {
      dispatch(changePlusInfoAction(res))
    })
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    // 高性价比房源数据
    goodPriceInfo: {},
    // 高评分房源数据
    highScoreInfo: {},
    // 折扣房源数据
    discountInfo: {},
    // 长租房源数据
    longforInfo: {},
    // Plus房源数据
    plusInfo: {}
  },
  reducers: {
    // 设置高性价比房源数据
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    // 设置高评分房源数据
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    // 设置折扣房源数据
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    // 设置长租房源数据
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    // 设置Plus房源数据
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  }
})

//todo：注意这个导出
export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction
} = homeSlice.actions

export default homeSlice.reducer
