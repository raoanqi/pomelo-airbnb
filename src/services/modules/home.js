import airbnbRequest from '@/services'

export const getHomeGoodPriceData = () =>
  airbnbRequest.get({
    url: '/home/goodPrice'
  })
