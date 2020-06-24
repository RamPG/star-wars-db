import React from 'react';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorButton from "../error-button";
import './item-details.css';
import ErrorMessage from "../error-message";

export default class ItemDetails extends React.Component {
    swapiService = new SwapiService();
    state = {
        item: null,
        loading: true
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedItemId !== this.props.selectedItemId)
            this.updateItem();
    }

    updateItem() {
        this.setState({
            loading: true,
            hasError: false
        })
        this.swapiService.getPerson(this.props.selectedItemId)
            .then((item) => this.setState(
                {
                    item: item,
                    loading: false
                }
            ))
            .catch(() => this.setState(
                {
                    hasError: true
                }
            ))
    }

    render() {
        if (this.state.loading === true)
            return (
                <Spinner/>
            )
        const {id, name, gender, birthYear, eyeColor} = this.state.item;
        return (
            <div className="person-details card">
                <img className="person-image"
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
                <ErrorButton/>
            </div>
        )
    }
}
