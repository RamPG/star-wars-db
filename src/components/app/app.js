import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';

import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages';
import {SwapiServiceProvider} from '../swapi-service-context';

export default class App extends React.Component {
    swapiService = new SwapiService();

    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="stardb-app">
                        <Header/>

                        <RandomPlanet/>
                        <PeoplePage/>
                        <PlanetsPage/>
                        <StarshipsPage/>

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}