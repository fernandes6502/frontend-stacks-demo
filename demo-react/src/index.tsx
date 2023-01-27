import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App clockConfigs={[
      { title: 'Germany', offset: 0 },
      { title: 'Brazil', offset: -4 },
      { title: 'Russia', offset: 2 },
      { title: 'Canada', offset: -6 },
      { title: 'Spain', offset: 0 },
      { title: 'Japan', offset: 8 }
    ]} />
  </React.StrictMode>
)