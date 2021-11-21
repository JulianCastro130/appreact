import React from 'react';
import Item from './Item';
import ItemCount from './ItemCount';

const ItemList = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <div>
                    <Item key={item.id} item={item}></Item>
                    <ItemCount></ItemCount>
                </div>
            ))}
        </>
    );
};

export default ItemList;
