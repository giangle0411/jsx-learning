import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'

export default class LanguageSelector extends Component {
  static contextType = LanguageContext

  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLangChange('english')}
        />
        <i
          className="flag vn"
          onClick={() => this.context.onLangChange('vietnam')}
        />
      </div>
    )
  }
}
