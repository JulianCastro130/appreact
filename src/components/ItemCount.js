import React from 'react';

export default function ItemCount(props) {
  const { cartItems, onAdd, onRemove } = props;
  return (
    <aside className="block col-1">
      <h2>Productos en el carrito</h2>
      <div>
        {cartItems.length === 0 && <div>Carrito vacío</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}