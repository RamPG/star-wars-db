import React from "react";
import ItemList from "../item-list/item-list";
import withDataList from "../hoc-helpers/with-data-list";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const PeopleList = withDataList(ItemList, swapiService.getAllPeople);
const StarshipsList = withDataList(ItemList, swapiService.getAllStarships);
const PlanetsList = withDataList(ItemList, swapiService.getAllPlanets);

export {
    PeopleList,
    StarshipsList,
    PlanetsList
};