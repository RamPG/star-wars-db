import React from 'react';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import './random-planet.css';
import ErrorMessage from "../error-message";
import ErrorBoundry from "../error-boundry";
import ErrorButton from "../error-button";

export default class RandomPlanet extends React.Component {
    swapiService = new SwapiService();

    state = {
        planet: {
            id: 10,
            name: null,
            population: null,
            rotationPeriod: null,
            diameter: null
        },
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updatePlanet();
        const intervalID = setInterval(this.updatePlanet, 10000);
    }

    onPlanetLoaded = (result) => {
        this.setState(
            {
                planet: result,
                loading: false
            })
    }
    onPlanetError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 19) + 2;
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onPlanetError);
    }


    render() {
        const {planet, loading, error} = this.state;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <PlanetView planet={planet}/> : null;
        const errorMessage = error ? <ErrorMessage/> : null
        return (
            <ErrorBoundry>
                <div className="random-planet jumbotron rounded">
                    {errorMessage}
                    {spinner}
                    {content}
                </div>
            </ErrorBoundry>
        );
    }
}

class PlanetView extends React.Component {
    render() {
        const {
            id, name, population,
            rotationPeriod, diameter
        } = this.props.planet;
        return (
            <React.Fragment>
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
                <ErrorButton/>
            </React.Fragment>
        );
    }
}
