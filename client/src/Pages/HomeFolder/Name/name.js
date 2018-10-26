import React from 'react'
export default class Name extends React.Component {
  render () {
    return (
      <section className="name">
        Routes Yo

        <h1><button onClick={() => console.log(this.props.history)}> Back</button></h1>

      </section>
    )
  }
}
