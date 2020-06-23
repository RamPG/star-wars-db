import React from 'react';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import './person-details.css';

export default class PersonDetails extends React.Component {
    swapiService = new SwapiService();
    state = {
        person: null,
        loading: true
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedPersonId !== this.props.selectedPersonId)
            this.updatePerson();
    }

    updatePerson() {
        this.setState({
            loading: true
        })
        this.swapiService.getPerson(this.props.selectedPersonId)
            .then((person) => this.setState(
                {
                    person: person,
                    loading: false
                }
            ))
    }

    render() {
        if (this.state.loading === true)
            return (
                <Spinner/>
            )
        const {id, name, gender, birthYear, eyeColor} = this.state.person;
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
            </div>
        )
    }
}
