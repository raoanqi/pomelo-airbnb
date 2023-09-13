import styled from 'styled-components'

const HomeWrapper = styled.div`
  // div的直接子元素才会应用到这个content类的样式，防止后续还有嵌套元素也有content类
  > .content {
    width: 1032px;
    margin: 0 auto;
  }

  .good-price {
    margin-top: 30px;
  }
`
export default HomeWrapper
