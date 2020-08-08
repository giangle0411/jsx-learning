import React from 'react'
import Accordion from './components/Accordion'

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why are we using React?',
    content: 'React is a popular JS library and widely used',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
]

export default () => {
  return (
    <div>
      <br />
      <Accordion items={items} />
    </div>
  )
}
