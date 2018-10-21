import React from 'react'
import './home.css'

export default class Home extends React.Component {
  componentDidMount () {
    document.title = 'Mildly Adventurous'
  }

  state = {}
  // document.title = "mildlyAdventurous";
  render () {
    return (

      <div className="home">
        <h1> Welcome to the Adventures of the Mildly Adventurous Traveler! </h1>
        <h2 className="lol"> So what is this exactly? This is a choose your own text adventure game (At least for now), where you can do as much as you can do, maybe, possibly. Just see how far you can go, the goal is to get back home,where the heart is. You'll be starting from home though
        </h2>
      </div>

    )
  }
}
