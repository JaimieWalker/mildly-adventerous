import React from 'react'
import Home from './Pages/HomeFolder/Home'
import Header from './HeaderFolder/Header'

import './App.css'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    )
  }
}

export default App
