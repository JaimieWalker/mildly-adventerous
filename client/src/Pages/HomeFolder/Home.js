import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  componentDidMount () {
    document.title = 'Mildly Adventurous'
  }

  render () {
    return (

      <section className="home">
        <h1> Welcome to the Adventures of the Mildly Adventurous Traveler! </h1>
        <h3 className="intro"> {"So what is this exactly? This is a choose your own text adventure game (At least for now), where you can do as much as you can do, maybe, possibly. Just see how far you can go, the goal is to get back home,where the heart is. You'll be starting from home though..."}
        </h3>

        <nav className="newGame d-flex justify-content-around">
          <Link to="/NewGame"><button><h4>{'Feeling Adventurous?'}</h4></button></Link>
          <button><h4>Continue</h4></button>
          <button><h4>The Story so far...</h4></button>
        </nav>
      </section>

    )
  }
}

export default Home
