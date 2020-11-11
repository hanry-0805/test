import React from 'react'

// 创建React上下文
const ThemeContext = React.createContext()

const themes = {
  light: {
    color: '#000000',
    background: '#eeeeee',
  },
  dark: {
    color: '#ffffff',
    background: '#222222',
  }
}


export {
  themes
}

// 任何一个ES6模块中，最多只能有一个export default
export default ThemeContext
