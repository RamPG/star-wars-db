import React from "react";
import ItemDetails, {Record} from "../item-details/item-details";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImage: swapiService.getPlanetImage
    };
};

const PlanetDetails = (props) => {
    return (
        <ItemDetails
            {...props}
        >

            <Record field="population" label="Population"/>
            <Record field="rotationPeriod" label="Rotation Period"/>
            <Record field="diameter" label="Diameter"/>
        </ItemDetails>
    );
};

export default withSwapiService(PlanetDetails, mapPlanetMethodsToProps);