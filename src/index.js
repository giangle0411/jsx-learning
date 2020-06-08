//Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetails'
import ApprovalCard from './ApprovalCard'
import faker from 'faker'

// Create a react component
const App = () => {
  const buttonText = { text: 'Click me!' }
  const labelText = 'Enter name:'

  return (
    <div className="ui container comments">
      <div className="nameInput">
        <label className="label" htmlFor="name">
          {labelText}
        </label>
        <input id="name" type="text" />
        <button style={{ backgroundColor: 'blue', color: 'white' }}>
          {buttonText.text}
        </button>
      </div>
      <div className="ui container comments">
        <ApprovalCard>
          <div>
            <h4>Warning!</h4>
            Are you sure you want to continue?
          </div>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            name={faker.name.firstName()}
            img={faker.image.avatar()}
            timeAgo="Today at 4:30PM"
            content="Nice blog post!"
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            name={faker.name.firstName()}
            img={faker.image.avatar()}
            timeAgo="Today at 8:20AM"
            content="Useful information!"
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            name={faker.name.firstName()}
            img={faker.image.avatar()}
            timeAgo="Yesterday at 6:15PM"
            content="Nice formatting."
          />
        </ApprovalCard>
      </div>
    </div>
  )
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'))
