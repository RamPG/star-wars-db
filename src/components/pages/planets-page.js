import React, {Component} from 'react';
import {PlanetDetails, PlanetsList} from '../sw-components';
import Row from '../row';

export default class PlanetsPage extends Component {

    state = {
        selectedItemId: "1"
    };

    changeItemId = (selectedItemId) => {
        this.setState({selectedItemId});
    };

    render() {
        const {selectedItemId} = this.state;

        return (
            <Row
                left={<PlanetsList changeItemId={this.changeItemId}/>}
                right={<PlanetDetails selectedItemId={selectedItemId}/>}/>
        );
    }
}
