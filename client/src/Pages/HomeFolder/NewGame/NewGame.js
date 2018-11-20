import React from 'react'
import './NewGame.css'
export default class NewGame extends React.Component {
  render () {
    return (
      <section className="explanation">
        <p>{"So This is going to be a bit different from all the other games you've played before. In that you will start with just a name, that is the only option you have. Your choices throughout the story will shape, who you are, what you are, what you can even do or even ..... other people. If you didn't mean to come here, you can press the back button"}</p>
        

        <h2 id="back" className="text-center"><button onClick={() => this.props.history.goBack()}> Back</button></h2>
      </section>
    )
  }
}
