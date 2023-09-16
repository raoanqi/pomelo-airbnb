import airbnbRequest from '@/services'

// 获取高性价比数据
export const getHomeGoodPriceData = () => {
  return airbnbRequest.get({
    url: '/home/goodPrice'
  })
}

// 获取高评分数据
export const getHomeHighScoreData = () => {
  return airbnbRequest.get({
    url: '/home/highScore'
  })
}

// 获取折扣数据
export const getHomeDiscountData = () => {
  return airbnbRequest.get({
    url: '/home/discount'
  })
}

// 获取热门推荐数据
export const getHomeHotRecommendData = () => {
  return airbnbRequest.get({
    url: '/home/hotRecommend'
  })
}

// 获取长租房源数据
export const getHomeLongforData = () => {
  return airbnbRequest.get({
    url: '/home/longfor'
  })
}

// 获取Plus房源数据
export const getHomePlusData = () => {
  return airbnbRequest.get({
    url: '/home/plus'
  })
}
