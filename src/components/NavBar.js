import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const categories = [
    { id: 'asfadd', address: '/', text: 'TODOS LOS PRODUCTOS' },
    { id: '123asf', address: '/category/shoes', text: 'Shoes' },
    { id: 'sgs3q3', address: '/category/ropes', text: 'Ropes' },
    { id: 'gkl98s', address: '/category/expres', text: 'Expres' },
    { id: 'sado41', address: '/category/harness', text: 'Harness' },
  ];

  return (
    <section style={{ background: 'lightgray' }}>
      {categories.map((cat) => {
        return (
          <div className="links" key={cat.id}>
            <NavLink
              to={cat.address}
              className={({ isActive }) => (isActive ? 'activeClass' : '')}
            >
              {cat.text}
            </NavLink>
            {}
          </div>
        );
      })}
    </section>
  );
};
