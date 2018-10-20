import React from 'react'
import tulips from './img/Tulips.jpg'
import './css/header.css'

export default class Header extends React.Component {
  render () {
    return (
      <div>
        <header className ="gameTitle text-center">
          <img id="logo" src={tulips} alt="tulip"/>
          <h1>Mildly Adventurous</h1>
        </header>
      </div>
    )
  }
}
