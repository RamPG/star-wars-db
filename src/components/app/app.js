import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends React.Component {
    state = {
        selectedPersonId: "1"
    }
    changePersonId = (id) => {
        this.setState({
            selectedPersonId: id
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <RandomPlanet/>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList changePersonId={this.changePersonId}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails selectedPersonId={this.state.selectedPersonId}/>
                    </div>
                </div>
            </div>
        );
    }
}