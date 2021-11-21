import React from 'react';

export default function NavBary(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Fitz Roy Commerce</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
        <i class="fas fa-shopping-cart"></i></a>
      </div>
    </header>
  );
}
