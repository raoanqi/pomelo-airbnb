import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '@/App'

import 'normalize.css'
import '@/assets/css/index.less'
import store from '@/store'
// 在项目中使用定义的主题
import { ThemeProvider } from 'styled-components'
import theme from '@/assets/theme'

/**
 *
 * @type {Root}
 * suspense: 因为路由使用的是异步加载，因此在实际加载时需要一定时间，用suspense包裹会更为稳妥
 */
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    {/*组件没有加载完毕时，使用loading效果*/}
    <Suspense fallback={'loading'}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>
)
