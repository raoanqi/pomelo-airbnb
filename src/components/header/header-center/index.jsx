import React, { memo } from 'react'
import { CenterWrapper } from '@/components/header/header-center/style'
import IconSearch from '@/assets/svg/icon_search'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className={'search-bar'}>
        <div className={'text'}>搜索房源和体验</div>
        <span className={'icon'}>
          <IconSearch></IconSearch>
        </span>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter
