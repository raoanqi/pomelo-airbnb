import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '@/App'

import 'normalize.css'
import '@/aeests/css/index.less'
import store from '@/store'

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
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
)
