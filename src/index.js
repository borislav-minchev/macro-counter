import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'

document.addEventListener('contextmenu', event => event.preventDefault())
ReactDOM.render(<App />, document.getElementById('root'))