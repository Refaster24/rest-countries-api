import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import { Provider } from 'react-redux'
import { store } from '../store/store.jsx'
import '../style/index.css'

// console.log(store.getState())
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
