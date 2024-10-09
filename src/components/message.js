import React, { Component } from 'react'

export class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: "Welcome!!"
        }
        // this.changeMsg = this.changeMsg.bind(this)
    }
    
    // changeMsg(){
    //     this.setState({
    //         message: "Thank You!!"
    //     })
    // console.log(this)
    // }
    
    changeMsg = () => {
      this.setState({
        message: "Thank you for Visting CSPIT"
      })
      console.log(this)
    }

    render() {
    return (
      <div>
        {/* <button onClick={this.changeMsg.bind(this)}>Click</button><br></br> */}
        {/* <button onClick={ () => this.changeMsg()}>Clickme</button> */}
        <button onClick={this.changeMsg}>Click Me</button>
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}

export default Message