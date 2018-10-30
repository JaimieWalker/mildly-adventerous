import React from 'react'
import Home from './Pages/HomeFolder/Home'
import Header from './HeaderFolder/Header'
import Footer from './FooterFolder/Footer'
import { Route } from 'react-router-dom'

import './App.css'
import NewGame from './Pages/HomeFolder/NewGame/NewGame'

class App extends React.Component {
  componentDidMount () {
    document.title = 'Mildly Adventurous'
  }

  render () {
    return (
      <div className="App">
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/NewGame" component={NewGame} />
        <hr/>
        <Footer />
      </div>
    )
  }
}

export default App
