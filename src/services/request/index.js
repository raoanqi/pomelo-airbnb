import axios from 'axios'
import { BASE_URL, TIMEOUT } from '@/services/request/config'

// 封装axios类
class AirbnbRequest {
  // axios构造器，配置响应拦截器
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.response.use(
      res => res.data,
      err => err
    )
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: 'get' })
  }

  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

// 向外导出一个axios实例
const airbnbRequest = new AirbnbRequest(BASE_URL, TIMEOUT)
export default airbnbRequest
