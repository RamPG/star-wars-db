import React from 'react';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from "../row";
import "./people-page.css";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";

export default class PeoplePage extends React.Component {
    swapiService = new SwapiService();
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
            <ItemList
                getData={this.swapiService.getAllPeople}
                changeItemId={this.changeItemId}
            />
        );
        const itemDetails = (
            <ItemDetails
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