//Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

// Create a react component

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { lat: null }

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude })
      },
      (err) => console.log(err)
    )
  }

  render() {
    return <div>Latitude: {this.state.lat} </div>
  }
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'))
