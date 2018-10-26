import React from 'react'
import Home from './Pages/HomeFolder/Home'
import Header from './HeaderFolder/Header'
import Footer from './FooterFolder/Footer'
import { Route } from 'react-router-dom'

import './App.css'
import Name from './Pages/HomeFolder/Name/name'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/name" component={Name} />
        <Footer />
      </div>
    )
  }
}

export default App
