import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));

  const [newItem,setNewItem] = useState("")

  const [search,setSearch] = useState('')

  const setAndSaveItems = (listItems) =>{
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length -1].id +1 : 1;
    const newObj = {id:id, checked:false,item:item}
    const listItems = [...items,newObj];
    setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} :item);
    setAndSaveItems(listItems);
  }
    
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id != id)
    setAndSaveItems(listItems);
  }
  return (
    <div className="App">
      <Header title = "Groceries"/>
      <AddItem 
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
      />
      <SearchItem 
        search= {search}
        setSearch = {setSearch}
      />
      
      <Content 
        items={items.filter(item => ((item.item).toLowerCase().includes(search.toLowerCase())))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer 
        length ={items.length}
      />
    </div>
  );
}

export default App;
