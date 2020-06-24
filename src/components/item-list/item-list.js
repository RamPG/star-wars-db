import React from 'react';

import './item-list.css';
import Spinner from "../spinner";

export default class ItemList extends React.Component {
    state = {
        itemList: null,
    }

    componentDidMount() {
        this.props.getData()
            .then((itemList) => {
                this.setState({itemList: itemList})
            })
    }

    renderItems(itemList) {
        return itemList.map((item) => {
            return (
                <li
                    onClick={() => this.props.changeItemId(item.id)}
                    key={item.id}
                    className="list-group-item"
                >
                    {item.name}
                </li>
            )
        })
    }

    render() {
        const {itemList} = this.state;
        if (itemList === null)
            return <Spinner/>
        const items = this.renderItems(itemList)
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}