import React from 'react'
import tulips from './img/Tulips.jpg'
import './css/header.css'

export default class Header extends React.Component {
  render () {
    return (

      <header className="text-center d-flex justify-content-around">
        <h3 className="gameTitle">
          <img id="logo" src={tulips} alt="tulip"/>
          Mildly Adventurous
        </h3>
      </header>
    )
  }
}
