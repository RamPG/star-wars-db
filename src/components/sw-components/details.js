import React from 'react';

import ItemDetails, {Record} from "../item-details/item-details";
import {SwapiServiceConsumer} from "../swapi-service-context";


const PersonDetails = ({selectedItemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPerson, getPersonImage}) => {
                    return (
                        <ItemDetails
                            selectedItemId={selectedItemId}
                            getData={getPerson}
                            getImage={getPersonImage}>

                            <Record field="gender" label="Gender"/>
                            <Record field="eyeColor" label="Eye Color"/>
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );

};

const PlanetDetails = ({selectedItemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImage}) => {
                    return (
                        <ItemDetails
                            selectedItemId={selectedItemId}
                            getData={getPlanet}
                            getImage={getPlanetImage}>

                            <Record field="population" label="Population"/>
                            <Record field="rotationPeriod" label="Rotation Period"/>
                            <Record field="diameter" label="Diameter"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    );
};

const StarshipDetails = ({selectedItemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getStarship, getStarshipImage}) => {
                    return (
                        <ItemDetails
                            selectedItemId={selectedItemId}
                            getData={getStarship}
                            getImage={getStarshipImage}>

                            <Record field="model" label="Model"/>
                            <Record field="length" label="Length"/>
                            <Record field="costInCredits" label="Cost"/>
                        </ItemDetails>
                    );
                }
            }
            };
        </SwapiServiceConsumer>
    );
};
export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};