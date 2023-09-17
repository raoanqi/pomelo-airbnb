import React, { memo, useCallback } from 'react'
import { RoomsWrapper } from './style'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo(() => {
  /**
   * 从redux中获取需要的数据
   */
  const { roomList, totalCount, isLoading } = useSelector(
    state => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading
    }),
    shallowEqual
  )

  const navigate = useNavigate()
  const dispatch = useDispatch()
  // 点击每个房间时，跳转到对应的详情页面
  const itemClickHandle = useCallback(
    item => {
      dispatch(changeDetailInfoAction(item))
      navigate('/detail')
    },
    [navigate, dispatch]
  )

  return (
    <RoomsWrapper>
      <h2 className={'title'}>{`${totalCount}多处住所`}</h2>
      <div className={'list'}>
        {roomList.map(item => (
          <RoomItem
            itemData={item}
            itemWidth={'20%'}
            key={item._id}
            itemClick={itemClickHandle}
          ></RoomItem>
        ))}
      </div>
      {isLoading && <div className={'cover'}></div>}
    </RoomsWrapper>
  )
})

export default EntireRooms
