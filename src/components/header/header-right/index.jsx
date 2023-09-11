import React, { memo } from 'react'
import { RightWrapper } from '@/components/header/header-right/style'
import IconGlobal from '@/aeests/svg/icon_global'
import IconMenu from '@/aeests/svg/icon_menu'
import IconAvatar from '@/aeests/svg/icon_avatar'

const HeaderRight = memo(() => {
  return (
    <RightWrapper>
      <div className={'btns'}>
        <span className={'btn'}>登录</span>
        <span className={'btn'}>注册</span>
        <span className={'btn'}>
          <IconGlobal></IconGlobal>
        </span>
      </div>
      <div className={'profile'}>
        <IconMenu></IconMenu>
        <IconAvatar></IconAvatar>
        <div className="panel">
          <div className="top">
            <div className="item register">注册</div>
            <div className="item login">登录</div>
          </div>
          <div className="bottom">
            <div className="item">出租房源</div>
            <div className="item">开展体验</div>
            <div className="item">帮助</div>
          </div>
        </div>
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
