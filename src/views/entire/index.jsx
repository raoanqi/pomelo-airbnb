import React, { memo } from 'react'
import { EntireWrapper } from '@/views/entire/style'

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <div className={'filter'}>filter-section</div>
      <div className={'rooms'}>rooms-section</div>
      <div className={'pagination'}>pagination-section</div>
    </EntireWrapper>
  )
})

export default Entire
