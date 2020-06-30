import React from 'react';
import {withRouter} from 'react-router-dom';
import {PlanetDetails, PlanetsList} from '../sw-components';
import Row from '../row';

const PlanetsPage = ({match, history}) => {
    const {id} = match.params;
    return (
        <Row
            left={<PlanetsList changeItemId={(id) => history.push(id)}/>}
            right={<PlanetDetails selectedItemId={id}/>}
        />
    )
}
export default withRouter(PlanetsPage);