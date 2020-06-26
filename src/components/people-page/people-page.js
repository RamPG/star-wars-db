import React from 'react';
import Row from "../row";
import "./people-page.css";
import {Record} from "../item-details";
import ErrorBoundry from "../error-boundry";
import {PeopleList, PersonDetails} from "../sw-components";

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
            >
                <Record field="gender" label="Gender"/>
                <Record field="eyeColor" label="Eye Color"/>
            </PersonDetails>
        );
        return (
            <ErrorBoundry>
                <Row left={itemList} right={itemDetails}/>

            </ErrorBoundry>
        );
    }
}