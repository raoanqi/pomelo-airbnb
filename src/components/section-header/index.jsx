import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper } from './style'

const SectionHeader = memo(props => {
  const { title, subTitle } = props
  return (
    <HeaderWrapper>
      <h2 className={'title'}>{title}</h2>
      {/*副标题存在则显示副标题*/}
      {subTitle && <div className={'subTitle'}>{subTitle}</div>}
    </HeaderWrapper>
  )
})

// 对传入的title以及subTitle进行类型检查
SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export default SectionHeader
