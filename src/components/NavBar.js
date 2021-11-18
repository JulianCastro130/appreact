import React from 'react';

export default function NavBar(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Fitz Roy Commerce</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
        <i class="fas fa-shopping-cart"></i>{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
      </div>
    </header>
  );
}
