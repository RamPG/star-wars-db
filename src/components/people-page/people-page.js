import React from 'react';
import Row from "../row";
import "./people-page.css";
import ErrorBoundry from "../error-boundry";
import {PeopleList, PersonDetails, PlanetDetails, PlanetsList} from "../sw-components";

export default class PeoplePage extends React.Component {
    state = {
        selectedItemId: "1"
    }
    changeItemId = (id) => {
        this.setState({
            selectedItemId: id
        })
    }

    render() {
        const itemList = (
            <PlanetsList
                changeItemId={this.changeItemId}
            />
        );
        const itemDetails = (
            <PlanetDetails
                selectedItemId={this.state.selectedItemId}
            />
        );
        return (
            <ErrorBoundry>
                <Row left={itemList} right={itemDetails}/>
            </ErrorBoundry>
        );
    }
}