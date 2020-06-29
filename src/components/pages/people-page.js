import React, {Component} from 'react';
import {PeopleList, PersonDetails} from '../sw-components';
import Row from '../row';

export default class PeoplePage extends Component {

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
                left={<PeopleList changeItemId={this.changeItemId}/>}
                right={<PersonDetails selectedItemId={selectedItemId}/>}/>
        );
    }

}
