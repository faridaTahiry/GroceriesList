import React from 'react'
import ItemList from './ItemList';

const Content = ({items,handleCheck,handleDelete}) => {
  



  return (
    <main>
      {items.length ? (
        <ItemList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
        />
          ) :(
            <p style={{marginTop: '2rem'}}>Your Shoppinglist is empty.</p>
          )}

    </main>
  )
}

export default Content

// buttons 

// const handleNameChange = () => {
    //     const names = ['huria', 'nooria', 'Gerya']
    //     const int = Math.floor(Math.random()* names.length);
    //     setName(names[int]);
    //   };

    //   const handleClick = () => {
    //     console.log('You Clicked it');
    //   }
    //   const handleClick2 = (name) => {
    //     console.log(`${name} was clicked`);
    //   }
    //   const handleClick3 = (e) => {
    //     console.log(e.target.innerText);
    //   }

    {/* <p onDoubleClick={handleClick}>
          Hello {name}!
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={() => handleClick2('farida')}>Click It</button>
        <button onClick={(e) => handleClick3(e)}>Click It</button> */}