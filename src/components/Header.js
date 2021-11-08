import React from 'react';

export default function Header(props) {
    return(
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Mi primer app con react (carrito de compras)</h1>
                </a>
            </div>
            <div>
                <a href="#/">Carrito</a> <a href="#/">Iniciar Sesión</a>
            </div>
        </header>
    );
}