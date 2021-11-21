import React, { useState } from 'react';

const ItemCount = ({ stock }) => {
    const [number, setNumber] = useState(0);

    const add = () => {
        number !== stock && setNumber(number + 1);
    };

    const substract = () => {
        number !== 0 && setNumber(number - 1);
    };

    return (
      <aside className="block">
        <div>
          <h2>Contador</h2>
          <p>{number}</p>
          <button onClick={add}>+</button>
          <button onClick={substract}>-</button>
        </div>
      </aside>

    );
};

export default ItemCount;