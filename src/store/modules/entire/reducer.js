/**
 * entire模块的reducer
 */

import * as actionTypes from './constants'

const initialState = {
  // 当前页码
  currentPage: 0,
  // 列表数据
  roomList: [],
  // 总数
  totalCount: 0,
  // 是否正在加载
  isLoading: false
}

// action负责更新state
function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case actionTypes.CHANGE_ROOM_LIST:
      return {...state, roomList: action.roomList}
    case actionTypes.CHANGE_TOTAL_COUNT:
      return {...state, totalCount: action.totalCount}
    case actionTypes.CHANGE_IS_LOADING:
      return {...state, isLoading: action.isLoading}
    default:
        return state
  }
}

export default reducer