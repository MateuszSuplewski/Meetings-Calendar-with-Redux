import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { createStore } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import { Reset } from 'styled-reset'
import { Normalize } from 'styled-normalize'
import { ThemeProvider } from 'styled-components'
import themeSettings from './theme'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <>
  <Reset />
  <Normalize />
  <Provider store={store}>
    <ThemeProvider theme={themeSettings}>
      <App />
    </ThemeProvider>
  </Provider>
  </>,
  document.querySelector('#root')
)
