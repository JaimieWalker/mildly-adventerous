import React from 'react'
import tulips from './img/Tulips.jpg'
import './css/header.css'

export default class Header extends React.Component {
  render () {
    return (
      <div className="title">
        <header className="gameTitle text-center d-flex justify-content-around">
          <img id="logo" src={tulips} alt="tulip"/>
          <h1>Mildly Adventurous</h1>
        </header>
      </div>
    )
  }
}
