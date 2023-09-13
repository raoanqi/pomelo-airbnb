import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import HomeWrapper from '@/views/home/style'
import HomeBanner from '@/views/home/cpns/home-banner'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'

const Home = memo(() => {
  /**
   * useSelector: 是一个hook，用户从redux中取出指定的数据，这里取出了state的home模块中的goodPriceInfo数据
   * shallowEqual: 进行浅层对比，如果数据变化了，就会重新渲染组件，如果数据没有变化，就不会重新渲染组件
   */
  const { goodPriceInfo } = useSelector(
    state => ({ goodPriceInfo: state.home.goodPriceInfo }),
    shallowEqual
  )
  /**
   * @type {Dispatch<AnyAction>}
   * useDispatch: 是一个hook，用于派发异步事件，作用是可以从store中取出dispatch方法，
   * 取出dispatch方法后，就可以使用dispatch方法去调用action派发异步事件
   */
  const dispatch = useDispatch()
  /**
   * useEffect是一个Hook，它可以让你在组件渲染后执行副作用。
   * 副作用是指与组件渲染无关的操作，例如网络请求、定时器等,
   * 这里的副作用是：发送网络请求
   * 组件渲染之后，就会执行useEffect中的回调函数
   */
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])
  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className={'content'}>
        <div className={'good-price'}>
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <ul>
            {goodPriceInfo.list.map(item => (
              <RoomItem item={item} key={item.id}></RoomItem>
            ))}
          </ul>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
