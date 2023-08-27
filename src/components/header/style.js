/**
 * 使用styled-components来写样式，会自动处理成js，因此这里是js文件
 * 使用方法：
 * 引入styled
 * 调用styled.标签名`样式`
 * 向外暴露
 */

import styled from "styled-components";

export const HeaderWrapper = styled.div`
  // flex布局
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #eee;
  // 在header中，为了让中间的搜索框居中，将left，right分别设置flex：1，让中间的搜索框自动居中
`