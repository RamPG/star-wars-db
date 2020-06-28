import React from "react";
import withDataList from "../hoc-helpers/with-data-list";
import ItemList from "../item-list";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};
export default withSwapiService(withDataList(ItemList), mapStarshipMethodsToProps);