import airbnbRequest from '@/services'

export const getEntireRoomList = (offset = 0, size = 20) => {
  return airbnbRequest.get({
    url: 'entire/list',
    params: {
      offset,
      size
    }
  })
}