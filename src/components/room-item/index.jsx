import React, { memo } from 'react'
import PropTypes from 'prop-types'

const RoomItem = memo(props => {
  const { itemData } = props
  return <div>{itemData.name }</div>
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem
