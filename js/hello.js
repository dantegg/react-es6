import React from 'react'

let Hello = React.createClass({
  render(){
    return (
      <div>
      <h1>来自hellojs的helloworld</h1>
        {this.props.children}
      </div>
    )
  }
})

export default Hello;
