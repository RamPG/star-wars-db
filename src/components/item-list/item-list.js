import React from 'react';

import './item-list.css';

const ItemList = (props) => {
    const {data} = props;
    const items = data.map((item) => {
        return (
            <li
                onClick={() => props.changeItemId(item.id)}
                key={item.id}
                className="list-group-item"
            >
                {item.name}
            </li>
        )
    })
    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

export default ItemList;