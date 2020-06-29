import React, {Component} from 'react';
import {StarshipDetails, StarshipsList} from '../sw-components';
import Row from '../row';

export default class StarshipsPage extends Component {

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
                left={<StarshipsList changeItemId={this.changeItemId}/>}
                right={<StarshipDetails selectedItemId={selectedItemId}/>}/>
        );
    }
}
