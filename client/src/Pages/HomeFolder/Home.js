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

      <section className="home">
        <h1> Welcome to the Adventures of the Mildly Adventurous Traveler! </h1>
        <h2 className="intro"> {"So what is this exactly? This is a choose your own text adventure game (At least for now), where you can do as much as you can do, maybe, possibly. Just see how far you can go, the goal is to get back home,where the heart is. You'll be starting from home though..."}
        </h2>

        <nav className="newGame d-flex justify-content-around">
          <h3>{"Haven't gone anywhere"}</h3>
          <h3>Continue</h3>
          <h3>The Story so far...</h3>
        </nav>
      </section>

    )
  }
}
