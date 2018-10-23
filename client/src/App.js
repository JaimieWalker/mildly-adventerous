import React from 'react'
import Home from './Pages/HomeFolder/Home'
import Header from './HeaderFolder/Header'
import Footer from './FooterFolder/Footer'

import './App.css'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header />
        <hr/>
        <Home />
        <hr/>
        <Footer />
      </div>
    )
  }
}

export default App
