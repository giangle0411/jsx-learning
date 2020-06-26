import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

export default class Button extends Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Tiếp tục'
  }
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) => this.renderSubmit(value)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    )
  }
}
