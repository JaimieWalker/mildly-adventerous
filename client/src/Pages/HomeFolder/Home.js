import React from 'react'

export default class Home extends React.Component {
  componentDidMount () {
    document.title = 'Mildly Adventerous'
  }

  // document.title = "mildlyadventerous";
  render () {
    return (

      <div>
        <h1> Welcome to the Adventures of the mildly adventeruous traveler! </h1>
        <h2 className="lol"> Also known as </h2>
      </div>

    )
  }
}
