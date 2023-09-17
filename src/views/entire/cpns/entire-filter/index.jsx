import React, { memo, useState } from 'react'
import { FilterWrapper } from '@/views/entire/cpns/entire-filter/style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([])

  // 点击某个具体项时的回调
  function itemClickHandle(item) {
    // 初始时为空
    const newItems = [...selectItems]
    // 如果被点击的项已经在数组中, 那么点击之后就应该移除
    if (newItems.includes(item)) {
      const itemIndex = newItems.findIndex(ele => ele === item)
      newItems.splice(itemIndex, 1)
    } else {
      // 如果被点击的项不在数组中, 那么点击之后就应该添加
      newItems.push(item)
    }
    setSelectItems(newItems)
  }

  return (
    <FilterWrapper>
      <div className={'filter'}>
        {filterData.map(item => (
          // 注意这个classNames库的作用
          <div
            className={classNames('item', {
              active: selectItems.includes(item)
            })}
            key={item}
            onClick={e => itemClickHandle(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter
