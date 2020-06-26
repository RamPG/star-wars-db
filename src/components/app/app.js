import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context";

export default class App extends React.Component {
    swapiService = new SwapiService();
    render() {
        return (
            <div>
                <SwapiServiceProvider value={this.swapiService}>
                    <Header/>
                    <RandomPlanet/>
                    <PeoplePage/>
                </SwapiServiceProvider>
            </div>
        );
    }
}