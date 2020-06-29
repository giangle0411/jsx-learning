//Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
import useLocation from './useLocation'
// Create a react component
const App = () => {
  const [lat, errorMessage] = useLocation()

  let content
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />
  } else {
    content = <Spinner message="Please allow location request!" />
  }
  return <div className="border red">{content}</div>
}

// class App extends React.Component {
//   state = { lat: null, errorMessage: '' }

//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       (position) => {
//         this.setState({ lat: position.coords.latitude })
//       },
//       (err) => {
//         this.setState({ errorMessage: err.message })
//       }
//     )
//   }

//   componentDidUpdate() {
//     console.log('My component was just updated - it rerendered!')
//   }

//   renderContent() {
//     if (this.state.errorMessage && !this.state.lat) {
//       return <div> Error: {this.state.errorMessage}</div>
//     }
//     if (!this.state.errorMessage && this.state.lat) {
//       return (
//         <div>
//           <SeasonDisplay lat={this.state.lat} />
//         </div>
//       )
//     }
//     return (
//       <div>
//         <Spinner message="Please allow location request!" />
//       </div>
//     )
//   }

//   render() {
//     return <div className="border red">{this.renderContent()}</div>
//   }
// }

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'))
