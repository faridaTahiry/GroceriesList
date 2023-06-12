import React from 'react'

const Header = (props) => {
    const headerStyle = {
        backgroundColor: 'mediumaquamarine',
        color: '#fff'
    }
  return (
    <header style={headerStyle}>
        <h1>
            {props.title}
        </h1>
    </header>
  )
}

export default Header