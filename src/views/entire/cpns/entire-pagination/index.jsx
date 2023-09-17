import React, { memo } from 'react'
import { PaginationWrapper } from '@/views/entire/cpns/entire-pagination/style'
import { Pagination } from 'antd'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'

const EntirePagination = memo(() => {
  /**
   * 获取指定的数据
   */
  const { totalCount, currentPage, roomList } = useSelector(
    state => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList
    }),
    shallowEqual
  )

  // 计算分页参数
  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  /**
   *
   */
  const dispatch = useDispatch()

  function pageChangeHandle(event, pageCount) {
    window.scrollTo(0, 0)
    dispatch(fetchRoomListAction(pageCount - 1))
  }

  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={pageChangeHandle} />
          <div className={'desc'}>
            第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
          </div>
        </div>
      )}
    </PaginationWrapper>
  )
})

export default EntirePagination
