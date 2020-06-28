import React from 'react';
import "./people-page.css";
import ErrorBoundry from "../error-boundry";
import {PeopleList, PersonDetails} from "../sw-components";
import PlanetDetails from "../sw-components/planet-details";
import StarshipDetails from "../sw-components/starship-details";

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
            <PeopleList
                changeItemId={this.changeItemId}
            />
        );
        const itemDetails = (
            <PersonDetails
                selectedItemId={this.state.selectedItemId}
            />
        );
        return (
            <ErrorBoundry>
                {itemList}
                {itemDetails}
                <PlanetDetails
                    selectedItemId={2}
                />
                <StarshipDetails
                    selectedItemId={5}
                />
            </ErrorBoundry>
        );
    }
}