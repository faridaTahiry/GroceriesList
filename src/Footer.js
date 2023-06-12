import React from 'react'

const Footer = ({length}) => {
    var today = new Date();


  return (
    <footer>
        <p>{length} List {length === 1? "item": "items"}</p>
    </footer>
  )
}

export default Footer