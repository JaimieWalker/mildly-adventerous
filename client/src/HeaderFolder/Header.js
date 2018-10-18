import React from 'react'
import tulips from './img/Tulips.jpg'
import './css/header.css'

export default class Header extends React.Component {
  render () {
    return (
      <div>
        <header>
          <img id="logo" src={tulips} alt="tulip"/>
          <nav>
            <a href="#">Start Adventure</a>
          </nav>
        </header>
      </div>
    )
  }
}
