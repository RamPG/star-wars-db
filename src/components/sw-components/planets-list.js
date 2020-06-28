import React from "react";
import withDataList from "../hoc-helpers/with-data-list";
import ItemList from "../item-list";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};
export default withSwapiService(withDataList(ItemList), mapPlanetMethodsToProps);