import NavBar from './components/NavBar';
import Main from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import data from './data';
import { useState } from 'react';
function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <NavBar countCartItems={cartItems.length}></NavBar>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <ItemCount
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></ItemCount>
      </div>
    </div>
  );
}

export default App;
