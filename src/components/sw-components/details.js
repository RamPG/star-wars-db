import React from "react";
import ItemDetails from "../item-details/item-details";
import withDataDetails from "../hoc-helpers/with-data-details";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();
const PersonDetails = withDataDetails(ItemDetails, swapiService.getPerson, swapiService.getPersonImage)
const StarshipDetails = withDataDetails(ItemDetails, swapiService.getStarship, swapiService.getStarshipImage)
const PlanetDetails = withDataDetails(ItemDetails, swapiService.getPlanet, swapiService.getPlanetImage);

export {
    PersonDetails,
    StarshipDetails,
    PlanetDetails
}