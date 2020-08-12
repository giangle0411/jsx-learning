import React, { useState } from 'react'
// import Accordion from './components/Accordion'
// import Search from './components/Search'
import Dropdown from './components/Dropdown'

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a front end javascript framework',
//   },
//   {
//     title: 'Why are we using React?',
//     content: 'React is a popular JS library and widely used',
//   },
//   {
//     title: 'How do you use React?',
//     content: 'You use React by creating components',
//   },
// ]

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
]

export default () => {
  const [selected, setSelected] = useState(options[0])
  const [showDropdown, setShowDropdown] = useState(true)

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
      {/* <Search /> */}
      {/* <Accordion items={items} /> */}
    </div>
  )
}
