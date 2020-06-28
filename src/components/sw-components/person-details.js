import React from "react";
import ItemDetails, {Record} from "../item-details/item-details";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImage: swapiService.getPersonImage
    };
};

const PersonDetails = (props) => {
    return (
        <ItemDetails
            {...props}
        >
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
    );

};

export default withSwapiService(PersonDetails, mapPersonMethodsToProps);