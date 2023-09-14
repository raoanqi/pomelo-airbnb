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
