import React from 'react'
export default class NewGame extends React.Component {
  render () {
    return (
      <section className="name">
        <p>{"So This is going to be a bit different from all the other games you've played before. In that you will start with just a name, that is the only option you have. Your choices throughout the story will shape, who you are, what you are, what you can even do or even ..... other people"}</p>



        
        
        <h1><button onClick={() => this.props.history.goBack()}> Back</button></h1>
      </section>
    )
  }
}
