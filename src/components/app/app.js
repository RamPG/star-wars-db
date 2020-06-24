import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorButton from "../error-button";
import ErrorMessage from "../error-message";
import PeoplePage from "../people-page";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <RandomPlanet/>
                <PeoplePage/>
            </div>
        );
    }
}