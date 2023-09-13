const theme = {
  // 主题颜色
  color: {
    primaryColor: '#ff385c',
    secondaryColor: '#00848a'
  },
  // 文本属性
  text: {
    primaryColor: '#4848484',
    secondaryColor: '#222222'
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 0.2s ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,0.18);
      }
    `
  }
}

export default theme
