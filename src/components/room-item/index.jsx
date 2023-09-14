import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { ItemWrapper } from '@/components/room-item/style'
// import Rating from '@mui/material/Rating'

const RoomItem = memo(props => {
  const { itemData } = props
  return (
    <ItemWrapper verifyColor={itemData?.verify_info?.text_color || '#39576a'}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt={'图片地址'} />
        </div>
        <div className="desc">{itemData.verify_info.messages.join(' · ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>

        <div className="bottom">
          {/*使用mui组件库暂时存在问题*/}
          {/*<Rating*/}
          {/*  value={itemData.star_rating ?? 5}*/}
          {/*  precision={0.1}*/}
          {/*  readOnly*/}
          {/*  sx={{ fontSize: '12px', color: '#00848A', marginRight: '-1px' }}*/}
          {/*/>*/}
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem
