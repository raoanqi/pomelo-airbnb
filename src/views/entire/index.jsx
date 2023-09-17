import React, { memo, useEffect } from 'react'
import { EntireWrapper } from '@/views/entire/style'
import { useDispatch } from 'react-redux'
import EntireFilter from '@/views/entire/cpns/entire-filter'
import EntireRooms from '@/views/entire/cpns/entire-rooms'
import EntirePagination from '@/views/entire/cpns/entire-pagination'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
  })
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire
