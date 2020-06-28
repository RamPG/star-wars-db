import React from "react";
import withDataList from "../hoc-helpers/with-data-list";
import ItemList from "../item-list";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};
export default withSwapiService(withDataList(ItemList), mapPersonMethodsToProps);