import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
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
                    <BrowserRouter>
                        <div className="stardb-app">
                            <Header/>

                            <RandomPlanet/>
                            <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact/>
                            <Route path="/people" component={PeoplePage}/>
                            <Route path="/planets" component={PlanetsPage}/>
                            <Route path="/starships" component={StarshipsPage}/>

                        </div>
                    </BrowserRouter>

                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}