import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { products } from './items';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const traerProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        traerProductos
            .then((res) => {
                setItems(res);
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className="block col-1">
            <h1>{saludo}</h1>
            <ItemList className="itemList" items={items} />
            </div>
        </>
    );
};

export default ItemListContainer;
