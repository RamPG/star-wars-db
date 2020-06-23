import React from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends React.Component {
    swapiService = new SwapiService();
    state = {
        peopleList: null,
    }

    componentDidMount() {
        this.swapiService.getAllPeople()
            .then((list) => {
                this.setState({peopleList: list})
            })
    }

    renderItems(peopleList) {
        return peopleList.map((item) => {
            return (
                <li
                    onClick={() => this.props.changePersonId(item.id)}
                    key={item.id}
                    className="list-group-item"
                >
                    {item.name}
                </li>
            )
        })
    }

    render() {
        const {peopleList} = this.state;
        if (peopleList === null)
            return <Spinner/>
        const items = this.renderItems(peopleList)
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}