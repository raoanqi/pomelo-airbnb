import styled from 'styled-components'
// 使用图片时，先导入，不要直接写路径，否则无法识别
import homeBannerImg from '@/assets/img/home_banner.png'

const HomeBannerWrapper = styled.div`
  height: 530px;
  background: url(${homeBannerImg}) center/cover no-repeat;
`

export default HomeBannerWrapper
