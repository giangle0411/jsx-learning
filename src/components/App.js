import React from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class App extends React.Component {
  state = { language: 'english' }

  onLangChange = (language) => {
    this.setState({ language })
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLangChange('english')} />
          <i className="flag vn" onClick={() => this.onLangChange('vietnam')} />
        </div>
        <ColorContext.Provider value="purple">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    )
  }
}

export default App
