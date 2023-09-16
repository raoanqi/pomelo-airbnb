import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import UtilsSet from '@/utils'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeWrapper from '@/views/home/style'
import HomeBanner from '@/views/home/cpns/home-banner'
import HomeSectionV1 from '@/views/home/cpns/home-section-v1'
import HomeSectionV2 from '@/views/home/cpns/home-section-v2'
import HomeSectionV3 from '@/views/home/cpns/home-section-v3'
import HomeLongfor from '@/views/home/cpns/home-longfor'

const Home = memo(() => {
  /**
   * useSelector: 是一个hook，用户从redux中取出指定的数据，这里取出了state的home模块中的goodPriceInfo数据
   * shallowEqual: 进行浅层对比，如果数据变化了，就会重新渲染组件，如果数据没有变化，就不会重新渲染组件
   */
  const { goodPriceInfo, highScoreInfo, discountInfo, longforInfo, plusInfo } =
    useSelector(
      state => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        longforInfo: state.home.longforInfo,
        plusInfo: state.home.plusInfo
      }),
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
        {/*折扣房源展示区域*/}
        {UtilsSet.isEmptyObject(discountInfo) && (
          <HomeSectionV2 infoData={discountInfo} />
        )}
        {/*长租房源展示区域*/}
        {UtilsSet.isEmptyObject(longforInfo) && (
          <HomeLongfor infoData={longforInfo} />
        )}
        {/*高性价比展示区域*/}
        {UtilsSet.isEmptyObject(goodPriceInfo) && (
          <HomeSectionV1 infoData={goodPriceInfo} />
        )}
        {/*高评分展示区域*/}
        {UtilsSet.isEmptyObject(highScoreInfo) && (
          <HomeSectionV1 infoData={highScoreInfo} />
        )}
        {/*plus房源展示区域*/}
        {UtilsSet.isEmptyObject(plusInfo) && (
          <HomeSectionV3 infoData={plusInfo} />
        )}
      </div>
    </HomeWrapper>
  )
})

export default Home
