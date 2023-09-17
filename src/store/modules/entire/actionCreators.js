import { getEntireRoomList } from '@/services/modules/entire'
import * as actionTypes from './constants'

export const changeCurrentPageAction = currentPage => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = roomList => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = totalCount => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = isLoading => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

export const fetchRoomListAction = (page = 0) => {
  return async dispatch => {
    // 修改currentPage
    dispatch(changeCurrentPageAction(page))
    // 根据页码获取最新的数据
    dispatch(changeIsLoadingAction(true))
    // 获取数据
    const res = await getEntireRoomList(page * 20)
    // 获取到最新的数据, 保存redux的store中
    dispatch(changeIsLoadingAction(false))
    // 获取列表数据
    const roomList = res.list
    // 获取总数数据
    const totalCount = res.totalCount
    // 保存列表数据
    dispatch(changeRoomListAction(roomList))
    // 保存总数数据
    dispatch(changeTotalCountAction(totalCount))
  }
}
