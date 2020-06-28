import React from "react";
import ItemDetails, {Record} from "../item-details/item-details";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImage: swapiService.getStarshipImage
    };
};

const StarshipDetails = (props) => {
    return (
        <ItemDetails
            {...props}
        >

            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="costInCredits" label="Cost"/>
        </ItemDetails>
    );

};

export default withSwapiService(StarshipDetails, mapPlanetMethodsToProps);