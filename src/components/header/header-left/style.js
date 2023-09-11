import styled from 'styled-components'

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  // 控制logo的颜色，因为是函数式组件，这里既可以使用props
  color: ${props => props.theme.color.primaryColor};
  font-weight: 600;
}

;
//仅logo区域hover时鼠标是手型
.logo {
  margin: 20px;
  cursor: pointer;
}
`
