import React from 'react'
import tulips from './img/Tulips.jpg'
import './css/header.css'

export default class Header extends React.Component {
  render () {
    return (

      <header className="gameTitle text-center d-flex justify-content-around">
        <h1>
          <img id="logo" src={tulips} alt="tulip"/>
          Mildly Adventurous
        </h1>
      </header>
    )
  }
}
